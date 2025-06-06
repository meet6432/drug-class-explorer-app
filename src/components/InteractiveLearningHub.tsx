
import { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, Brain, Microscope, Calculator, Activity, Network, Pill, AlertTriangle, Clock, Search, Stethoscope, DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import DrugInteractionChecker from './DrugInteractionChecker';
import DrugClassExplorer from './DrugClassExplorer';
import ClinicalCaseSimulator from './ClinicalCaseSimulator';
import DosageCalculator from './DosageCalculator';
import SideEffectsDatabase from './SideEffectsDatabase';
import PharmacokineticsSimulator from './PharmacokineticsSimulator';
import QuizLevel from './QuizLevel';
import SymptomDiagnosis from './SymptomDiagnosis';
import DiseaseLookup from './DiseaseLookup';
import QuizPaymentModal from './QuizPaymentModal';

interface InteractiveLearningHubProps {
  onBackToMenu: () => void;
}

const InteractiveLearningHub = ({ onBackToMenu }: InteractiveLearningHubProps) => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState<{ difficulty: 'easy' | 'medium' | 'hard'; price: number } | null>(null);
  const [purchasedQuizzes, setPurchasedQuizzes] = useState<string[]>([]);
  const session = useSession();
  const supabase = useSupabaseClient();

  const pharmacyFeatures = [
    {
      id: 'drug-interactions',
      title: 'Drug Interaction Checker',
      description: 'Check for potential drug interactions and safety concerns',
      icon: AlertTriangle,
      color: 'from-red-400 to-red-600',
      component: DrugInteractionChecker
    },
    {
      id: 'drug-classes',
      title: 'Drug Class Explorer',
      description: 'Explore drug classifications and relationships',
      icon: Network,
      color: 'from-blue-400 to-blue-600',
      component: DrugClassExplorer
    },
    {
      id: 'dosage-calculator',
      title: 'Dosage Calculator',
      description: 'Calculate appropriate drug dosages based on patient parameters',
      icon: Calculator,
      color: 'from-green-400 to-green-600',
      component: DosageCalculator
    },
    {
      id: 'side-effects',
      title: 'Side Effects Database',
      description: 'Comprehensive database of drug side effects and management',
      icon: Pill,
      color: 'from-purple-400 to-purple-600',
      component: SideEffectsDatabase
    },
    {
      id: 'pharmacokinetics',
      title: 'Pharmacokinetics Simulator',
      description: 'Simulate drug absorption, distribution, metabolism and excretion',
      icon: Activity,
      color: 'from-orange-400 to-orange-600',
      component: PharmacokineticsSimulator
    },
    {
      id: 'clinical-cases',
      title: 'Clinical Case Simulator',
      description: 'Practice with realistic clinical scenarios and case studies',
      icon: Microscope,
      color: 'from-teal-400 to-teal-600',
      component: ClinicalCaseSimulator
    },
    {
      id: 'disease-lookup',
      title: 'Disease Lookup',
      description: 'Comprehensive disease database with drug recommendations',
      icon: Search,
      color: 'from-indigo-400 to-indigo-600',
      component: DiseaseLookup
    }
  ];

  const quizFeatures = [
    {
      id: 'easy-quiz',
      title: 'Easy Quiz',
      description: 'Start with basic pharmacy and medical questions',
      icon: BookOpen,
      color: 'from-green-400 to-green-600',
      difficulty: 'easy' as const,
      price: 15
    },
    {
      id: 'medium-quiz',
      title: 'Medium Quiz',
      description: 'Intermediate level questions for developing knowledge',
      icon: Brain,
      color: 'from-yellow-400 to-yellow-600',
      difficulty: 'medium' as const,
      price: 20
    },
    {
      id: 'hard-quiz',
      title: 'Hard Quiz',
      description: 'Advanced questions for expert-level understanding',
      icon: Clock,
      color: 'from-red-400 to-red-600',
      difficulty: 'hard' as const,
      price: 30
    },
    {
      id: 'symptom-diagnosis',
      title: 'Symptom Diagnosis',
      description: 'Practice diagnosing conditions based on symptoms',
      icon: Stethoscope,
      color: 'from-purple-400 to-purple-600',
      component: SymptomDiagnosis
    }
  ];

  useEffect(() => {
    if (session?.user?.id) {
      checkPurchasedQuizzes();
    }
  }, [session]);

  const checkPurchasedQuizzes = async () => {
    if (!session?.user?.id) return;

    const { data, error } = await supabase
      .from('quiz_purchases')
      .select('difficulty')
      .eq('user_id', session.user.id);

    if (error) {
      console.error('Error fetching purchases:', error);
      return;
    }

    setPurchasedQuizzes(data.map(p => p.difficulty));
  };

  const handleQuizAccess = async (quiz: { difficulty: 'easy' | 'medium' | 'hard'; price: number }) => {
    if (!session) {
      // Redirect to auth page with return URL
      const returnUrl = encodeURIComponent(window.location.pathname);
      window.location.href = `/auth?returnUrl=${returnUrl}`;
      return;
    }

    // Check if user has already purchased this quiz level
    if (purchasedQuizzes.includes(quiz.difficulty)) {
      // User has already purchased, allow direct access
      setActiveQuiz(`${quiz.difficulty}-quiz`);
      return;
    }

    // Show payment modal for purchase
    setSelectedQuiz(quiz);
    setShowPaymentModal(true);
  };

  if (activeFeature) {
    const feature = pharmacyFeatures.find(f => f.id === activeFeature);
    if (feature) {
      const Component = feature.component;
      return <Component onBackToMenu={() => setActiveFeature(null)} />;
    }
  }

  if (activeQuiz) {
    const quiz = quizFeatures.find(q => q.id === activeQuiz);
    if (quiz) {
      if (quiz.component) {
        const Component = quiz.component;
        return <Component onBackToMenu={() => setActiveQuiz(null)} />;
      } else if (quiz.difficulty) {
        return <QuizLevel difficulty={quiz.difficulty} onBack={() => setActiveQuiz(null)} />;
      }
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <Button 
          onClick={onBackToMenu} 
          variant="outline" 
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Button>
        <div className="text-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Pharmacy MasterApp - Learning Hub
          </h1>
          <p className="text-gray-600 mt-2">Comprehensive pharmacy and medical learning tools</p>
        </div>
        <div className="w-32">
          {!session && (
            <Button onClick={() => window.location.href = '/auth'} variant="outline">
              Login
            </Button>
          )}
          {session && (
            <div className="text-sm text-gray-600 text-right">
              Welcome, {session.user.email?.split('@')[0]}
            </div>
          )}
        </div>
      </div>

      <Tabs defaultValue="pharmacy-tools" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="pharmacy-tools">Free Pharmacy Tools</TabsTrigger>
          <TabsTrigger value="quizzes-cases">Interactive Quizzes & Cases</TabsTrigger>
        </TabsList>

        <TabsContent value="pharmacy-tools" className="space-y-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Advanced Pharmacy Tools</h2>
            <p className="text-gray-600">Professional tools for drug analysis, interaction checking, and clinical decision support</p>
            <p className="text-lg text-green-600 font-bold mt-2">✨ All pharmacy tools are completely FREE forever!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pharmacyFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={feature.id} 
                  className="cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300 hover:scale-105"
                  onClick={() => setActiveFeature(feature.id)}
                >
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                      Launch Tool
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="quizzes-cases" className="space-y-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Interactive Learning & Assessment</h2>
            <p className="text-gray-600">Test your knowledge with quizzes and practice with clinical case studies</p>
            <p className="text-lg text-blue-600 font-bold mt-2">💳 Premium quizzes require one-time payment • Symptom diagnosis is FREE!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quizFeatures.map((quiz) => {
              const Icon = quiz.icon;
              const isPaid = quiz.price !== undefined;
              const isPurchased = isPaid && purchasedQuizzes.includes(quiz.difficulty!);
              const isFree = !isPaid;
              
              return (
                <Card 
                  key={quiz.id} 
                  className={`cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:scale-105 ${
                    isFree ? 'hover:border-green-300 border-green-200' : 
                    isPurchased ? 'hover:border-blue-300 border-blue-200' : 
                    'hover:border-purple-300 border-purple-200'
                  }`}
                  onClick={() => {
                    if (isPaid) {
                      handleQuizAccess({ difficulty: quiz.difficulty!, price: quiz.price! });
                    } else {
                      setActiveQuiz(quiz.id);
                    }
                  }}
                >
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${quiz.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{quiz.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {quiz.description}
                    </CardDescription>
                    {isPaid && (
                      <div className="flex items-center justify-center gap-1 mt-3 p-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                        <DollarSign className="h-5 w-5 text-blue-600" />
                        <span className="text-blue-600 font-bold text-lg">₹{quiz.price}</span>
                        {isPurchased && (
                          <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                            PURCHASED ✓
                          </span>
                        )}
                      </div>
                    )}
                    {isFree && (
                      <div className="mt-3 p-2 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                        <div className="text-green-600 font-bold text-lg">FREE FOREVER</div>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <Button 
                      className={`w-full ${
                        isFree ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700' :
                        isPurchased ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' :
                        'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700'
                      }`}
                    >
                      {isPaid ? (isPurchased ? 'Start Quiz' : (session ? 'Purchase & Start' : 'Login to Purchase')) : 'Start Free Practice'}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>

      {/* Features Overview */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Complete Feature Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-left">
              <h4 className="font-bold text-blue-800 mb-4 text-lg">🆓 Free Tools (Forever)</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• <strong>400+ Drug Classes Database</strong> - Complete classification system</li>
                <li>• <strong>Drug Interaction Checker</strong> - Safety and contraindication alerts</li>
                <li>• <strong>Drug Class Explorer</strong> - Visual relationship mapping</li>
                <li>• <strong>Dosage Calculator</strong> - Patient-specific calculations</li>
                <li>• <strong>Side Effects Database</strong> - Comprehensive adverse effects</li>
                <li>• <strong>Pharmacokinetics Simulator</strong> - ADME modeling</li>
                <li>• <strong>Clinical Case Studies</strong> - Real-world scenarios</li>
                <li>• <strong>Disease Lookup</strong> - Condition-drug recommendations</li>
                <li>• <strong>Symptom Diagnosis Practice</strong> - Free diagnostic training</li>
              </ul>
            </div>
            <div className="text-left">
              <h4 className="font-bold text-purple-800 mb-4 text-lg">💎 Premium Quiz System</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• <strong>Easy Quiz: ₹15</strong> - Basic pharmacy concepts (1000+ questions)</li>
                <li>• <strong>Medium Quiz: ₹20</strong> - Intermediate level (1000+ questions)</li>
                <li>• <strong>Hard Quiz: ₹30</strong> - Advanced topics (1000+ questions)</li>
                <li>• <strong>Lifetime Access</strong> - One-time payment only</li>
                <li>• <strong>Detailed Explanations</strong> - Learn from every answer</li>
                <li>• <strong>Progress Tracking</strong> - Monitor your improvement</li>
                <li>• <strong>Performance Analytics</strong> - Identify weak areas</li>
                <li>• <strong>Secure Payments</strong> - Razorpay integration</li>
                <li>• <strong>Mobile Friendly</strong> - Study anywhere, anytime</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
            <h4 className="font-bold text-green-800 mb-3 text-lg">🎯 Why Choose Our Platform?</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl mb-2">🎓</div>
                <strong>Expert Content</strong>
                <p className="text-gray-600">Created by pharmacy professionals</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">⚡</div>
                <strong>Instant Access</strong>
                <p className="text-gray-600">No waiting, start learning immediately</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🔒</div>
                <strong>Secure & Reliable</strong>
                <p className="text-gray-600">Your data and payments are protected</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && selectedQuiz && (
        <QuizPaymentModal
          quiz={selectedQuiz}
          onClose={() => {
            setShowPaymentModal(false);
            setSelectedQuiz(null);
          }}
          onSuccess={(difficulty) => {
            setShowPaymentModal(false);
            setSelectedQuiz(null);
            // Refresh purchased quizzes
            checkPurchasedQuizzes();
            setActiveQuiz(`${difficulty}-quiz`);
          }}
        />
      )}
    </div>
  );
};

export default InteractiveLearningHub;
