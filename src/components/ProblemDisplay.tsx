import { Volume2, VolumeX, Delete } from 'lucide-react';
import { useState } from 'react';
import { setSoundEnabled, getSoundEnabled } from '../utils/textToSpeech';
import type { MathProblem } from '../utils/problemGenerator';

interface ProblemDisplayProps {
  problem: MathProblem;
  studentAnswer: string;
  onAnswerChange: (answer: string) => void;
  onSubmit: () => void;
  onBack: () => void;
}

export function ProblemDisplay({
  problem,
  studentAnswer,
  onAnswerChange,
  onSubmit,
  onBack
}: ProblemDisplayProps) {
  const [soundOn, setSoundOn] = useState(getSoundEnabled());
  const handleNumberClick = (num: string) => {
    onAnswerChange(studentAnswer + num);
  };

  const handleBackspace = () => {
    onAnswerChange(studentAnswer.slice(0, -1));
  };

  const handleSoundToggle = () => {
    const newSoundState = !soundOn;
    setSoundOn(newSoundState);
    setSoundEnabled(newSoundState);
  };

  const maxLength = Math.max(
    problem.num1.toString().length,
    problem.num2.toString().length
  );

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8 max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-12 w-full">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={onBack}
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-xl text-lg font-semibold transition-all"
          >
            ← Back
          </button>
          <button
            onClick={handleSoundToggle}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-lg font-semibold transition-all ${
              soundOn
                ? 'bg-green-500 hover:bg-green-600 text-white'
                : 'bg-gray-300 hover:bg-gray-400 text-gray-700'
            }`}
          >
            {soundOn ? <Volume2 size={24} /> : <VolumeX size={24} />}
            <span>Sound {soundOn ? 'On' : 'Off'}</span>
          </button>
        </div>

        <div className="flex flex-col items-end gap-2 mb-8 font-mono text-5xl font-bold">
          <div className="text-right" style={{ minWidth: `${maxLength + 2}ch` }}>
            {problem.num1}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-4xl">
              {problem.type === 'subtraction' ? '−' : '×'}
            </span>
            <div className="text-right" style={{ minWidth: `${maxLength}ch` }}>
              {problem.num2}
            </div>
          </div>
          <div className="border-t-4 border-gray-800 w-full my-2"></div>
          <div
            className="text-right bg-yellow-100 px-4 py-2 rounded-lg min-h-[4rem] flex items-center justify-end"
            style={{ minWidth: `${maxLength + 2}ch` }}
          >
            {studentAnswer || <span className="text-gray-400">?</span>}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className="bg-gradient-to-br from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white text-4xl font-bold rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all"
            >
              {num}
            </button>
          ))}
          <button
            onClick={handleBackspace}
            className="bg-gradient-to-br from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all flex items-center justify-center"
          >
            <Delete size={32} />
          </button>
          <button
            onClick={() => handleNumberClick('0')}
            className="bg-gradient-to-br from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white text-4xl font-bold rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all"
          >
            0
          </button>
          <button
            onClick={onSubmit}
            disabled={!studentAnswer}
            className="bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white text-2xl font-bold rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            ✓
          </button>
        </div>
      </div>
    </div>
  );
}
