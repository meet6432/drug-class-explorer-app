
import { useState } from 'react';
import { BookOpen, Award, ArrowRight, CheckCircle, Star, Users, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useSession } from '@supabase/auth-helpers-react';

const Index = () => {
  const session = useSession();

  const features = [
    {
      icon: BookOpen,
      title: "400+ Drug Classes",
      description: "Comprehensive database of drug classifications with detailed information"
    },
    {
      icon: Shield,
      title: "Drug Interaction Checker",
      description: "Advanced tool to check for potential drug interactions and safety concerns"
    },
    {
      icon: Award,
      title: "Interactive Quizzes",
      description: "Multi-level quizzes with detailed explanations and progress tracking"
    },
    {
      icon: Users,
      title: "Clinical Case Studies",
      description: "Real-world scenarios to practice clinical decision making"
    }
  ];

  const stats = [
    { number: "400+", label: "Drug Classes" },
    { number: "1000+", label: "Quiz Questions" },
    { number: "50+", label: "Clinical Cases" },
    { number: "10+", label: "Free Tools" }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Pharmacy Student",
      content: "This app transformed my pharmacy studies. The interactive quizzes are incredibly helpful!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Clinical Pharmacist",
      content: "The drug interaction checker is a game-changer for my daily practice.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Pharmacy Educator",
      content: "I recommend this to all my students. The content is comprehensive and well-structured.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-blue-500">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Pharmacy MasterApp
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              {session ? (
                <Button onClick={() => window.location.href = '/student'} className="bg-blue-600 hover:bg-blue-700">
                  Go to Dashboard
                </Button>
              ) : (
                <>
                  <Button onClick={() => window.location.href = '/auth'} variant="outline">
                    Login
                  </Button>
                  <Button onClick={() => window.location.href = '/auth'} className="bg-blue-600 hover:bg-blue-700">
                    Sign Up Free
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Master Pharmacy with
            <span className="text-blue-600"> Interactive Learning</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Comprehensive pharmacy education platform with 400+ drug classes, interactive quizzes, 
            clinical cases, and professional tools. Join thousands of students and professionals 
            advancing their pharmacy knowledge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {!session ? (
              <>
                <Button 
                  onClick={() => window.location.href = '/auth'} 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
                >
                  Start Learning Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  onClick={() => window.location.href = '/auth'} 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-3"
                >
                  View Features
                </Button>
              </>
            ) : (
              <Button 
                onClick={() => window.location.href = '/student'} 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
              >
                Continue Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Everything You Need to Excel in Pharmacy
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From basic concepts to advanced clinical scenarios, our platform provides 
            comprehensive tools for pharmacy education and practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Pricing Preview */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Simple, Transparent Pricing</h3>
            <p className="text-gray-600">Most tools are free forever. Premium quizzes available for lifetime access.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-green-200">
              <CardHeader className="text-center">
                <CardTitle className="text-green-600">Free Forever</CardTitle>
                <div className="text-3xl font-bold">₹0</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    400+ Drug Classes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Drug Interaction Checker
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Dosage Calculator
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Clinical Case Studies
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Symptom Diagnosis Practice
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardHeader className="text-center">
                <CardTitle className="text-blue-600">Premium Quizzes</CardTitle>
                <div className="text-3xl font-bold">₹15-30</div>
                <div className="text-sm text-gray-500">One-time payment</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    1000+ Quiz Questions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    Multiple Difficulty Levels
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    Detailed Explanations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    Progress Tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    Lifetime Access
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Trusted by Pharmacy Professionals
            </h3>
            <p className="text-xl text-gray-600">
              See what students and professionals say about our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Master Pharmacy?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students and professionals who are advancing their pharmacy knowledge with our comprehensive platform.
          </p>
          {!session ? (
            <Button 
              onClick={() => window.location.href = '/auth'} 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
            >
              Start Learning Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          ) : (
            <Button 
              onClick={() => window.location.href = '/student'} 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
            >
              Continue to Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <BookOpen className="h-6 w-6" />
            <span className="text-lg font-semibold">Pharmacy MasterApp</span>
          </div>
          <p className="text-gray-400 mb-4">
            Comprehensive pharmacy education platform for students and professionals
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <span>© 2024 Pharmacy MasterApp</span>
            <span>•</span>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
