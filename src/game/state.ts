// src/game/state.ts
// The player's saved progress: Buddy's name and look, stars, unlocked treasures and the room layout.
// Stored on the device only (localStorage), like the practice stats.

import type { ItemType } from './catalog';
import { itemDef } from './catalog';

export type Lang = 'en' | 'es';
export type BuddyKind = 'boy' | 'girl';

export interface PlacedItem {
  id: number;
  type: ItemType;
  /** Floor tile of the item's corner (0–7) */
  x: number;
  z: number;
  /** Quarter turns, 0–3 */
  rot: number;
  /** Index into the catalog item's colors */
  color: number;
}

export interface GameState {
  version: 1;
  name: string | null;
  kind: BuddyKind;
  lang: Lang;
  stars: number;
  /** Items unlocked so far (each can be placed once) */
  unlocked: ItemType[];
  /** Items unlocked in the last few days, for the "New" tag */
  newSince: Partial<Record<ItemType, number>>;
  room: PlacedItem[];
  nextId: number;
  /** Borrowing practice: level 0 blocks, 1 discs, 2 pencil; rounds finished at the current level */
  borrow: { level: number; rounds: number };
  /** Times tables: steps finished per table (0–3; 3 means learned) */
  tables: Record<string, number>;
  /** Arrays and Sharing: steps finished (0–3) */
  arrays: number;
  sharing: number;
}

const KEY = 'mathbuddy_game';

export const GRID = 8;

function fresh(): GameState {
  return {
    version: 1,
    name: null,
    kind: 'boy',
    lang: navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en',
    stars: 5,
    unlocked: ['rug', 'plant'],
    newSince: {},
    room: [
      { id: 1, type: 'rug', x: 3, z: 3, rot: 0, color: 0 },
      { id: 2, type: 'plant', x: 0, z: 0, rot: 0, color: 0 },
    ],
    nextId: 3,
    borrow: { level: 0, rounds: 0 },
    tables: {},
    arrays: 0,
    sharing: 0,
  };
}

export function loadGame(): GameState {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.version === 1) return { ...fresh(), ...parsed };
    }
  } catch {
    // unreadable save: start fresh
  }
  return fresh();
}

export function saveGame(state: GameState): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // storage full or blocked: keep playing without saving
  }
}

// ---- room geometry helpers (shared by the 3D scene and the UI) ----

export function footprint(type: ItemType, rot: number): [number, number] {
  const d = itemDef(type);
  return rot % 2 ? [d.d, d.w] : [d.w, d.d];
}

export function cellsOf(type: ItemType, x: number, z: number, rot: number): string[] {
  const [w, d] = footprint(type, rot);
  const out: string[] = [];
  for (let i = 0; i < w; i++) for (let j = 0; j < d; j++) out.push(`${x + i},${z + j}`);
  return out;
}

/** Whether an item fits at (x, z): inside the room and not overlapping another standing item. Rugs only collide with rugs. */
export function canPlace(room: PlacedItem[], type: ItemType, x: number, z: number, rot: number, ignoreId?: number): boolean {
  const [w, d] = footprint(type, rot);
  if (x < 0 || z < 0 || x + w > GRID || z + d > GRID) return false;
  const mine = new Set(cellsOf(type, x, z, rot));
  const isFloor = !!itemDef(type).floor;
  for (const it of room) {
    if (it.id === ignoreId || !!itemDef(it.type).floor !== isFloor) continue;
    if (cellsOf(it.type, it.x, it.z, it.rot).some((c) => mine.has(c))) return false;
  }
  return true;
}

/** First free spot for an item, scanning from the middle of the room outward. */
export function findSpot(room: PlacedItem[], type: ItemType, rot = 0): { x: number; z: number } | null {
  const spots: { x: number; z: number; dist: number }[] = [];
  for (let x = 0; x < GRID; x++)
    for (let z = 0; z < GRID; z++) spots.push({ x, z, dist: Math.hypot(x - 3.5, z - 3.5) });
  spots.sort((a, b) => a.dist - b.dist);
  return spots.find((s) => canPlace(room, type, s.x, s.z, rot)) ?? null;
}
