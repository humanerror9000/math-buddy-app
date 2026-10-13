// src/practice/borrowEngine.ts
// The rules of the borrowing practice, with no React or DOM in it.
// Every action takes the current state and returns the next state plus a list of
// effects (sounds, Buddy reactions, shakes) for the screen to play.
//
// Places are indexed from the right: 0 = ones, 1 = tens, 2 = hundreds.

export type Mode = 'blocks' | 'discs' | 'pencil' | 'buddy';
export type Phase = 'find' | 'take' | 'answer' | 'done';
export type Mood = 'idle' | 'think' | 'curious' | 'happy' | 'oops' | 'thanks';
export type Emote = '?' | '!' | 'heart' | 'drop' | 'dots' | 'star';

export interface Item {
  id: number;
  gone?: boolean;
  /** Just arrived from a broken ten/hundred; k is its position in the broken piece */
  fresh?: boolean;
  k?: number;
}

/** What the task bar says. The screen turns these into words in either language. */
export type Msg =
  | { k: 'startTake'; p: number; n: number }
  | { k: 'taking'; p: number; done: number; n: number }
  | { k: 'notEnough'; p: number; have: number; need: number }
  | { k: 'breakFurther'; p: number; from: number }
  | { k: 'brokeAgain'; p: number }
  | { k: 'broke'; p: number; have: number; need: number }
  | { k: 'left'; p: number }
  | { k: 'countLeft'; p: number }
  | { k: 'nextCol'; p: number; n: number }
  | { k: 'wCol'; p: number; a: number; b: number }
  | { k: 'wLess'; p: number; a: number; b: number; from: number }
  | { k: 'wBorrowMore'; p: number }
  | { k: 'wAfter'; p: number; a: number; b: number }
  | { k: 'tryAgain'; a: number; b: number }
  | { k: 'done' }
  | { k: 'buddyAsk' }
  | { k: 'buddyTens' }
  | { k: 'buddyNope' }
  | { k: 'buddyFound'; a: number; b: number }
  | { k: 'buddyThanks' };

export type Fx =
  | { t: 'sfx'; name: string }
  | { t: 'voice'; name: string }
  | { t: 'buddy'; mood: Mood; emote?: Emote }
  | { t: 'shake'; target: 'mat' | 'slot' | 'top' | 'buddyDigit'; p: number }
  /** A ten or hundred broke: the screen animates the new pieces from where it was */
  | { t: 'break'; from: number; id: number | null }
  | { t: 'solved'; firstTry: boolean };

export interface PState {
  mode: Mode;
  a: number;
  b: number;
  n: number;
  orig: number[];
  top: number[];
  bot: number[];
  active: number;
  phase: Phase;
  taken: number[];
  ans: (number | null)[];
  wrong: number[];
  items: Item[][];
  crossed: boolean[];
  /** Column glowing as the place to break/borrow from, or -1 */
  source: number;
  /** Keypad key to highlight after two misses, or -1 */
  hintKey: number;
  /** Number the remaining pieces (after two miscounts) */
  numbered: boolean;
  /** Buddy's turn: which of his digits she picked */
  picked: number | null;
  /** Any wrong answer or not-enough tap along the way */
  slips: number;
  msg: Msg;
  nextId: number;
}

export interface Step { s: PState; fx: Fx[] }

const clone = (s: PState): PState => JSON.parse(JSON.stringify(s));
export const digitsOf = (n: number, len: number): number[] => String(n).padStart(len, '0').split('').reverse().map(Number);
export const isBlocksLike = (m: Mode): boolean => m === 'blocks' || m === 'discs';

export function start(mode: Mode, a: number, b: number): PState {
  const n = String(a).length;
  const top = digitsOf(a, n), bot = digitsOf(b, n);
  let nextId = 1;
  const s: PState = {
    mode, a, b, n, orig: top.slice(), top: top.slice(), bot, active: 0,
    phase: mode === 'buddy' ? 'find' : isBlocksLike(mode) ? 'take' : 'answer',
    taken: Array(n).fill(0), ans: Array(n).fill(null), wrong: Array(n).fill(0),
    items: isBlocksLike(mode) ? top.map((d) => Array.from({ length: d }, () => ({ id: nextId++ }))) : top.map(() => []),
    crossed: Array(n).fill(false), source: -1, hintKey: -1, numbered: false, picked: null, slips: 0,
    msg: { k: 'buddyAsk' }, nextId,
  };
  s.msg = mode === 'buddy' ? { k: 'buddyAsk' } : isBlocksLike(mode) ? { k: 'startTake', p: 0, n: bot[0] } : { k: 'wCol', p: 0, a: top[0], b: bot[0] };
  if (isBlocksLike(mode)) skipEmptyTake(s);
  return s;
}

/** Nothing to take away in this column (bottom digit 0): go straight to counting what's left. */
function skipEmptyTake(s: PState): void {
  if (s.phase === 'take' && s.bot[s.active] === 0) {
    s.phase = 'answer';
    s.msg = { k: 'left', p: s.active };
  }
}

/** Can column `from` be broken right now to help the active column? */
export function canBreak(s: PState, from: number): boolean {
  const a = s.active;
  if (from <= a || s.top[a] >= s.bot[a] || s.taken[a] > 0) return false;
  for (let k = a + 1; k < from; k++) if (s.top[k] !== 0) return false;
  return s.top[from] > 0;
}
function nearestSource(s: PState): number {
  for (let k = s.active + 1; k < s.n; k++) if (s.top[k] > 0) return k;
  return -1;
}
function clearFresh(s: PState): void {
  s.items.forEach((col) => col.forEach((i) => { delete i.fresh; delete i.k; }));
}

/** Break one piece of `from` into ten of the place below it (mutates s). */
function doBreak(s: PState, from: number, id: number | null, fx: Fx[]): void {
  const into = from - 1;
  if (isBlocksLike(s.mode)) {
    const live = s.items[from].filter((i) => !i.gone);
    const victim = (id !== null && live.find((i) => i.id === id)) || live[live.length - 1];
    s.items[from] = s.items[from].filter((i) => i !== victim);
    for (let k = 0; k < 10; k++) s.items[into].push({ id: s.nextId++, fresh: true, k });
    fx.push({ t: 'break', from, id: victim ? victim.id : null });
  }
  s.top[from] -= 1;
  s.top[into] += 10;
  s.crossed[from] = true;
  s.crossed[into] = true;
  s.source = -1;
  s.hintKey = -1;
  fx.push({ t: 'sfx', name: from === 2 ? 'hundred-break' : 'ten-break' });
  const a = s.active;
  if (into !== a) {
    s.source = into;
    s.msg = isBlocksLike(s.mode) ? { k: 'brokeAgain', p: into } : { k: 'wBorrowMore', p: into };
    fx.push({ t: 'buddy', mood: 'curious', emote: '!' });
    return;
  }
  fx.push({ t: 'buddy', mood: 'curious', emote: '!' }, { t: 'voice', name: 'curious' });
  s.msg = isBlocksLike(s.mode) ? { k: 'broke', p: a, have: s.top[a], need: s.bot[a] } : { k: 'wAfter', p: a, a: s.top[a], b: s.bot[a] };
}

/** Tap on a block or disc in column p */
export function tapItem(prev: PState, p: number, id: number): Step {
  const s = clone(prev);
  clearFresh(s);
  const fx: Fx[] = [];
  if (s.phase === 'done' || !isBlocksLike(s.mode)) return { s: prev, fx };
  const a = s.active;
  if (p === a && s.phase === 'take') {
    if (s.top[a] < s.bot[a]) {
      const src = nearestSource(s);
      s.source = src;
      s.slips++;
      s.msg = src === a + 1 ? { k: 'notEnough', p: a, have: s.top[a], need: s.bot[a] } : { k: 'breakFurther', p: a + 1, from: src };
      fx.push({ t: 'shake', target: 'mat', p }, { t: 'buddy', mood: 'curious', emote: '?' }, { t: 'voice', name: 'hmm' }, { t: 'sfx', name: 'cant-afford' });
      return { s, fx };
    }
    const item = s.items[p].find((i) => i.id === id);
    if (!item || item.gone) return { s: prev, fx };
    item.gone = true;
    s.taken[p]++;
    fx.push({ t: 'sfx', name: 'cross-out' });
    if (s.taken[p] >= s.bot[p]) {
      s.phase = 'answer';
      s.msg = { k: 'left', p };
      fx.push({ t: 'sfx', name: 'column-done' });
    } else {
      s.msg = { k: 'taking', p, done: s.taken[p], n: s.bot[p] };
    }
    return { s, fx };
  }
  if (p > a && s.phase === 'take' && canBreak(s, p)) {
    doBreak(s, p, id, fx);
    return { s, fx };
  }
  fx.push({ t: 'shake', target: 'mat', p }, { t: 'sfx', name: 'cant-place' });
  if (p > a && s.source >= 0) fx.push({ t: 'buddy', mood: 'think', emote: 'dots' });
  return { s, fx };
}

/** Tap on a digit of the top number (pencil and Buddy's turn: that's how she borrows) */
export function tapTop(prev: PState, p: number): Step {
  const fx: Fx[] = [];
  if (prev.phase !== 'answer' || isBlocksLike(prev.mode)) return { s: prev, fx };
  const s = clone(prev);
  if (canBreak(s, p)) {
    doBreak(s, p, null, fx);
    return { s, fx };
  }
  fx.push({ t: 'shake', target: 'top', p }, { t: 'sfx', name: 'cant-place' });
  return { s: prev, fx };
}

export function pressKey(prev: PState, d: number): Step {
  const fx: Fx[] = [];
  if (prev.phase !== 'answer') return { s: prev, fx };
  const s = clone(prev);
  clearFresh(s);
  const p = s.active;
  fx.push({ t: 'sfx', name: 'keypad-tap' });
  if (s.top[p] < s.bot[p]) {
    // She worked out the borrowed answer in her head: accept it and write the borrow marks.
    if (d === s.top[p] + 10 - s.bot[p]) {
      let src: number;
      const silent: Fx[] = [];
      while (s.top[p] < s.bot[p] && (src = nearestSource(s)) >= 0) doBreak(s, src, null, silent);
      fx.push(...silent.filter((f) => f.t === 'sfx'));
      return answerRight(s, d, fx);
    }
    s.wrong[p]++;
    s.slips++;
    const src = nearestSource(s);
    s.source = src;
    s.msg = { k: 'wLess', p, a: s.top[p], b: s.bot[p], from: src };
    fx.push({ t: 'shake', target: 'slot', p }, { t: 'sfx', name: 'answer-wrong' }, { t: 'buddy', mood: 'curious', emote: '?' }, { t: 'voice', name: 'hmm' });
    return { s, fx };
  }
  if (d === s.top[p] - s.bot[p]) return answerRight(s, d, fx);
  s.wrong[p]++;
  s.slips++;
  fx.push({ t: 'shake', target: 'slot', p }, { t: 'sfx', name: 'answer-wrong' }, { t: 'buddy', mood: 'think', emote: 'dots' }, { t: 'voice', name: 'hmm' });
  if (isBlocksLike(s.mode)) {
    s.msg = { k: 'countLeft', p };
    if (s.wrong[p] >= 2) s.numbered = true;
  } else {
    s.msg = { k: 'tryAgain', a: s.top[p], b: s.bot[p] };
    if (s.wrong[p] >= 2) s.hintKey = s.top[p] - s.bot[p];
  }
  return { s, fx };
}

function answerRight(s: PState, d: number, fx: Fx[]): Step {
  const p = s.active;
  s.ans[p] = d;
  s.wrong[p] = 0;
  s.hintKey = -1;
  s.numbered = false;
  s.source = -1;
  fx.push({ t: 'sfx', name: s.slips === 0 ? 'answer-correct' : 'answer-correct-retry' });
  const next = p + 1;
  // finished when there are no columns left, or only a leading 0 − 0 remains
  const lastLeft = next === s.n - 1 && s.top[next] === 0 && s.bot[next] === 0;
  if (next >= s.n || lastLeft) {
    if (next < s.n) s.ans[next] = 0;
    s.phase = 'done';
    const thanks = s.mode === 'buddy';
    s.msg = thanks ? { k: 'buddyThanks' } : { k: 'done' };
    fx.push(
      { t: 'buddy', mood: thanks ? 'thanks' : 'happy', emote: thanks ? 'heart' : 'star' },
      { t: 'voice', name: thanks ? 'thanks' : 'happy' },
      { t: 'sfx', name: 'star-earn' },
      { t: 'solved', firstTry: s.slips === 0 },
    );
    return { s, fx };
  }
  s.active = next;
  s.phase = isBlocksLike(s.mode) ? 'take' : 'answer';
  s.msg = isBlocksLike(s.mode) ? { k: 'nextCol', p: next, n: s.bot[next] } : { k: 'wCol', p: next, a: s.top[next], b: s.bot[next] };
  skipEmptyTake(s);
  fx.push({ t: 'buddy', mood: 'happy' });
  return { s, fx };
}

// ---------------- Buddy's turn ----------------

/** Buddy's classic mistake: in every column he takes the smaller digit from the bigger one. */
export function buddyAnswer(s: PState): number[] {
  return s.orig.map((d, p) => Math.abs(d - s.bot[p]));
}
const rightDigits = (s: PState): number[] => digitsOf(s.a - s.b, s.n);

export function tapBuddyDigit(prev: PState, p: number): Step {
  const fx: Fx[] = [];
  if (prev.phase !== 'find') return { s: prev, fx };
  const s = clone(prev);
  const ba = buddyAnswer(s), right = rightDigits(s);
  const firstWrong = ba.findIndex((d, q) => d !== right[q]);
  if (p === firstWrong) {
    s.picked = p;
    s.msg = { k: 'buddyFound', a: s.orig[p], b: s.bot[p] };
    fx.push({ t: 'buddy', mood: 'oops', emote: 'drop' }, { t: 'voice', name: 'oops' }, { t: 'sfx', name: 'answer-correct' });
    return { s, fx };
  }
  s.slips++;
  s.msg = ba[p] !== right[p] ? { k: 'buddyTens' } : { k: 'buddyNope' };
  fx.push({ t: 'shake', target: 'buddyDigit', p }, { t: 'sfx', name: 'answer-wrong' }, { t: 'buddy', mood: 'think', emote: ba[p] !== right[p] ? 'dots' : '?' });
  return { s, fx };
}

/** After finding Buddy's mistake: she solves it properly in pencil mode. */
export function startFix(prev: PState): Step {
  const s = clone(prev);
  s.phase = 'answer';
  s.slips = 0;
  s.msg = { k: 'wCol', p: 0, a: s.top[0], b: s.bot[0] };
  return { s, fx: [{ t: 'buddy', mood: 'think', emote: 'dots' }] };
}

// ---------------- problems ----------------

const rnd = (lo: number, hi: number): number => lo + Math.floor(Math.random() * (hi - lo + 1));

/** Does a − b need at least one borrow? */
export function needsBorrow(a: number, b: number): boolean {
  const n = String(a).length, x = digitsOf(a, n), y = digitsOf(b, n);
  return x.some((d, i) => d < y[i]);
}

/** Two-digit problem where the ones must borrow and the answer still has tens. */
function twoDigit(): [number, number] {
  for (;;) {
    const ta = rnd(3, 9), tb = rnd(1, ta - 1);
    const ob = rnd(2, 9), oa = rnd(0, ob - 1);
    if (ta - 1 - tb < 1) continue; // keep a two-digit answer
    return [ta * 10 + oa, tb * 10 + ob];
  }
}

/** Three-digit problem with at least one borrow; sometimes across a zero. */
function threeDigit(acrossZero: boolean): [number, number] {
  for (let tries = 0; tries < 500; tries++) {
    const a = acrossZero ? rnd(2, 9) * 100 + rnd(0, 9) : rnd(200, 999);
    const b = rnd(101, a - 100);
    if (acrossZero && Math.floor(a / 10) % 10 !== 0) continue;
    if (!needsBorrow(a, b)) continue;
    if (Math.floor((a - b) / 100) < 1) continue; // answer keeps its hundreds
    if (acrossZero && a % 10 >= b % 10) continue; // the ones must need the borrow
    return [a, b];
  }
  return [403, 158];
}

/** A problem where Buddy's mistake shows up in the ones column. */
function buddyProblem(): [number, number] {
  for (;;) {
    const [a, b] = twoDigit();
    if ((b % 10) - (a % 10) !== 5) return [a, b];
  }
}

export const ROUND_SIZE = 5;

/** The problems for one round at a level (0 blocks, 1 discs, 2 pencil). */
export function makeRound(level: number): { mode: Mode; a: number; b: number }[] {
  const out: { mode: Mode; a: number; b: number }[] = [];
  const seen = new Set<string>();
  while (out.length < ROUND_SIZE) {
    const i = out.length;
    let mode: Mode, pair: [number, number];
    if (level <= 0) { mode = 'blocks'; pair = twoDigit(); }
    else if (level === 1) { mode = 'discs'; pair = threeDigit(i === 3); }
    else if (i === 2) { mode = 'buddy'; pair = buddyProblem(); }
    else { mode = 'pencil'; pair = i === 0 ? twoDigit() : threeDigit(i === 4); }
    const key = pair.join('-');
    if (seen.has(key)) continue;
    seen.add(key);
    out.push({ mode, a: pair[0], b: pair[1] });
  }
  return out;
}

/** Rounds to finish at a level before the next one unlocks */
export const ROUNDS_PER_LEVEL = 2;
