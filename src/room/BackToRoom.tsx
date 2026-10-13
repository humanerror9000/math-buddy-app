// src/room/BackToRoom.tsx
// Shown on the practice screens: a way back to Buddy's room, with the star count growing as she practices.

import { useEffect, useRef, useState } from 'react';
import './room.css';
import { STRINGS } from '../game/i18n';
import { useGame } from '../game/store';
import { StarIcon } from './icons';

export function BackToRoom({ onClick }: { onClick: () => void }) {
  const game = useGame();
  const t = STRINGS[game.lang];
  const [bump, setBump] = useState(0);
  const prev = useRef(game.stars);
  useEffect(() => {
    if (game.stars > prev.current) setBump((n) => n + 1);
    prev.current = game.stars;
  }, [game.stars]);

  return (
    <div className="mb" style={{ position: 'fixed', left: 16, bottom: 'calc(env(safe-area-inset-bottom, 0px) + 16px)', zIndex: 20, display: 'flex', gap: 8 }}>
      <button className="mb-chip" onClick={onClick} aria-label={t.backToRoom}>
        <img src="/mark-face.svg" alt="" width={34} height={38} style={{ margin: '-4px 0 -2px' }} />
        {t.backToRoom}
      </button>
      <span key={bump} className={`mb-chip${bump ? ' bump' : ''}`} aria-label={t.starsLabel(game.stars)}>
        <StarIcon />{game.stars}
      </span>
    </div>
  );
}
