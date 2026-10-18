// src/practice/TimesPractice.tsx
// Times tables, as approved in the mockup: pick a table, then Dots → Split → Memory,
// with Buddy's mistakes in Memory rounds and a Mix of learned tables.
// Shares Buddy, the HUD and the card layout with the borrowing practice (practice.css).

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactElement } from 'react';
import '../room/room.css';
import './practice.css';
import { addStars, updateGame, useGame } from '../game/store';
import { playSfx, playVoice } from '../audio/sound';
import { CheckIcon, LockIcon, StarIcon } from '../room/icons';
import { BuddyStage } from './BuddyStage';
import type { Who } from './i18n';
import { TABLES_STRINGS } from './tablesI18n';
import * as E from './tablesEngine';

const escapeHtml = (s: string): string =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const EMOTE: Record<E.Emote, ReactElement> = {
  '?': <span style={{ color: 'var(--cobalt)' }}>?</span>,
  '!': <span style={{ color: 'var(--tomato)' }}>!</span>,
  dots: <span style={{ color: 'var(--ink-soft)', letterSpacing: 2, fontSize: 26 }}>•••</span>,
  star: <StarIcon size={30} />,
  heart: (
    <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20.5s-7.5-4.6-7.5-10.1A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.8c0 5.5-7.5 10.1-7.5 10.1z" fill="#F64034" />
    </svg>
  ),
  drop: (
    <svg width="26" height="30" viewBox="0 0 20 24" aria-hidden="true">
      <path d="M10 2C10 2 3 11 3 15.5a7 7 0 0 0 14 0C17 11 10 2 10 2z" fill="#70BCD6" />
    </svg>
  ),
};

/** How long Memory waits quietly before offering "Show me" */
const RECALL_PAUSE_MS = 5000;

interface Props {
  onExit: () => void;
  onSolved?: (firstTry: boolean) => void;
}

type Pick = number | 'mix';

export function TimesPractice({ onExit, onSolved }: Props) {
  const game = useGame();
  const t = TABLES_STRINGS[game.lang];
  const who: Who = useMemo(() => ({ name: escapeHtml(game.name || 'Buddy'), kind: game.kind }), [game.name, game.kind]);
  const progress = game.tables ?? {};
  const learned = E.TABLES.filter((n) => (progress[n] ?? 0) >= 3);

  const [pick, setPick] = useState<Pick | null>(null);
  const [round, setRound] = useState<E.Fact[]>([]);
  const [idx, setIdx] = useState(0);
  const [s, setS] = useState<E.TState | null>(null);
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

  // ---- size of the work area, for the dots ----
  const workRef = useRef<HTMLDivElement>(null);
  const [workSize, setWorkSize] = useState({ w: 600, h: 400 });
  useLayoutEffect(() => {
    const el = workRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setWorkSize({ w: el.clientWidth, h: el.clientHeight }));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

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
  const run = useCallback((step: E.TStep) => {
    for (const f of step.fx) {
      switch (f.t) {
        case 'sfx': void playSfx(f.name, f.semitones !== undefined ? { semitones: f.semitones, variance: 0 } : undefined); break;
        case 'voice': void playVoice(f.name); break;
        case 'buddy': stageRef.current?.react(f.mood); if (f.emote) showEmote(f.emote); break;
        case 'shake': {
          const el = cardRef.current?.querySelector('.tp-slot.active, .tp-verdict') ?? null;
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

  // Memory: a quiet pause before offering the dots
  useEffect(() => {
    if (!s || s.mode !== 'recall' || s.phase !== 'answer' || s.peek || s.peekReady) return;
    const id = window.setTimeout(() => setS((cur) => (cur ? E.offerPeek(cur).s : cur)), RECALL_PAUSE_MS);
    return () => clearTimeout(id);
  }, [s]);

  // ---- choosing and moving on ----
  const startPick = useCallback((p: Pick) => {
    const r = p === 'mix' ? E.makeMixRound(learned) : E.makeRound(p, Math.min(2, progress[p] ?? 0));
    setPick(p);
    setRound(r);
    setIdx(0);
    setFirstTries(0);
    setEarned(0);
    setComplete(null);
    setS(E.start(r[0].mode, r[0].t, r[0].m, r[0].claim));
    stageRef.current?.react('idle');
    void playSfx('sheet-close');
  }, [learned, progress]);

  const next = useCallback(() => {
    if (!s) return;
    if (idx + 1 < round.length) {
      const f = round[idx + 1];
      setIdx(idx + 1);
      setS(E.start(f.mode, f.t, f.m, f.claim));
      stageRef.current?.react('idle');
      return;
    }
    // round finished: maybe unlock the next step for this table
    let line: string | null = null;
    if (typeof pick === 'number') {
      const step = Math.min(2, progress[pick] ?? 0);
      const done = progress[pick] ?? 0;
      if (done < 3) {
        if (firstTries >= E.PASS_FIRST_TRY) {
          updateGame((g) => ({ ...g, tables: { ...(g.tables ?? {}), [pick]: Math.max(done, step + 1) } }));
          line = step + 1 >= 3 ? t.learned(pick) : t.stepUnlocked(pick, step + 1);
        } else {
          line = t.keepGoing(E.PASS_FIRST_TRY);
        }
      }
    }
    setComplete({ line });
    void playSfx('round-complete');
    void playVoice('cheer');
    stageRef.current?.react('happy');
    showEmote('star');
  }, [s, idx, round, pick, progress, firstTries, t, game.kind, showEmote]);

  // keyboard: digits, Backspace, Enter
  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (!s || complete || pick === null) return;
      if (/^[0-9]$/.test(ev.key)) run(E.press(s, ev.key));
      else if (ev.key === 'Backspace') run(E.press(s, 'del'));
      else if (ev.key === 'Enter') { if (s.phase === 'done') next(); else run(E.press(s, 'go')); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [s, run, next, complete, pick]);

  // ---- render pieces ----
  const portrait = workSize.h > workSize.w * 0.9;
  function dots() {
    if (!s) return null;
    const rows = E.rowsShown(s);
    const availW = portrait ? workSize.w - 90 : workSize.w * 0.55;
    const availH = portrait ? workSize.h * 0.58 : workSize.h - 30;
    const d = Math.max(10, Math.min(34, availW / (s.t * 1.38), availH / (rows * 1.38)));
    const out: ReactElement[] = [];
    for (let r = 0; r < rows; r++) {
      let cls = 'tp-row';
      let lab: ReactElement | null = null;
      if (s.mode === 'split' && s.plan) {
        if (s.plan.kind === 'minus') cls += r === 9 && s.part >= 1 ? ' minus' : ' pa';
        else {
          cls += r < s.plan.a ? ' pa' : ' pb';
          if (s.phase !== 'done' && ((s.part === 0 && r >= s.plan.a) || (s.part === 1 && r < s.plan.a))) cls += ' dim';
        }
      } else if (r < s.lit) {
        cls += ' lit';
        lab = <span className="lab">{(r + 1) * s.t}</span>;
      }
      out.push(<div key={r} className={cls}>{Array.from({ length: s.t }, (_, i) => <i key={i} />)}{lab}</div>);
      if (s.mode === 'split' && s.plan?.kind === 'plus' && r === s.plan.a - 1) out.push(<div key="split" className="tp-split" />);
    }
    return (
      <div className="tp-arr" style={{ ['--d' as string]: `${d}px`, ['--gap' as string]: `${Math.round(d * 0.32)}px` }}
        onClick={() => run(E.tapArray(s))} role="img" aria-label={`${rows} × ${s.t}`}>
        {out}
      </div>
    );
  }
  function slot(active: boolean, value?: number) {
    if (value !== undefined) return <span className="tp-slot ok">{value}</span>;
    return <span className={`tp-slot${active ? ' active' : ''}`}>{active && s ? s.typed : ''}</span>;
  }

  let left: ReactElement | null = null, right: ReactElement | null = null;
  if (s) {
    const done = s.phase === 'done';
    if (s.mode === 'split') {
      left = (
        <div className="tp-eqs many">
          {s.parts.map((p, i) => {
            const state = !done && i === s.part ? ' on' : !done && i > s.part ? ' later' : '';
            return (
              <div key={i} className={`tp-eq${state}`}>
                <span className={i < 2 && s.plan?.kind === 'plus' ? p.cls : ''}>{p.x}</span><span>{p.op}</span>
                <span className={p.cls}>{p.y}</span><span>=</span>
                {slot(!done && i === s.part, s.vals[i])}
              </div>
            );
          })}
        </div>
      );
      right = dots();
    } else if (s.mode === 'buddy' && s.phase === 'judge') {
      left = (
        <div className="tp-eq">
          <span>{s.t}</span><span>×</span><span>{s.m}</span><span>=</span>
          <span className="tp-slot buddy">{s.claim}</span>
        </div>
      );
      right = s.peek ? dots() : null;
    } else {
      left = <div className="tp-eq"><span>{s.t}</span><span>×</span><span>{s.m}</span><span>=</span>{slot(!done, done ? s.ans : undefined)}</div>;
      if (s.mode === 'array' || s.peek) right = dots();
      else if (s.peekReady && !done) {
        right = (
          <button className="tp-peek" onClick={() => run(E.showDots(s))}>
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5C6 5 2 12 2 12s4 7 10 7 10-7 10-7-4-7-10-7z" fill="none" stroke="currentColor" strokeWidth="2.4" /><circle cx="12" cy="12" r="3.2" fill="currentColor" /></svg>
            {t.peek}
          </button>
        );
      }
    }
  }

  return (
    <div className="mb bp">
      <header className="bp-hud">
        <button className="mb-chip" onClick={onExit} aria-label={t.back}>
          <img src="/mark-face.svg" alt="" width={34} height={38} style={{ margin: '-4px 0 -2px' }} />
          <span className="label">{t.back}</span>
        </button>
        <div className="bp-dots" aria-label={round.length ? `${idx + 1} / ${round.length}` : undefined}>
          {round.map((_, i) => (
            <span key={i} className={`bp-dot ${i < idx || (i === idx && s?.phase === 'done') ? 'done' : i === idx ? 'now' : ''}`} />
          ))}
        </div>
        <span ref={starChipRef} key={bump} className={`mb-chip${bump ? ' bump' : ''}`}><StarIcon />{game.stars}</span>
      </header>

      <main className="bp-stage">
        <div className="bp-buddy">
          <canvas ref={canvasRef} aria-hidden="true" />
          <div ref={emoteRef} className={`bp-emote${emote ? ' on' : ''}`}>{emote && EMOTE[emote]}</div>
        </div>

        <section className="bp-card" ref={cardRef}>
          <div className="bp-task" key={s ? JSON.stringify(s.msg) + game.lang : 'none'} aria-live="polite">
            {s && pick !== null && (
              <>
                <span className="tag">{t.tableTag(pick)} · {t.tag(s.mode, who)}</span>
                <span dangerouslySetInnerHTML={{ __html: t.msg(s.msg, who) }} />
              </>
            )}
          </div>

          <div className="tp-work" ref={workRef}>
            {left}
            {right}
          </div>

          <div>
            {s?.phase === 'done' ? (
              <div className="bp-next">
                <span className="bp-result">{s.t} × {s.m} = {s.ans}</span>
                <button className="mb-btn" onClick={next}>{t.next} →</button>
              </div>
            ) : s?.mode === 'buddy' && s.phase === 'judge' ? (
              <div className="bp-next tp-verdict">
                <button className="mb-btn tp-yes" onClick={() => run(E.judge(s, true))}><CheckIcon />{t.yes}</button>
                <button className="mb-btn tp-no" onClick={() => run(E.judge(s, false))}>✕ {t.no}</button>
              </div>
            ) : (
              <div className="tp-pad">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((d) => (
                  <button key={d} className="bp-key" onClick={() => s && run(E.press(s, d))}>{d}</button>
                ))}
                <button className="bp-key tp-del" aria-label={t.del} onClick={() => s && run(E.press(s, 'del'))}>
                  <svg width="28" height="22" viewBox="0 0 28 22" aria-hidden="true"><path d="M9 2h15a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9l-7-9z" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" /><path d="M13 7l7 8M20 7l-7 8" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" /></svg>
                </button>
                <button className="bp-key tp-go" aria-label={t.check} onClick={() => s && run(E.press(s, 'go'))}><CheckIcon size={26} /></button>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* choose a table */}
      {pick === null && (
        <div className="bp-overlay">
          <div className="tp-panel" role="dialog" aria-modal="true" aria-label={t.pickTitle}>
            <h2>{t.pickTitle}</h2>
            <p className="sub">{t.pickSub}</p>
            <div className="tp-tables">
              {E.TABLES.map((n) => {
                const d = Math.min(3, progress[n] ?? 0);
                return (
                  <button key={n} className={`tp-tile${d >= 3 ? ' learned' : ''}`} onClick={() => startPick(n)} aria-label={`× ${n}`}>
                    {d >= 3 && <span className="star"><StarIcon size={28} /></span>}
                    <span className="n">{n}</span>
                    <span className="pips">{[0, 1, 2].map((i) => <i key={i} className={i < d ? 'done' : ''} />)}</span>
                  </button>
                );
              })}
              <button className={`tp-tile mix${learned.length ? '' : ' locked'}`} disabled={!learned.length}
                onClick={() => startPick('mix')} title={learned.length ? undefined : t.mixLocked} aria-label={learned.length ? t.mix : t.mixLocked}>
                <span className="n">{t.mix}</span>
                {learned.length ? <span className="pips"><i className="done" /><i className="done" /><i className="done" /></span> : <span className="lock"><LockIcon /></span>}
              </button>
            </div>
            {!learned.length && <p className="hint">{t.mixLocked}</p>}
          </div>
        </div>
      )}

      {complete && (
        <div className="bp-overlay">
          <div className="bp-done" role="dialog" aria-modal="true">
            <h2>{t.roundTitle}</h2>
            <div className="bp-done-stars">
              {Array.from({ length: Math.min(earned, 8) }, (_, i) => (
                <span key={i} style={{ animationDelay: `${i * 0.1}s` }}><StarIcon size={36} /></span>
              ))}
            </div>
            <p>{t.roundStars(earned)}</p>
            {complete.line && <div className="unlock">{complete.line}</div>}
            <div className="row">
              <button className="mb-btn quiet" onClick={() => { setComplete(null); setPick(null); setRound([]); setS(null); }}>{t.pickTable}</button>
              <button className="mb-btn quiet" onClick={() => pick !== null && startPick(pick)}>{t.again}</button>
              <button className="mb-btn" onClick={onExit}>{t.room}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
