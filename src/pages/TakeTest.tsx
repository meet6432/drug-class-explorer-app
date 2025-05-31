
import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const TakeTest = () => {
  const { shareLink } = useParams();
  const session = useSession();
  const supabase = useSupabaseClient();
  const { toast } = useToast();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [testStarted, setTestStarted] = useState(false);

  // Redirect to auth if not logged in
  if (!session) {
    return <Navigate to="/auth" replace />;
  }

  const { data: test, isLoading } = useQuery({
    queryKey: ['test', shareLink],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('teacher_tests')
        .select('*')
        .eq('share_link', shareLink)
        .eq('is_active', true)
        .single();
      
      if (error) throw error;
      return data;
    },
    enabled: !!shareLink,
  });

  const { data: profile } = useQuery({
    queryKey: ['profile', session.user.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();
      
      if (error) throw error;
      return data;
    },
    enabled: !!session?.user?.id,
  });

  // Initialize student name from profile
  useEffect(() => {
    if (profile?.full_name && !studentName) {
      setStudentName(profile.full_name);
    }
  }, [profile, studentName]);

  // Timer logic
  useEffect(() => {
    if (test?.time_limit && testStarted && timeLeft === null) {
      setTimeLeft(test.time_limit * 60); // Convert minutes to seconds
    }
  }, [test, testStarted, timeLeft]);

  useEffect(() => {
    if (timeLeft !== null && timeLeft > 0 && testStarted && !isSubmitted) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isSubmitted) {
      handleSubmit();
    }
  }, [timeLeft, testStarted, isSubmitted]);

  const handleAnswer = (questionIndex: number, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: answer
    }));
  };

  const handleSubmit = async () => {
    if (!test || !studentName.trim()) {
      toast({
        title: "Error",
        description: "Please enter your name before submitting.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Calculate score
      const questions = Array.isArray(test.questions) ? test.questions : [];
      let score = 0;
      
      questions.forEach((question: any, index: number) => {
        if (answers[index] === question.correctAnswer) {
          score++;
        }
      });

      // Submit to database
      const { error } = await supabase
        .from('test_submissions')
        .insert({
          test_id: test.id,
          student_id: session.user.id,
          student_name: studentName.trim(),
          answers: answers,
          score: score,
          total_questions: questions.length
        });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Test Submitted!",
        description: `Your score: ${score}/${questions.length}`,
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading test...</p>
        </div>
      </div>
    );
  }

  if (!test) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center text-red-600">Test Not Found</CardTitle>
            <CardDescription className="text-center">
              The test you're looking for doesn't exist or has been deactivated.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  const questions = Array.isArray(test.questions) ? test.questions : [];

  if (!testStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>{test.title}</CardTitle>
            <CardDescription>{test.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="studentName">Your Name</Label>
              <Input
                id="studentName"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div className="text-sm text-gray-600">
              <p>• Questions: {questions.length}</p>
              {test.time_limit && <p>• Time Limit: {test.time_limit} minutes</p>}
              <p>• You can't go back once you move to the next question</p>
            </div>

            <Button 
              onClick={() => setTestStarted(true)} 
              className="w-full"
              disabled={!studentName.trim()}
            >
              Start Test
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isSubmitted) {
    const score = questions.reduce((acc: number, question: any, index: number) => {
      return acc + (answers[index] === question.correctAnswer ? 1 : 0);
    }, 0);

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
              score >= questions.length * 0.7 ? 'bg-green-100' : 'bg-red-100'
            }`}>
              {score >= questions.length * 0.7 ? (
                <CheckCircle className="h-8 w-8 text-green-600" />
              ) : (
                <XCircle className="h-8 w-8 text-red-600" />
              )}
            </div>
            <CardTitle>Test Completed!</CardTitle>
            <CardDescription>
              Thank you for taking the test, {studentName}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="text-3xl font-bold">
              {score}/{questions.length}
            </div>
            <div className="text-sm text-gray-600">
              Your score: {Math.round((score / questions.length) * 100)}%
            </div>
            <Button onClick={() => window.close()} className="w-full">
              Close Window
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{test.title}</h1>
            <p className="text-gray-600">Student: {studentName}</p>
          </div>
          {timeLeft !== null && (
            <div className="flex items-center space-x-2 text-lg font-semibold">
              <Clock className="h-5 w-5" />
              <span className={timeLeft < 300 ? 'text-red-600' : 'text-gray-700'}>
                {formatTime(timeLeft)}
              </span>
            </div>
          )}
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
            <span>{Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}% Complete</span>
          </div>
          <Progress value={((currentQuestionIndex + 1) / questions.length) * 100} />
        </div>

        {/* Question */}
        {currentQuestion && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {currentQuestion.question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={answers[currentQuestionIndex] || ''}
                onValueChange={(value) => handleAnswer(currentQuestionIndex, value)}
              >
                {currentQuestion.options?.map((option: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
                  disabled={currentQuestionIndex === 0}
                >
                  Previous
                </Button>

                {currentQuestionIndex === questions.length - 1 ? (
                  <Button
                    onClick={handleSubmit}
                    disabled={!answers[currentQuestionIndex]}
                  >
                    Submit Test
                  </Button>
                ) : (
                  <Button
                    onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
                    disabled={!answers[currentQuestionIndex]}
                  >
                    Next
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TakeTest;
