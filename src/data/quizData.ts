import { QuizQuestion } from '../types/quizTypes';

const easyQuizQuestions: QuizQuestion[] = [
  {
    id: 'easy-1',
    question: 'Which drug class is primarily used to treat hypertension by blocking beta-adrenergic receptors?',
    options: ['Beta Blockers', 'ACE Inhibitors', 'Calcium Channel Blockers', 'Diuretics'],
    correctAnswer: 'Beta Blockers',
    explanation: 'Beta blockers reduce heart rate and blood pressure by inhibiting beta-adrenergic receptors.',
    category: 'Cardiovascular'
  },
  {
    id: 'easy-2',
    question: 'Which antibiotic class inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins?',
    options: ['Penicillins', 'Macrolides', 'Fluoroquinolones', 'Aminoglycosides'],
    correctAnswer: 'Penicillins',
    explanation: 'Penicillins are beta-lactam antibiotics that inhibit bacterial cell wall synthesis.',
    category: 'Antimicrobial'
  },
  {
    id: 'easy-3',
    question: 'Which drug class is used to lower cholesterol by inhibiting HMG-CoA reductase?',
    options: ['Statins', 'Diuretics', 'ACE Inhibitors', 'Calcium Channel Blockers'],
    correctAnswer: 'Statins',
    explanation: 'Statins inhibit HMG-CoA reductase, reducing LDL cholesterol production.',
    category: 'Cardiovascular'
  },
  {
    id: 'easy-4',
    question: 'Which central nervous system drug class is used for depression and anxiety by inhibiting serotonin reuptake?',
    options: ['SSRIs', 'Benzodiazepines', 'Antipsychotics', 'Antiepileptics'],
    correctAnswer: 'SSRIs',
    explanation: 'SSRIs increase synaptic serotonin levels by inhibiting its reuptake.',
    category: 'Central Nervous System'
  },
  {
    id: 'easy-5',
    question: 'Which gastrointestinal drug class reduces gastric acid production by inhibiting H+/K+ ATPase?',
    options: ['Proton Pump Inhibitors', 'H2 Receptor Antagonists', 'Antacids', 'Laxatives'],
    correctAnswer: 'Proton Pump Inhibitors',
    explanation: 'PPIs inhibit the proton pump in parietal cells, reducing acid secretion.',
    category: 'Gastrointestinal'
  }
];

const mediumQuizQuestions: QuizQuestion[] = [
  {
    id: 'medium-1',
    question: 'Which beta blocker is cardioselective and preferred in patients with COPD?',
    options: ['Atenolol', 'Propranolol', 'Carvedilol', 'Labetalol'],
    correctAnswer: 'Atenolol',
    explanation: 'Atenolol selectively blocks beta-1 receptors, reducing bronchospasm risk in COPD.',
    category: 'Cardiovascular'
  },
  {
    id: 'medium-2',
    question: 'Which antibiotic class inhibits bacterial protein synthesis by binding to the 50S ribosomal subunit?',
    options: ['Macrolides', 'Aminoglycosides', 'Tetracyclines', 'Fluoroquinolones'],
    correctAnswer: 'Macrolides',
    explanation: 'Macrolides bind to the 50S subunit, preventing peptide chain elongation.',
    category: 'Antimicrobial'
  },
  {
    id: 'medium-3',
    question: 'Which diuretic acts on the distal convoluted tubule to increase sodium and water excretion?',
    options: ['Thiazide diuretics', 'Loop diuretics', 'Potassium-sparing diuretics', 'Osmotic diuretics'],
    correctAnswer: 'Thiazide diuretics',
    explanation: 'Thiazides inhibit sodium reabsorption in the distal tubule, increasing diuresis.',
    category: 'Cardiovascular'
  },
  {
    id: 'medium-4',
    question: 'Which antiepileptic drug enhances GABA activity to stabilize neuronal activity?',
    options: ['Valproate', 'Phenytoin', 'Carbamazepine', 'Ethosuximide'],
    correctAnswer: 'Valproate',
    explanation: 'Valproate increases GABA levels, providing anticonvulsant effects.',
    category: 'Central Nervous System'
  },
  {
    id: 'medium-5',
    question: 'Which proton pump inhibitor is metabolized primarily by CYP2C19?',
    options: ['Omeprazole', 'Pantoprazole', 'Rabeprazole', 'Esomeprazole'],
    correctAnswer: 'Omeprazole',
    explanation: 'Omeprazole is metabolized by CYP2C19, affecting its efficacy in some patients.',
    category: 'Gastrointestinal'
  }
];

const hardQuizQuestions: QuizQuestion[] = [
  {
    id: 'hard-1',
    question: 'Which specific penicillin-binding protein (PBP) is primarily targeted by Cephalosporins to disrupt bacterial cell wall synthesis?',
    options: ['PBP1a', 'PBP2a', 'PBP3', 'PBP4'],
    correctAnswer: 'PBP3',
    explanation: 'Cephalosporins, like Cefixime (Zifi by FDC Ltd.), primarily target PBP3 in Gram-negative bacteria, disrupting peptidoglycan cross-linking, leading to cell lysis. PBP2a is associated with MRSA resistance.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-2',
    question: 'Which Indian brand of Azithromycin is contraindicated in patients with a history of cholestatic jaundice?',
    options: ['Azithral', 'Clincin', 'Rosuvas', 'Voveran'],
    correctAnswer: 'Azithral',
    explanation: 'Azithral (Azithromycin by Alembic) is a Macrolide contraindicated in patients with cholestatic jaundice due to its potential to cause hepatotoxicity.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-3',
    question: 'What is the primary reason Tetracyclines like Doxycycline are avoided in children under 8 years?',
    options: ['Risk of nephrotoxicity', 'Tooth discoloration', 'QT prolongation', 'Bone marrow suppression'],
    correctAnswer: 'Tooth discoloration',
    explanation: 'Tetracyclines, like Doxycycline (Doxy-1 by USV Ltd.), bind to calcium in developing teeth, causing permanent discoloration, hence avoided in children under 8.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-4',
    question: 'Which rare but serious side effect of Fluoroquinolones like Ofloxacin requires immediate discontinuation?',
    options: ['Tendon rupture', 'Hyperglycemia', 'Alopecia', 'Dry mouth'],
    correctAnswer: 'Tendon rupture',
    explanation: 'Fluoroquinolones, like Ofloxacin (Oflum by Cipla), can cause tendonitis and rupture, particularly in the Achilles tendon, necessitating immediate cessation.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-5',
    question: 'Which Indian drug, an Oxazolidinone, requires monitoring for serotonin syndrome when used with SSRIs?',
    options: ['Zyvozid', 'Pan-D', 'Liv.52', 'Telma'],
    correctAnswer: 'Zyvozid',
    explanation: 'Zyvozid (Linezolid by Pfizer India) inhibits monoamine oxidase, risking serotonin syndrome when combined with SSRIs like Sertraline.',
    category: 'Antimicrobial'
  }
];

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export const getQuestionsByDifficulty = (difficulty: 'easy' | 'medium' | 'hard'): QuizQuestion[] => {
  let questions: QuizQuestion[] = [];
  
  switch (difficulty) {
    case 'easy':
      questions = [...easyQuizQuestions];
      break;
    case 'medium':
      questions = [...mediumQuizQuestions];
      break;
    case 'hard':
      questions = [...hardQuizQuestions];
      break;
    default:
      questions = [...easyQuizQuestions];
  }
  
  return shuffleArray(questions);
};

// Symptom Case interface and data for SymptomDiagnosis component
export interface SymptomCase {
  id: string;
  symptom: string;
  description: string;
  recommendedDrugClasses: string[];
  explanation: string;
}

export const symptomCases: SymptomCase[] = [
  {
    id: 'case-1',
    symptom: 'Hypertension',
    description: 'A 45-year-old patient presents with consistently elevated blood pressure readings (160/95 mmHg) during multiple visits. No signs of end-organ damage.',
    recommendedDrugClasses: ['ACE Inhibitors', 'Beta Blockers', 'Thiazide Diuretics', 'Calcium Channel Blockers'],
    explanation: 'First-line antihypertensive agents include ACE inhibitors for cardioprotection, thiazide diuretics for volume reduction, and calcium channel blockers or beta blockers based on patient comorbidities.'
  },
  {
    id: 'case-2',
    symptom: 'Type 2 Diabetes',
    description: 'A 52-year-old patient with HbA1c of 8.5%, fasting glucose 180 mg/dL, and no contraindications to standard therapy.',
    recommendedDrugClasses: ['Metformin', 'Sulfonylureas', 'SGLT2 Inhibitors', 'DPP-4 Inhibitors'],
    explanation: 'Metformin is first-line therapy. Sulfonylureas can be added for glycemic control, while SGLT2 inhibitors offer cardiovascular benefits and DPP-4 inhibitors provide additional glucose lowering with low hypoglycemia risk.'
  },
  {
    id: 'case-3',
    symptom: 'Bacterial Pneumonia',
    description: 'A 38-year-old patient presents with fever, productive cough with purulent sputum, chest pain, and consolidation on chest X-ray.',
    recommendedDrugClasses: ['Penicillins', 'Macrolides', 'Fluoroquinolones', 'Cephalosporins'],
    explanation: 'Empirical treatment includes beta-lactams like penicillins or cephalosporins for typical bacteria, with macrolides or fluoroquinolones for atypical coverage depending on severity and risk factors.'
  },
  {
    id: 'case-4',
    symptom: 'Depression',
    description: 'A 30-year-old patient reports persistent low mood, loss of interest, sleep disturbances, and decreased concentration for 6 weeks.',
    recommendedDrugClasses: ['SSRIs', 'SNRIs', 'Tricyclic Antidepressants', 'Atypical Antidepressants'],
    explanation: 'SSRIs are first-line due to favorable side effect profile. SNRIs can be used for patients with comorbid pain. TCAs and atypical antidepressants are alternatives for treatment-resistant cases.'
  },
  {
    id: 'case-5',
    symptom: 'Gastroesophageal Reflux',
    description: 'A 42-year-old patient complains of heartburn, regurgitation, and chest pain, especially after meals and when lying down.',
    recommendedDrugClasses: ['Proton Pump Inhibitors', 'H2 Receptor Antagonists', 'Antacids', 'Prokinetic Agents'],
    explanation: 'PPIs are most effective for severe GERD and healing erosive esophagitis. H2 blockers provide moderate acid suppression, while antacids offer rapid but short-term relief. Prokinetic agents help with motility.'
  },
  {
    id: 'case-6',
    symptom: 'Asthma Exacerbation',
    description: 'A 25-year-old patient presents with wheezing, shortness of breath, chest tightness, and decreased peak flow measurements.',
    recommendedDrugClasses: ['Beta-2 Agonists', 'Corticosteroids', 'Anticholinergics', 'Leukotriene Modifiers'],
    explanation: 'Short-acting beta-2 agonists provide immediate bronchodilation. Systemic corticosteroids reduce inflammation in exacerbations. Anticholinergics offer additional bronchodilation, while leukotriene modifiers help with chronic control.'
  },
  {
    id: 'case-7',
    symptom: 'Anxiety Disorder',
    description: 'A 35-year-old patient experiences excessive worry, restlessness, fatigue, and difficulty concentrating affecting daily functioning.',
    recommendedDrugClasses: ['SSRIs', 'SNRIs', 'Benzodiazepines', 'Buspirone'],
    explanation: 'SSRIs and SNRIs are first-line for long-term anxiety management. Benzodiazepines provide rapid relief but are reserved for short-term use due to dependence risk. Buspirone is an alternative with minimal side effects.'
  },
  {
    id: 'case-8',
    symptom: 'Migraine Headache',
    description: 'A 28-year-old patient experiences unilateral throbbing headache with nausea, vomiting, and photophobia lasting 8-12 hours.',
    recommendedDrugClasses: ['Triptans', 'NSAIDs', 'Antiemetics', 'Ergot Alkaloids'],
    explanation: 'Triptans are specific for migraine treatment targeting serotonin receptors. NSAIDs provide anti-inflammatory effects. Antiemetics address associated nausea. Ergot alkaloids are alternatives but with more contraindications.'
  }
];
