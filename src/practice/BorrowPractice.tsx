// src/practice/BorrowPractice.tsx
// Borrowing practice, as approved in the mockup: blocks → discs → pencil, with Buddy's
// mistakes mixed into the pencil rounds. Buddy stands beside the card and reacts without words.

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import '../room/room.css';
import './practice.css';
import { useGame, updateGame, addStars } from '../game/store';
import { playSfx, playVoice } from '../audio/sound';
import { StarIcon } from '../room/icons';
import { BuddyStage } from './BuddyStage';
import { PRACTICE_STRINGS, type Who } from './i18n';
import * as E from './borrowEngine';

const LEVEL_MODE: E.Mode[] = ['blocks', 'discs', 'pencil'];

const escapeHtml = (s: string): string =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

function Heart() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20.5s-7.5-4.6-7.5-10.1A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.8c0 5.5-7.5 10.1-7.5 10.1z" fill="#F64034" />
    </svg>
  );
}
function Drop() {
  return (
    <svg width="26" height="30" viewBox="0 0 20 24" aria-hidden="true">
      <path d="M10 2C10 2 3 11 3 15.5a7 7 0 0 0 14 0C17 11 10 2 10 2z" fill="#70BCD6" />
      <ellipse cx="7.5" cy="15" rx="1.6" ry="2.4" fill="#fff" opacity=".8" />
    </svg>
  );
}
function EmoteFace({ e }: { e: E.Emote }) {
  switch (e) {
    case '?': return <span style={{ color: 'var(--cobalt)' }}>?</span>;
    case '!': return <span style={{ color: 'var(--tomato)' }}>!</span>;
    case 'heart': return <Heart />;
    case 'drop': return <Drop />;
    case 'dots': return <span style={{ color: 'var(--ink-soft)', letterSpacing: 2, fontSize: 26 }}>•••</span>;
    case 'star': return <StarIcon size={30} />;
  }
}

function retrigger(el: Element | null, cls: string) {
  if (!el) return;
  el.classList.remove(cls);
  void (el as HTMLElement).offsetWidth;
  el.classList.add(cls);
}

interface Props {
  onExit: () => void;
  /** Called once per solved problem, for the practice stats */
  onSolved?: (firstTry: boolean) => void;
}

export function BorrowPractice({ onExit, onSolved }: Props) {
  const game = useGame();
  const t = PRACTICE_STRINGS[game.lang];
  const who: Who = useMemo(() => ({ name: escapeHtml(game.name || 'Buddy'), kind: game.kind }), [game.name, game.kind]);

  // ---- round ----
  const level = Math.min(2, Math.max(0, game.borrow?.level ?? 0));
  const [round, setRound] = useState(() => E.makeRound(level));
  const [idx, setIdx] = useState(0);
  const [earned, setEarned] = useState(0);
  const [complete, setComplete] = useState<{ unlocked: E.Mode | null } | null>(null);
  const [s, setS] = useState<E.PState>(() => E.start(round[0].mode, round[0].a, round[0].b));

  // ---- Buddy ----
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stageRef = useRef<BuddyStage | null>(null);
  const emoteRef = useRef<HTMLDivElement>(null);
  const [emote, setEmote] = useState<E.Emote | null>(null);
  const emoteTimer = useRef(0);

  useEffect(() => {
    if (!canvasRef.current) return;
    let stage: BuddyStage | null = null;
    try {
      stage = new BuddyStage(canvasRef.current, game.kind, 1);
    } catch {
      stage = null; // no WebGL: the practice still works, just without Buddy
    }
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
    return () => {
      cancelAnimationFrame(raf);
      stage?.dispose();
      stageRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => stageRef.current?.setKind(game.kind), [game.kind]);
  useEffect(() => () => clearTimeout(emoteTimer.current), []);

  const showEmote = useCallback((e: E.Emote) => {
    setEmote(e);
    clearTimeout(emoteTimer.current);
    emoteTimer.current = window.setTimeout(() => setEmote(null), 1600);
  }, []);

  // ---- effects of each action ----
  const sheetRef = useRef<HTMLDivElement>(null);
  const starChipRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLElement>(null);
  const pending = useRef<{ shakes: E.Fx[]; breakRect: DOMRect | null }>({ shakes: [], breakRect: null });
  const [bump, setBump] = useState(0);

  const flyStar = useCallback(() => {
    const card = cardRef.current?.getBoundingClientRect();
    const chip = starChipRef.current?.getBoundingClientRect();
    if (!card || !chip) return;
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
    window.setTimeout(() => {
      el.remove();
      addStars(1);
      setBump((n) => n + 1);
    }, 820);
  }, []);

  const run = useCallback((step: E.Step) => {
    for (const f of step.fx) {
      switch (f.t) {
        case 'sfx': void playSfx(f.name); break;
        case 'voice': void playVoice(f.name); break;
        case 'buddy':
          stageRef.current?.react(f.mood);
          if (f.emote) showEmote(f.emote);
          break;
        case 'shake': pending.current.shakes.push(f); break;
        case 'break': {
          const el = f.id !== null ? sheetRef.current?.querySelector(`[data-id="${f.id}"]`) : null;
          pending.current.breakRect = el ? el.getBoundingClientRect() : null;
          break;
        }
        case 'solved':
          setEarned((n) => n + 1);
          onSolved?.(f.firstTry);
          flyStar();
          break;
      }
    }
    // A shake on an unchanged state still has to play
    if (step.s === s) flushShakes();
    else setS(step.s);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [s, game.kind, showEmote, flyStar, onSolved]);

  function flushShakes() {
    const root = sheetRef.current;
    if (!root) return;
    for (const f of pending.current.shakes) {
      if (f.t !== 'shake') continue;
      const sel = {
        mat: `.bp-mat[data-p="${f.p}"]`,
        slot: '.bp-slot.active',
        top: `[data-top="${f.p}"]`,
        buddyDigit: `[data-buddy="${f.p}"]`,
      }[f.target];
      retrigger(root.querySelector(sel), 'bp-shake');
    }
    pending.current.shakes = [];
  }

  // after each render: fly new pieces in from the broken one, then play shakes
  useLayoutEffect(() => {
    const r = pending.current.breakRect;
    const root = sheetRef.current;
    if (root) {
      root.querySelectorAll<HTMLElement>('.bp-it.fresh').forEach((el) => {
        const k = Number(el.dataset.k || 0);
        if (!r) {
          el.classList.remove('fresh');
          return;
        }
        const me = el.getBoundingClientRect();
        const sx = r.left + r.width / 2;
        const tall = r.height > r.width * 3; // a ten-rod: pieces come out along its length
        const sy = tall ? r.top + (k + 0.5) * (r.height / 10) : r.top + r.height / 2;
        el.style.setProperty('--fx', `${sx - (me.left + me.width / 2)}px`);
        el.style.setProperty('--fy', `${sy - (me.top + me.height / 2)}px`);
        el.style.setProperty('--dl', `${k * 0.035}s`);
      });
    }
    pending.current.breakRect = null;
    flushShakes();
  }, [s]);

  // ---- moving on ----
  const next = useCallback(() => {
    void playSfx('sheet-close');
    if (idx + 1 < round.length) {
      const q = round[idx + 1];
      setIdx(idx + 1);
      setS(E.start(q.mode, q.a, q.b));
      stageRef.current?.react('idle');
      return;
    }
    // round finished: count it, maybe unlock the next step
    let unlocked: E.Mode | null = null;
    updateGame((g) => {
      const b = g.borrow ?? { level: 0, rounds: 0 };
      let lv = b.level, rounds = b.rounds + 1;
      if (rounds >= E.ROUNDS_PER_LEVEL && lv < 2) {
        lv += 1;
        rounds = 0;
        unlocked = LEVEL_MODE[lv];
      }
      return { ...g, borrow: { level: lv, rounds } };
    });
    setComplete({ unlocked });
    void playSfx('round-complete');
    void playVoice('cheer');
    stageRef.current?.react('happy');
    showEmote('star');
  }, [idx, round, game.kind, showEmote]);

  const again = useCallback(() => {
    const lv = Math.min(2, Math.max(0, (game.borrow?.level ?? 0)));
    const r = E.makeRound(lv);
    setRound(r);
    setIdx(0);
    setEarned(0);
    setComplete(null);
    setS(E.start(r[0].mode, r[0].a, r[0].b));
  }, [game.borrow]);

  // physical keyboard: digits and Enter
  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (complete) return;
      if (/^[0-9]$/.test(ev.key)) run(E.pressKey(s, Number(ev.key)));
      else if (ev.key === 'Enter' && s.phase === 'done') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [s, run, next, complete]);

  // ---- render ----
  const n = s.n;
  const blocks = E.isBlocksLike(s.mode);
  const writes = s.mode === 'pencil' || s.mode === 'buddy';
  const col = (p: number) => n - p + 1; // grid column for place p (column 1 holds the minus sign)
  const widths = s.mode === 'blocks' ? (n === 2 ? ['1.5fr', '1fr'] : ['1.2fr', '1.5fr', '1fr']) : Array(n).fill('1fr');
  const hasPaper = s.mode === 'buddy' && (s.phase === 'find' || s.picked !== null);
  const rT = hasPaper ? 2 : 1, rB = rT + 1, rR = rT + 2, rA = rT + 3, rM = rT + 4;
  const rows = blocks ? rM : rA;
  const places = Array.from({ length: n }, (_, i) => n - 1 - i); // left to right: highest place first
  const buddyDigits = E.buddyAnswer(s);
  const showBand = s.phase === 'take' || s.phase === 'answer';

  return (
    <div className="mb bp">
      <header className="bp-hud">
        <button className="mb-chip" onClick={onExit} aria-label={t.back}>
          <img src="/mark-face.svg" alt="" width={34} height={38} style={{ margin: '-4px 0 -2px' }} />
          <span className="label">{t.back}</span>
        </button>
        <div className="bp-dots" aria-label={`${idx + 1} / ${round.length}`}>
          {round.map((_, i) => (
            <span key={i} className={`bp-dot ${i < idx || (i === idx && s.phase === 'done') ? 'done' : i === idx ? 'now' : ''}`} />
          ))}
        </div>
        <span ref={starChipRef} key={bump} className={`mb-chip${bump ? ' bump' : ''}`}>
          <StarIcon />{game.stars}
        </span>
      </header>

      <main className="bp-stage">
        <div className="bp-buddy">
          <canvas ref={canvasRef} aria-hidden="true" />
          <div ref={emoteRef} className={`bp-emote${emote ? ' on' : ''}`}>{emote && <EmoteFace e={emote} />}</div>
        </div>

        <section className="bp-card" ref={cardRef}>
          <div className="bp-task" key={JSON.stringify(s.msg) + game.lang} aria-live="polite">
            <span className="tag">{t.tag(s.mode, who)}</span>
            <span dangerouslySetInnerHTML={{ __html: t.msg(s.msg, who) }} />
          </div>

          <div className="bp-work">
            <div
              ref={sheetRef}
              className="bp-sheet"
              style={{ gridTemplateColumns: `calc(var(--digit) * .7) ${widths.join(' ')}`, gridTemplateRows: `repeat(${rows}, auto)` }}
            >
              {showBand && <div className="bp-band" style={{ gridRow: `${rT} / -1`, gridColumn: col(s.active) }} />}

              {hasPaper && (
                <div className="bp-paper" style={{ gridRow: 1, gridColumn: '1 / -1' }}>
                  <img src="/mark-face.svg" width={26} height={29} alt="" />
                  <span dangerouslySetInnerHTML={{ __html: `${t.buddyAnswer(who)}:` }} />
                  <span className="bp-marker" style={{ fontSize: 26 }}>
                    {s.a} − {s.b} = {Number(buddyDigits.slice().reverse().join(''))}
                  </span>
                </div>
              )}

              {/* top number */}
              {places.map((p) => {
                const inner = s.crossed[p]
                  ? <><span className="old">{s.orig[p]}</span><span className="new">{s.top[p]}</span></>
                  : <>{s.orig[p]}</>;
                const glow = writes && s.source === p;
                const style = { gridRow: rT, gridColumn: col(p) };
                if (writes && s.phase === 'answer') {
                  return (
                    <div key={`t${p}`} className="bp-cell top" style={style}>
                      <button
                        className={`bp-digit${E.canBreak(s, p) ? ' can' : ''}${glow ? ' glow' : ''}`}
                        data-top={p}
                        onClick={() => run(E.tapTop(s, p))}
                      >{inner}</button>
                    </div>
                  );
                }
                return <div key={`t${p}`} className="bp-cell top" style={style}><span className="bp-digit" data-top={p}>{inner}</span></div>;
              })}

              {/* bottom number */}
              <div className="bp-cell sign" style={{ gridRow: rB, gridColumn: 1 }}>−</div>
              {places.map((p) => (
                <div key={`b${p}`} className="bp-cell" style={{ gridRow: rB, gridColumn: col(p) }}><span className="bp-digit">{s.bot[p]}</span></div>
              ))}
              <div className="bp-rule" style={{ gridRow: rR, gridColumn: '1 / -1' }} />

              {/* answer row (Buddy's answer while she looks for his mistake) */}
              {places.map((p) => {
                const style = { gridRow: rA, gridColumn: col(p) };
                if (s.phase === 'find') {
                  return (
                    <div key={`a${p}`} className="bp-cell" style={style}>
                      <button className={`bp-digit bp-marker${s.picked === p ? ' picked' : ''}`} data-buddy={p}
                        style={{ minWidth: 'calc(var(--digit) * .82)' }} onClick={() => run(E.tapBuddyDigit(s, p))}>
                        {buddyDigits[p]}
                      </button>
                    </div>
                  );
                }
                const filled = s.ans[p] !== null;
                const act = p === s.active && s.phase === 'answer';
                return (
                  <div key={`a${p}`} className="bp-cell" style={style}>
                    <div className={`bp-slot ${filled ? 'filled' : act ? 'active' : 'empty'}`}>{filled ? s.ans[p] : ''}</div>
                  </div>
                );
              })}

              {/* place-value mat */}
              {blocks && places.map((p) => {
                const pile = s.mode === 'discs' ? 'discs' : p === 0 ? 'cubes' : 'rods';
                const shape = s.mode === 'discs' ? 'disc' : p === 0 ? 'cube' : 'rod';
                const label = s.mode === 'discs' ? [1, 10, 100][p] : '';
                let count = 0;
                return (
                  <div key={`m${p}`} className={`bp-mat p${p}${s.source === p ? ' source' : ''}`} data-p={p} style={{ gridRow: rM, gridColumn: col(p) }}>
                    {p === s.active && s.phase === 'take' && s.taken[p] > 0 && <span className="bp-counter">−{s.taken[p]}</span>}
                    <span className="head">{t.place(p)}</span>
                    <div className={`bp-pile ${pile}`}>
                      {s.items[p].map((it) => {
                        const numbered = s.numbered && p === s.active && !it.gone;
                        return (
                          <button
                            key={it.id}
                            className={`bp-it ${shape}${it.gone ? ' gone' : ''}${it.fresh ? ' fresh' : ''}`}
                            data-id={it.id}
                            data-k={it.k ?? ''}
                            aria-label={t.place(p)}
                            onClick={() => run(E.tapItem(s, p, it.id))}
                          >
                            {numbered ? <span className="num">{++count}</span> : label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            {s.phase === 'done' ? (
              <div className="bp-next">
                <span className="bp-result">{s.a} − {s.b} = {s.a - s.b}</span>
                <button className="mb-btn" onClick={next}>{t.next} →</button>
              </div>
            ) : s.phase === 'find' ? (
              <div className="bp-next">
                {s.picked !== null && <button className="mb-btn secondary" onClick={() => run(E.startFix(s))}>{t.fix}</button>}
              </div>
            ) : (
              <div className={`bp-pad${s.phase !== 'answer' ? ' off' : ''}`}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((d) => (
                  <button key={d} className={`bp-key${s.hintKey === d ? ' hinted' : ''}`} onClick={() => run(E.pressKey(s, d))}>{d}</button>
                ))}
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
              {Array.from({ length: Math.min(earned, 8) }, (_, i) => (
                <span key={i} style={{ animationDelay: `${i * 0.12}s` }}><StarIcon size={40} /></span>
              ))}
            </div>
            <p>{t.roundStars(earned)}</p>
            {complete.unlocked && <div className="unlock">{t.unlockedStep(complete.unlocked)}</div>}
            <div className="row">
              <button className="mb-btn quiet" onClick={again}>{t.again}</button>
              <button className="mb-btn" onClick={onExit}>{t.room}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
