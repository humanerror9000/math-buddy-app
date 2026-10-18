// src/practice/StoryPractice.tsx
// Story math (word problems), as approved in the mockup. Same Buddy, HUD, card and keypad as the other
// practice screens. Each story: the instruction types in, she reads the story, picks the operation
// (or builds the problem from the story's numbers), then solves it with the method from the matching module.

import { Fragment, useCallback, useEffect, useMemo, useRef, useState, type ReactElement } from 'react';
import '../room/room.css';
import './practice.css';
import { addStars, updateGame, useGame } from '../game/store';
import { playSfx, playVoice } from '../audio/sound';
import { CheckIcon, StarIcon } from '../room/icons';
import { BuddyStage } from './BuddyStage';
import { InstructionIntro } from './InstructionIntro';
import { makeRound, type Item, type Op, type RoundItem, type Who } from './storyBank';
import { STORY_STRINGS } from './storyI18n';
import * as E from './storyEngine';

const escapeHtml = (s: string): string =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const OPS: Op[] = ['+', '−', '×', '÷'];
const RECALL_PAUSE_MS = 5000;
const PART_BEAT_MS = 1800;
const SENTENCE_BEAT_MS = 1100;

const EMOTE: Record<E.Emote, ReactElement> = {
  '?': <span style={{ color: 'var(--cobalt)' }}>?</span>,
  '!': <span style={{ color: 'var(--tomato)' }}>!</span>,
  dots: <span style={{ color: 'var(--ink-soft)', letterSpacing: 2, fontSize: 26 }}>•••</span>,
  star: <StarIcon size={30} />,
  heart: <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.5s-7.5-4.6-7.5-10.1A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.8c0 5.5-7.5 10.1-7.5 10.1z" fill="#F64034" /></svg>,
  drop: <svg width="26" height="30" viewBox="0 0 20 24" aria-hidden="true"><path d="M10 2C10 2 3 11 3 15.5a7 7 0 0 0 14 0C17 11 10 2 10 2z" fill="#70BCD6" /></svg>,
};

const ICON: Record<Item, ReactElement> = {
  cookie: <span className="st-cookie" />,
  orange: <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="22" r="15" fill="#F7931E" /><circle cx="15" cy="17" r="4" fill="#FFC27A" opacity=".7" /><path d="M20 7c2-4 7-4 9-3-1 4-5 6-9 3z" fill="#5DBB46" /></svg>,
  book: <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><rect x="8" y="6" width="22" height="28" rx="3" fill="#2760BF" /><rect x="11" y="6" width="3" height="28" fill="#1C4790" /><rect x="17" y="12" width="10" height="3" rx="1.5" fill="#fff" opacity=".8" /></svg>,
  sticker: <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.6l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.4l-5.4 2.9 1.1-6.1L3.2 9l6.1-.8z" fill="#6B4BC4" stroke="#4F3499" strokeWidth="1.4" strokeLinejoin="round" /></svg>,
  fish: <svg width="42" height="38" viewBox="0 0 44 40" aria-hidden="true"><path d="M6 20c6-10 20-12 28 0-8 12-22 10-28 0z" fill="#F64034" /><path d="M33 20l9-7v14z" fill="#C42A22" /><circle cx="14" cy="18" r="2.2" fill="#26304A" /></svg>,
};

interface Props {
  onExit: () => void;
  onSolved?: (firstTry: boolean) => void;
}

interface IntroState { id: number; text: string; key: string }

export function StoryPractice({ onExit, onSolved }: Props) {
  const game = useGame();
  const lang = game.lang;
  const t = STORY_STRINGS[lang];
  const name = game.name || 'Buddy';
  /** Name escaped for story text and messages (they are HTML) */
  const who: Who = useMemo(() => ({ name: escapeHtml(name), kind: game.kind }), [name, game.kind]);
  /** Plain name for the intro (rendered as text) */
  const whoPlain: Who = useMemo(() => ({ name, kind: game.kind }), [name, game.kind]);
  const level = Math.min(3, Math.max(0, game.story ?? 0));
  const step = Math.min(2, level);

  const [round, setRound] = useState<RoundItem[]>(() => makeRound(step, who));
  const [idx, setIdx] = useState(0);
  const [s, setS] = useState<E.State>(() => E.start(round[0]));
  const [firstTries, setFirstTries] = useState(0);
  const [earned, setEarned] = useState(0);
  const [complete, setComplete] = useState<{ line: string | null } | null>(null);
  const [sentence, setSentence] = useState(false);
  const [carried, setCarried] = useState(false);

  // ---- the instruction intro ----
  const introId = useRef(0);
  const [intro, setIntro] = useState<IntroState | null>(() => ({ id: ++introId.current, text: t.intro(round[0].mode, whoPlain), key: round[0].mode }));
  const [taskShown, setTaskShown] = useState(false);
  const [land, setLand] = useState(0);
  const [workGen, setWorkGen] = useState(0);
  const playIntro = useCallback((text: string, key: string) => {
    setTaskShown(false);
    setIntro({ id: ++introId.current, text, key });
  }, []);

  // ---- Buddy ----
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stageRef = useRef<BuddyStage | null>(null);
  const emoteRef = useRef<HTMLDivElement>(null);
  const [emote, setEmote] = useState<E.Emote | null>(null);
  const emoteTimer = useRef(0);
  useEffect(() => {
    if (!canvasRef.current) return;
    let stage: BuddyStage | null = null;
    try { stage = new BuddyStage(canvasRef.current, game.kind, 1); } catch { stage = null; }
    stageRef.current = stage;
    let raf = 0;
    const follow = () => {
      if (stage && emoteRef.current) {
        const p = stage.headPos();
        emoteRef.current.style.left = `${p.x}px`;
        emoteRef.current.style.top = `${p.y}px`;
      }
      raf = requestAnimationFrame(follow);
    };
    raf = requestAnimationFrame(follow);
    void playVoice('hello');
    return () => { cancelAnimationFrame(raf); stage?.dispose(); stageRef.current = null; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => stageRef.current?.setKind(game.kind), [game.kind]);
  useEffect(() => () => clearTimeout(emoteTimer.current), []);
  const showEmote = useCallback((e: E.Emote) => {
    setEmote(e);
    clearTimeout(emoteTimer.current);
    emoteTimer.current = window.setTimeout(() => setEmote(null), 1600);
  }, []);

  // Buddy's "!" while the instruction types
  useEffect(() => {
    if (!intro) return;
    stageRef.current?.react('curious');
    showEmote('!');
  }, [intro, showEmote]);

  // ---- stars ----
  const starChipRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLElement>(null);
  const [bump, setBump] = useState(0);
  const flyStar = useCallback(() => {
    const card = cardRef.current?.getBoundingClientRect();
    const chip = starChipRef.current?.getBoundingClientRect();
    if (!card || !chip) { addStars(1); return; }
    const el = document.createElement('div');
    el.className = 'bp-flystar';
    el.innerHTML = '<svg width="44" height="44" viewBox="0 0 24 24"><path d="M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17.1 6.1 20.3l1.3-6.5L2.5 9.3l6.6-.8z" fill="#FBC426" stroke="#D99A0F" stroke-width="1.6" stroke-linejoin="round"/></svg>';
    const x0 = card.left + card.width / 2 - 22, y0 = card.top + card.height / 2 - 22;
    el.style.left = `${x0}px`;
    el.style.top = `${y0}px`;
    document.body.appendChild(el);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      el.style.transform = `translate(${chip.left + 12 - x0}px, ${chip.top + 2 - y0}px) scale(.6)`;
      el.style.opacity = '0';
    }));
    window.setTimeout(() => { el.remove(); addStars(1); setBump((n) => n + 1); }, 820);
  }, []);

  // ---- timers that belong to the current story (cleared when it changes) ----
  const timers = useRef<number[]>([]);
  const later = (fn: () => void, ms: number) => { timers.current.push(window.setTimeout(fn, ms)); };
  const clearTimers = () => { timers.current.forEach(clearTimeout); timers.current = []; };
  useEffect(() => clearTimers, []);

  const sRef = useRef(s);
  sRef.current = s;
  // browser tests read the state from here (only when a test sets window.__MB_TEST__)
  useEffect(() => { const w = window as unknown as { __MB_TEST__?: { story?: E.State } }; if (w.__MB_TEST__) w.__MB_TEST__.story = s; }, [s]);

  // ---- running actions ----
  const run = useCallback((st: E.Step) => {
    if (st.s === sRef.current && st.fx.length === 0) return;
    for (const f of st.fx) {
      switch (f.t) {
        case 'sfx': void playSfx(f.name); break;
        case 'voice': void playVoice(f.name); break;
        case 'buddy': stageRef.current?.react(f.mood); if (f.emote) showEmote(f.emote); break;
        case 'shake': {
          const sel = { ops: '.st-ops', slot: '.st-sl.active, .st-bx.want', top: `[data-top="${f.p}"]`, buddy: '.st-buddyeq', box: '.st-bx.want' }[f.target];
          const el = cardRef.current?.querySelector(sel);
          if (el) { el.classList.remove('bp-shake'); void (el as HTMLElement).offsetWidth; el.classList.add('bp-shake'); }
          break;
        }
        case 'partDone':
          // a beat to see step one finished, then step two starts from its answer
          later(() => {
            const next = E.nextPart(sRef.current);
            if (next === sRef.current) return;
            setS(next);
            setCarried(true);
            playIntro(t.part2(next.results[next.part - 1]), 'part2');
          }, PART_BEAT_MS);
          break;
        case 'solved':
          setEarned((n) => n + 1);
          if (f.firstTry) setFirstTries((n) => n + 1);
          onSolved?.(f.firstTry);
          flyStar();
          // keep the finished work on screen for a beat, then the sentence and the Next button
          later(() => setSentence(true), SENTENCE_BEAT_MS);
          break;
      }
    }
    setS(st.s);
  }, [game.kind, showEmote, flyStar, onSolved, playIntro, t]);

  // Memory: quiet pause, then offer "Show me"
  useEffect(() => {
    const v = s.solver;
    if (intro || !v || v.kind !== 'mental' || v.peek || v.peekReady || s.partDone) return;
    const id = window.setTimeout(() => setS((cur) => E.offerPeek(cur)), RECALL_PAUSE_MS);
    return () => clearTimeout(id);
  }, [s, intro]);

  // ---- moving on ----
  const begin = useCallback((item: RoundItem) => {
    clearTimers();
    setS(E.start(item));
    setSentence(false);
    setCarried(false);
    playIntro(t.intro(item.mode, whoPlain), item.mode);
    stageRef.current?.react('idle');
  }, [playIntro, t, whoPlain]);

  const startRound = useCallback(() => {
    const r = makeRound(Math.min(2, Math.max(0, game.story ?? 0)), who);
    setRound(r);
    setIdx(0);
    setFirstTries(0);
    setEarned(0);
    setComplete(null);
    begin(r[0]);
  }, [game.story, who, begin]);

  const next = useCallback(() => {
    void playSfx('sheet-close');
    if (idx + 1 < round.length) {
      setIdx(idx + 1);
      begin(round[idx + 1]);
      return;
    }
    let line: string | null = null;
    if (level < 3) {
      if (firstTries >= E.PASS_FIRST_TRY) {
        updateGame((g) => ({ ...g, story: Math.max(g.story ?? 0, level + 1) }));
        line = level + 1 >= 3 ? t.allDone : t.stepUnlocked(level + 1);
      } else line = t.keepGoing(E.PASS_FIRST_TRY);
    }
    setComplete({ line });
    void playSfx('round-complete');
    void playVoice('cheer');
    stageRef.current?.react('happy');
    showEmote('star');
  }, [idx, round, level, firstTries, t, game.kind, showEmote, begin]);

  // keyboard
  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (complete || intro) return;
      if (/^[0-9]$/.test(ev.key)) run(E.press(s, ev.key));
      else if (ev.key === 'Backspace') run(E.press(s, 'del'));
      else if (ev.key === 'Enter') { if (s.finished) { if (sentence) next(); } else run(E.press(s, 'go')); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [s, run, next, complete, intro, sentence]);

  // small screens: keep the part she's working on (and the sentence after) scrolled into view
  const workRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const w = workRef.current;
    if (!w || intro) return;
    const target = (sentence ? w.lastElementChild : w.querySelector('.st-bx.want, .st-sl.active, .st-ops')) as HTMLElement | null;
    if (!target) return;
    const wr = w.getBoundingClientRect(), tr = target.getBoundingClientRect();
    if (tr.bottom > wr.bottom) w.scrollTo({ top: w.scrollTop + tr.bottom - wr.bottom + 12, behavior: 'smooth' });
  }, [s, sentence, intro]);

  // ---- pieces of the card ----
  const p = E.curPart(s);
  const twoStep = s.story.parts.length > 1;
  const v = s.solver;

  const storyText = useMemo(() => {
    const bits = s.story.text[lang].split(/@(\d+)@/);
    let n = 0;
    return bits.map((bit, i) => {
      if (i % 2 === 0) return <span key={i} dangerouslySetInnerHTML={{ __html: bit }} />;
      const key = `${bit}:${n++}`;
      const used = s.keys.includes(key) || s.oldKeys.includes(key);
      const tap = s.stage === 'build' && !used && !s.partDone;
      const wig = tap && (s.slots[0] === null || s.slots[1] === null);
      return (
        <span key={i} className={`st-num${tap ? ' tap' : ''}${wig ? ' wig' : ''}${used ? ' used' : ''}`} data-key={key}
          role={tap ? 'button' : undefined}
          onClick={tap ? () => { setCarried(false); run(E.tapNum(s, Number(bit), key)); } : undefined}>{bit}</span>
      );
    });
  }, [s, lang, run]);

  const opButtons = (dim: boolean) => (
    <div className={`st-ops${dim ? ' dim' : ''}`}>
      {OPS.map((o) => (
        <button key={o} className={`st-op${s.op === o ? ' on' : ''}`} onClick={() => run(E.pickOp(s, o))}>
          <b>{o}</b>{t.opName(o)}
        </button>
      ))}
    </div>
  );

  function stackView(st: E.Stack): ReactElement {
    const n = st.n, col = (q: number) => n - q + 1;
    const done = s.partDone;
    const cells: ReactElement[] = [];
    if (!done) cells.push(<div key="band" className="st-band" style={{ gridRow: '1 / -1', gridColumn: col(st.active) }} />);
    for (let q = n - 1; q >= 0; q--) {
      // a leading 0 on top (e.g. 06 + 25, or 81 + 39 carrying into the hundreds) isn't written
      const blank = q === n - 1 && n > 1 && st.orig[q] === 0 && !st.crossed[q];
      const inner = st.crossed[q]
        ? <><span className="old">{st.orig[q]}</span><span className="new">{st.top[q]}</span></>
        : <>{blank ? <span className="ghost">0</span> : st.orig[q]}{st.carry[q] ? <span className="carry">+1</span> : null}</>;
      cells.push(
        <div key={`t${q}`} className="c top" style={{ gridRow: 1, gridColumn: col(q) }}>
          <button className={`dg${st.glow === q ? ' glow' : ''}`} data-top={q} onClick={() => run(E.tapTop(s, q))}>{inner}</button>
        </div>,
      );
    }
    cells.push(<div key="sign" className="c sign" style={{ gridRow: 2, gridColumn: 1 }}>{st.op}</div>);
    for (let q = n - 1; q >= 0; q--) cells.push(<div key={`b${q}`} className="c" style={{ gridRow: 2, gridColumn: col(q) }}><span className="dg">{q < st.botLen ? st.bot[q] : ''}</span></div>);
    cells.push(<div key="rule" className="rule" style={{ gridRow: 3, gridColumn: '1 / -1' }} />);
    for (let q = n - 1; q >= 0; q--) {
      const f = st.ans[q] !== null, act = !done && q === st.active && !st.pendingCarry;
      const lead = f && q === n - 1 && n > 1 && st.ans[q] === 0;
      cells.push(
        <div key={`a${q}`} className="c" style={{ gridRow: 4, gridColumn: col(q) }}>
          {!lead && <div className={`st-sl ${f ? 'filled' : act ? 'active' : 'empty'}`}>{f ? st.ans[q] : ''}</div>}
        </div>,
      );
    }
    return (
      <div className={`st-stack${done ? ' complete' : ''}${s.part > 0 ? ' small' : ''}`} style={{ gridTemplateColumns: `.7em repeat(${n}, 1fr)`, gridTemplateRows: 'repeat(4, auto)' }}>
        {cells}
      </div>
    );
  }

  function boxesView(b: E.Boxes): ReactElement {
    const done = s.partDone;
    const tw = 72;
    const line = (i: number, parts: ReactElement) => {
      const cls = done ? '' : i === b.cur ? ' on' : i > b.cur ? ' later' : '';
      const ans = b.vals[i] !== undefined
        ? <span className="st-bx ok">{b.vals[i]}</span>
        : <span className={`st-bx${i === b.cur ? ' want' : ''}`}>{i === b.cur ? s.typed : ''}</span>;
      return <div className={`st-eqline${cls}`}>{parts}<span>=</span>{ans}</div>;
    };
    const a1 = b.groupsFirst ? <><span>{b.g}</span><span>×</span><span className="t">{b.tn}</span></> : <><span className="t">{b.tn}</span><span>×</span><span>{b.g}</span></>;
    const a2 = b.groupsFirst ? <><span>{b.g}</span><span>×</span><span className="o">{b.on}</span></> : <><span className="o">{b.on}</span><span>×</span><span>{b.g}</span></>;
    const bv = (i: number) => (b.vals[i] !== undefined ? <span className="val">{b.vals[i]}</span> : <span className="q">?</span>);
    return (
      <div className="st-solve">
        <div className="st-beqs">
          {line(0, a1)}
          {line(1, a2)}
          {line(2, <><span>{b.answers[0]}</span><span>+</span><span>{b.answers[1]}</span></>)}
        </div>
        <div className="st-mbox">
          <div className="top"><span className="t" style={{ width: `${tw}%` }}>{b.tn}</span><span className="o" style={{ width: `${100 - tw}%` }}>{b.on}</span></div>
          <div className="side">{b.g}</div>
          <div className="boxes">
            <div className={`bb t${!done && b.cur === 0 ? ' on' : ''}`} style={{ width: `${tw}%` }}>{bv(0)}</div>
            <div className={`bb o${!done && b.cur === 1 ? ' on' : ''}`} style={{ width: `${100 - tw}%` }}>{bv(1)}</div>
          </div>
        </div>
      </div>
    );
  }

  function mentalView(m: E.Mental): ReactElement {
    let help: ReactElement | null = null;
    if (m.peek) {
      const rows = p.op === '×' ? Math.min(p.a, p.b) : p.a / p.b, cols = p.op === '×' ? Math.max(p.a, p.b) : p.b;
      help = <div className="st-minirr">{Array.from({ length: rows }, (_, r) => <div key={r}>{Array.from({ length: cols }, (_, c) => <i key={c} />)}</div>)}</div>;
    } else if (m.peekReady && !s.partDone) {
      help = (
        <button className="tp-peek" onClick={() => run(E.showHelp(s))}>
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6 5 2 12 2 12s4 7 10 7 10-7 10-7-4-7-10-7z" fill="none" stroke="currentColor" strokeWidth="2.4" /><circle cx="12" cy="12" r="3.2" fill="currentColor" /></svg>
          {t.peek}
        </button>
      );
    }
    const ans = s.partDone ? <span className="st-bx ok">{s.results[s.part]}</span> : <span className="st-bx want">{s.typed}</span>;
    return (
      <div className="st-solve">
        <div className="st-eqline"><span>{p.a}</span><span>{p.op}</span><span>{p.b}</span><span>=</span>{ans}</div>
        {help}
      </div>
    );
  }

  let below: ReactElement;
  if (s.stage === 'judge') {
    const claim = s.claimOp!;
    // Buddy's wrong answer (a take-away is always written bigger first)
    const [x, y] = claim === '−' ? [Math.max(p.a, p.b), Math.min(p.a, p.b)] : [p.a, p.b];
    below = (
      <>
        <span className="st-act">{t.actJudge}</span>
        <div className="st-buddyeq"><img src="/mark-face.svg" alt="" />{x} {claim} {y} = {E.calc(claim, x, y)} {s.story.unit[lang]}</div>
      </>
    );
  } else if (s.stage === 'op') {
    below = (
      <>
        {twoStep && <div className="st-partlabel">{t.step(s.part + 1)}</div>}
        <span className="st-act">{t.actOp}</span>
        {opButtons(false)}
      </>
    );
  } else if (s.stage === 'build') {
    // one instruction at a time: first the numbers (↑ the story), then the operation (↓ the buttons)
    const numsDone = s.slots[0] !== null && s.slots[1] !== null;
    const sl = (i: number) => {
      const val = s.slots[i];
      if (val !== null) {
        return i === s.locked
          ? <span className={`st-bx ok${carried ? ' carried' : ''}`}>{val}</span>
          : <button className="st-bx full" onClick={() => run(E.clearSlot(s, i))}>{val}</button>;
      }
      const want = s.slots[0] === null ? i === 0 : i === 1;
      return <span className={`st-bx${want ? ' want' : ''}`}>?</span>;
    };
    below = (
      <>
        {s.part > 0 && <div className="st-partlabel">{t.step(s.part + 1)}</div>}
        {!numsDone && <span className="st-act up">{s.part > 0 ? t.actFindOther : t.actBuildNums}</span>}
        <div className="st-eqline">{sl(0)}<span>{s.op ?? '?'}</span>{sl(1)}<span>=</span><span className="st-bx">?</span></div>
        {numsDone && <span className="st-act">{t.actBuildOp}</span>}
        {opButtons(!numsDone)}
      </>
    );
  } else {
    below = (
      <>
        {twoStep && <div className="st-partlabel">{t.step(s.part + 1)}</div>}
        <span className="st-chosen"><b>{p.op}</b>{t.opName(p.op)} · {p.a} {p.op} {p.b}</span>
        {!s.partDone && <span className="st-act">{t.actSolve}</span>}
        {v?.kind === 'stack' && <div className="st-solve">{stackView(v)}</div>}
        {v?.kind === 'boxes' && boxesView(v)}
        {v?.kind === 'mental' && mentalView(v)}
        {s.finished && sentence && (
          <>
            <div className="st-eqline st-sentence small"><span>{p.a}</span><span>{p.op}</span><span>{p.b}</span><span>=</span><span className="st-bx ok">{s.results[s.part]}</span><span className="st-unit">{s.story.unit[lang]}</span></div>
            <div className="st-why st-sentence">{s.story.why[lang]}</div>
          </>
        )}
      </>
    );
  }

  const stackPad = s.stage === 'solve' && v?.kind === 'stack';
  const ctx = { mode: s.mode, part: s.part, prev: s.results[s.part - 1], unit: s.story.unit[lang], claim: s.claimOp };
  const p0 = s.story.parts[0];

  return (
    <div className="mb bp">
      <header className="bp-hud">
        <button className="mb-chip" onClick={onExit} aria-label={t.back}>
          <img src="/mark-face.svg" alt="" width={34} height={38} style={{ margin: '-4px 0 -2px' }} />
          <span className="label">{t.back}</span>
        </button>
        <div className="bp-dots" aria-label={`${idx + 1} / ${round.length}`}>
          {round.map((_, i) => <span key={i} className={`bp-dot ${i < idx || (i === idx && s.finished) ? 'done' : i === idx ? 'now' : ''}`} />)}
        </div>
        <span ref={starChipRef} key={bump} className={`mb-chip${bump ? ' bump' : ''}`}><StarIcon />{game.stars}</span>
      </header>

      <main className="bp-stage">
        <div className="bp-buddy">
          <canvas ref={canvasRef} aria-hidden="true" />
          <div ref={emoteRef} className={`bp-emote${emote ? ' on' : ''}`}>{emote && EMOTE[emote]}</div>
        </div>

        <section className="bp-card st-card" ref={cardRef}>
          <div className={`bp-task${land && taskShown && s.msg.k === 'intro' ? ' st-land' : ''}`} key={JSON.stringify(s.msg) + lang + land}
            style={{ visibility: intro && !taskShown ? 'hidden' : undefined }} aria-live="polite">
            <span className="tag">{t.module} · {t.tag(s.mode, who)}</span>
            <span dangerouslySetInnerHTML={{ __html: t.msg(s.msg, who, ctx) }} />
          </div>

          <div className={`st-work${intro ? ' st-hidden' : ''}`} key={workGen} ref={workRef}>
            <div className="st-storybox">
              <span className="ico">{ICON[s.story.item]}</span>
              <p>{storyText.map((x, i) => <Fragment key={i}>{x}</Fragment>)}</p>
            </div>
            {twoStep && s.part === 1 && (
              <div className="st-step1">
                <span className="st-partlabel">{t.step(1)} ✓</span>
                <span>{p0.a === 'prev' ? '' : p0.a} {p0.op} {p0.b === 'prev' ? '' : p0.b} =</span>
                <span className="st-bx ok">{s.results[0]}</span>
              </div>
            )}
            {below}
          </div>

          <div className={intro ? 'st-hidden' : ''}>
            {s.finished || s.partDone ? (
              <div className="bp-next">{s.finished && sentence && <button className="mb-btn" onClick={next}>{t.next} →</button>}</div>
            ) : s.stage === 'judge' ? (
              <div className="bp-next">
                <button className="mb-btn tp-yes" onClick={() => run(E.judge(s, true))}><CheckIcon />{t.yes}</button>
                <button className="mb-btn tp-no" onClick={() => run(E.judge(s, false))}>✕ {t.no}</button>
              </div>
            ) : (
              <div className={`tp-pad${stackPad ? ' st-ten' : ''}${s.stage === 'solve' ? '' : ' sa-off'}`}>
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((d) => <button key={d} className="bp-key" onClick={() => run(E.press(s, d))}>{d}</button>)}
                {!stackPad && (
                  <>
                    <button className="bp-key tp-del" aria-label={t.del} onClick={() => run(E.press(s, 'del'))}>
                      <svg width="28" height="22" viewBox="0 0 28 22" aria-hidden="true"><path d="M9 2h15a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9l-7-9z" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" /><path d="M13 7l7 8M20 7l-7 8" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" /></svg>
                    </button>
                    <button className="bp-key tp-go" aria-label={t.check} onClick={() => run(E.press(s, 'go'))}><CheckIcon size={26} /></button>
                  </>
                )}
              </div>
            )}
          </div>

          {intro && (
            <InstructionIntro key={intro.id} text={intro.text} seenKey={intro.key} skipLabel={t.skip}
              onFly={() => { setTaskShown(true); setLand((n) => n + 1); }}
              onDone={() => { setIntro(null); setWorkGen((n) => n + 1); }} />
          )}
        </section>
      </main>

      {complete && (
        <div className="bp-overlay">
          <div className="bp-done" role="dialog" aria-modal="true">
            <h2>{t.roundTitle}</h2>
            <div className="bp-done-stars">
              {Array.from({ length: Math.min(earned, 8) }, (_, i) => <span key={i} style={{ animationDelay: `${i * 0.1}s` }}><StarIcon size={36} /></span>)}
            </div>
            <p>{t.roundStars(earned)}</p>
            {complete.line && <div className="unlock">{complete.line}</div>}
            <div className="row">
              <button className="mb-btn quiet" onClick={startRound}>{t.again}</button>
              <button className="mb-btn" onClick={onExit}>{t.room}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
