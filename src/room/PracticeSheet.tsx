// src/room/PracticeSheet.tsx
// The Practice picker that slides up over the room: wide grape cards, one per module.
// Treasures use square cobalt cards (things to collect); practice cards are wide (things to do).

import { useState } from 'react';
import { STRINGS } from '../game/i18n';
import { useGame } from '../game/store';
import { playSfx } from '../audio/sound';
import { CloseIcon, LockIcon } from './icons';

export type PracticeModule = 'borrow' | 'times' | 'arrays' | 'sharing' | 'story';
type CardKey = 'borrow' | 'times' | 'arrays' | 'division' | 'words';

const SOON: CardKey[] = [];
/** The Sharing card is keyed 'division' for its art and name */
const MODULE_OF: Partial<Record<CardKey, PracticeModule>> = { borrow: 'borrow', times: 'times', arrays: 'arrays', division: 'sharing', words: 'story' };

function PlayIcon() {
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" aria-hidden="true">
      <path d="M3 2.2v13.6a1 1 0 0 0 1.5.9l10.6-6.8a1 1 0 0 0 0-1.8L4.5 1.3A1 1 0 0 0 3 2.2z" fill="currentColor" />
    </svg>
  );
}

function Art({ k }: { k: CardKey }) {
  switch (k) {
    case 'borrow':
      return (
        <div className="pk-borrow">
          <div className="pk-rod" />
          {Array.from({ length: 6 }, (_, i) => <i key={i} className="pk-cube" />)}
          <span className="pk-badge minus" />
        </div>
      );
    case 'times':
      return (
        <div className="pk-times">
          <div className="pk-dots">{Array.from({ length: 12 }, (_, i) => <i key={i} className={i % 4 === 3 ? 'split' : ''} />)}</div>
          <span className="pk-badge">×</span>
        </div>
      );
    case 'arrays':
      return <div className="pk-arr">{Array.from({ length: 15 }, (_, i) => <i key={i} />)}</div>;
    case 'division':
      return (
        <div className="pk-plates">
          {[0, 1].map((p) => <div key={p} className="pk-plate"><i /><i /><i /></div>)}
        </div>
      );
    case 'words':
      return <div className="pk-story"><i /><i /><i /></div>;
  }
}

export function PracticeSheet({ onClose, onPick }: { onClose: () => void; onPick: (m: PracticeModule) => void }) {
  const game = useGame();
  const t = STRINGS[game.lang];
  const [shaking, setShaking] = useState<{ k: CardKey; n: number } | null>(null);
  const level = Math.min(2, Math.max(0, game.borrow?.level ?? 0));
  const isNewBorrow = (game.borrow?.level ?? 0) === 0 && (game.borrow?.rounds ?? 0) === 0;
  // steps finished (0–3) for the modules that show step chips
  const stepsDone: Partial<Record<CardKey, number>> = { borrow: level, arrays: game.arrays ?? 0, division: game.sharing ?? 0, words: game.story ?? 0 };
  const isNew: Partial<Record<CardKey, boolean>> = { borrow: isNewBorrow, arrays: !game.arrays, division: !game.sharing, words: !game.story };

  const tap = (k: CardKey) => {
    if (SOON.includes(k)) {
      setShaking({ k, n: Date.now() });
      void playSfx('cant-afford');
      return;
    }
    void playSfx('sheet-close');
    onPick(MODULE_OF[k]!);
  };

  const cards: CardKey[] = ['borrow', 'times', 'arrays', 'division', 'words'];
  return (
    <section className="mb-sheet pk-sheet" role="dialog" aria-label={t.practiceTitle}>
      <div className="mb-sheet-head">
        <h2>{t.practiceTitle}</h2>
        <button className="mb-close" onClick={onClose} aria-label={t.close}><CloseIcon /></button>
      </div>
      <div className="pk-grid">
        {cards.map((k) => {
          const soon = SOON.includes(k);
          const name = t.modules[k];
          return (
            <div
              key={k + (shaking?.k === k ? shaking.n : '')}
              className={`pk-card${soon ? ' soon' : ''}${shaking?.k === k ? ' shake' : ''}`}
              onClick={() => tap(k)}
            >
              {isNew[k] && <span className="mb-tag">{t.newTag}</span>}
              <div className="pk-art">
                <Art k={k} />
                {soon && <span className="mb-lock"><LockIcon /></span>}
              </div>
              <b>{name}</b>
              {stepsDone[k] !== undefined && (
                <div className="pk-steps">
                  {t.moduleSteps[k as 'borrow' | 'arrays' | 'division' | 'words'].map((st, i) => (
                    <span key={st} className={i < stepsDone[k]! ? 'done' : i === stepsDone[k] ? 'on' : ''}>{st}</span>
                  ))}
                </div>
              )}
              <button
                className="pk-tab"
                aria-label={`${soon ? t.soon : t.play}: ${name}`}
                onClick={(e) => { e.stopPropagation(); tap(k); }}
              >
                {soon ? t.soon : <><PlayIcon />{t.play}</>}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
