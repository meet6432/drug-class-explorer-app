
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
    id: "fever-moderate",
    name: "Moderate Fever with Cold",
    category: "Respiratory/Infectious",
    description: "Body temperature 102°F-104°F (38.9°C-40°C) with cold symptoms",
    symptoms: ["Moderate fever", "Runny nose", "Congestion", "Cough", "Sore throat"],
    severity: "moderate",
    commonSymptoms: ["fever", "cold", "cough", "congestion"],
    associatedSymptoms: ["sore throat", "headache", "body aches", "fatigue"],
    drugRecommendations: [
      {
        name: "Ibuprofen",
        class: "NSAID",
        dosage: "400-600mg",
        frequency: "Every 8 hours",
        duration: "5-7 days",
        whenToTake: "With food",
        howToTake: "Oral tablets with plenty of water",
        sideEffects: ["Stomach upset", "Dizziness", "Increased bleeding risk"],
        contraindications: ["Peptic ulcers", "Severe kidney disease", "Heart failure"],
        foodInteractions: "Take with food to reduce stomach irritation",
        precautions: ["Monitor for stomach pain", "Avoid in pregnancy third trimester"]
      },
      {
        name: "Phenylephrine + Chlorpheniramine",
        class: "Decongestant + Antihistamine",
        dosage: "10mg + 4mg",
        frequency: "Every 12 hours",
        duration: "3-5 days",
        whenToTake: "With or without food",
        howToTake: "Oral tablets",
        sideEffects: ["Drowsiness", "Dry mouth", "Increased blood pressure"],
        contraindications: ["Severe hypertension", "MAO inhibitor use"],
        foodInteractions: "Avoid alcohol",
        precautions: ["May cause drowsiness", "Check blood pressure if hypertensive"]
      }
    ],
    generalAdvice: ["Increase fluid intake", "Steam inhalation", "Warm salt water gargling", "Rest"],
    whenToSeeDoctor: ["Fever >104°F", "Difficulty breathing", "Severe headache", "Symptoms worsen"],
    searchKeywords: ["fever with cold", "moderate fever", "cold symptoms", "congestion", "runny nose"]
  },
  {
    id: "fever-high-breathing",
    name: "High Fever with Breathing Difficulty",
    category: "Respiratory Emergency",
    description: "Body temperature >104°F (40°C) with respiratory distress",
    symptoms: ["High fever", "Difficulty breathing", "Shortness of breath", "Chest pain"],
    severity: "severe",
    commonSymptoms: ["high fever", "breathing difficulty", "chest pain"],
    associatedSymptoms: ["rapid heartbeat", "confusion", "severe fatigue"],
    drugRecommendations: [
      {
        name: "Immediate Medical Attention Required",
        class: "Emergency Treatment",
        dosage: "As prescribed by physician",
        frequency: "Hospital setting",
        duration: "Until stabilized",
        whenToTake: "Under medical supervision",
        howToTake: "IV/Oral as directed",
        sideEffects: ["Variable based on treatment"],
        contraindications: ["Individual assessment required"],
        foodInteractions: "As advised by healthcare team",
        precautions: ["Requires immediate hospitalization"]
      }
    ],
    generalAdvice: ["SEEK IMMEDIATE MEDICAL ATTENTION", "Do not delay treatment"],
    whenToSeeDoctor: ["IMMEDIATELY - This is a medical emergency"],
    searchKeywords: ["high fever", "difficulty breathing", "breathing problems", "chest pain", "emergency"]
  },
  {
    id: "hypertension",
    name: "High Blood Pressure",
    category: "Cardiovascular",
    description: "Elevated blood pressure readings consistently above 140/90 mmHg",
    symptoms: ["Often asymptomatic", "Headaches", "Dizziness", "Blurred vision"],
    severity: "moderate",
    commonSymptoms: ["high blood pressure", "headache"],
    associatedSymptoms: ["dizziness", "fatigue", "chest pain"],
    drugRecommendations: [
      {
        name: "Amlodipine",
        class: "Calcium Channel Blocker",
        dosage: "5-10mg",
        frequency: "Once daily",
        duration: "Long-term as prescribed",
        whenToTake: "Same time daily, with or without food",
        howToTake: "Oral tablet with water",
        sideEffects: ["Ankle swelling", "Dizziness", "Flushing", "Fatigue"],
        contraindications: ["Severe aortic stenosis", "Cardiogenic shock"],
        foodInteractions: "Avoid grapefruit juice",
        precautions: ["Monitor blood pressure regularly", "Rise slowly from sitting/lying"]
      },
      {
        name: "Lisinopril",
        class: "ACE Inhibitor",
        dosage: "10-20mg",
        frequency: "Once daily",
        duration: "Long-term as prescribed",
        whenToTake: "Same time daily, with or without food",
        howToTake: "Oral tablet with water",
        sideEffects: ["Dry cough", "Dizziness", "Hyperkalemia", "Angioedema"],
        contraindications: ["Pregnancy", "Bilateral renal artery stenosis", "Angioedema history"],
        foodInteractions: "Limit salt and potassium supplements",
        precautions: ["Monitor kidney function", "Watch for persistent cough"]
      }
    ],
    generalAdvice: ["Low sodium diet", "Regular exercise", "Weight management", "Stress reduction"],
    whenToSeeDoctor: ["BP consistently >140/90", "Severe symptoms", "Medication side effects"],
    searchKeywords: ["high blood pressure", "hypertension", "blood pressure", "headache", "dizziness"]
  },
  {
    id: "diabetes-type2",
    name: "Type 2 Diabetes",
    category: "Endocrine",
    description: "Chronic condition affecting blood sugar regulation",
    symptoms: ["Increased thirst", "Frequent urination", "Fatigue", "Blurred vision"],
    severity: "moderate",
    commonSymptoms: ["diabetes", "high blood sugar", "thirst", "urination"],
    associatedSymptoms: ["weight loss", "slow healing", "infections"],
    drugRecommendations: [
      {
        name: "Metformin",
        class: "Biguanide",
        dosage: "500-1000mg",
        frequency: "Twice daily with meals",
        duration: "Long-term as prescribed",
        whenToTake: "With breakfast and dinner",
        howToTake: "Oral tablet with food",
        sideEffects: ["Nausea", "Diarrhea", "Metallic taste", "Lactic acidosis (rare)"],
        contraindications: ["Severe kidney disease", "Acute heart failure", "Alcoholism"],
        foodInteractions: "Take with food, limit alcohol",
        precautions: ["Monitor kidney function", "Stop before contrast procedures"]
      }
    ],
    generalAdvice: ["Monitor blood glucose", "Healthy diet", "Regular exercise", "Weight management"],
    whenToSeeDoctor: ["Blood sugar consistently high", "Symptoms worsen", "Side effects occur"],
    searchKeywords: ["diabetes", "blood sugar", "glucose", "thirst", "urination", "fatigue"]
  },
  {
    id: "asthma",
    name: "Asthma",
    category: "Respiratory",
    description: "Chronic inflammatory condition affecting airways",
    symptoms: ["Wheezing", "Shortness of breath", "Chest tightness", "Coughing"],
    severity: "moderate",
    commonSymptoms: ["asthma", "wheezing", "breathing difficulty", "cough"],
    associatedSymptoms: ["chest tightness", "fatigue", "sleep disturbance"],
    drugRecommendations: [
      {
        name: "Salbutamol Inhaler",
        class: "Beta-2 Agonist Bronchodilator",
        dosage: "100-200mcg",
        frequency: "As needed for symptoms",
        duration: "For acute relief",
        whenToTake: "During breathing difficulty",
        howToTake: "Inhaled via metered dose inhaler",
        sideEffects: ["Tremor", "Rapid heartbeat", "Nervousness", "Headache"],
        contraindications: ["Hypersensitivity to salbutamol"],
        foodInteractions: "None significant",
        precautions: ["Use spacer device", "Rinse mouth after use"]
      },
      {
        name: "Budesonide Inhaler",
        class: "Inhaled Corticosteroid",
        dosage: "200-400mcg",
        frequency: "Twice daily",
        duration: "Long-term controller",
        whenToTake: "Morning and evening",
        howToTake: "Inhaled via metered dose inhaler",
        sideEffects: ["Oral thrush", "Hoarse voice", "Cough"],
        contraindications: ["Active respiratory infections"],
        foodInteractions: "None significant",
        precautions: ["Rinse mouth after use", "Regular monitoring"]
      }
    ],
    generalAdvice: ["Avoid triggers", "Use peak flow meter", "Action plan", "Regular checkups"],
    whenToSeeDoctor: ["Worsening symptoms", "Frequent reliever use", "Poor control"],
    searchKeywords: ["asthma", "wheezing", "breathing", "shortness of breath", "inhaler", "cough"]
  },
  {
    id: "depression",
    name: "Depression",
    category: "Mental Health",
    description: "Persistent feelings of sadness and loss of interest",
    symptoms: ["Persistent sadness", "Loss of interest", "Fatigue", "Sleep changes"],
    severity: "moderate",
    commonSymptoms: ["depression", "sadness", "fatigue", "sleep problems"],
    associatedSymptoms: ["appetite changes", "concentration problems", "hopelessness"],
    drugRecommendations: [
      {
        name: "Sertraline",
        class: "SSRI Antidepressant",
        dosage: "50-100mg",
        frequency: "Once daily",
        duration: "Long-term as prescribed",
        whenToTake: "Morning with or without food",
        howToTake: "Oral tablet with water",
        sideEffects: ["Nausea", "Diarrhea", "Sexual dysfunction", "Sleep changes"],
        contraindications: ["MAO inhibitor use", "Pimozide use"],
        foodInteractions: "Avoid alcohol",
        precautions: ["Monitor for suicidal thoughts", "Gradual discontinuation"]
      }
    ],
    generalAdvice: ["Therapy", "Regular exercise", "Social support", "Stress management"],
    whenToSeeDoctor: ["Persistent symptoms >2 weeks", "Suicidal thoughts", "Severe impairment"],
    searchKeywords: ["depression", "sadness", "mood", "fatigue", "sleep", "interest"]
  },
  {
    id: "anxiety",
    name: "Anxiety Disorder",
    category: "Mental Health",
    description: "Excessive worry and fear affecting daily activities",
    symptoms: ["Excessive worry", "Restlessness", "Fatigue", "Difficulty concentrating"],
    severity: "moderate",
    commonSymptoms: ["anxiety", "worry", "nervousness", "restlessness"],
    associatedSymptoms: ["panic attacks", "sleep problems", "muscle tension"],
    drugRecommendations: [
      {
        name: "Lorazepam",
        class: "Benzodiazepine",
        dosage: "0.5-2mg",
        frequency: "2-3 times daily as needed",
        duration: "Short-term use only",
        whenToTake: "During anxiety episodes",
        howToTake: "Oral tablet",
        sideEffects: ["Drowsiness", "Dizziness", "Memory problems", "Dependence risk"],
        contraindications: ["Severe respiratory depression", "Sleep apnea"],
        foodInteractions: "Avoid alcohol",
        precautions: ["Risk of dependence", "Avoid driving", "Gradual tapering"]
      }
    ],
    generalAdvice: ["Relaxation techniques", "Regular exercise", "Therapy", "Stress reduction"],
    whenToSeeDoctor: ["Severe anxiety", "Panic attacks", "Interference with daily life"],
    searchKeywords: ["anxiety", "worry", "panic", "nervousness", "restlessness", "fear"]
  }
];

export const diseaseCategories = [
  "All",
  "Cardiovascular",
  "Respiratory",
  "Infectious/Inflammatory", 
  "Endocrine",
  "Mental Health",
  "Gastrointestinal",
  "Neurological",
  "Dermatological",
  "Musculoskeletal"
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
