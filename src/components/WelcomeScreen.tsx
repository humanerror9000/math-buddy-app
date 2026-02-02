import { useEffect } from 'react';
import { Star, Sparkles, Pencil } from 'lucide-react';
import { speak, unlockAudio } from '../utils/textToSpeech';

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      speak("Hi there! Welcome! Let's start practicing some fun math problems together!");
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleStart = () => {
    unlockAudio();
    onStart();
  };

  return (
    <div
      className="flex flex-col items-center justify-center p-6 min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: 'url(/chalkboard.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        fontFamily: '"Permanent Marker", cursive'
      }}
    >
      <div className="absolute inset-0 bg-black/5"></div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-5 max-w-4xl px-4 w-full">
        <div className="flex gap-5 animate-bounce">
          <Star size={60} className="text-yellow-300 drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]" fill="currentColor" />
          <Sparkles size={60} className="text-blue-300 drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]" />
          <Star size={60} className="text-pink-300 drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]" fill="currentColor" />
        </div>

        <h1
          className="text-8xl font-bold text-white text-center leading-tight"
          style={{
            textShadow: '3px 3px 6px rgba(0,0,0,0.7), 0 0 20px rgba(255,255,255,0.3)',
            letterSpacing: '0.02em'
          }}
        >
          Math Buddy
        </h1>

        <p
          className="text-4xl text-white text-center leading-snug"
          style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.7), 0 0 15px rgba(255,255,255,0.2)'
          }}
        >
          Hi! I'm Ellie, your math buddy
        </p>

        <div className="flex items-start gap-4 max-w-3xl mt-2">
          <Pencil size={44} className="text-yellow-200 flex-shrink-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] mt-1" />
          <div>
            <p
              className="text-3xl text-yellow-100 mb-2"
              style={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
              }}
            >
              Before we start...
            </p>
            <p
              className="text-2xl text-white leading-snug"
              style={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.6)'
              }}
            >
              Grab a pencil and some paper. Solve the problems in your notebook, then type your answer here.
            </p>
          </div>
        </div>

        <button
          onClick={handleStart}
          className="bg-gradient-to-br from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white text-4xl font-bold px-20 py-7 rounded-3xl shadow-2xl transform hover:scale-105 transition-all border-4 border-white mt-2"
        >
          Let's Start!
        </button>

        <div className="mt-1">
          <p
            className="text-2xl text-gray-200 text-center mb-1"
            style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
            }}
          >
            Choose your favorite math topic and difficulty level
          </p>
          <p
            className="text-2xl text-gray-200 text-center"
            style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
            }}
          >
            Take your time - no rush!
          </p>
        </div>
      </div>
    </div>
  );
}
