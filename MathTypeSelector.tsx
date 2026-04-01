import { speak } from '../utils/textToSpeech';

interface MathTypeSelectorProps {
  onSelect: (type: 'subtraction' | 'multiplication') => void;
}

export function MathTypeSelector({ onSelect }: MathTypeSelectorProps) {
  const handleSelect = (type: 'subtraction' | 'multiplication') => {
    if (type === 'multiplication') {
      speak("Welcome to multiplication! Let's practice our times tables!");
    }
    onSelect(type);
  };

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

        {/* Title */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl mb-12 font-['Permanent_Marker'] text-white leading-tight"
          style={{
            textShadow: '2px 2px 0px rgba(0,0,0,0.4), 0 0 20px rgba(255,255,255,0.15)',
            filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))',
          }}
        >
          Choose Your Math Adventure!
        </h1>

        <div className="flex gap-8 sm:gap-12 flex-wrap justify-center">

          {/* Subtraction */}
          <button
            onClick={() => handleSelect('subtraction')}
            className="group flex flex-col items-center gap-6 p-10 sm:p-14 rounded-3xl transition-all duration-300 active:scale-95 w-72 sm:w-80"
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
            {/* Minus symbol — large chalk-style */}
            <div
              className="w-32 h-32 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{
                background: 'rgba(255,255,255,0.15)',
                border: '2px solid rgba(255,255,255,0.4)',
              }}
            >
              <span
                className="font-['Permanent_Marker'] text-white select-none"
                style={{ fontSize: '72px', lineHeight: 1, marginTop: '-6px', textShadow: '2px 2px 0 rgba(0,0,0,0.3)' }}
              >
                −
              </span>
            </div>

            <div>
              <h2
                className="text-4xl sm:text-5xl font-['Permanent_Marker'] text-white mb-2"
                style={{ textShadow: '1px 1px 0 rgba(0,0,0,0.4)' }}
              >
                Subtraction
              </h2>
              <p
                className="text-2xl font-['Permanent_Marker']"
                style={{ color: 'rgba(255,255,255,0.75)', textShadow: '1px 1px 0 rgba(0,0,0,0.3)' }}
              >
                Take Away!
              </p>
            </div>
          </button>

          {/* Multiplication */}
          <button
            onClick={() => handleSelect('multiplication')}
            className="group flex flex-col items-center gap-6 p-10 sm:p-14 rounded-3xl transition-all duration-300 active:scale-95 w-72 sm:w-80"
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
            {/* Times symbol — large chalk-style */}
            <div
              className="w-32 h-32 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{
                background: 'rgba(255,255,255,0.15)',
                border: '2px solid rgba(255,255,255,0.4)',
              }}
            >
              <span
                className="font-['Permanent_Marker'] text-white select-none"
                style={{ fontSize: '64px', lineHeight: 1, marginTop: '-4px', textShadow: '2px 2px 0 rgba(0,0,0,0.3)' }}
              >
                ×
              </span>
            </div>

            <div>
              <h2
                className="text-4xl sm:text-5xl font-['Permanent_Marker'] text-white mb-2"
                style={{ textShadow: '1px 1px 0 rgba(0,0,0,0.4)' }}
              >
                Multiplication
              </h2>
              <p
                className="text-2xl font-['Permanent_Marker']"
                style={{ color: 'rgba(255,255,255,0.75)', textShadow: '1px 1px 0 rgba(0,0,0,0.3)' }}
              >
                Times Fun!
              </p>
            </div>
          </button>

        </div>
      </div>
    </div>
  );
}
