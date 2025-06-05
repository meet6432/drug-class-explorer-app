
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export interface DrugClass {
  id: string;
  name: string;
  category: string;
  description: string;
  mechanism: string;
  uses: string;
  side_effects: string;
  examples: string[];
  created_at: string;
  updated_at: string;
}

export const useDrugClasses = () => {
  return useQuery({
    queryKey: ['drug-classes'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('drug_classes')
        .select('*')
        .order('category', { ascending: true });
      
      if (error) throw error;
      return data as DrugClass[];
    }
  });
};

export const useAddDrugClass = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (drugClass: Omit<DrugClass, 'id' | 'created_at' | 'updated_at'>) => {
      const { data, error } = await supabase
        .from('drug_classes')
        .insert([drugClass])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['drug-classes'] });
      toast.success('Drug class added successfully!');
    },
    onError: (error) => {
      toast.error('Failed to add drug class: ' + error.message);
    }
  });
};

export const useUpdateDrugClass = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, ...updates }: Partial<DrugClass> & { id: string }) => {
      const { data, error } = await supabase
        .from('drug_classes')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['drug-classes'] });
      toast.success('Drug class updated successfully!');
    },
    onError: (error) => {
      toast.error('Failed to update drug class: ' + error.message);
    }
  });
};

export const useDeleteDrugClass = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('drug_classes')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['drug-classes'] });
      toast.success('Drug class deleted successfully!');
    },
    onError: (error) => {
      toast.error('Failed to delete drug class: ' + error.message);
    }
  });
};
