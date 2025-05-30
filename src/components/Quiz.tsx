
import { useState } from 'react';
import { Award, Brain, Star, Zap, Stethoscope, BookOpen, Search } from 'lucide-react';
import QuizLevel from './QuizLevel';
import SymptomDiagnosis from './SymptomDiagnosis';
import DiseaseLookup from './DiseaseLookup';

type QuizMode = 'menu' | 'easy' | 'medium' | 'hard' | 'symptoms' | 'diseases';

const Quiz = () => {
  const [currentMode, setCurrentMode] = useState<QuizMode>('menu');

  const renderQuizMenu = () => (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <Award className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Pharmacy Learning Center</h1>
        <p className="text-xl text-gray-600">Choose your learning path</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {/* Easy Level */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div className="bg-gradient-to-r from-green-400 to-green-600 p-6 text-white text-center">
            <Star className="h-12 w-12 mx-auto mb-3" />
            <h3 className="text-xl font-bold">Easy Level</h3>
            <p className="text-green-100 mt-2">100+ Questions</p>
          </div>
          <div className="p-6">
            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              <li>• Basic drug classifications</li>
              <li>• Common indications</li>
              <li>• Simple mechanisms</li>
              <li>• Basic side effects</li>
            </ul>
            <button
              onClick={() => setCurrentMode('easy')}
              className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Start Easy Quiz
            </button>
          </div>
        </div>

        {/* Medium Level */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 text-white text-center">
            <Brain className="h-12 w-12 mx-auto mb-3" />
            <h3 className="text-xl font-bold">Medium Level</h3>
            <p className="text-yellow-100 mt-2">100+ Questions</p>
          </div>
          <div className="p-6">
            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              <li>• Drug interactions</li>
              <li>• Contraindications</li>
              <li>• Detailed mechanisms</li>
              <li>• Clinical applications</li>
            </ul>
            <button
              onClick={() => setCurrentMode('medium')}
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Start Medium Quiz
            </button>
          </div>
        </div>

        {/* Hard Level */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div className="bg-gradient-to-r from-red-400 to-red-600 p-6 text-white text-center">
            <Zap className="h-12 w-12 mx-auto mb-3" />
            <h3 className="text-xl font-bold">Hard Level</h3>
            <p className="text-red-100 mt-2">100+ Questions</p>
          </div>
          <div className="p-6">
            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              <li>• Complex drug interactions</li>
              <li>• Advanced pharmacology</li>
              <li>• Clinical decision making</li>
              <li>• Specialized therapeutics</li>
            </ul>
            <button
              onClick={() => setCurrentMode('hard')}
              className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              Start Hard Quiz
            </button>
          </div>
        </div>

        {/* Symptom Diagnosis */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div className="bg-gradient-to-r from-purple-400 to-purple-600 p-6 text-white text-center">
            <Stethoscope className="h-12 w-12 mx-auto mb-3" />
            <h3 className="text-xl font-bold">Symptom Cases</h3>
            <p className="text-purple-100 mt-2">Clinical Practice</p>
          </div>
          <div className="p-6">
            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              <li>• Patient presentations</li>
              <li>• Drug recommendations</li>
              <li>• Clinical reasoning</li>
              <li>• Real-world scenarios</li>
            </ul>
            <button
              onClick={() => setCurrentMode('symptoms')}
              className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
            >
              Practice Diagnosis
            </button>
          </div>
        </div>

        {/* Disease Lookup */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div className="bg-gradient-to-r from-blue-400 to-teal-600 p-6 text-white text-center">
            <Search className="h-12 w-12 mx-auto mb-3" />
            <h3 className="text-xl font-bold">Disease Lookup</h3>
            <p className="text-blue-100 mt-2">Drug Reference</p>
          </div>
          <div className="p-6">
            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              <li>• Search diseases & symptoms</li>
              <li>• Detailed drug information</li>
              <li>• Dosage & administration</li>
              <li>• Side effects & precautions</li>
            </ul>
            <button
              onClick={() => setCurrentMode('diseases')}
              className="w-full bg-teal-500 text-white py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
            >
              Search Diseases
            </button>
          </div>
        </div>
      </div>

      {/* Study Tips */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
        <div className="flex items-center space-x-3 mb-4">
          <BookOpen className="h-8 w-8 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">Study Tips</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-gray-700">
          <div>
            <h3 className="font-semibold text-blue-800 mb-2">Start with Basics</h3>
            <p className="text-sm">Begin with easy level to build foundation knowledge before advancing.</p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-800 mb-2">Read Explanations</h3>
            <p className="text-sm">Always read the explanations to understand the reasoning behind answers.</p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-800 mb-2">Practice Cases</h3>
            <p className="text-sm">Use symptom diagnosis to apply knowledge in clinical scenarios.</p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-800 mb-2">Use Disease Lookup</h3>
            <p className="text-sm">Search specific conditions to learn about drug treatments and dosages.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentMode = () => {
    switch (currentMode) {
      case 'easy':
        return <QuizLevel difficulty="easy" onBackToMenu={() => setCurrentMode('menu')} />;
      case 'medium':
        return <QuizLevel difficulty="medium" onBackToMenu={() => setCurrentMode('menu')} />;
      case 'hard':
        return <QuizLevel difficulty="hard" onBackToMenu={() => setCurrentMode('menu')} />;
      case 'symptoms':
        return <SymptomDiagnosis onBackToMenu={() => setCurrentMode('menu')} />;
      case 'diseases':
        return <DiseaseLookup onBackToMenu={() => setCurrentMode('menu')} />;
      default:
        return renderQuizMenu();
    }
  };

  return renderCurrentMode();
};

export default Quiz;
