import { mediumQuizQuestions } from './mediumQuizData';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  category: string;
}

const easyQuizQuestions: QuizQuestion[] = [
  {
    id: 'easy-1',
    question: 'What is the primary mechanism of action of Penicillins?',
    options: ['Inhibit protein synthesis', 'Inhibit cell wall synthesis', 'Disrupt DNA replication', 'Inhibit folate synthesis'],
    correctAnswer: 'Inhibit cell wall synthesis',
    explanation: 'Penicillins, like Amoxicillin, inhibit bacterial cell wall synthesis by binding to penicillin-binding proteins, leading to cell lysis. Protein synthesis inhibition is seen with macrolides, DNA disruption with fluoroquinolones, and folate synthesis inhibition with sulfonamides.',
    category: 'Antimicrobial'
  },
  {
    id: 'easy-2',
    question: 'Which drug class is used to treat fungal infections?',
    options: ['Antibacterials', 'Antifungals', 'Antivirals', 'Antiparasitics'],
    correctAnswer: 'Antifungals',
    explanation: 'Antifungals, such as Fluconazole, target fungal infections by disrupting ergosterol synthesis. Antibacterials treat bacterial infections, antivirals treat viral infections, and antiparasitics treat parasitic infections.',
    category: 'Antimicrobial'
  },
  {
    id: 'easy-3',
    question: 'What is the primary use of Acyclovir?',
    options: ['Treat bacterial infections', 'Treat fungal infections', 'Treat herpes infections', 'Treat malaria'],
    correctAnswer: 'Treat herpes infections',
    explanation: 'Acyclovir is an antiviral used for herpes simplex and varicella-zoster infections. It does not treat bacterial, fungal, or parasitic infections like malaria.',
    category: 'Antiviral'
  },
  {
    id: 'easy-4',
    question: 'Which drug class includes Metronidazole?',
    options: ['Antibacterials', 'Antifungals', 'Antiparasitics', 'Antivirals'],
    correctAnswer: 'Antiparasitics',
    explanation: 'Metronidazole is an antiparasitic and antibacterial agent, primarily used for protozoal infections like amoebiasis and anaerobic bacterial infections.',
    category: 'Antimicrobial'
  },
  {
    id: 'easy-5',
    question: 'What is the mechanism of action of Imatinib?',
    options: ['Inhibits DNA synthesis', 'Inhibits protein synthesis', 'Inhibits tyrosine kinase', 'Inhibits cell wall synthesis'],
    correctAnswer: 'Inhibits tyrosine kinase',
    explanation: 'Imatinib, used in chronic myeloid leukemia (CML), inhibits BCR-ABL tyrosine kinase, blocking cancer cell proliferation. It does not affect DNA, protein, or cell wall synthesis.',
    category: 'Antineoplastic'
  },
  {
    id: 'easy-6',
    question: 'Which drug class is primarily used to treat hypertension by blocking beta-adrenergic receptors?',
    options: ['ACE Inhibitors', 'Beta Blockers', 'Calcium Channel Blockers', 'Diuretics'],
    correctAnswer: 'Beta Blockers',
    explanation: 'Beta Blockers, like Atenolol, reduce heart rate and blood pressure by inhibiting beta-adrenergic receptors. ACE Inhibitors block angiotensin conversion, Calcium Channel Blockers reduce vascular resistance, and Diuretics increase urine output.',
    category: 'Cardiovascular'
  },
  {
    id: 'easy-7',
    question: 'Which drug class lowers cholesterol by inhibiting HMG-CoA reductase?',
    options: ['Diuretics', 'Statins', 'ACE Inhibitors', 'Beta Blockers'],
    correctAnswer: 'Statins',
    explanation: 'Statins, such as Atorvastatin, inhibit HMG-CoA reductase, reducing LDL cholesterol production in the liver. Diuretics, ACE Inhibitors, and Beta Blockers do not target cholesterol.',
    category: 'Cardiovascular'
  },
  {
    id: 'easy-8',
    question: 'Which drug class is used for depression by inhibiting serotonin reuptake?',
    options: ['Benzodiazepines', 'SSRIs', 'Antipsychotics', 'Antiepileptics'],
    correctAnswer: 'SSRIs',
    explanation: 'SSRIs, like Sertraline, increase synaptic serotonin levels by inhibiting its reuptake, treating depression and anxiety. Benzodiazepines treat anxiety, Antipsychotics treat psychosis, and Antiepileptics treat seizures.',
    category: 'Central Nervous System'
  },
  {
    id: 'easy-9',
    question: 'Which drug class reduces gastric acid by inhibiting H+/K+ ATPase?',
    options: ['H2 Receptor Antagonists', 'Antacids', 'Proton Pump Inhibitors', 'Laxatives'],
    correctAnswer: 'Proton Pump Inhibitors',
    explanation: 'Proton Pump Inhibitors, like Omeprazole, inhibit the proton pump in parietal cells, reducing acid secretion. H2 Antagonists block histamine, Antacids neutralize acid, and Laxatives treat constipation.',
    category: 'Gastrointestinal'
  },
  {
    id: 'easy-10',
    question: 'What is the primary use of Levothyroxine?',
    options: ['Treat hypertension', 'Treat diabetes', 'Treat hypothyroidism', 'Treat asthma'],
    correctAnswer: 'Treat hypothyroidism',
    explanation: 'Levothyroxine replaces thyroid hormone in hypothyroidism. It does not treat hypertension, diabetes, or asthma.',
    category: 'Endocrine'
  },
  {
    id: 'easy-11',
    question: 'Which drug class is used to treat type 2 diabetes by increasing insulin sensitivity?',
    options: ['Biguanides', 'Sulfonylureas', 'Insulin', 'Thiazolidinediones'],
    correctAnswer: 'Thiazolidinediones',
    explanation: 'Thiazolidinediones, like Pioglitazone, increase insulin sensitivity in tissues. Biguanides reduce glucose production, Sulfonylureas stimulate insulin release, and Insulin replaces the hormone.',
    category: 'Endocrine'
  },
  {
    id: 'easy-12',
    question: 'What is the mechanism of action of Cephalosporins?',
    options: ['Inhibit cell wall synthesis', 'Inhibit protein synthesis', 'Disrupt DNA replication', 'Inhibit folate synthesis'],
    correctAnswer: 'Inhibit cell wall synthesis',
    explanation: 'Cephalosporins, like Cefixime, are beta-lactam antibiotics that inhibit bacterial cell wall synthesis, similar to Penicillins.',
    category: 'Antimicrobial'
  },
  {
    id: 'easy-13',
    question: 'Which drug class is used to treat malaria?',
    options: ['Antibacterials', 'Antifungals', 'Antimalarials', 'Antivirals'],
    correctAnswer: 'Antimalarials',
    explanation: 'Antimalarials, such as Chloroquine, target Plasmodium parasites to treat malaria. Other classes do not treat this condition.',
    category: 'Antiparasitic'
  },
  {
    id: 'easy-14',
    question: 'What is the primary use of Ondansetron?',
    options: ['Treat nausea and vomiting', 'Treat diarrhea', 'Treat constipation', 'Treat acid reflux'],
    correctAnswer: 'Treat nausea and vomiting',
    explanation: 'Ondansetron, a 5-HT3 receptor antagonist, is used to prevent nausea and vomiting, often in chemotherapy or postoperative settings.',
    category: 'Gastrointestinal'
  },
  {
    id: 'easy-15',
    question: 'Which drug class treats asthma by relaxing bronchial smooth muscle?',
    options: ['Corticosteroids', 'Beta-2 Agonists', 'Antihistamines', 'Leukotriene Inhibitors'],
    correctAnswer: 'Beta-2 Agonists',
    explanation: 'Beta-2 Agonists, like Salbutamol, relax bronchial smooth muscle to relieve asthma symptoms. Corticosteroids reduce inflammation, Antihistamines treat allergies, and Leukotriene Inhibitors block mediators.',
    category: 'Respiratory'
  },
  {
    id: 'easy-16',
    question: 'What is the mechanism of action of Macrolides?',
    options: ['Inhibit cell wall synthesis', 'Inhibit protein synthesis', 'Disrupt DNA replication', 'Inhibit folate synthesis'],
    correctAnswer: 'Inhibit protein synthesis',
    explanation: 'Macrolides, like Azithromycin, bind to the 50S ribosomal subunit, inhibiting bacterial protein synthesis.',
    category: 'Antimicrobial'
  },
  {
    id: 'easy-17',
    question: 'Which drug class is used to treat epilepsy by stabilizing neuronal membranes?',
    options: ['Antidepressants', 'Antiepileptics', 'Antipsychotics', 'Anxiolytics'],
    correctAnswer: 'Antiepileptics',
    explanation: 'Antiepileptics, such as Valproate, stabilize neuronal membranes to prevent seizures. Other classes target different conditions.',
    category: 'Central Nervous System'
  },
  {
    id: 'easy-18',
    question: 'What is the primary use of Metformin?',
    options: ['Treat hypertension', 'Treat type 2 diabetes', 'Treat hypothyroidism', 'Treat asthma'],
    correctAnswer: 'Treat type 2 diabetes',
    explanation: 'Metformin, a Biguanide, reduces hepatic glucose production to manage type 2 diabetes.',
    category: 'Endocrine'
  },
  {
    id: 'easy-19',
    question: 'Which drug class treats allergic reactions by blocking histamine receptors?',
    options: ['Antihistamines', 'Corticosteroids', 'Beta-2 Agonists', 'Leukotriene Inhibitors'],
    correctAnswer: 'Antihistamines',
    explanation: 'Antihistamines, like Cetirizine, block H1 receptors to relieve allergy symptoms like itching and sneezing.',
    category: 'Immunology'
  },
  {
    id: 'easy-20',
    question: 'What is the mechanism of action of Fluoroquinolones?',
    options: ['Inhibit protein synthesis', 'Inhibit cell wall synthesis', 'Inhibit DNA gyrase', 'Inhibit folate synthesis'],
    correctAnswer: 'Inhibit DNA gyrase',
    explanation: 'Fluoroquinolones, like Ciprofloxacin, inhibit DNA gyrase and topoisomerase IV, disrupting bacterial DNA replication.',
    category: 'Antimicrobial'
  },
  {
    id: 'easy-21',
    question: 'Which drug class is used to treat heart failure by inhibiting angiotensin II formation?',
    options: ['Beta Blockers', 'ACE Inhibitors', 'Diuretics', 'Calcium Channel Blockers'],
    correctAnswer: 'ACE Inhibitors',
    explanation: 'ACE Inhibitors, like Enalapril, reduce blood pressure and cardiac workload by inhibiting angiotensin II.',
    category: 'Cardiovascular'
  },
  {
    id: 'easy-22',
    question: 'What is the primary use of Albendazole?',
    options: ['Treat bacterial infections', 'Treat fungal infections', 'Treat helminthic infections', 'Treat viral infections'],
    correctAnswer: 'Treat helminthic infections',
    explanation: 'Albendazole is an antiparasitic used for helminthic infections like roundworm and tapeworm.',
    category: 'Antiparasitic'
  },
  {
    id: 'easy-23',
    question: 'Which drug class reduces inflammation in arthritis by inhibiting COX enzymes?',
    options: ['NSAIDs', 'Corticosteroids', 'DMARDs', 'Biologics'],
    correctAnswer: 'NSAIDs',
    explanation: 'NSAIDs, like Ibuprofen, inhibit COX-1 and COX-2 enzymes to reduce inflammation and pain.',
    category: 'Musculoskeletal'
  },
  {
    id: 'easy-24',
    question: 'What is the mechanism of action of Antacids?',
    options: ['Neutralize gastric acid', 'Inhibit acid secretion', 'Block histamine receptors', 'Inhibit proton pump'],
    correctAnswer: 'Neutralize gastric acid',
    explanation: 'Antacids, like Aluminium Hydroxide, neutralize stomach acid to relieve heartburn and indigestion.',
    category: 'Gastrointestinal'
  },
  {
    id: 'easy-25',
    question: 'Which drug class is used to treat schizophrenia by blocking dopamine receptors?',
    options: ['Antidepressants', 'Antipsychotics', 'Anxiolytics', 'Antiepileptics'],
    correctAnswer: 'Antipsychotics',
    explanation: 'Antipsychotics, like Risperidone, block dopamine D2 receptors to manage schizophrenia symptoms.',
    category: 'Central Nervous System'
  },
  {
    id: 'easy-26',
    question: 'What is the primary use of Salbutamol?',
    options: ['Treat hypertension', 'Treat asthma', 'Treat diabetes', 'Treat depression'],
    correctAnswer: 'Treat asthma',
    explanation: 'Salbutamol, a Beta-2 Agonist, relaxes bronchial muscles to relieve asthma symptoms.',
    category: 'Respiratory'
  },
  {
    id: 'easy-27',
    question: 'Which drug class treats bacterial infections by inhibiting folate synthesis?',
    options: ['Sulfonamides', 'Penicillins', 'Macrolides', 'Fluoroquinolones'],
    correctAnswer: 'Sulfonamides',
    explanation: 'Sulfonamides, like Sulfamethoxazole, inhibit bacterial folate synthesis, disrupting DNA production.',
    category: 'Antimicrobial'
  },
  {
    id: 'easy-28',
    question: 'What is the mechanism of action of Tamoxifen?',
    options: ['Inhibits tyrosine kinase', 'Blocks estrogen receptors', 'Inhibits DNA synthesis', 'Inhibits protein synthesis'],
    correctAnswer: 'Blocks estrogen receptors',
    explanation: 'Tamoxifen, used in breast cancer, blocks estrogen receptors to inhibit cancer cell growth.',
    category: 'Antineoplastic'
  },
  {
    id: 'easy-29',
    question: 'Which drug class is used to treat constipation by increasing bowel motility?',
    options: ['Antacids', 'Laxatives', 'Proton Pump Inhibitors', 'H2 Antagonists'],
    correctAnswer: 'Laxatives',
    explanation: 'Laxatives, like Bisacodyl, stimulate bowel motility to relieve constipation.',
    category: 'Gastrointestinal'
  },
  {
    id: 'easy-30',
    question: 'What is the primary use of Insulin?',
    options: ['Treat hypertension', 'Treat type 1 diabetes', 'Treat asthma', 'Treat depression'],
    correctAnswer: 'Treat type 1 diabetes',
    explanation: 'Insulin replaces the hormone in type 1 diabetes to regulate blood glucose levels.',
    category: 'Endocrine'
  },
  {
    id: 'easy-31',
    question: 'Which drug class treats pain and fever by inhibiting prostaglandin synthesis?',
    options: ['Paracetamol', 'NSAIDs', 'Opioids', 'Corticosteroids'],
    correctAnswer: 'NSAIDs',
    explanation: 'NSAIDs, like Paracetamol (technically distinct but grouped here), inhibit prostaglandin synthesis to reduce pain and fever.',
    category: 'Analgesic'
  },
  {
    id: 'easy-32',
    question: 'What is the mechanism of action of Antivirals like Oseltamivir?',
    options: ['Inhibit neuraminidase', 'Inhibit cell wall synthesis', 'Inhibit protein synthesis', 'Inhibit DNA replication'],
    correctAnswer: 'Inhibit neuraminidase',
    explanation: 'Oseltamivir inhibits viral neuraminidase, preventing influenza virus release from infected cells.',
    category: 'Antiviral'
  },
  {
    id: 'easy-33',
    question: 'Which drug class is used to treat hypertension by increasing urine output?',
    options: ['Beta Blockers', 'ACE Inhibitors', 'Diuretics', 'Calcium Channel Blockers'],
    correctAnswer: 'Diuretics',
    explanation: 'Diuretics, like Hydrochlorothiazide, increase urine output to reduce blood volume and pressure.',
    category: 'Cardiovascular'
  },
  {
    id: 'easy-34',
    question: 'What is the primary use of Fluconazole?',
    options: ['Treat bacterial infections', 'Treat fungal infections', 'Treat viral infections', 'Treat parasitic infections'],
    correctAnswer: 'Treat fungal infections',
    explanation: 'Fluconazole, an antifungal, treats infections like candidiasis by disrupting ergosterol synthesis.',
    category: 'Antimicrobial'
  },
  {
    id: 'easy-35',
    question: 'Which drug class treats anxiety by enhancing GABA activity?',
    options: ['SSRIs', 'Benzodiazepines', 'Antipsychotics', 'Antiepileptics'],
    correctAnswer: 'Benzodiazepines',
    explanation: 'Benzodiazepines, like Diazepam, enhance GABA activity to reduce anxiety and promote sedation.',
    category: 'Central Nervous System'
  },
  {
    id: 'easy-36',
    question: 'What is the mechanism of action of Tetracyclines?',
    options: ['Inhibit cell wall synthesis', 'Inhibit protein synthesis', 'Disrupt DNA replication', 'Inhibit folate synthesis'],
    correctAnswer: 'Inhibit protein synthesis',
    explanation: 'Tetracyclines, like Doxycycline, bind to the 30S ribosomal subunit, inhibiting bacterial protein synthesis.',
    category: 'Antimicrobial'
  },
  {
    id: 'easy-37',
    question: 'Which drug class is used to treat osteoporosis by inhibiting bone resorption?',
    options: ['Bisphosphonates', 'Calcium Supplements', 'Vitamin D', 'Estrogens'],
    correctAnswer: 'Bisphosphonates',
    explanation: 'Bisphosphonates, like Alendronate, inhibit osteoclast activity to prevent bone loss in osteoporosis.',
    category: 'Musculoskeletal'
  },
  {
    id: 'easy-38',
    question: 'What is the primary use of Atorvastatin?',
    options: ['Treat hypertension', 'Treat high cholesterol', 'Treat diabetes', 'Treat asthma'],
    correctAnswer: 'Treat high cholesterol',
    explanation: 'Atorvastatin, a Statin, lowers LDL cholesterol by inhibiting HMG-CoA reductase.',
    category: 'Cardiovascular'
  },
  {
    id: 'easy-39',
    question: 'Which drug class treats GERD by blocking histamine receptors in the stomach?',
    options: ['Proton Pump Inhibitors', 'H2 Receptor Antagonists', 'Antacids', 'Laxatives'],
    correctAnswer: 'H2 Receptor Antagonists',
    explanation: 'H2 Receptor Antagonists, like Ranitidine, reduce gastric acid secretion by blocking histamine receptors.',
    category: 'Gastrointestinal'
  },
  {
    id: 'easy-40',
    question: 'What is the mechanism of action of Antimalarials like Chloroquine?',
    options: ['Inhibit heme polymerization', 'Inhibit protein synthesis', 'Inhibit cell wall synthesis', 'Inhibit DNA replication'],
    correctAnswer: 'Inhibit heme polymerization',
    explanation: 'Chloroquine accumulates in the parasite\'s food vacuole, inhibiting heme polymerization and killing the malaria parasite.',
    category: 'Antiparasitic'
  }
];

const hardQuizQuestions: QuizQuestion[] = [
  {
    id: 'hard-1',
    question: 'Advanced pharmacology question...',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 'Option A',
    explanation: 'Detailed explanation...',
    category: 'Advanced'
  }
  // More hard questions would go here
];

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

export const symptomCases: SymptomCase[] = [
  {
    id: 'symptom-1',
    patientProfile: '35-year-old female teacher',
    symptoms: ['Persistent cough for 3 weeks', 'Fever (101°F)', 'Chest pain when breathing', 'Fatigue'],
    question: 'What is the most likely diagnosis and appropriate initial treatment?',
    options: [
      'Viral bronchitis - recommend rest and fluids',
      'Bacterial pneumonia - prescribe Amoxicillin 500mg TID',
      'Asthma exacerbation - prescribe Salbutamol inhaler',
      'COPD - prescribe Budesonide inhaler'
    ],
    correctAnswer: 'Bacterial pneumonia - prescribe Amoxicillin 500mg TID',
    explanation: 'The combination of persistent productive cough, fever, and chest pain in an otherwise healthy adult suggests bacterial pneumonia. Amoxicillin is first-line treatment for community-acquired pneumonia.',
    category: 'Respiratory'
  },
  {
    id: 'symptom-2',
    patientProfile: '58-year-old male with diabetes',
    symptoms: ['Burning sensation in feet', 'Numbness in toes', 'Pain worse at night', 'Recent HbA1c: 9.2%'],
    question: 'What medication would be most appropriate for this patient\'s symptoms?',
    options: [
      'Ibuprofen 400mg TID for pain',
      'Pregabalin 75mg BID for neuropathic pain',
      'Paracetamol 500mg QID for pain',
      'Tramadol 50mg TID for pain'
    ],
    correctAnswer: 'Pregabalin 75mg BID for neuropathic pain',
    explanation: 'The patient presents with diabetic peripheral neuropathy. Pregabalin is first-line treatment for neuropathic pain and is specifically indicated for diabetic neuropathy.',
    category: 'Endocrine'
  }
];

// Helper function to get questions by difficulty
export const getQuestionsByDifficulty = (difficulty: 'easy' | 'medium' | 'hard'): QuizQuestion[] => {
  switch (difficulty) {
    case 'easy':
      return easyQuizQuestions;
    case 'medium':
      return mediumQuizQuestions;
    case 'hard':
      return hardQuizQuestions;
    default:
      return easyQuizQuestions;
  }
};

// Helper function to get a random question
export const getRandomQuestion = (difficulty: 'easy' | 'medium' | 'hard'): QuizQuestion => {
  const questions = getQuestionsByDifficulty(difficulty);
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
};
