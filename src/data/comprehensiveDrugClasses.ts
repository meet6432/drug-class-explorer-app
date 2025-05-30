export interface DrugClass {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  description: string;
  mechanism: string;
  uses: string;
  side_effects: string;
  examples: string[];
}

export const drugCategories = [
  'Cardiovascular',
  'Antimicrobial', 
  'Central Nervous System',
  'Gastrointestinal',
  'Endocrine',
  'Respiratory',
  'Oncology',
  'Immunologic',
  'Dermatological',
  'Ophthalmic',
  'Otic',
  'Anesthetics',
  'Analgesics',
  'Anti-inflammatory',
  'Nutritional',
  'Diagnostic',
  'Miscellaneous'
];

export const comprehensiveDrugClasses: DrugClass[] = [
  // Existing classes first
  {
    id: "beta-blockers",
    name: "Beta Blockers",
    category: "Cardiovascular",
    description: "Beta blockers inhibit beta-adrenergic receptors, reducing heart rate and blood pressure.",
    mechanism: "Block beta-1 and/or beta-2 receptors, decreasing sympathetic nervous system activity.",
    uses: "Hypertension, angina, heart failure, arrhythmias",
    side_effects: "Bradycardia, fatigue, hypotension, bronchospasm (non-selective)",
    examples: ["Atenolol (Tenormin)", "Metoprolol (Metrogyl)", "Propranolol (Ciplar)"]
  },
  {
    id: "ace-inhibitors",
    name: "ACE Inhibitors",
    category: "Cardiovascular",
    description: "Angiotensin-converting enzyme inhibitors lower blood pressure by inhibiting angiotensin II formation.",
    mechanism: "Inhibit ACE, reducing vasoconstriction and aldosterone secretion.",
    uses: "Hypertension, heart failure, post-myocardial infarction",
    side_effects: "Dry cough, hyperkalemia, angioedema",
    examples: ["Enalapril (Enam)", "Lisinopril (Listril)", "Ramipril (Cardace)"]
  },
  {
    id: "calcium-channel-blockers",
    name: "Calcium Channel Blockers",
    category: "Cardiovascular",
    description: "Block calcium entry into smooth muscle cells, causing vasodilation.",
    mechanism: "Inhibit voltage-gated calcium channels in cardiac and vascular smooth muscle.",
    uses: "Hypertension, angina, arrhythmias",
    side_effects: "Headache, dizziness, edema, constipation (verapamil)",
    examples: ["Amlodipine (Amlong)", "Nifedipine (Calcigard)", "Diltiazem (Dilzem)"]
  },
  {
    id: "5-alpha-reductase-inhibitors",
    name: "5-Alpha-Reductase Inhibitors",
    category: "Genitourinary tract agents",
    description: "Inhibit the conversion of testosterone to dihydrotestosterone (DHT).",
    mechanism: "Block 5-alpha-reductase enzyme, reducing DHT production.",
    uses: "Benign prostatic hyperplasia, male pattern baldness",
    side_effects: "Decreased libido, erectile dysfunction, gynecomastia",
    examples: ["Finasteride (Finpecia)", "Dutasteride (Dutas)", "Saw Palmetto"]
  },
  {
    id: "5-aminosalicylates",
    name: "5-Aminosalicylates",
    category: "Gastrointestinal",
    description: "Anti-inflammatory agents used to treat inflammatory bowel disease.",
    mechanism: "Inhibit cyclooxygenase and lipoxygenase pathways, reducing inflammation.",
    uses: "Ulcerative colitis, Crohn's disease, inflammatory bowel disease",
    side_effects: "Nausea, headache, rash, nephrotoxicity",
    examples: ["Mesalamine (Mesacol)", "Sulfasalazine (Sazo)", "Balsalazide (Colazal)"]
  },
  {
    id: "5ht3-receptor-antagonists",
    name: "5HT3 Receptor Antagonists",
    category: "Gastrointestinal",
    description: "Block serotonin receptors to prevent nausea and vomiting.",
    mechanism: "Antagonize 5-HT3 receptors in the chemoreceptor trigger zone.",
    uses: "Chemotherapy-induced nausea, postoperative nausea",
    side_effects: "Headache, constipation, QT prolongation",
    examples: ["Ondansetron (Emeset)", "Granisetron (Kytril)", "Palonosetron (Aloxi)"]
  },
  {
    id: "adamantane-antivirals",
    name: "Adamantane Antivirals",
    category: "Antimicrobial",
    description: "Antiviral agents effective against influenza A virus.",
    mechanism: "Block viral M2 ion channel, preventing viral uncoating.",
    uses: "Influenza A treatment and prophylaxis",
    side_effects: "CNS effects, nausea, insomnia, nervousness",
    examples: ["Amantadine (Symmetrel)", "Rimantadine (Flumadine)"]
  },
  {
    id: "adrenal-cortical-steroids",
    name: "Adrenal Cortical Steroids",
    category: "Endocrine",
    description: "Synthetic analogs of natural corticosteroids with anti-inflammatory properties.",
    mechanism: "Bind to glucocorticoid receptors, inhibiting inflammatory responses.",
    uses: "Inflammatory conditions, autoimmune diseases, allergic reactions",
    side_effects: "Weight gain, osteoporosis, hyperglycemia, immunosuppression",
    examples: ["Prednisolone (Wysolone)", "Hydrocortisone (Locoid)", "Dexamethasone (Decdan)"]
  },
  {
    id: "adrenergic-bronchodilators",
    name: "Adrenergic Bronchodilators",
    category: "Respiratory",
    description: "Beta-2 agonists that relax bronchial smooth muscle.",
    mechanism: "Stimulate beta-2 adrenergic receptors, increasing cyclic AMP.",
    uses: "Asthma, COPD, bronchospasm",
    side_effects: "Tremors, tachycardia, hypokalemia, nervousness",
    examples: ["Salbutamol (Asthalin)", "Salmeterol (Serobid)", "Formoterol (Foracort)"]
  },
  {
    id: "alpha-blockers",
    name: "Alpha Blockers",
    category: "Cardiovascular",
    description: "Block alpha-1 adrenergic receptors causing vasodilation.",
    mechanism: "Antagonize alpha-1 receptors in vascular smooth muscle.",
    uses: "Hypertension, benign prostatic hyperplasia",
    side_effects: "Orthostatic hypotension, dizziness, nasal congestion",
    examples: ["Prazosin (Minipress)", "Terazosin (Hytrin)", "Doxazosin (Cardura)"]
  },
  {
    id: "alpha-glucosidase-inhibitors",
    name: "Alpha-Glucosidase Inhibitors",
    category: "Endocrine",
    description: "Delay carbohydrate digestion and glucose absorption.",
    mechanism: "Inhibit alpha-glucosidase enzymes in the small intestine.",
    uses: "Type 2 diabetes mellitus, postprandial hyperglycemia",
    side_effects: "Flatulence, diarrhea, abdominal pain",
    examples: ["Acarbose (Glucobay)", "Miglitol (Glyset)", "Voglibose (Volix)"]
  },
  {
    id: "aminoglycosides",
    name: "Aminoglycosides",
    category: "Antimicrobial",
    description: "Bactericidal antibiotics effective against gram-negative bacteria.",
    mechanism: "Bind to 30S ribosomal subunit, inhibiting protein synthesis.",
    uses: "Serious gram-negative infections, tuberculosis",
    side_effects: "Nephrotoxicity, ototoxicity, neuromuscular blockade",
    examples: ["Gentamicin (Garamycin)", "Amikacin (Amikin)", "Streptomycin"]
  },
  {
    id: "angiotensin-receptor-blockers",
    name: "Angiotensin Receptor Blockers",
    category: "Cardiovascular",
    description: "Block angiotensin II receptors to reduce blood pressure.",
    mechanism: "Antagonize AT1 receptors, preventing vasoconstriction.",
    uses: "Hypertension, heart failure, diabetic nephropathy",
    side_effects: "Hyperkalemia, angioedema (rare), hypotension",
    examples: ["Losartan (Cozaar)", "Telmisartan (Telma)", "Valsartan (Diovan)"]
  },
  {
    id: "antacids",
    name: "Antacids",
    category: "Gastrointestinal",
    description: "Neutralize gastric acid to relieve heartburn and indigestion.",
    mechanism: "Directly neutralize hydrochloric acid in the stomach.",
    uses: "Dyspepsia, heartburn, peptic ulcer disease",
    side_effects: "Constipation (aluminum), diarrhea (magnesium), electrolyte imbalance",
    examples: ["Aluminum hydroxide (Aludrox)", "Magnesium hydroxide (Milk of Magnesia)", "Calcium carbonate (Tums)"]
  },
  {
    id: "antihistamines",
    name: "Antihistamines",
    category: "Respiratory",
    description: "Block histamine H1 receptors to treat allergic reactions.",
    mechanism: "Competitive antagonism of histamine at H1 receptors.",
    uses: "Allergic rhinitis, urticaria, motion sickness",
    side_effects: "Sedation (first-generation), dry mouth, blurred vision",
    examples: ["Cetirizine (Cetzine)", "Loratadine (Alaspan)", "Chlorpheniramine (Avil)"]
  },
  {
    id: "barbiturates",
    name: "Barbiturates",
    category: "Central Nervous System",
    description: "CNS depressants used for sedation and seizure control.",
    mechanism: "Enhance GABA activity and depress neuronal excitability.",
    uses: "Seizures, anesthesia, sedation",
    side_effects: "Respiratory depression, dependence, cognitive impairment",
    examples: ["Phenobarbital (Gardenal)", "Thiopental", "Secobarbital"]
  },
  {
    id: "benzodiazepines",
    name: "Benzodiazepines",
    category: "Central Nervous System",
    description: "Anxiolytic and sedative agents that enhance GABA activity.",
    mechanism: "Bind to GABA-A receptors, increasing chloride influx.",
    uses: "Anxiety, insomnia, seizures, muscle relaxation",
    side_effects: "Drowsiness, dependence, memory impairment, ataxia",
    examples: ["Diazepam (Valium)", "Lorazepam (Trapex)", "Alprazolam (Restyl)"]
  },
  {
    id: "cephalosporins",
    name: "Cephalosporins",
    category: "Antimicrobial",
    description: "Beta-lactam antibiotics with broad-spectrum activity.",
    mechanism: "Inhibit bacterial cell wall synthesis.",
    uses: "Respiratory infections, UTIs, surgical prophylaxis",
    side_effects: "Allergic reactions, GI upset, Clostridium difficile infection",
    examples: ["Cefixime (Taxim-O)", "Ceftriaxone (Monocef)", "Cefuroxime (Ceftum)"]
  },
  {
    id: "fluoroquinolones",
    name: "Fluoroquinolones",
    category: "Antimicrobial",
    description: "Broad-spectrum antibiotics targeting DNA replication.",
    mechanism: "Inhibit DNA gyrase and topoisomerase IV.",
    uses: "UTIs, respiratory infections, gastroenteritis",
    side_effects: "Tendonitis, QT prolongation, photosensitivity",
    examples: ["Ciprofloxacin (Cifran)", "Levofloxacin (Levoflox)", "Moxifloxacin (Moxiford)"]
  },
  {
    id: "proton-pump-inhibitors",
    name: "Proton Pump Inhibitors",
    category: "Gastrointestinal",
    description: "Potent acid suppressors for ulcer and reflux treatment.",
    mechanism: "Irreversibly inhibit H+/K+ ATPase in parietal cells.",
    uses: "GERD, peptic ulcers, H. pylori eradication",
    side_effects: "Headache, diarrhea, hypomagnesemia, fracture risk",
    examples: ["Omeprazole (Omez)", "Pantoprazole (Pantocid)", "Rabeprazole (Razo)"]
  }
];
