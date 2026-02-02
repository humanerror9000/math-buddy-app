import { Sparkles, ArrowRight, RotateCcw } from 'lucide-react';
import { useEffect } from 'react';
import { speakSequence } from '../utils/textToSpeech';
import type { MathProblem } from '../utils/problemGenerator';
import { SubtractionExplanation } from './SubtractionExplanation';
import { MultiplicationExplanation } from './MultiplicationExplanation';

interface FeedbackProps {
  isCorrect: boolean;
  problem: MathProblem;
  studentAnswer: number;
  onNext: () => void;
  onTryAgain: () => void;
}

const praiseMessages = [
  "Amazing work!",
  "You're a math superstar!",
  "Fantastic!",
  "Incredible job!",
  "You're on fire!",
  "Brilliant!",
  "Outstanding!",
  "You got it!",
  "Perfect!",
  "Excellent thinking!"
];

function requiresBorrowing(num1: number, num2: number): boolean {
  const str1 = num1.toString();
  const str2 = num2.toString().padStart(str1.length, '0');

  for (let i = str1.length - 1; i >= 0; i--) {
    if (parseInt(str1[i]) < parseInt(str2[i])) {
      return true;
    }
  }
  return false;
}

export function Feedback({ isCorrect, problem, studentAnswer, onNext, onTryAgain }: FeedbackProps) {
  useEffect(() => {
    if (isCorrect) {
      speakSequence(['correct']);
    } else {
      speakSequence(['tryagain']);
    }
  }, [isCorrect, problem]);

  if (isCorrect) {
    return (
      <div className="flex flex-col items-center justify-center gap-8 p-8 max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-3xl shadow-2xl p-12 w-full text-white text-center">
          <div className="flex justify-center mb-6">
            <Sparkles size={80} className="animate-bounce" fill="currentColor" />
          </div>
          <h2 className="text-5xl font-bold mb-4">
            {praiseMessages[Math.floor(Math.random() * praiseMessages.length)]}
          </h2>
          <p className="text-3xl mb-8">
            {problem.displayText} = {problem.correctAnswer}
          </p>
          <button
            onClick={onNext}
            className="bg-white text-green-600 text-2xl font-bold px-12 py-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all flex items-center gap-3 mx-auto"
          >
            Next Problem
            <ArrowRight size={32} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8 max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-12 w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-orange-600 mb-4">Let's Learn Together!</h2>
          <p className="text-2xl text-gray-700 mb-2">
            You answered: <span className="font-bold text-red-600">{studentAnswer}</span>
          </p>
          <p className="text-2xl text-gray-700">
            The correct answer is: <span className="font-bold text-green-600">{problem.correctAnswer}</span>
          </p>
        </div>

        {problem.type === 'subtraction' ? (
          <SubtractionExplanation problem={problem} />
        ) : (
          <MultiplicationExplanation problem={problem} />
        )}

        <div className="flex gap-4 justify-center mt-8">
          <button
            onClick={onTryAgain}
            className="bg-gradient-to-br from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white text-xl font-bold px-8 py-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all flex items-center gap-2"
          >
            <RotateCcw size={24} />
            Try Again
          </button>
          <button
            onClick={onNext}
            className="bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white text-xl font-bold px-8 py-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all flex items-center gap-2"
          >
            Next Problem
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
