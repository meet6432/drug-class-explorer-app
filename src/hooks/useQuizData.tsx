
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
      const tableName = `${difficulty}_quiz_questions`;
      
      const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error(`Failed to fetch ${difficulty} quiz questions: ${error.message}`);
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
      const tableName = `${difficulty}_quiz_questions`;
      
      // Get count first
      const { count } = await supabase
        .from(tableName)
        .select('*', { count: 'exact', head: true });

      if (!count || count === 0) {
        throw new Error(`No ${difficulty} questions available`);
      }

      // Get random offset
      const randomOffset = Math.floor(Math.random() * count);

      const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .range(randomOffset, randomOffset)
        .limit(1);

      if (error || !data || data.length === 0) {
        throw new Error(`Failed to fetch random ${difficulty} question: ${error?.message}`);
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
