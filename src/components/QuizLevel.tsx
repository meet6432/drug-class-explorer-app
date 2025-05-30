
import { useState, useEffect } from 'react';
import { Award, RefreshCw, CheckCircle, XCircle, Star, Brain, Zap } from 'lucide-react';
import { QuizQuestion, getQuestionsByDifficulty } from '../data/quizData';

interface QuizLevelProps {
  difficulty: 'easy' | 'medium' | 'hard';
  onBackToMenu: () => void;
}

const QuizLevel = ({ difficulty, onBackToMenu }: QuizLevelProps) => {
  const [questions] = useState<QuizQuestion[]>(getQuestionsByDifficulty(difficulty));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedQuestions, setUsedQuestions] = useState<Set<number>>(new Set());

  const currentQuestion = questions[currentQuestionIndex];

  const getRandomQuestion = () => {
    if (usedQuestions.size >= questions.length) {
      setUsedQuestions(new Set());
    }
    
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * questions.length);
    } while (usedQuestions.has(randomIndex) && usedQuestions.size < questions.length);
    
    setUsedQuestions(prev => new Set([...prev, randomIndex]));
    setCurrentQuestionIndex(randomIndex);
  };

  const startNewQuestion = () => {
    getRandomQuestion();
    setSelectedAnswer('');
    setShowResult(false);
  };

  const handleAnswerSubmit = () => {
    if (!selectedAnswer || !currentQuestion) return;
    
    const correct = selectedAnswer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    setQuestionsAnswered(prev => prev + 1);
    
    if (correct) {
      setScore(prev => prev + 1);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setQuestionsAnswered(0);
    setUsedQuestions(new Set());
    startNewQuestion();
  };

  useEffect(() => {
    startNewQuestion();
  }, []);

  const getDifficultyIcon = () => {
    switch (difficulty) {
      case 'easy': return <Star className="h-5 w-5 text-green-500" />;
      case 'medium': return <Brain className="h-5 w-5 text-yellow-500" />;
      case 'hard': return <Zap className="h-5 w-5 text-red-500" />;
    }
  };

  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'easy': return 'from-green-400 to-green-600';
      case 'medium': return 'from-yellow-400 to-orange-500';
      case 'hard': return 'from-red-400 to-red-600';
    }
  };

  const getScoreColor = () => {
    const percentage = questionsAnswered > 0 ? (score / questionsAnswered) * 100 : 0;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBackToMenu}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
        >
          ← Back to Menu
        </button>
        <div className={`bg-gradient-to-r ${getDifficultyColor()} text-white px-6 py-2 rounded-full flex items-center space-x-2`}>
          {getDifficultyIcon()}
          <span className="font-bold capitalize">{difficulty} Level</span>
        </div>
      </div>

      {/* Score Display */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Award className="h-8 w-8 text-yellow-500" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Quiz Score</h2>
              <p className="text-gray-600">Questions available: {questions.length}</p>
            </div>
          </div>
          <div className="text-right">
            <div className={`text-3xl font-bold ${getScoreColor()}`}>
              {score}/{questionsAnswered}
            </div>
            <p className="text-sm text-gray-500">
              {questionsAnswered > 0 ? `${Math.round((score / questionsAnswered) * 100)}%` : '0%'} Correct
            </p>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: questionsAnswered > 0 ? `${(score / questionsAnswered) * 100}%` : '0%' }}
            ></div>
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        {currentQuestion && (
          <>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Question {questionsAnswered + 1}
                </h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {currentQuestion.category}
                </span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {currentQuestion.question}
              </p>
            </div>

            <div className="space-y-3 mb-6">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showResult && setSelectedAnswer(option)}
                  disabled={showResult}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                    showResult
                      ? option === currentQuestion.correctAnswer
                        ? 'bg-green-100 border-green-500 text-green-800'
                        : option === selectedAnswer && option !== currentQuestion.correctAnswer
                        ? 'bg-red-100 border-red-500 text-red-800'
                        : 'bg-gray-50 border-gray-200 text-gray-600'
                      : selectedAnswer === option
                      ? 'bg-blue-100 border-blue-500 text-blue-800'
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                  }`}
                >
                  <span className="font-medium mr-3">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                  {showResult && option === currentQuestion.correctAnswer && (
                    <CheckCircle className="inline h-5 w-5 ml-2 text-green-600" />
                  )}
                  {showResult && option === selectedAnswer && option !== currentQuestion.correctAnswer && (
                    <XCircle className="inline h-5 w-5 ml-2 text-red-600" />
                  )}
                </button>
              ))}
            </div>

            {showResult && (
              <div className={`p-4 rounded-lg mb-6 ${
                isCorrect ? 'bg-green-100 border border-green-300' : 'bg-red-100 border border-red-300'
              }`}>
                <div className="flex items-center space-x-2 mb-2">
                  {isCorrect ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                  <span className={`font-semibold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                    {isCorrect ? 'Correct!' : 'Incorrect'}
                  </span>
                </div>
                <p className={`${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                  <strong>Explanation:</strong> {currentQuestion.explanation}
                </p>
              </div>
            )}

            <div className="flex space-x-4">
              {!showResult ? (
                <button
                  onClick={handleAnswerSubmit}
                  disabled={!selectedAnswer}
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={startNewQuestion}
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  Next Question
                </button>
              )}
              
              <button
                onClick={resetQuiz}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors flex items-center space-x-2"
              >
                <RefreshCw className="h-4 w-4" />
                <span>Reset Quiz</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizLevel;
