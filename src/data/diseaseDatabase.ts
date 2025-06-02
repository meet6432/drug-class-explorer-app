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
  },

  {
    id: "acute-constipation",
    name: "Acute Constipation",
    category: "Gastrointestinal",
    description: "Temporary difficulty in bowel movements due to diet or dehydration",
    symptoms: ["Hard stools", "Straining", "Infrequent bowel movements"],
    severity: "mild",
    commonSymptoms: ["hard stools", "straining", "constipation"],
    associatedSymptoms: ["abdominal discomfort", "bloating"],
    drugRecommendations: [
      {
        name: "Bisacodyl (Dulcolax by Boehringer Ingelheim India)",
        class: "Stimulant Laxative",
        dosage: "5–10 mg",
        frequency: "Once daily",
        duration: "1–3 days",
        whenToTake: "At bedtime",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Abdominal cramps", "Diarrhea"],
        contraindications: ["Bowel obstruction"],
        foodInteractions: "Avoid milk; interacts with antacids",
        precautions: ["Short-term use only"]
      }
    ],
    generalAdvice: ["Increase fiber intake", "Hydrate", "Exercise regularly"],
    whenToSeeDoctor: ["No bowel movement for >3 days", "Severe pain"],
    searchKeywords: ["constipation", "hard stools", "bowel movement", "laxative"]
  },

  {
    id: "chronic-constipation",
    name: "Chronic Constipation",
    category: "Gastrointestinal",
    description: "Persistent difficulty in bowel movements, often idiopathic or due to IBS",
    symptoms: ["Infrequent stools", "Hard stools", "Straining"],
    severity: "moderate",
    commonSymptoms: ["chronic constipation", "hard stools", "straining"],
    associatedSymptoms: ["bloating", "fatigue", "hemorrhoids"],
    drugRecommendations: [
      {
        name: "Lactulose (Cremaffin by Abbott India)",
        class: "Osmotic Laxative",
        dosage: "15–30 mL",
        frequency: "Once daily",
        duration: "As needed",
        whenToTake: "Evening",
        howToTake: "Mix with water or juice",
        sideEffects: ["Bloating", "Diarrhea"],
        contraindications: ["Galactosemia"],
        foodInteractions: "No significant interactions",
        precautions: ["Monitor for electrolyte imbalance"]
      },
      {
        name: "Ispaghula (Naturolax by Zydus Cadila)",
        class: "Bulk-Forming Laxative",
        dosage: "3.5–7 g",
        frequency: "Once–twice daily",
        duration: "Long-term",
        whenToTake: "Morning and evening",
        howToTake: "Mix in 200 mL water, drink immediately",
        sideEffects: ["Bloating", "Flatulence"],
        contraindications: ["Bowel obstruction"],
        foodInteractions: "Take separately from other drugs",
        precautions: ["Ensure adequate fluid intake"]
      }
    ],
    generalAdvice: ["High-fiber diet", "Regular exercise", "Establish bowel routine"],
    whenToSeeDoctor: ["Blood in stools", "Weight loss", "Persistent symptoms"],
    searchKeywords: ["chronic constipation", "ibs", "fiber", "bowel habits"]
  },

  {
    id: "ponv",
    name: "Postoperative Nausea and Vomiting (PONV)",
    category: "Gastrointestinal",
    description: "Nausea/vomiting post-surgery due to anesthesia or pain medications",
    symptoms: ["Nausea", "Vomiting", "Dizziness"],
    severity: "moderate",
    commonSymptoms: ["nausea", "vomiting", "post-surgery"],
    associatedSymptoms: ["sweating", "dehydration"],
    drugRecommendations: [
      {
        name: "Ondansetron (Emigo by Cipla)",
        class: "5-HT3 Receptor Antagonist",
        dosage: "8 mg",
        frequency: "Every 8 hours",
        duration: "1–2 days",
        whenToTake: "Before surgery or as needed",
        howToTake: "Swallow tablet or dissolve ODT",
        sideEffects: ["Headache", "Constipation"],
        contraindications: ["QT prolongation"],
        foodInteractions: "No food interaction; interacts with apomorphine",
        precautions: ["Monitor ECG in cardiac patients"]
      },
      {
        name: "Domperidone (Domstal by Torrent Pharma)",
        class: "Dopamine Receptor Antagonist",
        dosage: "10 mg",
        frequency: "Three times daily",
        duration: "Short-term",
        whenToTake: "30 minutes before food",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Drowsiness", "Hyperprolactinemia"],
        contraindications: ["Cardiac arrhythmias"],
        foodInteractions: "Avoid grapefruit; interacts with ketoconazole",
        precautions: ["Monitor for cardiac effects"]
      }
    ],
    generalAdvice: ["Stay hydrated", "Avoid heavy meals post-surgery", "Rest"],
    whenToSeeDoctor: ["Persistent vomiting", "Dehydration", "Severe dizziness"],
    searchKeywords: ["ponv", "post-operative nausea", "surgery nausea", "antiemetic"]
  },

  {
    id: "cinv",
    name: "Chemotherapy-Induced Nausea and Vomiting (CINV)",
    category: "Gastrointestinal",
    description: "Nausea/vomiting due to chemotherapeutic agents",
    symptoms: ["Severe nausea", "Vomiting", "Loss of appetite"],
    severity: "severe",
    commonSymptoms: ["chemotherapy nausea", "severe vomiting", "appetite loss"],
    associatedSymptoms: ["fatigue", "dehydration"],
    drugRecommendations: [
      {
        name: "Granisetron (Granicip by Cipla)",
        class: "5-HT3 Receptor Antagonist",
        dosage: "1 mg IV or 2 mg oral",
        frequency: "Once daily",
        duration: "As per cycle",
        whenToTake: "Before chemotherapy",
        howToTake: "IV infusion or oral tablet",
        sideEffects: ["Headache", "Fatigue"],
        contraindications: ["5-HT3 antagonist allergy"],
        foodInteractions: "No food interaction; monitor with QT-prolonging drugs",
        precautions: ["Monitor for serotonin syndrome"]
      },
      {
        name: "Aprepitant (Aprecap by Cipla)",
        class: "NK1 Receptor Antagonist",
        dosage: "125 mg day 1, 80 mg days 2–3",
        frequency: "Once daily",
        duration: "3 days per cycle",
        whenToTake: "Morning",
        howToTake: "Swallow capsule with water",
        sideEffects: ["Fatigue", "Hiccups"],
        contraindications: ["CYP3A4 inhibitor use"],
        foodInteractions: "Avoid grapefruit; interacts with warfarin",
        precautions: ["Monitor drug interactions"]
      }
    ],
    generalAdvice: ["Small frequent meals", "Stay hydrated", "Use antiemetic prophylaxis"],
    whenToSeeDoctor: ["Inability to eat/drink", "Severe dehydration", "Persistent vomiting"],
    searchKeywords: ["cinv", "chemotherapy nausea", "cancer treatment", "antiemetic"]
  },

  {
    id: "hypertension",
    name: "Hypertension",
    category: "Cardiovascular",
    description: "Elevated blood pressure, classified by severity (mild: 140–159/90–99 mmHg, moderate: 160–179/100–109 mmHg, severe: ≥180/≥110 mmHg)",
    symptoms: ["Often asymptomatic", "Headache", "Dizziness"],
    severity: "moderate",
    commonSymptoms: ["high blood pressure", "headache", "dizziness"],
    associatedSymptoms: ["blurred vision", "chest pain"],
    drugRecommendations: [
      {
        name: "Telmisartan (Telma by Glenmark)",
        class: "ARB",
        dosage: "40 mg",
        frequency: "Once daily",
        duration: "Long-term",
        whenToTake: "Morning",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Dizziness", "Hyperkalemia"],
        contraindications: ["Bilateral renal artery stenosis"],
        foodInteractions: "Avoid potassium supplements; interacts with NSAIDs",
        precautions: ["Monitor potassium, renal function"]
      },
      {
        name: "Enalapril (Enam by Dr. Reddy's)",
        class: "ACE Inhibitor",
        dosage: "5–10 mg",
        frequency: "Once–twice daily",
        duration: "Long-term",
        whenToTake: "Morning and evening",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Cough", "Angioedema"],
        contraindications: ["Pregnancy"],
        foodInteractions: "Avoid salt substitutes; interacts with diuretics",
        precautions: ["Monitor for angioedema"]
      }
    ],
    generalAdvice: ["Low-salt diet", "Regular exercise", "Monitor BP regularly"],
    whenToSeeDoctor: ["BP >180/110 mmHg", "Chest pain", "Vision changes"],
    searchKeywords: ["hypertension", "high blood pressure", "bp", "cardiovascular"]
  },

  {
    id: "angina-pectoris",
    name: "Angina Pectoris",
    category: "Cardiovascular",
    description: "Chest pain due to reduced blood flow to the heart",
    symptoms: ["Chest pain", "Pressure", "Discomfort"],
    severity: "moderate",
    commonSymptoms: ["chest pain", "angina", "heart pain"],
    associatedSymptoms: ["shortness of breath", "sweating"],
    drugRecommendations: [
      {
        name: "Isosorbide Dinitrate (Sorbitrate by Abbott India)",
        class: "Nitrate",
        dosage: "5 mg sublingual",
        frequency: "As needed for acute attack",
        duration: "Short-term relief",
        whenToTake: "At onset of symptoms",
        howToTake: "Place under tongue",
        sideEffects: ["Headache", "Hypotension"],
        contraindications: ["Severe hypotension"],
        foodInteractions: "No food interaction; interacts with PDE5 inhibitors",
        precautions: ["Avoid sudden posture changes"]
      },
      {
        name: "Atenolol (Aten by Zydus Cadila)",
        class: "Beta Blocker",
        dosage: "50 mg",
        frequency: "Once daily",
        duration: "Long-term",
        whenToTake: "Morning",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Bradycardia", "Bronchospasm"],
        contraindications: ["Asthma"],
        foodInteractions: "Avoid abrupt discontinuation; interacts with calcium channel blockers",
        precautions: ["Monitor heart rate"]
      }
    ],
    generalAdvice: ["Avoid triggers (e.g., stress)", "Maintain healthy weight", "Carry nitrates"],
    whenToSeeDoctor: ["Pain lasting >5 minutes", "Worsening symptoms"],
    searchKeywords: ["angina", "chest pain", "heart pain", "nitrates"]
  },

  {
    id: "heart-failure",
    name: "Heart Failure",
    category: "Cardiovascular",
    description: "Heart's inability to pump blood effectively",
    symptoms: ["Shortness of breath", "Fatigue", "Edema"],
    severity: "severe",
    commonSymptoms: ["heart failure", "shortness of breath", "swelling"],
    associatedSymptoms: ["cough", "weight gain", "palpitations"],
    drugRecommendations: [
      {
        name: "Furosemide (Lasix by Sanofi India)",
        class: "Loop Diuretic",
        dosage: "20–40 mg",
        frequency: "Once–twice daily",
        duration: "Long-term",
        whenToTake: "Morning",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Hypokalemia", "Ototoxicity"],
        contraindications: ["Anuria"],
        foodInteractions: "Avoid NSAIDs; interacts with digoxin",
        precautions: ["Monitor electrolytes"]
      },
      {
        name: "Ramipril (Cardace by Sanofi India)",
        class: "ACE Inhibitor",
        dosage: "2.5–5 mg",
        frequency: "Once daily",
        duration: "Long-term",
        whenToTake: "Morning",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Cough", "Hypotension"],
        contraindications: ["Renal artery stenosis"],
        foodInteractions: "Avoid potassium supplements; interacts with diuretics",
        precautions: ["Monitor renal function"]
      }
    ],
    generalAdvice: ["Low-sodium diet", "Monitor weight daily", "Avoid excessive fluid intake"],
    whenToSeeDoctor: ["Worsening edema", "Weight gain >2 kg in 3 days"],
    searchKeywords: ["heart failure", "cardiac failure", "edema", "diuretics"]
  },

  {
    id: "type1-diabetes",
    name: "Type 1 Diabetes",
    category: "Endocrine",
    description: "Autoimmune destruction of pancreatic beta cells, requiring insulin",
    symptoms: ["Polyuria", "Polydipsia", "Weight loss"],
    severity: "severe",
    commonSymptoms: ["diabetes", "frequent urination", "excessive thirst"],
    associatedSymptoms: ["fatigue", "blurred vision", "ketoacidosis"],
    drugRecommendations: [
      {
        name: "Insulin Glargine (Lantus by Sanofi India)",
        class: "Long-Acting Insulin",
        dosage: "0.2–0.4 units/kg",
        frequency: "Once daily",
        duration: "Lifelong",
        whenToTake: "Bedtime",
        howToTake: "Subcutaneous injection",
        sideEffects: ["Hypoglycemia", "Injection site reactions"],
        contraindications: ["Hypoglycemia"],
        foodInteractions: "No food interaction; monitor with oral hypoglycemics",
        precautions: ["Monitor blood glucose"]
      },
      {
        name: "Insulin Aspart (Novorapid by Novo Nordisk India)",
        class: "Rapid-Acting Insulin",
        dosage: "0.5–1 unit/kg/day",
        frequency: "Before meals",
        duration: "Lifelong",
        whenToTake: "5–10 minutes before eating",
        howToTake: "Subcutaneous injection",
        sideEffects: ["Hypoglycemia", "Weight gain"],
        contraindications: ["Hypoglycemia"],
        foodInteractions: "Adjust with meals; monitor with beta-blockers",
        precautions: ["Rotate injection sites"]
      }
    ],
    generalAdvice: ["Monitor blood glucose", "Follow carb-counting diet", "Exercise regularly"],
    whenToSeeDoctor: ["Hypoglycemia", "Ketoacidosis symptoms", "Uncontrolled glucose"],
    searchKeywords: ["type 1 diabetes", "insulin", "blood sugar", "diabetes"]
  },

  {
    id: "type2-diabetes",
    name: "Type 2 Diabetes",
    category: "Endocrine",
    description: "Insulin resistance with relative insulin deficiency",
    symptoms: ["Polyuria", "Polydipsia", "Fatigue"],
    severity: "moderate",
    commonSymptoms: ["type 2 diabetes", "frequent urination", "fatigue"],
    associatedSymptoms: ["weight gain", "neuropathy", "infections"],
    drugRecommendations: [
      {
        name: "Metformin (Glycomet by USV Ltd.)",
        class: "Biguanide",
        dosage: "500 mg",
        frequency: "Twice daily",
        duration: "Long-term",
        whenToTake: "With meals",
        howToTake: "Swallow tablet with water",
        sideEffects: ["GI upset", "Lactic acidosis (rare)"],
        contraindications: ["Renal impairment (CrCl <30 mL/min)"],
        foodInteractions: "Avoid alcohol; interacts with contrast media",
        precautions: ["Monitor renal function"]
      },
      {
        name: "Sitagliptin (Januvia by MSD India)",
        class: "DPP-4 Inhibitor",
        dosage: "100 mg",
        frequency: "Once daily",
        duration: "Long-term",
        whenToTake: "Morning",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Nasopharyngitis", "Pancreatitis"],
        contraindications: ["Pancreatitis history"],
        foodInteractions: "No food interaction; monitor with digoxin",
        precautions: ["Monitor for joint pain"]
      }
    ],
    generalAdvice: ["Low-carb diet", "Regular exercise", "Monitor HbA1c"],
    whenToSeeDoctor: ["Persistent hyperglycemia", "Infections", "Severe side effects"],
    searchKeywords: ["type 2 diabetes", "metformin", "blood sugar", "diabetes"]
  },

  {
    id: "epilepsy",
    name: "Epilepsy",
    category: "Central Nervous System",
    description: "Recurrent seizures due to abnormal brain electrical activity",
    symptoms: ["Seizures", "Loss of consciousness", "Convulsions"],
    severity: "severe",
    commonSymptoms: ["seizures", "epilepsy", "convulsions"],
    associatedSymptoms: ["confusion", "fatigue", "aura"],
    drugRecommendations: [
      {
        name: "Phenytoin (Eptoin by Abbott India)",
        class: "Antiepileptic",
        dosage: "300 mg",
        frequency: "Once daily",
        duration: "Long-term",
        whenToTake: "Evening",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Gingival hyperplasia", "Rash"],
        contraindications: ["Phenytoin allergy"],
        foodInteractions: "Avoid alcohol; interacts with warfarin",
        precautions: ["Monitor blood levels"]
      },
      {
        name: "Sodium Valproate (Valprol by Intas)",
        class: "Antiepileptic",
        dosage: "500 mg",
        frequency: "Twice daily",
        duration: "Long-term",
        whenToTake: "Morning and evening",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Hepatotoxicity", "Weight gain"],
        contraindications: ["Liver disease"],
        foodInteractions: "Avoid alcohol; interacts with carbamazepine",
        precautions: ["Monitor liver function"]
      }
    ],
    generalAdvice: ["Avoid triggers (e.g., stress)", "Maintain regular sleep", "Adhere to medication"],
    whenToSeeDoctor: ["Frequent seizures", "Status epilepticus", "Side effects"],
    searchKeywords: ["epilepsy", "seizures", "antiepileptic", "convulsions"]
  },

  {
    id: "depression",
    name: "Depression",
    category: "Central Nervous System",
    description: "Mood disorder characterized by persistent sadness and loss of interest",
    symptoms: ["Sadness", "Fatigue", "Insomnia"],
    severity: "moderate",
    commonSymptoms: ["depression", "sadness", "fatigue"],
    associatedSymptoms: ["appetite changes", "suicidal thoughts"],
    drugRecommendations: [
      {
        name: "Sertraline (Sertaline by Zydus Cadila)",
        class: "SSRI",
        dosage: "50 mg",
        frequency: "Once daily",
        duration: "Long-term",
        whenToTake: "Morning",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Sexual dysfunction", "Nausea"],
        contraindications: ["Bipolar disorder"],
        foodInteractions: "Avoid alcohol; interacts with MAO inhibitors",
        precautions: ["Monitor for suicidal ideation"]
      },
      {
        name: "Duloxetine (Duzela by Sun Pharma)",
        class: "SNRI",
        dosage: "60 mg",
        frequency: "Once daily",
        duration: "Long-term",
        whenToTake: "Morning",
        howToTake: "Swallow capsule with water",
        sideEffects: ["Hypertension", "Dry mouth"],
        contraindications: ["Uncontrolled hypertension"],
        foodInteractions: "Avoid alcohol; interacts with tramadol",
        precautions: ["Gradual tapering"]
      }
    ],
    generalAdvice: ["Seek therapy", "Maintain social support", "Avoid alcohol"],
    whenToSeeDoctor: ["Worsening mood", "Suicidal thoughts", "Side effects"],
    searchKeywords: ["depression", "antidepressant", "ssri", "mood disorder"]
  },

  {
    id: "schizophrenia",
    name: "Schizophrenia",
    category: "Central Nervous System",
    description: "Psychotic disorder with delusions, hallucinations, and disorganized thinking",
    symptoms: ["Hallucinations", "Delusions", "Social withdrawal"],
    severity: "severe",
    commonSymptoms: ["schizophrenia", "hallucinations", "delusions"],
    associatedSymptoms: ["cognitive impairment", "agitation"],
    drugRecommendations: [
      {
        name: "Olanzapine (Oleanz by Sun Pharma)",
        class: "Atypical Antipsychotic",
        dosage: "10 mg",
        frequency: "Once daily",
        duration: "Long-term",
        whenToTake: "Evening",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Weight gain", "Sedation"],
        contraindications: ["Dementia-related psychosis"],
        foodInteractions: "Avoid alcohol; interacts with fluvoxamine",
        precautions: ["Monitor metabolic parameters"]
      },
      {
        name: "Clozapine (Sizopin by Sun Pharma)",
        class: "Atypical Antipsychotic",
        dosage: "300 mg",
        frequency: "Twice daily",
        duration: "Long-term",
        whenToTake: "Morning and evening",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Agranulocytosis", "Seizures"],
        contraindications: ["Bone marrow suppression"],
        foodInteractions: "Avoid caffeine; interacts with carbamazepine",
        precautions: ["Weekly blood monitoring"]
      }
    ],
    generalAdvice: ["Adhere to medication", "Engage in therapy", "Avoid recreational drugs"],
    whenToSeeDoctor: ["Worsening psychosis", "Severe side effects", "Suicidal behavior"],
    searchKeywords: ["schizophrenia", "psychosis", "antipsychotic", "hallucinations"]
  },

  {
    id: "asthma",
    name: "Asthma",
    category: "Respiratory",
    description: "Chronic inflammatory airway disease with reversible obstruction",
    symptoms: ["Wheezing", "Shortness of breath", "Chest tightness"],
    severity: "moderate",
    commonSymptoms: ["asthma", "wheezing", "shortness of breath"],
    associatedSymptoms: ["cough", "nocturnal symptoms"],
    drugRecommendations: [
      {
        name: "Salbutamol (Asthalin by Cipla)",
        class: "Beta-2 Agonist",
        dosage: "2 puffs (100 mcg/puff)",
        frequency: "As needed, up to 4 times daily",
        duration: "Short-term relief",
        whenToTake: "At symptom onset",
        howToTake: "Use inhaler with spacer",
        sideEffects: ["Tachycardia", "Tremors"],
        contraindications: ["Uncontrolled arrhythmias"],
        foodInteractions: "No food interaction; monitor with beta-blockers",
        precautions: ["Monitor heart rate"]
      },
      {
        name: "Montelukast (Montair by Cipla)",
        class: "Leukotriene Receptor Antagonist",
        dosage: "10 mg",
        frequency: "Once daily",
        duration: "Long-term",
        whenToTake: "Evening",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Hepatotoxicity", "Mood changes"],
        contraindications: ["Acute asthma attack"],
        foodInteractions: "No food interaction; monitor with phenytoin",
        precautions: ["Monitor for neuropsychiatric events"]
      }
    ],
    generalAdvice: ["Avoid triggers (e.g., allergens)", "Use peak flow meter", "Maintain inhaler technique"],
    whenToSeeDoctor: ["Frequent symptoms", "Rescue inhaler overuse", "Severe attack"],
    searchKeywords: ["asthma", "wheezing", "bronchodilator", "inhaler"]
  },

  {
    id: "copd",
    name: "Chronic Obstructive Pulmonary Disease (COPD)",
    category: "Respiratory",
    description: "Progressive lung disease with airflow limitation",
    symptoms: ["Chronic cough", "Dyspnea", "Sputum production"],
    severity: "moderate",
    commonSymptoms: ["copd", "chronic cough", "shortness of breath"],
    associatedSymptoms: ["fatigue", "weight loss", "exacerbations"],
    drugRecommendations: [
      {
        name: "Tiotropium (Tiova by Cipla)",
        class: "Anticholinergic",
        dosage: "1 puff (18 mcg)",
        frequency: "Once daily",
        duration: "Long-term",
        whenToTake: "Morning",
        howToTake: "Use HandiHaler device",
        sideEffects: ["Dry mouth", "Urinary retention"],
        contraindications: ["Narrow-angle glaucoma"],
        foodInteractions: "No food interaction; monitor with anticholinergics",
        precautions: ["Monitor for urinary symptoms"]
      },
      {
        name: "Salmeterol + Fluticasone (Foracort by Cipla)",
        class: "LABA + ICS Combination",
        dosage: "2 puffs (25/125 mcg)",
        frequency: "Twice daily",
        duration: "Long-term",
        whenToTake: "Morning and evening",
        howToTake: "Use inhaler with spacer",
        sideEffects: ["Oral thrush", "Hoarseness"],
        contraindications: ["Acute bronchospasm"],
        foodInteractions: "No food interaction; monitor with ketoconazole",
        precautions: ["Rinse mouth after use"]
      }
    ],
    generalAdvice: ["Quit smoking", "Pulmonary rehabilitation", "Get vaccinated"],
    whenToSeeDoctor: ["Worsening dyspnea", "Frequent exacerbations", "Cyanosis"],
    searchKeywords: ["copd", "chronic cough", "emphysema", "bronchitis"]
  },

  {
    id: "hypothyroidism",
    name: "Hypothyroidism",
    category: "Endocrine",
    description: "Underactive thyroid gland causing reduced hormone production",
    symptoms: ["Fatigue", "Weight gain", "Cold intolerance"],
    severity: "moderate",
    commonSymptoms: ["hypothyroidism", "fatigue", "weight gain"],
    associatedSymptoms: ["dry skin", "hair loss", "constipation"],
    drugRecommendations: [
      {
        name: "Levothyroxine (Thyronorm by Abbott India)",
        class: "Thyroid Hormone",
        dosage: "50–100 mcg",
        frequency: "Once daily",
        duration: "Lifelong",
        whenToTake: "30–60 minutes before food",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Palpitations", "Weight loss"],
        contraindications: ["Untreated adrenal insufficiency"],
        foodInteractions: "Avoid calcium/iron supplements; interacts with PPIs",
        precautions: ["Monitor TSH levels"]
      }
    ],
    generalAdvice: ["Regular thyroid function tests", "Maintain consistent dosing", "Avoid goitrogenic foods"],
    whenToSeeDoctor: ["Worsening symptoms", "Palpitations", "TSH abnormalities"],
    searchKeywords: ["hypothyroidism", "thyroid", "levothyroxine", "tsh"]
  },

  {
    id: "menopause",
    name: "Menopause Symptoms",
    category: "Endocrine",
    description: "Hormonal changes causing menopausal symptoms like hot flashes",
    symptoms: ["Hot flashes", "Night sweats", "Mood changes"],
    severity: "mild",
    commonSymptoms: ["menopause", "hot flashes", "night sweats"],
    associatedSymptoms: ["vaginal dryness", "osteoporosis risk"],
    drugRecommendations: [
      {
        name: "Conjugated Estrogens (Premarin by Pfizer India)",
        class: "Hormone Replacement Therapy",
        dosage: "0.625 mg",
        frequency: "Once daily",
        duration: "Shortest duration needed",
        whenToTake: "Morning",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Breast tenderness", "VTE risk"],
        contraindications: ["Breast cancer", "VTE history"],
        foodInteractions: "No food interaction; interacts with warfarin",
        precautions: ["Regular mammograms"]
      }
    ],
    generalAdvice: ["Calcium-rich diet", "Exercise", "Avoid smoking"],
    whenToSeeDoctor: ["Severe symptoms", "Abnormal bleeding", "Breast changes"],
    searchKeywords: ["menopause", "hot flashes", "hormone replacement", "estrogen"]
  },

  {
    id: "bph",
    name: "Benign Prostatic Hyperplasia (BPH)",
    category: "Urology",
    description: "Non-cancerous prostate enlargement causing urinary symptoms",
    symptoms: ["Weak urine stream", "Nocturia", "Urgency"],
    severity: "moderate",
    commonSymptoms: ["bph", "prostate", "urinary problems"],
    associatedSymptoms: ["incomplete bladder emptying", "infections"],
    drugRecommendations: [
      {
        name: "Tamsulosin (Urofos by Urocare)",
        class: "Alpha-1 Blocker",
        dosage: "0.4 mg",
        frequency: "Once daily",
        duration: "Long-term",
        whenToTake: "30 minutes after dinner",
        howToTake: "Swallow capsule with water",
        sideEffects: ["Orthostatic hypotension", "Retrograde ejaculation"],
        contraindications: ["Severe hypotension"],
        foodInteractions: "Avoid alcohol; interacts with PDE5 inhibitors",
        precautions: ["Monitor blood pressure"]
      },
      {
        name: "Finasteride (Finpecia by Cipla)",
        class: "5-Alpha Reductase Inhibitor",
        dosage: "5 mg",
        frequency: "Once daily",
        duration: "Long-term",
        whenToTake: "Morning",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Sexual dysfunction", "Breast tenderness"],
        contraindications: ["Pregnancy exposure"],
        foodInteractions: "No food interaction; monitor with testosterone",
        precautions: ["PSA monitoring"]
      }
    ],
    generalAdvice: ["Avoid caffeine", "Maintain regular urination schedule"],
    whenToSeeDoctor: ["Urinary retention", "Hematuria", "Severe symptoms"],
    searchKeywords: ["bph", "prostate enlargement", "urinary retention", "tamsulosin"]
  },

  {
    id: "rheumatoid-arthritis",
    name: "Rheumatoid Arthritis",
    category: "Musculoskeletal",
    description: "Autoimmune joint inflammation causing pain and deformity",
    symptoms: ["Joint pain", "Swelling", "Morning stiffness"],
    severity: "moderate",
    commonSymptoms: ["rheumatoid arthritis", "joint pain", "swelling"],
    associatedSymptoms: ["fatigue", "fever", "weight loss"],
    drugRecommendations: [
      {
        name: "Methotrexate (Folitrax by Ipca Labs)",
        class: "DMARD",
        dosage: "7.5–15 mg",
        frequency: "Once weekly",
        duration: "Long-term",
        whenToTake: "Same day each week",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Hepatotoxicity", "Bone marrow suppression"],
        contraindications: ["Liver disease"],
        foodInteractions: "Avoid alcohol; interacts with NSAIDs",
        precautions: ["Folic acid supplementation"]
      },
      {
        name: "Hydroxychloroquine (HCQS by Ipca Labs)",
        class: "Antimalarial DMARD",
        dosage: "400 mg",
        frequency: "Once daily",
        duration: "Long-term",
        whenToTake: "Evening",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Retinal toxicity", "GI upset"],
        contraindications: ["Retinal disease"],
        foodInteractions: "Take with meals; interacts with digoxin",
        precautions: ["Regular eye exams"]
      }
    ],
    generalAdvice: ["Physical therapy", "Maintain joint mobility", "Avoid infections"],
    whenToSeeDoctor: ["Worsening joint pain", "Infections", "Vision changes"],
    searchKeywords: ["rheumatoid arthritis", "joint pain", "dmard", "methotrexate"]
  },

  {
    id: "organ-transplant",
    name: "Organ Transplant Rejection",
    category: "Immunology",
    description: "Immune response against transplanted organs",
    symptoms: ["Fever", "Organ dysfunction", "Pain at transplant site"],
    severity: "severe",
    commonSymptoms: ["transplant rejection", "fever", "organ dysfunction"],
    associatedSymptoms: ["fatigue", "reduced urine output"],
    drugRecommendations: [
      {
        name: "Tacrolimus (Pangraf by Panacea Biotec)",
        class: "Calcineurin Inhibitor",
        dosage: "0.1–0.2 mg/kg",
        frequency: "Twice daily",
        duration: "Lifelong",
        whenToTake: "Every 12 hours",
        howToTake: "Swallow capsule with water",
        sideEffects: ["Nephrotoxicity", "Tremors"],
        contraindications: ["Tacrolimus allergy"],
        foodInteractions: "Avoid grapefruit; interacts with cyclosporine",
        precautions: ["Monitor blood levels"]
      },
      {
        name: "Mycophenolate (Mycophen by Panacea Biotec)",
        class: "Antimetabolite",
        dosage: "1 g",
        frequency: "Twice daily",
        duration: "Lifelong",
        whenToTake: "Morning and evening",
        howToTake: "Swallow tablet with water",
        sideEffects: ["GI perforation", "Infections"],
        contraindications: ["Pregnancy"],
        foodInteractions: "Avoid antacids; interacts with PPIs",
        precautions: ["Monitor for infections"]
      }
    ],
    generalAdvice: ["Adhere to immunosuppression", "Regular follow-ups", "Avoid infections"],
    whenToSeeDoctor: ["Fever", "Organ dysfunction", "Signs of rejection"],
    searchKeywords: ["transplant", "immunosuppression", "rejection", "tacrolimus"]
  },

  {
    id: "ibs",
    name: "Irritable Bowel Syndrome (IBS)",
    category: "Gastrointestinal",
    description: "Functional GI disorder with abdominal pain and altered bowel habits",
    symptoms: ["Abdominal pain", "Bloating", "Diarrhea/constipation"],
    severity: "mild",
    commonSymptoms: ["ibs", "abdominal pain", "bloating"],
    associatedSymptoms: ["fatigue", "anxiety"],
    drugRecommendations: [
      {
        name: "Mebeverine (Mebiz by Abbott India)",
        class: "Antispasmodic",
        dosage: "135 mg",
        frequency: "Three times daily",
        duration: "As needed",
        whenToTake: "20 minutes before meals",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Dizziness", "Headache"],
        contraindications: ["Paralytic ileus"],
        foodInteractions: "No food interaction; monitor with antispasmodics",
        precautions: ["Monitor for allergic reactions"]
      }
    ],
    generalAdvice: ["High-fiber diet (IBS-C)", "Avoid triggers", "Stress management"],
    whenToSeeDoctor: ["Severe pain", "Weight loss", "Blood in stools"],
    searchKeywords: ["ibs", "irritable bowel", "abdominal pain", "antispasmodic"]
  },

  {
    id: "acute-diarrhea",
    name: "Acute Diarrhea",
    category: "Gastrointestinal",
    description: "Sudden onset of frequent, watery stools, often infectious",
    symptoms: ["Loose stools", "Abdominal cramps", "Dehydration"],
    severity: "mild",
    commonSymptoms: ["diarrhea", "loose stools", "cramps"],
    associatedSymptoms: ["fever", "nausea", "vomiting"],
    drugRecommendations: [
      {
        name: "Loperamide (Lopamide by Torrent Pharma)",
        class: "Antidiarrheal",
        dosage: "4 mg initially, then 2 mg after each loose stool",
        frequency: "As needed",
        duration: "Up to 2 days",
        whenToTake: "After loose stool",
        howToTake: "Swallow tablet with water",
        sideEffects: ["Constipation", "Dizziness"],
        contraindications: ["Bloody diarrhea"],
        foodInteractions: "No food interaction; avoid in infectious diarrhea",
        precautions: ["Monitor for dehydration"]
      },
      {
        name: "Racecadotril (Redotil by Dr. Reddy's)",
        class: "Enkephalinase Inhibitor",
        dosage: "100 mg",
        frequency: "Three times daily",
        duration: "Up to 7 days",
        whenToTake: "Before meals",
        howToTake: "Swallow capsule with water",
        sideEffects: ["Headache", "Rash"],
        contraindications: ["Chronic diarrhea"],
        foodInteractions: "No food interaction; monitor with loperamide",
        precautions: ["Ensure hydration"]
      }
    ],
    generalAdvice: ["Oral rehydration solution", "Avoid dairy", "Rest"],
    whenToSeeDoctor: ["Dehydration", "Fever >102°F", "Persistent diarrhea"],
    searchKeywords: ["diarrhea", "loose stools", "antidiarrheal", "dehydration"]
  },

  {
    id: "acne",
    name: "Acne",
    category: "Dermatological",
    description: "Inflammatory skin condition with pimples, caused by sebum and bacteria",
    symptoms: ["Pimples", "Blackheads", "Redness"],
    severity: "mild",
    commonSymptoms: ["acne", "pimples", "blackheads"],
    associatedSymptoms: ["scarring", "pain"],
    drugRecommendations: [
      {
        name: "Salicylic Acid (Saslic by Cipla)",
        class: "Keratolytic",
        dosage: "2% gel",
        frequency: "Once–twice daily",
        duration: "As needed",
        whenToTake: "Morning and evening",
        howToTake: "Apply to affected area",
        sideEffects: ["Skin irritation", "Dryness"],
        contraindications: ["Hypersensitivity"],
        foodInteractions: "No food interaction; avoid with other keratolytics",
        precautions: ["Avoid eyes, mucous membranes"]
      },
      {
        name: "Tretinoin (Retin-A by J&J India)",
        class: "Retinoid",
        dosage: "0.025% cream",
        frequency: "Once daily",
        duration: "Long-term",
        whenToTake: "Night",
        howToTake: "Apply to clean, dry skin",
        sideEffects: ["Peeling", "Photosensitivity"],
        contraindications: ["Pregnancy"],
        foodInteractions: "No food interaction; avoid with benzoyl peroxide",
        precautions: ["Use sunscreen"]
      }
    ],
    generalAdvice: ["Avoid oily cosmetics", "Wash face gently", "Use non-comedogenic products"],
    whenToSeeDoctor: ["Severe acne", "Scarring", "No improvement after 8 weeks"],
    searchKeywords: ["acne", "pimples", "tretinoin", "salicylic acid"]
  },

  {
    id: "psoriasis",
    name: "Psoriasis",
    category: "Dermatological",
    description: "Autoimmune skin disorder with scaly plaques",
    symptoms: ["Red, scaly patches", "Itching"],
    severity: "moderate",
    commonSymptoms: ["psoriasis", "scaly patches", "itching"],
    associatedSymptoms: ["joint pain", "nail changes"],
    drugRecommendations: [
      {
        name: "Clobetasol (Tenovate by GSK India)",
        class: "Topical Corticosteroid",
        dosage: "0.05% cream",
        frequency: "Twice daily",
        duration: "Up to 2 weeks",
        whenToTake: "Morning and evening",
        howToTake: "Apply to affected area",
        sideEffects: ["Skin atrophy", "Telangiectasia"],
        contraindications: ["Skin infections"],
        foodInteractions: "No food interaction; avoid with other steroids",
        precautions: ["Avoid long-term use"]
      }
    ],
    generalAdvice: ["Moisturize skin", "Avoid triggers (e.g., stress)", "Use phototherapy if prescribed"],
    whenToSeeDoctor: ["Worsening plaques", "Joint involvement", "Infections"],
    searchKeywords: ["psoriasis", "scaly skin", "topical steroids", "autoimmune"]
  },

  {
    id: "bacterial-conjunctivitis",
    name: "Bacterial Conjunctivitis",
    category: "Ophthalmic",
    description: "Bacterial infection of the conjunctiva",
    symptoms: ["Red eyes", "Discharge", "Gritty sensation"],
    severity: "mild",
    commonSymptoms: ["conjunctivitis", "red eyes", "eye discharge"],
    associatedSymptoms: ["crusting", "eyelid swelling"],
    drugRecommendations: [
      {
        name: "Ciprofloxacin (Ciplox-D by Cipla)",
        class: "Antibiotic Eye Drop",
        dosage: "1–2 drops",
        frequency: "Every 4 hours",
        duration: "7 days",
        whenToTake: "As prescribed",
        howToTake: "Instill in affected eye",
        sideEffects: ["Burning", "Irritation"],
        contraindications: ["Hypersensitivity"],
        foodInteractions: "No food interaction; avoid contact lenses",
        precautions: ["Avoid contamination of dropper"]
      }
    ],
    generalAdvice: ["Maintain hygiene", "Avoid sharing towels", "Remove contact lenses"],
    whenToSeeDoctor: ["No improvement after 3 days", "Vision changes"],
    searchKeywords: ["conjunctivitis", "pink eye", "eye infection", "antibiotic drops"]
  },

  {
    id: "glaucoma",
    name: "Glaucoma",
    category: "Ophthalmic",
    description: "Optic nerve damage due to increased intraocular pressure",
    symptoms: ["Often asymptomatic", "Vision loss"],
    severity: "severe",
    commonSymptoms: ["glaucoma", "vision loss", "eye pressure"],
    associatedSymptoms: ["halos around lights", "eye pain"],
    drugRecommendations: [
      {
        name: "Travoprost (Travatan by Alcon India)",
        class: "Prostaglandin Analog",
        dosage: "1 drop",
        frequency: "Once daily",
        duration: "Long-term",
        whenToTake: "Evening",
        howToTake: "Instill in affected eye",
        sideEffects: ["Eye redness", "Iris pigmentation"],
        contraindications: ["Uveitis"],
        foodInteractions: "No food interaction; avoid with other prostaglandins",
        precautions: ["Monitor IOP"]
      }
    ],
    generalAdvice: ["Regular eye check-ups", "Adhere to medication", "Avoid rubbing eyes"],
    whenToSeeDoctor: ["Vision loss", "Severe eye pain", "Halos"],
    searchKeywords: ["glaucoma", "eye pressure", "vision loss", "travoprost"]
  },

  {
    id: "otitis-externa",
    name: "Otitis Externa",
    category: "Otic",
    description: "Infection or inflammation of the outer ear canal, often bacterial or fungal",
    symptoms: ["Ear pain", "Itching", "Discharge"],
    severity: "mild",
    commonSymptoms: ["ear infection", "ear pain", "itching"],
    associatedSymptoms: ["hearing loss", "swelling"],
    drugRecommendations: [
      {
        name: "Chloramphenicol + Clotrimazole (Candibiotic by Glenmark)",
        class: "Antibiotic + Antifungal Ear Drop",
        dosage: "2–3 drops",
        frequency: "Three times daily",
        duration: "7 days",
        whenToTake: "Every 8 hours",
        howToTake: "Instill in affected ear",
        sideEffects: ["Burning", "Irritation"],
        contraindications: ["Perforated eardrum"],
        foodInteractions: "No food interaction; avoid water in ear",
        precautions: ["Keep ear dry"]
      }
    ],
    generalAdvice: ["Avoid swimming", "Use earplugs", "Keep ear dry"],
    whenToSeeDoctor: ["Severe pain", "Hearing loss", "No improvement after 5 days"],
    searchKeywords: ["otitis externa", "ear infection", "swimmer's ear", "ear drops"]
  },

  {
    id: "menstrual-disorders",
    name: "Menstrual Disorders",
    category: "Ayurvedic/Herbal",
    description: "Painful or irregular menstrual cycles, often due to hormonal imbalances",
    symptoms: ["Pelvic pain", "Irregular bleeding", "Cramps"],
    severity: "mild",
    commonSymptoms: ["menstrual disorders", "period pain", "irregular periods"],
    associatedSymptoms: ["mood swings", "fatigue"],
    drugRecommendations: [
      {
        name: "Evecare (by Himalaya)",
        class: "Ayurvedic Supplement",
        dosage: "2 capsules",
        frequency: "Twice daily",
        duration: "3–6 months",
        whenToTake: "Morning and evening",
        howToTake: "Swallow capsule with water",
        sideEffects: ["Rare GI upset"],
        contraindications: ["Hypersensitivity"],
        foodInteractions: "No significant interactions",
        precautions: ["Consult for prolonged use"]
      }
    ],
    generalAdvice: ["Maintain healthy diet", "Exercise", "Manage stress"],
    whenToSeeDoctor: ["Severe pain", "Heavy bleeding", "Persistent irregularity"],
    searchKeywords: ["menstrual disorders", "period problems", "evecare", "ayurvedic"]
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
