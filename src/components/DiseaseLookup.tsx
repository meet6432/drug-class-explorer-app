
import { useState } from 'react';
import { Search, AlertTriangle, Pill, Clock, Shield, Info, Heart, Brain, Activity } from 'lucide-react';
import { diseaseDatabase, diseaseCategories, searchDiseases, DiseaseInfo, DrugRecommendation } from '../data/diseaseDatabase';

interface DiseaseLookupProps {
  onBackToMenu: () => void;
}

const DiseaseLookup = ({ onBackToMenu }: DiseaseLookupProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDisease, setSelectedDisease] = useState<DiseaseInfo | null>(null);
  const [searchResults, setSearchResults] = useState<DiseaseInfo[]>(diseaseDatabase);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const results = searchDiseases(term, selectedCategory);
    setSearchResults(results);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const results = searchDiseases(searchTerm, category);
    setSearchResults(results);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'mild': return 'text-green-600 bg-green-100';
      case 'moderate': return 'text-yellow-600 bg-yellow-100';
      case 'severe': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cardiovascular': return <Heart className="h-5 w-5" />;
      case 'Respiratory': return <Activity className="h-5 w-5" />;
      case 'Mental Health': return <Brain className="h-5 w-5" />;
      default: return <Pill className="h-5 w-5" />;
    }
  };

  const renderDrugRecommendation = (drug: DrugRecommendation, index: number) => (
    <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
      <div className="flex items-center space-x-2 mb-3">
        <Pill className="h-6 w-6 text-blue-600" />
        <h4 className="text-lg font-bold text-blue-800">{drug.name}</h4>
        <span className="text-sm bg-blue-200 text-blue-800 px-2 py-1 rounded">{drug.class}</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <h5 className="font-semibold text-gray-700 mb-2">Dosage & Timing</h5>
          <ul className="text-sm text-gray-600 space-y-1">
            <li><strong>Dosage:</strong> {drug.dosage}</li>
            <li><strong>Frequency:</strong> {drug.frequency}</li>
            <li><strong>Duration:</strong> {drug.duration}</li>
            <li><strong>When to take:</strong> {drug.whenToTake}</li>
            <li><strong>How to take:</strong> {drug.howToTake}</li>
          </ul>
        </div>
        
        <div>
          <h5 className="font-semibold text-gray-700 mb-2">Food & Interactions</h5>
          <ul className="text-sm text-gray-600 space-y-1">
            <li><strong>Food interactions:</strong> {drug.foodInteractions}</li>
          </ul>
        </div>
      </div>
      
      <div className="space-y-3">
        <div>
          <h5 className="font-semibold text-red-700 mb-2 flex items-center space-x-1">
            <AlertTriangle className="h-4 w-4" />
            <span>Side Effects</span>
          </h5>
          <div className="text-sm text-red-600 bg-red-50 p-2 rounded">
            {drug.sideEffects.join(', ')}
          </div>
        </div>
        
        <div>
          <h5 className="font-semibold text-orange-700 mb-2 flex items-center space-x-1">
            <Shield className="h-4 w-4" />
            <span>Contraindications</span>
          </h5>
          <div className="text-sm text-orange-600 bg-orange-50 p-2 rounded">
            {drug.contraindications.join(', ')}
          </div>
        </div>
        
        <div>
          <h5 className="font-semibold text-purple-700 mb-2">Precautions</h5>
          <ul className="text-sm text-purple-600 bg-purple-50 p-2 rounded space-y-1">
            {drug.precautions.map((precaution, idx) => (
              <li key={idx}>• {precaution}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const renderDiseaseDetails = (disease: DiseaseInfo) => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          {getCategoryIcon(disease.category)}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{disease.name}</h2>
            <span className={`text-sm px-3 py-1 rounded-full ${getSeverityColor(disease.severity)}`}>
              {disease.severity.toUpperCase()}
            </span>
          </div>
        </div>
        <button
          onClick={() => setSelectedDisease(null)}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
        >
          ← Back to Search
        </button>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
        <p className="text-gray-600">{disease.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Common Symptoms</h3>
          <ul className="space-y-2">
            {disease.symptoms.map((symptom, index) => (
              <li key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">{symptom}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Associated Symptoms</h3>
          <ul className="space-y-2">
            {disease.associatedSymptoms.map((symptom, index) => (
              <li key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="text-gray-600">{symptom}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
          <Pill className="h-6 w-6 text-blue-600" />
          <span>Drug Recommendations</span>
        </h3>
        {disease.drugRecommendations.map((drug, index) => renderDrugRecommendation(drug, index))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-800 mb-3">General Advice</h4>
          <ul className="space-y-1 text-sm text-green-700">
            {disease.generalAdvice.map((advice, index) => (
              <li key={index}>• {advice}</li>
            ))}
          </ul>
        </div>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="font-semibold text-red-800 mb-3 flex items-center space-x-1">
            <AlertTriangle className="h-4 w-4" />
            <span>When to See a Doctor</span>
          </h4>
          <ul className="space-y-1 text-sm text-red-700">
            {disease.whenToSeeDoctor.map((warning, index) => (
              <li key={index}>• {warning}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-2">
          <Info className="h-5 w-5 text-yellow-600" />
          <span className="font-semibold text-yellow-800">Educational Purposes Only</span>
        </div>
        <p className="text-sm text-yellow-700">
          This information is for educational purposes only and should not replace professional medical advice. 
          Always consult with a healthcare provider for proper diagnosis and treatment.
        </p>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBackToMenu}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
        >
          ← Back to Menu
        </button>
        <div className="bg-gradient-to-r from-green-400 to-blue-600 text-white px-6 py-2 rounded-full flex items-center space-x-2">
          <Search className="h-5 w-5" />
          <span className="font-bold">Disease & Drug Lookup</span>
        </div>
      </div>

      {!selectedDisease ? (
        <>
          {/* Search Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Search Diseases & Symptoms</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search diseases, symptoms, or conditions
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="e.g., fever, high blood pressure, breathing difficulty..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {diseaseCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              Found {searchResults.length} results
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((disease) => (
              <div
                key={disease.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedDisease(disease)}
              >
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    {getCategoryIcon(disease.category)}
                    <h3 className="text-lg font-bold text-gray-800">{disease.name}</h3>
                  </div>
                  
                  <div className="mb-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${getSeverityColor(disease.severity)}`}>
                      {disease.severity.toUpperCase()}
                    </span>
                    <span className="text-xs text-gray-500 ml-2">{disease.category}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{disease.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Symptoms:</h4>
                    <div className="flex flex-wrap gap-1">
                      {disease.symptoms.slice(0, 3).map((symptom, index) => (
                        <span key={index} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                          {symptom}
                        </span>
                      ))}
                      {disease.symptoms.length > 3 && (
                        <span className="text-xs text-gray-500">+{disease.symptoms.length - 3} more</span>
                      )}
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium">
                    View Details & Drugs
                  </button>
                </div>
              </div>
            ))}
          </div>

          {searchResults.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Results Found</h3>
              <p className="text-gray-500">Try different keywords or check your spelling</p>
            </div>
          )}
        </>
      ) : (
        renderDiseaseDetails(selectedDisease)
      )}
    </div>
  );
};

export default DiseaseLookup;
