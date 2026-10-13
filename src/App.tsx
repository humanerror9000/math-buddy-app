// src/App.tsx
import { useState, useEffect } from 'react';
import { RoomHome } from './room/RoomHome';
import { addStars } from './game/store';
import type { PracticeModule } from './room/PracticeSheet';
import { BackToRoom } from './room/BackToRoom';
import { BorrowPractice } from './practice/BorrowPractice';
import { DifficultySelector } from './components/DifficultySelector';
import { ProblemDisplay } from './components/ProblemDisplay';
import { Feedback } from './components/Feedback';
import { StatsDisplay } from './components/StatsDisplay';
import { TablesSetup, type TablesConfig } from './components/TablesSetup';
import { TablesPractice } from './components/TablesPractice';
import { loadStats, saveStats } from './lib/storage';
import {
  generateSubtractionProblem,
  generateMultiplicationProblem,
  type SubtractionDifficulty,
  type MultiplicationDifficulty,
  type MathProblem
} from './utils/problemGenerator';

type Screen = 'room' | 'borrow' | 'difficulty' | 'problem' | 'feedback' | 'tables-setup' | 'tables-practice';

function App() {
  const [screen, setScreen] = useState<Screen>('room');
  const [tablesConfig, setTablesConfig] = useState<TablesConfig | null>(null);
  const [mathType, setMathType] = useState<'subtraction' | 'multiplication' | null>(null);
  const [difficulty, setDifficulty] = useState<SubtractionDifficulty | MultiplicationDifficulty | null>(null);
  const [currentProblem, setCurrentProblem] = useState<MathProblem | null>(null);
  const [studentAnswer, setStudentAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  // Stats — loaded from localStorage on mount
  const [totalProblems, setTotalProblems] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  useEffect(() => {
    const saved = loadStats();
    setTotalProblems(saved.totalProblems);
    setCorrectAnswers(saved.correctAnswers);
    setCurrentStreak(saved.currentStreak);
    setBestStreak(saved.bestStreak);
  }, []);

  function updateStats(correct: boolean, prevTotal: number, prevCorrect: number, prevStreak: number, prevBest: number) {
    const newTotal = prevTotal + 1;
    const newCorrect = correct ? prevCorrect + 1 : prevCorrect;
    const newStreak = correct ? prevStreak + 1 : 0;
    const newBest = Math.max(prevBest, newStreak);

    setTotalProblems(newTotal);
    setCorrectAnswers(newCorrect);
    setCurrentStreak(newStreak);
    setBestStreak(newBest);

    saveStats({
      totalProblems: newTotal,
      correctAnswers: newCorrect,
      currentStreak: newStreak,
      bestStreak: newBest,
    });

    return { newTotal, newCorrect, newStreak, newBest };
  }

  // The room's Practice picker
  function handlePractice(m: PracticeModule) {
    if (m === 'borrow') {
      setScreen('borrow');
    } else {
      // Times tables: the existing multiplication screens, until they're rebuilt with arrays
      setMathType('multiplication');
      setScreen('difficulty');
    }
  }

  function handleDifficultySelect(diff: SubtractionDifficulty | MultiplicationDifficulty) {
    setDifficulty(diff);
    generateNewProblem(mathType!, diff);
    setScreen('problem');
  }

  function generateNewProblem(type: 'subtraction' | 'multiplication', diff: SubtractionDifficulty | MultiplicationDifficulty) {
    let problem: MathProblem;

    if (type === 'subtraction') {
      problem = generateSubtractionProblem(diff as SubtractionDifficulty);
    } else {
      problem = generateMultiplicationProblem(diff as MultiplicationDifficulty);
    }

    setCurrentProblem(problem);
    setStudentAnswer('');
  }

  function handleSubmit() {
    if (!currentProblem || !studentAnswer) return;

    const answerNum = parseInt(studentAnswer);
    const correct = answerNum === currentProblem.correctAnswer;
    setIsCorrect(correct);

    updateStats(correct, totalProblems, correctAnswers, currentStreak, bestStreak);

    // Stars: one for every correct answer
    if (correct) addStars(1);

    setScreen('feedback');
  }

  function handleNext() {
    if (mathType && difficulty) {
      generateNewProblem(mathType, difficulty);
      setScreen('problem');
    }
  }

  function handleTryAgain() {
    setStudentAnswer('');
    setScreen('problem');
  }

  function handleBackToDifficulty() {
    setScreen('difficulty');
  }

  function handleBackToRoom() {
    setScreen('room');
  }

  function handleTimesTablesSelect() {
    setScreen('tables-setup');
  }

  function handleTablesStart(config: TablesConfig) {
    setTablesConfig(config);
    setScreen('tables-practice');
  }

  function handleTablesStatsUpdate(correct: boolean) {
    if (correct) addStars(1);
    updateStats(correct, totalProblems, correctAnswers, currentStreak, bestStreak);
  }

  function handleBackToTablesSetup() {
    setScreen('tables-setup');
  }

  function handleBackFromTablesSetup() {
    setScreen('difficulty');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100">
      {screen !== 'room' && screen !== 'borrow' && (
        <BackToRoom onClick={() => setScreen('room')} />
      )}

      {screen === 'borrow' && (
        <BorrowPractice
          onExit={() => setScreen('room')}
          onSolved={(firstTry) => updateStats(firstTry, totalProblems, correctAnswers, currentStreak, bestStreak)}
        />
      )}

      {screen === 'room' && (
        <RoomHome onPractice={handlePractice} />
      )}

      {screen !== 'room' && screen !== 'borrow' && screen !== 'tables-setup' && (
        <StatsDisplay
          totalProblems={totalProblems}
          correctAnswers={correctAnswers}
          currentStreak={currentStreak}
        />
      )}

      {screen === 'difficulty' && mathType && (
        <DifficultySelector
          mathType={mathType}
          onSelect={handleDifficultySelect}
          onTimesTablesSelect={mathType === 'multiplication' ? handleTimesTablesSelect : undefined}
          onBack={handleBackToRoom}
        />
      )}

      {screen === 'problem' && currentProblem && (
        <ProblemDisplay
          problem={currentProblem}
          studentAnswer={studentAnswer}
          onAnswerChange={setStudentAnswer}
          onSubmit={handleSubmit}
          onBack={handleBackToDifficulty}
        />
      )}

      {screen === 'feedback' && currentProblem && (
        <Feedback
          isCorrect={isCorrect}
          problem={currentProblem}
          studentAnswer={parseInt(studentAnswer)}
          onNext={handleNext}
          onTryAgain={handleTryAgain}
        />
      )}

      {screen === 'tables-setup' && (
        <TablesSetup
          onStart={handleTablesStart}
          onBack={handleBackFromTablesSetup}
        />
      )}

      {screen === 'tables-practice' && tablesConfig && (
        <TablesPractice
          config={tablesConfig}
          onBack={handleBackToTablesSetup}
          onStatsUpdate={handleTablesStatsUpdate}
        />
      )}
    </div>
  );
}

export default App;
