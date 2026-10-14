// src/App.tsx
// Buddy's room (home), and the practice modules opened from its Practice picker.

import { useCallback, useState } from 'react';
import { RoomHome } from './room/RoomHome';
import type { PracticeModule } from './room/PracticeSheet';
import { BorrowPractice } from './practice/BorrowPractice';
import { TimesPractice } from './practice/TimesPractice';
import { ShareArraysPractice } from './practice/ShareArraysPractice';
import { StoryPractice } from './practice/StoryPractice';
import { loadStats, saveStats } from './lib/storage';

type Screen = 'room' | PracticeModule;

/** Practice stats (problems, first-try answers, streaks), kept on the device */
function recordAnswer(firstTry: boolean) {
  const s = loadStats();
  const streak = firstTry ? s.currentStreak + 1 : 0;
  saveStats({
    totalProblems: s.totalProblems + 1,
    correctAnswers: s.correctAnswers + (firstTry ? 1 : 0),
    currentStreak: streak,
    bestStreak: Math.max(s.bestStreak, streak),
  });
}

function App() {
  const [screen, setScreen] = useState<Screen>('room');
  const toRoom = useCallback(() => setScreen('room'), []);

  return (
    <>
      {screen === 'room' && <RoomHome onPractice={setScreen} />}
      {screen === 'borrow' && <BorrowPractice onExit={toRoom} onSolved={recordAnswer} />}
      {screen === 'times' && <TimesPractice onExit={toRoom} onSolved={recordAnswer} />}
      {(screen === 'arrays' || screen === 'sharing') && <ShareArraysPractice key={screen} module={screen} onExit={toRoom} onSolved={recordAnswer} />}
      {screen === 'story' && <StoryPractice onExit={toRoom} onSolved={recordAnswer} />}
    </>
  );
}

export default App;
