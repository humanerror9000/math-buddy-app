import { Minus, X } from 'lucide-react';
import { speak } from '../utils/textToSpeech';

interface MathTypeSelectorProps {
  onSelect: (type: 'subtraction' | 'multiplication') => void;
}

export function MathTypeSelector({ onSelect }: MathTypeSelectorProps) {
  const handleSelect = (type: 'subtraction' | 'multiplication') => {
    if (type === 'multiplication') {
      speak('Welcome to multiplication! Let\'s practice our times tables!');
    }
    onSelect(type);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Choose Your Math Adventure!
      </h1>

      <div className="flex gap-6 flex-wrap justify-center">
        <button
          onClick={() => handleSelect('subtraction')}
          className="flex flex-col items-center gap-4 bg-gradient-to-br from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all w-64 h-64 justify-center"
        >
          <div className="bg-white rounded-full p-6">
            <Minus size={64} className="text-orange-600" strokeWidth={3} />
          </div>
          <span className="text-3xl font-bold">Subtraction</span>
          <span className="text-lg">Take Away!</span>
        </button>

        <button
          onClick={() => handleSelect('multiplication')}
          className="flex flex-col items-center gap-4 bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-all w-64 h-64 justify-center"
        >
          <div className="bg-white rounded-full p-6">
            <X size={64} className="text-green-600" strokeWidth={3} />
          </div>
          <span className="text-3xl font-bold">Multiplication</span>
          <span className="text-lg">Times Fun!</span>
        </button>
      </div>
    </div>
  );
}
