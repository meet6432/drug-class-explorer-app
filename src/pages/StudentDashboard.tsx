
import { useState } from 'react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Navigate, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Target, Award, TrendingUp, LogOut, Play, Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const StudentDashboard = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const { toast } = useToast();

  // Redirect to auth if not logged in
  if (!session) {
    return <Navigate to="/auth" replace />;
  }

  const { data: profile, isLoading } = useQuery({
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

  const { data: progress, isLoading: progressLoading } = useQuery({
    queryKey: ['quiz-progress', session.user.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('quiz_progress')
        .select('*')
        .eq('user_id', session.user.id);
      
      if (error) throw error;
      return data;
    },
    enabled: !!session?.user?.id,
  });

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (isLoading || progressLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // Redirect if not a student
  if (profile?.role !== 'student') {
    return <Navigate to="/teacher" replace />;
  }

  const easyProgress = progress?.find(p => p.difficulty === 'easy');
  const mediumProgress = progress?.find(p => p.difficulty === 'medium');
  const hardProgress = progress?.find(p => p.difficulty === 'hard');

  const totalScore = progress?.reduce((sum, p) => sum + (p.total_score || 0), 0) || 0;
  const totalQuestions = progress?.reduce((sum, p) => sum + (p.questions_answered || 0), 0) || 0;
  const totalCorrect = progress?.reduce((sum, p) => sum + (p.correct_answers || 0), 0) || 0;
  const accuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Student Dashboard</h1>
            <p className="text-gray-600">Welcome back, {profile?.full_name || 'Student'}!</p>
          </div>
          <div className="flex space-x-4">
            <Link to="/diseases">
              <Button variant="outline">
                <Search className="h-4 w-4 mr-2" />
                Disease Lookup
              </Button>
            </Link>
            <Button onClick={handleSignOut} variant="outline">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Score</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalScore}</div>
              <p className="text-xs text-muted-foreground">
                Points earned
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Questions Answered</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalQuestions}</div>
              <p className="text-xs text-muted-foreground">
                Across all levels
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Accuracy</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{accuracy}%</div>
              <p className="text-xs text-muted-foreground">
                Overall performance
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Badges</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {progress?.reduce((sum, p) => sum + (Array.isArray(p.badges) ? p.badges.length : 0), 0) || 0}
              </div>
              <p className="text-xs text-muted-foreground">
                Achievements earned
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="practice" className="space-y-4">
          <TabsList>
            <TabsTrigger value="practice">Practice Quiz</TabsTrigger>
            <TabsTrigger value="progress">My Progress</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="practice" className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Choose Your Level</h3>
            
            <div className="grid gap-6">
              {/* Easy Level */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="flex items-center">
                        <Badge variant="secondary" className="mr-2">Easy</Badge>
                        Basic Pharmacy Knowledge
                      </CardTitle>
                      <CardDescription>
                        Fundamental concepts and basic drug classes
                      </CardDescription>
                    </div>
                    <Link to="/">
                      <Button>
                        <Play className="h-4 w-4 mr-2" />
                        Start Quiz
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress: Part {easyProgress?.current_part || 1}/20</span>
                      <span>{easyProgress?.questions_answered || 0}/1000 questions</span>
                    </div>
                    <Progress value={((easyProgress?.questions_answered || 0) / 1000) * 100} />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Score: {easyProgress?.total_score || 0}</span>
                      <span>Accuracy: {easyProgress?.questions_answered ? Math.round(((easyProgress?.correct_answers || 0) / easyProgress.questions_answered) * 100) : 0}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Medium Level */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="flex items-center">
                        <Badge variant="default" className="mr-2">Medium</Badge>
                        Intermediate Pharmacy
                      </CardTitle>
                      <CardDescription>
                        Complex drug interactions and clinical applications
                      </CardDescription>
                    </div>
                    <Link to="/">
                      <Button>
                        <Play className="h-4 w-4 mr-2" />
                        Start Quiz
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress: Part {mediumProgress?.current_part || 1}/20</span>
                      <span>{mediumProgress?.questions_answered || 0}/1000 questions</span>
                    </div>
                    <Progress value={((mediumProgress?.questions_answered || 0) / 1000) * 100} />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Score: {mediumProgress?.total_score || 0}</span>
                      <span>Accuracy: {mediumProgress?.questions_answered ? Math.round(((mediumProgress?.correct_answers || 0) / mediumProgress.questions_answered) * 100) : 0}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hard Level */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="flex items-center">
                        <Badge variant="destructive" className="mr-2">Hard</Badge>
                        Advanced Clinical Pharmacy
                      </CardTitle>
                      <CardDescription>
                        Expert-level pharmacotherapy and specialized topics
                      </CardDescription>
                    </div>
                    <Link to="/">
                      <Button>
                        <Play className="h-4 w-4 mr-2" />
                        Start Quiz
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress: Part {hardProgress?.current_part || 1}/20</span>
                      <span>{hardProgress?.questions_answered || 0}/1000 questions</span>
                    </div>
                    <Progress value={((hardProgress?.questions_answered || 0) / 1000) * 100} />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Score: {hardProgress?.total_score || 0}</span>
                      <span>Accuracy: {hardProgress?.questions_answered ? Math.round(((hardProgress?.correct_answers || 0) / hardProgress.questions_answered) * 100) : 0}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="progress">
            <Card>
              <CardHeader>
                <CardTitle>Learning Progress</CardTitle>
                <CardDescription>
                  Track your performance across different difficulty levels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center py-8 text-gray-500">
                    <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold">Start practicing to see your progress!</h3>
                    <p>Complete quizzes to unlock detailed analytics and insights.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements">
            <Card>
              <CardHeader>
                <CardTitle>Achievements & Badges</CardTitle>
                <CardDescription>
                  Earn badges and achievements as you progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <Award className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold">No achievements yet</h3>
                  <p>Start taking quizzes to earn your first badge!</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentDashboard;
