
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

// Drug Interactions
export const useDrugInteractions = () => {
  return useQuery({
    queryKey: ['drug-interactions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('drug_interactions')
        .select('*')
        .order('severity_level', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });
};

export const useCheckDrugInteraction = () => {
  return useMutation({
    mutationFn: async ({ drug1, drug2 }: { drug1: string; drug2: string }) => {
      const { data, error } = await supabase
        .from('drug_interactions')
        .select('*')
        .or(`and(drug1_name.ilike.%${drug1}%,drug2_name.ilike.%${drug2}%),and(drug1_name.ilike.%${drug2}%,drug2_name.ilike.%${drug1}%)`);
      
      if (error) throw error;
      return data;
    }
  });
};

// Drug Class Relationships
export const useDrugClassRelationships = () => {
  return useQuery({
    queryKey: ['drug-class-relationships'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('drug_class_relationships')
        .select('*')
        .order('connection_strength', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });
};

export const useAddDrugClassRelationship = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (relationship: {
      parent_class: string;
      child_class: string;
      relationship_type: string;
      connection_strength: number;
      description?: string;
    }) => {
      const { data, error } = await supabase
        .from('drug_class_relationships')
        .insert([relationship])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['drug-class-relationships'] });
      toast.success('Drug class relationship added successfully!');
    },
    onError: (error) => {
      toast.error('Failed to add drug class relationship: ' + error.message);
    }
  });
};

// Clinical Cases
export const useClinicalCases = () => {
  return useQuery({
    queryKey: ['clinical-cases'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('clinical_cases')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });
};

export const useRandomClinicalCase = () => {
  return useQuery({
    queryKey: ['random-clinical-case'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('clinical_cases')
        .select('*')
        .order('random()')
        .limit(1)
        .single();
      
      if (error) throw error;
      return data;
    },
    enabled: false
  });
};

// Dosage Formulas
export const useDosageFormulas = () => {
  return useQuery({
    queryKey: ['dosage-formulas'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('dosage_formulas')
        .select('*')
        .order('drug_name');
      
      if (error) throw error;
      return data;
    }
  });
};

export const useCalculateDosage = () => {
  return useMutation({
    mutationFn: async ({ drugName, weight, age }: { drugName: string; weight?: number; age?: number }) => {
      const { data, error } = await supabase
        .from('dosage_formulas')
        .select('*')
        .ilike('drug_name', `%${drugName}%`);
      
      if (error) throw error;
      return data;
    }
  });
};

// Side Effects
export const useDrugSideEffects = () => {
  return useQuery({
    queryKey: ['drug-side-effects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('drug_side_effects')
        .select('*')
        .order('severity', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });
};

export const useSearchSideEffects = () => {
  return useMutation({
    mutationFn: async (drugName: string) => {
      const { data, error } = await supabase
        .from('drug_side_effects')
        .select('*')
        .ilike('drug_name', `%${drugName}%`)
        .order('severity', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });
};

// Pharmacokinetics
export const usePharmacokineticsData = () => {
  return useQuery({
    queryKey: ['pharmacokinetics-data'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('pharmacokinetics_data')
        .select('*')
        .order('drug_name');
      
      if (error) throw error;
      return data;
    }
  });
};

export const useGetPharmacokinetics = () => {
  return useMutation({
    mutationFn: async (drugName: string) => {
      const { data, error } = await supabase
        .from('pharmacokinetics_data')
        .select('*')
        .ilike('drug_name', `%${drugName}%`)
        .maybeSingle();
      
      if (error) throw error;
      return data;
    }
  });
};
