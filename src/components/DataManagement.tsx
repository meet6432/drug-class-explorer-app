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
      let query;
      
      if (selectedDifficulty === 'easy') {
        query = supabase.from('easy_quiz_questions').select('*').order('created_at', { ascending: false });
      } else if (selectedDifficulty === 'medium') {
        query = supabase.from('medium_quiz_questions').select('*').order('created_at', { ascending: false });
      } else {
        query = supabase.from('hard_quiz_questions').select('*').order('created_at', { ascending: false });
      }

      const { data, error } = await query;
      
      if (error) throw error;
      return data;
    }
  });

  const addQuizMutation = useMutation({
    mutationFn: async (newQuestion: any) => {
      let query;
      
      if (selectedDifficulty === 'easy') {
        query = supabase.from('easy_quiz_questions').insert([newQuestion]);
      } else if (selectedDifficulty === 'medium') {
        query = supabase.from('medium_quiz_questions').insert([newQuestion]);
      } else {
        query = supabase.from('hard_quiz_questions').insert([newQuestion]);
      }

      const { error } = await query;
      
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

  // Drug Interactions Management
  const { data: drugInteractions, isLoading: loadingInteractions } = useQuery({
    queryKey: ['admin-drug-interactions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('drug_interactions')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const addInteractionMutation = useMutation({
    mutationFn: async (newInteraction: any) => {
      const { error } = await supabase
        .from('drug_interactions')
        .insert([newInteraction]);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-drug-interactions'] });
      toast.success('Drug interaction added successfully!');
    },
    onError: (error) => {
      toast.error('Failed to add drug interaction: ' + error.message);
    }
  });

  // Clinical Cases Management
  const { data: clinicalCases, isLoading: loadingCases } = useQuery({
    queryKey: ['admin-clinical-cases'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('clinical_cases')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const addCaseMutation = useMutation({
    mutationFn: async (newCase: any) => {
      const { error } = await supabase
        .from('clinical_cases')
        .insert([newCase]);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-clinical-cases'] });
      toast.success('Clinical case added successfully!');
    },
    onError: (error) => {
      toast.error('Failed to add clinical case: ' + error.message);
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

  const handleAddDrugInteraction = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    const clinicalEffects = formData.get('clinicalEffects')?.toString().split(',').map(s => s.trim()).filter(Boolean) || [];

    addInteractionMutation.mutate({
      drug1_name: formData.get('drug1'),
      drug2_name: formData.get('drug2'),
      interaction_type: formData.get('interactionType'),
      severity_level: parseInt(formData.get('severityLevel')?.toString() || '1'),
      description: formData.get('description'),
      mechanism: formData.get('mechanism'),
      clinical_effects: JSON.stringify(clinicalEffects),
      management_recommendations: formData.get('management')
    });

    (e.target as HTMLFormElement).reset();
  };

  const handleAddClinicalCase = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    const patientInfo = {
      age: parseInt(formData.get('age')?.toString() || '0'),
      gender: formData.get('gender'),
      weight: parseInt(formData.get('weight')?.toString() || '0'),
      medical_history: formData.get('medicalHistory')?.toString().split(',').map(s => s.trim()).filter(Boolean) || []
    };

    const steps = [{
      step: 1,
      scenario: formData.get('scenario'),
      question: formData.get('question'),
      options: formData.get('options')?.toString().split('\n').filter(Boolean) || [],
      correct: formData.get('correctAnswer'),
      explanation: formData.get('explanation')
    }];

    addCaseMutation.mutate({
      case_id: `CASE${Date.now()}`,
      title: formData.get('title'),
      patient_info: JSON.stringify(patientInfo),
      initial_presentation: formData.get('presentation'),
      steps: JSON.stringify(steps),
      learning_objectives: JSON.stringify([]),
      difficulty_level: formData.get('difficulty'),
      category: formData.get('category'),
      estimated_duration: parseInt(formData.get('duration')?.toString() || '30')
    });

    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Data Management</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="quiz">Quiz Questions</TabsTrigger>
          <TabsTrigger value="diseases">Disease Lookup</TabsTrigger>
          <TabsTrigger value="symptoms">Symptom Cases</TabsTrigger>
          <TabsTrigger value="interactions">Drug Interactions</TabsTrigger>
          <TabsTrigger value="cases">Clinical Cases</TabsTrigger>
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

        <TabsContent value="interactions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Add New Drug Interaction</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddDrugInteraction} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Drug 1</label>
                    <Input name="drug1" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Drug 2</label>
                    <Input name="drug2" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Interaction Type</label>
                    <Select name="interactionType" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="major">Major</SelectItem>
                        <SelectItem value="moderate">Moderate</SelectItem>
                        <SelectItem value="minor">Minor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Severity Level (1-5)</label>
                    <Input name="severityLevel" type="number" min="1" max="5" required />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <Textarea name="description" required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Mechanism</label>
                  <Textarea name="mechanism" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Clinical Effects (comma-separated)</label>
                  <Textarea name="clinicalEffects" placeholder="effect1, effect2, effect3" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Management Recommendations</label>
                  <Textarea name="management" />
                </div>
                
                <Button type="submit" disabled={addInteractionMutation.isPending}>
                  {addInteractionMutation.isPending ? 'Adding...' : 'Add Drug Interaction'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Drug Interactions</CardTitle>
            </CardHeader>
            <CardContent>
              {loadingInteractions ? (
                <p>Loading...</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Drug 1</TableHead>
                      <TableHead>Drug 2</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Severity</TableHead>
                      <TableHead>Created</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {drugInteractions?.map((interaction) => (
                      <TableRow key={interaction.id}>
                        <TableCell>{interaction.drug1_name}</TableCell>
                        <TableCell>{interaction.drug2_name}</TableCell>
                        <TableCell>{interaction.interaction_type}</TableCell>
                        <TableCell>{interaction.severity_level}</TableCell>
                        <TableCell>{new Date(interaction.created_at).toLocaleDateString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cases" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Add New Clinical Case</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddClinicalCase} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Case Title</label>
                    <Input name="title" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <Input name="category" placeholder="e.g., cardiology, neurology" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Patient Age</label>
                    <Input name="age" type="number" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Patient Gender</label>
                    <Select name="gender" required>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Patient Weight (kg)</label>
                    <Input name="weight" type="number" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Medical History (comma-separated)</label>
                  <Input name="medicalHistory" placeholder="diabetes, hypertension, etc." />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Initial Presentation</label>
                  <Textarea name="presentation" required />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Difficulty Level</label>
                    <Select name="difficulty" required>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Duration (minutes)</label>
                    <Input name="duration" type="number" defaultValue="30" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Scenario Description</label>
                  <Textarea name="scenario" required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Question</label>
                  <Textarea name="question" required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Options (one per line)</label>
                  <Textarea name="options" rows={4} required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Correct Answer</label>
                  <Input name="correctAnswer" required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Explanation</label>
                  <Textarea name="explanation" required />
                </div>
                
                <Button type="submit" disabled={addCaseMutation.isPending}>
                  {addCaseMutation.isPending ? 'Adding...' : 'Add Clinical Case'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Clinical Cases</CardTitle>
            </CardHeader>
            <CardContent>
              {loadingCases ? (
                <p>Loading...</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Difficulty</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Created</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {clinicalCases?.map((case_item) => (
                      <TableRow key={case_item.id}>
                        <TableCell className="max-w-md truncate">{case_item.title}</TableCell>
                        <TableCell>{case_item.category}</TableCell>
                        <TableCell>{case_item.difficulty_level}</TableCell>
                        <TableCell>{case_item.estimated_duration} min</TableCell>
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
