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
  },
  {
    id: 'easy-41',
    question: 'Which drug class is used to treat COPD by reducing airway inflammation?',
    options: ['Beta-2 Agonists', 'Corticosteroids', 'Antihistamines', 'Leukotriene Inhibitors'],
    correctAnswer: 'Corticosteroids',
    explanation: 'Corticosteroids, like Budesonide, reduce airway inflammation in COPD and asthma.',
    category: 'Respiratory'
  },
  {
    id: 'easy-42',
    question: 'What is the primary use of Methotrexate?',
    options: ['Treat bacterial infections', 'Treat rheumatoid arthritis', 'Treat hypertension', 'Treat diabetes'],
    correctAnswer: 'Treat rheumatoid arthritis',
    explanation: 'Methotrexate, a DMARD, is used for rheumatoid arthritis by inhibiting folate metabolism and immune activity.',
    category: 'Musculoskeletal'
  },
  {
    id: 'easy-43',
    question: 'Which drug class treats infections by inhibiting viral DNA polymerase?',
    options: ['Antibacterials', 'Antifungals', 'Antivirals', 'Antiparasitics'],
    correctAnswer: 'Antivirals',
    explanation: 'Antivirals, like Acyclovir, inhibit viral DNA polymerase to treat infections like herpes.',
    category: 'Antiviral'
  },
  {
    id: 'easy-44',
    question: 'What is the mechanism of action of Diuretics like Furosemide?',
    options: ['Inhibit sodium reabsorption', 'Block calcium channels', 'Inhibit angiotensin conversion', 'Block beta receptors'],
    correctAnswer: 'Inhibit sodium reabsorption',
    explanation: 'Furosemide, a loop diuretic, inhibits sodium reabsorption in the loop of Henle, increasing urine output.',
    category: 'Cardiovascular'
  },
  {
    id: 'easy-45',
    question: 'Which drug class is used to treat pain by binding to opioid receptors?',
    options: ['NSAIDs', 'Opioids', 'Paracetamol', 'Corticosteroids'],
    correctAnswer: 'Opioids',
    explanation: 'Opioids, like Morphine, bind to opioid receptors to relieve severe pain.',
    category: 'Analgesic'
  },
  {
    id: 'easy-46',
    question: 'What is the primary use of Cetirizine?',
    options: ['Treat allergies', 'Treat hypertension', 'Treat diabetes', 'Treat asthma'],
    correctAnswer: 'Treat allergies',
    explanation: 'Cetirizine, an Antihistamine, treats allergic symptoms like sneezing and itching by blocking H1 receptors.',
    category: 'Immunology'
  },
  {
    id: 'easy-47',
    question: 'Which drug class treats bacterial infections by disrupting DNA replication?',
    options: ['Penicillins', 'Macrolides', 'Fluoroquinolones', 'Tetracyclines'],
    correctAnswer: 'Fluoroquinolones',
    explanation: 'Fluoroquinolones, like Levofloxacin, inhibit DNA gyrase, disrupting bacterial DNA replication.',
    category: 'Antimicrobial'
  },
  {
    id: 'easy-48',
    question: 'What is the mechanism of action of Corticosteroids?',
    options: ['Inhibit inflammation', 'Inhibit protein synthesis', 'Inhibit DNA replication', 'Inhibit cell wall synthesis'],
    correctAnswer: 'Inhibit inflammation',
    explanation: 'Corticosteroids, like Prednisolone, inhibit inflammatory pathways to treat conditions like arthritis and allergic reactions.',
    category: 'Immunology'
  },
  {
    id: 'easy-49',
    question: 'Which drug class is used to treat BPH by relaxing prostate smooth muscle?',
    options: ['Alpha-1 Blockers', 'Beta Blockers', 'Diuretics', 'ACE Inhibitors'],
    correctAnswer: 'Alpha-1 Blockers',
    explanation: 'Alpha-1 Blockers, like Tamsulosin, relax prostate and bladder neck muscles to improve urine flow in BPH.',
    category: 'Urology'
  },
  {
    id: 'easy-50',
    question: 'What is the primary use of Omeprazole?',
    options: ['Treat hypertension', 'Treat acid reflux', 'Treat diabetes', 'Treat asthma'],
    correctAnswer: 'Treat acid reflux',
    explanation: 'Omeprazole, a Proton Pump Inhibitor, reduces gastric acid to treat acid reflux and ulcers.',
    category: 'Gastrointestinal'
  },
  {
    id: 'easy-51',
    question: 'Which drug class treats infections by inhibiting ergosterol synthesis?',
    options: ['Antibacterials', 'Antifungals', 'Antivirals', 'Antiparasitics'],
    correctAnswer: 'Antifungals',
    explanation: 'Antifungals, like Ketoconazole, inhibit ergosterol synthesis, disrupting fungal cell membranes.',
    category: 'Antimicrobial'
  },
  {
    id: 'easy-52',
    question: 'What is the mechanism of action of Sulfonylureas?',
    options: ['Increase insulin release', 'Increase insulin sensitivity', 'Reduce glucose production', 'Inhibit glucose absorption'],
    correctAnswer: 'Increase insulin release',
    explanation: 'Sulfonylureas, like Glimepiride, stimulate pancreatic beta cells to release insulin in type 2 diabetes.',
    category: 'Endocrine'
  },
  {
    id: 'easy-53',
    question: 'Which drug class is used to treat angina by dilating blood vessels?',
    options: ['Beta Blockers', 'Nitrates', 'ACE Inhibitors', 'Diuretics'],
    correctAnswer: 'Nitrates',
    explanation: 'Nitrates, like Nitroglycerin, dilate blood vessels to relieve angina by improving blood flow to the heart.',
    category: 'Cardiovascular'
  },
  {
    id: 'easy-54',
    question: 'What is the primary use of Valproate?',
    options: ['Treat hypertension', 'Treat epilepsy', 'Treat diabetes', 'Treat depression'],
    correctAnswer: 'Treat epilepsy',
    explanation: 'Valproate, an Antiepileptic, stabilizes neuronal membranes to prevent seizures.',
    category: 'Central Nervous System'
  },
  {
    id: 'easy-55',
    question: 'Which drug class treats infections by targeting protozoa?',
    options: ['Antibacterials', 'Antifungals', 'Antiprotozoals', 'Antivirals'],
    correctAnswer: 'Antiprotozoals',
    explanation: 'Antiprotozoals, like Metronidazole, target protozoal infections such as amoebiasis.',
    category: 'Antiparasitic'
  },
  {
    id: 'easy-56',
    question: 'What is the mechanism of action of NSAIDs like Ibuprofen?',
    options: ['Inhibit COX enzymes', 'Inhibit protein synthesis', 'Inhibit DNA replication', 'Inhibit cell wall synthesis'],
    correctAnswer: 'Inhibit COX enzymes',
    explanation: 'NSAIDs inhibit cyclooxygenase (COX) enzymes, reducing prostaglandin synthesis to relieve pain and inflammation.',
    category: 'Analgesic'
  },
  {
    id: 'easy-57',
    question: 'Which drug class is used to treat hypothyroidism by replacing thyroid hormone?',
    options: ['Thyroid Hormones', 'Corticosteroids', 'Insulin', 'Antihistamines'],
    correctAnswer: 'Thyroid Hormones',
    explanation: 'Thyroid Hormones, like Levothyroxine, replace deficient thyroid hormone in hypothyroidism.',
    category: 'Endocrine'
  },
  {
    id: 'easy-58',
    question: 'What is the primary use of Ranitidine?',
    options: ['Treat hypertension', 'Treat acid reflux', 'Treat diabetes', 'Treat asthma'],
    correctAnswer: 'Treat acid reflux',
    explanation: 'Ranitidine, an H2 Receptor Antagonist, reduces gastric acid secretion to treat acid reflux and ulcers.',
    category: 'Gastrointestinal'
  },
  {
    id: 'easy-59',
    question: 'Which drug class treats asthma by blocking leukotriene receptors?',
    options: ['Beta-2 Agonists', 'Corticosteroids', 'Leukotriene Inhibitors', 'Antihistamines'],
    correctAnswer: 'Leukotriene Inhibitors',
    explanation: 'Leukotriene Inhibitors, like Montelukast, block leukotriene receptors to reduce airway inflammation in asthma.',
    category: 'Respiratory'
  },
  {
    id: 'easy-60',
    question: 'What is the mechanism of action of Aminoglycosides?',
    options: ['Inhibit cell wall synthesis', 'Inhibit protein synthesis', 'Disrupt DNA replication', 'Inhibit folate synthesis'],
    correctAnswer: 'Inhibit protein synthesis',
    explanation: 'Aminoglycosides, like Gentamicin, bind to the 30S ribosomal subunit, inhibiting bacterial protein synthesis.',
    category: 'Antimicrobial'
  },
  {
    id: 'easy-61',
    question: 'Which drug class is used to treat depression by inhibiting monoamine oxidase?',
    options: ['SSRIs', 'MAO Inhibitors', 'Antipsychotics', 'Benzodiazepines'],
    correctAnswer: 'MAO Inhibitors',
    explanation: 'MAO Inhibitors, like Phenelzine, increase monoamine levels by inhibiting their breakdown, treating depression.',
    category: 'Central Nervous System'
  },
  {
    id: 'easy-62',
    question: 'What is the primary use of Artesunate?',
    options: ['Treat bacterial infections', 'Treat malaria', 'Treat fungal infections', 'Treat viral infections'],
    correctAnswer: 'Treat malaria',
    explanation: 'Artesunate, an Antimalarial, treats severe malaria by killing Plasmodium parasites.',
    category: 'Antiparasitic'
  },
  {
    id: 'easy-63',
    question: 'Which drug class treats heart rhythm disorders by blocking sodium channels?',
    options: ['Beta Blockers', 'Antiarrhythmics', 'Diuretics', 'ACE Inhibitors'],
    correctAnswer: 'Antiarrhythmics',
    explanation: 'Antiarrhythmics, like Lidocaine, block sodium channels to stabilize cardiac rhythms.',
    category: 'Cardiovascular'
  },
  {
    id: 'easy-64',
    question: 'What is the mechanism of action of Antacids like Calcium Carbonate?',
    options: ['Neutralize stomach acid', 'Inhibit acid secretion', 'Block histamine receptors', 'Inhibit proton pump'],
    correctAnswer: 'Neutralize stomach acid',
    explanation: 'Calcium Carbonate neutralizes gastric acid to relieve heartburn and indigestion.',
    category: 'Gastrointestinal'
  },
  {
    id: 'easy-65',
    question: 'Which drug class is used to treat type 2 diabetes by reducing glucose production?',
    options: ['Sulfonylureas', 'Biguanides', 'Thiazolidinediones', 'Insulin'],
    correctAnswer: 'Biguanides',
    explanation: 'Biguanides, like Metformin, reduce hepatic glucose production to manage type 2 diabetes.',
    category: 'Endocrine'
  },
  {
    id: 'easy-66',
    question: 'What is the primary use of Prednisolone?',
    options: ['Treat hypertension', 'Treat inflammation', 'Treat diabetes', 'Treat asthma'],
    correctAnswer: 'Treat inflammation',
    explanation: 'Prednisolone, a Corticosteroid, reduces inflammation in conditions like arthritis and allergic reactions.',
    category: 'Immunology'
  },
  {
    id: 'easy-67',
    question: 'Which drug class treats bacterial infections by binding to the 50S ribosomal subunit?',
    options: ['Penicillins', 'Macrolides', 'Fluoroquinolones', 'Tetracyclines'],
    correctAnswer: 'Macrolides',
    explanation: 'Macrolides, like Erythromycin, inhibit protein synthesis by binding to the 50S ribosomal subunit.',
    category: 'Antimicrobial'
  },
  {
    id: 'easy-68',
    question: 'What is the mechanism of action of Antidepressants like Sertraline?',
    options: ['Inhibit serotonin reuptake', 'Inhibit dopamine synthesis', 'Inhibit GABA activity', 'Inhibit acetylcholine'],
    correctAnswer: 'Inhibit serotonin reuptake',
    explanation: 'Sertraline, an SSRI, inhibits serotonin reuptake to increase synaptic serotonin levels.',
    category: 'Central Nervous System'
  },
  {
    id: 'easy-69',
    question: 'Which drug class is used to treat edema by increasing urine output?',
    options: ['Beta Blockers', 'Diuretics', 'ACE Inhibitors', 'Calcium Channel Blockers'],
    correctAnswer: 'Diuretics',
    explanation: 'Diuretics, like Furosemide, increase urine output to reduce fluid buildup in edema.',
    category: 'Cardiovascular'
  },
  {
    id: 'easy-70',
    question: 'What is the primary use of Itraconazole?',
    options: ['Treat bacterial infections', 'Treat fungal infections', 'Treat viral infections', 'Treat parasitic infections'],
    correctAnswer: 'Treat fungal infections',
    explanation: 'Itraconazole, an antifungal, treats infections like aspergillosis by inhibiting ergosterol synthesis.',
    category: 'Antimicrobial'
  },
  {
    id: 'easy-71',
    question: 'Which drug class treats seizures by enhancing GABA activity?',
    options: ['Antidepressants', 'Antiepileptics', 'Antipsychotics', 'Anxiolytics'],
    correctAnswer: 'Antiepileptics',
    explanation: 'Antiepileptics, like Lorazepam, enhance GABA activity to prevent seizures.',
    category: 'Central Nervous System'
  },
  {
    id: 'easy-72',
    question: 'What is the mechanism of action of Antiprotozoals like Tinidazole?',
    options: ['Inhibit DNA synthesis', 'Inhibit protein synthesis', 'Inhibit cell wall synthesis', 'Inhibit folate synthesis'],
    correctAnswer: 'Inhibit DNA synthesis',
    explanation: 'Tinidazole damages protozoal DNA, inhibiting replication in infections like giardiasis.',
    category: 'Antiparasitic'
  },
  {
    id: 'easy-73',
    question: 'Which drug class is used to treat hypertension by blocking calcium channels?',
    options: ['Beta Blockers', 'ACE Inhibitors', 'Calcium Channel Blockers', 'Diuretics'],
    correctAnswer: 'Calcium Channel Blockers',
    explanation: 'Calcium Channel Blockers, like Amlodipine, reduce vascular resistance to lower blood pressure.',
    category: 'Cardiovascular'
  },
  {
    id: 'easy-74',
    question: 'What is the primary use of Bisacodyl?',
    options: ['Treat hypertension', 'Treat constipation', 'Treat diabetes', 'Treat asthma'],
    correctAnswer: 'Treat constipation',
    explanation: 'Bisacodyl, a Laxative, stimulates bowel motility to relieve constipation.',
    category: 'Gastrointestinal'
  },
  {
    id: 'easy-75',
    question: 'Which drug class treats infections by inhibiting viral reverse transcriptase?',
    options: ['Antibacterials', 'Antifungals', 'Antivirals', 'Antiparasitics'],
    correctAnswer: 'Antivirals',
    explanation: 'Antivirals, like Zidovudine, inhibit reverse transcriptase to treat HIV infections.',
    category: 'Antiviral'
  },
  {
    id: 'easy-76',
    question: 'What is the mechanism of action of Antihistamines like Loratadine?',
    options: ['Block histamine receptors', 'Inhibit inflammation', 'Inhibit protein synthesis', 'Inhibit DNA replication'],
    correctAnswer: 'Block histamine receptors',
    explanation: 'Loratadine blocks H1 receptors to relieve allergic symptoms like itching and sneezing.',
    category: 'Immunology'
  },
  {
    id: 'easy-77',
    question: 'Which drug class is used to treat rheumatoid arthritis by inhibiting immune responses?',
    options: ['NSAIDs', 'DMARDs', 'Corticosteroids', 'Biologics'],
    correctAnswer: 'DMARDs',
    explanation: 'DMARDs, like Methotrexate, inhibit immune responses to slow rheumatoid arthritis progression.',
    category: 'Musculoskeletal'
  },
  {
    id: 'easy-78',
    question: 'What is the primary use of Enalapril?',
    options: ['Treat hypertension', 'Treat diabetes', 'Treat asthma', 'Treat depression'],
    correctAnswer: 'Treat hypertension',
    explanation: 'Enalapril, an ACE Inhibitor, reduces blood pressure by inhibiting angiotensin II formation.',
    category: 'Cardiovascular'
  },
  {
    id: 'easy-79',
    question: 'Which drug class treats asthma by relaxing bronchial smooth muscle?',
    options: ['Corticosteroids', 'Beta-2 Agonists', 'Antihistamines', 'Leukotriene Inhibitors'],
    correctAnswer: 'Beta-2 Agonists',
    explanation: 'Beta-2 Agonists, like Albuterol, relax bronchial muscles to relieve asthma symptoms.',
    category: 'Respiratory'
  },
  {
    id: 'easy-80',
    question: 'What is the mechanism of action of Sulfonamides?',
    options: ['Inhibit folate synthesis', 'Inhibit cell wall synthesis', 'Inhibit protein synthesis', 'Disrupt DNA replication'],
    correctAnswer: 'Inhibit folate synthesis',
    explanation: 'Sulfonamides, like Sulfadiazine, inhibit bacterial folate synthesis, essential for DNA production.',
    category: 'Antimicrobial'
  },
  {
    id: 'easy-81',
    question: 'Which drug class is used to treat nausea by blocking dopamine receptors?',
    options: ['Antiemetics', 'Proton Pump Inhibitors', 'Antacids', 'Laxatives'],
    correctAnswer: 'Antiemetics',
    explanation: 'Antiemetics, like Metoclopramide, block dopamine receptors to relieve nausea and vomiting.',
    category: 'Gastrointestinal'
  },
  {
    id: 'easy-82',
    question: 'What is the primary use of Alendronate?',
    options: ['Treat hypertension', 'Treat osteoporosis', 'Treat diabetes', 'Treat asthma'],
    correctAnswer: 'Treat osteoporosis',
    explanation: 'Alendronate, a Bisphosphonate, inhibits bone resorption to treat osteoporosis.',
    category: 'Musculoskeletal'
  },
  {
    id: 'easy-83',
    question: 'Which drug class treats infections by inhibiting fungal cytochrome P450 enzymes?',
    options: ['Antibacterials', 'Antifungals', 'Antivirals', 'Antiparasitics'],
    correctAnswer: 'Antifungals',
    explanation: 'Antifungals, like Fluconazole, inhibit cytochrome P450 enzymes to disrupt fungal ergosterol synthesis.',
    category: 'Antimicrobial'
  },
  {
    id: 'easy-84',
    question: 'What is the mechanism of action of Beta-2 Agonists like Salbutamol?',
    options: ['Relax bronchial muscles', 'Inhibit inflammation', 'Inhibit histamine release', 'Inhibit leukotriene synthesis'],
    correctAnswer: 'Relax bronchial muscles',
    explanation: 'Salbutamol activates beta-2 receptors to relax bronchial smooth muscle, relieving asthma symptoms.',
    category: 'Respiratory'
  },
  {
    id: 'easy-85',
    question: 'Which drug class is used to treat type 2 diabetes by stimulating insulin release?',
    options: ['Biguanides', 'Sulfonylureas', 'Thiazolidinediones', 'Insulin'],
    correctAnswer: 'Sulfonylureas',
    explanation: 'Sulfonylureas, like Glibenclamide, stimulate insulin release from pancreatic beta cells.',
    category: 'Endocrine'
  },
  {
    id: 'easy-86',
    question: 'What is the primary use of Nitroglycerin?',
    options: ['Treat angina', 'Treat hypertension', 'Treat diabetes', 'Treat asthma'],
    correctAnswer: 'Treat angina',
    explanation: 'Nitroglycerin, a Nitrate, dilates blood vessels to relieve angina by improving cardiac blood flow.',
    category: 'Cardiovascular'
  },
  {
    id: 'easy-87',
    question: 'Which drug class treats infections by binding to the 30S ribosomal subunit?',
    options: ['Penicillins', 'Macrolides', 'Tetracyclines', 'Fluoroquinolones'],
    correctAnswer: 'Tetracyclines',
    explanation: 'Tetracyclines, like Doxycycline, inhibit protein synthesis by binding to the 30S ribosomal subunit.',
    category: 'Antimicrobial'
  },
  {
    id: 'easy-88',
    question: 'What is the mechanism of action of Antipsychotics like Olanzapine?',
    options: ['Block dopamine receptors', 'Inhibit serotonin reuptake', 'Enhance GABA activity', 'Inhibit acetylcholine'],
    correctAnswer: 'Block dopamine receptors',
    explanation: 'Olanzapine blocks dopamine D2 receptors to manage schizophrenia and bipolar disorder symptoms.',
    category: 'Central Nervous System'
  },
  {
    id: 'easy-89',
    question: 'Which drug class is used to treat heart failure by reducing fluid overload?',
    options: ['Beta Blockers', 'ACE Inhibitors', 'Diuretics', 'Calcium Channel Blockers'],
    correctAnswer: 'Diuretics',
    explanation: 'Diuretics, like Spironolactone, reduce fluid overload in heart failure by increasing urine output.',
    category: 'Cardiovascular'
  },
  {
    id: 'easy-90',
    question: 'What is the primary use of Ketoconazole?',
    options: ['Treat bacterial infections', 'Treat fungal infections', 'Treat viral infections', 'Treat parasitic infections'],
    correctAnswer: 'Treat fungal infections',
    explanation: 'Ketoconazole, an antifungal, treats infections like candidiasis by inhibiting ergosterol synthesis.',
    category: 'Antimicrobial'
  },
  {
    id: 'easy-91',
    question: 'Which drug class treats anxiety by inhibiting serotonin and norepinephrine reuptake?',
    options: ['SSRIs', 'SNRIs', 'Benzodiazepines', 'Antipsychotics'],
    correctAnswer: 'SNRIs',
    explanation: 'SNRIs, like Venlafaxine, inhibit serotonin and norepinephrine reuptake to treat anxiety and depression.',
    category: 'Central Nervous System'
  },
  {
    id: 'easy-92',
    question: 'What is the mechanism of action of Antimalarials like Artemisinin?',
    options: ['Produce free radicals', 'Inhibit protein synthesis', 'Inhibit cell wall synthesis', 'Inhibit DNA replication'],
    correctAnswer: 'Produce free radicals',
    explanation: 'Artemisinin produces free radicals that damage malaria parasites, killing them.',
    category: 'Antiparasitic'
  },
  {
    id: 'easy-93',
    question: 'Which drug class is used to treat hypertension by inhibiting angiotensin II receptors?',
    options: ['ARBs', 'Beta Blockers', 'Diuretics', 'Calcium Channel Blockers'],
    correctAnswer: 'ARBs',
    explanation: 'ARBs, like Losartan, block angiotensin II receptors to lower blood pressure.',
    category: 'Cardiovascular'
  },
  {
    id: 'easy-94',
    question: 'What is the primary use of Montelukast?',
    options: ['Treat hypertension', 'Treat asthma', 'Treat diabetes', 'Treat depression'],
    correctAnswer: 'Treat asthma',
    explanation: 'Montelukast, a Leukotriene Inhibitor, reduces airway inflammation in asthma.',
    category: 'Respiratory'
  },
  {
    id: 'easy-95',
    question: 'Which drug class treats infections by inhibiting bacterial topoisomerase IV?',
    options: ['Penicillins', 'Macrolides', 'Fluoroquinolones', 'Tetracyclines'],
    correctAnswer: 'Fluoroquinolones',
    explanation: 'Fluoroquinolones, like Moxifloxacin, inhibit topoisomerase IV and DNA gyrase, disrupting bacterial DNA replication.',
    category: 'Antimicrobial'
  },
  {
    id: 'easy-96',
    question: 'What is the mechanism of action of Corticosteroids like Hydrocortisone?',
    options: ['Inhibit inflammatory pathways', 'Inhibit protein synthesis', 'Inhibit DNA replication', 'Inhibit cell wall synthesis'],
    correctAnswer: 'Inhibit inflammatory pathways',
    explanation: 'Hydrocortisone inhibits inflammatory pathways to treat conditions like eczema and arthritis.',
    category: 'Immunology'
  },
  {
    id: 'easy-97',
    question: 'Which drug class is used to treat BPH by inhibiting 5-alpha reductase?',
    options: ['Alpha-1 Blockers', '5-Alpha Reductase Inhibitors', 'Beta Blockers', 'Diuretics'],
    correctAnswer: '5-Alpha Reductase Inhibitors',
    explanation: '5-Alpha Reductase Inhibitors, like Finasteride, reduce prostate size in BPH by inhibiting testosterone conversion.',
    category: 'Urology'
  },
  {
    id: 'easy-98',
    question: 'What is the primary use of Pantoprazole?',
    options: ['Treat hypertension', 'Treat acid reflux', 'Treat diabetes', 'Treat asthma'],
    correctAnswer: 'Treat acid reflux',
    explanation: 'Pantoprazole, a Proton Pump Inhibitor, reduces gastric acid to treat acid reflux and ulcers.',
    category: 'Gastrointestinal'
  },
  {
    id: 'easy-99',
    question: 'Which drug class treats infections by targeting viral protease enzymes?',
    options: ['Antibacterials', 'Antifungals', 'Antivirals', 'Antiparasitics'],
    correctAnswer: 'Antivirals',
    explanation: 'Antivirals, like Ritonavir, inhibit viral protease enzymes to treat infections like HIV.',
    category: 'Antiviral'
  },
  {
    id: 'easy-100',
    question: 'What is the mechanism of action of Antihistamines like Diphenhydramine?',
    options: ['Block H1 receptors', 'Inhibit inflammation', 'Inhibit protein synthesis', 'Inhibit DNA replication'],
    correctAnswer: 'Block H1 receptors',
    explanation: 'Diphenhydramine blocks H1 receptors to relieve allergic symptoms and promote sedation.',
    category: 'Immunology'
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
