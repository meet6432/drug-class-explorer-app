
import { useState } from 'react';
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BookOpen, GraduationCap, Users, Award, CreditCard, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Auth = () => {
  const supabase = useSupabaseClient();
  const session = useSession();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('student');

  // Redirect if already logged in
  if (session) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            role: role,
          },
        },
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Check your email for the confirmation link!",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      toast({
        title: "Welcome back!",
        description: "You have been signed in successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">Pharmacy MasterApp</h1>
          </div>
          <p className="text-gray-600">Join thousands learning pharmacy with our comprehensive platform</p>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <GraduationCap className="h-6 w-6 text-blue-500 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700">1000+ Questions</p>
            <p className="text-xs text-gray-500">Per Level</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <Users className="h-6 w-6 text-green-500 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700">Teacher Tools</p>
            <p className="text-xs text-gray-500">Create & Share Tests</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <CreditCard className="h-6 w-6 text-purple-500 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700">Premium Quizzes</p>
            <p className="text-xs text-gray-500">₹15-30 Lifetime</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm text-center">
            <Shield className="h-6 w-6 text-orange-500 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700">Free Tools</p>
            <p className="text-xs text-gray-500">Drug Interactions & More</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Get Started</CardTitle>
            <CardDescription>
              Sign in to your account or create a new one to access premium quizzes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="signin">
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? 'Signing in...' : 'Sign In'}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="signup">
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">I am a</Label>
                    <Select value={role} onValueChange={setRole}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="teacher">Teacher</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? 'Creating account...' : 'Create Account'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Payment Info */}
        <div className="text-center mt-6 p-4 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-2">Why Create an Account?</h3>
          <div className="text-sm text-gray-600 space-y-1">
            <p>• Access premium quiz levels (₹15-30 lifetime)</p>
            <p>• Track your learning progress</p>
            <p>• Secure payments via Razorpay</p>
            <p>• All pharmacy tools remain free forever!</p>
          </div>
        </div>

        <div className="text-center mt-6 text-sm text-gray-500">
          By signing up, you agree to our Terms of Service and Privacy Policy
        </div>
      </div>
    </div>
  );
};

export default Auth;
