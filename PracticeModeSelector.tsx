import { Book, Trophy } from 'lucide-react';

type PracticeMode = 'free' | 'challenge';

interface PracticeModeSelectorProps {
  onSelect: (mode: PracticeMode) => void;
}

export function PracticeModeSelector({ onSelect }: PracticeModeSelectorProps) {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 sm:p-10"
      style={{
        backgroundImage: "url('/chalkboard.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center max-w-4xl w-full">

        {/* Title — chalk on board style */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl mb-12 font-['Permanent_Marker'] text-white leading-tight"
          style={{
            textShadow: '2px 2px 0px rgba(0,0,0,0.4), 0 0 20px rgba(255,255,255,0.15)',
            filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))',
          }}
        >
          How would you like to practice today?
        </h1>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10">

          {/* Free Practice Card */}
          <button
            onClick={() => onSelect('free')}
            className="group flex flex-col items-center gap-6 p-8 sm:p-12 rounded-3xl transition-all duration-300 active:scale-95"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '3px solid rgba(255,255,255,0.55)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.15)',
              backdropFilter: 'blur(2px)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.16)';
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.85)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.08)';
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.55)';
            }}
          >
            {/* Icon circle */}
            <div
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{
                background: 'rgba(255,255,255,0.15)',
                border: '2px solid rgba(255,255,255,0.4)',
              }}
            >
              <Book className="w-14 h-14 sm:w-18 sm:h-18 text-white" strokeWidth={2} style={{ width: '56px', height: '56px' }} />
            </div>

            <div>
              <h2
                className="text-4xl sm:text-5xl font-['Permanent_Marker'] text-white mb-3"
                style={{ textShadow: '1px 1px 0 rgba(0,0,0,0.4)' }}
              >
                Free Practice
              </h2>
              <p
                className="text-xl sm:text-2xl font-['Permanent_Marker']"
                style={{ color: 'rgba(255,255,255,0.75)', textShadow: '1px 1px 0 rgba(0,0,0,0.3)' }}
              >
                Practice as much as you want
              </p>
            </div>
          </button>

          {/* Challenge Card */}
          <button
            onClick={() => onSelect('challenge')}
            className="group flex flex-col items-center gap-6 p-8 sm:p-12 rounded-3xl transition-all duration-300 active:scale-95"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '3px solid rgba(255,255,255,0.55)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.15)',
              backdropFilter: 'blur(2px)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.16)';
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.85)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.08)';
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.55)';
            }}
          >
            {/* Icon circle */}
            <div
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{
                background: 'rgba(255,255,255,0.15)',
                border: '2px solid rgba(255,255,255,0.4)',
              }}
            >
              <Trophy className="text-white" strokeWidth={2} style={{ width: '56px', height: '56px' }} />
            </div>

            <div>
              <h2
                className="text-4xl sm:text-5xl font-['Permanent_Marker'] text-white mb-3"
                style={{ textShadow: '1px 1px 0 rgba(0,0,0,0.4)' }}
              >
                Challenge
              </h2>
              <p
                className="text-xl sm:text-2xl font-['Permanent_Marker']"
                style={{ color: 'rgba(255,255,255,0.75)', textShadow: '1px 1px 0 rgba(0,0,0,0.3)' }}
              >
                Complete a set of problems
              </p>
            </div>
          </button>

        </div>
      </div>
    </div>
  );
}
