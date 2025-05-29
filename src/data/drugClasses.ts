
export const drugClassesData = [
  {
    name: "Beta Blockers",
    category: "Cardiovascular",
    description: "Beta blockers inhibit beta-adrenergic receptors, reducing heart rate and blood pressure.",
    mechanism: "Block beta-1 and/or beta-2 receptors, decreasing sympathetic nervous system activity.",
    uses: "Hypertension, angina, heart failure, arrhythmias",
    side_effects: "Bradycardia, fatigue, hypotension, bronchospasm (non-selective)",
    examples: ["Atenolol (Tenormin)", "Metoprolol (Metrogyl)", "Propranolol (Ciplar)"]
  },
  {
    name: "ACE Inhibitors",
    category: "Cardiovascular",
    description: "Angiotensin-converting enzyme inhibitors lower blood pressure by inhibiting angiotensin II formation.",
    mechanism: "Inhibit ACE, reducing vasoconstriction and aldosterone secretion.",
    uses: "Hypertension, heart failure, post-myocardial infarction",
    side_effects: "Dry cough, hyperkalemia, angioedema",
    examples: ["Enalapril (Enam)", "Lisinopril (Listril)", "Ramipril (Cardace)"]
  },
  {
    name: "Calcium Channel Blockers",
    category: "Cardiovascular",
    description: "Block calcium entry into smooth muscle cells, causing vasodilation.",
    mechanism: "Inhibit voltage-gated calcium channels in cardiac and vascular smooth muscle.",
    uses: "Hypertension, angina, arrhythmias",
    side_effects: "Headache, dizziness, edema, constipation (verapamil)",
    examples: ["Amlodipine (Amlong)", "Nifedipine (Calcigard)", "Diltiazem (Dilzem)"]
  },
  {
    name: "Diuretics",
    category: "Cardiovascular",
    description: "Increase urine output to reduce blood volume and pressure.",
    mechanism: "Act on renal tubules to increase sodium and water excretion.",
    uses: "Hypertension, edema, heart failure",
    side_effects: "Electrolyte imbalances, dehydration, hypokalemia",
    examples: ["Furosemide (Lasix)", "Hydrochlorothiazide (Aquazide)", "Spironolactone (Aldactone)"]
  },
  {
    name: "Statins",
    category: "Cardiovascular",
    description: "Lower cholesterol by inhibiting its synthesis in the liver.",
    mechanism: "Inhibit HMG-CoA reductase, reducing LDL cholesterol production.",
    uses: "Hyperlipidemia, prevention of cardiovascular events",
    side_effects: "Myalgia, liver dysfunction, rhabdomyolysis (rare)",
    examples: ["Atorvastatin (Lipitor)", "Rosuvastatin (Rosulip)", "Simvastatin (Simvotin)"]
  },
  {
    name: "Penicillins",
    category: "Antimicrobial",
    description: "Beta-lactam antibiotics effective against gram-positive bacteria.",
    mechanism: "Inhibit bacterial cell wall synthesis by binding to penicillin-binding proteins.",
    uses: "Infections like pneumonia, skin infections, streptococcal infections",
    side_effects: "Allergic reactions, diarrhea, rash",
    examples: ["Amoxicillin (Himuclav)", "Ampicillin (Roscillin)", "Cloxacillin (Klox)"]
  },
  {
    name: "Cephalosporins",
    category: "Antimicrobial",
    description: "Broad-spectrum antibiotics with activity against gram-positive and gram-negative bacteria.",
    mechanism: "Inhibit cell wall synthesis, similar to penicillins.",
    uses: "Respiratory infections, urinary tract infections, surgical prophylaxis",
    side_effects: "Allergic reactions, gastrointestinal upset",
    examples: ["Cefixime (Taxim-O)", "Ceftriaxone (Monocef)", "Cefuroxime (Ceftum)"]
  },
  {
    name: "Macrolides",
    category: "Antimicrobial",
    description: "Antibiotics that inhibit bacterial protein synthesis.",
    mechanism: "Bind to 50S ribosomal subunit, preventing peptide chain elongation.",
    uses: "Respiratory infections, atypical pneumonia, chlamydia",
    side_effects: "Nausea, diarrhea, QT prolongation",
    examples: ["Azithromycin (Azee)", "Clarithromycin (Claribid)", "Erythromycin (Althrocin)"]
  },
  {
    name: "Fluoroquinolones",
    category: "Antimicrobial",
    description: "Broad-spectrum antibiotics effective against gram-negative bacteria.",
    mechanism: "Inhibit DNA gyrase and topoisomerase IV, preventing DNA replication.",
    uses: "Urinary tract infections, respiratory infections, gastroenteritis",
    side_effects: "Tendonitis, QT prolongation, photosensitivity",
    examples: ["Ciprofloxacin (Cifran)", "Levofloxacin (Levoflox)", "Moxifloxacin (Moxiford)"]
  },
  {
    name: "Antifungals (Azoles)",
    category: "Antimicrobial",
    description: "Treat fungal infections by disrupting fungal cell membranes.",
    mechanism: "Inhibit ergosterol synthesis by blocking lanosterol 14-alpha-demethylase.",
    uses: "Candidiasis, aspergillosis, dermatophytosis",
    side_effects: "Hepatotoxicity, nausea, rash",
    examples: ["Fluconazole (Zocon)", "Itraconazole (Canditral)", "Ketoconazole (Nizral)"]
  },
  {
    name: "SSRIs",
    category: "Central Nervous System",
    description: "Selective serotonin reuptake inhibitors used for depression and anxiety.",
    mechanism: "Inhibit serotonin reuptake, increasing synaptic serotonin levels.",
    uses: "Depression, anxiety disorders, OCD",
    side_effects: "Insomnia, sexual dysfunction, nausea",
    examples: ["Fluoxetine (Fludac)", "Sertraline (Zosert)", "Escitalopram (Cipralex)"]
  },
  {
    name: "Benzodiazepines",
    category: "Central Nervous System",
    description: "Enhance GABA activity for sedative and anxiolytic effects.",
    mechanism: "Bind to GABA-A receptors, increasing chloride influx.",
    uses: "Anxiety, insomnia, seizures",
    side_effects: "Drowsiness, dependence, memory impairment",
    examples: ["Diazepam (Valium)", "Lorazepam (Trapex)", "Alprazolam (Restyl)"]
  },
  {
    name: "Antipsychotics (Atypical)",
    category: "Central Nervous System",
    description: "Treat schizophrenia and bipolar disorder by modulating neurotransmitters.",
    mechanism: "Block dopamine D2 and serotonin 5-HT2 receptors.",
    uses: "Schizophrenia, bipolar disorder, agitation",
    side_effects: "Weight gain, sedation, extrapyramidal symptoms",
    examples: ["Olanzapine (Oleanz)", "Risperidone (Risperdal)", "Quetiapine (Qutipin)"]
  },
  {
    name: "Antiepileptics",
    category: "Central Nervous System",
    description: "Control seizures by stabilizing neuronal activity.",
    mechanism: "Vary by drug; e.g., enhance GABA, block sodium channels.",
    uses: "Epilepsy, neuropathic pain, mood stabilization",
    side_effects: "Dizziness, rash, hepatotoxicity",
    examples: ["Phenytoin (Eptoin)", "Carbamazepine (Tegretol)", "Valproate (Encorate)"]
  },
  {
    name: "Opioid Analgesics",
    category: "Central Nervous System",
    description: "Relieve severe pain by acting on opioid receptors.",
    mechanism: "Bind to mu-opioid receptors, inhibiting pain signal transmission.",
    uses: "Acute and chronic pain, postoperative pain",
    side_effects: "Constipation, respiratory depression, dependence",
    examples: ["Morphine (Morcontin)", "Tramadol (Tramasure)", "Fentanyl (Durogesic)"]
  },
  {
    name: "Proton Pump Inhibitors",
    category: "Gastrointestinal",
    description: "Reduce gastric acid production for ulcer and reflux treatment.",
    mechanism: "Inhibit H+/K+ ATPase in parietal cells.",
    uses: "GERD, peptic ulcers, H. pylori eradication",
    side_effects: "Headache, diarrhea, long-term hypomagnesemia",
    examples: ["Omeprazole (Omez)", "Pantoprazole (Pantocid)", "Rabeprazole (Razo)"]
  },
  {
    name: "H2 Receptor Antagonists",
    category: "Gastrointestinal",
    description: "Reduce gastric acid by blocking histamine receptors.",
    mechanism: "Block H2 receptors on parietal cells, decreasing acid secretion.",
    uses: "Peptic ulcers, GERD, dyspepsia",
    side_effects: "Headache, dizziness, gynecomastia (rare)",
    examples: ["Ranitidine (Zinetac)", "Famotidine (Famocid)", "Cimetidine (Cintapro)"]
  },
  {
    name: "Biguanides",
    category: "Endocrine",
    description: "Manage type 2 diabetes by reducing glucose production.",
    mechanism: "Activate AMPK, reducing hepatic glucose output and improving insulin sensitivity.",
    uses: "Type 2 diabetes mellitus",
    side_effects: "Lactic acidosis (rare), gastrointestinal upset",
    examples: ["Metformin (Glycomet)", "Metformin SR (Glycomet SR)", "Metformin XR (Glucophage XR)"]
  },
  {
    name: "Sulfonylureas",
    category: "Endocrine",
    description: "Stimulate insulin release for diabetes management.",
    mechanism: "Bind to pancreatic beta-cell receptors, increasing insulin secretion.",
    uses: "Type 2 diabetes mellitus",
    side_effects: "Hypoglycemia, weight gain",
    examples: ["Glimepiride (Amaryl)", "Gliclazide (Diamicron)", "Glipizide (Glucotrol)"]
  },
  {
    name: "Corticosteroids",
    category: "Endocrine",
    description: "Mimic cortisol to reduce inflammation and immune response.",
    mechanism: "Bind to glucocorticoid receptors, inhibiting pro-inflammatory cytokines.",
    uses: "Inflammatory disorders, autoimmune diseases, allergies",
    side_effects: "Weight gain, osteoporosis, hyperglycemia",
    examples: ["Prednisolone (Wysolone)", "Hydrocortisone (Locoid)", "Dexamethasone (Decdan)"]
  },
  {
    name: "Thyroid Hormones",
    category: "Endocrine",
    description: "Replace or supplement thyroid hormone in hypothyroidism.",
    mechanism: "Mimic thyroxine (T4) or triiodothyronine (T3) to regulate metabolism.",
    uses: "Hypothyroidism, myxedema coma",
    side_effects: "Palpitations, weight loss, heat intolerance",
    examples: ["Levothyroxine (Thyronorm)", "Liothyronine (Cytomel)", "Thyroglobulin (Proloid)"]
  },
  {
    name: "Bronchodilators (Beta-2 Agonists)",
    category: "Respiratory",
    description: "Relax bronchial smooth muscle to improve airflow.",
    mechanism: "Stimulate beta-2 receptors, increasing cyclic AMP.",
    uses: "Asthma, COPD",
    side_effects: "Tremors, tachycardia, hypokalemia",
    examples: ["Salbutamol (Asthalin)", "Salmeterol (Serobid)", "Formoterol (Foracort)"]
  },
  {
    name: "Inhaled Corticosteroids",
    category: "Respiratory",
    description: "Reduce airway inflammation in asthma and COPD.",
    mechanism: "Inhibit inflammatory cytokines in airway tissues.",
    uses: "Asthma, COPD maintenance",
    side_effects: "Oral thrush, hoarseness, systemic effects (high doses)",
    examples: ["Budesonide (Budecort)", "Fluticasone (Flomist)", "Beclomethasone (Beclate)"]
  },
  {
    name: "Antihistamines (H1 Blockers)",
    category: "Respiratory",
    description: "Block histamine receptors to relieve allergic symptoms.",
    mechanism: "Antagonize H1 receptors, reducing histamine-mediated responses.",
    uses: "Allergic rhinitis, urticaria, motion sickness",
    side_effects: "Sedation (first-generation), dry mouth",
    examples: ["Cetirizine (Cetzine)", "Levocetirizine (Levocet)", "Loratadine (Alaspan)"]
  },
  {
    name: "Chemotherapeutic Agents (Alkylating Agents)",
    category: "Oncology",
    description: "Kill rapidly dividing cancer cells by damaging DNA.",
    mechanism: "Alkylate DNA, preventing cell division.",
    uses: "Various cancers (e.g., leukemia, lymphoma)",
    side_effects: "Nausea, bone marrow suppression, infertility",
    examples: ["Cyclophosphamide (Endoxan)", "Chlorambucil (Leukeran)", "Melphalan (Alkeran)"]
  },
  {
    name: "Antimetabolites",
    category: "Oncology",
    description: "Interfere with DNA and RNA synthesis in cancer cells.",
    mechanism: "Inhibit enzymes involved in nucleotide synthesis.",
    uses: "Leukemia, breast cancer, colorectal cancer",
    side_effects: "Nausea, mucositis, myelosuppression",
    examples: ["Methotrexate (Biotrexate)", "5-Fluorouracil (Fluracil)", "Capecitabine (Capegard)"]
  }
];
