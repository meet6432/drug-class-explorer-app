
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  category: string;
}

export const useQuizQuestions = (difficulty: 'easy' | 'medium' | 'hard') => {
  return useQuery({
    queryKey: ['quiz-questions', difficulty],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('quiz_questions')
        .select('*')
        .eq('difficulty', difficulty)
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error(`Failed to fetch quiz questions: ${error.message}`);
      }

      return data.map(item => ({
        id: item.question_id,
        question: item.question,
        options: item.options as string[],
        correctAnswer: item.correct_answer,
        explanation: item.explanation,
        category: item.category
      }));
    }
  });
};

export const useRandomQuizQuestion = (difficulty: 'easy' | 'medium' | 'hard') => {
  return useQuery({
    queryKey: ['random-quiz-question', difficulty],
    queryFn: async () => {
      // Get count first
      const { count } = await supabase
        .from('quiz_questions')
        .select('*', { count: 'exact', head: true })
        .eq('difficulty', difficulty);

      if (!count || count === 0) {
        throw new Error('No questions available');
      }

      // Get random offset
      const randomOffset = Math.floor(Math.random() * count);

      const { data, error } = await supabase
        .from('quiz_questions')
        .select('*')
        .eq('difficulty', difficulty)
        .range(randomOffset, randomOffset)
        .limit(1);

      if (error || !data || data.length === 0) {
        throw new Error(`Failed to fetch random question: ${error?.message}`);
      }

      const item = data[0];
      return {
        id: item.question_id,
        question: item.question,
        options: item.options as string[],
        correctAnswer: item.correct_answer,
        explanation: item.explanation,
        category: item.category
      };
    }
  });
};
