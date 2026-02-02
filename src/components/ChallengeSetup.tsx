import { Star, Zap, Award } from 'lucide-react';

export interface ChallengeConfig {
  totalProblems: number;
  difficultySequence: string[];
}

interface ChallengeSetupProps {
  onSelect: (config: ChallengeConfig) => void;
}

export function ChallengeSetup({ onSelect }: ChallengeSetupProps) {
  const handleEasyChallenge = () => {
    onSelect({
      totalProblems: 5,
      difficultySequence: ['easy', 'easy', 'easy', 'easy', 'easy']
    });
  };

  const handleMixedChallenge = () => {
    onSelect({
      totalProblems: 10,
      difficultySequence: [
        'easy', 'easy', 'easy', 'easy', 'easy',
        'medium', 'medium', 'medium', 'medium', 'medium'
      ]
    });
  };

  const handleBigChallenge = () => {
    onSelect({
      totalProblems: 15,
      difficultySequence: [
        'easy', 'easy', 'easy', 'easy', 'easy',
        'medium', 'medium', 'medium', 'medium', 'medium',
        'hard', 'hard', 'hard', 'hard', 'hard'
      ]
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="text-center max-w-5xl w-full">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-8 font-['Permanent_Marker'] text-gray-800"
          style={{ textShadow: '3px 3px 0 rgba(255, 255, 255, 0.8)' }}
        >
          Choose Your Challenge
        </h1>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          <button
            onClick={handleEasyChallenge}
            className="group relative bg-white rounded-3xl p-8 sm:p-10 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-4 border-green-200 hover:border-green-400"
          >
            <div className="flex flex-col items-center space-y-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <Star className="w-10 h-10 sm:w-12 sm:h-12 text-white" strokeWidth={2.5} />
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-['Permanent_Marker'] text-gray-800 mb-3">
                  Easy Challenge
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 font-medium">
                  5 easy problems
                </p>
              </div>
            </div>
          </button>

          <button
            onClick={handleMixedChallenge}
            className="group relative bg-white rounded-3xl p-8 sm:p-10 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-4 border-blue-200 hover:border-blue-400"
          >
            <div className="flex flex-col items-center space-y-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-white" strokeWidth={2.5} />
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-['Permanent_Marker'] text-gray-800 mb-3">
                  Mixed Challenge
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 font-medium">
                  5 easy + 5 medium
                </p>
              </div>
            </div>
          </button>

          <button
            onClick={handleBigChallenge}
            className="group relative bg-white rounded-3xl p-8 sm:p-10 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-4 border-purple-200 hover:border-purple-400"
          >
            <div className="flex flex-col items-center space-y-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <Award className="w-10 h-10 sm:w-12 sm:h-12 text-white" strokeWidth={2.5} />
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-['Permanent_Marker'] text-gray-800 mb-3">
                  Big Challenge
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 font-medium">
                  5 easy + 5 medium + 5 hard
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
