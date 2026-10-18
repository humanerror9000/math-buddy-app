// src/room/RoomHome.tsx
// The home screen: Buddy's 3D room, the HUD, Treasures, and first-time setup.

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import './room.css';
import type { ItemType } from '../game/catalog';
import { CATALOG, itemDef } from '../game/catalog';
import { STRINGS } from '../game/i18n';
import type { BuddyKind, PlacedItem } from '../game/state';
import { canPlace, findSpot, footprint, GRID } from '../game/state';
import { updateGame, useGame } from '../game/store';
import { getSoundEnabled, onSoundEnabledChange, playSfx, playVoice, setSoundEnabled } from '../audio/sound';
import { RoomScene, itemThumbnail } from './RoomScene';
import { CheckIcon, CloseIcon, LockIcon, SoundIcon, StarIcon } from './icons';
import { PracticeSheet, type PracticeModule } from './PracticeSheet';

interface Placing {
  type: ItemType;
  rot: number;
  color: number;
  /** Set when moving an item that's already in the room */
  moveId?: number;
  x: number;
  z: number;
}

const NEW_FOR_MS = 3 * 24 * 60 * 60 * 1000;
const BUDDY_SAYS = ['♪', '2 + 2 = 4', '★', '5 × 5 = 25', '♥', '10 − 3 = 7'];

const PLACE_SOUND: Record<ItemType, string> = {
  rug: 'place-rug', plant: 'place-plant', beanbag: 'place-soft', bed: 'place-soft',
  lamp: 'place-glass', fishbowl: 'place-glass', table: 'place-wood', shelf: 'place-wood', kitty: 'place-pet',
};

export function RoomHome({ onPractice }: { onPractice: (m: PracticeModule) => void }) {
  const game = useGame();
  const t = STRINGS[game.lang];
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<RoomScene | null>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [placing, setPlacing] = useState<Placing | null>(null);
  const [treasuresOpen, setTreasuresOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [renaming, setRenaming] = useState(false);
  const [bubble, setBubble] = useState<{ text: string; id: number } | null>(null);
  const [soundOn, setSoundOn] = useState(getSoundEnabled());
  const [starBump, setStarBump] = useState(0);
  const prevStars = useRef(game.stars);

  const voice = useCallback((event: string) => {
    void playVoice(event);
  }, []);

  const say = useCallback((text: string) => setBubble({ text, id: Date.now() }), []);

  // ---------- scene lifecycle ----------
  const placingRef = useRef(placing);
  placingRef.current = placing;
  const roomRef = useRef(game.room);
  roomRef.current = game.room;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const scene = new RoomScene(canvas, {
      onSelectItem: (id) => {
        setSelectedId(id);
        if (id != null) void playSfx('item-select');
      },
      onBuddyTap: () => {
        sceneRef.current?.hop();
        voice('giggle');
        say(BUDDY_SAYS[Math.floor(Math.random() * BUDDY_SAYS.length)]);
      },
      onFloorTap: (x, z) => {
        const p = placingRef.current;
        if (p) setPlacing({ ...p, x, z });
      },
    }, game.kind);
    sceneRef.current = scene;
    scene.setRoom(game.room);
    return () => {
      scene.dispose();
      sceneRef.current = null;
    };
    // the scene is created once; later changes are pushed in by the effects below
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => { sceneRef.current?.setRoom(game.room); }, [game.room]);
  useEffect(() => { sceneRef.current?.setBuddyKind(game.kind); }, [game.kind]);
  useEffect(() => { sceneRef.current?.setSelected(selectedId); }, [selectedId]);
  useEffect(() => onSoundEnabledChange(setSoundOn), []);

  // ghost while placing
  const placingOk = placing ? canPlace(game.room, placing.type, placing.x, placing.z, placing.rot, placing.moveId) : false;
  const placingKey = placing ? `${placing.type}:${placing.moveId ?? 'new'}` : '';
  useEffect(() => {
    const s = sceneRef.current;
    if (!s) return;
    if (!placing) { s.stopGhost(); return; }
    s.startGhost(placing.type, placing.rot, placing.color, placing.moveId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placingKey]);
  useEffect(() => {
    if (placing) sceneRef.current?.updateGhost(placing.x, placing.z, placing.rot, placingOk);
  }, [placing, placingOk]);

  // star counter bump
  useEffect(() => {
    if (game.stars > prevStars.current) setStarBump((n) => n + 1);
    prevStars.current = game.stars;
  }, [game.stars]);

  // greet on arrival
  useEffect(() => {
    if (game.name) {
      const id = setTimeout(() => { voice('hello'); say(`${game.name}!`); }, 700);
      return () => clearTimeout(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // speech bubble follows Buddy
  useEffect(() => {
    if (!bubble) return;
    let raf = 0;
    const until = performance.now() + 3200;
    const tick = () => {
      const el = bubbleRef.current, s = sceneRef.current;
      if (el && s) {
        const p = s.buddyScreenPos();
        const w = el.offsetWidth, h = el.offsetHeight, vw = window.innerWidth;
        const left = Math.max(16, Math.min(vw - 16 - w, p.x - w / 2));
        const top = Math.max(76, p.y - h - 14);
        el.style.transform = `translate(${left}px, ${top}px)`;
        el.style.setProperty('--tail', `${Math.max(18, Math.min(w - 18, p.x - left))}px`);
      }
      if (performance.now() < until) raf = requestAnimationFrame(tick);
      else setBubble(null);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [bubble]);

  // ---------- actions ----------
  const selected = selectedId != null ? game.room.find((r) => r.id === selectedId) ?? null : null;

  const updateItem = (id: number, change: (it: PlacedItem) => PlacedItem) =>
    updateGame((s) => ({ ...s, room: s.room.map((it) => (it.id === id ? change(it) : it)) }));

  const turnSelected = () => {
    if (!selected) return;
    const rot = (selected.rot + 1) % 4;
    const [w, d] = footprint(selected.type, rot);
    const tries = [[selected.x, selected.z], [Math.min(selected.x, GRID - w), Math.min(selected.z, GRID - d)]];
    const spot = tries.find(([x, z]) => canPlace(game.room, selected.type, x, z, rot, selected.id));
    if (!spot) { say(t.noRoom); return; }
    void playSfx('item-rotate');
    updateItem(selected.id, (it) => ({ ...it, rot, x: spot[0], z: spot[1] }));
  };

  const recolorSelected = () => {
    if (!selected) return;
    void playSfx('item-recolor');
    updateItem(selected.id, (it) => ({ ...it, color: (it.color + 1) % itemDef(it.type).colors.length }));
  };

  const putAwaySelected = () => {
    if (!selected) return;
    void playSfx('item-putaway');
    updateGame((s) => ({ ...s, room: s.room.filter((it) => it.id !== selected.id) }));
    setSelectedId(null);
  };

  const startPlacing = (type: ItemType, color = 0) => {
    const spot = findSpot(game.room, type) ?? { x: 0, z: 0 };
    setSelectedId(null);
    setTreasuresOpen(false);
    setPlacing({ type, rot: 0, color, x: spot.x, z: spot.z });
  };

  const confirmPlace = () => {
    if (!placing || !placingOk) return;
    const p = placing;
    if (p.moveId != null) {
      updateItem(p.moveId, (it) => ({ ...it, x: p.x, z: p.z, rot: p.rot }));
    } else {
      updateGame((s) => ({ ...s, nextId: s.nextId + 1, room: [...s.room, { id: s.nextId, type: p.type, x: p.x, z: p.z, rot: p.rot, color: p.color }] }));
    }
    void playSfx(PLACE_SOUND[p.type]);
    sceneRef.current?.hop();
    voice('happy');
    say('♥');
    setPlacing(null);
  };

  const turnPlacing = () => {
    if (!placing) return;
    const rot = (placing.rot + 1) % 4;
    const [w, d] = footprint(placing.type, rot);
    setPlacing({ ...placing, rot, x: Math.min(placing.x, GRID - w), z: Math.min(placing.z, GRID - d) });
  };

  const unlock = (type: ItemType) => {
    const def = itemDef(type);
    if (game.stars < def.stars) {
      void playSfx('cant-afford');
      say(`${t.needMore(def.stars - game.stars)} ★`);
      return;
    }
    void playSfx('treasure-unlock');
    updateGame((s) => ({ ...s, stars: s.stars - def.stars, unlocked: [...s.unlocked, type], newSince: { ...s.newSince, [type]: Date.now() } }));
    startPlacing(type);
  };

  const openTreasures = () => {
    setSelectedId(null);
    setTreasuresOpen(true);
    void playSfx('sheet-open');
  };
  const closeTreasures = () => {
    setTreasuresOpen(false);
    void playSfx('sheet-close');
  };

  const openPractice = () => {
    setSelectedId(null);
    setPracticeOpen(true);
    void playSfx('sheet-open');
  };
  const closePractice = () => {
    setPracticeOpen(false);
    void playSfx('sheet-close');
  };

  const toggleSound = () => setSoundEnabled(!soundOn);
  const toggleLang = () => updateGame((s) => ({ ...s, lang: s.lang === 'en' ? 'es' : 'en' }));

  const showOnboarding = !game.name || renaming;

  return (
    <div className="mb mb-room" lang={game.lang}>
      <canvas ref={canvasRef} aria-label={game.name ?? 'Buddy'} />

      {/* HUD */}
      {!showOnboarding && (
        <div className="mb-hud">
          <button className="mb-chip buddy" onClick={() => setRenaming(true)}>{game.name}</button>
          <div className="mb-hud-right">
            <span key={starBump} className={`mb-chip${starBump ? ' bump' : ''}`} aria-label={t.starsLabel(game.stars)}>
              <StarIcon />{game.stars}
            </span>
            <button className="mb-chip icon" onClick={toggleSound} aria-label={soundOn ? t.soundOn : t.soundOff} aria-pressed={soundOn}>
              <SoundIcon on={soundOn} />
            </button>
            <button className="mb-chip icon" onClick={toggleLang} aria-label={t.langSwitch}>{game.lang === 'en' ? 'ES' : 'EN'}</button>
          </div>
        </div>
      )}

      {bubble && <div ref={bubbleRef} className="mb-bubble" key={bubble.id} role="status">{bubble.text}</div>}

      {/* bottom area: main buttons, item tools, or placing tools */}
      {!showOnboarding && !treasuresOpen && !practiceOpen && (
        <div className="mb-bar">
          {placing ? (
            <div className="mb-tools">
              <span className={`mb-hint${placingOk ? '' : ' warn'}`}>{placingOk ? t.placeHint : t.noRoom}</span>
              <div className="mb-tools-row">
                <button className="mb-btn quiet small" onClick={() => setPlacing(null)}>{t.cancel}</button>
                <button className="mb-btn quiet small" onClick={turnPlacing}>{t.turn}</button>
                <button className="mb-btn small" onClick={confirmPlace} disabled={!placingOk}><CheckIcon />{t.done}</button>
              </div>
            </div>
          ) : selected ? (
            <div className="mb-tools-row">
              <button className="mb-btn quiet small" onClick={turnSelected}>{t.turn}</button>
              <button className="mb-btn quiet small" onClick={recolorSelected}>{t.color}</button>
              <button className="mb-btn quiet small" onClick={() => { setSelectedId(null); setPlacing({ type: selected.type, rot: selected.rot, color: selected.color, moveId: selected.id, x: selected.x, z: selected.z }); }}>{t.move}</button>
              <button className="mb-btn quiet small" onClick={putAwaySelected}>{t.putAway}</button>
              <button className="mb-btn small" onClick={() => setSelectedId(null)}>{t.done}</button>
            </div>
          ) : (
            <>
              <button className="mb-btn" onClick={openPractice}>{t.practice}</button>
              <button className="mb-btn secondary" onClick={openTreasures}>{t.treasures}</button>
            </>
          )}
        </div>
      )}

      {treasuresOpen && (
        <>
          <div className="mb-scrim" onClick={closeTreasures} />
          <Treasures onClose={closeTreasures} onUnlock={unlock} onPlace={(type) => startPlacing(type)} />
        </>
      )}

      {practiceOpen && (
        <>
          <div className="mb-scrim" onClick={closePractice} />
          <PracticeSheet onClose={closePractice} onPick={(m) => { setPracticeOpen(false); onPractice(m); }} />
        </>
      )}

      {showOnboarding && (
        <Onboarding
          initialName={game.name ?? ''}
          initialKind={game.kind}
          onKind={(k) => { updateGame((s) => ({ ...s, kind: k })); }}
          onDone={(name) => {
            updateGame((s) => ({ ...s, name }));
            setRenaming(false);
            sceneRef.current?.hop();
            voice('cheer');
            say(`${name}!`);
          }}
        />
      )}
    </div>
  );
}

// ---------- Treasures ----------

function Treasures({ onClose, onUnlock, onPlace }: { onClose: () => void; onUnlock: (t: ItemType) => void; onPlace: (t: ItemType) => void }) {
  const game = useGame();
  const t = STRINGS[game.lang];
  const placed = useMemo(() => new Set(game.room.map((r) => r.type)), [game.room]);
  const now = Date.now();

  return (
    <section className="mb-sheet" role="dialog" aria-label={t.treasuresTitle}>
      <div className="mb-sheet-head">
        <h2>{t.treasuresTitle}</h2>
        <span className="mb-chip"><StarIcon />{game.stars}</span>
        <button className="mb-close" onClick={onClose} aria-label={t.close}><CloseIcon /></button>
      </div>
      <div className="mb-collect">
        {CATALOG.map((def) => {
          const unlocked = game.unlocked.includes(def.type);
          const inRoom = placed.has(def.type);
          const affordable = game.stars >= def.stars;
          const isNew = unlocked && (now - (game.newSince[def.type] ?? 0) < NEW_FOR_MS);
          const locked = !unlocked && !affordable;
          const name = t.items[def.type];
          const cls = `mb-item${locked ? ' locked' : ''}${isNew ? ' is-new' : ''}`;
          return (
            <div key={def.type} className={cls}>
              {isNew ? <span className="mb-tag">{t.newTag}</span> : def.rare ? <span className="mb-tag rare">{t.rareTag}</span> : null}
              {inRoom && <span className="mb-check" aria-label={t.inRoom}><CheckIcon /></span>}
              <div className="art">
                <img src={itemThumbnail(def.type)} alt="" />
                {locked && <span className="mb-lock" aria-label={t.locked}><LockIcon /></span>}
              </div>
              <b>{name}</b>
              {inRoom ? (
                <span className="tab owned">{t.inRoom}</span>
              ) : unlocked ? (
                <button className="tab place" onClick={() => onPlace(def.type)}>{t.place}</button>
              ) : affordable ? (
                <button className="tab" onClick={() => onUnlock(def.type)} aria-label={`${t.unlock} ${name}, ${t.starsLabel(def.stars)}`}>
                  <StarIcon size={18} />{def.stars} · {t.unlock}
                </button>
              ) : (
                <button className="tab need" onClick={() => onUnlock(def.type)} aria-label={`${name}, ${t.starsLabel(def.stars)}`}>
                  <StarIcon size={18} />{def.stars}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ---------- first-time setup ----------

function Onboarding({ initialName, initialKind, onKind, onDone }: {
  initialName: string; initialKind: BuddyKind; onKind: (k: BuddyKind) => void; onDone: (name: string) => void;
}) {
  const game = useGame();
  const t = STRINGS[game.lang];
  const [name, setName] = useState(initialName);
  const [kind, setKind] = useState<BuddyKind>(initialKind);
  const pick = (k: BuddyKind) => { setKind(k); onKind(k); void playSfx('choice-tap'); };
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const n = name.trim().slice(0, 14);
    if (n) onDone(n);
  };
  return (
    <div className="mb-onboard">
      <form className="mb-onboard-card" onSubmit={submit}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: -8 }}>
          <button type="button" className="mb-chip icon" onClick={() => updateGame((s) => ({ ...s, lang: s.lang === 'en' ? 'es' : 'en' }))} aria-label={t.langSwitch}>
            {game.lang === 'en' ? 'ES' : 'EN'}
          </button>
        </div>
        <img className="logo" src="/logo-stacked.svg" alt="Math Buddy" />
        <h2>{t.pickKind}</h2>
        <div className="mb-kinds" role="group" aria-label={t.pickKind}>
          <button type="button" className="mb-kind" aria-pressed={kind === 'boy'} onClick={() => pick('boy')}>{t.boy}</button>
          <button type="button" className="mb-kind" aria-pressed={kind === 'girl'} onClick={() => pick('girl')}>{t.girl}</button>
        </div>
        <label htmlFor="mb-buddy-name"><h2>{t.nameAsk(kind)}</h2></label>
        <input id="mb-buddy-name" className="mb-name" value={name} maxLength={14} autoComplete="off" autoCapitalize="words"
          placeholder={t.namePlaceholder} onChange={(e) => setName(e.target.value)} />
        <button type="submit" className="mb-btn" disabled={!name.trim()}>{t.start}</button>
      </form>
    </div>
  );
}
