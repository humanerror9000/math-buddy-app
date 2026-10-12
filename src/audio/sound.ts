// src/audio/sound.ts
//
// One place for every sound in the app.
//
// HOW TO ADD SOUNDS
// Drop audio files into src/audio/voice/ or src/audio/sfx/ named
//   <event>-<number>.<ext>      e.g. answer-correct-1.wav, answer-correct-2.wav
// Every file that shares an event name becomes a variation of that event, and
// the app picks one at random each time (never the same one twice in a row).
// No code changes are needed: new files are picked up on the next build.
// Supported: .mp3 .wav .ogg .m4a
//
// Voice and sfx are separate channels:
//   - voice: one clip at a time; a new line cuts off the previous one
//   - sfx:   sounds layer freely, with a little random pitch variation
//
// Calling an event that has no files yet does nothing, so the code can
// trigger sounds before the files exist.

const voiceFiles = import.meta.glob('./voice/*.{mp3,wav,ogg,m4a}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const sfxFiles = import.meta.glob('./sfx/*.{mp3,wav,ogg,m4a}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

type Channel = 'voice' | 'sfx';

function buildBank(files: Record<string, string>): Map<string, string[]> {
  const bank = new Map<string, string[]>();
  for (const [path, url] of Object.entries(files)) {
    const base = path.split('/').pop()!.replace(/\.[^.]+$/, '');
    const event = base.replace(/-\d+$/, '');
    if (!bank.has(event)) bank.set(event, []);
    bank.get(event)!.push(url);
  }
  return bank;
}

const banks: Record<Channel, Map<string, string[]>> = {
  voice: buildBank(voiceFiles),
  sfx: buildBank(sfxFiles),
};

// ---------- settings ----------

const SOUND_KEY = 'mathbuddy_sound';
let enabled = readEnabled();
const listeners = new Set<(on: boolean) => void>();

function readEnabled(): boolean {
  try {
    return localStorage.getItem(SOUND_KEY) !== 'off';
  } catch {
    return true;
  }
}

export function getSoundEnabled(): boolean {
  return enabled;
}

export function setSoundEnabled(on: boolean): void {
  enabled = on;
  try {
    localStorage.setItem(SOUND_KEY, on ? 'on' : 'off');
  } catch {
    // storage unavailable — keep the setting for this session only
  }
  if (!on) stopVoice();
  listeners.forEach((fn) => fn(on));
}

/** Get notified when sound is switched on or off anywhere in the app. */
export function onSoundEnabledChange(fn: (on: boolean) => void): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

// ---------- Web Audio engine ----------

type Ctx = AudioContext;
let ctx: Ctx | null = null;
let master: GainNode | null = null;
const buses: Partial<Record<Channel, GainNode>> = {};
const buffers = new Map<string, Promise<AudioBuffer | null>>();
let currentVoice: AudioBufferSourceNode | null = null;
const lastPick = new Map<string, string>();

const CHANNEL_GAIN: Record<Channel, number> = { voice: 1, sfx: 0.8 };

function getCtx(): Ctx | null {
  if (ctx) return ctx;
  const AC = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AC) return null;
  ctx = new AC();
  master = ctx.createGain();
  master.connect(ctx.destination);
  (['voice', 'sfx'] as Channel[]).forEach((ch) => {
    const g = ctx!.createGain();
    g.gain.value = CHANNEL_GAIN[ch];
    g.connect(master!);
    buses[ch] = g;
  });
  return ctx;
}

function load(url: string): Promise<AudioBuffer | null> {
  let p = buffers.get(url);
  if (!p) {
    const c = getCtx();
    p = c
      ? fetch(url)
          .then((r) => r.arrayBuffer())
          .then(
            (data) =>
              // Callback form for older Safari
              new Promise<AudioBuffer | null>((resolve) =>
                c.decodeAudioData(data, resolve, () => resolve(null)),
              ),
          )
          .catch(() => null)
      : Promise.resolve(null);
    buffers.set(url, p);
  }
  return p;
}

/** Decode every file in the background so the first play has no delay. */
function preloadAll(): void {
  (['voice', 'sfx'] as Channel[]).forEach((ch) => banks[ch].forEach((urls) => urls.forEach((u) => void load(u))));
}

let unlocked = false;

/**
 * iPad Safari only allows audio after the user touches the screen.
 * This runs automatically on the first tap anywhere; calling it from a
 * button handler is also safe.
 */
export function unlockAudio(): void {
  const c = getCtx();
  if (!c) return;
  if (c.state === 'suspended') void c.resume();
  if (unlocked) return;
  unlocked = true;
  // A one-sample silent buffer fully wakes up audio on older iOS versions
  const silent = c.createBuffer(1, 1, 22050);
  const src = c.createBufferSource();
  src.buffer = silent;
  src.connect(c.destination);
  src.start(0);
  preloadAll();
}

if (typeof window !== 'undefined') {
  const wake = () => unlockAudio();
  ['pointerdown', 'touchend', 'keydown'].forEach((evt) =>
    window.addEventListener(evt, wake, { passive: true }),
  );
  // Coming back to the tab can leave the context suspended on iOS
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && ctx?.state === 'suspended') void ctx.resume();
  });
}

function pickVariation(key: string, urls: string[]): string {
  if (urls.length === 1) return urls[0];
  const last = lastPick.get(key);
  const pool = urls.filter((u) => u !== last);
  const choice = pool[Math.floor(Math.random() * pool.length)];
  lastPick.set(key, choice);
  return choice;
}

export interface PlayOptions {
  /** Shift pitch by this many semitones (e.g. rising notes for a streak). */
  semitones?: number;
  /** Random pitch spread in semitones, ± this amount. sfx default 0.5, voice 0. */
  variance?: number;
  /** 0–1 volume for this play. Default 1. */
  volume?: number;
  /** Seconds to wait before playing. */
  delay?: number;
}

/** True when at least one file exists for the event. */
export function hasSound(channel: Channel, event: string): boolean {
  return (banks[channel].get(event)?.length ?? 0) > 0;
}

/** Plays a sound and resolves when it has finished (or immediately if it can't play). */
async function play(channel: Channel, event: string, opts: PlayOptions = {}): Promise<void> {
  if (!enabled) return;
  const urls = banks[channel].get(event);
  if (!urls?.length) return;
  const c = getCtx();
  if (!c) return;

  const buffer = await load(pickVariation(channel + ':' + event, urls));
  if (!buffer || !enabled) return;

  const src = c.createBufferSource();
  src.buffer = buffer;
  const variance = opts.variance ?? (channel === 'sfx' ? 0.5 : 0);
  const cents = ((opts.semitones ?? 0) + (Math.random() * 2 - 1) * variance) * 100;
  src.playbackRate.value = Math.pow(2, cents / 1200);

  const gain = c.createGain();
  gain.gain.value = opts.volume ?? 1;
  src.connect(gain);
  gain.connect(buses[channel]!);

  if (channel === 'voice') {
    stopVoice();
    currentVoice = src;
  }

  return new Promise<void>((resolve) => {
    src.onended = () => {
      if (currentVoice === src) currentVoice = null;
      resolve();
    };
    src.start(c.currentTime + (opts.delay ?? 0));
  });
}

/** Play a Buddy voice line. Only one plays at a time. */
export function playVoice(event: string, opts?: PlayOptions): Promise<void> {
  return play('voice', event, opts);
}

/** Play a sound effect. These can overlap. */
export function playSfx(event: string, opts?: PlayOptions): Promise<void> {
  return play('sfx', event, opts);
}

/** Play several voice events one after another. */
export async function playVoiceSequence(events: string[]): Promise<void> {
  for (const e of events) {
    await playVoice(e);
  }
}

export function stopVoice(): void {
  if (currentVoice) {
    try {
      currentVoice.onended = null;
      currentVoice.stop();
    } catch {
      // already stopped
    }
    currentVoice = null;
  }
}
