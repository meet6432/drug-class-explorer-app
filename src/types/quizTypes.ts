
export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  category: string;
}

export interface SymptomCase {
  id: string;
  symptom: string;
  description: string;
  recommendedDrugClasses: string[];
  explanation: string;
}
