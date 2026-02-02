import { Star, Sparkles, Award, Grid3x3 } from 'lucide-react';
import type { SubtractionDifficulty, MultiplicationDifficulty } from '../utils/problemGenerator';

interface DifficultySelectorProps {
  mathType: 'subtraction' | 'multiplication';
  onSelect: (difficulty: SubtractionDifficulty | MultiplicationDifficulty) => void;
  onTimesTablesSelect?: () => void;
  onBack: () => void;
}

export function DifficultySelector({ mathType, onSelect, onTimesTablesSelect, onBack }: DifficultySelectorProps) {
  const isSubtraction = mathType === 'subtraction';

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Choose Your Level!
      </h1>

      <div className="flex gap-6 flex-wrap justify-center">
        {isSubtraction ? (
          <>
            <button
              onClick={() => onSelect('easy')}
              className="flex flex-col items-center gap-4 bg-gradient-to-br from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all w-64 h-72 justify-center"
            >
              <div className="bg-white rounded-full p-6">
                <Star size={56} className="text-yellow-600" fill="currentColor" />
              </div>
              <span className="text-3xl font-bold">Easy</span>
              <span className="text-lg text-center">2-digit numbers<br />No borrowing needed</span>
            </button>

            <button
              onClick={() => onSelect('medium')}
              className="flex flex-col items-center gap-4 bg-gradient-to-br from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all w-64 h-72 justify-center"
            >
              <div className="bg-white rounded-full p-6">
                <Sparkles size={56} className="text-blue-600" />
              </div>
              <span className="text-3xl font-bold">Medium</span>
              <span className="text-lg text-center">2-3 digit numbers<br />Some borrowing</span>
            </button>

            <button
              onClick={() => onSelect('hard')}
              className="flex flex-col items-center gap-4 bg-gradient-to-br from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all w-64 h-72 justify-center"
            >
              <div className="bg-white rounded-full p-6">
                <Award size={56} className="text-red-600" />
              </div>
              <span className="text-3xl font-bold">Hard</span>
              <span className="text-lg text-center">3-4 digit numbers<br />Borrowing required</span>
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => onSelect('single-digit')}
              className="flex flex-col items-center gap-4 bg-gradient-to-br from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700 text-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all w-64 h-72 justify-center"
            >
              <div className="bg-white rounded-full p-6">
                <Star size={56} className="text-teal-600" fill="currentColor" />
              </div>
              <span className="text-3xl font-bold">Basic Facts</span>
              <span className="text-lg text-center">Single digit<br />× Single digit</span>
              <span className="text-sm opacity-90">(e.g., 7 × 8)</span>
            </button>

            <button
              onClick={() => onSelect('single-double')}
              className="flex flex-col items-center gap-4 bg-gradient-to-br from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700 text-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all w-64 h-72 justify-center"
            >
              <div className="bg-white rounded-full p-6">
                <Award size={56} className="text-pink-600" />
              </div>
              <span className="text-3xl font-bold">Challenge</span>
              <span className="text-lg text-center">Single digit<br />× Double digit</span>
              <span className="text-sm opacity-90">(e.g., 6 × 23)</span>
            </button>

            {onTimesTablesSelect && (
              <button
                onClick={onTimesTablesSelect}
                className="flex flex-col items-center gap-4 bg-gradient-to-br from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all w-64 h-72 justify-center"
              >
                <div className="bg-white rounded-full p-6">
                  <Grid3x3 size={56} className="text-orange-600" />
                </div>
                <span className="text-3xl font-bold">Times Tables</span>
                <span className="text-lg text-center">Master your<br />multiplication tables</span>
                <span className="text-sm opacity-90">(e.g., 7 × 4)</span>
              </button>
            )}
          </>
        )}
      </div>

      <button
        onClick={onBack}
        className="mt-8 px-8 py-4 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-2xl text-xl font-semibold shadow-lg transition-all"
      >
        ← Back
      </button>
    </div>
  );
}
