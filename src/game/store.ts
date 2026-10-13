// src/game/store.ts
// One shared copy of the game state, so the room and the practice screens see the same stars.
// Components read it with useGame(); changes go through updateGame() and are saved right away.

import { useSyncExternalStore } from 'react';
import type { GameState } from './state';
import { loadGame, saveGame } from './state';

let state: GameState = loadGame();
const listeners = new Set<() => void>();

export function getGame(): GameState {
  return state;
}

export function updateGame(change: (s: GameState) => GameState): void {
  state = change(state);
  saveGame(state);
  listeners.forEach((l) => l());
}

export function addStars(n: number): void {
  if (n > 0) updateGame((s) => ({ ...s, stars: s.stars + n }));
}

export function useGame(): GameState {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => state,
  );
}
