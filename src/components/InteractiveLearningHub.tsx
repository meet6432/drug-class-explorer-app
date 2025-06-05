
import { useState } from 'react';
import { ArrowLeft, BookOpen, Brain, Microscope, Calculator, Activity, Network, Pill, AlertTriangle, Clock, Search, Stethoscope, DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSession } from '@supabase/auth-helpers-react';
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
  const session = useSession();

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

  const handleQuizAccess = async (quiz: { difficulty: 'easy' | 'medium' | 'hard'; price: number }) => {
    if (!session) {
      // Redirect to auth page
      window.location.href = '/auth';
      return;
    }

    // Check if user has already purchased this quiz level
    // For now, we'll show the payment modal - this will be enhanced with actual purchase checking
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
            Interactive Learning Hub
          </h1>
          <p className="text-gray-600 mt-2">Comprehensive pharmacy and medical learning tools</p>
        </div>
        <div className="w-24">
          {!session && (
            <Button onClick={() => window.location.href = '/auth'} variant="outline">
              Login
            </Button>
          )}
        </div>
      </div>

      <Tabs defaultValue="pharmacy-tools" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="pharmacy-tools">Pharmacy Tools</TabsTrigger>
          <TabsTrigger value="quizzes-cases">Interactive Quizzes & Cases</TabsTrigger>
        </TabsList>

        <TabsContent value="pharmacy-tools" className="space-y-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Advanced Pharmacy Tools</h2>
            <p className="text-gray-600">Professional tools for drug analysis, interaction checking, and clinical decision support</p>
            <p className="text-sm text-green-600 font-medium mt-2">✨ All pharmacy tools are completely FREE!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pharmacyFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={feature.id} 
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200"
                  onClick={() => setActiveFeature(feature.id)}
                >
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="outline">
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
            <p className="text-sm text-blue-600 font-medium mt-2">💳 Premium quizzes require payment • Symptom diagnosis is FREE!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quizFeatures.map((quiz) => {
              const Icon = quiz.icon;
              const isPaid = quiz.price !== undefined;
              return (
                <Card 
                  key={quiz.id} 
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-purple-200"
                  onClick={() => {
                    if (isPaid) {
                      handleQuizAccess({ difficulty: quiz.difficulty!, price: quiz.price! });
                    } else {
                      setActiveQuiz(quiz.id);
                    }
                  }}
                >
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${quiz.color} flex items-center justify-center mb-4`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{quiz.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {quiz.description}
                    </CardDescription>
                    {isPaid && (
                      <div className="flex items-center justify-center gap-1 mt-2">
                        <DollarSign className="h-4 w-4 text-green-600" />
                        <span className="text-green-600 font-semibold">₹{quiz.price}</span>
                      </div>
                    )}
                    {!isPaid && (
                      <div className="text-green-600 font-semibold text-sm mt-2">FREE</div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="outline">
                      {isPaid ? (session ? 'Purchase & Start' : 'Login to Purchase') : 'Start Free'}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>

      {/* Features Overview */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Features Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="text-left">
              <h4 className="font-semibold text-blue-800 mb-2">Free Pharmacy Tools</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Check drug interactions and contraindications</li>
                <li>• Explore drug classifications and relationships</li>
                <li>• Calculate dosages based on patient parameters</li>
                <li>• Search comprehensive side effects database</li>
                <li>• Simulate pharmacokinetic properties</li>
                <li>• Practice with clinical case scenarios</li>
                <li>• Disease lookup with drug recommendations</li>
                <li>• Free symptom diagnosis practice</li>
              </ul>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-purple-800 mb-2">Premium Quiz System</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Easy Quiz: ₹15 (Basic concepts)</li>
                <li>• Medium Quiz: ₹20 (Intermediate level)</li>
                <li>• Hard Quiz: ₹30 (Advanced topics)</li>
                <li>• Lifetime access after purchase</li>
                <li>• Detailed explanations for each answer</li>
                <li>• Progress tracking and analytics</li>
                <li>• Secure Razorpay payment gateway</li>
              </ul>
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
            setActiveQuiz(`${difficulty}-quiz`);
          }}
        />
      )}
    </div>
  );
};

export default InteractiveLearningHub;
