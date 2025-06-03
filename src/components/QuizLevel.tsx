
import React, { useState, useEffect } from 'react';
import { BookOpen, Trophy, ArrowLeft } from 'lucide-react';
import { useQuizQuestions, useRandomQuizQuestion } from '../hooks/useQuizData';

interface QuizLevelProps {
  difficulty: 'easy' | 'medium' | 'hard';
  onBack: () => void;
}

const QuizLevel: React.FC<QuizLevelProps> = ({ difficulty, onBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);
  const [useRandomMode, setUseRandomMode] = useState(false);

  // Fetch questions for this difficulty
  const { data: questions, isLoading: loadingQuestions } = useQuizQuestions(difficulty);
  
  // Fetch random question when needed
  const { data: randomQuestion, refetch: refetchRandom } = useRandomQuizQuestion(difficulty);

  const currentQuestions = useRandomMode ? (randomQuestion ? [randomQuestion] : []) : (questions || []);

  useEffect(() => {
    if (currentQuestions.length > 0) {
      setAnsweredQuestions(new Array(currentQuestions.length).fill(false));
    }
  }, [currentQuestions.length]);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return;

    const currentQuestion = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
    }

    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[currentQuestionIndex] = true;
    setAnsweredQuestions(newAnsweredQuestions);
    
    setShowExplanation(true);
  };

  const handleNextQuestion = async () => {
    if (useRandomMode) {
      // Get new random question
      await refetchRandom();
      setCurrentQuestionIndex(0);
    } else {
      // Move to next question in sequence
      if (currentQuestionIndex < currentQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }
    
    setSelectedAnswer('');
    setShowExplanation(false);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions(new Array(currentQuestions.length).fill(false));
  };

  const switchToRandomMode = async () => {
    setUseRandomMode(true);
    await refetchRandom();
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setShowExplanation(false);
    setScore(0);
  };

  const switchToSequentialMode = () => {
    setUseRandomMode(false);
    resetQuiz();
  };

  if (loadingQuestions) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center">
          <div className="text-gray-500">Loading {difficulty} questions...</div>
        </div>
      </div>
    );
  }

  if (!currentQuestions.length) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center mb-6">
          <button onClick={onBack} className="flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Menu
          </button>
        </div>
        <div className="text-center bg-white rounded-lg shadow-lg p-8">
          <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No {difficulty} Questions Available</h2>
          <p className="text-gray-600">Questions for this difficulty level haven't been added yet. Check back later!</p>
        </div>
      </div>
    );
  }

  const currentQuestion = currentQuestions[currentQuestionIndex];
  const isQuizComplete = !useRandomMode && answeredQuestions.every(answered => answered);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Menu
        </button>
        <div className={`px-4 py-2 rounded-full text-white font-semibold ${
          difficulty === 'easy' ? 'bg-green-500' :
          difficulty === 'medium' ? 'bg-yellow-500' : 'bg-red-500'
        }`}>
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Level
        </div>
      </div>

      {/* Mode Toggle */}
      <div className="flex justify-center mb-6 space-x-4">
        <button
          onClick={switchToSequentialMode}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            !useRandomMode 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Sequential Mode ({questions?.length || 0} questions)
        </button>
        <button
          onClick={switchToRandomMode}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            useRandomMode 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Random Mode
        </button>
      </div>

      {/* Progress and Score */}
      {!useRandomMode && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-600">
              Question {currentQuestionIndex + 1} of {currentQuestions.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              Score: {score}/{answeredQuestions.filter(answered => answered).length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Quiz Complete */}
      {isQuizComplete ? (
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Quiz Complete!</h2>
          <p className="text-xl text-gray-600 mb-6">
            Your Score: {score} out of {currentQuestions.length}
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={resetQuiz}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Retake Quiz
            </button>
            <button
              onClick={onBack}
              className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
            >
              Back to Menu
            </button>
          </div>
        </div>
      ) : (
        /* Question Card */
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                {currentQuestion.category}
              </span>
              {useRandomMode && (
                <span className="text-sm text-gray-500">Random Mode</span>
              )}
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              {currentQuestion.question}
            </h2>
          </div>

          {!showExplanation ? (
            <>
              <div className="space-y-3 mb-8">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    className={`w-full p-4 text-left rounded-lg border transition-colors ${
                      selectedAnswer === option
                        ? 'border-blue-500 bg-blue-50 text-blue-800'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {option}
                  </button>
                ))}
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleSubmitAnswer}
                  disabled={!selectedAnswer}
                  className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit Answer
                </button>
              </div>
            </>
          ) : (
            <div>
              <div className={`p-4 rounded-lg mb-6 ${
                selectedAnswer === currentQuestion.correctAnswer
                  ? 'bg-green-100 border border-green-300'
                  : 'bg-red-100 border border-red-300'
              }`}>
                <h3 className={`font-semibold mb-2 ${
                  selectedAnswer === currentQuestion.correctAnswer ? 'text-green-800' : 'text-red-800'
                }`}>
                  {selectedAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect'}
                </h3>
                <p className={`text-sm ${
                  selectedAnswer === currentQuestion.correctAnswer ? 'text-green-700' : 'text-red-700'
                }`}>
                  Your answer: {selectedAnswer}
                </p>
                {selectedAnswer !== currentQuestion.correctAnswer && (
                  <p className="text-sm text-green-700 font-medium">
                    Correct answer: {currentQuestion.correctAnswer}
                  </p>
                )}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-blue-800 mb-2">Explanation:</h4>
                <p className="text-blue-700">{currentQuestion.explanation}</p>
              </div>

              <div className="flex justify-center space-x-4">
                {(useRandomMode || currentQuestionIndex < currentQuestions.length - 1) && (
                  <button
                    onClick={handleNextQuestion}
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                  >
                    {useRandomMode ? 'Next Random Question' : 'Next Question'}
                  </button>
                )}
                
                {!useRandomMode && currentQuestionIndex === currentQuestions.length - 1 && (
                  <button
                    onClick={() => setCurrentQuestionIndex(0)}
                    className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
                  >
                    Review Questions
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizLevel;
