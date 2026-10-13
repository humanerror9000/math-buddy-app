// src/practice/tablesEngine.ts
// Rules of the times-tables practice, with no React or DOM in it (same pattern as borrowEngine).
// A fact t × m is drawn as m rows of t dots. Steps per table: Dots (0) → Split (1) → Memory (2).

export type TMode = 'array' | 'split' | 'recall' | 'buddy';
export type TPhase = 'answer' | 'judge' | 'done';
export type Mood = 'idle' | 'think' | 'curious' | 'happy' | 'oops' | 'thanks';
export type Emote = '?' | '!' | 'heart' | 'drop' | 'dots' | 'star';

export type TMsg =
  | { k: 'arrayAsk'; t: number; m: number }
  | { k: 'counting'; n: number }
  | { k: 'counted'; t: number; m: number }
  | { k: 'splitAsk'; a: number }
  | { k: 'splitNine' }
  | { k: 'splitB'; b: number }
  | { k: 'splitSum' }
  | { k: 'splitMinus'; t: number }
  | { k: 'recallAsk' }
  | { k: 'tryAgain' }
  | { k: 'countRows' }
  | { k: 'buddyAsk'; t: number; m: number; w: number }
  | { k: 'buddyNo'; t: number; m: number }
  | { k: 'buddyYesWrong' }
  | { k: 'buddyThanks' }
  | { k: 'done' };

export type TFx =
  | { t: 'sfx'; name: string; semitones?: number }
  | { t: 'voice'; name: string }
  | { t: 'buddy'; mood: Mood; emote?: Emote }
  | { t: 'shake' }
  | { t: 'solved'; firstTry: boolean };

export interface SplitPart { x: number; op: '×' | '+' | '−'; y: number; v: number; cls: 'a' | 'b' | '' }
export interface SplitPlan { kind: 'plus' | 'minus'; a: number; b: number }

export interface TState {
  mode: TMode;
  t: number;
  m: number;
  ans: number;
  phase: TPhase;
  /** Rows lit by counting */
  lit: number;
  typed: string;
  wrong: number;
  slips: number;
  /** Memory / Buddy: dots are showing */
  peek: boolean;
  /** Memory / Buddy: the "Show me" button is offered */
  peekReady: boolean;
  plan: SplitPlan | null;
  parts: SplitPart[];
  part: number;
  vals: number[];
  /** Buddy's wrong answer */
  claim: number;
  msg: TMsg;
}
export interface TStep { s: TState; fx: TFx[] }

const clone = (s: TState): TState => ({ ...s, parts: s.parts.slice(), vals: s.vals.slice() });

/** How to split m rows into easy pieces. Nine is ten rows minus one. */
export function splitPlan(m: number): SplitPlan {
  if (m === 9) return { kind: 'minus', a: 10, b: 1 };
  if (m === 4) return { kind: 'plus', a: 2, b: 2 };
  if (m === 8) return { kind: 'plus', a: 5, b: 3 };
  if (m >= 11) return { kind: 'plus', a: 10, b: m - 10 };
  if (m >= 6) return { kind: 'plus', a: 5, b: m - 5 };
  return { kind: 'plus', a: Math.ceil(m / 2), b: Math.floor(m / 2) };
}

/** Rows drawn for this state (the nine-split draws ten rows, one crossed out) */
export function rowsShown(s: TState): number {
  return s.mode === 'split' && s.plan?.kind === 'minus' ? 10 : s.m;
}

export function start(mode: TMode, t: number, m: number, claim = 0): TState {
  const s: TState = {
    mode, t, m, ans: t * m, phase: mode === 'buddy' ? 'judge' : 'answer', lit: 0, typed: '', wrong: 0, slips: 0,
    peek: false, peekReady: false, plan: null, parts: [], part: 0, vals: [], claim, msg: { k: 'recallAsk' },
  };
  if (mode === 'split') {
    const plan = splitPlan(m);
    s.plan = plan;
    s.parts = plan.kind === 'minus'
      ? [{ x: t, op: '×', y: 10, v: t * 10, cls: 'a' }, { x: t * 10, op: '−', y: t, v: t * m, cls: 'b' }]
      : [
          { x: t, op: '×', y: plan.a, v: t * plan.a, cls: 'a' },
          { x: t, op: '×', y: plan.b, v: t * plan.b, cls: 'b' },
          { x: t * plan.a, op: '+', y: t * plan.b, v: t * m, cls: '' },
        ];
  }
  s.msg = mode === 'array' ? { k: 'arrayAsk', t, m }
    : mode === 'split' ? (s.plan!.kind === 'minus' ? { k: 'splitNine' } : { k: 'splitAsk', a: s.plan!.a })
    : mode === 'recall' ? { k: 'recallAsk' }
    : { k: 'buddyAsk', t, m, w: claim };
  return s;
}

/** Tap on the dots: light the next row and count up (Dots step, or after "Show me") */
export function tapArray(prev: TState): TStep {
  const canCount = prev.mode === 'array' || ((prev.mode === 'recall' || prev.mode === 'buddy') && prev.peek);
  if (prev.phase === 'done' || !canCount || prev.lit >= prev.m) return { s: prev, fx: [] };
  const s = clone(prev);
  s.lit++;
  const fx: TFx[] = [{ t: 'sfx', name: 'count-tick', semitones: [0, 2, 4, 5, 7, 9, 11, 12, 14, 16, 17, 19][s.lit - 1] ?? 19 }];
  if (s.lit < s.m) s.msg = { k: 'counting', n: s.lit * s.t };
  else {
    s.msg = { k: 'counted', t: s.t, m: s.m };
    fx.push({ t: 'buddy', mood: 'curious', emote: '!' });
  }
  return { s, fx };
}

/** "Show me": bring back the dots in Memory or Buddy's turn */
export function showDots(prev: TState): TStep {
  if (prev.peek || prev.phase === 'done') return { s: prev, fx: [] };
  const s = clone(prev);
  s.peek = true;
  s.peekReady = false;
  s.slips++;
  s.msg = { k: 'arrayAsk', t: s.t, m: s.m };
  return { s, fx: [{ t: 'sfx', name: 'hint-start' }, { t: 'buddy', mood: 'curious', emote: '!' }, { t: 'voice', name: 'curious' }] };
}

/** The pause in Memory ran out: offer "Show me" */
export function offerPeek(prev: TState): TStep {
  if (prev.peek || prev.peekReady || prev.phase === 'done') return { s: prev, fx: [] };
  return { s: { ...clone(prev), peekReady: true }, fx: [] };
}

export function press(prev: TState, key: string): TStep {
  if (prev.phase !== 'answer') return { s: prev, fx: [] };
  if (key === 'go') return check(prev);
  const s = clone(prev);
  if (key === 'del') {
    if (!s.typed) return { s: prev, fx: [] };
    s.typed = s.typed.slice(0, -1);
    return { s, fx: [{ t: 'sfx', name: 'keypad-delete' }] };
  }
  if (!/^[0-9]$/.test(key) || s.typed.length >= 3) return { s: prev, fx: [] };
  s.typed = s.typed === '0' ? key : s.typed + key;
  return { s, fx: [{ t: 'sfx', name: 'keypad-tap' }] };
}

function check(prev: TState): TStep {
  if (!prev.typed) return { s: prev, fx: [] };
  const s = clone(prev);
  const v = Number(s.typed);
  const target = s.mode === 'split' ? s.parts[s.part].v : s.ans;
  s.typed = '';
  if (v === target) {
    if (s.mode === 'split') {
      s.vals[s.part] = v;
      if (s.part < s.parts.length - 1) {
        s.part++;
        s.msg = s.plan!.kind === 'minus' ? { k: 'splitMinus', t: s.t }
          : s.part === 1 ? { k: 'splitB', b: s.plan!.b } : { k: 'splitSum' };
        const fx: TFx[] = [{ t: 'sfx', name: 'answer-correct' }, { t: 'buddy', mood: 'happy' }];
        if (s.part === 1) fx.push({ t: 'sfx', name: 'split-array' });
        return { s, fx };
      }
    }
    return finish(s);
  }
  s.wrong++;
  s.slips++;
  const fx: TFx[] = [{ t: 'shake' }, { t: 'sfx', name: 'answer-wrong' }, { t: 'buddy', mood: 'think', emote: 'dots' }, { t: 'voice', name: 'hmm' }];
  if (s.mode === 'array') s.msg = s.wrong >= 2 ? { k: 'countRows' } : { k: 'tryAgain' };
  else {
    s.msg = { k: 'tryAgain' };
    if ((s.mode === 'recall' || s.mode === 'buddy') && !s.peek) s.peekReady = true;
  }
  return { s, fx };
}

function finish(s: TState): TStep {
  s.phase = 'done';
  const thanks = s.mode === 'buddy';
  s.msg = thanks ? { k: 'buddyThanks' } : { k: 'done' };
  return {
    s,
    fx: [
      { t: 'sfx', name: s.slips === 0 ? 'answer-correct' : 'answer-correct-retry' },
      { t: 'buddy', mood: thanks ? 'thanks' : 'happy', emote: thanks ? 'heart' : 'star' },
      { t: 'voice', name: thanks ? 'thanks' : 'happy' },
      { t: 'sfx', name: 'star-earn' },
      { t: 'solved', firstTry: s.slips === 0 },
    ],
  };
}

/** Buddy's turn: she says whether Buddy's answer is right */
export function judge(prev: TState, saysRight: boolean): TStep {
  if (prev.phase !== 'judge') return { s: prev, fx: [] };
  const s = clone(prev);
  if (saysRight) {
    // Buddy is always wrong; show the dots so she can check
    s.peek = true;
    s.slips++;
    s.msg = { k: 'buddyYesWrong' };
    return { s, fx: [{ t: 'shake' }, { t: 'sfx', name: 'answer-wrong' }, { t: 'buddy', mood: 'think', emote: '?' }] };
  }
  s.phase = 'answer';
  s.msg = { k: 'buddyNo', t: s.t, m: s.m };
  return { s, fx: [{ t: 'sfx', name: 'answer-correct' }, { t: 'buddy', mood: 'oops', emote: 'drop' }, { t: 'voice', name: 'oops' }] };
}

// ---------------- rounds ----------------

export const ROUND_SIZE = 8;
/** First-try answers out of 8 needed to move to the next step */
export const PASS_FIRST_TRY = 6;
export const STEP_MODES: TMode[] = ['array', 'split', 'recall'];

function shuffle<T>(a: T[]): T[] {
  const b = a.slice();
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

export interface Fact { mode: TMode; t: number; m: number; claim?: number }

/** Buddy's slip: one row too many or too few */
function buddyClaim(t: number, m: number): number {
  const up = m <= 2 || Math.random() < 0.5;
  return t * (up ? m + 1 : m - 1);
}

/** One round of 8 facts for a table at a step (0 Dots, 1 Split, 2 Memory). */
export function makeRound(t: number, step: number): Fact[] {
  const mode = STEP_MODES[Math.min(2, Math.max(0, step))];
  const ms = shuffle([3, 4, 5, 6, 7, 8, 9, 10]); // 3..10: eight different rows counts
  return ms.map((m, i) => {
    if (mode === 'recall' && i === 3) return { mode: 'buddy', t, m, claim: buddyClaim(t, m) };
    return { mode, t, m };
  });
}

/** Mix: Memory facts from the tables she has learned, with one of Buddy's mistakes. */
export function makeMixRound(tables: number[]): Fact[] {
  const pool: Fact[] = [];
  for (const t of tables) for (let m = 2; m <= 10; m++) pool.push({ mode: 'recall', t, m });
  const picked = shuffle(pool).slice(0, ROUND_SIZE);
  while (picked.length < ROUND_SIZE) picked.push({ ...pool[Math.floor(Math.random() * pool.length)] });
  const b = picked[3];
  picked[3] = { mode: 'buddy', t: b.t, m: b.m, claim: buddyClaim(b.t, b.m) };
  return picked;
}

export const TABLES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
