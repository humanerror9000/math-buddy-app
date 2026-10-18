// src/practice/InstructionIntro.tsx
// The instruction intro, as approved in the Story math mockup: the instruction types in big in the middle of
// the card, each letter popping up in grape, waits long enough to be read, then flies up into the task bar.
// Any module can use it: render it inside a position:relative card and hide the work area until onDone.
//   - typing: 45 ms a letter, 18 ms once the same instruction has been seen 3 times
//   - reading pause: max(2 s, 250 ms a word), never shortened
//   - tap anywhere to skip (short 250 ms pause instead)
//   - one 'type-tick' sound plays as the instruction starts typing
//   - words never break in the middle

import { useEffect, useMemo, useRef, useState } from 'react';
import { playSfx } from '../audio/sound';

const seen = new Map<string, number>();
const FLY_MS = 420;

interface Props {
  text: string;
  /** Instructions with the same key count as "seen before" (typing gets faster after 3) */
  seenKey: string;
  skipLabel: string;
  /** The text starts flying: show the task bar now */
  onFly: () => void;
  /** The intro is gone: show the work */
  onDone: () => void;
}

export function InstructionIntro({ text, seenKey, skipLabel, onFly, onDone }: Props) {
  const words = useMemo(() => text.split(/\s+/).filter(Boolean).map((w) => [...w]), [text]);
  const total = useMemo(() => words.reduce((n, w) => n + w.length, 0), [words]);
  const [speed] = useState(() => {
    const n = (seen.get(seenKey) ?? 0) + 1;
    seen.set(seenKey, n);
    return n > 3 ? 18 : 45;
  });
  const hold = Math.max(2000, words.length * 250);
  const [shown, setShown] = useState(0);
  const [phase, setPhase] = useState<'type' | 'hold' | 'fly'>('type');
  const [skipAt, setSkipAt] = useState<number | null>(null);
  const cb = useRef({ onFly, onDone });
  cb.current = { onFly, onDone };

  // letters that end a word get a slightly longer pause after them
  const wordEnds = useMemo(() => {
    const set = new Set<number>();
    let i = 0;
    for (const w of words) { i += w.length; set.add(i - 1); }
    return set;
  }, [words]);

  // one sound for the whole instruction as it starts typing (a sound per letter turned into a machine gun)
  useEffect(() => { void playSfx('type-tick'); }, []);

  useEffect(() => {
    if (phase !== 'type') return;
    if (shown >= total) { setPhase('hold'); return; }
    const id = window.setTimeout(() => {
      setShown((n) => n + 1);
    }, shown > 0 && wordEnds.has(shown - 1) ? speed * 1.5 : speed);
    return () => clearTimeout(id);
  }, [phase, shown, total, speed, wordEnds]);

  useEffect(() => {
    if (phase !== 'hold') return;
    const id = window.setTimeout(() => setPhase('fly'), skipAt !== null ? 250 : hold);
    return () => clearTimeout(id);
  }, [phase, skipAt, hold]);

  useEffect(() => {
    if (phase !== 'fly') return;
    cb.current.onFly();
    const id = window.setTimeout(() => cb.current.onDone(), FLY_MS);
    return () => clearTimeout(id);
  }, [phase]);

  const skip = () => {
    if (phase === 'fly') return;
    setSkipAt((cur) => cur ?? shown);
    setShown(total);
    setPhase('hold');
  };

  let k = 0;
  return (
    <div className={`st-intro${phase === 'fly' ? ' fly' : ''}`} onClick={skip} role="status" aria-label={text}>
      <div className="txt" aria-hidden="true">
        {words.map((w, wi) => (
          <span key={wi}>
            <span className="w">
              {w.map((ch) => {
                const i = k++;
                const cls = skipAt !== null && i >= skipAt ? 'ch still' : i < shown ? 'ch on' : 'ch';
                return <span key={i} className={cls}>{ch}</span>;
              })}
            </span>
            {wi < words.length - 1 ? ' ' : ''}
          </span>
        ))}
      </div>
      {phase !== 'fly' && <span className="skip">{skipLabel}</span>}
    </div>
  );
}
