export interface DrugRecommendation {
  name: string;
  class: string;
  dosage: string;
  frequency: string;
  duration: string;
  whenToTake: string;
  howToTake: string;
  sideEffects: string[];
  contraindications: string[];
  foodInteractions: string;
  precautions: string[];
}

export interface DiseaseInfo {
  id: string;
  name: string;
  category: string;
  description: string;
  symptoms: string[];
  severity: 'mild' | 'moderate' | 'severe';
  commonSymptoms: string[];
  associatedSymptoms: string[];
  drugRecommendations: DrugRecommendation[];
  generalAdvice: string[];
  whenToSeeDoctor: string[];
  searchKeywords: string[];
}

export const diseaseDatabase: DiseaseInfo[] = [
  {
    id: "fever-mild",
    name: "Mild Fever",
    category: "Infectious/Inflammatory",
    description: "Body temperature between 100.4°F-102°F (38°C-38.9°C) with minimal associated symptoms",
    symptoms: ["Low-grade fever", "Mild fatigue", "Slight headache"],
    severity: "mild",
    commonSymptoms: ["fever", "tiredness"],
    associatedSymptoms: ["headache", "muscle aches"],
    drugRecommendations: [
      {
        name: "Paracetamol/Acetaminophen",
        class: "Analgesic-Antipyretic",
        dosage: "500-1000mg",
        frequency: "Every 6-8 hours",
        duration: "3-5 days",
        whenToTake: "With or without food",
        howToTake: "Oral tablets with water",
        sideEffects: ["Rare: liver damage with overdose", "Allergic reactions"],
        contraindications: ["Severe liver disease", "Alcohol dependence"],
        foodInteractions: "Avoid alcohol",
        precautions: ["Do not exceed 4g daily", "Check other medications for paracetamol content"]
      }
    ],
    generalAdvice: ["Rest and hydration", "Monitor temperature", "Light diet"],
    whenToSeeDoctor: ["Fever persists >3 days", "Temperature >102°F", "Severe symptoms develop"],
    searchKeywords: ["fever", "mild fever", "low grade fever", "temperature"]
  },
  
  {
    id: "mild-bacterial-impetigo",
    name: "Mild Bacterial Infections (Impetigo)",
    category: "Infectious/Antibacterial",
    description: "Superficial bacterial infections caused by Streptococcus or Staphylococcus species affecting skin",
    symptoms: ["Red, itchy sores", "Mild fever", "Localized swelling"],
    severity: "mild",
    commonSymptoms: ["skin sores", "itching", "redness"],
    associatedSymptoms: ["mild fever", "localized swelling"],
    drugRecommendations: [
      {
        name: "Amoxicillin (Mox by Sun Pharma)",
        class: "Penicillin Antibiotic",
        dosage: "500 mg",
        frequency: "Three times daily",
        duration: "7–10 days",
        whenToTake: "With or without food",
        howToTake: "Swallow capsule with water",
        sideEffects: ["Nausea", "Diarrhea", "Rash"],
        contraindications: ["Penicillin allergy", "Infectious mononucleosis"],
        foodInteractions: "Avoid with tetracycline; may reduce efficacy of oral contraceptives",
        precautions: ["Monitor for allergic reactions", "Complete full course"]
      }
    ],
    generalAdvice: ["Keep affected area clean", "Stay hydrated", "Maintain good hygiene"],
    whenToSeeDoctor: ["Symptoms persist beyond 7 days", "Fever exceeds 100.4°F", "Signs of spreading infection"],
    searchKeywords: ["impetigo", "skin infection", "bacterial infection", "sores"]
  },
  
  {
    id: "mild-bacterial-sinusitis",
    name: "Mild Sinusitis",
    category: "Respiratory/Antibacterial",
    description: "Mild sinus infections caused by bacterial pathogens",
    symptoms: ["Nasal congestion", "Mild facial pain", "Discharge"],
    severity: "mild",
    commonSymptoms: ["congestion", "facial pain", "discharge"],
    associatedSymptoms: ["mild fever", "headache"],
    drugRecommendations: [
      {
        name: "Cefixime (Zifi by FDC Ltd.)",
        class: "Cephalosporin Antibiotic",
        dosage: "200 mg",
        frequency: "Twice daily",
        duration: "7 days",
        whenToTake: "With food to enhance absorption",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Diarrhea", "Abdominal pain"],
        contraindications: ["Cephalosporin allergy"],
        foodInteractions: "Avoid with antacids; may interact with warfarin",
        precautions: ["Assess renal function"]
      }
    ],
    generalAdvice: ["Use saline nasal sprays", "Stay hydrated", "Rest"],
    whenToSeeDoctor: ["Symptoms persist beyond 7 days", "High fever", "Severe facial pain"],
    searchKeywords: ["sinusitis", "sinus infection", "nasal congestion", "facial pain"]
  },

  {
    id: "moderate-pneumonia",
    name: "Community-Acquired Pneumonia",
    category: "Respiratory/Antibacterial",
    description: "Moderate bacterial lung infection requiring systemic antibiotics, commonly caused by Streptococcus pneumoniae",
    symptoms: ["Cough", "Fever", "Chest pain", "Shortness of breath"],
    severity: "moderate",
    commonSymptoms: ["cough", "fever", "chest pain"],
    associatedSymptoms: ["shortness of breath", "chills", "fatigue"],
    drugRecommendations: [
      {
        name: "Azithromycin (Azithral by Alembic)",
        class: "Macrolide Antibiotic",
        dosage: "500 mg on day 1, then 250 mg",
        frequency: "Once daily",
        duration: "5 days",
        whenToTake: "1 hour before or 2 hours after food",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Nausea", "Abdominal pain", "Hepatotoxicity"],
        contraindications: ["Cholestatic jaundice history", "Macrolide allergy"],
        foodInteractions: "Avoid antacids; may interact with warfarin",
        precautions: ["Monitor liver function"]
      }
    ],
    generalAdvice: ["Rest", "Maintain hydration", "Use humidifiers"],
    whenToSeeDoctor: ["High fever >102°F", "Worsening symptoms", "Difficulty breathing"],
    searchKeywords: ["pneumonia", "lung infection", "chest infection", "respiratory infection"]
  },

  {
    id: "moderate-uti",
    name: "Moderate Urinary Tract Infection",
    category: "Urogenital/Antibacterial",
    description: "Bacterial urinary tract infection commonly caused by E. coli requiring systemic treatment",
    symptoms: ["Dysuria", "Urgency", "Frequency", "Lower abdominal pain"],
    severity: "moderate",
    commonSymptoms: ["burning urination", "urgency", "frequency"],
    associatedSymptoms: ["lower abdominal pain", "cloudy urine"],
    drugRecommendations: [
      {
        name: "Ciprofloxacin (Ciplox by Cipla)",
        class: "Fluoroquinolone Antibiotic",
        dosage: "500 mg",
        frequency: "Twice daily",
        duration: "7–14 days",
        whenToTake: "Avoid dairy products",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Tendonitis", "Photosensitivity"],
        contraindications: ["Myasthenia gravis", "Tendon disorders"],
        foodInteractions: "Avoid calcium-rich foods; may interact with theophylline",
        precautions: ["Discontinue if tendon pain occurs"]
      }
    ],
    generalAdvice: ["Maintain hydration", "Avoid bladder irritants", "Complete antibiotic course"],
    whenToSeeDoctor: ["High fever", "Worsening symptoms", "Blood in urine"],
    searchKeywords: ["uti", "urinary infection", "bladder infection", "dysuria"]
  },

  {
    id: "severe-sepsis",
    name: "Sepsis",
    category: "Infectious/Critical",
    description: "Life-threatening bacterial infection requiring immediate broad-spectrum antibiotics, often caused by resistant bacteria",
    symptoms: ["High fever", "Rapid heart rate", "Confusion", "Respiratory distress"],
    severity: "severe",
    commonSymptoms: ["high fever", "confusion", "rapid heart rate"],
    associatedSymptoms: ["hypotension", "organ dysfunction", "septic shock"],
    drugRecommendations: [
      {
        name: "Meropenem (Meronem by AstraZeneca India)",
        class: "Carbapenem Antibiotic",
        dosage: "1 g IV",
        frequency: "Every 8 hours",
        duration: "7–14 days",
        whenToTake: "Administered in hospital",
        howToTake: "IV infusion over 15–30 minutes",
        sideEffects: ["Seizures", "Diarrhea"],
        contraindications: ["Carbapenem allergy"],
        foodInteractions: "No food interaction; monitor with valproic acid",
        precautions: ["Monitor renal function", "Seizure risk"]
      },
      {
        name: "Vancomycin (Vanlid by Cipla)",
        class: "Glycopeptide Antibiotic",
        dosage: "15–20 mg/kg IV",
        frequency: "Every 8–12 hours",
        duration: "7–21 days",
        whenToTake: "Administered in hospital",
        howToTake: "Slow IV infusion over 1–2 hours",
        sideEffects: ["Red man syndrome", "Nephrotoxicity"],
        contraindications: ["Vancomycin allergy"],
        foodInteractions: "No food interaction; monitor with nephrotoxic drugs",
        precautions: ["Monitor serum levels", "Avoid rapid infusion"]
      }
    ],
    generalAdvice: ["Hospitalization required", "Follow infection control measures", "Maintain hydration"],
    whenToSeeDoctor: ["Immediate medical attention for fever >103°F", "Altered mental status", "Shock signs"],
    searchKeywords: ["sepsis", "severe infection", "blood infection", "critical illness"]
  },

  {
    id: "superficial-tinea",
    name: "Tinea Pedis (Athlete's Foot)",
    category: "Dermatological/Antifungal",
    description: "Superficial fungal infection of the feet caused by dermatophytes",
    symptoms: ["Itchy, scaly rash", "Cracked skin", "Burning sensation"],
    severity: "mild",
    commonSymptoms: ["itchy feet", "scaling", "rash"],
    associatedSymptoms: ["burning", "cracked skin", "odor"],
    drugRecommendations: [
      {
        name: "Terbinafine (Terbicip by Cipla)",
        class: "Allylamine Antifungal",
        dosage: "250 mg",
        frequency: "Once daily",
        duration: "2–6 weeks",
        whenToTake: "With food",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Hepatotoxicity", "Taste disturbance"],
        contraindications: ["Active liver disease"],
        foodInteractions: "Avoid alcohol; may interact with beta-blockers",
        precautions: ["Monitor liver function tests"]
      }
    ],
    generalAdvice: ["Keep feet dry", "Avoid tight footwear", "Change socks daily"],
    whenToSeeDoctor: ["Persistent symptoms after 2 weeks", "Spreading infection", "Secondary bacterial infection"],
    searchKeywords: ["athlete's foot", "tinea pedis", "foot fungus", "itchy feet"]
  },

  {
    id: "oral-candidiasis",
    name: "Oral Candidiasis (Thrush)",
    category: "Oral/Antifungal",
    description: "Fungal infection of the mouth and throat caused by Candida species",
    symptoms: ["White patches in mouth", "Burning sensation", "Bad breath"],
    severity: "mild",
    commonSymptoms: ["white patches", "mouth pain", "bad breath"],
    associatedSymptoms: ["burning", "difficulty swallowing", "taste changes"],
    drugRecommendations: [
      {
        name: "Fluconazole (Forcan by Cipla)",
        class: "Triazole Antifungal",
        dosage: "150 mg",
        frequency: "Single dose",
        duration: "1 day",
        whenToTake: "With or without food",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Nausea", "Headache"],
        contraindications: ["Azole allergy", "QT prolongation"],
        foodInteractions: "Avoid rifampicin; may interact with warfarin",
        precautions: ["Monitor for QT prolongation"]
      }
    ],
    generalAdvice: ["Maintain oral hygiene", "Avoid sugary foods", "Use soft toothbrush"],
    whenToSeeDoctor: ["Persistent symptoms", "Difficulty swallowing", "Systemic symptoms"],
    searchKeywords: ["oral thrush", "candidiasis", "mouth infection", "white patches"]
  },

  {
    id: "invasive-candidiasis",
    name: "Invasive Candidiasis",
    category: "Infectious/Critical",
    description: "Severe systemic fungal infection affecting internal organs, often in immunocompromised patients",
    symptoms: ["Fever", "Chills", "Organ-specific symptoms"],
    severity: "severe",
    commonSymptoms: ["fever", "chills", "organ dysfunction"],
    associatedSymptoms: ["weight loss", "night sweats", "sepsis signs"],
    drugRecommendations: [
      {
        name: "Amphotericin B (Fungisome by Sun Pharma)",
        class: "Polyene Antifungal",
        dosage: "0.5–1 mg/kg IV",
        frequency: "Once daily",
        duration: "2–6 weeks",
        whenToTake: "Administered in hospital",
        howToTake: "IV infusion over 2–6 hours",
        sideEffects: ["Nephrotoxicity", "Fever", "Chills"],
        contraindications: ["Amphotericin allergy"],
        foodInteractions: "No food interaction; monitor with nephrotoxic drugs",
        precautions: ["Monitor renal function", "Premedicate with antipyretics"]
      }
    ],
    generalAdvice: ["Requires hospitalization", "Maintain strict hygiene", "Monitor for immunosuppression"],
    whenToSeeDoctor: ["Immediate attention for fever unresponsive to antipyretics", "Organ dysfunction"],
    searchKeywords: ["invasive candidiasis", "systemic fungal infection", "candidemia"]
  },

  {
    id: "herpes-simplex",
    name: "Herpes Simplex Virus",
    category: "Viral/Dermatological",
    description: "Viral infection causing cold sores or genital herpes, often recurrent",
    symptoms: ["Painful blisters", "Itching", "Burning sensation"],
    severity: "mild",
    commonSymptoms: ["blisters", "itching", "burning"],
    associatedSymptoms: ["fever", "malaise", "lymph node swelling"],
    drugRecommendations: [
      {
        name: "Acyclovir (Zovirax by GSK India)",
        class: "Nucleoside Antiviral",
        dosage: "400 mg",
        frequency: "Three times daily",
        duration: "7–10 days",
        whenToTake: "With or without food",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Nausea", "Headache", "Renal impairment"],
        contraindications: ["Acyclovir allergy"],
        foodInteractions: "No significant food interaction; monitor with nephrotoxic drugs",
        precautions: ["Ensure hydration", "Adjust dose in renal impairment"]
      }
    ],
    generalAdvice: ["Avoid touching lesions", "Use sunscreen", "Manage stress"],
    whenToSeeDoctor: ["Persistent lesions", "Severe pain", "Eye involvement"],
    searchKeywords: ["herpes", "cold sores", "genital herpes", "blisters"]
  },

  {
    id: "herpes-zoster",
    name: "Herpes Zoster (Shingles)",
    category: "Viral/Neurological",
    description: "Reactivation of varicella-zoster virus causing painful rash along nerve pathways",
    symptoms: ["Painful blisters", "Burning sensation", "Neuralgia"],
    severity: "moderate",
    commonSymptoms: ["painful rash", "burning", "nerve pain"],
    associatedSymptoms: ["fever", "malaise", "headache"],
    drugRecommendations: [
      {
        name: "Valacyclovir (Valcivir by Cipla)",
        class: "Nucleoside Antiviral",
        dosage: "1 g",
        frequency: "Twice daily",
        duration: "7 days",
        whenToTake: "With food",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Headache", "Abdominal pain"],
        contraindications: ["Valacyclovir allergy"],
        foodInteractions: "Avoid with probenecid; may interact with cimetidine",
        precautions: ["Monitor renal function"]
      }
    ],
    generalAdvice: ["Manage pain with analgesics", "Keep rash covered", "Avoid contact with pregnant women"],
    whenToSeeDoctor: ["Eye involvement", "Severe pain", "Immunocompromised status"],
    searchKeywords: ["shingles", "zoster", "nerve pain", "painful rash"]
  },

  {
    id: "influenza-mild",
    name: "Mild Influenza",
    category: "Respiratory/Viral",
    description: "Mild respiratory viral infection caused by influenza A or B",
    symptoms: ["Fever", "Cough", "Sore throat", "Body aches"],
    severity: "mild",
    commonSymptoms: ["fever", "cough", "sore throat"],
    associatedSymptoms: ["fatigue", "headache", "muscle aches"],
    drugRecommendations: [
      {
        name: "Oseltamivir (Tamiflu by Roche India)",
        class: "Neuraminidase Inhibitor",
        dosage: "75 mg",
        frequency: "Twice daily",
        duration: "5 days",
        whenToTake: "With or without food",
        howToTake: "Swallow capsule with water",
        sideEffects: ["Nausea", "Neuropsychiatric events"],
        contraindications: ["Oseltamivir allergy"],
        foodInteractions: "No significant food interaction; monitor with probenecid",
        precautions: ["Start within 48 hours of symptom onset"]
      }
    ],
    generalAdvice: ["Rest", "Stay hydrated", "Use humidifiers", "Avoid contact with others"],
    whenToSeeDoctor: ["Difficulty breathing", "Chest pain", "Symptoms persisting beyond 7 days"],
    searchKeywords: ["flu", "influenza", "respiratory infection", "seasonal flu"]
  },

  {
    id: "hiv-infection",
    name: "HIV Infection",
    category: "Viral/Immunological",
    description: "Chronic viral infection caused by HIV leading to immune suppression if untreated",
    symptoms: ["Fever", "Night sweats", "Weight loss"],
    severity: "severe",
    commonSymptoms: ["fever", "weight loss", "night sweats"],
    associatedSymptoms: ["opportunistic infections", "lymphadenopathy", "fatigue"],
    drugRecommendations: [
      {
        name: "Efavirenz (Efavir by Cipla)",
        class: "NNRTI",
        dosage: "600 mg",
        frequency: "Once daily",
        duration: "Lifelong",
        whenToTake: "At bedtime on empty stomach",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Rash", "CNS disturbances"],
        contraindications: ["Severe hepatic impairment"],
        foodInteractions: "Avoid high-fat meals; interacts with rifampicin",
        precautions: ["Monitor liver function", "Mental health monitoring"]
      }
    ],
    generalAdvice: ["Adhere to ART regimen", "Regular CD4 monitoring", "Practice safe sex"],
    whenToSeeDoctor: ["New infections", "Weight loss", "ART side effects"],
    searchKeywords: ["hiv", "aids", "immunodeficiency", "retroviral"]
  },

  {
    id: "uncomplicated-malaria",
    name: "Uncomplicated Malaria",
    category: "Parasitic/Tropical",
    description: "Parasitic infection caused by Plasmodium species transmitted by mosquitoes",
    symptoms: ["Fever", "Chills", "Headache", "Muscle aches"],
    severity: "moderate",
    commonSymptoms: ["fever", "chills", "headache"],
    associatedSymptoms: ["nausea", "fatigue", "sweating"],
    drugRecommendations: [
      {
        name: "Artesunate + Sulfadoxine-Pyrimethamine (Falcigo by Zydus Cadila)",
        class: "Antimalarial Combination",
        dosage: "Artesunate 200 mg/day for 3 days; SP single dose",
        frequency: "Once daily (artesunate), single dose (SP)",
        duration: "3 days",
        whenToTake: "With food",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Nausea", "Rash"],
        contraindications: ["Sulfonamide allergy"],
        foodInteractions: "Avoid grapefruit; interacts with folate antagonists",
        precautions: ["Monitor for hemolytic anemia"]
      }
    ],
    generalAdvice: ["Use mosquito nets", "Apply repellents", "Stay hydrated"],
    whenToSeeDoctor: ["Severe symptoms", "Confusion", "No improvement after 48 hours"],
    searchKeywords: ["malaria", "parasitic infection", "fever", "tropical disease"]
  },

  {
    id: "roundworm-infection",
    name: "Roundworm Infection",
    category: "Parasitic/Gastrointestinal",
    description: "Parasitic worm infection affecting the gastrointestinal tract",
    symptoms: ["Abdominal pain", "Diarrhea", "Weight loss"],
    severity: "mild",
    commonSymptoms: ["abdominal pain", "diarrhea", "weight loss"],
    associatedSymptoms: ["malnutrition", "anemia", "eosinophilia"],
    drugRecommendations: [
      {
        name: "Albendazole (Zentel by GSK India)",
        class: "Benzimidazole Antiparasitic",
        dosage: "400 mg",
        frequency: "Single dose",
        duration: "1 day",
        whenToTake: "With high-fat meal",
        howToTake: "Chew or swallow tablet",
        sideEffects: ["Hepatotoxicity", "Headache"],
        contraindications: ["Pregnancy"],
        foodInteractions: "Enhances absorption with fat; interacts with cimetidine",
        precautions: ["Monitor liver function"]
      }
    ],
    generalAdvice: ["Maintain hygiene", "Cook food thoroughly", "Deworm periodically"],
    whenToSeeDoctor: ["Persistent symptoms", "Passage of worms", "Severe anemia"],
    searchKeywords: ["roundworm", "worm infection", "parasites", "deworming"]
  },

  {
    id: "amoebiasis",
    name: "Amoebiasis",
    category: "Parasitic/Gastrointestinal",
    description: "Protozoal infection caused by Entamoeba histolytica affecting the intestines",
    symptoms: ["Diarrhea", "Abdominal pain", "Bloody stools"],
    severity: "moderate",
    commonSymptoms: ["diarrhea", "abdominal pain", "bloody stools"],
    associatedSymptoms: ["fever", "liver abscess", "weight loss"],
    drugRecommendations: [
      {
        name: "Metronidazole (Metrogyl by JB Chemicals)",
        class: "Nitroimidazole Antiparasitic",
        dosage: "750 mg",
        frequency: "Three times daily",
        duration: "5–10 days",
        whenToTake: "With food",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Metallic taste", "Peripheral neuropathy"],
        contraindications: ["First trimester pregnancy"],
        foodInteractions: "Avoid alcohol; interacts with warfarin",
        precautions: ["Avoid prolonged use"]
      }
    ],
    generalAdvice: ["Boil water", "Maintain hygiene", "Avoid untreated water"],
    whenToSeeDoctor: ["Bloody diarrhea", "Severe fever", "Signs of liver involvement"],
    searchKeywords: ["amoebiasis", "amoeba", "dysentery", "protozoal infection"]
  },

  {
    id: "breast-cancer",
    name: "Breast Cancer",
    category: "Oncological",
    description: "Malignant tumor in breast tissue, often hormone receptor-positive or HER2-positive",
    symptoms: ["Breast lump", "Nipple discharge", "Skin changes"],
    severity: "severe",
    commonSymptoms: ["breast lump", "nipple discharge", "skin changes"],
    associatedSymptoms: ["lymph node swelling", "bone pain", "weight loss"],
    drugRecommendations: [
      {
        name: "Trastuzumab (Herclon by Roche India)",
        class: "Monoclonal Antibody",
        dosage: "4 mg/kg IV loading, then 2 mg/kg",
        frequency: "Weekly",
        duration: "1 year or as per protocol",
        whenToTake: "Administered in hospital",
        howToTake: "IV infusion over 30–90 minutes",
        sideEffects: ["Cardiotoxicity", "Infusion reactions"],
        contraindications: ["Severe heart failure"],
        foodInteractions: "No food interaction; monitor with anthracyclines",
        precautions: ["Regular cardiac monitoring"]
      }
    ],
    generalAdvice: ["Regular mammograms", "Adhere to chemotherapy", "Maintain nutrition"],
    whenToSeeDoctor: ["New lumps", "Persistent pain", "Chemotherapy side effects"],
    searchKeywords: ["breast cancer", "breast tumor", "mammary carcinoma", "oncology"]
  },

  {
    id: "mild-headache",
    name: "Mild Headache and Fever",
    category: "Analgesic/Inflammatory",
    description: "Common conditions like tension headaches or low-grade fever due to viral infections",
    symptoms: ["Dull headache", "Low-grade fever", "Fatigue"],
    severity: "mild",
    commonSymptoms: ["headache", "low fever", "tiredness"],
    associatedSymptoms: ["mild body aches", "fatigue"],
    drugRecommendations: [
      {
        name: "Paracetamol (Crocin by GSK India)",
        class: "Analgesic-Antipyretic",
        dosage: "500–650 mg",
        frequency: "Every 4–6 hours",
        duration: "Up to 3 days",
        whenToTake: "With or without food",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Rare hepatotoxicity"],
        contraindications: ["Severe liver disease"],
        foodInteractions: "Avoid alcohol; interacts with warfarin",
        precautions: ["Do not exceed 4 g/day"]
      }
    ],
    generalAdvice: ["Rest", "Hydrate", "Avoid triggers"],
    whenToSeeDoctor: ["Fever >100.4°F for >3 days", "Severe headache", "Neck stiffness"],
    searchKeywords: ["headache", "mild fever", "tension headache", "pain relief"]
  },

  {
    id: "moderate-pain-fever",
    name: "Moderate Pain and Fever",
    category: "Analgesic/Inflammatory",
    description: "Painful conditions like menstrual cramps or moderate fever due to infections",
    symptoms: ["Cramping pain", "Moderate fever", "Fatigue"],
    severity: "moderate",
    commonSymptoms: ["cramping", "fever", "fatigue"],
    associatedSymptoms: ["nausea", "sweating", "chills"],
    drugRecommendations: [
      {
        name: "Diclofenac (Voveran by Novartis India)",
        class: "NSAID",
        dosage: "50 mg",
        frequency: "Two–three times daily",
        duration: "3–5 days",
        whenToTake: "With food",
        howToTake: "Swallow tablet with water",
        sideEffects: ["GI bleeding", "Cardiovascular risk"],
        contraindications: ["Heart disease", "Peptic ulcer"],
        foodInteractions: "Avoid alcohol; interacts with ACE inhibitors",
        precautions: ["Use lowest effective dose"]
      }
    ],
    generalAdvice: ["Use heating pads for cramps", "Stay hydrated", "Rest"],
    whenToSeeDoctor: ["Fever >102°F", "Severe pain", "Symptoms >5 days"],
    searchKeywords: ["moderate pain", "menstrual cramps", "fever", "inflammatory pain"]
  },

  {
    id: "gerd",
    name: "Gastroesophageal Reflux Disease (GERD)",
    category: "Gastrointestinal",
    description: "Chronic acid reflux causing esophageal irritation and symptoms",
    symptoms: ["Heartburn", "Regurgitation", "Chest pain"],
    severity: "moderate",
    commonSymptoms: ["heartburn", "acid reflux", "chest pain"],
    associatedSymptoms: ["sore throat", "cough", "difficulty swallowing"],
    drugRecommendations: [
      {
        name: "Pantoprazole (Pan-D by Alkem Labs)",
        class: "Proton Pump Inhibitor",
        dosage: "40 mg",
        frequency: "Once daily",
        duration: "4–8 weeks",
        whenToTake: "Morning, before breakfast on empty stomach",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Headache", "Diarrhea"],
        contraindications: ["PPI allergy"],
        foodInteractions: "Avoid NSAIDs; interacts with clopidogrel",
        precautions: ["Monitor for hypomagnesemia"]
      },
      {
        name: "Digene (by Abbott India)",
        class: "Antacid",
        dosage: "2 tablets",
        frequency: "As needed, up to 4 times daily",
        duration: "Short-term relief",
        whenToTake: "After meals or at symptom onset",
        howToTake: "Chew tablets",
        sideEffects: ["Constipation", "Diarrhea"],
        contraindications: ["Severe renal impairment"],
        foodInteractions: "Avoid with tetracycline; may reduce absorption",
        precautions: ["Short-term use only"]
      }
    ],
    generalAdvice: ["Avoid spicy foods", "Elevate head during sleep", "Maintain healthy weight"],
    whenToSeeDoctor: ["Persistent symptoms", "Difficulty swallowing", "Weight loss"],
    searchKeywords: ["gerd", "acid reflux", "heartburn", "gastroesophageal reflux"]
  },

  {
    id: "peptic-ulcer",
    name: "Peptic Ulcer Disease",
    category: "Gastrointestinal",
    description: "Ulcers in stomach or duodenum often due to H. pylori infection or NSAIDs",
    symptoms: ["Epigastric pain", "Bloating", "Nausea"],
    severity: "moderate",
    commonSymptoms: ["stomach pain", "bloating", "nausea"],
    associatedSymptoms: ["bleeding", "perforation", "vomiting"],
    drugRecommendations: [
      {
        name: "Omeprazole (Rantac-D by JB Chemicals)",
        class: "Proton Pump Inhibitor",
        dosage: "20 mg",
        frequency: "Twice daily",
        duration: "4–8 weeks",
        whenToTake: "Before meals on empty stomach",
        howToTake: "Swallow capsule with water",
        sideEffects: ["Bone fractures", "Vitamin B12 deficiency"],
        contraindications: ["PPI allergy"],
        foodInteractions: "Avoid alcohol; interacts with warfarin",
        precautions: ["Long-term use monitoring"]
      },
      {
        name: "Sucralfate (Sucramal by Sun Pharma)",
        class: "Cytoprotective Agent",
        dosage: "1 g",
        frequency: "Four times daily",
        duration: "4–6 weeks",
        whenToTake: "1 hour before meals and bedtime on empty stomach",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Constipation"],
        contraindications: ["Renal failure"],
        foodInteractions: "Avoid antacids; reduces absorption of other drugs",
        precautions: ["Take separately from other medications"]
      }
    ],
    generalAdvice: ["Avoid NSAIDs", "Eradicate H. pylori", "Eat small frequent meals"],
    whenToSeeDoctor: ["Black stools", "Severe pain", "Vomiting blood"],
    searchKeywords: ["peptic ulcer", "stomach ulcer", "duodenal ulcer", "h pylori"]
  }
];

export const diseaseCategories = [
  "All",
  "Cardiovascular",
  "Respiratory",
  "Infectious/Inflammatory", 
  "Infectious/Antibacterial",
  "Infectious/Critical",
  "Dermatological/Antifungal",
  "Oral/Antifungal",
  "Viral/Dermatological",
  "Viral/Neurological",
  "Respiratory/Viral",
  "Viral/Immunological",
  "Parasitic/Tropical",
  "Parasitic/Gastrointestinal",
  "Oncological",
  "Analgesic/Inflammatory",
  "Gastrointestinal",
  "Endocrine",
  "Mental Health",
  "Neurological",
  "Musculoskeletal",
  "Urogenital/Antibacterial",
  "Respiratory/Antibacterial"
];

export const searchDiseases = (searchTerm: string, category: string = "All"): DiseaseInfo[] => {
  const filtered = diseaseDatabase.filter(disease => {
    const matchesCategory = category === "All" || disease.category === category;
    const searchLower = searchTerm.toLowerCase();
    
    const matchesSearch = searchTerm === "" || 
      disease.name.toLowerCase().includes(searchLower) ||
      disease.description.toLowerCase().includes(searchLower) ||
      disease.symptoms.some(symptom => symptom.toLowerCase().includes(searchLower)) ||
      disease.commonSymptoms.some(symptom => symptom.toLowerCase().includes(searchLower)) ||
      disease.associatedSymptoms.some(symptom => symptom.toLowerCase().includes(searchLower)) ||
      disease.searchKeywords.some(keyword => keyword.toLowerCase().includes(searchLower));
    
    return matchesCategory && matchesSearch;
  });
  
  return filtered;
};
