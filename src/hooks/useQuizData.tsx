
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
      let query;
      
      if (difficulty === 'easy') {
        query = supabase.from('easy_quiz_questions').select('*').order('created_at', { ascending: false });
      } else if (difficulty === 'medium') {
        query = supabase.from('medium_quiz_questions').select('*').order('created_at', { ascending: false });
      } else {
        query = supabase.from('hard_quiz_questions').select('*').order('created_at', { ascending: false });
      }

      const { data, error } = await query;

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
      let countQuery, dataQuery;
      
      if (difficulty === 'easy') {
        countQuery = supabase.from('easy_quiz_questions').select('*', { count: 'exact', head: true });
      } else if (difficulty === 'medium') {
        countQuery = supabase.from('medium_quiz_questions').select('*', { count: 'exact', head: true });
      } else {
        countQuery = supabase.from('hard_quiz_questions').select('*', { count: 'exact', head: true });
      }

      const { count } = await countQuery;

      if (!count || count === 0) {
        throw new Error(`No ${difficulty} questions available`);
      }

      // Get random offset
      const randomOffset = Math.floor(Math.random() * count);

      if (difficulty === 'easy') {
        dataQuery = supabase.from('easy_quiz_questions').select('*').range(randomOffset, randomOffset).limit(1);
      } else if (difficulty === 'medium') {
        dataQuery = supabase.from('medium_quiz_questions').select('*').range(randomOffset, randomOffset).limit(1);
      } else {
        dataQuery = supabase.from('hard_quiz_questions').select('*').range(randomOffset, randomOffset).limit(1);
      }

      const { data, error } = await dataQuery;

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
