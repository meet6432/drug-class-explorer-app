
import React, { useState } from 'react';
import { Award, BookOpen, Stethoscope, Search } from 'lucide-react';
import QuizLevel from './QuizLevel';
import SymptomDiagnosis from './SymptomDiagnosis';
import DiseaseLookup from './DiseaseLookup';
import { useQuizQuestions } from '../hooks/useQuizData';
import { useSymptomCases } from '../hooks/useSymptomCases';

const Quiz: React.FC = () => {
  const [currentView, setCurrentView] = useState<'menu' | 'easy' | 'medium' | 'hard' | 'symptoms' | 'diseases'>('menu');

  // Fetch question counts for each difficulty
  const { data: easyQuestions } = useQuizQuestions('easy');
  const { data: mediumQuestions } = useQuizQuestions('medium');
  const { data: hardQuestions } = useQuizQuestions('hard');
  const { data: symptomCases } = useSymptomCases();

  const handleBackToMenu = () => {
    setCurrentView('menu');
  };

  if (currentView === 'easy' || currentView === 'medium' || currentView === 'hard') {
    return <QuizLevel difficulty={currentView} onBack={handleBackToMenu} />;
  }

  if (currentView === 'symptoms') {
    return <SymptomDiagnosis onBackToMenu={handleBackToMenu} />;
  }

  if (currentView === 'diseases') {
    return <DiseaseLookup onBackToMenu={handleBackToMenu} />;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Award className="h-10 w-10 text-yellow-500" />
          <h2 className="text-4xl font-bold text-gray-800">Interactive Learning Hub</h2>
        </div>
        <p className="text-xl text-gray-600">
          Test your knowledge with multi-level quizzes and clinical case studies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Easy Quiz */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="bg-gradient-to-r from-green-400 to-green-600 p-6">
            <div className="flex items-center space-x-3">
              <BookOpen className="h-8 w-8 text-white" />
              <h3 className="text-2xl font-bold text-white">Easy Quiz</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-600 mb-4">
              Basic pharmacy concepts and fundamental drug knowledge
            </p>
            <div className="mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {easyQuestions?.length || 0} Questions Available
              </span>
            </div>
            <button
              onClick={() => setCurrentView('easy')}
              className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Start Easy Quiz
            </button>
          </div>
        </div>

        {/* Medium Quiz */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-6">
            <div className="flex items-center space-x-3">
              <BookOpen className="h-8 w-8 text-white" />
              <h3 className="text-2xl font-bold text-white">Medium Quiz</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-600 mb-4">
              Intermediate concepts including drug interactions and mechanisms
            </p>
            <div className="mb-4">
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                {mediumQuestions?.length || 0} Questions Available
              </span>
            </div>
            <button
              onClick={() => setCurrentView('medium')}
              className="w-full bg-yellow-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              Start Medium Quiz
            </button>
          </div>
        </div>

        {/* Hard Quiz */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="bg-gradient-to-r from-red-400 to-red-600 p-6">
            <div className="flex items-center space-x-3">
              <BookOpen className="h-8 w-8 text-white" />
              <h3 className="text-2xl font-bold text-white">Hard Quiz</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-600 mb-4">
              Advanced pharmacology and complex clinical scenarios
            </p>
            <div className="mb-4">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                {hardQuestions?.length || 0} Questions Available
              </span>
            </div>
            <button
              onClick={() => setCurrentView('hard')}
              className="w-full bg-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              Start Hard Quiz
            </button>
          </div>
        </div>

        {/* Symptom-Based Diagnosis */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="bg-gradient-to-r from-purple-400 to-purple-600 p-6">
            <div className="flex items-center space-x-3">
              <Stethoscope className="h-8 w-8 text-white" />
              <h3 className="text-2xl font-bold text-white">Clinical Cases</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-600 mb-4">
              Practice with real patient scenarios and symptom-based diagnosis
            </p>
            <div className="mb-4">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                {symptomCases?.length || 0} Cases Available
              </span>
            </div>
            <button
              onClick={() => setCurrentView('symptoms')}
              className="w-full bg-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
            >
              Start Clinical Practice
            </button>
          </div>
        </div>

        {/* Disease Lookup */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="bg-gradient-to-r from-indigo-400 to-indigo-600 p-6">
            <div className="flex items-center space-x-3">
              <Search className="h-8 w-8 text-white" />
              <h3 className="text-2xl font-bold text-white">Disease Lookup</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-600 mb-4">
              Comprehensive disease database with drug recommendations
            </p>
            <div className="mb-4">
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                Interactive Search
              </span>
            </div>
            <button
              onClick={() => setCurrentView('diseases')}
              className="w-full bg-indigo-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-600 transition-colors"
            >
              Open Disease Lookup
            </button>
          </div>
        </div>

        {/* Study Progress */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="bg-gradient-to-r from-gray-400 to-gray-600 p-6">
            <div className="flex items-center space-x-3">
              <Award className="h-8 w-8 text-white" />
              <h3 className="text-2xl font-bold text-white">Study Stats</h3>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Questions:</span>
                <span className="font-semibold">
                  {(easyQuestions?.length || 0) + (mediumQuestions?.length || 0) + (hardQuestions?.length || 0)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Clinical Cases:</span>
                <span className="font-semibold">{symptomCases?.length || 0}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Difficulty Levels:</span>
                <span className="font-semibold">3</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-12">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">How to Use the Learning Hub</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-700">
          <div>
            <h4 className="font-semibold mb-2">Quiz Modes:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Sequential: Go through all questions in order</li>
              <li>Random: Get random questions for practice</li>
              <li>Track your progress and scores</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Clinical Practice:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Real patient scenarios</li>
              <li>Symptom-based diagnosis</li>
              <li>Drug recommendation practice</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
