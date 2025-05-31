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
