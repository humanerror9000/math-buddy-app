import { Book, Trophy } from 'lucide-react';

type PracticeMode = 'free' | 'challenge';

interface PracticeModeSelectorProps {
  onSelect: (mode: PracticeMode) => void;
}

export function PracticeModeSelector({ onSelect }: PracticeModeSelectorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="text-center max-w-4xl w-full">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-8 font-['Permanent_Marker'] text-gray-800"
          style={{ textShadow: '3px 3px 0 rgba(255, 255, 255, 0.8)' }}
        >
          How would you like to practice today?
        </h1>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16">
          <button
            onClick={() => onSelect('free')}
            className="group relative bg-white rounded-3xl p-8 sm:p-12 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-4 border-blue-200 hover:border-blue-400"
          >
            <div className="flex flex-col items-center space-y-6">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <Book className="w-12 h-12 sm:w-16 sm:h-16 text-white" strokeWidth={2.5} />
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-['Permanent_Marker'] text-gray-800 mb-3">
                  Free Practice
                </h2>
                <p className="text-xl sm:text-2xl text-gray-600 font-medium">
                  Practice as much as you want
                </p>
              </div>
            </div>
          </button>

          <button
            onClick={() => onSelect('challenge')}
            className="group relative bg-white rounded-3xl p-8 sm:p-12 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-4 border-yellow-200 hover:border-yellow-400"
          >
            <div className="flex flex-col items-center space-y-6">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <Trophy className="w-12 h-12 sm:w-16 sm:h-16 text-white" strokeWidth={2.5} />
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-['Permanent_Marker'] text-gray-800 mb-3">
                  Challenge
                </h2>
                <p className="text-xl sm:text-2xl text-gray-600 font-medium">
                  Complete a set of problems
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
