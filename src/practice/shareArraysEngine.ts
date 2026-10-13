// src/practice/shareArraysEngine.ts
// Rules for the Arrays and Sharing modules (same pattern as borrowEngine / tablesEngine:
// pure functions that return the next state plus effects for the screen).
//
// Arrays:  Build (make r rows of c) → Tens (n × r split into 10 + ones) → Boxes (area model a × b)
//          + Buddy's mistake in Boxes rounds (tens box computed as a digit: 2 × 4 instead of 20 × 4).
// Sharing: Plates (deal cookies, maybe leftovers) → Rows (rows of k up to n) → Memory (n ÷ k)
//          + Buddy's mistake in Memory rounds (one row off).

export type Module = 'arrays' | 'sharing';
export type Kind = 'build' | 'tens' | 'boxes' | 'abuddy' | 'plates' | 'rows' | 'memory' | 'sbuddy';
export type Phase = 'find' | 'judge' | 'answer' | 'done';
export type Mood = 'idle' | 'think' | 'curious' | 'happy' | 'oops' | 'thanks';
export type Emote = '?' | '!' | 'heart' | 'drop' | 'dots' | 'star';

export interface Fact {
  kind: Kind;
  /** build: rows × cols. tens: rows of n. boxes/abuddy: a × b. sharing: n ÷ k (claim = Buddy's answer) */
  r?: number; c?: number; n?: number; a?: number; b?: number; k?: number; claim?: number;
}

export type Msg =
  | { k: 'buildAsk'; r: number; c: number }
  | { k: 'buildSwapped'; r: number; c: number }
  | { k: 'buildWrong'; r: number; c: number; rr: number; cc: number }
  | { k: 'buildOk'; r: number; c: number }
  | { k: 'turned'; r: number; c: number; n: number }
  | { k: 'tensAsk' } | { k: 'tensB' } | { k: 'sum' }
  | { k: 'boxesAsk'; a: number } | { k: 'boxesB' }
  | { k: 'abuddyAsk' } | { k: 'abuddyNope' } | { k: 'abuddyFound'; t: number; b: number }
  | { k: 'platesAsk'; n: number; k2: number } | { k: 'dealing'; left: number } | { k: 'dealtEven' } | { k: 'dealtLeft'; left: number } | { k: 'leftAsk' }
  | { k: 'rowsAsk'; n: number; k2: number } | { k: 'rowsCount'; n: number } | { k: 'rowsDone'; n: number } | { k: 'rowsOver'; n: number } | { k: 'countRows'; n: number }
  | { k: 'memAsk' }
  | { k: 'sbuddyAsk'; n: number; k2: number; w: number } | { k: 'sbuddyNo'; n: number; k2: number } | { k: 'lookAgain' }
  | { k: 'tryAgain' } | { k: 'thanks' } | { k: 'done' };

export type Fx =
  | { t: 'sfx'; name: string; semitones?: number }
  | { t: 'voice'; name: string }
  | { t: 'buddy'; mood: Mood; emote?: Emote }
  | { t: 'shake'; target: 'slot' | 'board' | 'box' }
  | { t: 'solved'; firstTry: boolean };

export interface State {
  fact: Fact;
  kind: Kind;
  phase: Phase;
  answers: number[];
  cur: number;
  vals: number[];
  typed: string;
  /** Keypad is usable */
  gate: boolean;
  slips: number;
  wrong: number;
  msg: Msg;
  // build
  sel: { r: number; c: number } | null;
  ok: boolean;
  turned: boolean;
  // boxes / abuddy
  tensPart: number;
  onesPart: number;
  picked: 't' | null;
  // plates
  left: number;
  plates: number[];
  // rows / memory / sbuddy
  rowsN: number;
  peek: boolean;
  peekReady: boolean;
}
export interface Step { s: State; fx: Fx[] }

const clone = (s: State): State => ({ ...s, answers: s.answers.slice(), vals: s.vals.slice(), plates: s.plates.slice(), sel: s.sel ? { ...s.sel } : null });

export const BUILD_ROWS = 6;
export const BUILD_COLS = 8;

export function start(f: Fact): State {
  const s: State = {
    fact: f, kind: f.kind, phase: 'answer', answers: [], cur: 0, vals: [], typed: '', gate: true, slips: 0, wrong: 0, msg: { k: 'memAsk' },
    sel: null, ok: false, turned: false, tensPart: 0, onesPart: 0, picked: null, left: 0, plates: [], rowsN: 0, peek: false, peekReady: false,
  };
  switch (f.kind) {
    case 'build':
      s.gate = false;
      s.answers = [f.r! * f.c!];
      s.msg = { k: 'buildAsk', r: f.r!, c: f.c! };
      break;
    case 'tens':
      s.answers = [10 * f.r!, (f.n! - 10) * f.r!, f.n! * f.r!];
      s.msg = { k: 'tensAsk' };
      break;
    case 'boxes':
    case 'abuddy':
      s.tensPart = Math.floor(f.a! / 10) * 10;
      s.onesPart = f.a! % 10;
      s.answers = [s.tensPart * f.b!, s.onesPart * f.b!, f.a! * f.b!];
      if (f.kind === 'abuddy') { s.phase = 'find'; s.gate = false; s.msg = { k: 'abuddyAsk' }; }
      else s.msg = { k: 'boxesAsk', a: f.a! };
      break;
    case 'plates': {
      s.gate = false;
      s.left = f.n!;
      s.plates = Array(f.k!).fill(0);
      const rem = f.n! % f.k!;
      s.answers = rem ? [Math.floor(f.n! / f.k!), rem] : [f.n! / f.k!];
      s.msg = { k: 'platesAsk', n: f.n!, k2: f.k! };
      break;
    }
    case 'rows':
      s.answers = [f.n! / f.k!];
      s.msg = { k: 'rowsAsk', n: f.n!, k2: f.k! };
      break;
    case 'memory':
      s.answers = [f.n! / f.k!];
      s.msg = { k: 'memAsk' };
      break;
    case 'sbuddy':
      s.answers = [f.n! / f.k!];
      s.phase = 'judge';
      s.gate = false;
      s.msg = { k: 'sbuddyAsk', n: f.n!, k2: f.k!, w: f.claim! };
      break;
  }
  return s;
}

/** Answer the current slot from the keypad */
export function press(prev: State, key: string): Step {
  if (prev.phase !== 'answer' || !prev.gate) return { s: prev, fx: [] };
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

function check(prev: State): Step {
  if (!prev.typed) return { s: prev, fx: [] };
  const s = clone(prev);
  const v = Number(s.typed);
  s.typed = '';
  if (v === s.answers[s.cur]) {
    s.vals[s.cur] = v;
    if (s.cur < s.answers.length - 1) {
      s.cur++;
      const fx: Fx[] = [{ t: 'sfx', name: 'answer-correct' }, { t: 'buddy', mood: 'happy' }];
      if (s.kind === 'tens') { s.msg = s.cur === 1 ? { k: 'tensB' } : { k: 'sum' }; if (s.cur === 1) fx.push({ t: 'sfx', name: 'split-array' }); }
      else if (s.kind === 'boxes' || s.kind === 'abuddy') s.msg = s.cur === 1 ? { k: 'boxesB' } : { k: 'sum' };
      else if (s.kind === 'plates') s.msg = { k: 'leftAsk' };
      return { s, fx };
    }
    return finish(s);
  }
  s.wrong++;
  s.slips++;
  const fx: Fx[] = [{ t: 'shake', target: 'slot' }, { t: 'sfx', name: 'answer-wrong' }, { t: 'buddy', mood: 'think', emote: 'dots' }, { t: 'voice', name: 'hmm' }];
  if (s.kind === 'rows' && s.wrong >= 2) s.msg = { k: 'countRows', n: s.fact.n! };
  else s.msg = { k: 'tryAgain' };
  if ((s.kind === 'memory' || s.kind === 'sbuddy') && !s.peek) s.peekReady = true;
  return { s, fx };
}

function finish(s: State): Step {
  s.phase = 'done';
  s.gate = false;
  const thanks = s.kind === 'abuddy' || s.kind === 'sbuddy';
  s.msg = thanks ? { k: 'thanks' } : { k: 'done' };
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

// ---------------- Arrays: Build ----------------

/** While dragging: show the rectangle (no checking yet) */
export function buildPreview(prev: State, r: number, c: number): State {
  if (prev.kind !== 'build' || prev.ok) return prev;
  if (prev.sel && prev.sel.r === r && prev.sel.c === c) return prev;
  return { ...clone(prev), sel: { r, c } };
}

/** Finger lifted: check the rectangle */
export function buildPick(prev: State, r: number, c: number): Step {
  if (prev.kind !== 'build' || prev.ok) return { s: prev, fx: [] };
  const s = clone(prev);
  s.sel = { r, c };
  const f = s.fact;
  if (r === f.r && c === f.c) {
    s.ok = true;
    s.gate = true;
    s.msg = { k: 'buildOk', r, c };
    return { s, fx: [{ t: 'sfx', name: 'block-drop' }, { t: 'buddy', mood: 'curious', emote: '!' }, { t: 'voice', name: 'curious' }] };
  }
  s.slips++;
  s.msg = r === f.c && c === f.r ? { k: 'buildSwapped', r: f.r!, c: f.c! } : { k: 'buildWrong', r: f.r!, c: f.c!, rr: r, cc: c };
  return { s, fx: [{ t: 'sfx', name: 'cant-place' }, { t: 'buddy', mood: 'think', emote: '?' }] };
}

/** After solving a Build problem: turn the array a quarter turn (3 × 4 = 4 × 3) */
export function turn(prev: State): Step {
  if (prev.kind !== 'build' || prev.phase !== 'done') return { s: prev, fx: [] };
  const s = clone(prev);
  s.turned = !s.turned;
  s.msg = s.turned ? { k: 'turned', r: s.fact.r!, c: s.fact.c!, n: s.fact.r! * s.fact.c! } : { k: 'done' };
  return { s, fx: [{ t: 'sfx', name: 'item-rotate' }] };
}

// ---------------- Arrays: Buddy's boxes ----------------

/** Buddy's wrong tens box: he multiplied the tens digit, not the tens */
export const buddyTensBox = (s: State): number => (s.tensPart / 10) * s.fact.b!;

export function pickBox(prev: State, which: 't' | 'o'): Step {
  if (prev.phase !== 'find') return { s: prev, fx: [] };
  const s = clone(prev);
  if (which === 't') {
    s.picked = 't';
    s.msg = { k: 'abuddyFound', t: s.tensPart, b: s.fact.b! };
    return { s, fx: [{ t: 'sfx', name: 'answer-correct' }, { t: 'buddy', mood: 'oops', emote: 'drop' }, { t: 'voice', name: 'oops' }] };
  }
  s.slips++;
  s.msg = { k: 'abuddyNope' };
  return { s, fx: [{ t: 'shake', target: 'box' }, { t: 'sfx', name: 'answer-wrong' }, { t: 'buddy', mood: 'think', emote: '?' }] };
}

export function startFix(prev: State): Step {
  if (prev.phase !== 'find' || !prev.picked) return { s: prev, fx: [] };
  const s = clone(prev);
  s.phase = 'answer';
  s.gate = true;
  s.picked = null;
  s.slips = 0;
  s.msg = { k: 'boxesAsk', a: s.fact.a! };
  return { s, fx: [{ t: 'buddy', mood: 'think', emote: 'dots' }] };
}

// ---------------- Sharing: Plates ----------------

/** One tap on the jar deals one cookie to every plate */
export function deal(prev: State): Step {
  if (prev.kind !== 'plates' || prev.gate || prev.phase !== 'answer') return { s: prev, fx: [] };
  const k = prev.fact.k!;
  if (prev.left < k) return { s: prev, fx: [] };
  const s = clone(prev);
  s.left -= k;
  s.plates = s.plates.map((x) => x + 1);
  const fx: Fx[] = [{ t: 'sfx', name: 'deal-slide' }, { t: 'sfx', name: 'deal-land' }];
  if (s.left === 0) { s.gate = true; s.msg = { k: 'dealtEven' }; fx.push({ t: 'buddy', mood: 'curious', emote: '!' }); }
  else if (s.left < k) { s.gate = true; s.msg = { k: 'dealtLeft', left: s.left }; fx.push({ t: 'buddy', mood: 'curious', emote: '?' }, { t: 'voice', name: 'curious' }); }
  else s.msg = { k: 'dealing', left: s.left };
  return { s, fx };
}

// ---------------- Sharing: Rows ----------------

const rowsVisible = (s: State): boolean => s.kind === 'rows' || ((s.kind === 'memory' || s.kind === 'sbuddy') && s.peek);

/** Tap the rows box: add a row of k (or, past the goal, tap the last row to take it away) */
export function tapRows(prev: State, removeLast: boolean): Step {
  if (prev.phase === 'done' || !rowsVisible(prev)) return { s: prev, fx: [] };
  const { n, k } = prev.fact as { n: number; k: number };
  const over = prev.rowsN * k > n;
  const s = clone(prev);
  if (removeLast && over) s.rowsN--;
  else if (!removeLast && s.rowsN < n / k + 2) s.rowsN++;
  else return { s: prev, fx: [] };
  const total = s.rowsN * k;
  s.msg = total === n ? { k: 'rowsDone', n } : total > n ? { k: 'rowsOver', n } : { k: 'rowsCount', n: total };
  const fx: Fx[] = [{ t: 'sfx', name: 'count-tick', semitones: Math.min(19, (s.rowsN - 1) * 2) }];
  if (total === n) fx.push({ t: 'buddy', mood: 'curious', emote: '!' });
  return { s, fx };
}

export function showRows(prev: State): Step {
  if (prev.peek || prev.phase === 'done') return { s: prev, fx: [] };
  const s = clone(prev);
  s.peek = true;
  s.peekReady = false;
  s.slips++;
  s.msg = { k: 'rowsAsk', n: s.fact.n!, k2: s.fact.k! };
  return { s, fx: [{ t: 'sfx', name: 'hint-start' }, { t: 'buddy', mood: 'curious', emote: '!' }, { t: 'voice', name: 'curious' }] };
}

export function offerPeek(prev: State): State {
  if (prev.peek || prev.peekReady || prev.phase === 'done') return prev;
  return { ...clone(prev), peekReady: true };
}

// ---------------- Sharing: Buddy's answer ----------------

export function judge(prev: State, saysRight: boolean): Step {
  if (prev.phase !== 'judge') return { s: prev, fx: [] };
  const s = clone(prev);
  if (saysRight) {
    s.peek = true;
    s.slips++;
    s.msg = { k: 'lookAgain' };
    return { s, fx: [{ t: 'shake', target: 'board' }, { t: 'sfx', name: 'answer-wrong' }, { t: 'buddy', mood: 'think', emote: '?' }] };
  }
  s.phase = 'answer';
  s.gate = true;
  s.msg = { k: 'sbuddyNo', n: s.fact.n!, k2: s.fact.k! };
  return { s, fx: [{ t: 'sfx', name: 'answer-correct' }, { t: 'buddy', mood: 'oops', emote: 'drop' }, { t: 'voice', name: 'oops' }] };
}

// ---------------- rounds ----------------

export const ROUND_SIZE = 5;
/** First-try answers out of 5 needed to unlock the next step */
export const PASS_FIRST_TRY = 4;
export const STEPS: Record<Module, Kind[]> = { arrays: ['build', 'tens', 'boxes'], sharing: ['plates', 'rows', 'memory'] };

const rnd = (lo: number, hi: number): number => lo + Math.floor(Math.random() * (hi - lo + 1));

function oneFact(kind: Kind, i: number): Fact {
  switch (kind) {
    case 'build': return { kind, r: rnd(2, BUILD_ROWS), c: rnd(2, BUILD_COLS) };
    case 'tens': return { kind, r: rnd(2, 6), n: rnd(11, 19) };
    case 'boxes': return { kind, a: rnd(2, 9) * 10 + rnd(1, 9), b: rnd(2, 9) };
    case 'abuddy': {
      // tens digit ≠ ones digit, so Buddy's wrong box never matches the ones box
      const tens = rnd(2, 9);
      let ones = rnd(1, 9);
      while (ones === tens) ones = rnd(1, 9);
      return { kind, a: tens * 10 + ones, b: rnd(2, 9) };
    }
    case 'plates': {
      const k = rnd(2, 5), q = rnd(2, 5);
      // one problem per round has leftovers
      return { kind, k, n: k * q + (i === 3 ? rnd(1, k - 1) : 0) };
    }
    case 'rows':
    case 'memory': { const k = rnd(2, 9), q = rnd(2, 9); return { kind, k, n: k * q }; }
    case 'sbuddy': {
      const k = rnd(2, 9), q = rnd(2, 9);
      return { kind, k, n: k * q, claim: q <= 2 || Math.random() < 0.5 ? q + 1 : q - 1 };
    }
  }
}

/** Five problems for a module at a step (0, 1, 2). Step 3 rounds include one of Buddy's mistakes. */
export function makeRound(mod: Module, step: number): Fact[] {
  const kind = STEPS[mod][Math.min(2, Math.max(0, step))];
  const out: Fact[] = [];
  const seen = new Set<string>();
  while (out.length < ROUND_SIZE) {
    const i = out.length;
    let k: Kind = kind;
    if (i === 2 && kind === 'boxes') k = 'abuddy';
    if (i === 2 && kind === 'memory') k = 'sbuddy';
    const f = oneFact(k, i);
    const key = JSON.stringify({ ...f, claim: undefined });
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(f);
  }
  return out;
}
