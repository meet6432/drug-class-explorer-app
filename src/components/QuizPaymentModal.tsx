import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react';
import { useToast } from '@/hooks/use-toast';
import { IndianRupee, Shield, Zap, Trophy } from 'lucide-react';

interface QuizPaymentModalProps {
  quiz: {
    difficulty: 'easy' | 'medium' | 'hard';
    price: number;
  };
  onClose: () => void;
  onSuccess: (difficulty: 'easy' | 'medium' | 'hard') => void;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

const QuizPaymentModal = ({ quiz, onClose, onSuccess }: QuizPaymentModalProps) => {
  const [loading, setLoading] = useState(false);
  const [processingPayment, setProcessingPayment] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const supabase = useSupabaseClient();
  const session = useSession();
  const { toast } = useToast();

  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => setRazorpayLoaded(true);
    script.onerror = () => {
      toast({
        title: "Error",
        description: "Failed to load payment gateway. Please try again.",
        variant: "destructive",
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [toast]);

  const checkIfAlreadyPurchased = async () => {
    if (!session?.user?.id) return false;

    const { data, error } = await supabase
      .from('quiz_purchases')
      .select('*')
      .eq('user_id', session.user.id)
      .eq('difficulty', quiz.difficulty)
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Error checking purchase:', error);
      return false;
    }

    return !!data;
  };

  const handlePayment = async () => {
    if (!session) {
      toast({
        title: "Authentication Required",
        description: "Please login to purchase quizzes.",
        variant: "destructive",
      });
      return;
    }

    if (!razorpayLoaded) {
      toast({
        title: "Error",
        description: "Payment gateway not loaded. Please try again.",
        variant: "destructive",
      });
      return;
    }

    setProcessingPayment(true);

    try {
      // Check if already purchased
      const alreadyPurchased = await checkIfAlreadyPurchased();
      if (alreadyPurchased) {
        toast({
          title: "Already Purchased!",
          description: `You already have lifetime access to ${quiz.difficulty} quiz!`,
        });
        onSuccess(quiz.difficulty);
        setProcessingPayment(false);
        return;
      }

      // Create Razorpay order
      const { data: orderData, error: orderError } = await supabase.functions.invoke('create-razorpay-order', {
        body: {
          difficulty: quiz.difficulty
        }
      });

      if (orderError) {
        throw new Error(orderError.message || 'Failed to create order');
      }

      const options = {
        key: orderData?.key ?? 'rzp_test_5FGO5DRX6hm0uc', // Razorpay Key ID
        amount: orderData.amount,
        currency: 'INR',
        name: 'Pharmacy MasterApp',
        description: `${quiz.difficulty.charAt(0).toUpperCase() + quiz.difficulty.slice(1)} Quiz - Lifetime Access`,
        order_id: orderData.orderId,
        handler: async function (response: any) {
          try {
            // Verify payment
            const { data: verifyData, error: verifyError } = await supabase.functions.invoke('verify-payment', {
              body: {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                difficulty: quiz.difficulty
              }
            });

            if (verifyError) {
              throw new Error('Payment verification failed');
            }

            toast({
              title: "Payment Successful!",
              description: `You now have lifetime access to ${quiz.difficulty} quiz!`,
            });
            onSuccess(quiz.difficulty);
          } catch (error: any) {
            toast({
              title: "Payment Verification Failed",
              description: error.message || "Please contact support if money was deducted.",
              variant: "destructive",
            });
          } finally {
            setProcessingPayment(false);
          }
        },
        modal: {
          ondismiss: function() {
            setProcessingPayment(false);
          }
        },
        prefill: {
          email: session.user.email,
        },
        theme: {
          color: '#3B82F6'
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

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
                disabled={processingPayment || !razorpayLoaded}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              >
                {processingPayment ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Processing...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <IndianRupee className="h-4 w-4" />
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
