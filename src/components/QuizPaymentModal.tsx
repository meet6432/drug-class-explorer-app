
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react';
import { useToast } from '@/hooks/use-toast';
import { DollarSign, Shield, Zap, Trophy } from 'lucide-react';

interface QuizPaymentModalProps {
  quiz: {
    difficulty: 'easy' | 'medium' | 'hard';
    price: number;
  };
  onClose: () => void;
  onSuccess: (difficulty: 'easy' | 'medium' | 'hard') => void;
}

const QuizPaymentModal = ({ quiz, onClose, onSuccess }: QuizPaymentModalProps) => {
  const [loading, setLoading] = useState(false);
  const [processingPayment, setProcessingPayment] = useState(false);
  const supabase = useSupabaseClient();
  const session = useSession();
  const { toast } = useToast();

  const handlePayment = async () => {
    if (!session) {
      toast({
        title: "Authentication Required",
        description: "Please login to purchase quizzes.",
        variant: "destructive",
      });
      return;
    }

    setProcessingPayment(true);

    try {
      // TODO: Integrate with Razorpay
      // For now, we'll simulate a successful payment
      setTimeout(() => {
        toast({
          title: "Payment Successful!",
          description: `You now have lifetime access to ${quiz.difficulty} quiz!`,
        });
        onSuccess(quiz.difficulty);
        setProcessingPayment(false);
      }, 2000);

    } catch (error: any) {
      setProcessingPayment(false);
      toast({
        title: "Payment Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'hard': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getDifficultyFeatures = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return [
          'Basic pharmacy concepts',
          'Fundamental drug knowledge',
          '100+ practice questions',
          'Detailed explanations'
        ];
      case 'medium':
        return [
          'Intermediate concepts',
          'Drug interactions & mechanisms',
          '150+ practice questions',
          'Clinical scenarios'
        ];
      case 'hard':
        return [
          'Advanced pharmacology',
          'Complex clinical cases',
          '200+ practice questions',
          'Expert-level challenges'
        ];
      default:
        return [];
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">Upgrade to Premium Quiz</DialogTitle>
          <DialogDescription className="text-center">
            Get lifetime access to high-quality pharmacy questions
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Quiz Details Card */}
          <Card>
            <CardHeader className="text-center">
              <div className={`inline-block px-4 py-2 rounded-full ${getDifficultyColor(quiz.difficulty)} font-semibold text-lg capitalize mb-2`}>
                {quiz.difficulty} Level Quiz
              </div>
              <CardTitle className="text-3xl font-bold">
                ₹{quiz.price}
                <span className="text-sm font-normal text-gray-500 ml-2">one-time payment</span>
              </CardTitle>
              <CardDescription>Lifetime access • No recurring charges</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Trophy className="h-4 w-4" />
                    What's Included:
                  </h4>
                  <ul className="space-y-1 text-sm">
                    {getDifficultyFeatures(quiz.difficulty).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Benefits:
                  </h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      Unlimited attempts
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      Progress tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      Performance analytics
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      Mobile-friendly access
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Section */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <Shield className="h-4 w-4" />
              Secure payment powered by Razorpay
            </div>
            
            <div className="flex gap-3 justify-center">
              <Button 
                variant="outline" 
                onClick={onClose}
                disabled={processingPayment}
              >
                Cancel
              </Button>
              <Button 
                onClick={handlePayment}
                disabled={processingPayment}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              >
                {processingPayment ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Processing...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    Pay ₹{quiz.price}
                  </div>
                )}
              </Button>
            </div>

            <p className="text-xs text-gray-500">
              By proceeding, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuizPaymentModal;
