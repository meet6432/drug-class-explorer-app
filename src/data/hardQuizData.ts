import { QuizQuestion } from './quizData';

export const hardQuizQuestions: QuizQuestion[] = [
  {
    id: 'hard-1',
    question: 'Which adverse effect is most commonly associated with Mox (Amoxicillin by Sun Pharma) in pediatric patients?',
    options: ['Hepatotoxicity', 'Diarrhea', 'Nephrotoxicity', 'Ototoxicity'],
    correctAnswer: 'Diarrhea',
    explanation: 'Mox (Amoxicillin) commonly causes diarrhea in pediatric patients due to gut microbiota disruption. Hepatotoxicity, nephrotoxicity, and ototoxicity are rare with Amoxicillin.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-2',
    question: 'What is the primary drug interaction concern with Terbicip (Terbinafine by Cipla) when co-administered with SSRIs?',
    options: ['Increased SSRI metabolism', 'QT prolongation', 'Decreased Terbinafine efficacy', 'Serotonin syndrome'],
    correctAnswer: 'Increased SSRI metabolism',
    explanation: 'Terbicip (Terbinafine) inhibits CYP2D6, increasing SSRI levels and risk of toxicity, not metabolism. QT prolongation, efficacy loss, or serotonin syndrome are less likely.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-3',
    question: 'In a patient with renal impairment, how should Zovirax (Acyclovir by GSK India) dosing be adjusted for herpes zoster?',
    options: ['Reduce dose by 50% if CrCl <50 mL/min', 'No adjustment needed', 'Increase dose by 25%', 'Discontinue Acyclovir'],
    correctAnswer: 'Reduce dose by 50% if CrCl <50 mL/min',
    explanation: 'Zovirax (Acyclovir) requires dose reduction (e.g., 50% if CrCl <50 mL/min) to prevent accumulation and toxicity in renal impairment.',
    category: 'Antiviral'
  },
  {
    id: 'hard-4',
    question: 'Which Indian brand of Albendazole is contraindicated in pregnancy due to teratogenic risks?',
    options: ['Zentel', 'Bandy', 'Wormin', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Zentel (GSK), Bandy (Mankind), and Wormin (Cadila) contain Albendazole, contraindicated in pregnancy due to teratogenic risks in animal studies.',
    category: 'Antiparasitic'
  },
  {
    id: 'hard-5',
    question: 'What is the mechanism of resistance to Taxol (Paclitaxel by Cipla) in breast cancer cells?',
    options: ['P-glycoprotein efflux', 'CYP3A4 induction', 'BCR-ABL mutation', 'EGFR overexpression'],
    correctAnswer: 'P-glycoprotein efflux',
    explanation: 'Taxol resistance in breast cancer is often due to P-glycoprotein efflux, reducing intracellular drug levels. Other mechanisms are not primary for Paclitaxel.',
    category: 'Antineoplastic'
  },
  {
    id: 'hard-6',
    question: 'Which drug interaction increases the risk of bradycardia with Tenormin (Atenolol by Abbott India)?',
    options: ['Amlodipine', 'Verapamil', 'Metformin', 'Omeprazole'],
    correctAnswer: 'Verapamil',
    explanation: 'Tenormin (Atenolol) with Verapamil (a calcium channel blocker) increases bradycardia risk due to additive effects on heart rate. Others have minimal interaction.',
    category: 'Cardiovascular'
  },
  {
    id: 'hard-7',
    question: 'What is the black box warning for Rosuvas (Atorvastatin by Sun Pharma)?',
    options: ['Myopathy and rhabdomyolysis', 'Severe bleeding', 'QT prolongation', 'Seizure risk'],
    correctAnswer: 'Myopathy and rhabdomyolysis',
    explanation: 'Rosuvas (Atorvastatin) carries a black box warning for myopathy and rhabdomyolysis, especially at high doses or with certain drugs like fibrates.',
    category: 'Cardiovascular'
  },
  {
    id: 'hard-8',
    question: 'Which enzyme is inhibited by Zoloft (Sertraline by Pfizer India), increasing the risk of drug interactions?',
    options: ['CYP3A4', 'CYP2D6', 'CYP1A2', 'CYP2C9'],
    correctAnswer: 'CYP2D6',
    explanation: 'Zoloft (Sertraline) inhibits CYP2D6, increasing levels of drugs like antipsychotics metabolized by this enzyme. Other CYPs are less affected.',
    category: 'Central Nervous System'
  },
  {
    id: 'hard-9',
    question: 'What is the risk of combining Omez (Omeprazole by Dr. Reddy\'s) with Clopidogrel?',
    options: ['Reduced Clopidogrel efficacy', 'Increased bleeding risk', 'QT prolongation', 'Hepatotoxicity'],
    correctAnswer: 'Reduced Clopidogrel efficacy',
    explanation: 'Omez (Omeprazole) inhibits CYP2C19, reducing Clopidogrel\'s activation and antiplatelet efficacy. Other risks are not primary concerns.',
    category: 'Gastrointestinal'
  },
  {
    id: 'hard-10',
    question: 'Which monitoring parameter is critical for Thyronorm (Levothyroxine by Abbott India) therapy?',
    options: ['TSH levels', 'Blood glucose', 'Liver enzymes', 'Platelet count'],
    correctAnswer: 'TSH levels',
    explanation: 'TSH levels are monitored to adjust Thyronorm (Levothyroxine) dosing in hypothyroidism. Other parameters are not primary.',
    category: 'Endocrine'
  },
  {
    id: 'hard-11',
    question: 'What is the risk of hypoglycemia when Glycomet (Metformin by USV) is combined with insulin?',
    options: ['No increased risk', 'Moderate increased risk', 'High increased risk', 'Hypoglycemia is prevented'],
    correctAnswer: 'No increased risk',
    explanation: 'Glycomet (Metformin) does not significantly increase hypoglycemia risk with insulin, as it does not stimulate insulin release.',
    category: 'Endocrine'
  },
  {
    id: 'hard-12',
    question: 'Which adverse effect is associated with Zifi (Cefixime by FDC Ltd.) in prolonged use?',
    options: ['Clostridium difficile colitis', 'Seizures', 'Tendon rupture', 'Agranulocytosis'],
    correctAnswer: 'Clostridium difficile colitis',
    explanation: 'Zifi (Cefixime) can cause Clostridium difficile colitis with prolonged use due to gut microbiota disruption. Other effects are less common.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-13',
    question: 'What is the primary resistance mechanism to Lariago (Chloroquine by Ipca) in malaria?',
    options: ['PfCRT mutation', 'Efflux pump', 'CYP2D6 inhibition', 'Beta-lactamase production'],
    correctAnswer: 'PfCRT mutation',
    explanation: 'Lariago (Chloroquine) resistance in Plasmodium falciparum is primarily due to PfCRT mutations, altering drug accumulation. Other mechanisms are irrelevant.',
    category: 'Antiparasitic'
  },
  {
    id: 'hard-14',
    question: 'Which electrolyte imbalance is a risk with Emeset (Ondansetron by Cipla) in high doses?',
    options: ['Hypokalemia', 'Hypernatremia', 'Hypocalcemia', 'Hypermagnesemia'],
    correctAnswer: 'Hypokalemia',
    explanation: 'Emeset (Ondansetron) at high doses can cause hypokalemia, especially in susceptible patients. Other imbalances are less likely.',
    category: 'Gastrointestinal'
  },
  {
    id: 'hard-15',
    question: 'What is the risk of combining Asthalin (Salbutamol by Cipla) with beta-blockers?',
    options: ['Reduced bronchodilation', 'Increased tachycardia', 'Hepatotoxicity', 'Nephrotoxicity'],
    correctAnswer: 'Reduced bronchodilation',
    explanation: 'Asthalin (Salbutamol) efficacy is reduced by beta-blockers, which antagonize beta-2 receptors, impairing bronchodilation.',
    category: 'Respiratory'
  },
  {
    id: 'hard-16',
    question: 'Which Indian brand of Azithromycin has a risk of QT prolongation in cardiac patients?',
    options: ['Azithral', 'Azee', 'Zithromax', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Azithral (Alembic), Azee (Cipla), and Zithromax (Pfizer) contain Azithromycin, which can prolong QT interval in cardiac patients.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-17',
    question: 'What is the risk of hepatotoxicity with Valparin (Valproate by Sanofi India) in children under 2 years?',
    options: ['High risk', 'Low risk', 'No risk', 'Moderate risk'],
    correctAnswer: 'High risk',
    explanation: 'Valparin (Valproate) has a high risk of hepatotoxicity in children under 2 years, especially with polytherapy or metabolic disorders.',
    category: 'Central Nervous System'
  },
  {
    id: 'hard-18',
    question: 'Which drug interaction increases the toxicity of Glycomet (Metformin by USV)?',
    options: ['Cimetidine', 'Aspirin', 'Atorvastatin', 'Losartan'],
    correctAnswer: 'Cimetidine',
    explanation: 'Cimetidine inhibits Metformin clearance, increasing the risk of lactic acidosis with Glycomet. Other drugs have minimal interaction.',
    category: 'Endocrine'
  },
  {
    id: 'hard-19',
    question: 'What is the primary adverse effect of Alcet (Cetirizine by Alembic) in elderly patients?',
    options: ['Sedation', 'Tachycardia', 'Hepatotoxicity', 'Nephrotoxicity'],
    correctAnswer: 'Sedation',
    explanation: 'Alcet (Cetirizine) causes sedation in elderly patients due to CNS penetration, which is more pronounced with age-related changes.',
    category: 'Immunology'
  },
  {
    id: 'hard-20',
    question: 'Which Indian brand of Ciprofloxacin is associated with tendon rupture risk?',
    options: ['Ciplox', 'Cifran', 'Zoxan', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Ciplox (Cipla), Cifran (Sun Pharma), and Zoxan (FDC) contain Ciprofloxacin, which carries a risk of tendon rupture, especially in the elderly.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-21',
    question: 'What is the risk of combining Envas (Enalapril by Cadila) with potassium-sparing diuretics?',
    options: ['Hyperkalemia', 'Hypokalemia', 'Hyponatremia', 'Hypernatremia'],
    correctAnswer: 'Hyperkalemia',
    explanation: 'Envas (Enalapril) with potassium-sparing diuretics (e.g., Spironolactone) increases the risk of hyperkalemia due to reduced potassium excretion.',
    category: 'Cardiovascular'
  },
  {
    id: 'hard-22',
    question: 'Which Indian brand of Albendazole requires monitoring for bone marrow suppression?',
    options: ['Zentel', 'Bandy', 'Wormin', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Zentel (GSK), Bandy (Mankind), and Wormin (Cadila) contain Albendazole, which can cause bone marrow suppression, requiring CBC monitoring.',
    category: 'Antiparasitic'
  },
  {
    id: 'hard-23',
    question: 'What is the primary drug interaction concern with Brufen (Ibuprofen by Abbott India)?',
    options: ['Increased bleeding with anticoagulants', 'QT prolongation', 'Seizure risk', 'Hepatotoxicity'],
    correctAnswer: 'Increased bleeding with anticoagulants',
    explanation: 'Brufen (Ibuprofen) increases bleeding risk with anticoagulants (e.g., Warfarin) due to platelet inhibition and GI irritation.',
    category: 'Analgesic'
  },
  {
    id: 'hard-24',
    question: 'Which adverse effect is associated with Gelusil (Aluminium Hydroxide by Pfizer India) in chronic use?',
    options: ['Constipation', 'Diarrhea', 'Tachycardia', 'Seizures'],
    correctAnswer: 'Constipation',
    explanation: 'Gelusil (Aluminium Hydroxide) causes constipation in chronic use due to its binding effect in the gut. Other effects are unlikely.',
    category: 'Gastrointestinal'
  },
  {
    id: 'hard-25',
    question: 'What is the risk of agranulocytosis with Sizodon (Risperidone by Sun Pharma)?',
    options: ['Rare but serious', 'Common and mild', 'No risk', 'Frequent and severe'],
    correctAnswer: 'Rare but serious',
    explanation: 'Sizodon (Risperidone) carries a rare but serious risk of agranulocytosis, requiring monitoring for fever or infection signs.',
    category: 'Central Nervous System'
  },
  {
    id: 'hard-26',
    question: 'Which Indian brand of Salbutamol is contraindicated in patients with uncontrolled hyperthyroidism?',
    options: ['Asthalin', 'Ventorlin', 'Salbair', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Asthalin (Cipla), Ventorlin (GSK), and Salbair (Lupin) contain Salbutamol, contraindicated in uncontrolled hyperthyroidism due to tachycardia risk.',
    category: 'Respiratory'
  },
  {
    id: 'hard-27',
    question: 'What is the primary resistance mechanism to Septran (Sulfamethoxazole-Trimethoprim by GSK India)?',
    options: ['Altered folate pathway enzymes', 'Beta-lactamase production', 'Efflux pump', 'CYP3A4 induction'],
    correctAnswer: 'Altered folate pathway enzymes',
    explanation: 'Septran resistance is due to altered folate pathway enzymes (e.g., DHPS mutations) in bacteria, reducing drug binding.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-28',
    question: 'Which Indian brand of Tamoxifen is associated with endometrial cancer risk?',
    options: ['Tamodex', 'Nolvadex', 'Mamofen', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Tamodex (Zydus), Nolvadex (AstraZeneca), and Mamofen (Khandelwal) contain Tamoxifen, which increases endometrial cancer risk with long-term use.',
    category: 'Antineoplastic'
  },
  {
    id: 'hard-29',
    question: 'What is the risk of hypomagnesemia with Dulcolax (Bisacodyl by Boehringer Ingelheim India)?',
    options: ['Low risk', 'High risk', 'No risk', 'Moderate risk'],
    correctAnswer: 'Low risk',
    explanation: 'Dulcolax (Bisacodyl) has a low risk of hypomagnesemia, primarily with chronic overuse. Electrolyte monitoring is rarely needed.',
    category: 'Gastrointestinal'
  },
  {
    id: 'hard-30',
    question: 'Which Indian brand of Insulin Glargine requires monitoring for nocturnal hypoglycemia?',
    options: ['Lantus', 'Basalog', 'Glaritus', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Lantus (Sanofi), Basalog (Biocon), and Glaritus (Wockhardt) contain Insulin Glargine, which requires monitoring for nocturnal hypoglycemia.',
    category: 'Endocrine'
  },
  {
    id: 'hard-31',
    question: 'What is the risk of combining Crocin (Paracetamol by GSK India) with alcohol?',
    options: ['Hepatotoxicity', 'Nephrotoxicity', 'Tachycardia', 'Seizures'],
    correctAnswer: 'Hepatotoxicity',
    explanation: 'Crocin (Paracetamol) with alcohol increases hepatotoxicity risk due to enhanced liver metabolism and glutathione depletion.',
    category: 'Analgesic'
  },
  {
    id: 'hard-32',
    question: 'Which Indian brand of Oseltamivir is associated with neuropsychiatric adverse effects?',
    options: ['Tamiflu', 'Antiflu', 'Fluvir', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Tamiflu (Roche), Antiflu (Cipla), and Fluvir (Hetero) contain Oseltamivir, which can cause rare neuropsychiatric effects like confusion.',
    category: 'Antiviral'
  },
  {
    id: 'hard-33',
    question: 'What is the primary drug interaction concern with Aquazide (Hydrochlorothiazide by Sun Pharma)?',
    options: ['Hypokalemia with digoxin', 'Hyperkalemia with ACE inhibitors', 'QT prolongation', 'Hepatotoxicity'],
    correctAnswer: 'Hypokalemia with digoxin',
    explanation: 'Aquazide (Hydrochlorothiazide) causes hypokalemia, increasing digoxin toxicity risk. Other interactions are less significant.',
    category: 'Cardiovascular'
  },
  {
    id: 'hard-34',
    question: 'Which Indian brand of Fluconazole is contraindicated in patients with QT prolongation?',
    options: ['Forcan', 'Zocon', 'Fluka', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Forcan (Cipla), Zocon (FDC), and Fluka (Cipla) contain Fluconazole, contraindicated in QT prolongation due to arrhythmia risk.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-35',
    question: 'What is the risk of combining Calmpose (Diazepam by Ranbaxy) with opioids?',
    options: ['Respiratory depression', 'Tachycardia', 'Hepatotoxicity', 'Nephrotoxicity'],
    correctAnswer: 'Respiratory depression',
    explanation: 'Calmpose (Diazepam) with opioids increases the risk of respiratory depression due to additive CNS depressant effects.',
    category: 'Central Nervous System'
  },
  {
    id: 'hard-36',
    question: 'Which Indian brand of Doxycycline is associated with photosensitivity?',
    options: ['Doxylab', 'Minoz', 'Tetracyn', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Doxylab (Laborate), Minoz (Sun Pharma), and Tetracyn (Pfizer) contain Doxycycline, which causes photosensitivity in some patients.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-37',
    question: 'What is the primary adverse effect of Ostobon (Alendronate by Cipla) in long-term use?',
    options: ['Osteonecrosis of the jaw', 'Hepatotoxicity', 'Nephrotoxicity', 'Tachycardia'],
    correctAnswer: 'Osteonecrosis of the jaw',
    explanation: 'Ostobon (Alendronate) is associated with osteonecrosis of the jaw in long-term use, particularly with dental procedures.',
    category: 'Musculoskeletal'
  },
  {
    id: 'hard-38',
    question: 'Which Indian brand of Atorvastatin requires liver function monitoring?',
    options: ['Rosuvas', 'Atorlip', 'Lipikind', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Rosuvas (Sun Pharma), Atorlip (Cipla), and Lipikind (Mankind) contain Atorvastatin, requiring liver function monitoring due to hepatotoxicity risk.',
    category: 'Cardiovascular'
  },
  {
    id: 'hard-39',
    question: 'What is the risk of combining Zinetac (Ranitidine by GSK India) with warfarin?',
    options: ['Increased INR', 'Decreased INR', 'No interaction', 'QT prolongation'],
    correctAnswer: 'No interaction',
    explanation: 'Zinetac (Ranitidine) has minimal interaction with warfarin, unlike other H2 blockers like cimetidine, which increase INR.',
    category: 'Gastrointestinal'
  },
  {
    id: 'hard-40',
    question: 'Which Indian brand of Artemether-Lumefantrine is associated with QT prolongation risk?',
    options: ['Lumether', 'Coartem', 'Falcigo', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Lumether (Themis), Coartem (Novartis), and Falcigo (Zydus) contain Artemether-Lumefantrine, which can prolong QT interval.',
    category: 'Antiparasitic'
  },
  {
    id: 'hard-41',
    question: 'What is the primary drug interaction concern with Budecort (Budesonide by Cipla)?',
    options: ['Increased levels with CYP3A4 inhibitors', 'Decreased efficacy with beta-blockers', 'QT prolongation', 'Hepatotoxicity'],
    correctAnswer: 'Increased levels with CYP3A4 inhibitors',
    explanation: 'Budecort (Budesonide) levels increase with CYP3A4 inhibitors (e.g., ketoconazole), risking systemic corticosteroid effects.',
    category: 'Respiratory'
  },
  {
    id: 'hard-42',
    question: 'Which Indian brand of Methotrexate requires folate supplementation in rheumatoid arthritis?',
    options: ['Folitrax', 'Mexate', 'Imutrex', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Folitrax (Ipca), Mexate (Zydus), and Imutrex (Cipla) contain Methotrexate, requiring folate to reduce toxicity in rheumatoid arthritis.',
    category: 'Musculoskeletal'
  },
  {
    id: 'hard-43',
    question: 'What is the risk of combining Zidovir (Zidovudine by Cipla) with stavudine?',
    options: ['Antagonistic antiviral effect', 'Increased hepatotoxicity', 'QT prolongation', 'Nephrotoxicity'],
    correctAnswer: 'Antagonistic antiviral effect',
    explanation: 'Zidovir (Zidovudine) and stavudine have antagonistic antiviral effects due to competitive phosphorylation, reducing HIV treatment efficacy.',
    category: 'Antiviral'
  },
  {
    id: 'hard-44',
    question: 'Which Indian brand of Furosemide is associated with ototoxicity in high doses?',
    options: ['Lasix', 'Dytor', 'Frusenex', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Lasix (Sanofi), Dytor (Cipla), and Frusenex (Genix) contain Furosemide, which can cause ototoxicity at high IV doses.',
    category: 'Cardiovascular'
  },
  {
    id: 'hard-45',
    question: 'What is the primary adverse effect of Morcontin (Morphine by Modi-Mundipharma) in opioid-naive patients?',
    options: ['Respiratory depression', 'Tachycardia', 'Hepatotoxicity', 'Nephrotoxicity'],
    correctAnswer: 'Respiratory depression',
    explanation: 'Morcontin (Morphine) causes respiratory depression in opioid-naive patients, a serious risk requiring monitoring.',
    category: 'Analgesic'
  },
  {
    id: 'hard-46',
    question: 'Which Indian brand of Loratadine is associated with rare hepatotoxicity?',
    options: ['Alaspan', 'Lorfast', 'Lormeg', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Alaspan (Fulford), Lorfast (Cadila), and Lormeg (Alkem) contain Loratadine, with rare reports of hepatotoxicity.',
    category: 'Immunology'
  },
  {
    id: 'hard-47',
    question: 'What is the risk of combining Levoflox (Levofloxacin by Cipla) with NSAIDs?',
    options: ['Increased seizure risk', 'Hepatotoxicity', 'Nephrotoxicity', 'QT prolongation'],
    correctAnswer: 'Increased seizure risk',
    explanation: 'Levoflox (Levofloxacin) with NSAIDs increases seizure risk due to CNS stimulation. QT prolongation is a separate concern.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-48',
    question: 'Which Indian brand of Prednisolone is contraindicated in active tuberculosis?',
    options: ['Omnacortil', 'Wysolone', 'Predmet', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Omnacortil (Macleods), Wysolone (Pfizer), and Predmet (Sun Pharma) contain Prednisolone, contraindicated in active TB due to immunosuppression.',
    category: 'Immunology'
  },
  {
    id: 'hard-49',
    question: 'What is the primary drug interaction concern with Urimax (Tamsulosin by Cipla)?',
    options: ['Hypotension with alpha-blockers', 'QT prolongation', 'Hepatotoxicity', 'Seizure risk'],
    correctAnswer: 'Hypotension with alpha-blockers',
    explanation: 'Urimax (Tamsulosin) with other alpha-blockers (e.g., Prazosin) increases hypotension risk due to additive effects.',
    category: 'Urology'
  },
  {
    id: 'hard-50',
    question: 'Which Indian brand of Pantoprazole is associated with hypomagnesemia in long-term use?',
    options: ['Pantocid', 'Razo', 'Pantop', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Pantocid (Sun Pharma), Razo (Dr. Reddy\'s), and Pantop (Aristo) contain Pantoprazole, linked to hypomagnesemia with long-term use.',
    category: 'Gastrointestinal'
  },
  {
    id: 'hard-51',
    question: 'What is the risk of combining Nizral (Ketoconazole by Johnson & Johnson India) with statins?',
    options: ['Increased statin toxicity', 'Decreased statin efficacy', 'QT prolongation', 'Seizure risk'],
    correctAnswer: 'Increased statin toxicity',
    explanation: 'Nizral (Ketoconazole) inhibits CYP3A4, increasing statin levels and toxicity risk (e.g., myopathy).',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-52',
    question: 'Which Indian brand of Glimepiride is contraindicated in sulfa allergy?',
    options: ['Amaryl', 'Glimestar', 'Glimepiride', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Amaryl (Sanofi), Glimestar (Mankind), and Glimepiride (generic) contain Glimepiride, a sulfonylurea contraindicated in sulfa allergy.',
    category: 'Endocrine'
  },
  {
    id: 'hard-53',
    question: 'What is the primary adverse effect of Angispan (Nitroglycerin by USV) in overdose?',
    options: ['Hypotension', 'Tachycardia', 'Hepatotoxicity', 'Nephrotoxicity'],
    correctAnswer: 'Hypotension',
    explanation: 'Angispan (Nitroglycerin) overdose causes severe hypotension due to excessive vasodilation.',
    category: 'Cardiovascular'
  },
  {
    id: 'hard-54',
    question: 'Which Indian brand of Lamotrigine is associated with Stevens-Johnson syndrome?',
    options: ['Lamictal', 'Lametec', 'Lamitor', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Lamictal (GSK), Lametec (Cipla), and Lamitor (Torrent) contain Lamotrigine, linked to Stevens-Johnson syndrome, especially with rapid titration.',
    category: 'Central Nervous System'
  },
  {
    id: 'hard-55',
    question: 'What is the risk of combining Flagyl (Metronidazole by Abbott India) with alcohol?',
    options: ['Disulfiram-like reaction', 'Hepatotoxicity', 'Nephrotoxicity', 'QT prolongation'],
    correctAnswer: 'Disulfiram-like reaction',
    explanation: 'Flagyl (Metronidazole) with alcohol causes a disulfiram-like reaction, leading to nausea, flushing, and palpitations.',
    category: 'Antiparasitic'
  },
  {
    id: 'hard-56',
    question: 'Which Indian brand of Diclofenac is associated with GI bleeding risk?',
    options: ['Voveran', 'Diclomax', 'Dynapar', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Voveran (Novartis), Diclomax (Torrent), and Dynapar (Troikaa) contain Diclofenac, which increases GI bleeding risk due to COX inhibition.',
    category: 'Analgesic'
  },
  {
    id: 'hard-57',
    question: 'What is the primary drug interaction concern with Eltroxin (Levothyroxine by GSK India)?',
    options: ['Reduced absorption with antacids', 'Increased metabolism with beta-blockers', 'QT prolongation', 'Seizure risk'],
    correctAnswer: 'Reduced absorption with antacids',
    explanation: 'Eltroxin (Levothyroxine) absorption is reduced by antacids (e.g., calcium carbonate), requiring dosing separation.',
    category: 'Endocrine'
  },
  {
    id: 'hard-58',
    question: 'Which Indian brand of Rabeprazole is associated with Clostridium difficile infection risk?',
    options: ['Razo', 'Rabium', 'Veloz', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Razo (Dr. Reddy\'s), Rabium (Intas), and Veloz (Torrent) contain Rabeprazole, linked to C. difficile infection with long-term PPI use.',
    category: 'Gastrointestinal'
  },
  {
    id: 'hard-59',
    question: 'What is the risk of combining Montair (Montelukast by Cipla) with phenobarbital?',
    options: ['Decreased Montelukast efficacy', 'Increased hepatotoxicity', 'QT prolongation', 'Nephrotoxicity'],
    correctAnswer: 'Decreased Montelukast efficacy',
    explanation: 'Montair (Montelukast) efficacy is reduced by phenobarbital, which induces CYP3A4, increasing Montelukast metabolism.',
    category: 'Respiratory'
  },
  {
    id: 'hard-60',
    question: 'Which Indian brand of Gentamicin is associated with nephrotoxicity?',
    options: ['Genticyn', 'Garacin', 'Garamycin', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Genticyn (Abbott), Garacin (Sun Pharma), and Garamycin (Fulford) contain Gentamicin, which causes nephrotoxicity, requiring renal monitoring.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-61',
    question: 'What is the primary adverse effect of Dopress (Phenelzine by Intas) in depression treatment?',
    options: ['Hypertensive crisis', 'Tachycardia', 'Hepatotoxicity', 'Nephrotoxicity'],
    correctAnswer: 'Hypertensive crisis',
    explanation: 'Dopress (Phenelzine), an MAOI, can cause hypertensive crisis with tyramine-rich foods or certain drugs.',
    category: 'Central Nervous System'
  },
  {
    id: 'hard-62',
    question: 'Which Indian brand of Artesunate is contraindicated in first-trimester pregnancy?',
    options: ['Falcigo', 'Larinate', 'Artesun', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Falcigo (Zydus), Larinate (Ipca), and Artesun (Sun Pharma) contain Artesunate, contraindicated in first-trimester pregnancy due to embryotoxicity.',
    category: 'Antiparasitic'
  },
  {
    id: 'hard-63',
    question: 'What is the risk of combining Xylocaine (Lidocaine by AstraZeneca India) with beta-blockers?',
    options: ['Increased Lidocaine toxicity', 'Decreased Lidocaine efficacy', 'QT prolongation', 'Hepatotoxicity'],
    correctAnswer: 'Increased Lidocaine toxicity',
    explanation: 'Xylocaine (Lidocaine) toxicity increases with beta-blockers, which reduce hepatic clearance via CYP1A2.',
    category: 'Cardiovascular'
  },
  {
    id: 'hard-64',
    question: 'Which Indian brand of Calcium Carbonate is associated with hypercalcemia in chronic use?',
    options: ['Shelcal', 'Calcimax', 'Cipcal', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Shelcal (Torrent), Calcimax (Meyer), and Cipcal (Cipla) contain Calcium Carbonate, which can cause hypercalcemia with chronic overuse.',
    category: 'Musculoskeletal'
  },
  {
    id: 'hard-65',
    question: 'What is the primary drug interaction concern with Januvia (Sitagliptin by MSD India)?',
    options: ['No significant interactions', 'Increased levels with CYP3A4 inhibitors', 'QT prolongation', 'Hepatotoxicity'],
    correctAnswer: 'No significant interactions',
    explanation: 'Januvia (Sitagliptin) has no significant drug interactions, as it is minimally metabolized by CYP enzymes.',
    category: 'Endocrine'
  },
  {
    id: 'hard-66',
    question: 'Which Indian brand of Hydrocortisone is associated with adrenal suppression in long-term use?',
    options: ['Locoid', 'Tendrone', 'Efcortelin', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Locoid (Elder), Tendrone (Yash Pharma), and Efcortelin (GSK) contain Hydrocortisone, which can cause adrenal suppression with prolonged use.',
    category: 'Immunology'
  },
  {
    id: 'hard-67',
    question: 'What is the risk of combining Erythrocin (Erythromycin by Pfizer India) with simvastatin?',
    options: ['Increased simvastatin toxicity', 'Decreased Erythromycin efficacy', 'QT prolongation', 'Nephrotoxicity'],
    correctAnswer: 'Increased simvastatin toxicity',
    explanation: 'Erythrocin (Erythromycin) inhibits CYP3A4, increasing simvastatin levels and toxicity risk (e.g., rhabdomyolysis).',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-68',
    question: 'Which Indian brand of Venlafaxine is associated with serotonin syndrome risk?',
    options: ['Veniz', 'Venlor', 'Ventab', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Veniz (Sun Pharma), Venlor (Cipla), and Ventab (Intas) contain Venlafaxine, which can cause serotonin syndrome with other serotonergic drugs.',
    category: 'Central Nervous System'
  },
  {
    id: 'hard-69',
    question: 'What is the primary adverse effect of Aldactone (Spironolactone by RPG Life Sciences) in males?',
    options: ['Gynecomastia', 'Tachycardia', 'Hepatotoxicity', 'Nephrotoxicity'],
    correctAnswer: 'Gynecomastia',
    explanation: 'Aldactone (Spironolactone) causes gynecomastia in males due to its anti-androgenic effects.',
    category: 'Cardiovascular'
  },
  {
    id: 'hard-70',
    question: 'Which Indian brand of Itraconazole is contraindicated in heart failure?',
    options: ['Canditral', 'Sporanox', 'Itracap', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Canditral (Glenmark), Sporanox (Johnson & Johnson), and Itracap (Cipla) contain Itraconazole, contraindicated in heart failure due to negative inotropic effects.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-71',
    question: 'What is the risk of combining Ativan (Lorazepam by Pfizer India) with alcohol?',
    options: ['Increased CNS depression', 'Hepatotoxicity', 'Nephrotoxicity', 'QT prolongation'],
    correctAnswer: 'Increased CNS depression',
    explanation: 'Ativan (Lorazepam) with alcohol increases CNS depression, risking sedation and respiratory depression.',
    category: 'Central Nervous System'
  },
  {
    id: 'hard-72',
    question: 'Which Indian brand of Tinidazole is associated with peripheral neuropathy in long-term use?',
    options: ['Tiniba', 'Fasigyn', 'Tinvista', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Tiniba (Zydus), Fasigyn (Pfizer), and Tinvista (Macleods) contain Tinidazole, linked to peripheral neuropathy with prolonged use.',
    category: 'Antiparasitic'
  },
  {
    id: 'hard-73',
    question: 'What is the primary drug interaction concern with Amlopres (Amlodipine by Cipla)?',
    options: ['Increased levels with CYP3A4 inhibitors', 'Decreased efficacy with beta-blockers', 'QT prolongation', 'Hepatotoxicity'],
    correctAnswer: 'Increased levels with CYP3A4 inhibitors',
    explanation: 'Amlopres (Amlodipine) levels increase with CYP3A4 inhibitors (e.g., ketoconazole), risking hypotension.',
    category: 'Cardiovascular'
  },
  {
    id: 'hard-74',
    question: 'Which Indian brand of Lactulose is associated with flatulence as a common side effect?',
    options: ['Looz', 'Duphalac', 'Lactifiber', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Looz (Intas), Duphalac (Abbott), and Lactifiber (Sun Pharma) contain Lactulose, which commonly causes flatulence due to gut fermentation.',
    category: 'Gastrointestinal'
  },
  {
    id: 'hard-75',
    question: 'What is the risk of combining Efavir (Efavirenz by Cipla) with rifampicin?',
    options: ['Decreased Efavirenz efficacy', 'Increased hepatotoxicity', 'QT prolongation', 'Nephrotoxicity'],
    correctAnswer: 'Decreased Efavirenz efficacy',
    explanation: 'Efavir (Efavirenz) efficacy is reduced by rifampicin, which induces CYP3A4, increasing Efavirenz metabolism.',
    category: 'Antiviral'
  },
  {
    id: 'hard-76',
    question: 'Which Indian brand of Fexofenadine is associated with minimal CNS penetration?',
    options: ['Allegra', 'Fexova', 'Alernex', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Allegra (Sanofi), Fexova (Ipca), and Alernex (Macleods) contain Fexofenadine, which has minimal CNS penetration, reducing sedation.',
    category: 'Immunology'
  },
  {
    id: 'hard-77',
    question: 'What is the primary adverse effect of Lefra (Leflunomide by Torrent) in rheumatoid arthritis?',
    options: ['Hepatotoxicity', 'Tachycardia', 'Nephrotoxicity', 'QT prolongation'],
    correctAnswer: 'Hepatotoxicity',
    explanation: 'Lefra (Leflunomide) is associated with hepatotoxicity, requiring regular liver function monitoring.',
    category: 'Musculoskeletal'
  },
  {
    id: 'hard-78',
    question: 'Which Indian brand of Ramipril is contraindicated in bilateral renal artery stenosis?',
    options: ['Cardace', 'Ramistar', 'Hopace', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Cardace (Sanofi), Ramistar (Lupin), and Hopace (Micro Labs) contain Ramipril, contraindicated in bilateral renal artery stenosis due to renal failure risk.',
    category: 'Cardiovascular'
  },
  {
    id: 'hard-79',
    question: 'What is the risk of combining Ipravent (Ipratropium by Cipla) with beta-agonists?',
    options: ['No significant interaction', 'Increased tachycardia', 'Hepatotoxicity', 'Nephrotoxicity'],
    correctAnswer: 'No significant interaction',
    explanation: 'Ipravent (Ipratropium) has no significant interaction with beta-agonists, as they complement each other in COPD treatment.',
    category: 'Respiratory'
  },
  {
    id: 'hard-80',
    question: 'Which Indian brand of Clarithromycin is associated with taste disturbances?',
    options: ['Claribid', 'Clarith', 'Klacid', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Claribid (Pfizer), Clarith (Macleods), and Klacid (Abbott) contain Clarithromycin, which commonly causes taste disturbances.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-81',
    question: 'What is the primary drug interaction concern with Perinorm (Metoclopramide by Ipca)?',
    options: ['Extrapyramidal symptoms with antipsychotics', 'QT prolongation', 'Hepatotoxicity', 'Nephrotoxicity'],
    correctAnswer: 'Extrapyramidal symptoms with antipsychotics',
    explanation: 'Perinorm (Metoclopramide) with antipsychotics increases extrapyramidal symptoms due to dopamine receptor blockade.',
    category: 'Gastrointestinal'
  },
  {
    id: 'hard-82',
    question: 'Which Indian brand of Finasteride is associated with sexual dysfunction?',
    options: ['Finpecia', 'Fincar', 'Finast', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Finpecia (Cipla), Fincar (Cipla), and Finast (Dr. Reddy\'s) contain Finasteride, linked to sexual dysfunction like decreased libido.',
    category: 'Urology'
  },
  {
    id: 'hard-83',
    question: 'What is the risk of combining Grisovin (Griseofulvin by GSK India) with warfarin?',
    options: ['Decreased warfarin efficacy', 'Increased warfarin toxicity', 'QT prolongation', 'Nephrotoxicity'],
    correctAnswer: 'Decreased warfarin efficacy',
    explanation: 'Grisovin (Griseofulvin) induces CYP2C9, decreasing warfarin efficacy and INR.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-84',
    question: 'Which Indian brand of Salmeterol-Fluticasone is associated with oral candidiasis risk?',
    options: ['Seroflo', 'Foracort', 'Combitide', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Seroflo (Cipla), Foracort (Cipla), and Combitide (Sun Pharma) contain Salmeterol-Fluticasone, which can cause oral candidiasis due to inhaled corticosteroids.',
    category: 'Respiratory'
  },
  {
    id: 'hard-85',
    question: 'What is the primary adverse effect of Daonil (Glibenclamide by Sanofi India) in elderly patients?',
    options: ['Hypoglycemia', 'Tachycardia', 'Hepatotoxicity', 'Nephrotoxicity'],
    correctAnswer: 'Hypoglycemia',
    explanation: 'Daonil (Glibenclamide) causes prolonged hypoglycemia in elderly patients due to long half-life and renal clearance changes.',
    category: 'Endocrine'
  },
  {
    id: 'hard-86',
    question: 'Which Indian brand of Isosorbide Mononitrate is associated with tolerance in long-term use?',
    options: ['Monotrate', 'Nitrocontin', 'Imdur', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Monotrate (Sun Pharma), Nitrocontin (Modi-Mundipharma), and Imdur (AstraZeneca) contain Isosorbide Mononitrate, which develops tolerance with continuous use.',
    category: 'Cardiovascular'
  },
  {
    id: 'hard-87',
    question: 'What is the risk of combining Minoz (Minocycline by Sun Pharma) with isotretinoin?',
    options: ['Increased intracranial pressure', 'Hepatotoxicity', 'Nephrotoxicity', 'QT prolongation'],
    correctAnswer: 'Increased intracranial pressure',
    explanation: 'Minoz (Minocycline) with isotretinoin increases the risk of intracranial pressure (pseudotumor cerebri).',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-88',
    question: 'Which Indian brand of Olanzapine is associated with weight gain?',
    options: ['Oleanz', 'Oliza', 'Olan', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Oleanz (Sun Pharma), Oliza (Intas), and Olan (Micro Labs) contain Olanzapine, which commonly causes significant weight gain.',
    category: 'Central Nervous System'
  },
  {
    id: 'hard-89',
    question: 'What is the primary drug interaction concern with Dytor (Torsemide by Cipla)?',
    options: ['Ototoxicity with aminoglycosides', 'QT prolongation', 'Hepatotoxicity', 'Seizure risk'],
    correctAnswer: 'Ototoxicity with aminoglycosides',
    explanation: 'Dytor (Torsemide) with aminoglycosides increases ototoxicity risk due to additive effects on the inner ear.',
    category: 'Cardiovascular'
  },
  {
    id: 'hard-90',
    question: 'Which Indian brand of Voriconazole is associated with visual disturbances?',
    options: ['Vfend', 'Voritek', 'Vorizol', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Vfend (Pfizer), Voritek (Cipla), and Vorizol (Sun Pharma) contain Voriconazole, which commonly causes visual disturbances like blurred vision.',
    category: 'Antimicrobial'
  },
  {
    id: 'hard-91',
    question: 'What is the risk of combining Nexito (Escitalopram by Sun Pharma) with MAOIs?',
    options: ['Serotonin syndrome', 'Hepatotoxicity', 'Nephrotoxicity', 'QT prolongation'],
    correctAnswer: 'Serotonin syndrome',
    explanation: 'Nexito (Escitalopram) with MAOIs increases serotonin syndrome risk due to excessive serotonin levels.',
    category: 'Central Nervous System'
  },
  {
    id: 'hard-92',
    question: 'Which Indian brand of Quinine is contraindicated in patients with G6PD deficiency?',
    options: ['Qutomal', 'Quinarsol', 'Qualaquin', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Qutomal (Alkem), Quinarsol (Cipla), and Qualaquin (Sun Pharma) contain Quinine, contraindicated in G6PD deficiency due to hemolytic anemia risk.',
    category: 'Antiparasitic'
  },
  {
    id: 'hard-93',
    question: 'What is the primary adverse effect of Metolar (Metoprolol by Cipla) in diabetic patients?',
    options: ['Masking hypoglycemia symptoms', 'Tachycardia', 'Hepatotoxicity', 'Nephrotoxicity'],
    correctAnswer: 'Masking hypoglycemia symptoms',
    explanation: 'Metolar (Metoprolol) masks hypoglycemia symptoms (e.g., tremors) in diabetic patients, complicating glucose management.',
    category: 'Cardiovascular'
  },
  {
    id: 'hard-94',
    question: 'Which Indian brand of Ispaghula Husk is associated with bloating as a side effect?',
    options: ['Isabgol', 'Fybogel', 'Natrax', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Isabgol (Dabur), Fybogel (Reckitt), and Natrax (Macleods) contain Ispaghula Husk, which can cause bloating due to fermentation.',
    category: 'Gastrointestinal'
  },
  {
    id: 'hard-95',
    question: 'What is the risk of combining Lamivir (Lamivudine by Cipla) with tenofovir?',
    options: ['No significant interaction', 'Increased nephrotoxicity', 'QT prolongation', 'Hepatotoxicity'],
    correctAnswer: 'No significant interaction',
    explanation: 'Lamivir (Lamivudine) has no significant interaction with tenofovir, as they are often combined in HIV therapy.',
    category: 'Antiviral'
  },
  {
    id: 'hard-96',
    question: 'Which Indian brand of Fexofenadine is contraindicated in severe renal impairment?',
    options: ['Allegra', 'Fexova', 'Alernex', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Allegra (Sanofi), Fexova (Ipca), and Alernex (Macleods) contain Fexofenadine, requiring dose adjustment in severe renal impairment.',
    category: 'Immunology'
  },
  {
    id: 'hard-97',
    question: 'What is the primary drug interaction concern with HCQS (Hydroxychloroquine by Ipca)?',
    options: ['QT prolongation with antiarrhythmics', 'Hepatotoxicity', 'Nephrotoxicity', 'Seizure risk'],
    correctAnswer: 'QT prolongation with antiarrhythmics',
    explanation: 'HCQS (Hydroxychloroquine) with antiarrhythmics (e.g., amiodarone) increases QT prolongation risk.',
    category: 'Musculoskeletal'
  },
  {
    id: 'hard-98',
    question: 'Which Indian brand of Ramipril is associated with dry cough as a side effect?',
    options: ['Cardace', 'Ramistar', 'Hopace', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Cardace (Sanofi), Ramistar (Lupin), and Hopace (Micro Labs) contain Ramipril, which commonly causes dry cough due to bradykinin accumulation.',
    category: 'Cardiovascular'
  },
  {
    id: 'hard-99',
    question: 'What is the risk of combining Seroflo (Salmeterol-Fluticasone by Cipla) with ritonavir?',
    options: ['Increased Fluticasone levels', 'Decreased Salmeterol efficacy', 'QT prolongation', 'Nephrotoxicity'],
    correctAnswer: 'Increased Fluticasone levels',
    explanation: 'Seroflo (Salmeterol-Fluticasone) with ritonavir increases Fluticasone levels via CYP3A4 inhibition, risking systemic corticosteroid effects.',
    category: 'Respiratory'
  },
  {
    id: 'hard-100',
    question: 'Which Indian brand of Sulfadiazine is associated with crystalluria risk?',
    options: ['Zosul', 'Sulfadiazine', 'Sulfa', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'Zosul (Zuventus), Sulfadiazine (generic), and Sulfa (generic) contain Sulfadiazine, which can cause crystalluria, requiring adequate hydration.',
    category: 'Antimicrobial'
  }
];
