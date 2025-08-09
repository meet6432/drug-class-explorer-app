import { useState, useEffect } from 'react';
import { useSessionContext } from '@supabase/auth-helpers-react';
import { useNavigate } from 'react-router-dom';
import { Shield, Database, Users, BarChart3, FileText, Pill, Stethoscope, Calculator, AlertTriangle, Target, TestTube, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { toast } from 'sonner';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

const AdminDashboard = () => {
  const { session } = useSessionContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [selectedDifficulty, setSelectedDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');

  useEffect(() => {
    if (!session?.user?.email || session.user.email !== 'meetdobariya3568@gmail.com') {
      navigate('/');
    }
  }, [session, navigate]);

  // Quiz Questions Management
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
      toast.success(`${selectedDifficulty} quiz question added successfully!`);
    }
  });

  // Disease Data Management
  const { data: diseaseData } = useQuery({
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
    }
  });

  // Drug Classes Management
  const { data: drugClasses } = useQuery({
    queryKey: ['admin-drug-classes'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('drug_classes')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const addDrugClassMutation = useMutation({
    mutationFn: async (newDrugClass: any) => {
      const { error } = await supabase
        .from('drug_classes')
        .insert([newDrugClass]);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-drug-classes'] });
      toast.success('Drug class added successfully!');
    }
  });

  // Drug Interactions Management
  const { data: drugInteractions } = useQuery({
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
    }
  });

  // Side Effects Management
  const { data: sideEffects } = useQuery({
    queryKey: ['admin-side-effects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('drug_side_effects')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const addSideEffectMutation = useMutation({
    mutationFn: async (newSideEffect: any) => {
      const { error } = await supabase
        .from('drug_side_effects')
        .insert([newSideEffect]);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-side-effects'] });
      toast.success('Side effect added successfully!');
    }
  });

  // Clinical Cases Management
  const { data: clinicalCases } = useQuery({
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

  const addClinicalCaseMutation = useMutation({
    mutationFn: async (newCase: any) => {
      const { error } = await supabase
        .from('clinical_cases')
        .insert([newCase]);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-clinical-cases'] });
      toast.success('Clinical case added successfully!');
    }
  });

  // Symptom Cases Management
  const { data: symptomCases } = useQuery({
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

  const addSymptomCaseMutation = useMutation({
    mutationFn: async (newCase: any) => {
      const { error } = await supabase
        .from('symptom_cases')
        .insert([newCase]);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-symptom-cases'] });
      toast.success('Symptom case added successfully!');
    }
  });

  // Dosage Formulas Management
  const { data: dosageFormulas } = useQuery({
    queryKey: ['admin-dosage-formulas'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('dosage_formulas')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const addDosageFormulaMutation = useMutation({
    mutationFn: async (newFormula: any) => {
      const { error } = await supabase
        .from('dosage_formulas')
        .insert([newFormula]);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-dosage-formulas'] });
      toast.success('Dosage formula added successfully!');
    }
  });

  // Pharmacokinetics Data Management
  const { data: pharmacokineticsData } = useQuery({
    queryKey: ['admin-pharmacokinetics'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('pharmacokinetics_data')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const addPharmacokineticsDataMutation = useMutation({
    mutationFn: async (newData: any) => {
      const { error } = await supabase
        .from('pharmacokinetics_data')
        .insert([newData]);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-pharmacokinetics'] });
      toast.success('Pharmacokinetics data added successfully!');
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

  const handleAddDrugClass = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    const examples = formData.get('examples')?.toString().split(',').map(s => s.trim()).filter(Boolean) || [];

    addDrugClassMutation.mutate({
      name: formData.get('name'),
      category: formData.get('category'),
      description: formData.get('description'),
      mechanism: formData.get('mechanism'),
      uses: formData.get('uses'),
      side_effects: formData.get('sideEffects'),
      examples: examples
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

  const handleAddSideEffect = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    addSideEffectMutation.mutate({
      drug_name: formData.get('drugName'),
      side_effect: formData.get('sideEffect'),
      frequency: formData.get('frequency'),
      frequency_percentage: formData.get('frequencyPercentage'),
      severity: formData.get('severity'),
      onset_time: formData.get('onsetTime'),
      body_system: formData.get('bodySystem'),
      description: formData.get('description'),
      management: formData.get('management'),
      monitoring_required: formData.get('monitoringRequired') === 'true'
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

    addClinicalCaseMutation.mutate({
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

  const handleAddSymptomCase = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    const symptoms = formData.get('symptoms')?.toString().split(',').map(s => s.trim()).filter(Boolean) || [];
    const options = formData.get('options')?.toString().split('\n').filter(Boolean) || [];

    addSymptomCaseMutation.mutate({
      case_id: `SYMPTOM${Date.now()}`,
      patient_profile: formData.get('patientProfile'),
      symptoms: JSON.stringify(symptoms),
      question: formData.get('question'),
      options: JSON.stringify(options),
      correct_answer: formData.get('correctAnswer'),
      explanation: formData.get('explanation')
    });

    (e.target as HTMLFormElement).reset();
  };

  const handleAddDosageFormula = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    const parameters = formData.get('parameters')?.toString().split(',').map(s => s.trim()).filter(Boolean) || [];
    const safetyLimits = formData.get('safetyLimits')?.toString().split(',').map(s => s.trim()).filter(Boolean) || [];

    addDosageFormulaMutation.mutate({
      drug_name: formData.get('drugName'),
      indication: formData.get('indication'),
      formula_type: formData.get('formulaType'),
      formula: formData.get('formula'),
      units: formData.get('units'),
      parameters: JSON.stringify(parameters),
      safety_limits: JSON.stringify(safetyLimits),
      special_populations: JSON.stringify([]),
      contraindications: JSON.stringify([])
    });

    (e.target as HTMLFormElement).reset();
  };

  const handleAddPharmacokineticsData = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    addPharmacokineticsDataMutation.mutate({
      drug_name: formData.get('drugName'),
      route_of_administration: formData.get('route'),
      absorption_rate: parseFloat(formData.get('absorptionRate')?.toString() || '0'),
      distribution_volume: parseFloat(formData.get('distributionVolume')?.toString() || '0'),
      elimination_half_life: parseFloat(formData.get('halfLife')?.toString() || '0'),
      clearance: parseFloat(formData.get('clearance')?.toString() || '0'),
      bioavailability: parseFloat(formData.get('bioavailability')?.toString() || '0'),
      protein_binding: parseFloat(formData.get('proteinBinding')?.toString() || '0'),
      peak_time: parseFloat(formData.get('peakTime')?.toString() || '0'),
      peak_concentration: parseFloat(formData.get('peakConcentration')?.toString() || '0'),
      dosing_frequency: formData.get('dosingFrequency'),
      metabolism_pathway: JSON.stringify([]),
      excretion_route: JSON.stringify([])
    });

    (e.target as HTMLFormElement).reset();
  };

  const handleAddDisease = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    const symptoms = formData.get('symptoms')?.toString().split(',').map(s => s.trim()).filter(Boolean) || [];
    const associatedSymptoms = formData.get('associatedSymptoms')?.toString().split(',').map(s => s.trim()).filter(Boolean) || [];
    const drugRecommendations = formData.get('drugRecommendations')?.toString().split(',').map(s => s.trim()).filter(Boolean) || [];
    const generalAdvice = formData.get('generalAdvice')?.toString().split(',').map(s => s.trim()).filter(Boolean) || [];
    const whenToSeeDoctor = formData.get('whenToSeeDoctor')?.toString().split(',').map(s => s.trim()).filter(Boolean) || [];

    addDiseaseMutation.mutate({
      disease_id: `DISEASE${Date.now()}`,
      name: formData.get('name'),
      category: formData.get('category'),
      severity: formData.get('severity'),
      description: formData.get('description'),
      symptoms: JSON.stringify(symptoms),
      associated_symptoms: JSON.stringify(associatedSymptoms),
      drug_recommendations: JSON.stringify(drugRecommendations),
      general_advice: JSON.stringify(generalAdvice),
      when_to_see_doctor: JSON.stringify(whenToSeeDoctor)
    });

    (e.target as HTMLFormElement).reset();
  };

  if (!session?.user?.email || session.user.email !== 'meetdobariya3568@gmail.com') {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            </div>
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="quiz" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-9">
            <TabsTrigger value="quiz" className="text-xs">Quiz</TabsTrigger>
            <TabsTrigger value="diseases" className="text-xs">Diseases</TabsTrigger>
            <TabsTrigger value="drug-classes" className="text-xs">Drug Classes</TabsTrigger>
            <TabsTrigger value="interactions" className="text-xs">Interactions</TabsTrigger>
            <TabsTrigger value="side-effects" className="text-xs">Side Effects</TabsTrigger>
            <TabsTrigger value="clinical-cases" className="text-xs">Clinical Cases</TabsTrigger>
            <TabsTrigger value="symptoms" className="text-xs">Symptoms</TabsTrigger>
            <TabsTrigger value="dosage" className="text-xs">Dosage</TabsTrigger>
            <TabsTrigger value="pharmacokinetics" className="text-xs">Pharmacokinetics</TabsTrigger>
          </TabsList>

          <TabsContent value="quiz" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5" />
                    <span>Add Quiz Question</span>
                  </div>
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
                  <Textarea name="question" placeholder="Question" required />
                  <div className="grid grid-cols-2 gap-4">
                    <Input name="option1" placeholder="Option 1" required />
                    <Input name="option2" placeholder="Option 2" required />
                    <Input name="option3" placeholder="Option 3" required />
                    <Input name="option4" placeholder="Option 4" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input name="correctAnswer" placeholder="Correct Answer" required />
                    <Input name="category" placeholder="Category" required />
                  </div>
                  <Textarea name="explanation" placeholder="Explanation" required />
                  <Button type="submit" disabled={addQuizMutation.isPending}>
                    {addQuizMutation.isPending ? 'Adding...' : `Add ${selectedDifficulty} Question`}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)} Questions ({quizQuestions?.length || 0})</CardTitle>
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
                    {quizQuestions?.slice(0, 10).map((question: any) => (
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

          <TabsContent value="diseases" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Stethoscope className="h-5 w-5" />
                  <span>Add Disease</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddDisease} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input name="name" placeholder="Disease Name" required />
                    <Input name="category" placeholder="Category" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Select name="severity" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Severity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Mild">Mild</SelectItem>
                        <SelectItem value="Moderate">Moderate</SelectItem>
                        <SelectItem value="Severe">Severe</SelectItem>
                        <SelectItem value="Critical">Critical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Textarea name="description" placeholder="Description" required />
                  <Textarea name="symptoms" placeholder="Symptoms (comma separated)" required />
                  <Textarea name="associatedSymptoms" placeholder="Associated Symptoms (comma separated)" />
                  <Textarea name="drugRecommendations" placeholder="Drug Recommendations (comma separated)" />
                  <Textarea name="generalAdvice" placeholder="General Advice (comma separated)" />
                  <Textarea name="whenToSeeDoctor" placeholder="When to See Doctor (comma separated)" />
                  <Button type="submit" disabled={addDiseaseMutation.isPending}>
                    {addDiseaseMutation.isPending ? 'Adding...' : 'Add Disease'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Diseases ({diseaseData?.length || 0})</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Severity</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {diseaseData?.slice(0, 10).map((disease) => (
                      <TableRow key={disease.id}>
                        <TableCell>{disease.name}</TableCell>
                        <TableCell>{disease.category}</TableCell>
                        <TableCell>{disease.severity}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="drug-classes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Pill className="h-5 w-5" />
                  <span>Add Drug Class</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddDrugClass} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input name="name" placeholder="Drug Class Name" required />
                    <Input name="category" placeholder="Category" required />
                  </div>
                  <Textarea name="description" placeholder="Description" required />
                  <Textarea name="mechanism" placeholder="Mechanism of Action" required />
                  <Textarea name="uses" placeholder="Clinical Uses" required />
                  <Textarea name="sideEffects" placeholder="Side Effects" required />
                  <Input name="examples" placeholder="Examples (comma separated)" />
                  <Button type="submit" disabled={addDrugClassMutation.isPending}>
                    {addDrugClassMutation.isPending ? 'Adding...' : 'Add Drug Class'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Drug Classes ({drugClasses?.length || 0})</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Created</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {drugClasses?.slice(0, 10).map((drugClass) => (
                      <TableRow key={drugClass.id}>
                        <TableCell>{drugClass.name}</TableCell>
                        <TableCell>{drugClass.category}</TableCell>
                        <TableCell>{new Date(drugClass.created_at).toLocaleDateString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="interactions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5" />
                  <span>Add Drug Interaction</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddDrugInteraction} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input name="drug1" placeholder="Drug 1" required />
                    <Input name="drug2" placeholder="Drug 2" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Select name="interactionType" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Interaction Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pharmacokinetic">Pharmacokinetic</SelectItem>
                        <SelectItem value="pharmacodynamic">Pharmacodynamic</SelectItem>
                        <SelectItem value="additive">Additive</SelectItem>
                        <SelectItem value="antagonistic">Antagonistic</SelectItem>
                        <SelectItem value="synergistic">Synergistic</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select name="severityLevel" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Severity (1-5)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 - Mild</SelectItem>
                        <SelectItem value="2">2 - Moderate</SelectItem>
                        <SelectItem value="3">3 - Significant</SelectItem>
                        <SelectItem value="4">4 - Severe</SelectItem>
                        <SelectItem value="5">5 - Critical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Textarea name="description" placeholder="Description" required />
                  <Textarea name="mechanism" placeholder="Mechanism" />
                  <Textarea name="clinicalEffects" placeholder="Clinical Effects (comma separated)" />
                  <Textarea name="management" placeholder="Management Recommendations" />
                  <Button type="submit" disabled={addInteractionMutation.isPending}>
                    {addInteractionMutation.isPending ? 'Adding...' : 'Add Interaction'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Drug Interactions ({drugInteractions?.length || 0})</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Drug 1</TableHead>
                      <TableHead>Drug 2</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Severity</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {drugInteractions?.slice(0, 10).map((interaction) => (
                      <TableRow key={interaction.id}>
                        <TableCell>{interaction.drug1_name}</TableCell>
                        <TableCell>{interaction.drug2_name}</TableCell>
                        <TableCell>{interaction.interaction_type}</TableCell>
                        <TableCell>{interaction.severity_level}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="side-effects" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5" />
                  <span>Add Side Effect</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddSideEffect} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input name="drugName" placeholder="Drug Name" required />
                    <Input name="sideEffect" placeholder="Side Effect" required />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <Select name="frequency" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Very common">Very common (≥1/10)</SelectItem>
                        <SelectItem value="Common">Common (≥1/100 to &lt;1/10)</SelectItem>
                        <SelectItem value="Uncommon">Uncommon (≥1/1,000 to &lt;1/100)</SelectItem>
                        <SelectItem value="Rare">Rare (≥1/10,000 to &lt;1/1,000)</SelectItem>
                        <SelectItem value="Very rare">Very rare (&lt;1/10,000)</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input name="frequencyPercentage" placeholder="Frequency %" />
                    <Select name="severity" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Severity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Mild">Mild</SelectItem>
                        <SelectItem value="Moderate">Moderate</SelectItem>
                        <SelectItem value="Severe">Severe</SelectItem>
                        <SelectItem value="Life-threatening">Life-threatening</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input name="onsetTime" placeholder="Onset Time" />
                    <Input name="bodySystem" placeholder="Body System" required />
                  </div>
                  <Textarea name="description" placeholder="Description" />
                  <Textarea name="management" placeholder="Management" />
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" name="monitoringRequired" value="true" />
                    <label>Monitoring Required</label>
                  </div>
                  <Button type="submit" disabled={addSideEffectMutation.isPending}>
                    {addSideEffectMutation.isPending ? 'Adding...' : 'Add Side Effect'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Side Effects ({sideEffects?.length || 0})</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Drug</TableHead>
                      <TableHead>Side Effect</TableHead>
                      <TableHead>Frequency</TableHead>
                      <TableHead>Severity</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sideEffects?.slice(0, 10).map((effect) => (
                      <TableRow key={effect.id}>
                        <TableCell>{effect.drug_name}</TableCell>
                        <TableCell>{effect.side_effect}</TableCell>
                        <TableCell>{effect.frequency}</TableCell>
                        <TableCell>{effect.severity}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="clinical-cases" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Stethoscope className="h-5 w-5" />
                  <span>Add Clinical Case</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddClinicalCase} className="space-y-4">
                  <Input name="title" placeholder="Case Title" required />
                  <div className="grid grid-cols-3 gap-4">
                    <Input name="age" type="number" placeholder="Patient Age" required />
                    <Select name="gender" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input name="weight" type="number" placeholder="Weight (kg)" />
                  </div>
                  <Textarea name="medicalHistory" placeholder="Medical History (comma separated)" />
                  <Textarea name="presentation" placeholder="Initial Presentation" required />
                  <Textarea name="scenario" placeholder="Case Scenario" required />
                  <Textarea name="question" placeholder="Question" required />
                  <Textarea name="options" placeholder="Options (one per line)" required />
                  <Input name="correctAnswer" placeholder="Correct Answer" required />
                  <Textarea name="explanation" placeholder="Explanation" required />
                  <div className="grid grid-cols-3 gap-4">
                    <Select name="difficulty" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Difficulty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input name="category" placeholder="Category" required />
                    <Input name="duration" type="number" placeholder="Duration (min)" />
                  </div>
                  <Button type="submit" disabled={addClinicalCaseMutation.isPending}>
                    {addClinicalCaseMutation.isPending ? 'Adding...' : 'Add Clinical Case'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Clinical Cases ({clinicalCases?.length || 0})</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Difficulty</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Duration</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {clinicalCases?.slice(0, 10).map((caseItem) => (
                      <TableRow key={caseItem.id}>
                        <TableCell>{caseItem.title}</TableCell>
                        <TableCell>{caseItem.difficulty_level}</TableCell>
                        <TableCell>{caseItem.category}</TableCell>
                        <TableCell>{caseItem.estimated_duration} min</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="symptoms" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5" />
                  <span>Add Symptom Case</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddSymptomCase} className="space-y-4">
                  <Textarea name="patientProfile" placeholder="Patient Profile" required />
                  <Textarea name="symptoms" placeholder="Symptoms (comma separated)" required />
                  <Textarea name="question" placeholder="Question" required />
                  <Textarea name="options" placeholder="Options (one per line)" required />
                  <Input name="correctAnswer" placeholder="Correct Answer" required />
                  <Textarea name="explanation" placeholder="Explanation" required />
                  <Button type="submit" disabled={addSymptomCaseMutation.isPending}>
                    {addSymptomCaseMutation.isPending ? 'Adding...' : 'Add Symptom Case'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Symptom Cases ({symptomCases?.length || 0})</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Patient Profile</TableHead>
                      <TableHead>Question</TableHead>
                      <TableHead>Created</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {symptomCases?.slice(0, 10).map((caseItem) => (
                      <TableRow key={caseItem.id}>
                        <TableCell className="max-w-xs truncate">{caseItem.patient_profile}</TableCell>
                        <TableCell className="max-w-md truncate">{caseItem.question}</TableCell>
                        <TableCell>{new Date(caseItem.created_at).toLocaleDateString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dosage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calculator className="h-5 w-5" />
                  <span>Add Dosage Formula</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddDosageFormula} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input name="drugName" placeholder="Drug Name" required />
                    <Input name="indication" placeholder="Indication" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Select name="formulaType" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Formula Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weight-based">Weight-based</SelectItem>
                        <SelectItem value="surface-area-based">Surface Area-based</SelectItem>
                        <SelectItem value="age-based">Age-based</SelectItem>
                        <SelectItem value="kidney-function-based">Kidney Function-based</SelectItem>
                        <SelectItem value="fixed-dose">Fixed Dose</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input name="units" placeholder="Units" required />
                  </div>
                  <Textarea name="formula" placeholder="Formula" required />
                  <Textarea name="parameters" placeholder="Parameters (comma separated)" />
                  <Textarea name="safetyLimits" placeholder="Safety Limits (comma separated)" />
                  <Button type="submit" disabled={addDosageFormulaMutation.isPending}>
                    {addDosageFormulaMutation.isPending ? 'Adding...' : 'Add Dosage Formula'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dosage Formulas ({dosageFormulas?.length || 0})</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Drug</TableHead>
                      <TableHead>Indication</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Units</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dosageFormulas?.slice(0, 10).map((formula) => (
                      <TableRow key={formula.id}>
                        <TableCell>{formula.drug_name}</TableCell>
                        <TableCell>{formula.indication}</TableCell>
                        <TableCell>{formula.formula_type}</TableCell>
                        <TableCell>{formula.units}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pharmacokinetics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TestTube className="h-5 w-5" />
                  <span>Add Pharmacokinetics Data</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddPharmacokineticsData} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input name="drugName" placeholder="Drug Name" required />
                    <Select name="route" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Route of Administration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="oral">Oral</SelectItem>
                        <SelectItem value="intravenous">Intravenous</SelectItem>
                        <SelectItem value="intramuscular">Intramuscular</SelectItem>
                        <SelectItem value="subcutaneous">Subcutaneous</SelectItem>
                        <SelectItem value="topical">Topical</SelectItem>
                        <SelectItem value="inhalation">Inhalation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <Input name="absorptionRate" type="number" step="0.01" placeholder="Absorption Rate" />
                    <Input name="distributionVolume" type="number" step="0.01" placeholder="Distribution Volume (L)" />
                    <Input name="halfLife" type="number" step="0.01" placeholder="Half-life (hours)" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <Input name="clearance" type="number" step="0.01" placeholder="Clearance (L/h)" />
                    <Input name="bioavailability" type="number" step="0.01" placeholder="Bioavailability (%)" />
                    <Input name="proteinBinding" type="number" step="0.01" placeholder="Protein Binding (%)" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <Input name="peakTime" type="number" step="0.01" placeholder="Peak Time (hours)" />
                    <Input name="peakConcentration" type="number" step="0.01" placeholder="Peak Concentration" />
                    <Input name="dosingFrequency" placeholder="Dosing Frequency" />
                  </div>
                  <Button type="submit" disabled={addPharmacokineticsDataMutation.isPending}>
                    {addPharmacokineticsDataMutation.isPending ? 'Adding...' : 'Add Pharmacokinetics Data'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pharmacokinetics Data ({pharmacokineticsData?.length || 0})</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Drug</TableHead>
                      <TableHead>Route</TableHead>
                      <TableHead>Half-life</TableHead>
                      <TableHead>Bioavailability</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pharmacokineticsData?.slice(0, 10).map((data) => (
                      <TableRow key={data.id}>
                        <TableCell>{data.drug_name}</TableCell>
                        <TableCell>{data.route_of_administration}</TableCell>
                        <TableCell>{data.elimination_half_life}h</TableCell>
                        <TableCell>{data.bioavailability}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;