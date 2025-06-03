
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { toast } from 'sonner';

const DataManagement: React.FC = () => {
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState('quiz');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');

  // Quiz Questions Management for specific difficulty
  const { data: quizQuestions, isLoading: loadingQuiz } = useQuery({
    queryKey: ['admin-quiz-questions', selectedDifficulty],
    queryFn: async () => {
      const tableName = `${selectedDifficulty}_quiz_questions`;
      const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const addQuizMutation = useMutation({
    mutationFn: async (newQuestion: any) => {
      const tableName = `${selectedDifficulty}_quiz_questions`;
      const { error } = await supabase
        .from(tableName)
        .insert([newQuestion]);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-quiz-questions', selectedDifficulty] });
      toast.success(`${selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)} quiz question added successfully!`);
    },
    onError: (error) => {
      toast.error('Failed to add quiz question: ' + error.message);
    }
  });

  // Disease Data Management
  const { data: diseaseData, isLoading: loadingDiseases } = useQuery({
    queryKey: ['admin-disease-data'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('disease_lookup')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const addDiseaseMutation = useMutation({
    mutationFn: async (newDisease: any) => {
      const { error } = await supabase
        .from('disease_lookup')
        .insert([newDisease]);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-disease-data'] });
      toast.success('Disease data added successfully!');
    },
    onError: (error) => {
      toast.error('Failed to add disease data: ' + error.message);
    }
  });

  // Symptom Cases Management
  const { data: symptomCases, isLoading: loadingSymptoms } = useQuery({
    queryKey: ['admin-symptom-cases'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('symptom_cases')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const addSymptomMutation = useMutation({
    mutationFn: async (newCase: any) => {
      const { error } = await supabase
        .from('symptom_cases')
        .insert([newCase]);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-symptom-cases'] });
      toast.success('Symptom case added successfully!');
    },
    onError: (error) => {
      toast.error('Failed to add symptom case: ' + error.message);
    }
  });

  const handleAddQuizQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    const options = [
      formData.get('option1'),
      formData.get('option2'),
      formData.get('option3'),
      formData.get('option4')
    ].filter(Boolean);

    addQuizMutation.mutate({
      question_id: `${selectedDifficulty}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      question: formData.get('question'),
      options: options,
      correct_answer: formData.get('correctAnswer'),
      explanation: formData.get('explanation'),
      category: formData.get('category')
    });

    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Data Management</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="quiz">Quiz Questions</TabsTrigger>
          <TabsTrigger value="diseases">Disease Lookup</TabsTrigger>
          <TabsTrigger value="symptoms">Symptom Cases</TabsTrigger>
        </TabsList>

        <TabsContent value="quiz" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Add New Quiz Question
                <Select value={selectedDifficulty} onValueChange={(value: 'easy' | 'medium' | 'hard') => setSelectedDifficulty(value)}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="easy">Easy</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddQuizQuestion} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Question</label>
                    <Textarea name="question" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Explanation</label>
                    <Textarea name="explanation" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Option 1</label>
                    <Input name="option1" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Option 2</label>
                    <Input name="option2" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Option 3</label>
                    <Input name="option3" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Option 4</label>
                    <Input name="option4" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Correct Answer</label>
                    <Input name="correctAnswer" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <Input name="category" required />
                  </div>
                </div>
                
                <Button type="submit" disabled={addQuizMutation.isPending}>
                  {addQuizMutation.isPending ? 'Adding...' : `Add ${selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)} Question`}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)} Quiz Questions</CardTitle>
            </CardHeader>
            <CardContent>
              {loadingQuiz ? (
                <p>Loading...</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Question</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Created</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {quizQuestions?.map((question) => (
                      <TableRow key={question.id}>
                        <TableCell className="max-w-md truncate">{question.question}</TableCell>
                        <TableCell>{question.category}</TableCell>
                        <TableCell>{new Date(question.created_at).toLocaleDateString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="diseases">
          <Card>
            <CardHeader>
              <CardTitle>Disease Lookup Data</CardTitle>
            </CardHeader>
            <CardContent>
              {loadingDiseases ? (
                <p>Loading...</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Severity</TableHead>
                      <TableHead>Created</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {diseaseData?.map((disease) => (
                      <TableRow key={disease.id}>
                        <TableCell>{disease.name}</TableCell>
                        <TableCell>{disease.category}</TableCell>
                        <TableCell>{disease.severity}</TableCell>
                        <TableCell>{new Date(disease.created_at).toLocaleDateString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="symptoms">
          <Card>
            <CardHeader>
              <CardTitle>Symptom Cases</CardTitle>
            </CardHeader>
            <CardContent>
              {loadingSymptoms ? (
                <p>Loading...</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Patient Profile</TableHead>
                      <TableHead>Question</TableHead>
                      <TableHead>Created</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {symptomCases?.map((case_item) => (
                      <TableRow key={case_item.id}>
                        <TableCell>{case_item.patient_profile}</TableCell>
                        <TableCell className="max-w-md truncate">{case_item.question}</TableCell>
                        <TableCell>{new Date(case_item.created_at).toLocaleDateString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DataManagement;
