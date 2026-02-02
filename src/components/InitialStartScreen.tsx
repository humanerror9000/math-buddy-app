import { BookOpen } from 'lucide-react';
import { unlockAudio } from '../utils/textToSpeech';

interface InitialStartScreenProps {
  onStart: () => void;
}

export function InitialStartScreen({ onStart }: InitialStartScreenProps) {
  const handleStart = () => {
    unlockAudio();
    onStart();
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-8 relative"
      style={{
        backgroundImage: 'url(/chalkboard.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-12">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border-4 border-amber-800 max-w-2xl">
          <div className="flex justify-center mb-6">
            <BookOpen size={80} className="text-green-700" />
          </div>

          <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-6 text-center">
            Math Buddy
          </h1>

          <p className="text-3xl text-gray-800 text-center mb-4 font-semibold">
            Welcome to your interactive math practice!
          </p>

          <p className="text-xl text-gray-600 text-center">
            Click below to start learning
          </p>
        </div>

        <button
          onClick={handleStart}
          className="bg-gradient-to-br from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white text-4xl font-bold px-20 py-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-all border-4 border-white"
        >
          Start Learning!
        </button>
      </div>
    </div>
  );
}
