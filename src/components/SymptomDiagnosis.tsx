
import { useState } from 'react';
import { Stethoscope, Pill, ArrowRight, CheckCircle, Info } from 'lucide-react';
import { symptomCases, SymptomCase } from '../data/quizData';

interface SymptomDiagnosisProps {
  onBackToMenu: () => void;
}

const SymptomDiagnosis = ({ onBackToMenu }: SymptomDiagnosisProps) => {
  const [currentCase, setCurrentCase] = useState<SymptomCase | null>(null);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const selectRandomCase = () => {
    const randomCase = symptomCases[Math.floor(Math.random() * symptomCases.length)];
    setCurrentCase(randomCase);
    setShowRecommendations(false);
  };

  const handleDiagnose = () => {
    setShowRecommendations(true);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBackToMenu}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
        >
          ← Back to Menu
        </button>
        <div className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-6 py-2 rounded-full flex items-center space-x-2">
          <Stethoscope className="h-5 w-5" />
          <span className="font-bold">Symptom-Based Diagnosis</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Clinical Case Practice</h2>
          <p className="text-gray-600 text-lg">
            Practice diagnosing symptoms and recommending appropriate drug classes
          </p>
        </div>

        {!currentCase ? (
          <div className="text-center">
            <div className="mb-8">
              <Stethoscope className="h-24 w-24 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Ready to Start?</h3>
              <p className="text-gray-500">Click below to get a random clinical case</p>
            </div>
            <button
              onClick={selectRandomCase}
              className="bg-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 transition-colors text-lg"
            >
              Get Random Case
            </button>
          </div>
        ) : (
          <div>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
              <div className="flex items-start space-x-3">
                <Info className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">
                    Clinical Presentation: {currentCase.symptom}
                  </h3>
                  <p className="text-blue-700">{currentCase.description}</p>
                </div>
              </div>
            </div>

            {!showRecommendations ? (
              <div className="text-center">
                <p className="text-gray-600 mb-6 text-lg">
                  What drug classes would you recommend for this patient?
                </p>
                <button
                  onClick={handleDiagnose}
                  className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors text-lg flex items-center space-x-2 mx-auto"
                >
                  <Pill className="h-5 w-5" />
                  <span>Show Recommendations</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span>Recommended Drug Classes</span>
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {currentCase.recommendedDrugClasses.map((drugClass, index) => (
                    <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center space-x-2">
                        <Pill className="h-5 w-5 text-green-600" />
                        <span className="font-semibold text-green-800">{drugClass}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                  <h5 className="font-semibold text-yellow-800 mb-2">Clinical Rationale:</h5>
                  <p className="text-yellow-700">{currentCase.explanation}</p>
                </div>

                <div className="flex space-x-4 justify-center">
                  <button
                    onClick={selectRandomCase}
                    className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
                  >
                    New Case
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Available Cases</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {symptomCases.map((case_item) => (
            <button
              key={case_item.id}
              onClick={() => {
                setCurrentCase(case_item);
                setShowRecommendations(false);
              }}
              className="bg-white border border-gray-200 rounded-lg p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors"
            >
              {case_item.symptom}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SymptomDiagnosis;
