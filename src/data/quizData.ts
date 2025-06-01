import { QuizQuestion, SymptomCase } from '../types/quizTypes';

// Export the QuizQuestion type for external use
export type { QuizQuestion, SymptomCase };

// Sample symptom cases for the SymptomDiagnosis component
export const symptomCases: SymptomCase[] = [
  {
    id: 'symptom-1',
    symptom: 'Chest Pain',
    description: 'A 45-year-old male presents with crushing chest pain radiating to the left arm, accompanied by shortness of breath and diaphoresis.',
    recommendedDrugClasses: ['Antiplatelet Agents', 'Beta-Blockers', 'ACE Inhibitors', 'Statins'],
    explanation: 'This presentation suggests acute coronary syndrome. Antiplatelet agents prevent further clot formation, beta-blockers reduce myocardial oxygen demand, ACE inhibitors provide cardioprotection, and statins stabilize plaque.'
  },
  {
    id: 'symptom-2',
    symptom: 'Hypertension',
    description: 'A 55-year-old female with blood pressure readings consistently above 150/90 mmHg, with no other comorbidities.',
    recommendedDrugClasses: ['ACE Inhibitors', 'Calcium Channel Blockers', 'Thiazide Diuretics'],
    explanation: 'For uncomplicated hypertension, first-line agents include ACE inhibitors, calcium channel blockers, and thiazide diuretics. These effectively reduce blood pressure and cardiovascular risk.'
  },
  {
    id: 'symptom-3',
    symptom: 'Type 2 Diabetes',
    description: 'A 50-year-old obese patient with HbA1c of 8.5%, presenting with polyuria, polydipsia, and unexplained weight loss.',
    recommendedDrugClasses: ['Biguanides', 'Sulfonylureas', 'DPP-4 Inhibitors', 'SGLT2 Inhibitors'],
    explanation: 'Metformin (biguanide) is first-line therapy. Sulfonylureas increase insulin secretion, DPP-4 inhibitors enhance incretin action, and SGLT2 inhibitors provide glucose-lowering with cardiovascular benefits.'
  },
  {
    id: 'symptom-4',
    symptom: 'Bacterial Pneumonia',
    description: 'A 35-year-old patient presents with fever, productive cough with purulent sputum, and chest X-ray showing consolidation.',
    recommendedDrugClasses: ['Beta-Lactam Antibiotics', 'Macrolides', 'Fluoroquinolones'],
    explanation: 'Community-acquired pneumonia typically responds to beta-lactams (penicillins, cephalosporins), macrolides for atypical coverage, or fluoroquinolones for broader spectrum activity.'
  },
  {
    id: 'symptom-5',
    symptom: 'Asthma Exacerbation',
    description: 'A 25-year-old patient with known asthma presents with wheezing, shortness of breath, and chest tightness.',
    recommendedDrugClasses: ['Short-Acting Beta-2 Agonists', 'Corticosteroids', 'Long-Acting Beta-2 Agonists'],
    explanation: 'Acute asthma requires short-acting beta-2 agonists for immediate bronchodilation. Corticosteroids reduce inflammation, while long-acting beta-2 agonists provide sustained control.'
  }
];

// Function to shuffle array and return shuffled array with new correct answer index
function shuffleOptions(options: string[], correctAnswer: string): { shuffledOptions: string[], newCorrectAnswer: string } {
  const optionsWithIndex = options.map((option, index) => ({ option, originalIndex: index }));
  
  // Fisher-Yates shuffle
  for (let i = optionsWithIndex.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsWithIndex[i], optionsWithIndex[j]] = [optionsWithIndex[j], optionsWithIndex[i]];
  }
  
  const shuffledOptions = optionsWithIndex.map(item => item.option);
  const newCorrectAnswer = shuffledOptions.find(option => option === correctAnswer) || correctAnswer;
  
  return { shuffledOptions, newCorrectAnswer };
}

const easyQuizQuestions: QuizQuestion[] = [
  {
    id: 'easy-1',
    question: 'Which drug class is primarily used to treat hypertension by blocking beta-adrenergic receptors?',
    options: ['Diuretics', 'Beta Blockers', 'ACE Inhibitors', 'Calcium Channel Blockers'],
    correctAnswer: 'Beta Blockers',
    explanation: 'Beta blockers reduce heart rate and blood pressure by inhibiting beta-adrenergic receptors.',
    category: 'Cardiovascular'
  },
  {
    id: 'easy-2',
    question: 'Which antibiotic class inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins?',
    options: ['Aminoglycosides', 'Macrolides', 'Penicillins', 'Fluoroquinolones'],
    correctAnswer: 'Penicillins',
    explanation: 'Penicillins are beta-lactam antibiotics that inhibit bacterial cell wall synthesis.',
    category: 'Antimicrobial'
  },
  {
    id: 'easy-3',
    question: 'Which drug class is used to lower cholesterol by inhibiting HMG-CoA reductase?',
    options: ['ACE Inhibitors', 'Statins', 'Diuretics', 'Calcium Channel Blockers'],
    correctAnswer: 'Statins',
    explanation: 'Statins inhibit HMG-CoA reductase, reducing LDL cholesterol production.',
    category: 'Cardiovascular'
  },
  {
    id: 'easy-4',
    question: 'Which central nervous system drug class is used for depression and anxiety by inhibiting serotonin reuptake?',
    options: ['Antiepileptics', 'SSRIs', 'Benzodiazepines', 'Antipsychotics'],
    correctAnswer: 'SSRIs',
    explanation: 'SSRIs increase synaptic serotonin levels by inhibiting its reuptake.',
    category: 'Central Nervous System'
  },
  {
    id: 'easy-5',
    question: 'Which gastrointestinal drug class reduces gastric acid production by inhibiting H+/K+ ATPase?',
    options: ['H2 Receptor Antagonists', 'Laxatives', 'Proton Pump Inhibitors', 'Antacids'],
    correctAnswer: 'Proton Pump Inhibitors',
    explanation: 'PPIs inhibit the proton pump in parietal cells, reducing acid secretion.',
    category: 'Gastrointestinal'
  }
].map(q => {
  const { shuffledOptions, newCorrectAnswer } = shuffleOptions(q.options, q.correctAnswer);
  return { ...q, options: shuffledOptions, correctAnswer: newCorrectAnswer };
});

const mediumQuizQuestions: QuizQuestion[] = [
  {
    id: 'medium-1',
    question: 'Which beta blocker is cardioselective and preferred in patients with COPD?',
    options: ['Carvedilol', 'Atenolol', 'Propranolol', 'Labetalol'],
    correctAnswer: 'Atenolol',
    explanation: 'Atenolol selectively blocks beta-1 receptors, reducing bronchospasm risk in COPD.',
    category: 'Cardiovascular'
  },
  {
    id: 'medium-2',
    question: 'Which antibiotic class inhibits bacterial protein synthesis by binding to the 50S ribosomal subunit?',
    options: ['Fluoroquinolones', 'Macrolides', 'Aminoglycosides', 'Tetracyclines'],
    correctAnswer: 'Macrolides',
    explanation: 'Macrolides bind to the 50S subunit, preventing peptide chain elongation.',
    category: 'Antimicrobial'
  },
  {
    id: 'medium-3',
    question: 'Which diuretic acts on the distal convoluted tubule to increase sodium and water excretion?',
    options: ['Potassium-sparing diuretics', 'Loop diuretics', 'Thiazide diuretics', 'Osmotic diuretics'],
    correctAnswer: 'Thiazide diuretics',
    explanation: 'Thiazides inhibit sodium reabsorption in the distal tubule, increasing diuresis.',
    category: 'Cardiovascular'
  },
  {
    id: 'medium-4',
    question: 'Which antiepileptic drug enhances GABA activity to stabilize neuronal activity?',
    options: ['Ethosuximide', 'Phenytoin', 'Valproate', 'Carbamazepine'],
    correctAnswer: 'Valproate',
    explanation: 'Valproate increases GABA levels, providing anticonvulsant effects.',
    category: 'Central Nervous System'
  },
  {
    id: 'medium-5',
    question: 'Which proton pump inhibitor is metabolized primarily by CYP2C19?',
    options: ['Esomeprazole', 'Pantoprazole', 'Omeprazole', 'Rabeprazole'],
    correctAnswer: 'Omeprazole',
    explanation: 'Omeprazole is metabolized by CYP2C19, affecting its efficacy in some patients.',
    category: 'Gastrointestinal'
  }
].map(q => {
  const { shuffledOptions, newCorrectAnswer } = shuffleOptions(q.options, q.correctAnswer);
  return { ...q, options: shuffledOptions, correctAnswer: newCorrectAnswer };
});

const hardQuizQuestions: QuizQuestion[] = [
  {
    id: 'hard-1',
    question: 'Which specific penicillin-binding protein (PBP) is primarily targeted by Cephalosporins to disrupt bacterial cell wall synthesis?',
    options: ['PBP4', 'PBP1a', 'PBP3', 'PBP2a'],
    correctAnswer: 'PBP3',
    explanation: 'Cephalosporins, like Cefixime (Zifi by FDC Ltd.), primarily target PBP3 in Gram-negative bacteria, disrupting peptidoglycan cross-linking, leading to cell lysis. PBP2a is associated with MRSA resistance.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-2',
    question: 'Which Indian brand of Azithromycin is contraindicated in patients with a history of cholestatic jaundice?',
    options: ['Voveran', 'Rosuvas', 'Azithral', 'Clincin'],
    correctAnswer: 'Azithral',
    explanation: 'Azithral (Azithromycin by Alembic) is a Macrolide contraindicated in patients with cholestatic jaundice due to its potential to cause hepatotoxicity.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-3',
    question: 'What is the primary reason Tetracyclines like Doxycycline are avoided in children under 8 years?',
    options: ['QT prolongation', 'Tooth discoloration', 'Risk of nephrotoxicity', 'Bone marrow suppression'],
    correctAnswer: 'Tooth discoloration',
    explanation: 'Tetracyclines, like Doxycycline (Doxy-1 by USV Ltd.), bind to calcium in developing teeth, causing permanent discoloration, hence avoided in children under 8.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-4',
    question: 'Which rare but serious side effect of Fluoroquinolones like Ofloxacin requires immediate discontinuation?',
    options: ['Alopecia', 'Tendon rupture', 'Hyperglycemia', 'Dry mouth'],
    correctAnswer: 'Tendon rupture',
    explanation: 'Fluoroquinolones, like Ofloxacin (Oflum by Cipla), can cause tendonitis and rupture, particularly in the Achilles tendon, necessitating immediate cessation.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-5',
    question: 'Which Indian drug, an Oxazolidinone, requires monitoring for serotonin syndrome when used with SSRIs?',
    options: ['Pan-D', 'Zyvozid', 'Telma', 'Liv.52'],
    correctAnswer: 'Zyvozid',
    explanation: 'Zyvozid (Linezolid by Pfizer India) inhibits monoamine oxidase, risking serotonin syndrome when combined with SSRIs like Sertraline.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-6',
    question: 'Which Aminoglycoside is preferred for multidrug-resistant tuberculosis due to its lower ototoxicity risk?',
    options: ['Amikacin', 'Gentamicin', 'Tobramycin', 'Neomycin'],
    correctAnswer: 'Amikacin',
    explanation: 'Amikacin (Amikacin by Cipla) is used in MDR-TB regimens due to its efficacy and relatively lower ototoxicity compared to other Aminoglycosides.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-7',
    question: 'Which Indian Carbapenem is associated with a lower seizure risk compared to Imipenem?',
    options: ['Meronem', 'Ciplox', 'Rantac', 'Crocin'],
    correctAnswer: 'Meronem',
    explanation: 'Meronem (Meropenem by AstraZeneca India) has a lower seizure risk than Imipenem, making it safer in patients with CNS disorders.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-8',
    question: 'Which Sulfonamide drug interaction increases the risk of kernicterus in neonates?',
    options: ['With diuretics', 'With sulfonylureas', 'With bilirubin-binding drugs', 'With beta-blockers'],
    correctAnswer: 'With bilirubin-binding drugs',
    explanation: 'Sulfonamides, like Sulfamethoxazole (Bactrim by Abbott India), displace bilirubin from albumin, increasing kernicterus risk in neonates.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-9',
    question: 'Which Indian Glycopeptide requires slow infusion to prevent red man syndrome?',
    options: ['Vanlid', 'Zifi', 'Rosuvas', 'Voveran'],
    correctAnswer: 'Vanlid',
    explanation: 'Vanlid (Vancomycin by Cipla) requires slow IV infusion to avoid histamine-mediated red man syndrome, characterized by flushing and rash.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-10',
    question: 'Which rare side effect of Nitroimidazoles like Tinidazole is associated with prolonged use?',
    options: ['Peripheral neuropathy', 'Cardiotoxicity', 'Osteoporosis', 'Alopecia'],
    correctAnswer: 'Peripheral neuropathy',
    explanation: 'Tinidazole (Tiniba by Zydus Cadila) can cause peripheral neuropathy with prolonged use, requiring monitoring for numbness or tingling.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-11',
    question: 'Which Indian Antitubercular Agent is associated with orange discoloration of bodily fluids?',
    options: ['R-Cin', 'Pyrazinamide', 'Ethambutol', 'Isoniazid'],
    correctAnswer: 'R-Cin',
    explanation: 'R-Cin (Rifampicin by Lupin) causes orange discoloration of urine, sweat, and tears due to its red-orange metabolite.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-12',
    question: 'Which Antileprotic Agent requires monitoring for agranulocytosis?',
    options: ['Dapsone', 'Clofazimine', 'Rifampicin', 'Minocycline'],
    correctAnswer: 'Dapsone',
    explanation: 'Dapsone (by GSK India) can cause agranulocytosis, a severe reduction in white blood cells, requiring regular blood counts.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-13',
    question: 'Which Indian Azole antifungal is preferred for cryptococcal meningitis due to its CNS penetration?',
    options: ['Fluka', 'Terbicip', 'Asthalin', 'Ecosprin'],
    correctAnswer: 'Fluka',
    explanation: 'Fluka (Fluconazole by Cipla) has excellent CNS penetration, making it ideal for cryptococcal meningitis.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-14',
    question: 'Which Polyene antifungal formulation reduces nephrotoxicity compared to conventional Amphotericin B?',
    options: ['Liposomal Amphotericin B', 'Nystatin', 'Griseofulvin', 'Ketoconazole'],
    correctAnswer: 'Liposomal Amphotericin B',
    explanation: 'Liposomal Amphotericin B (Fungisome by Sun Pharma) reduces nephrotoxicity by targeting fungal cells more selectively.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-15',
    question: 'Which Indian Allylamine is contraindicated in patients with active liver disease?',
    options: ['Terbicip', 'Pan-D', 'Liv.52', 'Telma'],
    correctAnswer: 'Terbicip',
    explanation: 'Terbicip (Terbinafine by Cipla) is contraindicated in active liver disease due to its hepatotoxic potential.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-16',
    question: 'Which Echinocandin is used as salvage therapy for invasive aspergillosis in India?',
    options: ['Mycamine', 'Ciplox', 'Rantac', 'Crocin'],
    correctAnswer: 'Mycamine',
    explanation: 'Mycamine (Micafungin, imported) is used as salvage therapy for invasive aspergillosis when other antifungals fail.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-17',
    question: 'Which Indian Nucleoside Analogue requires dose adjustment in renal impairment?',
    options: ['Valcivir', 'Zifi', 'Rosuvas', 'Voveran'],
    correctAnswer: 'Valcivir',
    explanation: 'Valcivir (Valacyclovir by Cipla) is renally excreted, requiring dose adjustment in patients with kidney impairment.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-18',
    question: 'Which NNRTI has a significant drug interaction with rifampicin, reducing its efficacy?',
    options: ['Nevirapine', 'Efavirenz', 'Zidovudine', 'Lamivudine'],
    correctAnswer: 'Nevirapine',
    explanation: 'Nevirapine (Nevir by Cipla) is metabolized by CYP3A4, which is induced by rifampicin, reducing Nevirapine levels.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-19',
    question: 'Which Indian Protease Inhibitor is boosted with ritonavir to enhance its pharmacokinetics?',
    options: ['Atazor', 'Telma', 'Voveran', 'Liv.52'],
    correctAnswer: 'Atazor',
    explanation: 'Atazor (Atazanavir by Emcure) is boosted with ritonavir to inhibit CYP3A4, increasing its bioavailability.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-20',
    question: 'Which Neuraminidase Inhibitor is associated with neuropsychiatric side effects in adolescents?',
    options: ['Oseltamivir', 'Zanamivir', 'Acyclovir', 'Ribavirin'],
    correctAnswer: 'Oseltamivir',
    explanation: 'Oseltamivir (Tamiflu by Roche India) can cause rare neuropsychiatric effects like delirium in adolescents.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-21',
    question: 'Which Indian Antimalarial is used in combination with artesunate for uncomplicated malaria?',
    options: ['Falcigo', 'Ciplox', 'Rantac', 'Crocin'],
    correctAnswer: 'Falcigo',
    explanation: 'Falcigo (Artesunate by Zydus Cadila) is used with sulfadoxine-pyrimethamine for uncomplicated Plasmodium falciparum malaria.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-22',
    question: 'Which Anthelmintic requires administration with a high-fat meal to enhance absorption?',
    options: ['Albendazole', 'Mebendazole', 'Ivermectin', 'Praziquantel'],
    correctAnswer: 'Albendazole',
    explanation: 'Albendazole (Zentel by GSK India) has increased bioavailability when taken with a high-fat meal.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-23',
    question: 'Which Indian Antiprotozoal is used for visceral leishmaniasis?',
    options: ['Metrogyl', 'Tiniba', 'Amphoret', 'Miltefos'],
    correctAnswer: 'Amphoret',
    explanation: 'Amphoret (Amphotericin B by Bharat Serums) is used for visceral leishmaniasis due to its antiprotozoal activity.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-24',
    question: 'Which Alkylating Agent is associated with secondary malignancies as a long-term risk?',
    options: ['Cyclophosphamide', 'Ifosfamide', 'Melphalan', 'Chlorambucil'],
    correctAnswer: 'Cyclophosphamide',
    explanation: 'Cyclophosphamide (Cycloxan by Zydus Cadila) increases the risk of secondary leukemias with prolonged use.',
    category: 'Oncology'
  },
  {
    id: 'hard-25',
    question: 'Which Indian Antimetabolite requires folinic acid rescue to reduce toxicity?',
    options: ['Folitrax', '5-FU', 'Xeloda', 'Gemzar'],
    correctAnswer: 'Folitrax',
    explanation: 'Folitrax (Methotrexate by Ipca Labs) requires folinic acid rescue to mitigate bone marrow and mucosal toxicity in high-dose regimens.',
    category: 'Oncology'
  },
  {
    id: 'hard-26',
    question: 'Which Topoisomerase Inhibitor is associated with severe diarrhea as a dose-limiting toxicity?',
    options: ['Irinotecan', 'Topotecan', 'Etoposide', 'Doxorubicin'],
    correctAnswer: 'Irinotecan',
    explanation: 'Irinotecan (Irnocam by Dr. Reddy\'s) causes severe diarrhea, requiring loperamide and dose adjustments.',
    category: 'Oncology'
  },
  {
    id: 'hard-27',
    question: 'Which Indian Mitotic Inhibitor is associated with hypersensitivity reactions during infusion?',
    options: ['Docetax', 'Taxol', 'Vinblastine', 'Vincristine'],
    correctAnswer: 'Taxol',
    explanation: 'Taxol (Paclitaxel by Cipla) can cause hypersensitivity reactions, requiring premedication with corticosteroids and antihistamines.',
    category: 'Oncology'
  },
  {
    id: 'hard-28',
    question: 'Which Monoclonal Antibody targets CD20 for non-Hodgkin lymphoma in India?',
    options: ['Mabthera', 'Herclon', 'Keytruda', 'Avastin'],
    correctAnswer: 'Mabthera',
    explanation: 'Mabthera (Rituximab by Roche India) targets CD20 on B-cells for non-Hodgkin lymphoma and chronic lymphocytic leukemia.',
    category: 'Oncology'
  },
  {
    id: 'hard-29',
    question: 'Which Indian Tyrosine Kinase Inhibitor is used for EGFR-mutated lung cancer?',
    options: ['Geftinat', 'Imatib', 'Zifi', 'Voveran'],
    correctAnswer: 'Geftinat',
    explanation: 'Geftinat (Gefitinib by Natco Pharma) targets EGFR mutations in non-small cell lung cancer.',
    category: 'Oncology'
  },
  {
    id: 'hard-30',
    question: 'Which NSAID has a black box warning for gastrointestinal perforation in India?',
    options: ['Diclofenac', 'Ibuprofen', 'Naproxen', 'Celecoxib'],
    correctAnswer: 'Diclofenac',
    explanation: 'Diclofenac (Voveran by Novartis India) carries a risk of GI perforation, especially in high-risk patients.',
    category: 'Central Nervous System'
  },
  {
    id: 'hard-31',
    question: 'Which Indian Opioid requires monitoring for QT prolongation?',
    options: ['Tramasul', 'Morcontin', 'Fentanyl', 'Buprenorphine'],
    correctAnswer: 'Tramasul',
    explanation: 'Tramasul (Tramadol by Zydus Cadila) can cause QT prolongation, particularly at high doses.',
    category: 'Central Nervous System'
  },
  {
    id: 'hard-32',
    question: 'Which Non-Opioid Analgesic is contraindicated in patients with severe hepatic impairment?',
    options: ['Paracetamol', 'Aspirin', 'Ibuprofen', 'Ketorolac'],
    correctAnswer: 'Paracetamol',
    explanation: 'Paracetamol (Crocin by GSK India) can cause hepatotoxicity in severe liver disease due to glutathione depletion.',
    category: 'Central Nervous System'
  },
  {
    id: 'hard-33',
    question: 'Which Indian Systemic Corticosteroid is used for adrenal insufficiency?',
    options: ['Hydrocort', 'Omnacortil', 'Betnovate', 'Wysolone'],
    correctAnswer: 'Hydrocort',
    explanation: 'Hydrocort (Hydrocortisone by Abbott India) mimics cortisol for adrenal insufficiency management.',
    category: 'Endocrine'
  },
  {
    id: 'hard-34',
    question: 'Which DMARD is associated with retinal toxicity requiring regular eye exams?',
    options: ['Hydroxychloroquine', 'Methotrexate', 'Sulfasalazine', 'Leflunomide'],
    correctAnswer: 'Hydroxychloroquine',
    explanation: 'Hydroxychloroquine (HCQS by Ipca Labs) can cause retinal toxicity, necessitating periodic ophthalmologic screening.',
    category: 'Central Nervous System'
  },
  {
    id: 'hard-35',
    question: 'Which Indian Proton Pump Inhibitor is metabolized primarily by CYP2C19?',
    options: ['Rantac-D', 'Pan-D', 'Nexpro', 'Rabium'],
    correctAnswer: 'Rantac-D',
    explanation: 'Rantac-D (Omeprazole by JB Chemicals) is metabolized by CYP2C19, with genetic polymorphisms affecting efficacy.',
    category: 'Gastrointestinal'
  },
  {
    id: 'hard-36',
    question: 'Which H2 Receptor Antagonist has been withdrawn in some markets due to nitrosamine impurities?',
    options: ['Ranitidine', 'Famotidine', 'Cimetidine', 'Nizatidine'],
    correctAnswer: 'Ranitidine',
    explanation: 'Ranitidine (Rantac by JB Chemicals) was withdrawn in some regions due to NDMA contamination concerns.',
    category: 'Gastrointestinal'
  },
  {
    id: 'hard-37',
    question: 'Which Indian Antacid contains simethicone for gas relief?',
    options: ['Gelusil', 'Digene', 'Sucramal', 'Rantac'],
    correctAnswer: 'Gelusil',
    explanation: 'Gelusil (Magnesium Trisilicate + Simethicone by Pfizer India) relieves heartburn and bloating.',
    category: 'Gastrointestinal'
  },
  {
    id: 'hard-38',
    question: 'Which Antiulcerant requires administration on an empty stomach for optimal efficacy?',
    options: ['Sucralfate', 'Omeprazole', 'Ranitidine', 'Pantoprazole'],
    correctAnswer: 'Sucralfate',
    explanation: 'Sucralfate (Sucramal by Sun Pharma) forms a protective barrier best on an empty stomach.',
    category: 'Gastrointestinal'
  },
  {
    id: 'hard-39',
    question: 'Which Indian Osmotic Laxative is contraindicated in patients with galactosemia?',
    options: ['Cremaffin', 'Naturolax', 'Dulcolax', 'Cremalax'],
    correctAnswer: 'Cremaffin',
    explanation: 'Cremaffin (Lactulose by Abbott India) is metabolized to galactose, contraindicated in galactosemia.',
    category: 'Gastrointestinal'
  },
  {
    id: 'hard-40',
    question: 'Which Indian Expectorant combination is used for asthma-associated cough?',
    options: ['Ascoril', 'Corex', 'Benadryl DR', 'Voveran'],
    correctAnswer: 'Ascoril',
    explanation: 'Ascoril (Guaifenesin + Terbutaline by Glenmark) treats cough in asthma by thinning mucus and bronchodilation.',
    category: 'Respiratory'
  },
  {
    id: 'hard-41',
    question: 'Which Antitussive is contraindicated in patients taking MAO inhibitors?',
    options: ['Dextromethorphan', 'Codeine', 'Pholcodine', 'Guaifenesin'],
    correctAnswer: 'Dextromethorphan',
    explanation: 'Dextromethorphan (Coretuss by Cipla) can cause serotonin syndrome when combined with MAO inhibitors.',
    category: 'Respiratory'
  },
  {
    id: 'hard-42',
    question: 'Which Indian Antihistamine is preferred for minimal sedation in allergic rhinitis?',
    options: ['Cetirizine', 'Allegra', 'Avil', 'Chlorpheniramine'],
    correctAnswer: 'Allegra',
    explanation: 'Allegra (Fexofenadine by Sanofi India) is a non-sedating H1 blocker for allergic rhinitis.',
    category: 'Respiratory'
  },
  {
    id: 'hard-43',
    question: 'Which Decongestant is associated with rebound congestion with prolonged use?',
    options: ['Oxymetazoline', 'Phenylephrine', 'Pseudoephedrine', 'Ephedrine'],
    correctAnswer: 'Oxymetazoline',
    explanation: 'Oxymetazoline (Nasivion by Merck India) causes rhinitis medicamentosa with prolonged nasal use.',
    category: 'Respiratory'
  },
  {
    id: 'hard-44',
    question: 'Which Indian Haematinic requires co-administration with vitamin C for better absorption?',
    options: ['Livogen', 'Ferronia', 'Becozinc', 'Shelcal'],
    correctAnswer: 'Livogen',
    explanation: 'Livogen (Ferrous Fumarate by Merck India) absorption is enhanced by vitamin C, reducing Fe2+ to Fe3+.',
    category: 'Gastrointestinal'
  },
  {
    id: 'hard-45',
    question: 'Which Vitamin supplement is associated with hyperuricemia in high doses?',
    options: ['Vitamin C', 'Vitamin B12', 'Vitamin D', 'Vitamin E'],
    correctAnswer: 'Vitamin C',
    explanation: 'Vitamin C (in Becozinc by Dr. Reddy\'s) can increase uric acid levels, risking gout in high doses.',
    category: 'Gastrointestinal'
  },
  {
    id: 'hard-46',
    question: 'Which Indian Mineral supplement is contraindicated in hyperparathyroidism?',
    options: ['Shelcal', 'Calcirol', 'Zevity', 'Oxivit'],
    correctAnswer: 'Shelcal',
    explanation: 'Shelcal (Calcium Carbonate by Dr. Reddy\'s) can exacerbate hypercalcemia in hyperparathyroidism.',
    category: 'Gastrointestinal'
  },
  {
    id: 'hard-47',
    question: 'Which Antioxidant is associated with increased bleeding risk when combined with warfarin?',
    options: ['Lycopene', 'Vitamin E', 'Coenzyme Q10', 'Selenium'],
    correctAnswer: 'Vitamin E',
    explanation: 'Vitamin E (in Oxivit by Sun Pharma) potentiates warfarin\'s anticoagulant effect, increasing bleeding risk.',
    category: 'Gastrointestinal'
  },
  {
    id: 'hard-48',
    question: 'Which Indian 5-HT3 Receptor Antagonist is used for radiotherapy-induced nausea?',
    options: ['Granicip', 'Emigo', 'Domstal', 'Aprecap'],
    correctAnswer: 'Granicip',
    explanation: 'Granicip (Granisetron by Cipla) is effective for radiotherapy-induced nausea due to its long half-life.',
    category: 'Gastrointestinal'
  },
  {
    id: 'hard-49',
    question: 'Which Dopamine Antagonist antiemetic is associated with extrapyramidal symptoms?',
    options: ['Metoclopramide', 'Domperidone', 'Ondansetron', 'Aprepitant'],
    correctAnswer: 'Metoclopramide',
    explanation: 'Metoclopramide (Reglan by Cipla) crosses the blood-brain barrier, causing extrapyramidal symptoms like dystonia.',
    category: 'Gastrointestinal'
  },
  {
    id: 'hard-50',
    question: 'Which Indian Topical Corticosteroid is classified as super-potent?',
    options: ['Tenovate', 'Betnovate', 'Elovera', 'Flutivate'],
    correctAnswer: 'Tenovate',
    explanation: 'Tenovate (Clobetasol by GSK India) is a super-potent corticosteroid for severe dermatoses.',
    category: 'Dermatological'
  }
].map(q => {
  const { shuffledOptions, newCorrectAnswer } = shuffleOptions(q.options, q.correctAnswer);
  return { ...q, options: shuffledOptions, correctAnswer: newCorrectAnswer };
});

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
