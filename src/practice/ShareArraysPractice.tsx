// src/practice/ShareArraysPractice.tsx
// Arrays and Sharing, as approved in the mockup. One screen for both modules: same Buddy, HUD,
// card and keypad as the other practice screens; the picture in the card changes with each step.

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactElement } from 'react';
import '../room/room.css';
import './practice.css';
import { addStars, updateGame, useGame } from '../game/store';
import { playSfx, playVoice } from '../audio/sound';
import { CheckIcon, StarIcon } from '../room/icons';
import { BuddyStage } from './BuddyStage';
import type { Who } from './i18n';
import { SA_STRINGS } from './shareArraysI18n';
import * as E from './shareArraysEngine';

const escapeHtml = (s: string): string =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const EMOTE: Record<E.Emote, ReactElement> = {
  '?': <span style={{ color: 'var(--cobalt)' }}>?</span>,
  '!': <span style={{ color: 'var(--tomato)' }}>!</span>,
  dots: <span style={{ color: 'var(--ink-soft)', letterSpacing: 2, fontSize: 26 }}>•••</span>,
  star: <StarIcon size={30} />,
  heart: <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.5s-7.5-4.6-7.5-10.1A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.8c0 5.5-7.5 10.1-7.5 10.1z" fill="#F64034" /></svg>,
  drop: <svg width="26" height="30" viewBox="0 0 20 24" aria-hidden="true"><path d="M10 2C10 2 3 11 3 15.5a7 7 0 0 0 14 0C17 11 10 2 10 2z" fill="#70BCD6" /></svg>,
};
const RECALL_PAUSE_MS = 5000;

interface Props {
  module: E.Module;
  onExit: () => void;
  onSolved?: (firstTry: boolean) => void;
}

export function ShareArraysPractice({ module, onExit, onSolved }: Props) {
  const game = useGame();
  const t = SA_STRINGS[game.lang];
  const who: Who = useMemo(() => ({ name: escapeHtml(game.name || 'Buddy'), kind: game.kind }), [game.name, game.kind]);
  const level = Math.min(3, Math.max(0, game[module] ?? 0));
  const step = Math.min(2, level);

  const [round, setRound] = useState(() => E.makeRound(module, step));
  const [idx, setIdx] = useState(0);
  const [s, setS] = useState<E.State>(() => E.start(round[0]));
  const [firstTries, setFirstTries] = useState(0);
  const [earned, setEarned] = useState(0);
  const [complete, setComplete] = useState<{ line: string | null } | null>(null);

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
    void playVoice(`buddy${game.kind}-hello`);
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

  // ---- work area size ----
  const workRef = useRef<HTMLDivElement>(null);
  const [workSize, setWorkSize] = useState({ w: 600, h: 400 });
  useLayoutEffect(() => {
    const el = workRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setWorkSize({ w: el.clientWidth, h: el.clientHeight }));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const portrait = workSize.h > workSize.w * 0.9;
  const dotSize = (rows: number, cols: number, frac = 0.55) => {
    const w = portrait ? workSize.w - 60 : workSize.w * frac;
    const h = portrait ? workSize.h * 0.55 : workSize.h - 40;
    return Math.max(10, Math.min(34, w / (cols * 1.38), h / (rows * 1.38)));
  };

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

  // ---- running actions ----
  const run = useCallback((step: E.Step) => {
    for (const f of step.fx) {
      switch (f.t) {
        case 'sfx': void playSfx(f.name, f.semitones !== undefined ? { semitones: f.semitones, variance: 0 } : undefined); break;
        case 'voice': void playVoice(`buddy${game.kind}-${f.name}`); break;
        case 'buddy': stageRef.current?.react(f.mood); if (f.emote) showEmote(f.emote); break;
        case 'shake': {
          const sel = { slot: '.tp-slot.active', board: '.sa-board', box: '.sa-box.o' }[f.target];
          const el = cardRef.current?.querySelector(sel);
          if (el) { el.classList.remove('bp-shake'); void (el as HTMLElement).offsetWidth; el.classList.add('bp-shake'); }
          break;
        }
        case 'solved':
          setEarned((n) => n + 1);
          if (f.firstTry) setFirstTries((n) => n + 1);
          onSolved?.(f.firstTry);
          flyStar();
          break;
      }
    }
    setS(step.s);
  }, [game.kind, showEmote, flyStar, onSolved]);

  // Memory: quiet pause, then offer "Show me"
  useEffect(() => {
    if (s.kind !== 'memory' || s.phase !== 'answer' || s.peek || s.peekReady) return;
    const id = window.setTimeout(() => setS((cur) => E.offerPeek(cur)), RECALL_PAUSE_MS);
    return () => clearTimeout(id);
  }, [s]);

  // Build: drag across the pegs
  const dragging = useRef(false);
  const pegAt = (x: number, y: number) => {
    const el = document.elementFromPoint(x, y) as HTMLElement | null;
    return el?.dataset.r ? { r: Number(el.dataset.r), c: Number(el.dataset.c) } : null;
  };
  const sRef = useRef(s);
  sRef.current = s;
  useEffect(() => {
    const up = () => {
      if (!dragging.current) return;
      dragging.current = false;
      const cur = sRef.current;
      if (cur.sel && !cur.ok) run(E.buildPick(cur, cur.sel.r, cur.sel.c));
    };
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);
    return () => { window.removeEventListener('pointerup', up); window.removeEventListener('pointercancel', up); };
  }, [run]);

  // ---- moving on ----
  const startRound = useCallback(() => {
    const lv = Math.min(2, Math.max(0, game[module] ?? 0));
    const r = E.makeRound(module, lv);
    setRound(r);
    setIdx(0);
    setFirstTries(0);
    setEarned(0);
    setComplete(null);
    setS(E.start(r[0]));
  }, [game, module]);

  const next = useCallback(() => {
    void playSfx('sheet-close');
    if (idx + 1 < round.length) {
      setIdx(idx + 1);
      setS(E.start(round[idx + 1]));
      stageRef.current?.react('idle');
      return;
    }
    let line: string | null = null;
    if (level < 3) {
      if (firstTries >= E.PASS_FIRST_TRY) {
        updateGame((g) => ({ ...g, [module]: Math.max(g[module] ?? 0, level + 1) }));
        line = level + 1 >= 3 ? t.allDone(module) : t.stepUnlocked(module, level + 1);
      } else line = t.keepGoing(E.PASS_FIRST_TRY);
    }
    setComplete({ line });
    void playSfx('round-complete');
    void playVoice(`buddy${game.kind}-cheer`);
    stageRef.current?.react('happy');
    showEmote('star');
  }, [idx, round, level, firstTries, module, t, game.kind, showEmote]);

  // keyboard
  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (complete) return;
      if (/^[0-9]$/.test(ev.key)) run(E.press(s, ev.key));
      else if (ev.key === 'Backspace') run(E.press(s, 'del'));
      else if (ev.key === 'Enter') { if (s.phase === 'done') next(); else run(E.press(s, 'go')); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [s, run, next, complete]);

  // ---- pictures ----
  const f = s.fact;
  const done = s.phase === 'done';
  function slot(i: number) {
    if (s.vals[i] !== undefined) return <span className="tp-slot ok">{s.vals[i]}</span>;
    const on = !done && s.gate && i === s.cur;
    return <span className={`tp-slot${on ? ' active' : ''}`}>{on ? s.typed : ''}</span>;
  }
  function eq(i: number, parts: (string | number | ReactElement)[], cls: string[] = []) {
    const state = done ? '' : i === s.cur && s.gate ? ' on' : i > s.cur ? ' later' : '';
    return (
      <div key={i} className={`tp-eq${state}`}>
        {parts.map((p, j) => <span key={j} className={cls[j] ?? ''}>{p}</span>)}
        <span>=</span>{slot(i)}
      </div>
    );
  }
  function dotRows(rows: number, cols: number, opts: { split?: boolean; lit?: boolean } = {}) {
    const d = dotSize(rows, cols);
    const out: ReactElement[] = [];
    for (let r = 0; r < rows; r++) {
      const dots: ReactElement[] = [];
      for (let c = 0; c < cols; c++) {
        if (opts.split && c === 10) dots.push(<b key="vs" className="sa-vs" />);
        const cls = opts.split ? (c < 10 ? 't' : 'o') + (!done && ((s.cur === 0 && c >= 10) || (s.cur === 1 && c < 10)) ? ' dimd' : '') : '';
        dots.push(<i key={c} className={cls} />);
      }
      out.push(<div key={r} className={`tp-row${opts.lit ? ' lit' : ''}`}>{dots}</div>);
    }
    return { out, d };
  }

  let left: ReactElement | null = null, right: ReactElement | null = null;
  switch (s.kind) {
    case 'build': {
      if (!s.ok) {
        const d = dotSize(E.BUILD_ROWS, E.BUILD_COLS, 0.5);
        const pegs: ReactElement[] = [];
        for (let r = 1; r <= E.BUILD_ROWS; r++) for (let c = 1; c <= E.BUILD_COLS; c++) {
          const on = s.sel && r <= s.sel.r && c <= s.sel.c;
          const corner = s.sel && r === s.sel.r && c === s.sel.c;
          pegs.push(<span key={`${r}-${c}`} className={`sa-peg${on ? ' on' : ''}${corner ? ' corner' : ''}`} data-r={r} data-c={c} />);
        }
        left = <div className="tp-eq"><span>{f.r}</span><span>×</span><span>{f.c}</span></div>;
        right = (
          <div className="sa-board sa-pegs" style={{ ['--d' as string]: `${d}px`, ['--gap' as string]: `${Math.round(d * 0.32)}px`, gridTemplateColumns: `repeat(${E.BUILD_COLS}, var(--d))` }}
            onPointerDown={(e) => { dragging.current = true; const p = pegAt(e.clientX, e.clientY); if (p) setS((cur) => E.buildPreview(cur, p.r, p.c)); }}
            onPointerMove={(e) => { if (!dragging.current) return; const p = pegAt(e.clientX, e.clientY); if (p) setS((cur) => E.buildPreview(cur, p.r, p.c)); }}
            role="grid" aria-label={`${f.r} × ${f.c}`}>
            {pegs}
            {s.sel && <span className="sa-size">{s.sel.r} × {s.sel.c}</span>}
          </div>
        );
      } else {
        left = eq(0, [f.r!, '×', f.c!]);
        const g = dotRows(f.r!, f.c!, { lit: true });
        right = <div className={`tp-arr sa-turnable${s.turned ? ' turned' : ''}`} style={{ ['--d' as string]: `${g.d}px`, ['--gap' as string]: `${Math.round(g.d * 0.32)}px`, marginRight: 0 }}>{g.out}</div>;
      }
      break;
    }
    case 'tens': {
      const ones = f.n! - 10;
      left = (
        <div className="tp-eqs many">
          <div className="sa-head">{f.n} × {f.r}</div>
          {eq(0, [10, '×', f.r!], ['t'])}
          {eq(1, [ones, '×', f.r!], ['o'])}
          {eq(2, [10 * f.r!, '+', ones * f.r!])}
        </div>
      );
      const g = dotRows(f.r!, f.n!, { split: true });
      right = <div className="tp-arr" style={{ ['--d' as string]: `${g.d}px`, ['--gap' as string]: `${Math.round(g.d * 0.32)}px`, marginRight: 0 }}>{g.out}</div>;
      break;
    }
    case 'boxes':
    case 'abuddy': {
      const find = s.phase === 'find';
      const tw = Math.min(72, Math.max(55, (s.tensPart / f.a!) * 100));
      const W = Math.min(workSize.w * (portrait ? 0.9 : 0.5), 460);
      const bt = find ? <span className="bp-marker">{E.buddyTensBox(s)}</span> : slot(0);
      const bo = find ? <span className="bp-marker">{s.onesPart * f.b!}</span> : slot(1);
      right = (
        <div className="sa-boxes-wrap">
          <div className="top" style={{ width: W }}><span className="t" style={{ width: `${tw}%` }}>{s.tensPart}</span><span className="o" style={{ width: `${100 - tw}%` }}>{s.onesPart}</span></div>
          <div className="side">{f.b}</div>
          <div className="sa-boxes" style={{ width: W }}>
            <button className={`sa-box t${!find && !done && s.cur === 0 ? ' on' : ''}${s.picked === 't' ? ' picked' : ''}`} style={{ width: `${tw}%` }} disabled={!find} onClick={() => run(E.pickBox(s, 't'))}>{bt}</button>
            <button className={`sa-box o${!find && !done && s.cur === 1 ? ' on' : ''}`} style={{ width: `${100 - tw}%` }} disabled={!find} onClick={() => run(E.pickBox(s, 'o'))}>{bo}</button>
          </div>
        </div>
      );
      left = find ? (
        <div className="tp-eqs many">
          <div className="sa-head">{f.a} × {f.b}</div>
          <div className="sa-buddyline"><span>{t.buddyAnswer({ name: game.name || 'Buddy', kind: game.kind })}:</span>
            <span className="bp-marker">{E.buddyTensBox(s)} + {s.onesPart * f.b!} = {E.buddyTensBox(s) + s.onesPart * f.b!}</span></div>
        </div>
      ) : (
        <div className="tp-eqs many">
          <div className="sa-head">{f.a} × {f.b}</div>
          <div className={`tp-eq${!done && s.cur === 0 ? ' on' : ''}`}><span className="t">{s.tensPart}</span><span>×</span><span>{f.b}</span><span>=</span><span>{s.vals[0] ?? '?'}</span></div>
          <div className={`tp-eq${!done && s.cur === 1 ? ' on' : !done && s.cur < 1 ? ' later' : ''}`}><span className="o">{s.onesPart}</span><span>×</span><span>{f.b}</span><span>=</span><span>{s.vals[1] ?? '?'}</span></div>
          {eq(2, [s.answers[0], '+', s.answers[1]])}
        </div>
      );
      break;
    }
    case 'plates': {
      const leftover = s.gate && s.left < f.k!;
      right = (
        <div className="sa-share">
          <button className={`sa-jar${s.gate ? ' empty' : ''}`} onClick={() => run(E.deal(s))} disabled={s.gate} aria-label={t.deal}>
            {Array.from({ length: s.left }, (_, i) => <span key={i} className={`sa-cookie${leftover ? ' left' : ''}`} />)}
            {!s.gate && <span className="hint">{t.deal}</span>}
          </button>
          <div className="sa-plates">
            {s.plates.map((n, p) => <div key={p} className="sa-plate">{Array.from({ length: n }, (_, i) => <span key={i} className="sa-cookie fly" />)}</div>)}
          </div>
        </div>
      );
      left = s.answers.length > 1 ? (
        <div className="tp-eqs many">
          {eq(0, [f.n!, '÷', f.k!])}
          <div className={`tp-eq${!done && s.cur === 1 ? ' on' : !done ? ' later' : ''}`}><span>{t.left}</span>{slot(1)}</div>
        </div>
      ) : <div className="tp-eqs">{eq(0, [f.n!, '÷', f.k!])}</div>;
      break;
    }
    default: {
      // rows / memory / sbuddy
      const showRows = s.kind === 'rows' || s.peek;
      left = s.phase === 'judge'
        ? <div className="tp-eq"><span>{f.n}</span><span>÷</span><span>{f.k}</span><span>=</span><span className="tp-slot buddy">{f.claim}</span></div>
        : <div className="tp-eqs">{eq(0, [f.n!, '÷', f.k!])}{done && <div className="sa-because">{t.because(f.k!, f.n! / f.k!, f.n!)}</div>}</div>;
      if (showRows) {
        const d = dotSize(f.n! / f.k! + 2, f.k! + 2);
        const rows: ReactElement[] = [];
        for (let r = 0; r < s.rowsN; r++) {
          const last = r === s.rowsN - 1;
          rows.push(
            <div key={r} className={`tp-row lit${(r + 1) * f.k! > f.n! ? ' minus' : ''}`}
              onClick={(e) => { if (last && s.rowsN * f.k! > f.n!) { e.stopPropagation(); run(E.tapRows(s, true)); } }}>
              {Array.from({ length: f.k! }, (_, i) => <i key={i} />)}<span className="lab">{(r + 1) * f.k!}</span>
            </div>,
          );
        }
        right = (
          <div className="sa-board sa-rows" style={{ ['--d' as string]: `${d}px`, ['--gap' as string]: `${Math.round(d * 0.32)}px` }} onClick={() => run(E.tapRows(s, false))}>
            <span className="goal">{f.n}</span>
            {rows}
            {!done && <div className="add">{Array.from({ length: f.k! }, (_, i) => <i key={i} />)}</div>}
          </div>
        );
      } else if (s.peekReady && !done) {
        right = (
          <button className="tp-peek" onClick={() => run(E.showRows(s))}>
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6 5 2 12 2 12s4 7 10 7 10-7 10-7-4-7-10-7z" fill="none" stroke="currentColor" strokeWidth="2.4" /><circle cx="12" cy="12" r="3.2" fill="currentColor" /></svg>
            {t.peek}
          </button>
        );
      }
    }
  }

  const result = (() => {
    switch (s.kind) {
      case 'build': return `${f.r} × ${f.c} = ${f.c} × ${f.r} = ${f.r! * f.c!}`;
      case 'tens': return `${f.n} × ${f.r} = ${f.n! * f.r!}`;
      case 'boxes': case 'abuddy': return `${f.a} × ${f.b} = ${f.a! * f.b!}`;
      case 'plates': return s.answers.length > 1 ? `${f.n} ÷ ${f.k} = ${s.answers[0]}, ${t.left} ${s.answers[1]}` : `${f.n} ÷ ${f.k} = ${s.answers[0]}`;
      default: return `${f.n} ÷ ${f.k} = ${f.n! / f.k!}`;
    }
  })();

  return (
    <div className="mb bp">
      <header className="bp-hud">
        <button className="mb-chip" onClick={onExit} aria-label={t.back}>
          <img src="/mark-face.svg" alt="" width={34} height={38} style={{ margin: '-4px 0 -2px' }} />
          <span className="label">{t.back}</span>
        </button>
        <div className="bp-dots" aria-label={`${idx + 1} / ${round.length}`}>
          {round.map((_, i) => <span key={i} className={`bp-dot ${i < idx || (i === idx && done) ? 'done' : i === idx ? 'now' : ''}`} />)}
        </div>
        <span ref={starChipRef} key={bump} className={`mb-chip${bump ? ' bump' : ''}`}><StarIcon />{game.stars}</span>
      </header>

      <main className="bp-stage">
        <div className="bp-buddy">
          <canvas ref={canvasRef} aria-hidden="true" />
          <div ref={emoteRef} className={`bp-emote${emote ? ' on' : ''}`}>{emote && EMOTE[emote]}</div>
        </div>

        <section className="bp-card" ref={cardRef}>
          <div className="bp-task" key={JSON.stringify(s.msg) + game.lang} aria-live="polite">
            <span className="tag">{t.module(module)} · {t.tag(s.kind, who)}</span>
            <span dangerouslySetInnerHTML={{ __html: t.msg(s.msg, who) }} />
          </div>

          <div className="tp-work" ref={workRef}>{left}{right}</div>

          <div>
            {done ? (
              <div className="bp-next">
                <span className="bp-result">{result}</span>
                {s.kind === 'build' && <button className="mb-btn quiet" onClick={() => run(E.turn(s))}>↻ {t.turn}</button>}
                <button className="mb-btn" onClick={next}>{t.next} →</button>
              </div>
            ) : s.phase === 'find' ? (
              <div className="bp-next">{s.picked && <button className="mb-btn secondary" onClick={() => run(E.startFix(s))}>{t.fix}</button>}</div>
            ) : s.phase === 'judge' ? (
              <div className="bp-next">
                <button className="mb-btn tp-yes" onClick={() => run(E.judge(s, true))}><CheckIcon />{t.yes}</button>
                <button className="mb-btn tp-no" onClick={() => run(E.judge(s, false))}>✕ {t.no}</button>
              </div>
            ) : (
              <div className={`tp-pad${s.gate ? '' : ' sa-off'}`}>
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((d) => <button key={d} className="bp-key" onClick={() => run(E.press(s, d))}>{d}</button>)}
                <button className="bp-key tp-del" aria-label={t.del} onClick={() => run(E.press(s, 'del'))}>
                  <svg width="28" height="22" viewBox="0 0 28 22" aria-hidden="true"><path d="M9 2h15a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9l-7-9z" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" /><path d="M13 7l7 8M20 7l-7 8" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" /></svg>
                </button>
                <button className="bp-key tp-go" aria-label={t.check} onClick={() => run(E.press(s, 'go'))}><CheckIcon size={26} /></button>
              </div>
            )}
          </div>
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
