
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
  'Antibiotics - Antibacterial',
  'Antimycobacterials', 
  'Antifungals',
  'Antivirals',
  'Antiparasitics',
  'Antineoplastics',
  'Analgesics',
  'Anti-Inflammatory',
  'Antacids & Antiulcerants',
  'Laxatives',
  'Anti-Cough, Anti-Cold & Anti-Allergic',
  'Haematinics & Nutritional Supplements',
  'Antiemetics',
  'Corticosteroids',
  'Cardiovascular',
  'Antidiabetics',
  'Central Nervous System',
  'Respiratory',
  'Hormones & Endocrine',
  'Immunosuppressants',
  'Gastrointestinal',
  'Dermatologicals',
  'Ophthalmic',
  'Otic',
  'Miscellaneous',
  'Ayurvedic/Herbal'
];

export const comprehensiveDrugClasses: DrugClass[] = [
  // Antibiotics - Antibacterial
  {
    id: "penicillins",
    name: "Penicillins",
    category: "Antibiotics - Antibacterial",
    description: "Beta-lactam antibiotics that inhibit bacterial cell wall synthesis.",
    mechanism: "Inhibit bacterial cell wall synthesis by disrupting peptidoglycan cross-linking.",
    uses: "Pneumonia, skin infections, streptococcal infections.",
    side_effects: "Allergic reactions, diarrhea, nausea, rash.",
    examples: ["MOX (Amoxicillin, Sun Pharma)", "PENCOM (Ampicillin, Alembic)"]
  },
  {
    id: "cephalosporins",
    name: "Cephalosporins",
    category: "Antibiotics - Antibacterial",
    description: "Broad-spectrum beta-lactam antibiotics with activity against gram-positive and gram-negative bacteria.",
    mechanism: "Inhibit bacterial cell wall synthesis by binding to penicillin-binding proteins, leading to cell lysis.",
    uses: "Respiratory, urinary, skin, and soft tissue infections.",
    side_effects: "Nausea, diarrhea, allergic reactions, rash.",
    examples: ["ZIFI (Cefixime, FDC Ltd.)", "CEFTUM (Ceftriaxone, GlaxoSmithKline India)"]
  },
  {
    id: "macrolides",
    name: "Macrolides",
    category: "Antibiotics - Antibacterial",
    description: "Antibiotics that inhibit bacterial protein synthesis.",
    mechanism: "Inhibit protein synthesis by binding to the 50S ribosomal subunit.",
    uses: "Respiratory infections, skin infections, STDs (e.g., chlamydia).",
    side_effects: "Nausea, diarrhea, abdominal pain, QT prolongation.",
    examples: ["AZITHROL (Azithromycin, Alembic)", "ROXID (Roxithromycin, Alembic)"]
  },
  {
    id: "tetracyclines",
    name: "Tetracyclines",
    category: "Antibiotics - Antibacterial",
    description: "Broad-spectrum antibiotics that inhibit protein synthesis.",
    mechanism: "Inhibit protein synthesis by binding to the 30S ribosomal subunit.",
    uses: "Acne, respiratory infections, Lyme disease.",
    side_effects: "Photosensitivity, GI upset, tooth discoloration, hepatotoxicity.",
    examples: ["MINICYCLINE (Minocycline, Cipla)", "DOXY-1 (Doxycycline, USV Ltd.)"]
  },
  {
    id: "fluoroquinolones",
    name: "Fluoroquinolones",
    category: "Antibiotics - Antibacterial",
    description: "Broad-spectrum antibiotics targeting DNA replication.",
    mechanism: "Inhibit DNA gyrase and topoisomerase IV, preventing DNA replication.",
    uses: "Urinary tract infections, respiratory infections, skin infections.",
    side_effects: "Tendonitis, QT prolongation, GI upset, photosensitivity.",
    examples: ["CIPLOX (Ciprofloxacin, Cipla)", "NORFLOX (Norfloxacin, Cipla)"]
  },
  {
    id: "oxazolidinones",
    name: "Oxazolidinones",
    category: "Antibiotics - Antibacterial",
    description: "Advanced antibiotics for resistant gram-positive bacteria.",
    mechanism: "Inhibit protein synthesis by binding to the 50S ribosomal subunit, preventing initiation complex formation.",
    uses: "Resistant Gram-positive infections (e.g., MRSA, VRE).",
    side_effects: "Bone marrow suppression, peripheral neuropathy, nausea.",
    examples: ["LIZOLID (Linezolid, Glenmark)", "ZYVOXID (Linezolid, Pfizer India)"]
  },
  {
    id: "aminoglycosides",
    name: "Aminoglycosides",
    category: "Antibiotics - Antibacterial",
    description: "Bactericidal antibiotics effective against gram-negative bacteria.",
    mechanism: "Inhibit protein synthesis by binding to the 30S ribosomal subunit, causing mRNA misreading.",
    uses: "Serious Gram-negative infections, tuberculosis.",
    side_effects: "Nephrotoxicity, ototoxicity, neuromuscular blockade.",
    examples: ["AMIKACIN (Amikacin, Cipla)", "NEBCIN (Tobramycin, Zydus Cadila)"]
  },
  {
    id: "carbapenems",
    name: "Carbapenems",
    category: "Antibiotics - Antibacterial",
    description: "Ultra-broad spectrum beta-lactam antibiotics.",
    mechanism: "Inhibit cell wall synthesis; broad-spectrum activity against Gram-positive and Gram-negative bacteria.",
    uses: "Hospital-acquired infections, multidrug-resistant infections.",
    side_effects: "Seizures, allergic reactions, diarrhea.",
    examples: ["MERONEM (Meropenem, AstraZeneca India)", "IMICID (Imipenem, Ranbaxy)"]
  },
  {
    id: "sulfonamides",
    name: "Sulfonamides",
    category: "Antibiotics - Antibacterial",
    description: "Antibiotics that inhibit bacterial folate synthesis.",
    mechanism: "Inhibit folate synthesis by competing with PABA, halting bacterial growth.",
    uses: "Urinary tract infections, certain protozoal infections.",
    side_effects: "Allergic reactions, rash, photosensitivity, crystalluria.",
    examples: ["BACTRIM (Sulfamethoxazole + Trimethoprim, Abbott India)"]
  },
  {
    id: "glycopeptides",
    name: "Glycopeptides",
    category: "Antibiotics - Antibacterial",
    description: "Cell wall synthesis inhibitors for gram-positive bacteria.",
    mechanism: "Inhibit cell wall synthesis by binding to D-alanyl-D-alanine, preventing peptidoglycan formation.",
    uses: "MRSA, C. difficile infections.",
    side_effects: "Nephrotoxicity, red man syndrome, ototoxicity.",
    examples: ["VANCO (Vancomycin, Cipla)", "VANLID (Vancomycin, Cipla)"]
  },
  {
    id: "nitroimidazoles",
    name: "Nitroimidazoles",
    category: "Antibiotics - Antibacterial",
    description: "Antimicrobials active against anaerobic bacteria and protozoa.",
    mechanism: "Disrupt microbial DNA under anaerobic conditions, leading to cell death.",
    uses: "Anaerobic bacterial infections, protozoal infections (e.g., amoebiasis).",
    side_effects: "Nausea, metallic taste, peripheral neuropathy.",
    examples: ["METROGYL (Metronidazole, JB Chemicals)", "FLAGYL (Metronidazole, Abbott India)"]
  },
  {
    id: "lincosamides",
    name: "Lincosamides",
    category: "Antibiotics - Antibacterial",
    description: "Protein synthesis inhibitors for gram-positive and anaerobic bacteria.",
    mechanism: "Inhibit protein synthesis by binding to the 50S ribosomal subunit.",
    uses: "Skin infections, anaerobic infections.",
    side_effects: "Diarrhea, pseudomembranous colitis, rash.",
    examples: ["CLINCIN (Clindamycin, Alkem Labs)", "DALACIN-C (Clindamycin, Pfizer India)"]
  },

  // Antimycobacterials
  {
    id: "antitubercular-agents",
    name: "Antitubercular Agents",
    category: "Antimycobacterials",
    description: "Specialized antibiotics for tuberculosis treatment.",
    mechanism: "Vary (e.g., inhibit cell wall synthesis, protein synthesis, or metabolism).",
    uses: "Tuberculosis, atypical mycobacterial infections.",
    side_effects: "Hepatotoxicity, peripheral neuropathy, optic neuritis.",
    examples: ["R-CIN (Rifampicin, Lupin)", "PYRAZINAMIDE (Zydus Cadila)"]
  },
  {
    id: "antileprotic-agents",
    name: "Antileprotic Agents",
    category: "Antimycobacterials",
    description: "Specialized antimicrobials for leprosy treatment.",
    mechanism: "Inhibit bacterial folate synthesis or disrupt cell membrane.",
    uses: "Leprosy.",
    side_effects: "Hemolytic anemia, hepatotoxicity, skin discoloration.",
    examples: ["DAPSONE (GSK India)", "CLOFAZIMINE (Clofazimine, Novartis India)"]
  },

  // Antifungals
  {
    id: "azole-antifungals",
    name: "Azoles",
    category: "Antifungals",
    description: "Antifungal agents that disrupt fungal cell membranes.",
    mechanism: "Inhibit ergosterol synthesis by blocking 14-alpha-demethylase, disrupting fungal cell membrane.",
    uses: "Candidiasis, dermatophytosis, systemic fungal infections.",
    side_effects: "Hepatotoxicity, GI upset, rash, QT prolongation.",
    examples: ["FLUKA (Fluconazole, Cipla)", "FORCAN (Fluconazole, Cipla)"]
  },
  {
    id: "polyene-antifungals",
    name: "Polyenes",
    category: "Antifungals",
    description: "Membrane-disrupting antifungals for serious infections.",
    mechanism: "Bind to ergosterol, forming pores in fungal cell membranes, causing leakage.",
    uses: "Systemic fungal infections (e.g., aspergillosis, cryptococcosis).",
    side_effects: "Nephrotoxicity, infusion reactions, hypokalemia.",
    examples: ["AMPHOTRET (Amphotericin B, Bharat Serums)", "FUNGISOME (Amphotericin B, Sun Pharma)"]
  },
  {
    id: "allylamine-antifungals",
    name: "Allylamines",
    category: "Antifungals",
    description: "Ergosterol synthesis inhibitors for dermatophyte infections.",
    mechanism: "Inhibit squalene epoxidase, disrupting ergosterol synthesis.",
    uses: "Dermatophytosis, onychomycosis.",
    side_effects: "GI upset, rash, hepatotoxicity.",
    examples: ["TERBICIP (Terbinafine, Cipla)", "LAMISIL (Terbinafine, Novartis India)"]
  },
  {
    id: "echinocandin-antifungals",
    name: "Echinocandins",
    category: "Antifungals",
    description: "Cell wall synthesis inhibitors for invasive fungal infections.",
    mechanism: "Inhibit beta-glucan synthesis, weakening fungal cell walls.",
    uses: "Invasive candidiasis, aspergillosis.",
    side_effects: "Hepatotoxicity, rash, infusion reactions.",
    examples: ["CANCIDAS (Caspofungin, MSD India)", "MYCAMINE (Micafungin, imported)"]
  },

  // Antivirals
  {
    id: "nucleoside-analogues",
    name: "Nucleoside Analogues",
    category: "Antivirals",
    description: "DNA polymerase inhibitors for viral infections.",
    mechanism: "Inhibit viral DNA polymerase, preventing viral replication.",
    uses: "Herpes, hepatitis, HIV infections.",
    side_effects: "Nausea, headache, bone marrow suppression.",
    examples: ["ZOVIRAX (Acyclovir, GSK India)", "VALCIVIR (Valacyclovir, Cipla)"]
  },
  {
    id: "nnrtis",
    name: "Non-Nucleoside Reverse Transcriptase Inhibitors (NNRTIs)",
    category: "Antivirals",
    description: "HIV reverse transcriptase inhibitors.",
    mechanism: "Bind to HIV reverse transcriptase, inhibiting viral replication.",
    uses: "HIV infection.",
    side_effects: "Rash, hepatotoxicity, CNS effects.",
    examples: ["NEVIR (Nevirapine, Cipla)", "EFAVIR (Efavirenz, Cipla)"]
  },
  {
    id: "protease-inhibitors",
    name: "Protease Inhibitors",
    category: "Antivirals",
    description: "HIV protease inhibitors preventing viral maturation.",
    mechanism: "Inhibit HIV protease, preventing viral maturation.",
    uses: "HIV infection.",
    side_effects: "GI upset, lipodystrophy, hepatotoxicity.",
    examples: ["LOPIMUNE (Lopinavir + Ritonavir, Cipla)", "ATAZOR (Atazanavir, Emcure)"]
  },
  {
    id: "integrase-inhibitors",
    name: "Integrase Inhibitors",
    category: "Antivirals",
    description: "HIV integrase inhibitors preventing DNA integration.",
    mechanism: "Inhibit HIV integrase, preventing viral DNA integration into host genome.",
    uses: "HIV infection.",
    side_effects: "Nausea, headache, insomnia.",
    examples: ["ISENTRESS (Raltegravir, MSD India)", "imported in India"]
  },
  {
    id: "neuraminidase-inhibitors",
    name: "Neuraminidase Inhibitors",
    category: "Antivirals",
    description: "Influenza-specific antiviral agents.",
    mechanism: "Inhibit viral neuraminidase, preventing influenza virus release from infected cells.",
    uses: "Influenza.",
    side_effects: "Nausea, bronchospasm, headache.",
    examples: ["TAMIFLU (Oseltamivir, Roche India)", "FLUVIR (Oseltamivir, Hetero Drugs)"]
  },

  // Antiparasitics
  {
    id: "antimalarials",
    name: "Antimalarials",
    category: "Antiparasitics",
    description: "Antiparasitic agents for malaria prevention and treatment.",
    mechanism: "Interfere with parasite heme detoxification or metabolism.",
    uses: "Malaria prevention and treatment.",
    side_effects: "GI upset, retinopathy (long-term), hemolysis in G6PD deficiency.",
    examples: ["LARIAGO (Chloroquine, Ipca Labs)", "FALCIGO (Artesunate, Zydus Cadila)"]
  },
  {
    id: "anthelmintics",
    name: "Anthelmintics",
    category: "Antiparasitics",
    description: "Agents for treating parasitic worm infections.",
    mechanism: "Paralyze or kill parasitic worms by disrupting neuromuscular function or metabolism.",
    uses: "Helminthic infections (e.g., roundworm, tapeworm).",
    side_effects: "Nausea, abdominal pain, dizziness.",
    examples: ["ZENTEL (Albendazole, GSK India)", "MEBEX (Mebendazole, Cipla)"]
  },
  {
    id: "antiprotozoals",
    name: "Antiprotozoals",
    category: "Antiparasitics",
    description: "Agents targeting protozoal infections.",
    mechanism: "Disrupt protozoal DNA or metabolism.",
    uses: "Amoebiasis, giardiasis, leishmaniasis.",
    side_effects: "Nausea, metallic taste, hepatotoxicity.",
    examples: ["METROGYL (Metronidazole, JB Chemicals)", "TINIBA (Tinidazole, Zydus Cadila)"]
  },

  // Antineoplastics
  {
    id: "alkylating-agents",
    name: "Alkylating Agents",
    category: "Antineoplastics",
    description: "DNA cross-linking agents for cancer treatment.",
    mechanism: "Cross-link DNA, preventing cancer cell division.",
    uses: "Leukemias, lymphomas, solid tumors.",
    side_effects: "Bone marrow suppression, nausea, infertility.",
    examples: ["CYCLOXAN (Cyclophosphamide, Zydus Cadila)", "ENDOXAN (Cyclophosphamide, Baxter India)"]
  },
  {
    id: "antimetabolites",
    name: "Antimetabolites",
    category: "Antineoplastics",
    description: "DNA/RNA synthesis inhibitors for cancer treatment.",
    mechanism: "Inhibit DNA/RNA synthesis by mimicking metabolites.",
    uses: "Leukemias, breast cancer, colorectal cancer.",
    side_effects: "Bone marrow suppression, mucositis, hepatotoxicity.",
    examples: ["XELODA (Capecitabine, Roche India)", "5-FU (Fluorouracil, Biochem Pharma)"]
  },
  {
    id: "topoisomerase-inhibitors",
    name: "Topoisomerase Inhibitors",
    category: "Antineoplastics",
    description: "DNA replication inhibitors for cancer treatment.",
    mechanism: "Inhibit topoisomerase enzymes, preventing DNA replication.",
    uses: "Lung cancer, leukemias, ovarian cancer.",
    side_effects: "Bone marrow suppression, alopecia, cardiotoxicity.",
    examples: ["TOPOTEC (Topotecan, GSK India)", "IRNOCAM (Irinotecan, Dr. Reddy's)"]
  },
  {
    id: "mitotic-inhibitors",
    name: "Mitotic Inhibitors",
    category: "Antineoplastics",
    description: "Microtubule function inhibitors for cancer treatment.",
    mechanism: "Inhibit microtubule function, halting cell division.",
    uses: "Breast cancer, lung cancer, lymphomas.",
    side_effects: "Neuropathy, bone marrow suppression, alopecia.",
    examples: ["TAXOL (Paclitaxel, Cipla)", "DOCETAX (Docetaxel, Cipla)"]
  },
  {
    id: "monoclonal-antibodies",
    name: "Monoclonal Antibodies",
    category: "Antineoplastics",
    description: "Targeted immunotherapy for specific cancers.",
    mechanism: "Bind to specific cancer cell antigens, triggering immune destruction.",
    uses: "Breast cancer, lymphomas, leukemias.",
    side_effects: "Infusion reactions, infections, cardiotoxicity.",
    examples: ["HERCLON (Trastuzumab, Roche India)", "RITUXIMAB (Mabthera, Roche India)"]
  },
  {
    id: "tyrosine-kinase-inhibitors",
    name: "Tyrosine Kinase Inhibitors",
    category: "Antineoplastics",
    description: "Targeted therapy blocking cancer cell signaling.",
    mechanism: "Inhibit tyrosine kinases, blocking cancer cell signaling pathways.",
    uses: "Chronic myeloid leukemia, lung cancer.",
    side_effects: "Fatigue, rash, hepatotoxicity, edema.",
    examples: ["IMATIB (Imatinib, Cipla)", "GEFTINAT (Gefitinib, Natco Pharma)"]
  },

  // Analgesics
  {
    id: "nsaids",
    name: "Non-Steroidal Anti-Inflammatory Drugs (NSAIDs)",
    category: "Analgesics",
    description: "Pain and inflammation relief through COX inhibition.",
    mechanism: "Inhibit COX-1/COX-2 enzymes, reducing prostaglandin synthesis, thus decreasing pain and inflammation.",
    uses: "Pain, inflammation, fever (e.g., arthritis, injuries).",
    side_effects: "GI bleeding, renal impairment, cardiovascular risks.",
    examples: ["VOVERAN (Diclofenac, Novartis India)", "BRUFEN (Ibuprofen, Abbott India)"]
  },
  {
    id: "opioids",
    name: "Opioids",
    category: "Analgesics",
    description: "Potent pain relievers acting on opioid receptors.",
    mechanism: "Bind to opioid receptors, reducing pain perception.",
    uses: "Severe pain (e.g., postoperative, cancer pain).",
    side_effects: "Respiratory depression, constipation, dependence.",
    examples: ["TRAMASURE (Tramadol, Zydus Cadila)", "MORCONTIN (Morphine, Sun Pharma)"]
  },
  {
    id: "non-opioid-analgesics",
    name: "Non-Opioid Analgesics",
    category: "Analgesics",
    description: "Mild to moderate pain relief without opioid effects.",
    mechanism: "Reduce pain perception via peripheral or central mechanisms.",
    uses: "Mild to moderate pain (e.g., headaches, fever).",
    side_effects: "Hepatotoxicity (high doses), GI upset.",
    examples: ["CROCIN (Paracetamol, GSK India)", "CALPOL (Paracetamol, GSK India)"]
  },

  // Anti-Inflammatory
  {
    id: "corticosteroids-anti-inflammatory",
    name: "Corticosteroids",
    category: "Anti-Inflammatory",
    description: "Potent anti-inflammatory agents mimicking cortisol.",
    mechanism: "Inhibit inflammatory mediators (e.g., prostaglandins, cytokines).",
    uses: "Inflammatory disorders, autoimmune diseases, allergies.",
    side_effects: "Weight gain, osteoporosis, hyperglycemia, infections.",
    examples: ["OMNACORTIL (Prednisolone, Macleods)", "DECADRON (Dexamethasone, Wockhardt)"]
  },
  {
    id: "dmards",
    name: "Disease-Modifying Antirheumatic Drugs (DMARDs)",
    category: "Anti-Inflammatory",
    description: "Immune system modulators for rheumatic diseases.",
    mechanism: "Modulate immune response to slow disease progression.",
    uses: "Rheumatoid arthritis, psoriatic arthritis.",
    side_effects: "Hepatotoxicity, bone marrow suppression, infections.",
    examples: ["HCQS (Hydroxychloroquine, Ipca Labs)", "FOLITRAX (Methotrexate, Ipca Labs)"]
  },

  // Antacids & Antiulcerants
  {
    id: "proton-pump-inhibitors",
    name: "Proton Pump Inhibitors (PPIs)",
    category: "Antacids & Antiulcerants",
    description: "Potent acid suppressors for ulcer and reflux treatment.",
    mechanism: "Inhibit H+/K+ ATPase in gastric parietal cells, reducing acid secretion.",
    uses: "GERD, peptic ulcers, acid-related disorders.",
    side_effects: "Headache, diarrhea, vitamin B12 deficiency (long-term).",
    examples: ["RANTAC-D (Omeprazole + Domperidone, JB Chemicals)", "PAN-D (Pantoprazole, Alkem Labs)"]
  },
  {
    id: "h2-receptor-antagonists",
    name: "H2 Receptor Antagonists",
    category: "Antacids & Antiulcerants",
    description: "Acid reduction through histamine receptor blockade.",
    mechanism: "Block histamine H2 receptors, reducing gastric acid secretion.",
    uses: "Ulcers, GERD, dyspepsia.",
    side_effects: "Headache, dizziness, diarrhea.",
    examples: ["RANTAC (Ranitidine, JB Chemicals)", "FAMOCID (Famotidine, Sun Pharma)"]
  },
  {
    id: "antacids",
    name: "Antacids",
    category: "Antacids & Antiulcerants",
    description: "Direct gastric acid neutralizers for heartburn relief.",
    mechanism: "Neutralize gastric acid to relieve heartburn.",
    uses: "Heartburn, acid indigestion, mild GERD.",
    side_effects: "Constipation, diarrhea, hypermagnesemia.",
    examples: ["DIGENE (Aluminum Hydroxide + Magnesium Hydroxide, Abbott India)", "GELUSIL (Magnesium Trisilicate, Pfizer India)"]
  },
  {
    id: "antiulcerants",
    name: "Antiulcerants",
    category: "Antacids & Antiulcerants",
    description: "Ulcer protection through barrier formation.",
    mechanism: "Form protective barriers over ulcers or enhance mucosal defense.",
    uses: "Gastric and duodenal ulcers.",
    side_effects: "Constipation, dizziness, rash.",
    examples: ["SUCRAMAL (Sucralfate, Sun Pharma)", "OXETAC (Oxetacaine, Abbott India)"]
  },

  // Laxatives
  {
    id: "osmotic-laxatives",
    name: "Osmotic Laxatives",
    category: "Laxatives",
    description: "Stool softeners through water retention.",
    mechanism: "Draw water into the intestines, softening stool.",
    uses: "Constipation, bowel preparation.",
    side_effects: "Bloating, diarrhea, electrolyte imbalance.",
    examples: ["CREMAFFIN (Lactulose, Abbott India)", "LACTIHEP (Lactulose, Sun Pharma)"]
  },
  {
    id: "stimulant-laxatives",
    name: "Stimulant Laxatives",
    category: "Laxatives",
    description: "Bowel movement stimulants through peristalsis enhancement.",
    mechanism: "Stimulate intestinal peristalsis.",
    uses: "Acute constipation.",
    side_effects: "Abdominal cramps, diarrhea, dependence.",
    examples: ["DULCOLAX (Bisacodyl, Boehringer Ingelheim India)", "CREMAFFIN PLUS (Sodium Picosulfate, Abbott India)"]
  },
  {
    id: "bulk-forming-laxatives",
    name: "Bulk-Forming Laxatives",
    category: "Laxatives",
    description: "Natural fiber-based stool bulking agents.",
    mechanism: "Absorb water to form soft, bulky stools.",
    uses: "Chronic constipation, IBS.",
    side_effects: "Bloating, flatulence, incomplete evacuation.",
    examples: ["ISABGOL (Psyllium Husk, Dabur India)", "NATUROLAX (Ispaghula, Zydus Cadila)"]
  },

  // Anti-Cough, Anti-Cold & Anti-Allergic
  {
    id: "expectorants",
    name: "Expectorants",
    category: "Anti-Cough, Anti-Cold & Anti-Allergic",
    description: "Mucus thinning agents for productive cough relief.",
    mechanism: "Thin mucus to facilitate expulsion from the respiratory tract.",
    uses: "Productive cough in respiratory infections.",
    side_effects: "Nausea, drowsiness, rash.",
    examples: ["COREX (Guaifenesin, Pfizer India)", "ASCORIL (Guaifenesin + Terbutaline, Glenmark)"]
  },
  {
    id: "antitussives",
    name: "Antitussives",
    category: "Anti-Cough, Anti-Cold & Anti-Allergic",
    description: "Cough suppressants acting on brain centers.",
    mechanism: "Suppress cough reflex by acting on the cough center in the brain.",
    uses: "Non-productive cough.",
    side_effects: "Drowsiness, constipation, dependence (codeine-based).",
    examples: ["CORETUSS (Dextromethorphan, Cipla)", "BENADRYL DR (Dextromethorphan, J&J India)"]
  },
  {
    id: "antihistamines-h1-blockers",
    name: "Antihistamines (H1 Blockers)",
    category: "Anti-Cough, Anti-Cold & Anti-Allergic",
    description: "Allergy relief through histamine receptor blockade.",
    mechanism: "Block histamine H1 receptors, reducing allergic responses.",
    uses: "Allergies, allergic rhinitis, urticaria.",
    side_effects: "Drowsiness, dry mouth, blurred vision.",
    examples: ["ALLEGRA (Fexofenadine, Sanofi India)", "CETRIZINE (Cetirizine, Cipla)"]
  },
  {
    id: "decongestants",
    name: "Decongestants",
    category: "Anti-Cough, Anti-Cold & Anti-Allergic",
    description: "Nasal congestion relief through vasoconstriction.",
    mechanism: "Constrict nasal blood vessels to reduce congestion.",
    uses: "Nasal congestion in colds, allergies.",
    side_effects: "Hypertension, insomnia, tachycardia.",
    examples: ["NASIVION (Oxymetazoline, Merck India)", "SINAREST (Phenylephrine, Centaur Pharma)"]
  },

  // Haematinics & Nutritional Supplements
  {
    id: "haematinics",
    name: "Haematinics",
    category: "Haematinics & Nutritional Supplements",
    description: "Blood formation enhancers for anemia treatment.",
    mechanism: "Increase hemoglobin production by providing iron, vitamin B12, or folic acid.",
    uses: "Iron deficiency anemia, megaloblastic anemia.",
    side_effects: "GI upset, constipation, black stools (iron).",
    examples: ["FERRONIA (Ferrous Ascorbate, Zuventus)", "LIVOGEN (Ferrous Fumarate, Merck India)"]
  },
  {
    id: "vitamins",
    name: "Vitamins",
    category: "Haematinics & Nutritional Supplements",
    description: "Essential vitamin supplements for metabolic functions.",
    mechanism: "Supplement essential vitamins for metabolic functions.",
    uses: "Vitamin deficiencies, general health support.",
    side_effects: "Hypervitaminosis (excessive doses), GI upset.",
    examples: ["BECOZINC (Vitamin B Complex, Dr. Reddy's)", "NEUROBION (Vitamin B Complex, Merck India)"]
  },
  {
    id: "minerals",
    name: "Minerals",
    category: "Haematinics & Nutritional Supplements",
    description: "Essential mineral supplements for various functions.",
    mechanism: "Provide essential minerals for bone health, enzymatic functions.",
    uses: "Mineral deficiencies, osteoporosis.",
    side_effects: "GI upset, hypercalcemia (calcium).",
    examples: ["SHELCA (Calcium Carbonate, Dr. Reddy's)", "CALCIROL (Vitamin D3, Cadila)"]
  },
  {
    id: "antioxidants",
    name: "Antioxidants",
    category: "Haematinics & Nutritional Supplements",
    description: "Free radical scavengers for cellular protection.",
    mechanism: "Neutralize free radicals to prevent cellular damage.",
    uses: "Oxidative stress, general health support.",
    side_effects: "GI upset, allergic reactions.",
    examples: ["OXIVIT (Lycopene + Multivitamins, Sun Pharma)", "ZEVITY (Antioxidants, Intas)"]
  },

  // Antiemetics
  {
    id: "5ht3-receptor-antagonists",
    name: "Serotonin (5-HT3) Receptor Antagonists",
    category: "Antiemetics",
    description: "Nausea and vomiting prevention through serotonin blockade.",
    mechanism: "Block serotonin receptors in gut and brain, reducing nausea signals.",
    uses: "Chemotherapy-induced nausea, postoperative vomiting.",
    side_effects: "Headache, constipation, QT prolongation.",
    examples: ["EMIGO (Ondansetron, Zuventus)", "GRANICIP (Granisetron, Cipla)"]
  },
  {
    id: "dopamine-antagonists",
    name: "Dopamine Antagonists",
    category: "Antiemetics",
    description: "Nausea relief through dopamine receptor blockade.",
    mechanism: "Block dopamine D2 receptors, inhibiting nausea signals.",
    uses: "Nausea, vomiting, gastroparesis.",
    side_effects: "Drowsiness, extrapyramidal symptoms, hyperprolactinemia.",
    examples: ["DOMSTAL (Domperidone, Torrent Pharma)", "REGLAN (Metoclopramide, Cipla)"]
  },
  {
    id: "nk1-receptor-antagonists",
    name: "Neurokinin-1 (NK1) Receptor Antagonists",
    category: "Antiemetics",
    description: "Advanced antiemetics for chemotherapy-induced nausea.",
    mechanism: "Block substance P/NK1 receptors, reducing vomiting signals.",
    uses: "Chemotherapy-induced nausea and vomiting.",
    side_effects: "Fatigue, hiccups, diarrhea.",
    examples: ["EMEND (Aprepitant, MSD India, imported)", "APRECAP (Aprepitant, Cipla)"]
  },

  // Corticosteroids
  {
    id: "systemic-corticosteroids",
    name: "Systemic Corticosteroids",
    category: "Corticosteroids",
    description: "Systemic anti-inflammatory and immunosuppressive agents.",
    mechanism: "Inhibit inflammatory mediators, reducing inflammation.",
    uses: "Autoimmune diseases, allergies, inflammatory disorders.",
    side_effects: "Weight gain, osteoporosis, hyperglycemia, infections.",
    examples: ["OMNACORTIL (Prednisolone, Macleods)", "WYSOLONE (Prednisolone, Pfizer India)"]
  },
  {
    id: "topical-corticosteroids",
    name: "Topical Corticosteroids",
    category: "Corticosteroids",
    description: "Localized anti-inflammatory agents for skin conditions.",
    mechanism: "Reduce local inflammation by inhibiting cytokine release.",
    uses: "Eczema, psoriasis, dermatitis.",
    side_effects: "Skin atrophy, telangiectasia, striae.",
    examples: ["BETNOVATE (Betamethasone, GSK India)", "CLOBETASOL (Tenovate, GSK India)"]
  },

  // Cardiovascular
  {
    id: "arbs",
    name: "Angiotensin II Receptor Blockers (ARBs)",
    category: "Cardiovascular",
    description: "Blood pressure reduction through angiotensin receptor blockade.",
    mechanism: "Block angiotensin II receptors, reducing vasoconstriction and blood pressure.",
    uses: "Hypertension, heart failure.",
    side_effects: "Dizziness, hyperkalemia, renal impairment.",
    examples: ["TELMA (Telmisartan, Glenmark)", "LOSAR (Losartan, Unichem)"]
  },
  {
    id: "ace-inhibitors",
    name: "ACE Inhibitors",
    category: "Cardiovascular",
    description: "Blood pressure reduction through ACE enzyme inhibition.",
    mechanism: "Inhibit angiotensin-converting enzyme, reducing vasoconstriction.",
    uses: "Hypertension, heart failure, post-myocardial infarction.",
    side_effects: "Dry cough, hypotension, hyperkalemia.",
    examples: ["ENAM (Enalapril, Dr. Reddy's)", "RAMIPRIL (Cardace, Sanofi India)"]
  },
  {
    id: "beta-blockers",
    name: "Beta-Blockers",
    category: "Cardiovascular",
    description: "Heart rate and blood pressure reduction through beta receptor blockade.",
    mechanism: "Block beta-adrenergic receptors, reducing heart rate and blood pressure.",
    uses: "Hypertension, angina, arrhythmias.",
    side_effects: "Fatigue, bradycardia, bronchospasm.",
    examples: ["ATEN (Atenolol, Zydus Cadila)", "METROGYL (Metoprolol, JB Chemicals)"]
  },
  {
    id: "calcium-channel-blockers",
    name: "Calcium Channel Blockers",
    category: "Cardiovascular",
    description: "Vasodilation through calcium channel inhibition.",
    mechanism: "Inhibit calcium entry into vascular smooth muscle, causing vasodilation.",
    uses: "Hypertension, angina.",
    side_effects: "Headache, flushing, peripheral edema.",
    examples: ["AMLONG (Amlodipine, Micro Labs)", "CALAPTIN (Verapamil, Abbott India)"]
  },
  {
    id: "statins",
    name: "Statins",
    category: "Cardiovascular",
    description: "Cholesterol reduction through HMG-CoA reductase inhibition.",
    mechanism: "Inhibit HMG-CoA reductase, reducing cholesterol synthesis.",
    uses: "Hypercholesterolemia, cardiovascular event prevention.",
    side_effects: "Myopathy, hepatotoxicity, diabetes risk.",
    examples: ["ATORVA (Atorvastatin, Zydus Cadila)", "ROSUVAS (Rosuvastatin, Sun Pharma)"]
  },
  {
    id: "antiplatelets",
    name: "Antiplatelets",
    category: "Cardiovascular",
    description: "Clot prevention through platelet aggregation inhibition.",
    mechanism: "Inhibit platelet aggregation, reducing clot formation.",
    uses: "Prevent myocardial infarction, stroke.",
    side_effects: "Bleeding, GI upset, rash.",
    examples: ["ECOSPRIN (Aspirin, USV Ltd.)", "CLOPID (Clopidogrel, Cipla)"]
  },
  {
    id: "anticoagulants",
    name: "Anticoagulants",
    category: "Cardiovascular",
    description: "Blood thinning agents for thrombus prevention.",
    mechanism: "Inhibit clotting factors or platelet function to prevent thrombus formation.",
    uses: "Stroke prevention, DVT, pulmonary embolism.",
    side_effects: "Bleeding, thrombocytopenia, hepatotoxicity.",
    examples: ["WARF (Warfarin, Cipla)", "ELiquis (Apixaban, Pfizer India)"]
  },
  {
    id: "diuretics",
    name: "Diuretics",
    category: "Cardiovascular",
    description: "Fluid and blood pressure reduction through increased urination.",
    mechanism: "Increase urine output, reducing blood volume and pressure.",
    uses: "Hypertension, edema, heart failure.",
    side_effects: "Electrolyte imbalances, dehydration, hypotension.",
    examples: ["LASIX (Furosemide, Sanofi India)", "DYTIDE (Spironolactone, Cipla)"]
  },
  {
    id: "nitrates",
    name: "Nitrates",
    category: "Cardiovascular",
    description: "Vasodilators for angina and heart failure treatment.",
    mechanism: "Release nitric oxide, causing vasodilation and reducing cardiac preload.",
    uses: "Angina, heart failure.",
    side_effects: "Headache, hypotension, flushing.",
    examples: ["SORBITRATE (Isosorbide Dinitrate, Abbott India)", "NITROCONTIN (Nitroglycerin, Modi-Mundipharma)"]
  },
  {
    id: "antiarrhythmics",
    name: "Antiarrhythmics",
    category: "Cardiovascular",
    description: "Heart rhythm stabilizers for arrhythmia treatment.",
    mechanism: "Modulate cardiac ion channels to stabilize heart rhythm.",
    uses: "Arrhythmias (e.g., atrial fibrillation, ventricular tachycardia).",
    side_effects: "Proarrhythmia, hypotension, GI upset.",
    examples: ["CORDARONE (Amiodarone, Sanofi India)", "FLECAIN (Flecainide, imported)"]
  },

  // Antidiabetics
  {
    id: "sulfonylureas",
    name: "Sulfonylureas",
    category: "Antidiabetics",
    description: "Insulin secretion stimulators for type 2 diabetes.",
    mechanism: "Stimulate insulin release from pancreatic beta cells.",
    uses: "Type 2 diabetes.",
    side_effects: "Hypoglycemia, weight gain, rash.",
    examples: ["GLYCOMET (Glimepiride, USV Ltd.)", "DAONIL (Glibenclamide, Sanofi India)"]
  },
  {
    id: "biguanides",
    name: "Biguanides",
    category: "Antidiabetics",
    description: "Insulin sensitivity enhancers and glucose production reducers.",
    mechanism: "Reduce hepatic glucose production, increase insulin sensitivity.",
    uses: "Type 2 diabetes.",
    side_effects: "GI upset, lactic acidosis (rare), vitamin B12 deficiency.",
    examples: ["GLYCOMET (Metformin, USV Ltd.)", "GLUCOPHAGE (Metformin, Merck India)"]
  },
  {
    id: "thiazolidinediones",
    name: "Thiazolidinediones",
    category: "Antidiabetics",
    description: "Insulin sensitivity improvers through PPAR-gamma activation.",
    mechanism: "Activate PPAR-gamma receptors, improving insulin sensitivity.",
    uses: "Type 2 diabetes.",
    side_effects: "Weight gain, edema, heart failure risk.",
    examples: ["PIOGLAR (Pioglitazone, Sun Pharma)", "ACTOS (Pioglitazone, Abbott India)"]
  },
  {
    id: "sglt2-inhibitors",
    name: "SGLT2 Inhibitors",
    category: "Antidiabetics",
    description: "Glucose excretion enhancers through kidney inhibition.",
    mechanism: "Inhibit glucose reabsorption in kidneys, increasing urinary glucose excretion.",
    uses: "Type 2 diabetes.",
    side_effects: "Genital infections, dehydration, ketoacidosis.",
    examples: ["JARDIANCE (Empagliflozin, Boehringer Ingelheim India)", "FORXIGA (Dapagliflozin, AstraZeneca India)"]
  },
  {
    id: "dpp4-inhibitors",
    name: "DPP-4 Inhibitors",
    category: "Antidiabetics",
    description: "Incretin enhancers for improved insulin secretion.",
    mechanism: "Inhibit DPP-4 enzyme, increasing incretin levels to enhance insulin secretion.",
    uses: "Type 2 diabetes.",
    side_effects: "Headache, nasopharyngitis, pancreatitis (rare).",
    examples: ["JANUVIA (Sitagliptin, MSD India)", "GALVUS (Vildagliptin, Novartis India)"]
  },
  {
    id: "alpha-glucosidase-inhibitors",
    name: "Alpha-Glucosidase Inhibitors",
    category: "Antidiabetics",
    description: "Carbohydrate absorption slowing agents.",
    mechanism: "Inhibit intestinal enzymes, slowing carbohydrate absorption.",
    uses: "Type 2 diabetes.",
    side_effects: "Flatulence, diarrhea, abdominal pain.",
    examples: ["VOGLIB (Voglibose, Cipla)", "ACARBOSE (Glucobay, Bayer India)"]
  },
  {
    id: "insulin-analogues",
    name: "Insulin and Analogues",
    category: "Antidiabetics",
    description: "Blood glucose regulation through insulin replacement.",
    mechanism: "Mimic endogenous insulin to regulate blood glucose.",
    uses: "Type 1 and type 2 diabetes.",
    side_effects: "Hypoglycemia, weight gain, injection site reactions.",
    examples: ["HUMINSULIN (Insulin, Eli Lilly India)", "LANTUS (Insulin Glargine, Sanofi India)"]
  },

  // Central Nervous System
  {
    id: "anticonvulsants",
    name: "Anticonvulsants",
    category: "Central Nervous System",
    description: "Seizure control through neuronal membrane stabilization.",
    mechanism: "Stabilize neuronal membranes by modulating ion channels or neurotransmitters.",
    uses: "Epilepsy, neuropathic pain, bipolar disorder.",
    side_effects: "Drowsiness, dizziness, hepatotoxicity.",
    examples: ["EPTOIN (Phenytoin, Abbott India)", "TEGRETAL (Carbamazepine, Novartis India)"]
  },
  {
    id: "ssris",
    name: "Antidepressants (SSRIs)",
    category: "Central Nervous System",
    description: "Depression treatment through serotonin reuptake inhibition.",
    mechanism: "Inhibit serotonin reuptake, increasing serotonin levels in the brain.",
    uses: "Depression, anxiety disorders, OCD.",
    side_effects: "Insomnia, sexual dysfunction, nausea.",
    examples: ["SERTALINE (Sertraline, Zydus Cadila)", "ESCITALOP (Escitalopram, Cipla)"]
  },
  {
    id: "snris",
    name: "Antidepressants (SNRIs)",
    category: "Central Nervous System",
    description: "Dual neurotransmitter reuptake inhibitors for depression.",
    mechanism: "Inhibit serotonin and norepinephrine reuptake.",
    uses: "Depression, anxiety, chronic pain.",
    side_effects: "Hypertension, nausea, insomnia.",
    examples: ["DULOXETINE (Duzela, Sun Pharma)", "VENLOR (Venlafaxine, Cipla)"]
  },
  {
    id: "tcas",
    name: "Antidepressants (TCAs)",
    category: "Central Nervous System",
    description: "Traditional antidepressants with multiple receptor effects.",
    mechanism: "Inhibit serotonin and norepinephrine reuptake, also affect other receptors.",
    uses: "Depression, neuropathic pain, enuresis.",
    side_effects: "Dry mouth, constipation, cardiac effects.",
    examples: ["IMIPRAMINE (Depsonil, Abbott India)", "AMITRYPTYLINE (Tryptomer, Wockhardt)"]
  },
  {
    id: "typical-antipsychotics",
    name: "Antipsychotics (Typical)",
    category: "Central Nervous System",
    description: "Traditional antipsychotics for psychotic disorders.",
    mechanism: "Block dopamine D2 receptors, reducing psychotic symptoms.",
    uses: "Schizophrenia, acute psychosis.",
    side_effects: "Extrapyramidal symptoms, tardive dyskinesia, sedation.",
    examples: ["HALOP (Haloperidol, Sun Pharma)", "CHLORPROMAZINE (Largactil, Abbott India)"]
  },
  {
    id: "atypical-antipsychotics",
    name: "Antipsychotics (Atypical)",
    category: "Central Nervous System",
    description: "Modern antipsychotics with improved side effect profiles.",
    mechanism: "Block dopamine and serotonin receptors, improving positive and negative symptoms.",
    uses: "Schizophrenia, bipolar disorder, depression.",
    side_effects: "Weight gain, metabolic syndrome, sedation.",
    examples: ["OLEANZ (Olanzapine, Sun Pharma)", "RISPERDAL (Risperidone, Janssen India)"]
  },
  {
    id: "benzodiazepines",
    name: "Anxiolytics (Benzodiazepines)",
    category: "Central Nervous System",
    description: "GABA enhancers for anxiety and sedation.",
    mechanism: "Enhance GABA activity, reducing anxiety.",
    uses: "Anxiety disorders, insomnia, seizures.",
    side_effects: "Sedation, dependence, memory impairment.",
    examples: ["ATIVAN (Lorazepam, Pfizer India)", "ALPRAX (Alprazolam, Torrent Pharma)"]
  },
  {
    id: "non-benzodiazepine-anxiolytics",
    name: "Anxiolytics (Non-Benzodiazepines)",
    category: "Central Nervous System",
    description: "Alternative anxiolytics with lower dependence risk.",
    mechanism: "Modulate GABA or serotonin to reduce anxiety.",
    uses: "Anxiety, insomnia.",
    side_effects: "Drowsiness, headache, dependence (less than benzodiazepines).",
    examples: ["ZOLFRESH (Zolpidem, Abbott India)", "BUSPIN (Buspirone, Intas)"]
  },
  {
    id: "mood-stabilizers",
    name: "Mood Stabilizers",
    category: "Central Nervous System",
    description: "Bipolar disorder treatment through mood regulation.",
    mechanism: "Stabilize mood by modulating neurotransmitters or ion channels.",
    uses: "Bipolar disorder, mood swings.",
    side_effects: "Tremor, weight gain, renal impairment.",
    examples: ["LITHOSUN (Lithium, Sun Pharma)", "VALPROL (Sodium Valproate, Intas)"]
  },
  {
    id: "stimulants",
    name: "Stimulants",
    category: "Central Nervous System",
    description: "CNS stimulants for ADHD and narcolepsy.",
    mechanism: "Increase dopamine and norepinephrine levels in the brain.",
    uses: "ADHD, narcolepsy.",
    side_effects: "Insomnia, weight loss, cardiovascular effects.",
    examples: ["ADDERALL (Amphetamine, imported, limited availability)", "RITALIN (Methylphenidate, Novartis India)"]
  },
  {
    id: "dopamine-agonists",
    name: "Antiparkinsonian (Dopamine Agonists)",
    category: "Central Nervous System",
    description: "Parkinson's disease treatment through dopamine enhancement.",
    mechanism: "Stimulate dopamine receptors or increase dopamine availability.",
    uses: "Parkinson's disease, restless leg syndrome.",
    side_effects: "Nausea, orthostatic hypotension, hallucinations.",
    examples: ["PRAMIPEX (Pramipexole, Sun Pharma)", "ROPINIROLE (Ropark, Sun Pharma)"]
  },
  {
    id: "antimigraine-agents",
    name: "Antimigraine Agents",
    category: "Central Nervous System",
    description: "Migraine treatment through vascular and neurochemical modulation.",
    mechanism: "Constrict cranial blood vessels or modulate serotonin receptors.",
    uses: "Migraine prevention and treatment.",
    side_effects: "Nausea, dizziness, chest tightness.",
    examples: ["SUMINAT (Sumatriptan, Sun Pharma)", "RIZACT (Rizatriptan, Cipla)"]
  },

  // Respiratory
  {
    id: "beta2-agonists",
    name: "Bronchodilators (Beta-2 Agonists)",
    category: "Respiratory",
    description: "Bronchial smooth muscle relaxants for asthma and COPD.",
    mechanism: "Stimulate beta-2 receptors, relaxing bronchial smooth muscle.",
    uses: "Asthma, COPD.",
    side_effects: "Tremor, tachycardia, hypokalemia.",
    examples: ["ASTHALIN (Salbutamol, Cipla)", "FORACORT (Formoterol, Cipla)"]
  },
  {
    id: "anticholinergic-bronchodilators",
    name: "Bronchodilators (Anticholinergics)",
    category: "Respiratory",
    description: "Muscarinic receptor blockers for COPD treatment.",
    mechanism: "Block muscarinic receptors, reducing bronchoconstriction.",
    uses: "COPD, asthma.",
    side_effects: "Dry mouth, constipation, urinary retention.",
    examples: ["TIOVA (Tiotropium, Cipla)", "IPRAVENT (Ipratropium, Cipla)"]
  },
  {
    id: "leukotriene-antagonists",
    name: "Leukotriene Receptor Antagonists",
    category: "Respiratory",
    description: "Anti-inflammatory agents for asthma control.",
    mechanism: "Block leukotriene receptors, reducing inflammation and bronchoconstriction.",
    uses: "Asthma, allergic rhinitis.",
    side_effects: "Headache, GI upset, hepatotoxicity.",
    examples: ["MONTAIR (Montelukast, Cipla)", "SINGULAIR (Montelukast, MSD India)"]
  },
  {
    id: "mast-cell-stabilizers",
    name: "Mast Cell Stabilizers",
    category: "Respiratory",
    description: "Allergy prevention through mast cell degranulation inhibition.",
    mechanism: "Prevent mast cell degranulation, reducing histamine release.",
    uses: "Asthma, allergic conjunctivitis.",
    side_effects: "Throat irritation, bitter taste, cough.",
    examples: ["CROMAL (Cromolyn Sodium, Cipla)", "ALERNA (Nedocromil, imported)"]
  },

  // Hormones & Endocrine
  {
    id: "thyroid-hormones",
    name: "Thyroid Hormones",
    category: "Hormones & Endocrine",
    description: "Thyroid hormone replacement for hypothyroidism.",
    mechanism: "Replace or supplement thyroid hormones to regulate metabolism.",
    uses: "Hypothyroidism, goiter.",
    side_effects: "Palpitations, weight loss, heat intolerance.",
    examples: ["THYRONORM (Levothyroxine, Abbott India)", "ELTROXIN (Levothyroxine, GSK India)"]
  },
  {
    id: "antithyroid-drugs",
    name: "Antithyroid Drugs",
    category: "Hormones & Endocrine",
    description: "Thyroid hormone synthesis inhibitors for hyperthyroidism.",
    mechanism: "Inhibit thyroid hormone synthesis or release.",
    uses: "Hyperthyroidism, Graves' disease.",
    side_effects: "Rash, agranulocytosis, hepatotoxicity.",
    examples: ["NEO-MERCAZOLE (Carbimazole, Abbott India)", "PTU (Propylthiouracil, Macleods)"]
  },
  {
    id: "endocrine-corticosteroids",
    name: "Corticosteroids (Endocrine)",
    category: "Hormones & Endocrine",
    description: "Cortisol replacement for adrenal insufficiency.",
    mechanism: "Mimic cortisol, regulating metabolism and immune response.",
    uses: "Adrenal insufficiency, autoimmune disorders.",
    side_effects: "Cushing's syndrome, osteoporosis, hyperglycemia.",
    examples: ["DECADRON (Dexamethasone, Wockhardt)", "HYDROCORT (Hydrocortisone, Abbott India)"]
  },
  {
    id: "estrogens",
    name: "Estrogens",
    category: "Hormones & Endocrine",
    description: "Female hormone replacement and contraception.",
    mechanism: "Mimic estrogen, regulating reproductive and systemic functions.",
    uses: "Menopause, contraception, osteoporosis.",
    side_effects: "Nausea, breast tenderness, thromboembolism risk.",
    examples: ["ESTRABET (Estradiol, Abbott India)", "PREMARIN (Conjugated Estrogens, Pfizer India)"]
  },
  {
    id: "progestins",
    name: "Progestins",
    category: "Hormones & Endocrine",
    description: "Progesterone analogs for reproductive health.",
    mechanism: "Mimic progesterone, regulating reproductive functions.",
    uses: "Menstrual disorders, contraception, HRT.",
    side_effects: "Weight gain, mood changes, bloating.",
    examples: ["REGESTRONE (Norethisterone, Torrent Pharma)", "DEPO-PROVERA (Medroxyprogesterone, Pfizer India)"]
  },
  {
    id: "androgens",
    name: "Androgens",
    category: "Hormones & Endocrine",
    description: "Male hormone replacement therapy.",
    mechanism: "Mimic testosterone, promoting male characteristics and protein synthesis.",
    uses: "Hypogonadism, delayed puberty.",
    side_effects: "Acne, hepatotoxicity, prostate enlargement.",
    examples: ["SUSTANON (Testosterone, Zydus Cadila)", "TESTOVIRON (Testosterone, Bayer India)"]
  },
  {
    id: "growth-hormone-analogues",
    name: "Growth Hormone Analogues",
    category: "Hormones & Endocrine",
    description: "Growth hormone replacement for deficiency states.",
    mechanism: "Stimulate growth or mimic growth hormone effects.",
    uses: "Growth hormone deficiency, Turner syndrome.",
    side_effects: "Joint pain, edema, insulin resistance.",
    examples: ["NORDITROPIN (Somatropin, Novo Nordisk India)", "GENOTROPIN (Somatropin, Pfizer India)"]
  },
  {
    id: "gnrh-analogues",
    name: "GnRH Analogues",
    category: "Hormones & Endocrine",
    description: "Gonadotropin regulation for hormone-dependent conditions.",
    mechanism: "Modulate gonadotropin release, affecting sex hormone production.",
    uses: "Prostate cancer, endometriosis, precocious puberty.",
    side_effects: "Hot flashes, bone loss, fatigue.",
    examples: ["LUPRIDE (Leuprolide, Sun Pharma)", "ZOLADEX (Goserelin, AstraZeneca India)"]
  },

  // Immunosuppressants
  {
    id: "calcineurin-inhibitors",
    name: "Calcineurin Inhibitors",
    category: "Immunosuppressants",
    description: "T-cell activation inhibitors for transplant rejection prevention.",
    mechanism: "Inhibit T-cell activation by blocking calcineurin.",
    uses: "Organ transplant rejection, autoimmune diseases.",
    side_effects: "Nephrotoxicity, hypertension, tremors.",
    examples: ["PANGRAF (Tacrolimus, Panacea Biotec)", "SANDIMMUN (Cyclosporine, Novartis India)"]
  },
  {
    id: "mtor-inhibitors",
    name: "mTOR Inhibitors",
    category: "Immunosuppressants",
    description: "Immune cell proliferation inhibitors.",
    mechanism: "Inhibit mTOR pathway, reducing immune cell proliferation.",
    uses: "Transplant rejection, certain cancers.",
    side_effects: "Mouth ulcers, hyperlipidemia, pneumonitis.",
    examples: ["SIROBOOM (Sirolimus, Biocon)", "EVEROLIMUS (Certican, Novartis India)"]
  },
  {
    id: "antimetabolite-immunosuppressants",
    name: "Antimetabolite Immunosuppressants",
    category: "Immunosuppressants",
    description: "Purine synthesis inhibitors for immune suppression.",
    mechanism: "Inhibit purine synthesis, reducing immune cell proliferation.",
    uses: "Autoimmune diseases, transplant rejection.",
    side_effects: "Bone marrow suppression, hepatotoxicity.",
    examples: ["IMMURAN (Azathioprine, GSK India)", "MYCOPHEN (Mycophenolate, Panacea Biotec)"]
  },

  // Gastrointestinal
  {
    id: "antispasmodics",
    name: "Antispasmodics",
    category: "Gastrointestinal",
    description: "Smooth muscle relaxants for GI and urinary spasms.",
    mechanism: "Relax smooth muscles in the GI or urinary tract.",
    uses: "IBS, abdominal cramps, urinary spasms.",
    side_effects: "Dry mouth, constipation, blurred vision.",
    examples: ["MEBIZ (Mebeverine, Abbott India)", "CYCLOSPASMOL (Dicyclomine, Zydus Cadila)"]
  },
  {
    id: "antidiarrheals",
    name: "Antidiarrheals",
    category: "Gastrointestinal",
    description: "Intestinal motility reducers for diarrhea control.",
    mechanism: "Slow intestinal motility or absorb toxins.",
    uses: "Acute and chronic diarrhea.",
    side_effects: "Constipation, drowsiness, nausea.",
    examples: ["LOPAMIDE (Loperamide, Torrent Pharma)", "REDOTIL (Racecadotril, Dr. Reddy's)"]
  },
  {
    id: "prokinetics",
    name: "Prokinetics",
    category: "Gastrointestinal",
    description: "GI motility enhancers for gastroparesis and GERD.",
    mechanism: "Enhance GI motility by stimulating serotonin or dopamine receptors.",
    uses: "Gastroparesis, GERD.",
    side_effects: "Drowsiness, extrapyramidal symptoms, diarrhea.",
    examples: ["GANATON (Itopride, Abbott India)", "DOMSTAL (Domperidone, Torrent Pharma)"]
  },
  {
    id: "digestive-enzymes",
    name: "Enzymes (Digestive)",
    category: "Gastrointestinal",
    description: "Digestive aid enzymes for pancreatic insufficiency.",
    mechanism: "Break down carbohydrates, proteins, or fats to aid digestion.",
    uses: "Pancreatic insufficiency, digestive disorders.",
    side_effects: "GI upset, allergic reactions.",
    examples: ["CREON (Pancreatin, Abbott India)", "DIGIPEP (Fungal Diastase + Pepsin, Intas)"]
  },
  {
    id: "probiotics",
    name: "Probiotics",
    category: "Gastrointestinal",
    description: "Beneficial bacteria for gut health restoration.",
    mechanism: "Restore gut microbiota balance.",
    uses: "Diarrhea, IBS, gut health support.",
    side_effects: "Bloating, flatulence, rare infections.",
    examples: ["ECONORM (Saccharomyces boulardii, Dr. Reddy's)", "VIZYLAC (Lactobacillus, Unichem)"]
  },

  // Dermatologicals
  {
    id: "topical-antibacterials",
    name: "Topical Antibacterials",
    category: "Dermatologicals",
    description: "Skin infection treatment through topical antibiotic application.",
    mechanism: "Kill or inhibit bacterial growth on skin or mucous membranes.",
    uses: "Skin infections, wounds.",
    side_effects: "Skin irritation, contact dermatitis.",
    examples: ["BACTROBAN (Mupirocin, GSK India)", "NEOSPORIN (Neomycin, GSK India)"]
  },
  {
    id: "topical-antifungals",
    name: "Topical Antifungals",
    category: "Dermatologicals",
    description: "Topical treatment for fungal skin infections.",
    mechanism: "Inhibit fungal cell membrane or wall synthesis.",
    uses: "Tinea infections, candidiasis.",
    side_effects: "Skin irritation, burning, rash.",
    examples: ["CANDID (Clotrimazole, Glenmark)", "ZOCON (Fluconazole, FDC Ltd.)"]
  },
  {
    id: "keratolytics",
    name: "Keratolytics",
    category: "Dermatologicals",
    description: "Skin shedding aids for hyperkeratotic conditions.",
    mechanism: "Soften or dissolve keratin, aiding skin shedding.",
    uses: "Acne, psoriasis, warts.",
    side_effects: "Skin irritation, redness, peeling.",
    examples: ["SALICYLIC ACID (Saslic, Cipla)", "RETIN-A (Tretinoin, J&J India)"]
  },
  {
    id: "emollients",
    name: "Emollients",
    category: "Dermatologicals",
    description: "Skin moisturizers and protective barrier formers.",
    mechanism: "Hydrate and soften skin, forming a protective barrier.",
    uses: "Dry skin, eczema, psoriasis.",
    side_effects: "Greasiness, allergic reactions (rare).",
    examples: ["MOISTUREX (Urea, Ranbaxy)", "CETAPHIL (Emollient, Galderma India)"]
  },

  // Ophthalmic
  {
    id: "mydriatics-cycloplegics",
    name: "Mydriatics/Cycloplegics",
    category: "Ophthalmic",
    description: "Pupil dilators for eye examinations and inflammation.",
    mechanism: "Block muscarinic receptors or stimulate adrenergic receptors, dilating pupils.",
    uses: "Eye exams, uveitis.",
    side_effects: "Blurred vision, photophobia, increased intraocular pressure.",
    examples: ["TROPICACYL (Tropicamide, Sun Pharma)", "ATROPINE (Atropine, FDC Ltd.)"]
  },
  {
    id: "anti-glaucoma-agents",
    name: "Anti-Glaucoma Agents",
    category: "Ophthalmic",
    description: "Intraocular pressure reducers for glaucoma treatment.",
    mechanism: "Reduce intraocular pressure by decreasing aqueous humor production or increasing outflow.",
    uses: "Glaucoma, ocular hypertension.",
    side_effects: "Eye irritation, blurred vision, systemic effects (beta-blockers).",
    examples: ["TRAVATAN (Travoprost, Alcon India)", "BETAGAN (Levobunolol, Allergan India)"]
  },
  {
    id: "ophthalmic-anti-infectives",
    name: "Ophthalmic Anti-Infectives",
    category: "Ophthalmic",
    description: "Eye infection treatment through topical antimicrobials.",
    mechanism: "Kill or inhibit bacteria, viruses, or fungi in the eye.",
    uses: "Conjunctivitis, keratitis.",
    side_effects: "Eye irritation, burning, allergic reactions.",
    examples: ["CIPLOX-D (Ciprofloxacin, Cipla)", "VIGAMOX (Moxifloxacin, Alcon India)"]
  },

  // Otic
  {
    id: "otic-anti-infectives",
    name: "Otic Anti-Infectives",
    category: "Otic",
    description: "Ear infection treatment through topical antimicrobials.",
    mechanism: "Kill or inhibit bacteria or fungi in the ear canal.",
    uses: "Otitis externa, otitis media.",
    side_effects: "Ear irritation, itching, hearing changes.",
    examples: ["CIPLOX-D (Ciprofloxacin + Dexamethasone, Cipla)", "CANDIBIOTIC (Chloramphenicol + Clotrimazole, Glenmark)"]
  },

  // Miscellaneous
  {
    id: "urinary-antiseptics",
    name: "Urinary Antiseptics",
    category: "Miscellaneous",
    description: "Urinary tract infection treatment through selective antimicrobials.",
    mechanism: "Inhibit bacterial growth in the urinary tract.",
    uses: "Urinary tract infections.",
    side_effects: "GI upset, rash, hemolysis (G6PD deficiency).",
    examples: ["NITROFUR (Nitrofurantoin, Sun Pharma)", "URIFAST (Nitrofurantoin, Cipla)"]
  },
  {
    id: "antivertigo-agents",
    name: "Antivertigo Agents",
    category: "Miscellaneous",
    description: "Vertigo and dizziness treatment through vestibular modulation.",
    mechanism: "Improve blood flow or modulate vestibular system activity.",
    uses: "Vertigo, Meniere's disease.",
    side_effects: "Drowsiness, GI upset, dry mouth.",
    examples: ["VERTIN (Betahistine, Abbott India)", "STUGERON (Cinnarizine, J&J India)"]
  },
  {
    id: "alpha-blockers-misc",
    name: "Alpha-Blockers",
    category: "Miscellaneous",
    description: "Smooth muscle relaxants for BPH and hypertension.",
    mechanism: "Block alpha-adrenergic receptors, relaxing smooth muscles in prostate and blood vessels.",
    uses: "BPH, hypertension.",
    side_effects: "Hypotension, dizziness, nasal congestion.",
    examples: ["UROFOS (Tamsulosin, Cipla)", "ALFUZOSIN (Alfusin, Cipla)"]
  },
  {
    id: "5-alpha-reductase-inhibitors",
    name: "5-Alpha Reductase Inhibitors",
    category: "Miscellaneous",
    description: "DHT production inhibitors for BPH and hair loss.",
    mechanism: "Inhibit conversion of testosterone to DHT.",
    uses: "BPH, male pattern baldness.",
    side_effects: "Sexual dysfunction, breast tenderness, rash.",
    examples: ["FINPECIA (Finasteride, Cipla)", "DUTAS (Dutasteride, Dr. Reddy's)"]
  },
  {
    id: "phosphodiesterase-inhibitors",
    name: "Phosphodiesterase Inhibitors",
    category: "Miscellaneous",
    description: "Smooth muscle relaxants for erectile dysfunction and pulmonary hypertension.",
    mechanism: "Inhibit PDE-5, increasing cGMP, leading to smooth muscle relaxation.",
    uses: "Erectile dysfunction, pulmonary hypertension.",
    side_effects: "Headache, flushing, visual disturbances.",
    examples: ["MANFORCE (Sildenafil, Mankind Pharma)", "CAVERTA (Sildenafil, Ranbaxy)"]
  },
  {
    id: "immunostimulants",
    name: "Immunostimulants",
    category: "Miscellaneous",
    description: "Immune system enhancers for immunodeficiency states.",
    mechanism: "Enhance immune response by stimulating cytokine production or immune cells.",
    uses: "Immunodeficiency, cancer immunotherapy.",
    side_effects: "Fever, fatigue, injection site reactions.",
    examples: ["IMUNOCIN (Levamisole, Cipla)", "IMMUNACE (Immunostimulant, Meyer Organics)"]
  },
  {
    id: "antitoxins-vaccines",
    name: "Antitoxins/Vaccines",
    category: "Miscellaneous",
    description: "Immunity providers against infectious diseases and toxins.",
    mechanism: "Neutralize toxins or stimulate immunity against pathogens.",
    uses: "Prevent infectious diseases, neutralize toxins (e.g., tetanus).",
    side_effects: "Injection site reactions, fever, allergic reactions.",
    examples: ["TETANUS TOXOID (Serum Institute of India)", "VAXIGRIP (Influenza Vaccine, Sanofi India)"]
  },

  // Ayurvedic/Herbal
  {
    id: "uterine-tonics",
    name: "Uterine Tonics",
    category: "Ayurvedic/Herbal",
    description: "Herbal formulations for women's reproductive health.",
    mechanism: "Support uterine health via herbal ingredients.",
    uses: "Menstrual disorders, reproductive health support.",
    side_effects: "GI upset, allergic reactions (rare).",
    examples: ["EVECARE (Himalaya)", "M2-TONE (Charak Pharma)"]
  },
  {
    id: "liver-tonics",
    name: "Liver Tonics",
    category: "Ayurvedic/Herbal",
    description: "Hepatoprotective herbal formulations.",
    mechanism: "Enhance liver function and detoxification via herbal extracts.",
    uses: "Liver disorders, jaundice, hepatoprotection.",
    side_effects: "GI upset, hypersensitivity.",
    examples: ["LIV.52 (Himalaya)", "LIVFIT (Dabur India)"]
  },
  {
    id: "herbal-combinations",
    name: "Herbal Combinations",
    category: "Ayurvedic/Herbal",
    description: "Multi-herb formulations for general health support.",
    mechanism: "Provide synergistic effects for various health benefits.",
    uses: "Digestion, vitality, organ support.",
    side_effects: "GI upset, allergic reactions.",
    examples: ["CHYAWANPRASH (Dabur India)", "SEPTILIN (Himalaya)"]
  }
];
