
import { useState, useEffect } from 'react';
import { Award, RefreshCw, CheckCircle, XCircle } from 'lucide-react';

interface DrugClass {
  name: string;
  category: string;
  description: string;
  mechanism: string;
  uses: string;
  side_effects: string;
  examples: string[];
}

interface QuizProps {
  drugClasses: DrugClass[];
}

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  type: 'example' | 'use';
}

const Quiz = ({ drugClasses }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  const generateRandomQuestion = (): Question => {
    const questionType = Math.random() > 0.5 ? 'example' : 'use';
    const randomDrug = drugClasses[Math.floor(Math.random() * drugClasses.length)];
    
    if (questionType === 'example') {
      if (randomDrug.examples.length === 0) {
        // Fallback to use question if no examples
        return generateRandomQuestion();
      }
      
      const correctExample = randomDrug.examples[Math.floor(Math.random() * randomDrug.examples.length)];
      const wrongOptions = [];
      
      // Get wrong examples from other drug classes
      while (wrongOptions.length < 3) {
        const randomOtherDrug = drugClasses[Math.floor(Math.random() * drugClasses.length)];
        if (randomOtherDrug.id !== randomDrug.id && randomOtherDrug.examples.length > 0) {
          const wrongExample = randomOtherDrug.examples[Math.floor(Math.random() * randomOtherDrug.examples.length)];
          if (!wrongOptions.includes(wrongExample) && wrongExample !== correctExample) {
            wrongOptions.push(wrongExample);
          }
        }
      }
      
      const allOptions = [correctExample, ...wrongOptions];
      const shuffledOptions = allOptions.sort(() => Math.random() - 0.5);
      
      return {
        question: `Which of these is an example of ${randomDrug.name}?`,
        options: shuffledOptions,
        correctAnswer: correctExample,
        type: 'example'
      };
    } else {
      // Use question
      const uses = randomDrug.uses.split(',').map(use => use.trim());
      const correctUse = uses[0]; // Take the first use
      
      const wrongOptions = [
        'Treating common cold symptoms',
        'Reducing fever only',
        'Improving sleep quality'
      ];
      
      const allOptions = [correctUse, ...wrongOptions];
      const shuffledOptions = allOptions.sort(() => Math.random() - 0.5);
      
      return {
        question: `What is a primary therapeutic use of ${randomDrug.name}?`,
        options: shuffledOptions,
        correctAnswer: correctUse,
        type: 'use'
      };
    }
  };

  const startNewQuestion = () => {
    setCurrentQuestion(generateRandomQuestion());
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
    startNewQuestion();
  };

  useEffect(() => {
    startNewQuestion();
  }, []);

  const getScoreColor = () => {
    const percentage = questionsAnswered > 0 ? (score / questionsAnswered) * 100 : 0;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const showCelebration = score >= 10 && score % 5 === 0;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Score Display */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Award className="h-8 w-8 text-yellow-500" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Quiz Score</h2>
              <p className="text-gray-600">Test your pharmacy knowledge!</p>
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
        
        {/* Progress Bar */}
        <div className="mt-4">
          <div className="bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: questionsAnswered > 0 ? `${(score / questionsAnswered) * 100}%` : '0%' }}
            ></div>
          </div>
        </div>
      </div>

      {/* Celebration */}
      {showCelebration && (
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-6 mb-6 text-white text-center animate-pulse">
          <div className="text-4xl mb-2">🎉</div>
          <h3 className="text-xl font-bold">Excellent Work!</h3>
          <p>You've reached {score} correct answers!</p>
        </div>
      )}

      {/* Quiz Card */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        {currentQuestion && (
          <>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Question {questionsAnswered + 1}
              </h3>
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
                <div className="flex items-center space-x-2">
                  {isCorrect ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                  <span className={`font-semibold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                    {isCorrect ? 'Correct!' : 'Incorrect'}
                  </span>
                </div>
                {!isCorrect && (
                  <p className="text-red-700 mt-2">
                    The correct answer is: <strong>{currentQuestion.correctAnswer}</strong>
                  </p>
                )}
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

export default Quiz;
