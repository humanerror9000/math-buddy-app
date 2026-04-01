// src/lib/storage.ts
// Replaces Supabase — all stats stored locally in localStorage

export interface SessionStats {
  totalProblems: number;
  correctAnswers: number;
  currentStreak: number;
  bestStreak: number;
}

const STATS_KEY = 'mathbuddy_stats';

export function loadStats(): SessionStats {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // corrupted data — reset
  }
  return {
    totalProblems: 0,
    correctAnswers: 0,
    currentStreak: 0,
    bestStreak: 0,
  };
}

export function saveStats(stats: SessionStats): void {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch {
    // storage full or unavailable — fail silently
  }
}

export function resetStats(): void {
  localStorage.removeItem(STATS_KEY);
}
