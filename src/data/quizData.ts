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
    question: "What is the primary use of Penicillins?",
    options: ["Treat fungal infections", "Treat bacterial infections", "Treat viral infections", "Treat hypertension"],
    correctAnswer: "Treat bacterial infections",
    explanation: "Penicillins are antibiotics that inhibit bacterial cell wall synthesis, making them effective against bacterial infections like pneumonia and skin infections.",
    category: "Antibiotics - Antibacterial",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-2",
    question: "Which of the following is an Indian brand of Amoxicillin?",
    options: ["Zifi", "Mox", "Azithral", "Flucon"],
    correctAnswer: "Mox",
    explanation: "Mox is an Indian brand of Amoxicillin manufactured by Sun Pharma, used to treat bacterial infections.",
    category: "Antibiotics - Antibacterial",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-3",
    question: "What is the mechanism of action of Cephalosporins?",
    options: ["Inhibit protein synthesis", "Inhibit cell wall synthesis", "Block viral replication", "Reduce inflammation"],
    correctAnswer: "Inhibit cell wall synthesis",
    explanation: "Cephalosporins, like Penicillins, bind to penicillin-binding proteins to disrupt bacterial cell wall synthesis, causing cell lysis.",
    category: "Antibiotics - Antibacterial",
    difficulty: "easy",
    type: "mechanism"
  },
  {
    id: "easy-4",
    question: "Which drug class is used to treat respiratory infections and STDs like chlamydia?",
    options: ["Macrolides", "Antimetabolites", "Antivirals", "Diuretics"],
    correctAnswer: "Macrolides",
    explanation: "Macrolides, such as Azithromycin, inhibit bacterial protein synthesis and are effective for respiratory infections and certain STDs.",
    category: "Antibiotics - Antibacterial",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-5",
    question: "What is a common side effect of Tetracyclines?",
    options: ["Hypertension", "Photosensitivity", "Weight loss", "Dry eyes"],
    correctAnswer: "Photosensitivity",
    explanation: "Tetracyclines can cause photosensitivity, leading to skin reactions upon sun exposure, along with GI upset and tooth discoloration.",
    category: "Antibiotics - Antibacterial",
    difficulty: "easy",
    type: "side-effects"
  },
  {
    id: "easy-6",
    question: "Which Indian drug is an example of a Fluoroquinolone?",
    options: ["Ciprofloxacin", "Metronidazole", "Clindamycin", "Rifampicin"],
    correctAnswer: "Ciprofloxacin",
    explanation: "Ciprofloxacin (brand: Ciplox by Cipla) is a Fluoroquinolone used to treat urinary and respiratory infections.",
    category: "Antibiotics - Antibacterial",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-7",
    question: "What is the primary use of Oxazolidinones?",
    options: ["Treat fungal infections", "Treat resistant Gram-positive infections", "Treat diabetes", "Treat allergies"],
    correctAnswer: "Treat resistant Gram-positive infections",
    explanation: "Oxazolidinones, like Linezolid, are used for infections caused by resistant bacteria such as MRSA and VRE.",
    category: "Antibiotics - Antibacterial",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-8",
    question: "Which drug class is associated with nephrotoxicity and ototoxicity?",
    options: ["Aminoglycosides", "Sulfonamides", "NSAIDs", "Statins"],
    correctAnswer: "Aminoglycosides",
    explanation: "Aminoglycosides, such as Amikacin, can cause kidney damage (nephrotoxicity) and hearing loss (ototoxicity).",
    category: "Antibiotics - Antibacterial",
    difficulty: "easy",
    type: "side-effects"
  },
  {
    id: "easy-9",
    question: "Which Indian drug is an example of a Carbapenem?",
    options: ["Meronem", "Azithral", "Voveran", "Rantac"],
    correctAnswer: "Meronem",
    explanation: "Meronem (Meropenem by AstraZeneca India) is a Carbapenem used for serious bacterial infections.",
    category: "Antibiotics - Antibacterial",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-10",
    question: "What is the mechanism of action of Sulfonamides?",
    options: ["Inhibit folate synthesis", "Inhibit protein synthesis", "Block histamine receptors", "Reduce blood glucose"],
    correctAnswer: "Inhibit folate synthesis",
    explanation: "Sulfonamides compete with PABA to inhibit folate synthesis, stopping bacterial growth.",
    category: "Antibiotics - Antibacterial",
    difficulty: "easy",
    type: "mechanism"
  },
  {
    id: "easy-11",
    question: "Which drug class is used to treat MRSA infections?",
    options: ["Glycopeptides", "Antihistamines", "Antidiabetics", "Bronchodilators"],
    correctAnswer: "Glycopeptides",
    explanation: "Glycopeptides, like Vancomycin, are effective against MRSA by inhibiting cell wall synthesis.",
    category: "Antibiotics - Antibacterial",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-12",
    question: "What is a common side effect of Nitroimidazoles like Metronidazole?",
    options: ["Metallic taste", "Weight gain", "Hypertension", "Hair loss"],
    correctAnswer: "Metallic taste",
    explanation: "Nitroimidazoles, such as Metronidazole, commonly cause a metallic taste in the mouth and nausea.",
    category: "Antibiotics - Antibacterial",
    difficulty: "easy",
    type: "side-effects"
  },
  {
    id: "easy-13",
    question: "Which Indian drug is an example of a Lincosamide?",
    options: ["Clincin", "Zifi", "Rosuvas", "Liv.52"],
    correctAnswer: "Clincin",
    explanation: "Clincin (Clindamycin by Alkem Labs) is a Lincosamide used for skin and anaerobic infections.",
    category: "Antibiotics - Antibacterial",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-14",
    question: "What is the primary use of Antitubercular Agents?",
    options: ["Treat hypertension", "Treat tuberculosis", "Treat fungal infections", "Treat diabetes"],
    correctAnswer: "Treat tuberculosis",
    explanation: "Antitubercular Agents, like Rifampicin, are used to treat tuberculosis and atypical mycobacterial infections.",
    category: "Antimycobacterials",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-15",
    question: "Which drug class is used to treat leprosy?",
    options: ["Antileprotic Agents", "Antihypertensives", "Antidepressants", "Antifungals"],
    correctAnswer: "Antileprotic Agents",
    explanation: "Antileprotic Agents, such as Dapsone, are specifically used to treat leprosy.",
    category: "Antimycobacterials",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-16",
    question: "What is the mechanism of action of Azole antifungals?",
    options: ["Inhibit ergosterol synthesis", "Inhibit protein synthesis", "Block dopamine receptors", "Increase insulin secretion"],
    correctAnswer: "Inhibit ergosterol synthesis",
    explanation: "Azoles, like Fluconazole, inhibit 14-alpha-demethylase, disrupting fungal cell membrane formation.",
    category: "Antifungals",
    difficulty: "easy",
    type: "mechanism"
  },
  {
    id: "easy-17",
    question: "Which Indian drug is an example of a Polyene antifungal?",
    options: ["Amphoret", "Flucon", "Terbicip", "Montair"],
    correctAnswer: "Amphoret",
    explanation: "Amphoret (Amphotericin B by Bharat Serums) is a Polyene antifungal used for systemic fungal infections.",
    category: "Antifungals",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-18",
    question: "What is a common side effect of Allylamines?",
    options: ["Hepatotoxicity", "Hypoglycemia", "Bradycardia", "Dry eyes"],
    correctAnswer: "Hepatotoxicity",
    explanation: "Allylamines, like Terbinafine, can cause liver damage, especially with prolonged use.",
    category: "Antifungals",
    difficulty: "easy",
    type: "side-effects"
  },
  {
    id: "easy-19",
    question: "Which drug class is used to treat invasive candidiasis?",
    options: ["Echinocandins", "Antiviral Nucleosides", "Beta-Blockers", "Laxatives"],
    correctAnswer: "Echinocandins",
    explanation: "Echinocandins, like Caspofungin, inhibit beta-glucan synthesis, effective against invasive fungal infections.",
    category: "Antifungals",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-20",
    question: "Which Indian drug is an example of an Antiviral Nucleoside Analogue?",
    options: ["Zovirax", "Metrogyl", "Voveran", "Telma"],
    correctAnswer: "Zovirax",
    explanation: "Zovirax (Acyclovir by GSK India) is a nucleoside analogue used for herpes infections.",
    category: "Antivirals",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-21",
    question: "What is the primary use of Non-Nucleoside Reverse Transcriptase Inhibitors (NNRTIs)?",
    options: ["Treat bacterial infections", "Treat HIV infection", "Treat hypertension", "Treat asthma"],
    correctAnswer: "Treat HIV infection",
    explanation: "NNRTIs, like Nevirapine, inhibit HIV reverse transcriptase to manage HIV infection.",
    category: "Antivirals",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-22",
    question: "What is a common side effect of Protease Inhibitors?",
    options: ["Lipodystrophy", "Photosensitivity", "Hypotension", "Hair loss"],
    correctAnswer: "Lipodystrophy",
    explanation: "Protease Inhibitors, used in HIV treatment, can cause fat redistribution (lipodystrophy) and GI upset.",
    category: "Antivirals",
    difficulty: "easy",
    type: "side-effects"
  },
  {
    id: "easy-23",
    question: "Which Indian drug is an example of a Neuraminidase Inhibitor?",
    options: ["Tamiflu", "Ciplox", "Rantac", "Crocin"],
    correctAnswer: "Tamiflu",
    explanation: "Tamiflu (Oseltamivir by Roche India) is a Neuraminidase Inhibitor used for influenza.",
    category: "Antivirals",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-24",
    question: "What is the mechanism of action of Antimalarials like Chloroquine?",
    options: ["Interfere with heme detoxification", "Inhibit protein synthesis", "Block histamine receptors", "Reduce blood pressure"],
    correctAnswer: "Interfere with heme detoxification",
    explanation: "Antimalarials like Chloroquine disrupt parasite heme detoxification, killing malaria parasites.",
    category: "Antiparasitics",
    difficulty: "easy",
    type: "mechanism"
  },
  {
    id: "easy-25",
    question: "Which drug class is used to treat helminthic infections?",
    options: ["Anthelmintics", "Antihistamines", "Antidepressants", "Diuretics"],
    correctAnswer: "Anthelmintics",
    explanation: "Anthelmintics, like Albendazole, paralyze or kill parasitic worms.",
    category: "Antiparasitics",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-26",
    question: "Which Indian drug is an example of an Antiprotozoal?",
    options: ["Metrogyl", "Zifi", "Rosuvas", "Voveran"],
    correctAnswer: "Metrogyl",
    explanation: "Metrogyl (Metronidazole by JB Chemicals) is an Antiprotozoal used for amoebiasis and giardiasis.",
    category: "Antiparasitics",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-27",
    question: "What is a common side effect of Alkylating Agents?",
    options: ["Bone marrow suppression", "Weight gain", "Hypertension", "Dry mouth"],
    correctAnswer: "Bone marrow suppression",
    explanation: "Alkylating Agents, used in cancer treatment, commonly cause bone marrow suppression, leading to low blood cell counts.",
    category: "Antineoplastics",
    difficulty: "easy",
    type: "side-effects"
  },
  {
    id: "easy-28",
    question: "Which Indian drug is an example of an Antimetabolite?",
    options: ["Xeloda", "Telma", "Azithral", "Liv.52"],
    correctAnswer: "Xeloda",
    explanation: "Xeloda (Capecitabine by Roche India) is an Antimetabolite used for cancers like breast and colorectal.",
    category: "Antineoplastics",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-29",
    question: "What is the primary use of Topoisomerase Inhibitors?",
    options: ["Treat diabetes", "Treat cancer", "Treat allergies", "Treat hypertension"],
    correctAnswer: "Treat cancer",
    explanation: "Topoisomerase Inhibitors, like Irinotecan, prevent DNA replication in cancer cells, used for lung and ovarian cancers.",
    category: "Antineoplastics",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-30",
    question: "Which drug class is associated with neuropathy as a side effect?",
    options: ["Mitotic Inhibitors", "Antihistamines", "Diuretics", "Antacids"],
    correctAnswer: "Mitotic Inhibitors",
    explanation: "Mitotic Inhibitors, like Paclitaxel, can cause peripheral neuropathy due to microtubule disruption.",
    category: "Antineoplastics",
    difficulty: "easy",
    type: "side-effects"
  },
  {
    id: "easy-31",
    question: "Which Indian drug is an example of a Monoclonal Antibody?",
    options: ["Herclon", "Ciplox", "Rantac", "Crocin"],
    correctAnswer: "Herclon",
    explanation: "Herclon (Trastuzumab by Roche India) is a Monoclonal Antibody used for breast cancer.",
    category: "Antineoplastics",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-32",
    question: "What is the mechanism of action of Tyrosine Kinase Inhibitors?",
    options: ["Block cancer cell signaling pathways", "Inhibit bacterial cell wall synthesis", "Increase insulin secretion", "Reduce inflammation"],
    correctAnswer: "Block cancer cell signaling pathways",
    explanation: "Tyrosine Kinase Inhibitors, like Imatinib, block signaling pathways to inhibit cancer cell growth.",
    category: "Antineoplastics",
    difficulty: "easy",
    type: "mechanism"
  },
  {
    id: "easy-33",
    question: "Which drug class is used to treat pain and inflammation?",
    options: ["NSAIDs", "Antivirals", "Antifungals", "Beta-Blockers"],
    correctAnswer: "NSAIDs",
    explanation: "NSAIDs, like Ibuprofen, reduce pain and inflammation by inhibiting COX enzymes.",
    category: "Analgesics",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-34",
    question: "What is a common side effect of NSAIDs?",
    options: ["GI bleeding", "Hypoglycemia", "Bradycardia", "Hair loss"],
    correctAnswer: "GI bleeding",
    explanation: "NSAIDs can irritate the stomach lining, leading to gastrointestinal bleeding or ulcers.",
    category: "Analgesics",
    difficulty: "easy",
    type: "side-effects"
  },
  {
    id: "easy-35",
    question: "Which Indian drug is an example of an Opioid analgesic?",
    options: ["Tramadol", "Metformin", "Cetirizine", "Amlodipine"],
    correctAnswer: "Tramadol",
    explanation: "Tramadol (brand: Tramasul by Zydus Cadila) is an Opioid used for severe pain.",
    category: "Analgesics",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-36",
    question: "What is the primary use of Non-Opioid Analgesics like Paracetamol?",
    options: ["Treat severe pain", "Treat mild to moderate pain", "Treat hypertension", "Treat infections"],
    correctAnswer: "Treat mild to moderate pain",
    explanation: "Non-Opioid Analgesics, like Paracetamol, are used for mild pain like headaches and fever.",
    category: "Analgesics",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-37",
    question: "Which Indian drug is an example of a Systemic Corticosteroid?",
    options: ["Omnacortil", "Ciplox", "Rosuvas", "Liv.52"],
    correctAnswer: "Omnacortil",
    explanation: "Omnacortil (Prednisolone by Macleods) is a Systemic Corticosteroid used for inflammation and autoimmune diseases.",
    category: "Anti-Inflammatory",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-38",
    question: "What is a common side effect of Corticosteroids?",
    options: ["Weight gain", "Photosensitivity", "Hypotension", "Dry eyes"],
    correctAnswer: "Weight gain",
    explanation: "Corticosteroids, like Prednisolone, can cause weight gain, osteoporosis, and hyperglycemia.",
    category: "Anti-Inflammatory",
    difficulty: "easy",
    type: "side-effects"
  },
  {
    id: "easy-39",
    question: "Which drug class is used to treat rheumatoid arthritis?",
    options: ["DMARDs", "Antihistamines", "Diuretics", "Antivirals"],
    correctAnswer: "DMARDs",
    explanation: "DMARDs, like Methotrexate, slow disease progression in rheumatoid arthritis.",
    category: "Anti-Inflammatory",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-40",
    question: "Which Indian drug is an example of a Proton Pump Inhibitor?",
    options: ["Pan-D", "Voveran", "Azithral", "Crocin"],
    correctAnswer: "Pan-D",
    explanation: "Pan-D (Pantoprazole by Alkem Labs) is a PPI used to reduce gastric acid secretion.",
    category: "Antacids & Antiulcerants",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-41",
    question: "What is the mechanism of action of H2 Receptor Antagonists?",
    options: ["Block histamine H2 receptors", "Inhibit protein synthesis", "Increase insulin secretion", "Relax bronchial muscles"],
    correctAnswer: "Block histamine H2 receptors",
    explanation: "H2 Receptor Antagonists, like Ranitidine, reduce gastric acid secretion by blocking histamine H2 receptors.",
    category: "Antacids & Antiulcerants",
    difficulty: "easy",
    type: "mechanism"
  },
  {
    id: "easy-42",
    question: "Which drug class neutralizes gastric acid?",
    options: ["Antacids", "Antidepressants", "Antifungals", "Beta-Blockers"],
    correctAnswer: "Antacids",
    explanation: "Antacids, like Digene, neutralize gastric acid to relieve heartburn and indigestion.",
    category: "Antacids & Antiulcerants",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-43",
    question: "Which Indian drug is an example of an Antiulcerant?",
    options: ["Sucramal", "Zifi", "Rosuvas", "Telma"],
    correctAnswer: "Sucramal",
    explanation: "Sucramal (Sucralfate by Sun Pharma) forms a protective barrier over ulcers.",
    category: "Antacids & Antiulcerants",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-44",
    question: "What is a common side effect of Osmotic Laxatives?",
    options: ["Bloating", "Weight gain", "Hypertension", "Hair loss"],
    correctAnswer: "Bloating",
    explanation: "Osmotic Laxatives, like Lactulose, can cause bloating and diarrhea by drawing water into the intestines.",
    category: "Laxatives",
    difficulty: "easy",
    type: "side-effects"
  },
  {
    id: "easy-45",
    question: "Which Indian drug is an example of a Stimulant Laxative?",
    options: ["Dulcolax", "Ciplox", "Rantac", "Crocin"],
    correctAnswer: "Dulcolax",
    explanation: "Dulcolax (Bisacodyl by Boehringer Ingelheim India) is a Stimulant Laxative for constipation.",
    category: "Laxatives",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-46",
    question: "What is the primary use of Expectorants?",
    options: ["Treat dry cough", "Treat productive cough", "Treat hypertension", "Treat diabetes"],
    correctAnswer: "Treat productive cough",
    explanation: "Expectorants, like Guaifenesin, thin mucus to aid its expulsion in productive cough.",
    category: "Anti-Cough, Anti-Cold & Anti-Allergic",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-47",
    question: "Which Indian drug is an example of an Antitussive?",
    options: ["Corex", "Voveran", "Metrogyl", "Telma"],
    correctAnswer: "Corex",
    explanation: "Corex (Guaifenesin by Pfizer India) contains antitussive components for dry cough.",
    category: "Anti-Cough, Anti-Cold & Anti-Allergic",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-48",
    question: "What is the mechanism of action of Antihistamines (H1 Blockers)?",
    options: ["Block histamine H1 receptors", "Inhibit protein synthesis", "Increase insulin secretion", "Relax bronchial muscles"],
    correctAnswer: "Block histamine H1 receptors",
    explanation: "Antihistamines, like Cetirizine, block H1 receptors to reduce allergic symptoms.",
    category: "Anti-Cough, Anti-Cold & Anti-Allergic",
    difficulty: "easy",
    type: "mechanism"
  },
  {
    id: "easy-49",
    question: "Which drug class is used to treat nasal congestion?",
    options: ["Decongestants", "Antidepressants", "Antifungals", "Diuretics"],
    correctAnswer: "Decongestants",
    explanation: "Decongestants, like Phenylephrine, constrict nasal blood vessels to relieve congestion.",
    category: "Anti-Cough, Anti-Cold & Anti-Allergic",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-50",
    question: "Which Indian drug is an example of a Haematinic?",
    options: ["Ferronia", "Ciplox", "Rosuvas", "Liv.52"],
    correctAnswer: "Ferronia",
    explanation: "Ferronia (Ferrous Ascorbate by Zuventus) treats iron deficiency anemia.",
    category: "Haematinics & Nutritional Supplements",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-51",
    question: "What is a common side effect of Vitamins in excessive doses?",
    options: ["Hypervitaminosis", "Hypotension", "Photosensitivity", "Hair loss"],
    correctAnswer: "Hypervitaminosis",
    explanation: "Excessive vitamin intake can lead to hypervitaminosis, causing toxicity symptoms.",
    category: "Haematinics & Nutritional Supplements",
    difficulty: "easy",
    type: "side-effects"
  },
  {
    id: "easy-52",
    question: "Which Indian drug is an example of a Mineral supplement?",
    options: ["Shelcal", "Zifi", "Azithral", "Voveran"],
    correctAnswer: "Shelcal",
    explanation: "Shelcal (Calcium Carbonate by Dr. Reddy's) is a Mineral supplement for bone health.",
    category: "Haematinics & Nutritional Supplements",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-53",
    question: "What is the primary use of Antioxidants?",
    options: ["Treat infections", "Reduce oxidative stress", "Treat hypertension", "Treat diabetes"],
    correctAnswer: "Reduce oxidative stress",
    explanation: "Antioxidants, like Lycopene, neutralize free radicals to prevent cellular damage.",
    category: "Haematinics & Nutritional Supplements",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-54",
    question: "Which drug class is used to prevent chemotherapy-induced nausea?",
    options: ["Serotonin (5-HT3) Receptor Antagonists", "Antihistamines", "Beta-Blockers", "Antifungals"],
    correctAnswer: "Serotonin (5-HT3) Receptor Antagonists",
    explanation: "5-HT3 Antagonists, like Ondansetron, block serotonin receptors to prevent nausea.",
    category: "Antiemetics",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-55",
    question: "Which Indian drug is an example of a Dopamine Antagonist antiemetic?",
    options: ["Domstal", "Ciplox", "Rosuvas", "Crocin"],
    correctAnswer: "Domstal",
    explanation: "Domstal (Domperidone by Torrent Pharma) is a Dopamine Antagonist used for nausea and vomiting.",
    category: "Antiemetics",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-56",
    question: "What is a common side effect of Topical Corticosteroids?",
    options: ["Skin atrophy", "Hypoglycemia", "Bradycardia", "Hair loss"],
    correctAnswer: "Skin atrophy",
    explanation: "Topical Corticosteroids, like Betamethasone, can cause skin thinning with prolonged use.",
    category: "Corticosteroids",
    difficulty: "easy",
    type: "side-effects"
  },
  {
    id: "easy-57",
    question: "Which Indian drug is an example of an ARB?",
    options: ["Telma", "Voveran", "Metrogyl", "Zifi"],
    correctAnswer: "Telma",
    explanation: "Telma (Telmisartan by Glenmark) is an ARB used for hypertension.",
    category: "Cardiovascular",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-58",
    question: "What is the mechanism of action of ACE Inhibitors?",
    options: ["Inhibit angiotensin-converting enzyme", "Inhibit protein synthesis", "Block histamine receptors", "Increase insulin secretion"],
    correctAnswer: "Inhibit angiotensin-converting enzyme",
    explanation: "ACE Inhibitors, like Enalapril, reduce vasoconstriction by inhibiting angiotensin II formation.",
    category: "Cardiovascular",
    difficulty: "easy",
    type: "mechanism"
  },
  {
    id: "easy-59",
    question: "Which drug class is used to treat angina?",
    options: ["Beta-Blockers", "Antihistamines", "Antifungals", "Laxatives"],
    correctAnswer: "Beta-Blockers",
    explanation: "Beta-Blockers, like Atenolol, reduce heart rate and oxygen demand, treating angina.",
    category: "Cardiovascular",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-60",
    question: "Which Indian drug is an example of a Statin?",
    options: ["Rosuvas", "Ciplox", "Rantac", "Crocin"],
    correctAnswer: "Rosuvas",
    explanation: "Rosuvas (Rosuvastatin by Sun Pharma) is a Statin used to lower cholesterol.",
    category: "Cardiovascular",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-61",
    question: "What is a common side effect of Antiplatelets?",
    options: ["Bleeding", "Weight gain", "Hypertension", "Dry eyes"],
    correctAnswer: "Bleeding",
    explanation: "Antiplatelets, like Aspirin, inhibit platelet aggregation, increasing bleeding risk.",
    category: "Cardiovascular",
    difficulty: "easy",
    type: "side-effects"
  },
  {
    id: "easy-62",
    question: "Which drug class is used to treat edema?",
    options: ["Diuretics", "Antidepressants", "Antifungals", "Antivirals"],
    correctAnswer: "Diuretics",
    explanation: "Diuretics, like Furosemide, increase urine output to reduce edema and blood pressure.",
    category: "Cardiovascular",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-63",
    question: "Which Indian drug is an example of a Nitrate?",
    options: ["Sorbitrate", "Zifi", "Azithral", "Voveran"],
    correctAnswer: "Sorbitrate",
    explanation: "Sorbitrate (Isosorbide Dinitrate by Abbott India) is a Nitrate used for angina.",
    category: "Cardiovascular",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-64",
    question: "What is the primary use of Antiarrhythmics?",
    options: ["Treat infections", "Treat arrhythmias", "Treat diabetes", "Treat allergies"],
    correctAnswer: "Treat arrhythmias",
    explanation: "Antiarrhythmics, like Amiodarone, stabilize heart rhythm in conditions like atrial fibrillation.",
    category: "Cardiovascular",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-65",
    question: "Which Indian drug is an example of a Sulfonylurea?",
    options: ["Glycomet", "Ciplox", "Rantac", "Crocin"],
    correctAnswer: "Glycomet",
    explanation: "Glycomet (Glimepiride by USV Ltd.) is a Sulfonylurea used for type 2 diabetes.",
    category: "Antidiabetics",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-66",
    question: "What is the mechanism of action of Biguanides?",
    options: ["Reduce hepatic glucose production", "Inhibit protein synthesis", "Block histamine receptors", "Relax bronchial muscles"],
    correctAnswer: "Reduce hepatic glucose production",
    explanation: "Biguanides, like Metformin, reduce glucose production in the liver and increase insulin sensitivity.",
    category: "Antidiabetics",
    difficulty: "easy",
    type: "mechanism"
  },
  {
    id: "easy-67",
    question: "Which drug class is used to treat type 2 diabetes by improving insulin sensitivity?",
    options: ["Thiazolidinediones", "Antihistamines", "Diuretics", "Antifungals"],
    correctAnswer: "Thiazolidinediones",
    explanation: "Thiazolidinediones, like Pioglitazone, activate PPAR-gamma to improve insulin sensitivity.",
    category: "Antidiabetics",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-68",
    question: "Which Indian drug is an example of an SGLT2 Inhibitor?",
    options: ["Jardiance", "Voveran", "Metrogyl", "Zifi"],
    correctAnswer: "Jardiance",
    explanation: "Jardiance (Empagliflozin by Boehringer Ingelheim India) is an SGLT2 Inhibitor for type 2 diabetes.",
    category: "Antidiabetics",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-69",
    question: "What is a common side effect of DPP-4 Inhibitors?",
    options: ["Nasopharyngitis", "Photosensitivity", "Hypotension", "Hair loss"],
    correctAnswer: "Nasopharyngitis",
    explanation: "DPP-4 Inhibitors, like Sitagliptin, commonly cause upper respiratory infections like nasopharyngitis.",
    category: "Antidiabetics",
    difficulty: "easy",
    type: "side-effects"
  },
  {
    id: "easy-70",
    question: "Which Indian drug is an example of an Alpha-Glucosidase Inhibitor?",
    options: ["Voglitab", "Ciplox", "Rantac", "Crocin"],
    correctAnswer: "Voglitab",
    explanation: "Voglitab (Voglibose by Cipla) is an Alpha-Glucosidase Inhibitor for type 2 diabetes.",
    category: "Antidiabetics",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-71",
    question: "What is the primary use of Insulin?",
    options: ["Treat hypertension", "Treat diabetes", "Treat infections", "Treat allergies"],
    correctAnswer: "Treat diabetes",
    explanation: "Insulin regulates blood glucose in type 1 and type 2 diabetes.",
    category: "Antidiabetics",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-72",
    question: "Which drug class is used to treat epilepsy?",
    options: ["Anticonvulsants", "Antihistamines", "Diuretics", "Antifungals"],
    correctAnswer: "Anticonvulsants",
    explanation: "Anticonvulsants, like Phenytoin, stabilize neuronal membranes to treat epilepsy.",
    category: "Central Nervous System",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-73",
    question: "Which Indian drug is an example of an SSRI?",
    options: ["Sertaline", "Voveran", "Metrogyl", "Telma"],
    correctAnswer: "Sertaline",
    explanation: "Sertaline (Sertraline by Zydus Cadila) is an SSRI used for depression and anxiety.",
    category: "Central Nervous System",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-74",
    question: "What is a common side effect of SNRIs?",
    options: ["Hypertension", "Hypoglycemia", "Bradycardia", "Dry eyes"],
    correctAnswer: "Hypertension",
    explanation: "SNRIs, like Venlafaxine, can increase blood pressure as a side effect.",
    category: "Central Nervous System",
    difficulty: "easy",
    type: "side-effects"
  },
  {
    id: "easy-75",
    question: "Which Indian drug is an example of a TCA?",
    options: ["Imipramine", "Ciplox", "Rosuvas", "Liv.52"],
    correctAnswer: "Imipramine",
    explanation: "Imipramine (Depsonil by Abbott India) is a TCA used for depression and enuresis.",
    category: "Central Nervous System",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-76",
    question: "What is the mechanism of action of Atypical Antipsychotics?",
    options: ["Block dopamine and serotonin receptors", "Inhibit protein synthesis", "Increase insulin secretion", "Relax bronchial muscles"],
    correctAnswer: "Block dopamine and serotonin receptors",
    explanation: "Atypical Antipsychotics, like Olanzapine, manage schizophrenia by blocking dopamine and serotonin receptors.",
    category: "Central Nervous System",
    difficulty: "easy",
    type: "mechanism"
  },
  {
    id: "easy-77",
    question: "Which drug class is used to treat anxiety disorders?",
    options: ["Anxiolytics", "Antifungals", "Diuretics", "Antivirals"],
    correctAnswer: "Anxiolytics",
    explanation: "Anxiolytics, like Lorazepam, enhance GABA activity to reduce anxiety.",
    category: "Central Nervous System",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-78",
    question: "Which Indian drug is an example of a Mood Stabilizer?",
    options: ["Lithosun", "Zifi", "Azithral", "Voveran"],
    correctAnswer: "Lithosun",
    explanation: "Lithosun (Lithium by Sun Pharma) is a Mood Stabilizer for bipolar disorder.",
    category: "Central Nervous System",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-79",
    question: "What is a common side effect of Stimulants?",
    options: ["Insomnia", "Weight gain", "Hypotension", "Dry eyes"],
    correctAnswer: "Insomnia",
    explanation: "Stimulants, like Methylphenidate, can cause insomnia due to CNS stimulation.",
    category: "Central Nervous System",
    difficulty: "easy",
    type: "side-effects"
  },
  {
    id: "easy-80",
    question: "Which Indian drug is an example of an Antiparkinsonian?",
    options: ["Pramipex", "Ciplox", "Rantac", "Crocin"],
    correctAnswer: "Pramipex",
    explanation: "Pramipex (Pramipexole by Sun Pharma) is a Dopamine Agonist for Parkinson's disease.",
    category: "Central Nervous System",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-81",
    question: "What is the primary use of Antimigraine Agents?",
    options: ["Treat infections", "Treat migraines", "Treat diabetes", "Treat hypertension"],
    correctAnswer: "Treat migraines",
    explanation: "Antimigraine Agents, like Sumatriptan, relieve migraine symptoms by constricting cranial blood vessels.",
    category: "Central Nervous System",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-82",
    question: "Which drug class is used to treat asthma?",
    options: ["Bronchodilators", "Antihistamines", "Diuretics", "Antifungals"],
    correctAnswer: "Bronchodilators",
    explanation: "Bronchodilators, like Salbutamol, relax bronchial muscles to treat asthma.",
    category: "Respiratory",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-83",
    question: "Which Indian drug is an example of a Beta-2 Agonist?",
    options: ["Asthalin", "Voveran", "Metrogyl", "Telma"],
    correctAnswer: "Asthalin",
    explanation: "Asthalin (Salbutamol by Cipla) is a Beta-2 Agonist for asthma and COPD.",
    category: "Respiratory",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-84",
    question: "What is a common side effect of Anticholinergic Bronchodilators?",
    options: ["Dry mouth", "Hypoglycemia", "Bradycardia", "Hair loss"],
    correctAnswer: "Dry mouth",
    explanation: "Anticholinergic Bronchodilators, like Ipratropium, block muscarinic receptors, causing dry mouth.",
    category: "Respiratory",
    difficulty: "easy",
    type: "side-effects"
  },
  {
    id: "easy-85",
    question: "Which Indian drug is an example of a Leukotriene Receptor Antagonist?",
    options: ["Montair", "Ciplox", "Rantac", "Crocin"],
    correctAnswer: "Montair",
    explanation: "Montair (Montelukast by Cipla) is a Leukotriene Receptor Antagonist for asthma.",
    category: "Respiratory",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-86",
    question: "What is the mechanism of action of Thyroid Hormones?",
    options: ["Regulate metabolism", "Inhibit protein synthesis", "Block histamine receptors", "Reduce inflammation"],
    correctAnswer: "Regulate metabolism",
    explanation: "Thyroid Hormones, like Levothyroxine, regulate metabolism in hypothyroidism.",
    category: "Hormones & Endocrine",
    difficulty: "easy",
    type: "mechanism"
  },
  {
    id: "easy-87",
    question: "Which Indian drug is an example of an Antithyroid Drug?",
    options: ["Neo-Mercazole", "Zifi", "Azithral", "Voveran"],
    correctAnswer: "Neo-Mercazole",
    explanation: "Neo-Mercazole (Carbimazole by Abbott India) is an Antithyroid Drug for hyperthyroidism.",
    category: "Hormones & Endocrine",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-88",
    question: "What is the primary use of Estrogens?",
    options: ["Treat infections", "Treat menopause symptoms", "Treat diabetes", "Treat hypertension"],
    correctAnswer: "Treat menopause symptoms",
    explanation: "Estrogens, like Estradiol, are used for menopause symptoms and contraception.",
    category: "Hormones & Endocrine",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-89",
    question: "Which Indian drug is an example of a Progestin?",
    options: ["Regestrone", "Ciplox", "Rosuvas", "Liv.52"],
    correctAnswer: "Regestrone",
    explanation: "Regestrone (Norethisterone by Torrent Pharma) is a Progestin for menstrual disorders.",
    category: "Hormones & Endocrine",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-90",
    question: "What is a common side effect of Androgens?",
    options: ["Acne", "Hypoglycemia", "Bradycardia", "Dry eyes"],
    correctAnswer: "Acne",
    explanation: "Androgens, like Testosterone, can cause acne and other androgenic effects.",
    category: "Hormones & Endocrine",
    difficulty: "easy",
    type: "side-effects"
  },
  {
    id: "easy-91",
    question: "Which drug class is used to treat transplant rejection?",
    options: ["Immunosuppressants", "Antihistamines", "Diuretics", "Antifungals"],
    correctAnswer: "Immunosuppressants",
    explanation: "Immunosuppressants, like Tacrolimus, prevent organ transplant rejection.",
    category: "Immunosuppressants",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-92",
    question: "Which Indian drug is an example of a Calcineurin Inhibitor?",
    options: ["Pangraf", "Voveran", "Metrogyl", "Zifi"],
    correctAnswer: "Pangraf",
    explanation: "Pangraf (Tacrolimus by Panacea Biotec) is a Calcineurin Inhibitor for immunosuppression.",
    category: "Immunosuppressants",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-93",
    question: "What is the primary use of Antispasmodics?",
    options: ["Treat infections", "Treat abdominal cramps", "Treat diabetes", "Treat hypertension"],
    correctAnswer: "Treat abdominal cramps",
    explanation: "Antispasmodics, like Mebeverine, relax smooth muscles to relieve cramps.",
    category: "Gastrointestinal",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-94",
    question: "Which Indian drug is an example of an Antidiarrheal?",
    options: ["Lopamide", "Ciplox", "Rantac", "Crocin"],
    correctAnswer: "Lopamide",
    explanation: "Lopamide (Loperamide by Torrent Pharma) is an Antidiarrheal for diarrhea.",
    category: "Gastrointestinal",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-95",
    question: "What is a common side effect of Prokinetics?",
    options: ["Drowsiness", "Weight gain", "Hypertension", "Hair loss"],
    correctAnswer: "Drowsiness",
    explanation: "Prokinetics, like Domperidone, can cause drowsiness and extrapyramidal symptoms.",
    category: "Gastrointestinal",
    difficulty: "easy",
    type: "side-effects"
  },
  {
    id: "easy-96",
    question: "Which Indian drug is an example of a Digestive Enzyme?",
    options: ["Creon", "Zifi", "Azithral", "Voveran"],
    correctAnswer: "Creon",
    explanation: "Creon (Pancreatin by Abbott India) is a Digestive Enzyme for pancreatic insufficiency.",
    category: "Gastrointestinal",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-97",
    question: "What is the primary use of Topical Antibacterials?",
    options: ["Treat skin infections", "Treat hypertension", "Treat diabetes", "Treat allergies"],
    correctAnswer: "Treat skin infections",
    explanation: "Topical Antibacterials, like Mupirocin, treat skin infections and wounds.",
    category: "Dermatologicals",
    difficulty: "easy",
    type: "indication"
  },
  {
    id: "easy-98",
    question: "Which Indian drug is an example of a Keratolytic?",
    options: ["Salicylic Acid", "Ciplox", "Rosuvas", "Liv.52"],
    correctAnswer: "Salicylic Acid",
    explanation: "Salicylic Acid (Saslic by Cipla) is a Keratolytic for acne and psoriasis.",
    category: "Dermatologicals",
    difficulty: "easy",
    type: "drug-class"
  },
  {
    id: "easy-99",
    question: "What is a common side effect of Mydriatics?",
    options: ["Blurred vision", "Hypoglycemia", "Bradycardia", "Hair loss"],
    correctAnswer: "Blurred vision",
    explanation: "Mydriatics, like Tropicamide, dilate pupils, causing blurred vision and photophobia.",
    category: "Ophthalmic",
    difficulty: "easy",
    type: "side-effects"
  },
  {
    id: "easy-100",
    question: "Which Indian drug is an example of an Ophthalmic Anti-Infective?",
    options: ["Ciplox-D", "Voveran", "Metrogyl", "Telma"],
    correctAnswer: "Ciplox-D",
    explanation: "Ciplox-D (Ciprofloxacin by Cipla) is an Ophthalmic Anti-Infective for conjunctivitis.",
    category: "Ophthalmic",
    difficulty: "easy",
    type: "drug-class"
  }
];

export const mediumQuestions: QuizQuestion[] = [
  {
    id: "medium-1",
    question: "Which enzyme is primarily targeted by Fluoroquinolones to inhibit bacterial DNA replication?",
    options: ["RNA polymerase", "DNA gyrase", "Peptidyl transferase", "Beta-lactamase"],
    correctAnswer: "DNA gyrase",
    explanation: "Fluoroquinolones, like Ciprofloxacin (Ciplox by Cipla), inhibit DNA gyrase and topoisomerase IV, preventing bacterial DNA replication, effective for urinary and respiratory infections.",
    category: "Antimicrobial",
    difficulty: "medium",
    type: "mechanism"
  },
  {
    id: "medium-2",
    question: "Which Indian brand of Linezolid is used to treat vancomycin-resistant enterococci (VRE)?",
    options: ["Lizolid", "Montair", "Voveran", "Rantac"],
    correctAnswer: "Lizolid",
    explanation: "Lizolid (Linezolid by Glenmark) is an Oxazolidinone used for resistant Gram-positive infections, including VRE.",
    category: "Antimicrobial",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-3",
    question: "What is the primary clinical use of Aminoglycosides like Amikacin in combination therapy?",
    options: ["Treat viral hepatitis", "Treat serious Gram-negative infections", "Treat osteoporosis", "Treat allergic rhinitis"],
    correctAnswer: "Treat serious Gram-negative infections",
    explanation: "Aminoglycosides, such as Amikacin (Amikacin by Cipla), are used for serious Gram-negative infections, often in combination due to their synergistic effects.",
    category: "Antimicrobial",
    difficulty: "medium",
    type: "indication"
  },
  {
    id: "medium-4",
    question: "Which side effect of Carbapenems like Meropenem requires careful monitoring in patients with a history of epilepsy?",
    options: ["Seizures", "Hypotension", "Photosensitivity", "Weight gain"],
    correctAnswer: "Seizures",
    explanation: "Carbapenems, like Meropenem (Meronem by AstraZeneca India), can lower the seizure threshold, requiring caution in epileptic patients.",
    category: "Antimicrobial",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-5",
    question: "Which Indian drug is a Sulfonamide used for urinary tract infections?",
    options: ["Bactrim", "Zifi", "Rosuvas", "Liv.52"],
    correctAnswer: "Bactrim",
    explanation: "Bactrim (Sulfamethoxazole + Trimethoprim by Abbott India) is a Sulfonamide used for urinary tract infections and other bacterial infections.",
    category: "Antimicrobial",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-6",
    question: "What is the mechanism of action of Glycopeptides like Vancomycin?",
    options: ["Inhibit folate synthesis", "Bind to D-alanyl-D-alanine", "Block serotonin receptors", "Increase insulin secretion"],
    correctAnswer: "Bind to D-alanyl-D-alanine",
    explanation: "Glycopeptides, like Vancomycin (Vanco by Cipla), inhibit cell wall synthesis by binding to D-alanyl-D-alanine, effective against MRSA.",
    category: "Antimicrobial",
    difficulty: "medium",
    type: "mechanism"
  },
  {
    id: "medium-7",
    question: "Which Nitroimidazole is used for anaerobic bacterial infections and has a brand name Metrogyl?",
    options: ["Tinidazole", "Metronidazole", "Clindamycin", "Azithromycin"],
    correctAnswer: "Metronidazole",
    explanation: "Metrogyl (Metronidazole by JB Chemicals) is a Nitroimidazole used for anaerobic bacterial and protozoal infections.",
    category: "Antimicrobial",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-8",
    question: "Which Indian drug is a Lincosamide used for anaerobic infections?",
    options: ["Dalacin-C", "Telma", "Crocin", "Forcan"],
    correctAnswer: "Dalacin-C",
    explanation: "Dalacin-C (Clindamycin by Pfizer India) is a Lincosamide used for anaerobic and skin infections.",
    category: "Antimicrobial",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-9",
    question: "What is a key side effect of Rifampicin, an Antitubercular Agent, that affects liver function?",
    options: ["Hepatotoxicity", "Nephrotoxicity", "Ototoxicity", "Cardiotoxicity"],
    correctAnswer: "Hepatotoxicity",
    explanation: "Rifampicin (R-Cin by Lupin) can cause hepatotoxicity, requiring liver function monitoring during tuberculosis treatment.",
    category: "Antimycobacterials",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-10",
    question: "Which Antileprotic Agent is associated with skin discoloration as a side effect?",
    options: ["Dapsone", "Clofazimine", "Rifampicin", "Ethionamide"],
    correctAnswer: "Clofazimine",
    explanation: "Clofazimine (Clofazimine by Novartis India) causes reddish-brown skin discoloration in leprosy treatment.",
    category: "Antimycobacterials",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-11",
    question: "Which Indian drug is an Azole antifungal used for systemic candidiasis?",
    options: ["Forcan", "Asthalin", "Ecosprin", "Pan-D"],
    correctAnswer: "Forcan",
    explanation: "Forcan (Fluconazole by Cipla) is an Azole antifungal used for systemic fungal infections like candidiasis.",
    category: "Antifungals",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-12",
    question: "What is the primary use of Polyene antifungals like Amphotericin B?",
    options: ["Treat bacterial infections", "Treat systemic fungal infections", "Treat hypertension", "Treat diabetes"],
    correctAnswer: "Treat systemic fungal infections",
    explanation: "Polyenes, like Amphotericin B (Fungisome by Sun Pharma), treat severe fungal infections like aspergillosis.",
    category: "Antifungals",
    difficulty: "medium",
    type: "indication"
  },
  {
    id: "medium-13",
    question: "Which side effect of Allylamines like Terbinafine requires liver function tests?",
    options: ["Hepatotoxicity", "Hypoglycemia", "Bradycardia", "Dry mouth"],
    correctAnswer: "Hepatotoxicity",
    explanation: "Allylamines, like Terbinafine (Terbicip by Cipla), can cause hepatotoxicity, necessitating liver monitoring.",
    category: "Antifungals",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-14",
    question: "Which Indian drug is an Echinocandin used for invasive aspergillosis?",
    options: ["Cancidas", "Voveran", "Metrogyl", "Zifi"],
    correctAnswer: "Cancidas",
    explanation: "Cancidas (Caspofungin by MSD India) is an Echinocandin used for invasive fungal infections.",
    category: "Antifungals",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-15",
    question: "What is the mechanism of action of Nucleoside Analogues like Acyclovir?",
    options: ["Inhibit viral DNA polymerase", "Inhibit protein synthesis", "Block histamine receptors", "Reduce inflammation"],
    correctAnswer: "Inhibit viral DNA polymerase",
    explanation: "Nucleoside Analogues, like Acyclovir (Zovirax by GSK India), inhibit viral DNA polymerase to treat herpes infections.",
    category: "Antivirals",
    difficulty: "medium",
    type: "mechanism"
  },
  {
    id: "medium-16",
    question: "Which Indian drug is a Non-Nucleoside Reverse Transcriptase Inhibitor (NNRTI) for HIV?",
    options: ["Efavir", "Ciplox", "Rantac", "Crocin"],
    correctAnswer: "Efavir",
    explanation: "Efavir (Efavirenz by Cipla) is an NNRTI used in HIV combination therapy.",
    category: "Antivirals",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-17",
    question: "What is a key side effect of Protease Inhibitors like Lopinavir?",
    options: ["GI upset", "Photosensitivity", "Hypotension", "Hair loss"],
    correctAnswer: "GI upset",
    explanation: "Protease Inhibitors, like Lopinavir (Lopimune by Cipla), commonly cause gastrointestinal disturbances and lipodystrophy.",
    category: "Antivirals",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-18",
    question: "Which Indian drug is a Neuraminidase Inhibitor used for influenza?",
    options: ["Fluvir", "Telma", "Voveran", "Liv.52"],
    correctAnswer: "Fluvir",
    explanation: "Fluvir (Oseltamivir by Hetero Drugs) is a Neuraminidase Inhibitor for influenza treatment.",
    category: "Antivirals",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-19",
    question: "Which Antimalarial drug is associated with retinopathy as a long-term side effect?",
    options: ["Chloroquine", "Artesunate", "Quinine", "Mefloquine"],
    correctAnswer: "Chloroquine",
    explanation: "Chloroquine (Lariago by Ipca Labs) can cause retinopathy with prolonged use, requiring eye monitoring.",
    category: "Antiparasitics",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-20",
    question: "Which Indian drug is an Anthelmintic used for roundworm infections?",
    options: ["Zentel", "Zifi", "Rosuvas", "Pan-D"],
    correctAnswer: "Zentel",
    explanation: "Zentel (Albendazole by GSK India) is an Anthelmintic for helminthic infections like roundworm.",
    category: "Antiparasitics",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-21",
    question: "What is the primary use of Antiprotozoals like Tinidazole?",
    options: ["Treat bacterial infections", "Treat protozoal infections", "Treat hypertension", "Treat asthma"],
    correctAnswer: "Treat protozoal infections",
    explanation: "Antiprotozoals, like Tinidazole (Tiniba by Zydus Cadila), treat infections like amoebiasis and giardiasis.",
    category: "Antiparasitics",
    difficulty: "medium",
    type: "indication"
  },
  {
    id: "medium-22",
    question: "Which side effect of Alkylating Agents like Cyclophosphamide is a dose-limiting factor?",
    options: ["Hemorrhagic cystitis", "Weight gain", "Hypertension", "Dry mouth"],
    correctAnswer: "Hemorrhagic cystitis",
    explanation: "Cyclophosphamide (Cycloxan by Zydus Cadila) can cause hemorrhagic cystitis, requiring hydration and mesna.",
    category: "Antineoplastics",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-23",
    question: "Which Indian drug is an Antimetabolite used for colorectal cancer?",
    options: ["5-FU", "Ciplox", "Rantac", "Crocin"],
    correctAnswer: "5-FU",
    explanation: "5-FU (Fluorouracil by Biochem Pharma) is an Antimetabolite for colorectal and other cancers.",
    category: "Antineoplastics",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-24",
    question: "What is the mechanism of action of Topoisomerase Inhibitors like Irinotecan?",
    options: ["Prevent DNA replication", "Inhibit protein synthesis", "Block histamine receptors", "Increase insulin secretion"],
    correctAnswer: "Prevent DNA replication",
    explanation: "Topoisomerase Inhibitors, like Irinotecan (Irnocam by Dr. Reddy's), block DNA replication in cancer cells.",
    category: "Antineoplastics",
    difficulty: "medium",
    type: "mechanism"
  },
  {
    id: "medium-25",
    question: "Which Indian drug is a Mitotic Inhibitor used for breast cancer?",
    options: ["Taxol", "Telma", "Voveran", "Liv.52"],
    correctAnswer: "Taxol",
    explanation: "Taxol (Paclitaxel by Cipla) is a Mitotic Inhibitor for breast and lung cancers.",
    category: "Antineoplastics",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-26",
    question: "Which side effect of Monoclonal Antibodies like Trastuzumab is a concern?",
    options: ["Cardiotoxicity", "Hypoglycemia", "Bradycardia", "Dry eyes"],
    correctAnswer: "Cardiotoxicity",
    explanation: "Trastuzumab (Herclon by Roche India) can cause heart failure, requiring cardiac monitoring.",
    category: "Antineoplastics",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-27",
    question: "Which Indian drug is a Tyrosine Kinase Inhibitor for chronic myeloid leukemia?",
    options: ["Imatib", "Zifi", "Rosuvas", "Pan-D"],
    correctAnswer: "Imatib",
    explanation: "Imatib (Imatinib by Cipla) is a Tyrosine Kinase Inhibitor for CML and other cancers.",
    category: "Antineoplastics",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-28",
    question: "Which NSAID is associated with a higher risk of cardiovascular events?",
    options: ["Diclofenac", "Paracetamol", "Cetirizine", "Metformin"],
    correctAnswer: "Diclofenac",
    explanation: "Diclofenac (Voveran by Novartis India) has a higher cardiovascular risk compared to other NSAIDs.",
    category: "Analgesics",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-29",
    question: "Which Indian drug is an Opioid used for postoperative pain?",
    options: ["Morcontin", "Ciplox", "Rantac", "Crocin"],
    correctAnswer: "Morcontin",
    explanation: "Morcontin (Morphine by Sun Pharma) is an Opioid for severe pain management.",
    category: "Analgesics",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-30",
    question: "What is the primary use of Non-Opioid Analgesics like Ibuprofen?",
    options: ["Treat severe pain", "Treat mild to moderate pain", "Treat infections", "Treat hypertension"],
    correctAnswer: "Treat mild to moderate pain",
    explanation: "Ibuprofen (Brufen by Abbott India) is used for mild to moderate pain and inflammation.",
    category: "Analgesics",
    difficulty: "medium",
    type: "indication"
  },
  {
    id: "medium-31",
    question: "Which side effect of Systemic Corticosteroids requires calcium supplementation?",
    options: ["Osteoporosis", "Photosensitivity", "Hypotension", "Hair loss"],
    correctAnswer: "Osteoporosis",
    explanation: "Corticosteroids, like Prednisolone (Omnacortil by Macleods), cause bone loss, requiring calcium and vitamin D.",
    category: "Anti-Inflammatory",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-32",
    question: "Which Indian drug is a DMARD used for rheumatoid arthritis?",
    options: ["Folitrax", "Zifi", "Rosuvas", "Liv.52"],
    correctAnswer: "Folitrax",
    explanation: "Folitrax (Methotrexate by Ipca Labs) is a DMARD for rheumatoid arthritis and autoimmune diseases.",
    category: "Anti-Inflammatory",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-33",
    question: "What is the mechanism of action of Proton Pump Inhibitors like Omeprazole?",
    options: ["Inhibit H+/K+ ATPase", "Inhibit protein synthesis", "Block dopamine receptors", "Increase insulin secretion"],
    correctAnswer: "Inhibit H+/K+ ATPase",
    explanation: "PPIs, like Omeprazole (Rantac-D by JB Chemicals), reduce gastric acid by inhibiting the proton pump.",
    category: "Antacids & Antiulcerants",
    difficulty: "medium",
    type: "mechanism"
  },
  {
    id: "medium-34",
    question: "Which Indian drug is an H2 Receptor Antagonist for dyspepsia?",
    options: ["Famocid", "Ciplox", "Rantac", "Crocin"],
    correctAnswer: "Famocid",
    explanation: "Famocid (Famotidine by Sun Pharma) is an H2 Receptor Antagonist for ulcers and dyspepsia.",
    category: "Antacids & Antiulcerants",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-35",
    question: "Which Antacid is commonly used for heartburn in India?",
    options: ["Digene", "Telma", "Voveran", "Zifi"],
    correctAnswer: "Digene",
    explanation: "Digene (Aluminum Hydroxide + Magnesium Hydroxide by Abbott India) neutralizes gastric acid for heartburn relief.",
    category: "Antacids & Antiulcerants",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-36",
    question: "Which side effect of Antiulcerants like Sucralfate is a concern?",
    options: ["Constipation", "Weight gain", "Hypertension", "Dry eyes"],
    correctAnswer: "Constipation",
    explanation: "Sucralfate (Sucramal by Sun Pharma) can cause constipation by forming a protective barrier in the stomach.",
    category: "Antacids & Antiulcerants",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-37",
    question: "Which Indian drug is a Bulk-Forming Laxative?",
    options: ["Naturolax", "Ciplox", "Rantac", "Crocin"],
    correctAnswer: "Naturolax",
    explanation: "Naturolax (Ispaghula by Zydus Cadila) is a Bulk-Forming Laxative for chronic constipation.",
    category: "Laxatives",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-38",
    question: "Which Expectorant is used in combination with a bronchodilator in India?",
    options: ["Ascoril", "Voveran", "Metrogyl", "Telma"],
    correctAnswer: "Ascoril",
    explanation: "Ascoril (Guaifenesin + Terbutaline by Glenmark) combines an expectorant with a bronchodilator for cough.",
    category: "Anti-Cough, Anti-Cold & Anti-Allergic",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-39",
    question: "Which side effect of Antitussives like Dextromethorphan is a concern?",
    options: ["Drowsiness", "Photosensitivity", "Hypotension", "Hair loss"],
    correctAnswer: "Drowsiness",
    explanation: "Dextromethorphan (Coretuss by Cipla) suppresses cough but can cause drowsiness.",
    category: "Anti-Cough, Anti-Cold & Anti-Allergic",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-40",
    question: "Which Indian drug is an Antihistamine for allergic rhinitis?",
    options: ["Allegra", "Zifi", "Rosuvas", "Pan-D"],
    correctAnswer: "Allegra",
    explanation: "Allegra (Fexofenadine by Sanofi India) is an Antihistamine for allergies and rhinitis.",
    category: "Anti-Cough, Anti-Cold & Anti-Allergic",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-41",
    question: "Which Decongestant is used in nasal sprays in India?",
    options: ["Nasivion", "Ciplox", "Rantac", "Crocin"],
    correctAnswer: "Nasivion",
    explanation: "Nasivion (Oxymetazoline by Merck India) is a Decongestant for nasal congestion.",
    category: "Anti-Cough, Anti-Cold & Anti-Allergic",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-42",
    question: "What is the primary use of Haematinics like Ferrous Fumarate?",
    options: ["Treat infections", "Treat anemia", "Treat hypertension", "Treat asthma"],
    correctAnswer: "Treat anemia",
    explanation: "Haematinics, like Ferrous Fumarate (Livogen by Merck India), treat iron deficiency anemia.",
    category: "Haematinics & Nutritional Supplements",
    difficulty: "medium",
    type: "indication"
  },
  {
    id: "medium-43",
    question: "Which Indian drug is a Vitamin B Complex supplement?",
    options: ["Becozinc", "Voveran", "Metrogyl", "Telma"],
    correctAnswer: "Becozinc",
    explanation: "Becozinc (Vitamin B Complex by Dr. Reddy's) treats vitamin B deficiencies.",
    category: "Haematinics & Nutritional Supplements",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-44",
    question: "Which side effect of Mineral supplements like Calcium Carbonate requires monitoring?",
    options: ["Hypercalcemia", "Hypoglycemia", "Bradycardia", "Dry eyes"],
    correctAnswer: "Hypercalcemia",
    explanation: "Calcium Carbonate (Shelcal by Dr. Reddy's) can cause hypercalcemia with excessive use.",
    category: "Haematinics & Nutritional Supplements",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-45",
    question: "Which Indian drug is an Antioxidant with Lycopene?",
    options: ["Oxivit", "Zifi", "Rosuvas", "Liv.52"],
    correctAnswer: "Oxivit",
    explanation: "Oxivit (Lycopene + Multivitamins by Sun Pharma) is an Antioxidant for oxidative stress.",
    category: "Haematinics & Nutritional Supplements",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-46",
    question: "Which side effect of Dopamine Antagonist antiemetics like Metoclopramide is a concern?",
    options: ["Block dopamine D2 receptors", "Inhibit protein synthesis", "Increase insulin secretion", "Relax bronchial muscles"],
    correctAnswer: "Block dopamine D2 receptors",
    explanation: "Metoclopramide (Reglan by Cipla) blocks dopamine D2 receptors to reduce nausea.",
    category: "Antiemetics",
    difficulty: "medium",
    type: "mechanism"
  },
  {
    id: "medium-47",
    question: "Which Indian drug is an NK1 Receptor Antagonist for chemotherapy-induced nausea?",
    options: ["Aprecap", "Ciplox", "Rantac", "Crocin"],
    correctAnswer: "Aprecap",
    explanation: "Aprecap (Aprepitant by Cipla) is an NK1 Receptor Antagonist for nausea prevention.",
    category: "Antiemetics",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-48",
    question: "Which side effect of Topical Corticosteroids is associated with prolonged use?",
    options: ["Telangiectasia", "Weight gain", "Hypertension", "Hair loss"],
    correctAnswer: "Telangiectasia",
    explanation: "Topical Corticosteroids, like Betamethasone (Betnovate by GSK India), cause visible blood vessels with prolonged use.",
    category: "Corticosteroids",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-49",
    question: "Which Indian drug is an ACE Inhibitor for heart failure?",
    options: ["Enam", "Voveran", "Metrogyl", "Zifi"],
    correctAnswer: "Enam",
    explanation: "Enam (Enalapril by Dr. Reddy's) is an ACE Inhibitor for hypertension and heart failure.",
    category: "Cardiovascular",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-50",
    question: "What is a key side effect of Beta-Blockers like Atenolol?",
    options: ["Bronchospasm", "Photosensitivity", "Hypotension", "Dry eyes"],
    correctAnswer: "Bronchospasm",
    explanation: "Atenolol (Aten by Zydus Cadila) can cause bronchospasm, especially in asthmatic patients.",
    category: "Cardiovascular",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-51",
    question: "Which Indian drug is a Calcium Channel Blocker for angina?",
    options: ["Amlong", "Ciplox", "Rantac", "Crocin"],
    correctAnswer: "Amlong",
    explanation: "Amlong (Amlodipine by Micro Labs) is a Calcium Channel Blocker for hypertension and angina.",
    category: "Cardiovascular",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-52",
    question: "Which side effect of Statins requires muscle enzyme monitoring?",
    options: ["Myopathy", "Weight gain", "Hypertension", "Dry mouth"],
    correctAnswer: "Myopathy",
    explanation: "Statins, like Rosuvastatin (Rosuvas by Sun Pharma), can cause myopathy, requiring CPK monitoring.",
    category: "Cardiovascular",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-53",
    question: "Which Indian drug is an Antiplatelet for stroke prevention?",
    options: ["Clopid", "Zifi", "Rosuvas", "Pan-D"],
    correctAnswer: "Clopid",
    explanation: "Clopid (Clopidogrel by Cipla) is an Antiplatelet to prevent stroke and myocardial infarction.",
    category: "Cardiovascular",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-54",
    question: "What is the mechanism of action of Anticoagulants like Warfarin?",
    options: ["Inhibit clotting factors", "Inhibit protein synthesis", "Block histamine receptors", "Increase insulin secretion"],
    correctAnswer: "Inhibit clotting factors",
    explanation: "Warfarin (Warf by Cipla) inhibits vitamin K-dependent clotting factors to prevent thrombosis.",
    category: "Cardiovascular",
    difficulty: "medium",
    type: "mechanism"
  },
  {
    id: "medium-55",
    question: "Which Indian drug is a Diuretic for edema?",
    options: ["Lasix", "Voveran", "Metrogyl", "Telma"],
    correctAnswer: "Lasix",
    explanation: "Lasix (Furosemide by Sanofi India) is a Diuretic for edema and hypertension.",
    category: "Cardiovascular",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-56",
    question: "Which side effect of Nitrates like Nitroglycerin is common during initial use?",
    options: ["Headache", "Hypoglycemia", "Bradycardia", "Hair loss"],
    correctAnswer: "Headache",
    explanation: "Nitroglycerin (Nitrocontin by Modi-Mundipharma) causes headaches due to vasodilation.",
    category: "Cardiovascular",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-57",
    question: "Which Indian drug is an Antiarrhythmic for atrial fibrillation?",
    options: ["Cordarone", "Ciplox", "Rantac", "Crocin"],
    correctAnswer: "Cordarone",
    explanation: "Cordarone (Amiodarone by Sanofi India) is an Antiarrhythmic for arrhythmias like atrial fibrillation.",
    category: "Cardiovascular",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-58",
    question: "What is a key side effect of Sulfonylureas like Glibenclamide?",
    options: ["Hypoglycemia", "Photosensitivity", "Hypotension", "Dry eyes"],
    correctAnswer: "Hypoglycemia",
    explanation: "Glibenclamide (Daonil by Sanofi India) stimulates insulin release, risking hypoglycemia.",
    category: "Antidiabetics",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-59",
    question: "Which Indian drug is a Thiazolidinedione for type 2 diabetes?",
    options: ["Pioglar", "Zifi", "Rosuvas", "Liv.52"],
    correctAnswer: "Pioglar",
    explanation: "Pioglar (Pioglitazone by Sun Pharma) is a Thiazolidinedione for insulin sensitivity in diabetes.",
    category: "Antidiabetics",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-60",
    question: "Which side effect of SGLT2 Inhibitors requires patient education?",
    options: ["Genital infections", "Weight gain", "Hypertension", "Dry mouth"],
    correctAnswer: "Genital infections",
    explanation: "SGLT2 Inhibitors, like Empagliflozin (Jardiance by Boehringer Ingelheim India), increase urinary glucose, risking genital infections.",
    category: "Antidiabetics",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-61",
    question: "Which Indian drug is a DPP-4 Inhibitor for type 2 diabetes?",
    options: ["Januvia", "Voveran", "Metrogyl", "Telma"],
    correctAnswer: "Januvia",
    explanation: "Januvia (Sitagliptin by MSD India) is a DPP-4 Inhibitor for glycemic control.",
    category: "Antidiabetics",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-62",
    question: "What is the primary use of Insulin Analogues like Insulin Glargine?",
    options: ["Treat infections", "Treat diabetes", "Treat hypertension", "Treat asthma"],
    correctAnswer: "Treat diabetes",
    explanation: "Insulin Glargine (Lantus by Sanofi India) regulates blood glucose in diabetes.",
    category: "Antidiabetics",
    difficulty: "medium",
    type: "indication"
  },
  {
    id: "medium-63",
    question: "Which Indian drug is an Anticonvulsant for neuropathic pain?",
    options: ["Eptoin", "Ciplox", "Rantac", "Crocin"],
    correctAnswer: "Eptoin",
    explanation: "Eptoin (Phenytoin by Abbott India) is an Anticonvulsant for epilepsy and neuropathic pain.",
    category: "Central Nervous System",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-64",
    question: "Which side effect of SSRIs like Sertraline requires patient counseling?",
    options: ["Sexual dysfunction", "Photosensitivity", "Hypotension", "Hair loss"],
    correctAnswer: "Sexual dysfunction",
    explanation: "Sertraline (Sertaline by Zydus Cadila) can cause sexual dysfunction, impacting patient adherence.",
    category: "Central Nervous System",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-65",
    question: "Which Indian drug is an SNRI for chronic pain?",
    options: ["Duzela", "Zifi", "Rosuvas", "Pan-D"],
    correctAnswer: "Duzela",
    explanation: "Duzela (Duloxetine by Sun Pharma) is an SNRI for depression and chronic pain.",
    category: "Central Nervous System",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-66",
    question: "What is a key side effect of TCAs like Amitriptyline?",
    options: ["Cardiac effects", "Weight loss", "Hypertension", "Dry eyes"],
    correctAnswer: "Cardiac effects",
    explanation: "Amitriptyline (Tryptomer by Wockhardt) can cause arrhythmias and QT prolongation.",
    category: "Central Nervous System",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-67",
    question: "Which Indian drug is an Atypical Antipsychotic for schizophrenia?",
    options: ["Oleanz", "Voveran", "Metrogyl", "Telma"],
    correctAnswer: "Oleanz",
    explanation: "Oleanz (Olanzapine by Sun Pharma) is an Atypical Antipsychotic for schizophrenia and bipolar disorder.",
    category: "Central Nervous System",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-68",
    question: "Which side effect of Benzodiazepines like Lorazepam is a concern for long-term use?",
    options: ["Dependence", "Photosensitivity", "Hypotension", "Hair loss"],
    correctAnswer: "Dependence",
    explanation: "Lorazepam (Ativan by Pfizer India) can cause physical dependence with prolonged use.",
    category: "Central Nervous System",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-69",
    question: "Which Indian drug is a Non-Benzodiazepine Anxiolytic for insomnia?",
    options: ["Zolfresh", "Ciplox", "Rantac", "Crocin"],
    correctAnswer: "Zolfresh",
    explanation: "Zolfresh (Zolpidem by Abbott India) is a Non-Benzodiazepine for short-term insomnia treatment.",
    category: "Central Nervous System",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-70",
    question: "What is the primary use of Mood Stabilizers like Sodium Valproate?",
    options: ["Treat infections", "Treat bipolar disorder", "Treat hypertension", "Treat asthma"],
    correctAnswer: "Treat bipolar disorder",
    explanation: "Sodium Valproate (Valprol by Intas) stabilizes mood in bipolar disorder.",
    category: "Central Nervous System",
    difficulty: "medium",
    type: "indication"
  },
  {
    id: "medium-71",
    question: "Which Indian drug is an Antimigraine Agent for acute migraines?",
    options: ["Suminat", "Zifi", "Rosuvas", "Pan-D"],
    correctAnswer: "Suminat",
    explanation: "Suminat (Sumatriptan by Sun Pharma) is an Antimigraine Agent for acute migraine relief.",
    category: "Central Nervous System",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-72",
    question: "Which side effect of Beta-2 Agonists like Salbutamol requires monitoring?",
    options: ["Tachycardia", "Weight gain", "Hypertension", "Dry eyes"],
    correctAnswer: "Tachycardia",
    explanation: "Salbutamol (Asthalin by Cipla) can cause increased heart rate due to beta-2 stimulation.",
    category: "Respiratory",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-73",
    question: "Which Indian drug is an Anticholinergic Bronchodilator for COPD?",
    options: ["Tiova", "Voveran", "Metrogyl", "Telma"],
    correctAnswer: "Tiova",
    explanation: "Tiova (Tiotropium by Cipla) is an Anticholinergic Bronchodilator for COPD management.",
    category: "Respiratory",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-74",
    question: "What is a key side effect of Leukotriene Receptor Antagonists like Montelukast?",
    options: ["Hepatotoxicity", "Photosensitivity", "Hypotension", "Hair loss"],
    correctAnswer: "Hepatotoxicity",
    explanation: "Montelukast (Montair by Cipla) can cause rare hepatotoxicity, requiring liver function monitoring.",
    category: "Respiratory",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-75",
    question: "Which Indian drug is a Mast Cell Stabilizer for allergic conjunctivitis?",
    options: ["Cromal", "Ciplox", "Rantac", "Crocin"],
    correctAnswer: "Cromal",
    explanation: "Cromal (Cromolyn Sodium by Cipla) prevents histamine release in allergic conjunctivitis.",
    category: "Respiratory",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-76",
    question: "Which side effect of Thyroid Hormones like Levothyroxine requires dose adjustment?",
    options: ["Palpitations", "Weight gain", "Hypertension", "Dry eyes"],
    correctAnswer: "Palpitations",
    explanation: "Levothyroxine (Thyronorm by Abbott India) can cause palpitations if overdosed, requiring dose adjustment.",
    category: "Hormones & Endocrine",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-77",
    question: "Which Indian drug is an Antithyroid Drug for Graves' disease?",
    options: ["PTU", "Zifi", "Rosuvas", "Pan-D"],
    correctAnswer: "PTU",
    explanation: "PTU (Propylthiouracil by Macleods) is an Antithyroid Drug for hyperthyroidism.",
    category: "Hormones & Endocrine",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-78",
    question: "What is the primary use of Estrogens like Estradiol in postmenopausal women?",
    options: ["Treat infections", "Treat osteoporosis", "Treat diabetes", "Treat asthma"],
    correctAnswer: "Treat osteoporosis",
    explanation: "Estradiol (Estrabet by Abbott India) prevents bone loss in postmenopausal osteoporosis.",
    category: "Hormones & Endocrine",
    difficulty: "medium",
    type: "indication"
  },
  {
    id: "medium-79",
    question: "Which Indian drug is a Progestin for contraception?",
    options: ["Depo-Provera", "Voveran", "Metrogyl", "Telma"],
    correctAnswer: "Depo-Provera",
    explanation: "Depo-Provera (Medroxyprogesterone by Pfizer India) is a Progestin for contraception.",
    category: "Hormones & Endocrine",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-80",
    question: "Which side effect of Androgens like Testosterone is a concern in males?",
    options: ["Prostate enlargement", "Photosensitivity", "Hypotension", "Hair loss"],
    correctAnswer: "Prostate enlargement",
    explanation: "Testosterone (Sustanon by Zydus Cadila) can cause prostate hypertrophy in males.",
    category: "Hormones & Endocrine",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-81",
    question: "Which Indian drug is a Growth Hormone Analogue for growth deficiency?",
    options: ["Norditropin", "Ciplox", "Rantac", "Crocin"],
    correctAnswer: "Norditropin",
    explanation: "Norditropin (Somatropin by Novo Nordisk India) treats growth hormone deficiency.",
    category: "Hormones & Endocrine",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-82",
    question: "Which side effect of GnRH Analogues like Leuprolide is a concern?",
    options: ["Hot flashes", "Weight gain", "Hypertension", "Dry eyes"],
    correctAnswer: "Hot flashes",
    explanation: "Leuprolide (Lupride by Sun Pharma) causes hot flashes due to hormonal suppression.",
    category: "Hormones & Endocrine",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-83",
    question: "Which Indian drug is an mTOR Inhibitor for transplant rejection?",
    options: ["Siroboom", "Zifi", "Rosuvas", "Pan-D"],
    correctAnswer: "Siroboom",
    explanation: "Siroboom (Sirolimus by Biocon) is an mTOR Inhibitor for immunosuppression.",
    category: "Immunosuppressants",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-84",
    question: "Which side effect of Antimetabolite Immunosuppressants like Azathioprine is dose-limiting?",
    options: ["Bone marrow suppression", "Photosensitivity", "Hypotension", "Hair loss"],
    correctAnswer: "Bone marrow suppression",
    explanation: "Azathioprine (Immuran by GSK India) causes bone marrow suppression, requiring blood count monitoring.",
    category: "Immunosuppressants",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-85",
    question: "Which Indian drug is an Antispasmodic for IBS?",
    options: ["Mebiz", "Voveran", "Metrogyl", "Telma"],
    correctAnswer: "Mebiz",
    explanation: "Mebiz (Mebeverine by Abbott India) is an Antispasmodic for irritable bowel syndrome.",
    category: "Gastrointestinal",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-86",
    question: "What is the primary use of Antidiarrheals like Racecadotril?",
    options: ["Treat infections", "Treat diarrhea", "Treat hypertension", "Treat asthma"],
    correctAnswer: "Treat diarrhea",
    explanation: "Racecadotril (Redotil by Dr. Reddy's) reduces intestinal secretion in diarrhea.",
    category: "Gastrointestinal",
    difficulty: "medium",
    type: "indication"
  },
  {
    id: "medium-87",
    question: "Which Indian drug is a Prokinetic for gastroparesis?",
    options: ["Ganaton", "Ciplox", "Rantac", "Crocin"],
    correctAnswer: "Ganaton",
    explanation: "Ganaton (Itopride by Abbott India) enhances GI motility for gastroparesis.",
    category: "Gastrointestinal",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-88",
    question: "Which side effect of Probiotics like Saccharomyces boulardii is rare but serious?",
    options: ["Infections", "Weight gain", "Hypertension", "Dry eyes"],
    correctAnswer: "Infections",
    explanation: "Saccharomyces boulardii (Econorm by Dr. Reddy's) can rarely cause fungemia in immunocompromised patients.",
    category: "Gastrointestinal",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-89",
    question: "Which Indian drug is a Topical Antibacterial for wounds?",
    options: ["Bactroban", "Zifi", "Rosuvas", "Pan-D"],
    correctAnswer: "Bactroban",
    explanation: "Bactroban (Mupirocin by GSK India) treats bacterial skin infections.",
    category: "Dermatologicals",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-90",
    question: "What is a key side effect of Keratolytics like Tretinoin?",
    options: ["Skin irritation", "Photosensitivity", "Hypotension", "Hair loss"],
    correctAnswer: "Skin irritation",
    explanation: "Tretinoin (Retin-A by J&J India) causes skin irritation and peeling in acne treatment.",
    category: "Dermatologicals",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-91",
    question: "Which Indian drug is an Emollient for dry skin?",
    options: ["Moisturex", "Voveran", "Metrogyl", "Telma"],
    correctAnswer: "Moisturex",
    explanation: "Moisturex (Urea by Ranbaxy) hydrates and softens dry skin.",
    category: "Dermatologicals",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-92",
    question: "Which side effect of Mydriatics like Atropine is a concern in glaucoma patients?",
    options: ["Increased intraocular pressure", "Weight gain", "Hypertension", "Dry eyes"],
    correctAnswer: "Increased intraocular pressure",
    explanation: "Atropine (Atropine by FDC Ltd.) can worsen glaucoma by increasing intraocular pressure.",
    category: "Ophthalmic",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-93",
    question: "Which Indian drug is an Anti-Glaucoma Agent for ocular hypertension?",
    options: ["Travatan", "Ciplox", "Rantac", "Crocin"],
    correctAnswer: "Travatan",
    explanation: "Travatan (Travoprost by Alcon India) reduces intraocular pressure in glaucoma.",
    category: "Ophthalmic",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-94",
    question: "What is the primary use of Ophthalmic Anti-Infectives like Moxifloxacin?",
    options: ["Treat conjunctivitis", "Treat infections", "Treat hypertension", "Treat asthma"],
    correctAnswer: "Treat conjunctivitis",
    explanation: "Moxifloxacin (Vigamox by Alcon India) treats bacterial conjunctivitis.",
    category: "Ophthalmic",
    difficulty: "medium",
    type: "indication"
  },
  {
    id: "medium-95",
    question: "Which Indian drug is an Otic Anti-Infective for otitis externa?",
    options: ["Candibiotic", "Zifi", "Rosuvas", "Pan-D"],
    correctAnswer: "Candibiotic",
    explanation: "Candibiotic (Chloramphenicol + Clotrimazole by Glenmark) treats ear infections.",
    category: "Otic",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-96",
    question: "Which side effect of Urinary Antiseptics like Nitrofurantoin is a concern in G6PD deficiency?",
    options: ["Hemolysis", "Photosensitivity", "Hypotension", "Hair loss"],
    correctAnswer: "Hemolysis",
    explanation: "Nitrofurantoin (Nitrofur by Sun Pharma) can cause hemolysis in G6PD-deficient patients.",
    category: "Urinary",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-97",
    question: "Which Indian drug is an Antivertigo Agent for Meniere's disease?",
    options: ["Stugeron", "Voveran", "Metrogyl", "Telma"],
    correctAnswer: "Stugeron",
    explanation: "Stugeron (Cinnarizine by J&J) treats vertigo and improves vestibular function.",
    category: "Neurological",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-98",
    question: "What is a key side effect of Alpha-Blockers like Tamsulosin?",
    options: ["Orthostatic hypotension", "Weight gain", "Hypertension", "Dry eyes"],
    correctAnswer: "Orthostatic hypotension",
    explanation: "Tamsulosin (Urofos by Urocare) causes dizziness due to orthostatic hypotension.",
    category: "Urogenital",
    difficulty: "medium",
    type: "side-effects"
  },
  {
    id: "medium-99",
    question: "Which Indian drug is a 5-Alpha Reductase Inhibitor for BPH therapy?",
    options: ["Finpecia", "Ciplox", "Rantac", "Crocin"],
    correctAnswer: "Finpecia",
    explanation: "Finpecia (Finasteride by Cipla) is a 5-alpha reductase inhibitor used for benign prostatic hyperplasia (BPH) and hair loss.",
    category: "Urogenital",
    difficulty: "medium",
    type: "drug-class"
  },
  {
    id: "medium-100",
    question: "Which Indian herbal drug is used as a uterine tonic for menstrual disorders?",
    options: ["Evecare", "Zifi", "Rosuvas", "Pan-D"],
    correctAnswer: "Evecare",
    explanation: "Evecare (by Himalaya) is an Ayurvedic uterine tonic used to manage menstrual disorders and support reproductive health.",
    category: "Herbal & Natural Products",
    difficulty: "medium",
    type: "drug-class"
  }
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

// Utility function to shuffle array using Fisher-Yates algorithm
const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const getAllQuestions = (): QuizQuestion[] => {
  return shuffleArray([...easyQuestions, ...mediumQuestions, ...hardQuestions]);
};

export const getQuestionsByDifficulty = (difficulty: 'easy' | 'medium' | 'hard'): QuizQuestion[] => {
  switch (difficulty) {
    case 'easy':
      return shuffleArray(easyQuestions);
    case 'medium':
      return shuffleArray(mediumQuestions);
    case 'hard':
      return shuffleArray(hardQuestions);
    default:
      return shuffleArray(easyQuestions);
  }
};
