
-- Create quiz_purchases table to track user purchases
CREATE TABLE public.quiz_purchases (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  difficulty TEXT NOT NULL CHECK (difficulty IN ('easy', 'medium', 'hard')),
  payment_id TEXT NOT NULL,
  order_id TEXT NOT NULL,
  amount NUMERIC NOT NULL,
  status TEXT NOT NULL DEFAULT 'completed',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security
ALTER TABLE public.quiz_purchases ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own purchases" 
  ON public.quiz_purchases 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Service role can insert purchases" 
  ON public.quiz_purchases 
  FOR INSERT 
  WITH CHECK (true);

-- Create unique constraint to prevent duplicate purchases
CREATE UNIQUE INDEX quiz_purchases_user_difficulty_idx 
  ON public.quiz_purchases (user_id, difficulty);
