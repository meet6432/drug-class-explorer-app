
// Legacy exports for backward compatibility
// The actual data is now fetched from Supabase using hooks

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
  patientProfile: string;
  symptoms: string[];
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  category: string;
}

// These functions are deprecated - use the hooks instead
export const getQuestionsByDifficulty = (difficulty: 'easy' | 'medium' | 'hard'): QuizQuestion[] => {
  console.warn('getQuestionsByDifficulty is deprecated. Use useQuizQuestions hook instead.');
  return [];
};

export const getRandomQuestion = (difficulty: 'easy' | 'medium' | 'hard'): QuizQuestion => {
  console.warn('getRandomQuestion is deprecated. Use useRandomQuizQuestion hook instead.');
  return {
    id: '',
    question: '',
    options: [],
    correctAnswer: '',
    explanation: '',
    category: ''
  };
};

// Empty arrays for backward compatibility
export const symptomCases: SymptomCase[] = [];
