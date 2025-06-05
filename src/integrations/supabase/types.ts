export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      bills: {
        Row: {
          bill_amount: number
          bill_number: string
          created_at: string
          employees: string[]
          id: string
          paid: boolean
          paid_at: string | null
        }
        Insert: {
          bill_amount: number
          bill_number: string
          created_at?: string
          employees?: string[]
          id?: string
          paid?: boolean
          paid_at?: string | null
        }
        Update: {
          bill_amount?: number
          bill_number?: string
          created_at?: string
          employees?: string[]
          id?: string
          paid?: boolean
          paid_at?: string | null
        }
        Relationships: []
      }
      clinical_cases: {
        Row: {
          case_id: string
          category: string
          created_at: string
          difficulty_level: string
          estimated_duration: number | null
          id: string
          initial_presentation: string
          learning_objectives: Json | null
          patient_info: Json
          steps: Json
          title: string
          updated_at: string
        }
        Insert: {
          case_id: string
          category: string
          created_at?: string
          difficulty_level: string
          estimated_duration?: number | null
          id?: string
          initial_presentation: string
          learning_objectives?: Json | null
          patient_info: Json
          steps: Json
          title: string
          updated_at?: string
        }
        Update: {
          case_id?: string
          category?: string
          created_at?: string
          difficulty_level?: string
          estimated_duration?: number | null
          id?: string
          initial_presentation?: string
          learning_objectives?: Json | null
          patient_info?: Json
          steps?: Json
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      contributions: {
        Row: {
          amount: number
          created_at: string
          currency: string
          event_id: string
          guest_name: string
          id: string
          phone: string
          village: string | null
        }
        Insert: {
          amount: number
          created_at?: string
          currency?: string
          event_id: string
          guest_name: string
          id?: string
          phone: string
          village?: string | null
        }
        Update: {
          amount?: number
          created_at?: string
          currency?: string
          event_id?: string
          guest_name?: string
          id?: string
          phone?: string
          village?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contributions_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      disease_lookup: {
        Row: {
          associated_symptoms: Json
          category: string
          created_at: string
          description: string
          disease_id: string
          drug_recommendations: Json
          general_advice: Json
          id: string
          name: string
          severity: string
          symptoms: Json
          updated_at: string
          when_to_see_doctor: Json
        }
        Insert: {
          associated_symptoms: Json
          category: string
          created_at?: string
          description: string
          disease_id: string
          drug_recommendations: Json
          general_advice: Json
          id?: string
          name: string
          severity: string
          symptoms: Json
          updated_at?: string
          when_to_see_doctor: Json
        }
        Update: {
          associated_symptoms?: Json
          category?: string
          created_at?: string
          description?: string
          disease_id?: string
          drug_recommendations?: Json
          general_advice?: Json
          id?: string
          name?: string
          severity?: string
          symptoms?: Json
          updated_at?: string
          when_to_see_doctor?: Json
        }
        Relationships: []
      }
      dosage_formulas: {
        Row: {
          contraindications: Json | null
          created_at: string
          drug_name: string
          formula: string
          formula_type: string
          id: string
          indication: string
          parameters: Json
          safety_limits: Json | null
          special_populations: Json | null
          units: string
          updated_at: string
        }
        Insert: {
          contraindications?: Json | null
          created_at?: string
          drug_name: string
          formula: string
          formula_type: string
          id?: string
          indication: string
          parameters: Json
          safety_limits?: Json | null
          special_populations?: Json | null
          units: string
          updated_at?: string
        }
        Update: {
          contraindications?: Json | null
          created_at?: string
          drug_name?: string
          formula?: string
          formula_type?: string
          id?: string
          indication?: string
          parameters?: Json
          safety_limits?: Json | null
          special_populations?: Json | null
          units?: string
          updated_at?: string
        }
        Relationships: []
      }
      drug_class_relationships: {
        Row: {
          child_class: string
          connection_strength: number | null
          created_at: string
          description: string | null
          id: string
          parent_class: string
          relationship_type: string
          updated_at: string
          visual_position: Json | null
        }
        Insert: {
          child_class: string
          connection_strength?: number | null
          created_at?: string
          description?: string | null
          id?: string
          parent_class: string
          relationship_type: string
          updated_at?: string
          visual_position?: Json | null
        }
        Update: {
          child_class?: string
          connection_strength?: number | null
          created_at?: string
          description?: string | null
          id?: string
          parent_class?: string
          relationship_type?: string
          updated_at?: string
          visual_position?: Json | null
        }
        Relationships: []
      }
      drug_classes: {
        Row: {
          category: string
          created_at: string
          description: string
          examples: Json
          id: string
          mechanism: string
          name: string
          side_effects: string
          updated_at: string
          uses: string
        }
        Insert: {
          category: string
          created_at?: string
          description: string
          examples?: Json
          id?: string
          mechanism: string
          name: string
          side_effects: string
          updated_at?: string
          uses: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string
          examples?: Json
          id?: string
          mechanism?: string
          name?: string
          side_effects?: string
          updated_at?: string
          uses?: string
        }
        Relationships: []
      }
      drug_interactions: {
        Row: {
          clinical_effects: Json | null
          created_at: string
          description: string
          drug1_name: string
          drug2_name: string
          id: string
          interaction_type: string
          management_recommendations: string | null
          mechanism: string | null
          reference_sources: string | null
          severity_level: number
          updated_at: string
        }
        Insert: {
          clinical_effects?: Json | null
          created_at?: string
          description: string
          drug1_name: string
          drug2_name: string
          id?: string
          interaction_type: string
          management_recommendations?: string | null
          mechanism?: string | null
          reference_sources?: string | null
          severity_level?: number
          updated_at?: string
        }
        Update: {
          clinical_effects?: Json | null
          created_at?: string
          description?: string
          drug1_name?: string
          drug2_name?: string
          id?: string
          interaction_type?: string
          management_recommendations?: string | null
          mechanism?: string | null
          reference_sources?: string | null
          severity_level?: number
          updated_at?: string
        }
        Relationships: []
      }
      drug_side_effects: {
        Row: {
          body_system: string
          created_at: string
          description: string | null
          drug_name: string
          frequency: string
          frequency_percentage: string | null
          id: string
          management: string | null
          monitoring_required: boolean | null
          onset_time: string | null
          severity: string
          side_effect: string
          updated_at: string
        }
        Insert: {
          body_system: string
          created_at?: string
          description?: string | null
          drug_name: string
          frequency: string
          frequency_percentage?: string | null
          id?: string
          management?: string | null
          monitoring_required?: boolean | null
          onset_time?: string | null
          severity: string
          side_effect: string
          updated_at?: string
        }
        Update: {
          body_system?: string
          created_at?: string
          description?: string | null
          drug_name?: string
          frequency?: string
          frequency_percentage?: string | null
          id?: string
          management?: string | null
          monitoring_required?: boolean | null
          onset_time?: string | null
          severity?: string
          side_effect?: string
          updated_at?: string
        }
        Relationships: []
      }
      easy_quiz_questions: {
        Row: {
          category: string
          correct_answer: string
          created_at: string
          explanation: string
          id: string
          options: Json
          question: string
          question_id: string
          updated_at: string
        }
        Insert: {
          category: string
          correct_answer: string
          created_at?: string
          explanation: string
          id?: string
          options: Json
          question: string
          question_id: string
          updated_at?: string
        }
        Update: {
          category?: string
          correct_answer?: string
          created_at?: string
          explanation?: string
          id?: string
          options?: Json
          question?: string
          question_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      event_categories: {
        Row: {
          created_at: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      event_hosts: {
        Row: {
          created_at: string
          event_id: string
          host_id: string
        }
        Insert: {
          created_at?: string
          event_id: string
          host_id: string
        }
        Update: {
          created_at?: string
          event_id?: string
          host_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_hosts_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_hosts_host_id_fkey"
            columns: ["host_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          category_id: string | null
          created_at: string
          date: string
          description: string | null
          id: string
          location: string
          manager_id: string
          name: string
        }
        Insert: {
          category_id?: string | null
          created_at?: string
          date: string
          description?: string | null
          id?: string
          location: string
          manager_id: string
          name: string
        }
        Update: {
          category_id?: string | null
          created_at?: string
          date?: string
          description?: string | null
          id?: string
          location?: string
          manager_id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "events_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "event_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_manager_id_fkey"
            columns: ["manager_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      guests: {
        Row: {
          check_in: boolean
          created_at: string
          event_id: string
          id: string
          name: string
          phone: string
          village: string | null
        }
        Insert: {
          check_in?: boolean
          created_at?: string
          event_id: string
          id?: string
          name: string
          phone: string
          village?: string | null
        }
        Update: {
          check_in?: boolean
          created_at?: string
          event_id?: string
          id?: string
          name?: string
          phone?: string
          village?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "guests_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      hard_quiz_questions: {
        Row: {
          category: string
          correct_answer: string
          created_at: string
          explanation: string
          id: string
          options: Json
          question: string
          question_id: string
          updated_at: string
        }
        Insert: {
          category: string
          correct_answer: string
          created_at?: string
          explanation: string
          id?: string
          options: Json
          question: string
          question_id: string
          updated_at?: string
        }
        Update: {
          category?: string
          correct_answer?: string
          created_at?: string
          explanation?: string
          id?: string
          options?: Json
          question?: string
          question_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      medium_quiz_questions: {
        Row: {
          category: string
          correct_answer: string
          created_at: string
          explanation: string
          id: string
          options: Json
          question: string
          question_id: string
          updated_at: string
        }
        Insert: {
          category: string
          correct_answer: string
          created_at?: string
          explanation: string
          id?: string
          options: Json
          question: string
          question_id: string
          updated_at?: string
        }
        Update: {
          category?: string
          correct_answer?: string
          created_at?: string
          explanation?: string
          id?: string
          options?: Json
          question?: string
          question_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string
          event_id: string
          guest_phone: string
          id: string
          message: string
          status: string
        }
        Insert: {
          created_at?: string
          event_id: string
          guest_phone: string
          id?: string
          message: string
          status: string
        }
        Update: {
          created_at?: string
          event_id?: string
          guest_phone?: string
          id?: string
          message?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      pharmacokinetics_data: {
        Row: {
          absorption_rate: number | null
          bioavailability: number | null
          clearance: number | null
          created_at: string
          distribution_volume: number | null
          dosing_frequency: string | null
          drug_name: string
          elimination_half_life: number | null
          excretion_route: Json | null
          id: string
          metabolism_pathway: Json | null
          peak_concentration: number | null
          peak_time: number | null
          protein_binding: number | null
          route_of_administration: string
          updated_at: string
        }
        Insert: {
          absorption_rate?: number | null
          bioavailability?: number | null
          clearance?: number | null
          created_at?: string
          distribution_volume?: number | null
          dosing_frequency?: string | null
          drug_name: string
          elimination_half_life?: number | null
          excretion_route?: Json | null
          id?: string
          metabolism_pathway?: Json | null
          peak_concentration?: number | null
          peak_time?: number | null
          protein_binding?: number | null
          route_of_administration: string
          updated_at?: string
        }
        Update: {
          absorption_rate?: number | null
          bioavailability?: number | null
          clearance?: number | null
          created_at?: string
          distribution_volume?: number | null
          dosing_frequency?: string | null
          drug_name?: string
          elimination_half_life?: number | null
          excretion_route?: Json | null
          id?: string
          metabolism_pathway?: Json | null
          peak_concentration?: number | null
          peak_time?: number | null
          protein_binding?: number | null
          route_of_administration?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string
          full_name: string | null
          id: string
          phone: string | null
          role: string
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          full_name?: string | null
          id: string
          phone?: string | null
          role?: string
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string | null
          id?: string
          phone?: string | null
          role?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      quiz_progress: {
        Row: {
          badges: Json | null
          correct_answers: number | null
          created_at: string | null
          current_part: number | null
          difficulty: string
          id: string
          questions_answered: number | null
          total_score: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          badges?: Json | null
          correct_answers?: number | null
          created_at?: string | null
          current_part?: number | null
          difficulty: string
          id?: string
          questions_answered?: number | null
          total_score?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          badges?: Json | null
          correct_answers?: number | null
          created_at?: string | null
          current_part?: number | null
          difficulty?: string
          id?: string
          questions_answered?: number | null
          total_score?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "quiz_progress_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      quiz_questions: {
        Row: {
          category: string
          correct_answer: string
          created_at: string
          difficulty: string
          explanation: string
          id: string
          options: Json
          question: string
          question_id: string
          updated_at: string
        }
        Insert: {
          category: string
          correct_answer: string
          created_at?: string
          difficulty: string
          explanation: string
          id?: string
          options: Json
          question: string
          question_id: string
          updated_at?: string
        }
        Update: {
          category?: string
          correct_answer?: string
          created_at?: string
          difficulty?: string
          explanation?: string
          id?: string
          options?: Json
          question?: string
          question_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      subscription_plans: {
        Row: {
          created_at: string
          currency: string
          event_limit: number
          features: Json | null
          guest_limit: number
          host_limit: number
          id: string
          name: string
          price: number
        }
        Insert: {
          created_at?: string
          currency?: string
          event_limit: number
          features?: Json | null
          guest_limit: number
          host_limit: number
          id?: string
          name: string
          price: number
        }
        Update: {
          created_at?: string
          currency?: string
          event_limit?: number
          features?: Json | null
          guest_limit?: number
          host_limit?: number
          id?: string
          name?: string
          price?: number
        }
        Relationships: []
      }
      symptom_cases: {
        Row: {
          case_id: string
          correct_answer: string
          created_at: string
          explanation: string
          id: string
          options: Json
          patient_profile: string
          question: string
          symptoms: Json
          updated_at: string
        }
        Insert: {
          case_id: string
          correct_answer: string
          created_at?: string
          explanation: string
          id?: string
          options: Json
          patient_profile: string
          question: string
          symptoms: Json
          updated_at?: string
        }
        Update: {
          case_id?: string
          correct_answer?: string
          created_at?: string
          explanation?: string
          id?: string
          options?: Json
          patient_profile?: string
          question?: string
          symptoms?: Json
          updated_at?: string
        }
        Relationships: []
      }
      teacher_tests: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          is_active: boolean | null
          questions: Json
          share_link: string | null
          teacher_id: string
          time_limit: number | null
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          questions: Json
          share_link?: string | null
          teacher_id: string
          time_limit?: number | null
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          questions?: Json
          share_link?: string | null
          teacher_id?: string
          time_limit?: number | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "teacher_tests_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      test_submissions: {
        Row: {
          answers: Json
          id: string
          score: number
          student_id: string
          student_name: string
          submitted_at: string | null
          test_id: string
          total_questions: number
        }
        Insert: {
          answers: Json
          id?: string
          score: number
          student_id: string
          student_name: string
          submitted_at?: string | null
          test_id: string
          total_questions: number
        }
        Update: {
          answers?: Json
          id?: string
          score?: number
          student_id?: string
          student_name?: string
          submitted_at?: string | null
          test_id?: string
          total_questions?: number
        }
        Relationships: [
          {
            foreignKeyName: "test_submissions_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "test_submissions_test_id_fkey"
            columns: ["test_id"]
            isOneToOne: false
            referencedRelation: "teacher_tests"
            referencedColumns: ["id"]
          },
        ]
      }
      user_subscriptions: {
        Row: {
          created_at: string
          expires_at: string | null
          id: string
          plan_id: string
          started_at: string
          status: string
          user_id: string
        }
        Insert: {
          created_at?: string
          expires_at?: string | null
          id?: string
          plan_id: string
          started_at?: string
          status?: string
          user_id: string
        }
        Update: {
          created_at?: string
          expires_at?: string | null
          id?: string
          plan_id?: string
          started_at?: string
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_subscriptions_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "subscription_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_share_link: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_user_limits: {
        Args: { user_uuid: string }
        Returns: {
          event_limit: number
          guest_limit: number
          host_limit: number
          features: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
