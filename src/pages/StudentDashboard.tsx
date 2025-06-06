
import { useState } from 'react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Navigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Brain, Users, Trophy, LogOut, Play, GraduationCap, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import InteractiveLearningHub from '@/components/InteractiveLearningHub';

const StudentDashboard = () => {
  const [currentView, setCurrentView] = useState<'dashboard' | 'learning-hub'>('dashboard');
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

  const { data: progress } = useQuery({
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
    } else {
      window.location.href = '/';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // Redirect if not a student
  if (profile?.role !== 'student') {
    return <Navigate to="/teacher" replace />;
  }

  // Handle different views
  if (currentView === 'learning-hub') {
    return <InteractiveLearningHub onBackToMenu={() => setCurrentView('dashboard')} />;
  }

  const easyProgress = progress?.find(p => p.difficulty === 'easy');
  const mediumProgress = progress?.find(p => p.difficulty === 'medium');
  const hardProgress = progress?.find(p => p.difficulty === 'hard');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <Button 
              onClick={() => window.location.href = '/'} 
              variant="outline" 
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Home
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Student Dashboard</h1>
              <p className="text-gray-600">Welcome back, {profile?.full_name || 'Student'}!</p>
            </div>
          </div>
          <Button onClick={handleSignOut} variant="outline">
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Easy Quiz</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{easyProgress?.total_score || 0}</div>
              <p className="text-xs text-muted-foreground">
                {easyProgress?.questions_answered || 0} questions answered
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Medium Quiz</CardTitle>
              <Brain className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mediumProgress?.total_score || 0}</div>
              <p className="text-xs text-muted-foreground">
                {mediumProgress?.questions_answered || 0} questions answered
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hard Quiz</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{hardProgress?.total_score || 0}</div>
              <p className="text-xs text-muted-foreground">
                {hardProgress?.questions_answered || 0} questions answered
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Score</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {(easyProgress?.total_score || 0) + (mediumProgress?.total_score || 0) + (hardProgress?.total_score || 0)}
              </div>
              <p className="text-xs text-muted-foreground">
                Across all difficulty levels
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Learning Hub Access */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center space-x-2 text-2xl">
                  <GraduationCap className="h-8 w-8" />
                  <span>Pharmacy MasterApp - Learning Hub</span>
                </CardTitle>
                <CardDescription className="text-lg mt-2">
                  Access all pharmacy tools, drug classes, quizzes, and clinical case studies
                </CardDescription>
              </div>
              <Button 
                onClick={() => setCurrentView('learning-hub')}
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-4"
              >
                <Play className="h-5 w-5 mr-2" />
                Enter Learning Hub
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3 text-lg">Free Pharmacy Tools</h4>
                <ul className="text-sm text-blue-700 space-y-2">
                  <li>• 400+ Drug Classes Database</li>
                  <li>• Drug Interaction Checker</li>
                  <li>• Drug Class Explorer</li>
                  <li>• Dosage Calculator</li>
                  <li>• Side Effects Database</li>
                  <li>• Pharmacokinetics Simulator</li>
                  <li>• Clinical Case Studies</li>
                  <li>• Disease Lookup Tool</li>
                  <li>• Symptom Diagnosis Practice</li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-3 text-lg">Premium Quiz System</h4>
                <ul className="text-sm text-purple-700 space-y-2">
                  <li>• Easy Quiz Level (₹15 lifetime)</li>
                  <li>• Medium Quiz Level (₹20 lifetime)</li>
                  <li>• Hard Quiz Level (₹30 lifetime)</li>
                  <li>• 1000+ Questions per level</li>
                  <li>• Detailed explanations</li>
                  <li>• Progress tracking</li>
                  <li>• Performance analytics</li>
                  <li>• Secure Razorpay payments</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Learning Progress</CardTitle>
              <CardDescription>Track your performance across different areas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'Easy', progress: easyProgress, color: 'bg-green-500' },
                  { name: 'Medium', progress: mediumProgress, color: 'bg-yellow-500' },
                  { name: 'Hard', progress: hardProgress, color: 'bg-red-500' }
                ].map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{item.name} Quiz</span>
                      <span>{item.progress?.questions_answered || 0} questions</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${item.color} h-2 rounded-full`} 
                        style={{ 
                          width: `${Math.min(((item.progress?.questions_answered || 0) / 50) * 100, 100)}%` 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>New to the platform? Start here!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">✅ Step 1: Explore Free Tools</h4>
                <p className="text-sm text-green-700">
                  Start with our comprehensive drug database and free pharmacy tools
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">📚 Step 2: Try Free Features</h4>
                <p className="text-sm text-blue-700">
                  Practice with symptom diagnosis and clinical case studies
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-2">🎯 Step 3: Upgrade to Premium</h4>
                <p className="text-sm text-purple-700">
                  Access quiz levels for structured learning and progress tracking
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Badges Section */}
        {progress && progress.some(p => p.badges && Array.isArray(p.badges) && p.badges.length > 0) && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Your Achievements</CardTitle>
              <CardDescription>Badges earned through your learning journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {progress.map(p => 
                  (p.badges as string[] || []).map((badge: string, index: number) => (
                    <span key={`${p.difficulty}-${index}`} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      {badge}
                    </span>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
