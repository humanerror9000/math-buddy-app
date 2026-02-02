import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Delete, CheckCircle, XCircle } from 'lucide-react';
import { setSoundEnabled, getSoundEnabled } from '../utils/textToSpeech';
import type { TablesConfig } from './TablesSetup';

interface TablesPracticeProps {
  config: TablesConfig;
  onBack: () => void;
  onStatsUpdate?: (correct: boolean) => void;
}

export function TablesPractice({ config, onBack, onStatsUpdate }: TablesPracticeProps) {
  const [soundOn, setSoundOn] = useState(getSoundEnabled());
  const [studentAnswer, setStudentAnswer] = useState('');
  const [multiplier, setMultiplier] = useState(0);
  const [lastMultiplier, setLastMultiplier] = useState<number | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | 'show-answer' | null>(null);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [shuffledList, setShuffledList] = useState<number[]>([]);
  const [shuffleIndex, setShuffleIndex] = useState(0);

  const rangeSize = Math.abs(config.rangeEnd - config.rangeStart) + 1;

  useEffect(() => {
    if (config.shuffle) {
      const list = [];
      const min = Math.min(config.rangeStart, config.rangeEnd);
      const max = Math.max(config.rangeStart, config.rangeEnd);
      for (let i = min; i <= max; i++) {
        list.push(i);
      }
      shuffleArray(list);
      setShuffledList(list);
      setShuffleIndex(1);
      const firstMultiplier = list[0];
      setMultiplier(firstMultiplier);
      setCorrectAnswer(config.table * firstMultiplier);
    } else {
      const min = Math.min(config.rangeStart, config.rangeEnd);
      const max = Math.max(config.rangeStart, config.rangeEnd);
      const firstMultiplier = Math.floor(Math.random() * (max - min + 1)) + min;
      setMultiplier(firstMultiplier);
      setCorrectAnswer(config.table * firstMultiplier);
      setLastMultiplier(firstMultiplier);
    }
  }, []);

  function shuffleArray(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function generateNewQuestion() {
    let newMultiplier: number;

    if (config.shuffle) {
      if (shuffleIndex >= shuffledList.length) {
        const list = [];
        const min = Math.min(config.rangeStart, config.rangeEnd);
        const max = Math.max(config.rangeStart, config.rangeEnd);
        for (let i = min; i <= max; i++) {
          list.push(i);
        }
        shuffleArray(list);
        setShuffledList(list);
        setShuffleIndex(1);
        newMultiplier = list[0];
      } else {
        newMultiplier = shuffledList[shuffleIndex];
        setShuffleIndex(prev => prev + 1);
      }
    } else {
      const min = Math.min(config.rangeStart, config.rangeEnd);
      const max = Math.max(config.rangeStart, config.rangeEnd);

      if (rangeSize === 1) {
        newMultiplier = min;
      } else {
        do {
          newMultiplier = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (newMultiplier === lastMultiplier && rangeSize > 1);
      }
      setLastMultiplier(newMultiplier);
    }

    setMultiplier(newMultiplier);
    setCorrectAnswer(config.table * newMultiplier);
    setStudentAnswer('');
    setAttempts(0);
    setFeedback(null);
  }

  function playRandomAudio(type: 'correct' | 'incorrect') {
    if (type === 'correct') {
      const correctFiles = [1, 2, 3, 4, 5, 6];
      const randomFile = correctFiles[Math.floor(Math.random() * correctFiles.length)];
      const audio = new Audio(`/audio/correct-${randomFile}.mp3`);
      audio.play().catch(() => {});
    } else {
      const tryAgainFiles = [1, 2, 3, 4, 5, 6];
      const randomFile = tryAgainFiles[Math.floor(Math.random() * tryAgainFiles.length)];
      const audio = new Audio(`/audio/tryagain-${randomFile}.mp3`);
      audio.play().catch(() => {});
    }
  }

  function handleNumberClick(num: string) {
    setStudentAnswer(studentAnswer + num);
  }

  function handleBackspace() {
    setStudentAnswer(studentAnswer.slice(0, -1));
  }

  function handleSubmit() {
    if (!studentAnswer || feedback) return;

    const answerNum = parseInt(studentAnswer);
    const isCorrect = answerNum === correctAnswer;

    if (isCorrect) {
      setFeedback('correct');
      playRandomAudio('correct');
      if (onStatsUpdate) {
        onStatsUpdate(true);
      }
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);

      if (newAttempts >= 2) {
        setFeedback('show-answer');
        if (onStatsUpdate) {
          onStatsUpdate(false);
        }
      } else {
        setFeedback('incorrect');
        playRandomAudio('incorrect');
      }
    }
  }

  function handleNext() {
    generateNewQuestion();
  }

  function handleTryAgain() {
    setStudentAnswer('');
    setFeedback(null);
  }

  function handleSoundToggle() {
    const newSoundState = !soundOn;
    setSoundOn(newSoundState);
    setSoundEnabled(newSoundState);
  }

  function getFirstHint(table: number, multiplier: number): string {
    if (multiplier === 0) {
      return "Anything times 0 equals 0.";
    }

    if (multiplier === 1) {
      return "Anything times 1 stays the same.";
    }

    if (multiplier === 9) {
      return "Think of ten groups, then take one away.";
    }

    if (multiplier === 10) {
      return "Just add a zero.";
    }

    if (multiplier === 11) {
      return "Write the number twice side by side.";
    }

    const hints: Record<number, string> = {
      2: "Try doubling the number.",
      3: "Think of three equal groups.",
      4: "Try doubling twice.",
      5: "Try counting by fives.",
      6: "Think of five groups, then one more.",
      7: "Start with a number you know.",
      8: "Try doubling again and again.",
      9: "Think of ten groups, then take one away.",
      10: "Just add a zero.",
      11: "Write the number twice side by side.",
      12: "Try ten groups first, then two more."
    };
    return hints[table] || "Think carefully about the groups.";
  }

  function getSecondHint(table: number, multiplier: number): { strategy: string; example: string } {
    const answer = table * multiplier;

    if (multiplier === 0) {
      return {
        strategy: "Anything times 0 equals 0.",
        example: "Zero groups means nothing at all!"
      };
    }

    if (multiplier === 1) {
      return {
        strategy: "Anything times 1 stays the same.",
        example: `For example: one group of ${table} = ${answer}`
      };
    }

    if (multiplier === 10) {
      return {
        strategy: "When multiplying by 10, just add a zero.",
        example: `For example: ${table} becomes ${table}0, which is ${answer}`
      };
    }

    if (multiplier === 9) {
      const tenGroups = table * 10;
      return {
        strategy: "Multiply by 10 first, then subtract one group.",
        example: `What is ${table} × 10? That's ${tenGroups}. Then subtract one group of ${table}: ${tenGroups} - ${table} = ${answer}`
      };
    }

    if (multiplier === 11) {
      return {
        strategy: "When multiplying by 11, write the number twice.",
        example: `For example: ${table} becomes ${table}${table}, which is ${answer}`
      };
    }

    switch (table) {
      case 2:
        return {
          strategy: "Doubling means adding the number once.",
          example: `For example: ${multiplier} + ${multiplier} = ${answer}`
        };

      case 3:
        return {
          strategy: "Add the number three times.",
          example: `For example: ${multiplier} + ${multiplier} + ${multiplier} = ${answer}`
        };

      case 4: {
        const step1 = multiplier * 2;
        return {
          strategy: "Double it once, then double again.",
          example: `For example: ${multiplier} + ${multiplier} = ${step1}, then ${step1} + ${step1} = ${answer}`
        };
      }

      case 5: {
        const steps = [];
        for (let i = 1; i <= Math.min(multiplier, 6); i++) {
          steps.push(5 * i);
        }
        const stepsDisplay = multiplier <= 6 ? steps.join(', ') : steps.join(', ') + '...';
        return {
          strategy: "Count by fives. Every answer ends in 0 or 5.",
          example: `For example: ${stepsDisplay} = ${answer}`
        };
      }

      case 6: {
        const fiveGroups = multiplier * 5;
        return {
          strategy: "Do five first, then add one more.",
          example: `For example: five ${multiplier}s = ${fiveGroups}, plus one more ${multiplier} = ${answer}`
        };
      }

      case 7: {
        const addends = Array(multiplier).fill(7).join(' + ');
        return {
          strategy: "Add seven again and again.",
          example: `For example: ${addends} = ${answer}`
        };
      }

      case 8: {
        if (multiplier === 2) {
          return {
            strategy: "Double the number.",
            example: `For example: 8 + 8 = ${answer}`
          };
        } else if (multiplier === 4) {
          return {
            strategy: "Double once. Then double again.",
            example: `For example: 8 + 8 = 16, then 16 + 16 = ${answer}`
          };
        } else {
          const addends = Array(multiplier).fill(8).join(' + ');
          return {
            strategy: "Add eight groups together.",
            example: `For example: ${addends} = ${answer}`
          };
        }
      }

      case 9: {
        const tenGroups = multiplier * 10;
        return {
          strategy: "Multiply by 10 first, then subtract one group.",
          example: `What is ${multiplier} × 10? That's ${tenGroups}. Then subtract one group of ${multiplier}: ${tenGroups} - ${multiplier} = ${answer}`
        };
      }

      case 10:
        return {
          strategy: "Ten always ends with zero.",
          example: `For example: ${multiplier} becomes ${answer}`
        };

      case 11:
        return {
          strategy: "The number appears twice.",
          example: `For example: ${multiplier} becomes ${answer}`
        };

      case 12: {
        const tenGroups = multiplier * 10;
        const twoGroups = multiplier * 2;
        return {
          strategy: "Count ten groups, then two more.",
          example: `For example: ten ${multiplier}s = ${tenGroups}, two more ${multiplier}s = ${twoGroups}, total = ${answer}`
        };
      }

      default:
        return {
          strategy: "Keep practicing!",
          example: "Count the groups one by one."
        };
    }
  }

  if (feedback === 'correct') {
    return (
      <div className="flex flex-col items-center justify-center gap-8 p-8 max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-12 w-full text-center">
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-green-600 mb-4">
            Correct!
          </h2>
          <div className="text-6xl font-bold text-gray-800 mb-6 font-mono">
            {config.table} × {multiplier} = {correctAnswer}
          </div>
          <button
            onClick={handleNext}
            className="w-full py-4 bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white text-2xl font-bold rounded-2xl shadow-lg transform hover:scale-105 transition-all"
          >
            Next Problem
          </button>
        </div>
      </div>
    );
  }

  if (feedback === 'incorrect') {
    return (
      <div className="flex flex-col items-center justify-center gap-8 p-8 max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-12 w-full text-center">
          <XCircle className="w-24 h-24 text-red-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-red-600 mb-4">
            Not quite!
          </h2>
          <div className="text-5xl font-bold text-gray-800 mb-6 font-mono">
            {config.table} × {multiplier}
          </div>
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-6">
            <p className="text-2xl font-semibold text-blue-900 mb-3">
              {getFirstHint(config.table, multiplier)}
            </p>
            <p className="text-xl text-blue-700">
              What is {config.table} groups of {multiplier}?
            </p>
          </div>
          <p className="text-2xl text-gray-700 mb-6">
            Try again! You have one more attempt.
          </p>
          <button
            onClick={handleTryAgain}
            className="w-full py-4 bg-gradient-to-br from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white text-2xl font-bold rounded-2xl shadow-lg transform hover:scale-105 transition-all"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (feedback === 'show-answer') {
    const hint = getSecondHint(config.table, multiplier);
    return (
      <div className="flex flex-col items-center justify-center gap-8 p-8 max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-12 w-full text-center">
          <div className="text-6xl mb-6">💡</div>
          <h2 className="text-4xl font-bold text-orange-600 mb-4">
            Here's the answer
          </h2>
          <div className="text-6xl font-bold text-gray-800 mb-6 font-mono">
            {config.table} × {multiplier} = {correctAnswer}
          </div>
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-6">
            <p className="text-xl font-semibold text-blue-900 mb-3">
              {hint.strategy}
            </p>
            <p className="text-lg text-blue-700 font-mono">
              {hint.example}
            </p>
          </div>
          <p className="text-xl text-gray-600 mb-6">
            Keep practicing! You'll get it next time.
          </p>
          <button
            onClick={handleNext}
            className="w-full py-4 bg-gradient-to-br from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white text-2xl font-bold rounded-2xl shadow-lg transform hover:scale-105 transition-all"
          >
            Next Problem
          </button>
        </div>
      </div>
    );
  }

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
          <div className="text-right">
            {config.table}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-4xl">×</span>
            <div className="text-right">
              {multiplier}
            </div>
          </div>
          <div className="border-t-4 border-gray-800 w-full my-2"></div>
          <div className="text-right bg-yellow-100 px-4 py-2 rounded-lg min-h-[4rem] flex items-center justify-end w-full">
            {studentAnswer || <span className="text-gray-400">?</span>}
          </div>
        </div>

        {rangeSize === 1 && (
          <div className="mb-4 text-center text-sm text-gray-600 bg-blue-50 py-2 px-4 rounded-lg">
            Only one multiplier in this range
          </div>
        )}

        <div className="grid grid-cols-3 gap-4 mb-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className="bg-gradient-to-br from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white text-4xl font-bold rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all"
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
            className="bg-gradient-to-br from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white text-4xl font-bold rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all"
          >
            0
          </button>
          <button
            onClick={handleSubmit}
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
