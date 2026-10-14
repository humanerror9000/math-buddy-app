// src/practice/storyEngine.ts
// Rules for Story math (pure functions, like the other engines).
// Flow per step of a story: choose the operation (Choose) or place the numbers then choose (Build),
// then solve it with the method from the matching module:
//   + and − → stacked, with carrying / borrowing (the Pencil step from borrowing)
//   × with a two-digit number → the Boxes from Arrays, every equation written out
//   × facts and ÷ → from memory, with "Show me" dots after a pause or a wrong answer
// Two-step stories start step two with step one's answer already in its box.

import type { Op, Part, RoundItem, Story } from './storyBank';

export type Stage = 'judge' | 'op' | 'build' | 'solve';
export type Mood = 'idle' | 'think' | 'curious' | 'happy' | 'oops' | 'thanks';
export type Emote = '?' | '!' | 'heart' | 'drop' | 'dots' | 'star';

export interface Stack {
  kind: 'stack';
  op: '+' | '−';
  n: number;
  /** Digits by place (0 = ones) */
  orig: number[];
  top: number[];
  bot: number[];
  botLen: number;
  ans: (number | null)[];
  active: number;
  crossed: boolean[];
  carry: number[];
  pendingCarry: boolean;
  /** Column glowing as the place to tap (borrow from / carry into), or -1 */
  glow: number;
}
export interface Boxes { kind: 'boxes'; g: number; tn: number; on: number; groupsFirst: boolean; answers: number[]; cur: number; vals: number[] }
export interface Mental { kind: 'mental'; peek: boolean; peekReady: boolean }
export type Solver = Stack | Boxes | Mental;

export type Msg =
  | { k: 'opWrong'; op: Op }
  | { k: 'tryAgain' }
  | { k: 'buildOrder'; a: number; b: number }
  | { k: 'buildOrderDiv'; a: number; b: number }
  | { k: 'col'; p: number; a: number; b: number; op: '+' | '−' }
  | { k: 'less'; a: number; b: number; from: number }
  | { k: 'after'; a: number; b: number }
  | { k: 'carryWrite'; s: number }
  | { k: 'carryTap'; p: number }
  | { k: 'mentalAsk' }
  | { k: 'boxA' } | { k: 'boxB' } | { k: 'boxSum' }
  | { k: 'buddyYes' }
  | { k: 'buddyNo' }
  | { k: 'done' } | { k: 'thanks' }
  | { k: 'intro' };

export type Fx =
  | { t: 'sfx'; name: string }
  | { t: 'voice'; name: string }
  | { t: 'buddy'; mood: Mood; emote?: Emote }
  | { t: 'shake'; target: 'ops' | 'slot' | 'top' | 'buddy' | 'box'; p?: number }
  /** step finished: the screen waits a beat, then calls nextPart() */
  | { t: 'partDone' }
  | { t: 'solved'; firstTry: boolean };

export interface State {
  mode: RoundItem['mode'];
  story: Story;
  claimOp: Op | null;
  part: number;
  results: number[];
  stage: Stage;
  op: Op | null;
  slots: (number | null)[];
  keys: (string | null)[];
  /** chip keys used in earlier steps (they stay greyed) */
  oldKeys: string[];
  /** slot holding step one's answer (-1 if none) */
  locked: number;
  typed: string;
  solver: Solver | null;
  partDone: boolean;
  finished: boolean;
  slips: number;
  msg: Msg;
}
export interface Step { s: State; fx: Fx[] }

const clone = (s: State): State => JSON.parse(JSON.stringify(s));
export const calc = (op: Op, a: number, b: number): number => (op === '+' ? a + b : op === '−' ? a - b : op === '×' ? a * b : a / b);
const digits = (n: number, len: number): number[] => String(n).padStart(len, '0').split('').reverse().map(Number);

/** The current step with 'prev' replaced by step one's answer */
export function curPart(s: State): { op: Op; a: number; b: number } {
  const p: Part = s.story.parts[s.part];
  const prev = s.results[s.part - 1];
  return { op: p.op, a: p.a === 'prev' ? prev : p.a, b: p.b === 'prev' ? prev : p.b };
}

function resetPart(s: State): void {
  s.oldKeys = s.oldKeys.concat(s.keys.filter((k): k is string => !!k));
  s.op = null;
  s.slots = [null, null];
  s.keys = [null, null];
  s.typed = '';
  s.solver = null;
  s.partDone = false;
  s.locked = -1;
  s.stage = s.mode === 'choose' || s.mode === 'buddy' ? 'op' : 'build';
  if (s.part > 0) {
    const p = s.story.parts[s.part];
    s.locked = p.a === 'prev' ? 0 : 1;
    s.slots[s.locked] = s.results[s.part - 1];
    s.keys[s.locked] = 'r';
  }
}

export function start(item: RoundItem): State {
  const s: State = {
    mode: item.mode, story: item.story, claimOp: item.claimOp ?? null, part: 0, results: [], stage: 'op', op: null,
    slots: [null, null], keys: [null, null], oldKeys: [], locked: -1, typed: '', solver: null, partDone: false, finished: false, slips: 0,
    msg: { k: 'intro' },
  };
  resetPart(s);
  if (item.mode === 'buddy') s.stage = 'judge';
  return s;
}

// ---------------- choosing and building ----------------

export function pickOp(prev: State, op: Op): Step {
  if (prev.finished || prev.partDone) return { s: prev, fx: [] };
  const s = clone(prev);
  const want = curPart(s).op;
  if (s.stage === 'op') {
    if (op === want) {
      const p = curPart(s);
      s.op = op;
      s.slots = [p.a, p.b];
      return startSolve(s, [{ t: 'sfx', name: 'answer-correct' }, { t: 'buddy', mood: 'curious', emote: '!' }]);
    }
    s.slips++;
    s.msg = { k: 'opWrong', op };
    return { s, fx: [{ t: 'sfx', name: 'answer-wrong' }, { t: 'buddy', mood: 'think', emote: '?' }, { t: 'voice', name: 'hmm' }, { t: 'shake', target: 'ops' }] };
  }
  if (s.stage === 'build') {
    if (s.slots[0] === null || s.slots[1] === null) return { s: prev, fx: [] }; // numbers first
    s.op = op;
    return checkBuilt(s, [{ t: 'sfx', name: 'choice-tap' }]);
  }
  return { s: prev, fx: [] };
}

/** Tap a number chip in the story (key identifies which chip) */
export function tapNum(prev: State, v: number, key: string): Step {
  if (prev.stage !== 'build' || prev.finished || prev.partDone) return { s: prev, fx: [] };
  if (prev.keys.includes(key) || prev.oldKeys.includes(key)) return { s: prev, fx: [] };
  const i = prev.slots[0] === null ? 0 : prev.slots[1] === null ? 1 : -1;
  if (i < 0) return { s: prev, fx: [] };
  const s = clone(prev);
  s.slots[i] = v;
  s.keys[i] = key;
  return { s, fx: [{ t: 'sfx', name: 'block-pick' }] };
}

/** Tap a filled slot to take the number back out (not step one's answer) */
export function clearSlot(prev: State, i: number): Step {
  if (prev.stage !== 'build' || prev.slots[i] === null || i === prev.locked) return { s: prev, fx: [] };
  const s = clone(prev);
  s.slots[i] = null;
  s.keys[i] = null;
  return { s, fx: [{ t: 'sfx', name: 'item-putaway' }] };
}

function clearUnlocked(s: State): void {
  for (const i of [0, 1]) if (i !== s.locked) { s.slots[i] = null; s.keys[i] = null; }
}

function checkBuilt(s: State, fx: Fx[]): Step {
  const p = curPart(s);
  const [x, y] = s.slots as number[];
  const same = (x === p.a && y === p.b) || (x === p.b && y === p.a);
  if (s.op !== p.op) {
    s.slips++;
    s.msg = { k: 'opWrong', op: s.op! };
    s.op = null;
    return { s, fx: [...fx, { t: 'sfx', name: 'answer-wrong' }, { t: 'buddy', mood: 'think', emote: '?' }, { t: 'voice', name: 'hmm' }, { t: 'shake', target: 'ops' }] };
  }
  if (!same) {
    s.slips++;
    s.msg = { k: 'tryAgain' };
    s.op = null;
    clearUnlocked(s);
    return { s, fx: [...fx, { t: 'sfx', name: 'answer-wrong' }, { t: 'buddy', mood: 'think', emote: '?' }] };
  }
  if ((p.op === '−' || p.op === '÷') && x !== p.a) {
    s.slips++;
    s.msg = p.op === '÷' ? { k: 'buildOrderDiv', a: p.a, b: p.b } : { k: 'buildOrder', a: p.a, b: p.b };
    s.op = null;
    clearUnlocked(s);
    return { s, fx: [...fx, { t: 'sfx', name: 'answer-wrong' }, { t: 'buddy', mood: 'think', emote: '?' }] };
  }
  s.slots = [p.a, p.b];
  return startSolve(s, [...fx, { t: 'sfx', name: 'answer-correct' }, { t: 'buddy', mood: 'curious', emote: '!' }]);
}

// ---------------- solving ----------------

function startSolve(s: State, fx: Fx[]): Step {
  const p = curPart(s);
  s.stage = 'solve';
  s.typed = '';
  if (p.op === '+' || p.op === '−') {
    const n = String(Math.max(p.a, p.b, calc(p.op, p.a, p.b))).length;
    s.solver = {
      kind: 'stack', op: p.op, n, orig: digits(p.a, n), top: digits(p.a, n), bot: digits(p.b, n), botLen: String(p.b).length,
      ans: Array(n).fill(null), active: 0, crossed: Array(n).fill(false), carry: Array(n).fill(0), pendingCarry: false, glow: -1,
    };
    s.msg = colMsg(s.solver);
  } else if (p.op === '×' && Math.max(p.a, p.b) >= 10) {
    // keep the story's order: 4 bags of 23 → 4 × 20, 4 × 3, 80 + 12
    const groupsFirst = p.a < 10;
    const g = groupsFirst ? p.a : p.b, big = groupsFirst ? p.b : p.a;
    const tn = Math.floor(big / 10) * 10, on = big % 10;
    s.solver = { kind: 'boxes', g, tn, on, groupsFirst, answers: [g * tn, g * on, g * big], cur: 0, vals: [] };
    s.msg = { k: 'boxA' };
  } else {
    s.solver = { kind: 'mental', peek: false, peekReady: false };
    s.msg = { k: 'mentalAsk' };
  }
  return { s, fx };
}

function colMsg(v: Stack): Msg {
  const p = v.active;
  return v.op === '−' ? { k: 'col', p, a: v.top[p], b: v.bot[p], op: '−' } : { k: 'col', p, a: v.top[p] + v.carry[p], b: v.bot[p], op: '+' };
}
function canBorrow(v: Stack, from: number): boolean {
  const a = v.active;
  if (from <= a || v.top[a] >= v.bot[a]) return false;
  for (let k = a + 1; k < from; k++) if (v.top[k] !== 0) return false;
  return v.top[from] > 0;
}
function nearestSrc(v: Stack): number {
  for (let k = v.active + 1; k < v.n; k++) if (v.top[k] > 0) return k;
  return -1;
}

/** Tap a top digit: borrow from it (−) or carry into it (+) */
export function tapTop(prev: State, p: number): Step {
  const v0 = prev.solver;
  if (!v0 || v0.kind !== 'stack' || prev.partDone || prev.finished) return { s: prev, fx: [] };
  const s = clone(prev);
  const v = s.solver as Stack;
  if (v.op === '+') {
    if (v.pendingCarry && p === v.active + 1) {
      v.carry[p] = 1;
      v.pendingCarry = false;
      v.glow = -1;
      v.active++;
      s.msg = colMsg(v);
      return { s, fx: [{ t: 'sfx', name: 'column-done' }, { t: 'buddy', mood: 'happy' }] };
    }
    return { s: prev, fx: [{ t: 'shake', target: 'top', p }, { t: 'sfx', name: 'cant-place' }] };
  }
  if (canBorrow(v, p)) {
    v.top[p]--;
    v.top[p - 1] += 10;
    v.crossed[p] = true;
    v.crossed[p - 1] = true;
    const fx: Fx[] = [{ t: 'sfx', name: p === 2 ? 'hundred-break' : 'ten-break' }];
    if (p - 1 !== v.active) { v.glow = p - 1; s.msg = { k: 'less', a: v.top[v.active], b: v.bot[v.active], from: p - 1 }; }
    else { v.glow = -1; s.msg = { k: 'after', a: v.top[v.active], b: v.bot[v.active] }; fx.push({ t: 'buddy', mood: 'curious', emote: '!' }); }
    return { s, fx };
  }
  return { s: prev, fx: [{ t: 'shake', target: 'top', p }, { t: 'sfx', name: 'cant-place' }] };
}

/** Keypad. Stacked problems take one digit at a time (checked right away); the others type then ✓. */
export function press(prev: State, key: string): Step {
  if (prev.finished || prev.partDone || prev.stage !== 'solve' || !prev.solver) return { s: prev, fx: [] };
  if (prev.solver.kind === 'stack') return /^\d$/.test(key) ? stackDigit(prev, Number(key)) : { s: prev, fx: [] };
  if (key === 'go') return check(prev);
  const s = clone(prev);
  if (key === 'del') {
    if (!s.typed) return { s: prev, fx: [] };
    s.typed = s.typed.slice(0, -1);
    return { s, fx: [{ t: 'sfx', name: 'keypad-delete' }] };
  }
  if (!/^\d$/.test(key) || s.typed.length >= 3) return { s: prev, fx: [] };
  s.typed = s.typed === '0' ? key : s.typed + key;
  return { s, fx: [{ t: 'sfx', name: 'keypad-tap' }] };
}

function stackDigit(prev: State, d: number): Step {
  const s = clone(prev);
  const v = s.solver as Stack, p = v.active;
  const fx: Fx[] = [{ t: 'sfx', name: 'keypad-tap' }];
  if (v.pendingCarry) {
    s.msg = { k: 'carryTap', p: p + 1 };
    return { s, fx: [...fx, { t: 'shake', target: 'top', p: p + 1 }] };
  }
  if (v.op === '−') {
    if (v.top[p] < v.bot[p]) {
      v.glow = nearestSrc(v);
      s.slips++;
      s.msg = { k: 'less', a: v.top[p], b: v.bot[p], from: v.glow };
      return { s, fx: [...fx, { t: 'sfx', name: 'answer-wrong' }, { t: 'buddy', mood: 'curious', emote: '?' }, { t: 'voice', name: 'hmm' }, { t: 'shake', target: 'slot' }] };
    }
    if (d !== v.top[p] - v.bot[p]) {
      s.slips++;
      s.msg = { k: 'tryAgain' };
      return { s, fx: [...fx, { t: 'sfx', name: 'answer-wrong' }, { t: 'buddy', mood: 'think', emote: 'dots' }, { t: 'shake', target: 'slot' }] };
    }
    v.ans[p] = d;
    return nextCol(s, [...fx, { t: 'sfx', name: 'answer-correct' }]);
  }
  const sum = v.top[p] + v.bot[p] + v.carry[p];
  if (d !== sum % 10) {
    s.slips++;
    s.msg = sum >= 10 ? { k: 'carryWrite', s: sum } : { k: 'tryAgain' };
    return { s, fx: [...fx, { t: 'sfx', name: 'answer-wrong' }, { t: 'buddy', mood: 'think', emote: 'dots' }, { t: 'shake', target: 'slot' }] };
  }
  v.ans[p] = d;
  if (sum >= 10 && p < v.n - 1) {
    v.pendingCarry = true;
    v.glow = p + 1;
    s.msg = { k: 'carryTap', p: p + 1 };
    return { s, fx: [...fx, { t: 'sfx', name: 'answer-correct' }, { t: 'buddy', mood: 'curious', emote: '!' }] };
  }
  return nextCol(s, [...fx, { t: 'sfx', name: 'answer-correct' }]);
}

function nextCol(s: State, fx: Fx[]): Step {
  const v = s.solver as Stack;
  const nx = v.active + 1;
  // the leftmost column of a − problem may be 0 − 0: nothing to write
  const leadZero = nx === v.n - 1 && v.op === '−' && v.top[nx] === 0 && v.bot[nx] === 0;
  if (nx >= v.n || leadZero) {
    if (leadZero) v.ans[nx] = 0;
    return partDone(s, Number(v.ans.slice().reverse().join('')), fx);
  }
  v.active = nx;
  s.msg = colMsg(v);
  return { s, fx: [...fx, { t: 'buddy', mood: 'happy' }] };
}

function check(prev: State): Step {
  if (!prev.typed) return { s: prev, fx: [] };
  const s = clone(prev);
  const v = s.solver!;
  const val = Number(s.typed);
  s.typed = '';
  if (v.kind === 'boxes') {
    if (val === v.answers[v.cur]) {
      v.vals[v.cur] = val;
      if (v.cur < 2) {
        v.cur++;
        s.msg = v.cur === 1 ? { k: 'boxB' } : { k: 'boxSum' };
        return { s, fx: [{ t: 'sfx', name: 'answer-correct' }, { t: 'buddy', mood: 'happy' }] };
      }
      return partDone(s, val, [{ t: 'sfx', name: 'answer-correct' }]);
    }
  } else {
    const p = curPart(s);
    if (val === calc(p.op, p.a, p.b)) return partDone(s, val, [{ t: 'sfx', name: 'answer-correct' }]);
    (v as Mental).peekReady = !(v as Mental).peek;
  }
  s.slips++;
  s.msg = { k: 'tryAgain' };
  return { s, fx: [{ t: 'sfx', name: 'answer-wrong' }, { t: 'buddy', mood: 'think', emote: 'dots' }, { t: 'voice', name: 'hmm' }, { t: 'shake', target: 'slot' }] };
}

function partDone(s: State, val: number, fx: Fx[]): Step {
  s.results[s.part] = val;
  s.partDone = true;
  const out: Fx[] = [...fx, { t: 'sfx', name: 'column-done' }];
  if (s.part < s.story.parts.length - 1) {
    out.push({ t: 'buddy', mood: 'happy' }, { t: 'partDone' });
    return { s, fx: out };
  }
  s.finished = true;
  const thanks = s.mode === 'buddy';
  s.msg = thanks ? { k: 'thanks' } : { k: 'done' };
  out.push(
    { t: 'buddy', mood: thanks ? 'thanks' : 'happy', emote: thanks ? 'heart' : 'star' },
    { t: 'voice', name: thanks ? 'thanks' : 'happy' },
    { t: 'sfx', name: 'star-earn' },
    { t: 'solved', firstTry: s.slips === 0 },
  );
  return { s, fx: out };
}

/** After the beat: start step two with step one's answer in its box */
export function nextPart(prev: State): State {
  if (!prev.partDone || prev.finished) return prev;
  const s = clone(prev);
  s.part++;
  resetPart(s);
  s.msg = { k: 'intro' };
  return s;
}

/** Memory: offer "Show me" after the quiet pause */
export function offerPeek(prev: State): State {
  const v = prev.solver;
  if (!v || v.kind !== 'mental' || v.peek || v.peekReady || prev.partDone) return prev;
  const s = clone(prev);
  (s.solver as Mental).peekReady = true;
  return s;
}
export function showHelp(prev: State): Step {
  const v = prev.solver;
  if (!v || v.kind !== 'mental' || v.peek || prev.partDone) return { s: prev, fx: [] };
  const s = clone(prev);
  (s.solver as Mental).peek = true;
  (s.solver as Mental).peekReady = false;
  s.slips++;
  return { s, fx: [{ t: 'sfx', name: 'hint-start' }, { t: 'buddy', mood: 'curious', emote: '!' }, { t: 'voice', name: 'curious' }] };
}

// ---------------- Buddy's answer ----------------

export function judge(prev: State, makesSense: boolean): Step {
  if (prev.stage !== 'judge') return { s: prev, fx: [] };
  const s = clone(prev);
  if (makesSense) {
    s.slips++;
    s.msg = { k: 'buddyYes' };
    return { s, fx: [{ t: 'sfx', name: 'answer-wrong' }, { t: 'buddy', mood: 'think', emote: '?' }, { t: 'shake', target: 'buddy' }] };
  }
  s.stage = 'op';
  s.msg = { k: 'buddyNo' };
  return { s, fx: [{ t: 'sfx', name: 'answer-correct' }, { t: 'buddy', mood: 'oops', emote: 'drop' }, { t: 'voice', name: 'oops' }] };
}

/** The right answer for the whole story (for tests and the summary line) */
export function storyAnswer(story: Story): number[] {
  const res: number[] = [];
  for (const p of story.parts) {
    const a = p.a === 'prev' ? res[res.length - 1] : p.a, b = p.b === 'prev' ? res[res.length - 1] : p.b;
    res.push(calc(p.op, a, b));
  }
  return res;
}

export const PASS_FIRST_TRY = 4;
