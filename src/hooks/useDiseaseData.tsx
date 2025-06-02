
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface DiseaseData {
  id: string;
  name: string;
  category: string;
  severity: string;
  description: string;
  symptoms: string[];
  associatedSymptoms: string[];
  drugRecommendations: any[];
  generalAdvice: string[];
  whenToSeeDoctor: string[];
}

export const useDiseaseData = () => {
  return useQuery({
    queryKey: ['disease-data'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('disease_lookup')
        .select('*')
        .order('category', { ascending: true });

      if (error) {
        throw new Error(`Failed to fetch disease data: ${error.message}`);
      }

      return data.map(item => ({
        id: item.disease_id,
        name: item.name,
        category: item.category,
        severity: item.severity,
        description: item.description,
        symptoms: item.symptoms as string[],
        associatedSymptoms: item.associated_symptoms as string[],
        drugRecommendations: item.drug_recommendations as any[],
        generalAdvice: item.general_advice as string[],
        whenToSeeDoctor: item.when_to_see_doctor as string[]
      }));
    }
  });
};

export const useDiseasesByCategory = (category: string) => {
  return useQuery({
    queryKey: ['disease-data', category],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('disease_lookup')
        .select('*')
        .eq('category', category)
        .order('name', { ascending: true });

      if (error) {
        throw new Error(`Failed to fetch diseases for category: ${error.message}`);
      }

      return data.map(item => ({
        id: item.disease_id,
        name: item.name,
        category: item.category,
        severity: item.severity,
        description: item.description,
        symptoms: item.symptoms as string[],
        associatedSymptoms: item.associated_symptoms as string[],
        drugRecommendations: item.drug_recommendations as any[],
        generalAdvice: item.general_advice as string[],
        whenToSeeDoctor: item.when_to_see_doctor as string[]
      }));
    }
  });
};
