import { useEffect, useState } from 'react';
import { Trophy, Play } from 'lucide-react';

interface ChallengeCompleteProps {
  totalProblems: number;
  correctAnswers: number;
  onNewChallenge: () => void;
  onFreePractice: () => void;
}

export function ChallengeComplete({
  totalProblems,
  correctAnswers,
  onNewChallenge,
  onFreePractice
}: ChallengeCompleteProps) {
  const [audioError, setAudioError] = useState(false);
  const accuracy = totalProblems > 0 ? Math.round((correctAnswers / totalProblems) * 100) : 0;

  useEffect(() => {
    playAudio();
  }, []);

  function playAudio() {
    const audio = new Audio('/audio/challenge-complete-1.mp3');

    audio.play().catch(() => {
      setAudioError(true);
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Trophy className="w-24 h-24 text-yellow-500" strokeWidth={2} />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Challenge Complete!
          </h1>
          <p className="text-2xl text-green-600 font-semibold">
            Great job!
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Your Results
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-1">
                {totalProblems}
              </div>
              <div className="text-sm text-gray-600">
                Total Problems
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-1">
                {correctAnswers}
              </div>
              <div className="text-sm text-gray-600">
                Correct
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-1">
                {accuracy}%
              </div>
              <div className="text-sm text-gray-600">
                Accuracy
              </div>
            </div>
          </div>
        </div>

        {audioError && (
          <div className="flex justify-center mb-6">
            <button
              onClick={playAudio}
              className="flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors shadow-lg"
            >
              <Play className="w-5 h-5" />
              Tap to hear Ellie
            </button>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={onNewChallenge}
            className="py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg text-xl font-bold"
          >
            New Challenge
          </button>
          <button
            onClick={onFreePractice}
            className="py-4 px-6 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-2xl hover:from-green-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-lg text-xl font-bold"
          >
            Free Practice
          </button>
        </div>
      </div>
    </div>
  );
}
