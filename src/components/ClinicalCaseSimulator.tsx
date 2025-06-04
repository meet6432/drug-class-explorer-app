
import { useState } from 'react';
import { FileText, Play, CheckCircle, Clock, User } from 'lucide-react';
import { useClinicalCases, useRandomClinicalCase } from '../hooks/usePharmacyFeatures';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ClinicalCaseSimulatorProps {
  onBackToMenu: () => void;
}

const ClinicalCaseSimulator = ({ onBackToMenu }: ClinicalCaseSimulatorProps) => {
  const [currentCase, setCurrentCase] = useState<any>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');

  const { data: cases, isLoading } = useClinicalCases();
  const { refetch: getRandomCase, isLoading: loadingRandom } = useRandomClinicalCase();

  const startRandomCase = async () => {
    const { data } = await getRandomCase();
    if (data) {
      setCurrentCase(data);
      setCurrentStep(0);
      setShowAnswer(false);
      setSelectedAnswer('');
    }
  };

  const selectCase = (selectedCase: any) => {
    setCurrentCase(selectedCase);
    setCurrentStep(0);
    setShowAnswer(false);
    setSelectedAnswer('');
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setShowAnswer(true);
  };

  const nextStep = () => {
    if (currentStep < currentCase.steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setShowAnswer(false);
      setSelectedAnswer('');
    }
  };

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (currentCase) {
    const step = currentCase.steps[currentStep];
    return (
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setCurrentCase(null)}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            ← Back to Cases
          </button>
          <div className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-6 py-2 rounded-full flex items-center space-x-2">
            <FileText className="h-5 w-5" />
            <span className="font-bold">Clinical Case Simulator</span>
          </div>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{currentCase.title}</span>
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-sm ${getDifficultyColor(currentCase.difficulty_level)}`}>
                  {currentCase.difficulty_level}
                </span>
                <span className="text-sm text-gray-500">
                  Step {currentStep + 1} of {currentCase.steps.length}
                </span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-gray-500" />
                <span className="text-sm">
                  {currentCase.patient_info.gender}, {currentCase.patient_info.age} years
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <span className="text-sm">{currentCase.estimated_duration} min</span>
              </div>
              <div className="text-sm text-gray-600">Category: {currentCase.category}</div>
            </div>

            {currentStep === 0 && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-blue-800 mb-2">Initial Presentation</h3>
                <p className="text-blue-700">{currentCase.initial_presentation}</p>
                {currentCase.patient_info.medical_history && (
                  <div className="mt-3">
                    <span className="font-medium text-blue-800">Medical History: </span>
                    <span className="text-blue-700">
                      {currentCase.patient_info.medical_history.join(', ')}
                    </span>
                  </div>
                )}
              </div>
            )}

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">{step.scenario}</h3>
              <p className="text-gray-700 mb-6">{step.question}</p>

              <div className="space-y-3">
                {step.options.map((option: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    disabled={showAnswer}
                    className={`w-full text-left p-4 rounded-lg border transition-colors ${
                      selectedAnswer === option
                        ? option === step.correct
                          ? 'bg-green-50 border-green-300 text-green-800'
                          : 'bg-red-50 border-red-300 text-red-800'
                        : showAnswer && option === step.correct
                        ? 'bg-green-50 border-green-300 text-green-800'
                        : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {showAnswer && (
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Explanation:</h4>
                  <p className="text-yellow-700">{step.explanation}</p>
                  {currentStep < currentCase.steps.length - 1 && (
                    <Button onClick={nextStep} className="mt-4">
                      Next Step
                    </Button>
                  )}
                  {currentStep === currentCase.steps.length - 1 && (
                    <div className="mt-4 text-green-700 font-semibold">
                      Case Complete! 🎉
                    </div>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBackToMenu}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
        >
          ← Back to Menu
        </button>
        <div className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-6 py-2 rounded-full flex items-center space-x-2">
          <FileText className="h-5 w-5" />
          <span className="font-bold">Clinical Case Simulator</span>
        </div>
      </div>

      <div className="text-center mb-8">
        <Button
          onClick={startRandomCase}
          disabled={loadingRandom}
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg"
        >
          <Play className="h-5 w-5 mr-2" />
          {loadingRandom ? 'Loading...' : 'Start Random Case'}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <div className="col-span-full text-center py-8">Loading cases...</div>
        ) : (
          cases?.map((case_item) => (
            <Card key={case_item.id} className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{case_item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm ${getDifficultyColor(case_item.difficulty_level)}`}>
                    {case_item.difficulty_level}
                  </span>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {case_item.initial_presentation}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{case_item.category}</span>
                    <span>{case_item.estimated_duration} min</span>
                  </div>
                  <Button
                    onClick={() => selectCase(case_item)}
                    className="w-full"
                    variant="outline"
                  >
                    Start Case
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default ClinicalCaseSimulator;
