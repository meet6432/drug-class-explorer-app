
import { DrugClass } from './comprehensiveDrugClasses';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  type: 'drug-class' | 'mechanism' | 'side-effects' | 'indication' | 'symptom-treatment';
}

export interface SymptomCase {
  id: string;
  symptom: string;
  description: string;
  recommendedDrugClasses: string[];
  explanation: string;
}

export const symptomCases: SymptomCase[] = [
  {
    id: "hypertension",
    symptom: "High Blood Pressure",
    description: "Patient presents with elevated blood pressure readings (>140/90 mmHg)",
    recommendedDrugClasses: ["ACE Inhibitors", "Beta Blockers", "Calcium Channel Blockers", "Angiotensin Receptor Blockers"],
    explanation: "First-line treatments include ACE inhibitors, ARBs, CCBs, and diuretics. Beta blockers are used in specific cases."
  },
  {
    id: "chest-pain",
    symptom: "Chest Pain (Angina)",
    description: "Patient experiences chest discomfort during physical activity",
    recommendedDrugClasses: ["Beta Blockers", "Calcium Channel Blockers", "Antiplatelet agents"],
    explanation: "Beta blockers reduce heart workload, CCBs provide vasodilation, antiplatelets prevent clot formation."
  },
  {
    id: "bacterial-infection",
    symptom: "Bacterial Infection",
    description: "Patient shows signs of bacterial infection with fever and elevated WBC count",
    recommendedDrugClasses: ["Penicillins", "Cephalosporins", "Fluoroquinolones", "Aminoglycosides"],
    explanation: "Choice depends on infection site, severity, and bacterial resistance patterns."
  },
  {
    id: "anxiety",
    symptom: "Anxiety Disorder",
    description: "Patient experiences excessive worry, restlessness, and panic attacks",
    recommendedDrugClasses: ["Benzodiazepines", "Selective serotonin reuptake inhibitors"],
    explanation: "SSRIs for long-term treatment, benzodiazepines for acute episodes (short-term use)."
  },
  {
    id: "diabetes",
    symptom: "Type 2 Diabetes",
    description: "Patient has elevated blood glucose levels and HbA1c >7%",
    recommendedDrugClasses: ["Alpha-Glucosidase Inhibitors", "SGLT-2 inhibitors", "GLP-1 Agonists (Incretin Mimetics)"],
    explanation: "Metformin is first-line, then add other classes based on patient factors and glycemic control."
  },
  {
    id: "asthma",
    symptom: "Asthma Attack",
    description: "Patient presents with wheezing, shortness of breath, and chest tightness",
    recommendedDrugClasses: ["Adrenergic Bronchodilators", "Inhaled corticosteroids"],
    explanation: "Short-acting beta agonists for acute relief, inhaled corticosteroids for long-term control."
  },
  {
    id: "gerd",
    symptom: "Gastroesophageal Reflux",
    description: "Patient complains of heartburn and acid regurgitation",
    recommendedDrugClasses: ["Proton Pump Inhibitors", "H2 antagonists", "Antacids"],
    explanation: "PPIs are most effective for severe GERD, H2 blockers for moderate symptoms, antacids for mild cases."
  },
  {
    id: "depression",
    symptom: "Major Depression",
    description: "Patient shows persistent sadness, loss of interest, and sleep disturbances",
    recommendedDrugClasses: ["Selective serotonin reuptake inhibitors", "Serotonin-norepinephrine reuptake inhibitors"],
    explanation: "SSRIs are first-line due to better tolerability, SNRIs for patients with comorbid pain conditions."
  }
];

export const easyQuestions: QuizQuestion[] = [
  {
    id: "easy-1",
    question: "Which drug class is commonly used as a first-line treatment for hypertension?",
    options: ["Beta Blockers", "ACE Inhibitors", "Antihistamines", "Antacids"],
    correctAnswer: "ACE Inhibitors",
    explanation: "ACE inhibitors are recommended as first-line therapy for most patients with hypertension.",
    category: "Cardiovascular",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-2",
    question: "What is the primary mechanism of action of Beta Blockers?",
    options: ["Block calcium channels", "Block beta-adrenergic receptors", "Inhibit ACE enzyme", "Block sodium channels"],
    correctAnswer: "Block beta-adrenergic receptors",
    explanation: "Beta blockers work by blocking beta-adrenergic receptors, reducing heart rate and blood pressure.",
    category: "Cardiovascular",
    difficulty: "easy",
    type: "mechanism"
  },
  {
    id: "easy-3",
    question: "Which of the following is an example of a Proton Pump Inhibitor?",
    options: ["Atenolol", "Omeprazole", "Amoxicillin", "Loratadine"],
    correctAnswer: "Omeprazole",
    explanation: "Omeprazole (Omez) is a proton pump inhibitor used to reduce stomach acid production.",
    category: "Gastrointestinal",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-4",
    question: "What is the main therapeutic use of Antihistamines?",
    options: ["Lower blood pressure", "Treat allergic reactions", "Reduce stomach acid", "Fight bacterial infections"],
    correctAnswer: "Treat allergic reactions",
    explanation: "Antihistamines block histamine H1 receptors to treat allergic reactions and symptoms.",
    category: "Respiratory",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-5",
    question: "Which drug class would you recommend for a patient with chest pain (angina)?",
    options: ["Antibiotics", "Beta Blockers", "Antifungals", "Laxatives"],
    correctAnswer: "Beta Blockers",
    explanation: "Beta blockers reduce heart workload and oxygen demand, making them effective for angina treatment.",
    category: "Cardiovascular",
    difficulty: "easy",
    type: "symptom-treatment"
  },
  // Adding more easy questions...
  {
    id: "easy-6",
    question: "Penicillins belong to which category of antimicrobial agents?",
    options: ["Antivirals", "Antifungals", "Antibiotics", "Antiparasitics"],
    correctAnswer: "Antibiotics",
    explanation: "Penicillins are beta-lactam antibiotics effective against bacterial infections.",
    category: "Antimicrobial",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-7",
    question: "What is a common side effect of ACE Inhibitors?",
    options: ["Dry cough", "Hair loss", "Weight gain", "Blurred vision"],
    correctAnswer: "Dry cough",
    explanation: "Dry cough is a well-known side effect of ACE inhibitors, affecting about 10-15% of patients.",
    category: "Cardiovascular",
    difficulty: "easy",
    type: "side-effects"
  },
  {
    id: "easy-8",
    question: "For a patient with bacterial pneumonia, which drug class would be most appropriate?",
    options: ["Antihistamines", "Antibiotics", "Antacids", "Analgesics"],
    correctAnswer: "Antibiotics",
    explanation: "Bacterial pneumonia requires antibiotic treatment to eliminate the causative bacteria.",
    category: "Antimicrobial",
    difficulty: "easy",
    type: "symptom-treatment"
  },
  {
    id: "easy-9",
    question: "Which drug class is used to treat asthma by opening airways?",
    options: ["Adrenergic Bronchodilators", "Antihypertensives", "Antibiotics", "Antacids"],
    correctAnswer: "Adrenergic Bronchodilators",
    explanation: "Adrenergic bronchodilators (like salbutamol) relax bronchial smooth muscle to open airways.",
    category: "Respiratory",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-10",
    question: "What is the primary use of Calcium Channel Blockers?",
    options: ["Treat depression", "Lower blood pressure", "Fight infections", "Reduce fever"],
    correctAnswer: "Lower blood pressure",
    explanation: "Calcium channel blockers cause vasodilation, effectively lowering blood pressure.",
    category: "Cardiovascular",
    difficulty: "easy",
    type: "indication"
  }
  // Continue with 90+ more easy questions...
];

export const mediumQuestions: QuizQuestion[] = [
  {
    id: "medium-1",
    question: "Which mechanism explains why ACE inhibitors can cause hyperkalemia?",
    options: [
      "Increased potassium absorption in gut",
      "Reduced aldosterone secretion leading to potassium retention",
      "Direct potassium channel blockade",
      "Increased potassium release from cells"
    ],
    correctAnswer: "Reduced aldosterone secretion leading to potassium retention",
    explanation: "ACE inhibitors reduce angiotensin II, which decreases aldosterone secretion, leading to potassium retention.",
    category: "Cardiovascular",
    difficulty: "medium",
    type: "mechanism"
  },
  {
    id: "medium-2",
    question: "A patient with diabetes and hypertension should avoid which beta blocker characteristic?",
    options: ["Cardioselectivity", "Non-selectivity", "Water solubility", "Long half-life"],
    correctAnswer: "Non-selectivity",
    explanation: "Non-selective beta blockers can mask hypoglycemia symptoms and worsen insulin resistance in diabetics.",
    category: "Cardiovascular",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-3",
    question: "Why are fluoroquinolones contraindicated in pediatric patients?",
    options: [
      "Cause liver toxicity",
      "Affect cartilage development",
      "Cause kidney damage",
      "Interfere with brain development"
    ],
    correctAnswer: "Affect cartilage development",
    explanation: "Fluoroquinolones can cause arthropathy and affect cartilage development in growing children.",
    category: "Antimicrobial",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-4",
    question: "A patient presents with severe gastroesophageal reflux. Which combination therapy would be most effective?",
    options: [
      "PPI + H2 antagonist",
      "PPI + Antacid",
      "H2 antagonist + Antacid",
      "PPI + Prokinetic agent"
    ],
    correctAnswer: "PPI + Prokinetic agent",
    explanation: "PPI reduces acid production while prokinetic agents improve gastric motility and LES function.",
    category: "Gastrointestinal",
    difficulty: "medium",
    type: "symptom-treatment"
  },
  {
    id: "medium-5",
    question: "Which benzodiazepine characteristic makes it preferred for elderly patients?",
    options: ["Long half-life", "Short half-life", "High potency", "Hepatic metabolism"],
    correctAnswer: "Short half-life",
    explanation: "Short-acting benzodiazepines are preferred in elderly to reduce accumulation and fall risk.",
    category: "Central Nervous System",
    difficulty: "medium",
    type: "side-effects"
  }
  // Continue with 95+ more medium questions...
];

export const hardQuestions: QuizQuestion[] = [
  {
    id: "hard-1",
    question: "A patient on warfarin develops a drug interaction with a newly prescribed medication that inhibits CYP2C9. What is the most likely clinical consequence?",
    options: [
      "Decreased warfarin efficacy requiring dose increase",
      "Increased bleeding risk due to elevated warfarin levels",
      "No significant interaction",
      "Warfarin-induced skin necrosis"
    ],
    correctAnswer: "Increased bleeding risk due to elevated warfarin levels",
    explanation: "CYP2C9 inhibition reduces warfarin metabolism, leading to increased drug levels and bleeding risk.",
    category: "Cardiovascular",
    difficulty: "hard",
    type: "mechanism"
  },
  {
    id: "hard-2",
    question: "In heart failure with reduced ejection fraction, which combination provides the greatest mortality benefit?",
    options: [
      "ACE inhibitor + Beta blocker + Diuretic",
      "ARB + Calcium channel blocker + Diuretic",
      "ACE inhibitor + Aldosterone antagonist + Beta blocker",
      "Digoxin + Diuretic + Beta blocker"
    ],
    correctAnswer: "ACE inhibitor + Aldosterone antagonist + Beta blocker",
    explanation: "This combination addresses neurohormonal activation and has proven mortality benefits in HFrEF.",
    category: "Cardiovascular",
    difficulty: "hard",
    type: "indication"
  },
  {
    id: "hard-3",
    question: "A patient with atrial fibrillation and CrCl of 30 mL/min needs anticoagulation. Which approach is most appropriate?",
    options: [
      "Standard dose warfarin",
      "Reduced dose dabigatran",
      "Standard dose rivaroxaban",
      "Aspirin plus clopidogrel"
    ],
    correctAnswer: "Reduced dose dabigatran",
    explanation: "Dabigatran requires dose reduction in moderate renal impairment (CrCl 30-50 mL/min).",
    category: "Cardiovascular",
    difficulty: "hard",
    type: "symptom-treatment"
  },
  {
    id: "hard-4",
    question: "Which mechanism explains the paradoxical worsening of heart failure when beta blockers are initiated?",
    options: [
      "Negative chronotropic effect only",
      "Removal of compensatory sympathetic drive",
      "Direct myocardial toxicity",
      "Increased afterload"
    ],
    correctAnswer: "Removal of compensatory sympathetic drive",
    explanation: "Initial beta blockade removes compensatory sympathetic stimulation, requiring gradual titration.",
    category: "Cardiovascular",
    difficulty: "hard",
    type: "mechanism"
  },
  {
    id: "hard-5",
    question: "A diabetic patient on metformin requires contrast imaging. What is the primary concern and management?",
    options: [
      "Lactic acidosis risk; hold metformin 48h post-contrast",
      "Hypoglycemia; reduce dose by 50%",
      "Kidney stones; increase hydration only",
      "No specific concerns; continue normally"
    ],
    correctAnswer: "Lactic acidosis risk; hold metformin 48h post-contrast",
    explanation: "Contrast can cause acute kidney injury, increasing metformin levels and lactic acidosis risk.",
    category: "Endocrine",
    difficulty: "hard",
    type: "side-effects"
  }
  // Continue with 95+ more hard questions...
];

export const getAllQuestions = (): QuizQuestion[] => {
  return [...easyQuestions, ...mediumQuestions, ...hardQuestions];
};

export const getQuestionsByDifficulty = (difficulty: 'easy' | 'medium' | 'hard'): QuizQuestion[] => {
  switch (difficulty) {
    case 'easy':
      return easyQuestions;
    case 'medium':
      return mediumQuestions;
    case 'hard':
      return hardQuestions;
    default:
      return easyQuestions;
  }
};
