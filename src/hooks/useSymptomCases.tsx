
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface SymptomCase {
  id: string;
  patientProfile: string;
  symptoms: string[];
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  category: string;
}

export const useSymptomCases = () => {
  return useQuery({
    queryKey: ['symptom-cases'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('symptom_cases')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error(`Failed to fetch symptom cases: ${error.message}`);
      }

      return data.map(item => ({
        id: item.case_id,
        patientProfile: item.patient_profile,
        symptoms: item.symptoms as string[],
        question: item.question,
        options: item.options as string[],
        correctAnswer: item.correct_answer,
        explanation: item.explanation,
        category: 'Symptom Diagnosis'
      }));
    }
  });
};

export const useRandomSymptomCase = () => {
  return useQuery({
    queryKey: ['random-symptom-case'],
    queryFn: async () => {
      // Get count first
      const { count } = await supabase
        .from('symptom_cases')
        .select('*', { count: 'exact', head: true });

      if (!count || count === 0) {
        throw new Error('No symptom cases available');
      }

      // Get random offset
      const randomOffset = Math.floor(Math.random() * count);

      const { data, error } = await supabase
        .from('symptom_cases')
        .select('*')
        .range(randomOffset, randomOffset)
        .limit(1);

      if (error || !data || data.length === 0) {
        throw new Error(`Failed to fetch random symptom case: ${error?.message}`);
      }

      const item = data[0];
      return {
        id: item.case_id,
        patientProfile: item.patient_profile,
        symptoms: item.symptoms as string[],
        question: item.question,
        options: item.options as string[],
        correctAnswer: item.correct_answer,
        explanation: item.explanation,
        category: 'Symptom Diagnosis'
      };
    }
  });
};
