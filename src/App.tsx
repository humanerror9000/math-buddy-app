import { useState, useEffect } from 'react';
import { InitialStartScreen } from './components/InitialStartScreen';
import { WelcomeScreen } from './components/WelcomeScreen';
import { PracticeModeSelector } from './components/PracticeModeSelector';
import { ChallengeSetup, type ChallengeConfig } from './components/ChallengeSetup';
import { MathTypeSelector } from './components/MathTypeSelector';
import { DifficultySelector } from './components/DifficultySelector';
import { ProblemDisplay } from './components/ProblemDisplay';
import { Feedback } from './components/Feedback';
import { StatsDisplay } from './components/StatsDisplay';
import { ChallengeComplete } from './components/ChallengeComplete';
import { TablesSetup, type TablesConfig } from './components/TablesSetup';
import { TablesPractice } from './components/TablesPractice';
import { supabase } from './lib/supabase';
import {
  generateSubtractionProblem,
  generateMultiplicationProblem,
  type SubtractionDifficulty,
  type MultiplicationDifficulty,
  type MathProblem
} from './utils/problemGenerator';

type Screen = 'initial-start' | 'welcome' | 'practice-mode' | 'challenge-setup' | 'math-type' | 'difficulty' | 'problem' | 'feedback' | 'challenge-complete' | 'tables-setup' | 'tables-practice';
type PracticeMode = 'free' | 'challenge';

function App() {
  const [screen, setScreen] = useState<Screen>('initial-start');
  const [practiceMode, setPracticeMode] = useState<PracticeMode | null>(null);
  const [challengeConfig, setChallengeConfig] = useState<ChallengeConfig | null>(null);
  const [challengeProblemIndex, setChallengeProblemIndex] = useState(0);
  const [challengeTotal, setChallengeTotal] = useState(0);
  const [challengeCorrect, setChallengeCorrect] = useState(0);
  const [tablesConfig, setTablesConfig] = useState<TablesConfig | null>(null);
  const [mathType, setMathType] = useState<'subtraction' | 'multiplication' | null>(null);
  const [difficulty, setDifficulty] = useState<SubtractionDifficulty | MultiplicationDifficulty | null>(null);
  const [currentProblem, setCurrentProblem] = useState<MathProblem | null>(null);
  const [studentAnswer, setStudentAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [sessionId] = useState(() => crypto.randomUUID());
  const [statsId, setStatsId] = useState<string | null>(null);
  const [totalProblems, setTotalProblems] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);

  useEffect(() => {
    initializeSession();
  }, []);

  async function initializeSession() {
    const { data, error } = await supabase
      .from('session_stats')
      .insert({
        session_id: sessionId,
        total_problems: 0,
        correct_answers: 0,
        current_streak: 0,
        best_streak: 0
      })
      .select()
      .maybeSingle();

    if (data && !error) {
      setStatsId(data.id);
    }
  }

  function handlePracticeModeSelect(mode: PracticeMode) {
    setPracticeMode(mode);
    if (mode === 'challenge') {
      setScreen('challenge-setup');
    } else {
      setScreen('math-type');
    }
  }

  function handleChallengeSelect(config: ChallengeConfig) {
    setChallengeConfig(config);
    setChallengeProblemIndex(0);
    setChallengeTotal(0);
    setChallengeCorrect(0);
    setScreen('math-type');
  }

  function handleMathTypeSelect(type: 'subtraction' | 'multiplication') {
    setMathType(type);

    if (practiceMode === 'challenge' && challengeConfig) {
      const firstDifficulty = challengeConfig.difficultySequence[0] as SubtractionDifficulty | MultiplicationDifficulty;
      generateNewProblem(type, firstDifficulty);
      setScreen('problem');
    } else {
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

  async function handleSubmit() {
    if (!currentProblem || !studentAnswer) return;

    const answerNum = parseInt(studentAnswer);
    const correct = answerNum === currentProblem.correctAnswer;
    setIsCorrect(correct);

    const newTotalProblems = totalProblems + 1;
    const newCorrectAnswers = correct ? correctAnswers + 1 : correctAnswers;
    const newStreak = correct ? currentStreak + 1 : 0;

    setTotalProblems(newTotalProblems);
    setCorrectAnswers(newCorrectAnswers);
    setCurrentStreak(newStreak);

    if (practiceMode === 'challenge') {
      setChallengeTotal(challengeTotal + 1);
      if (correct) {
        setChallengeCorrect(challengeCorrect + 1);
      }
    }

    await supabase.from('practice_attempts').insert({
      problem_type: currentProblem.type,
      difficulty: currentProblem.difficulty,
      problem_text: currentProblem.displayText,
      correct_answer: currentProblem.correctAnswer,
      student_answer: answerNum,
      is_correct: correct
    });

    if (statsId) {
      await supabase
        .from('session_stats')
        .update({
          total_problems: newTotalProblems,
          correct_answers: newCorrectAnswers,
          current_streak: newStreak,
          best_streak: newStreak,
          last_updated: new Date().toISOString()
        })
        .eq('id', statsId);
    }

    setScreen('feedback');
  }

  function handleNext() {
    if (practiceMode === 'challenge' && challengeConfig && mathType) {
      const nextIndex = challengeProblemIndex + 1;

      if (nextIndex >= challengeConfig.totalProblems) {
        setScreen('challenge-complete');
        setChallengeProblemIndex(0);
        return;
      }

      const nextDifficulty = challengeConfig.difficultySequence[nextIndex] as SubtractionDifficulty | MultiplicationDifficulty;
      setChallengeProblemIndex(nextIndex);
      generateNewProblem(mathType, nextDifficulty);
      setScreen('problem');
    } else if (mathType && difficulty) {
      generateNewProblem(mathType, difficulty);
      setScreen('problem');
    }
  }

  function handleTryAgain() {
    setStudentAnswer('');
    setScreen('problem');
  }

  function handleBackToDifficulty() {
    if (practiceMode === 'challenge') {
      setScreen('math-type');
    } else {
      setScreen('difficulty');
    }
  }

  function handleBackToMathType() {
    setScreen('math-type');
  }

  function handleNewChallenge() {
    setScreen('challenge-setup');
  }

  function handleFreePractice() {
    setPracticeMode('free');
    setScreen('math-type');
  }

  function handleTimesTablesSelect() {
    setScreen('tables-setup');
  }

  function handleTablesStart(config: TablesConfig) {
    setTablesConfig(config);
    setScreen('tables-practice');
  }

  function handleTablesStatsUpdate(correct: boolean) {
    const newTotalProblems = totalProblems + 1;
    const newCorrectAnswers = correct ? correctAnswers + 1 : correctAnswers;
    const newStreak = correct ? currentStreak + 1 : 0;

    setTotalProblems(newTotalProblems);
    setCorrectAnswers(newCorrectAnswers);
    setCurrentStreak(newStreak);

    if (statsId) {
      supabase
        .from('session_stats')
        .update({
          total_problems: newTotalProblems,
          correct_answers: newCorrectAnswers,
          current_streak: newStreak,
          best_streak: newStreak,
          last_updated: new Date().toISOString()
        })
        .eq('id', statsId);
    }
  }

  function handleBackToTablesSetup() {
    setScreen('tables-setup');
  }

  function handleBackFromTablesSetup() {
    setScreen('difficulty');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100">
      {screen !== 'initial-start' && screen !== 'welcome' && screen !== 'practice-mode' && screen !== 'challenge-setup' && screen !== 'challenge-complete' && screen !== 'tables-setup' && (
        <StatsDisplay
          totalProblems={totalProblems}
          correctAnswers={correctAnswers}
          currentStreak={currentStreak}
        />
      )}

      {screen === 'initial-start' && (
        <InitialStartScreen onStart={() => setScreen('welcome')} />
      )}

      {screen === 'welcome' && (
        <WelcomeScreen onStart={() => setScreen('practice-mode')} />
      )}

      {screen === 'practice-mode' && (
        <PracticeModeSelector onSelect={handlePracticeModeSelect} />
      )}

      {screen === 'challenge-setup' && (
        <ChallengeSetup onSelect={handleChallengeSelect} />
      )}

      {screen === 'math-type' && (
        <MathTypeSelector onSelect={handleMathTypeSelect} />
      )}

      {screen === 'difficulty' && mathType && practiceMode === 'free' && (
        <DifficultySelector
          mathType={mathType}
          onSelect={handleDifficultySelect}
          onTimesTablesSelect={mathType === 'multiplication' ? handleTimesTablesSelect : undefined}
          onBack={handleBackToMathType}
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

      {screen === 'challenge-complete' && (
        <ChallengeComplete
          totalProblems={challengeTotal}
          correctAnswers={challengeCorrect}
          onNewChallenge={handleNewChallenge}
          onFreePractice={handleFreePractice}
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
