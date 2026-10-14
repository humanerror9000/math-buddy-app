// src/game/i18n.ts
// Every word in the room screens, in English and Spanish.
// Spanish adjectives follow Buddy's kind (boy/girl), so strings that need it are functions.

import type { BuddyKind, Lang } from './state';
import type { ItemType } from './catalog';

interface Strings {
  practice: string;
  backToRoom: string;
  treasures: string;
  close: string;
  langSwitch: string;
  soundOn: string;
  soundOff: string;
  starsLabel: (n: number) => string;
  // onboarding
  meetTitle: string;
  pickKind: string;
  boy: string;
  girl: string;
  nameAsk: (k: BuddyKind) => string;
  namePlaceholder: string;
  start: string;
  // treasures
  treasuresTitle: string;
  unlock: string;
  place: string;
  inRoom: string;
  locked: string;
  newTag: string;
  rareTag: string;
  needMore: (n: number) => string;
  unlocked: string;
  // placing / editing
  placeHint: string;
  noRoom: string;
  turn: string;
  color: string;
  move: string;
  putAway: string;
  done: string;
  cancel: string;
  items: Record<ItemType, string>;
  // practice picker
  practiceTitle: string;
  play: string;
  soon: string;
  modules: Record<'borrow' | 'times' | 'arrays' | 'division' | 'words', string>;
  borrowSteps: [string, string, string];
  moduleSteps: Record<'borrow' | 'arrays' | 'division' | 'words', [string, string, string]>;
}

const en: Strings = {
  practice: 'Practice',
  backToRoom: 'My room',
  treasures: 'Treasures',
  close: 'Close',
  langSwitch: 'Cambiar a español',
  soundOn: 'Sound on',
  soundOff: 'Sound off',
  starsLabel: (n) => `${n} ${n === 1 ? 'star' : 'stars'}`,
  meetTitle: 'Meet your buddy!',
  pickKind: 'Is your buddy a boy or a girl?',
  boy: 'Boy',
  girl: 'Girl',
  nameAsk: () => 'What will you call your buddy?',
  namePlaceholder: 'Type a name',
  start: "Let's go!",
  treasuresTitle: 'Treasures',
  unlock: 'Unlock',
  place: 'Place',
  inRoom: 'In your room',
  locked: 'Locked',
  newTag: 'New',
  rareTag: 'Rare',
  needMore: (n) => `${n} more`,
  unlocked: 'Unlocked!',
  placeHint: 'Tap the floor to place it',
  noRoom: "It doesn't fit there",
  turn: 'Turn',
  color: 'Color',
  move: 'Move',
  putAway: 'Put away',
  done: 'Done',
  cancel: 'Cancel',
  items: {
    rug: 'Rug',
    plant: 'Plant',
    beanbag: 'Beanbag',
    lamp: 'Lamp',
    table: 'Table',
    shelf: 'Bookshelf',
    fishbowl: 'Fishbowl',
    bed: 'Bed',
    kitty: 'Kitty',
  },
  practiceTitle: 'Practice',
  play: 'Play',
  soon: 'Soon',
  modules: { borrow: 'Borrowing', times: 'Times tables', arrays: 'Arrays', division: 'Sharing', words: 'Story math' },
  borrowSteps: ['Blocks', 'Discs', 'Pencil'],
  moduleSteps: { borrow: ['Blocks', 'Discs', 'Pencil'], arrays: ['Build', 'Tens', 'Boxes'], division: ['Plates', 'Rows', 'Memory'], words: ['Choose', 'Build', 'Two steps'] },
};

const es: Strings = {
  practice: 'Practicar',
  backToRoom: 'Mi cuarto',
  treasures: 'Tesoros',
  close: 'Cerrar',
  langSwitch: 'Switch to English',
  soundOn: 'Sonido activado',
  soundOff: 'Sonido apagado',
  starsLabel: (n) => `${n} ${n === 1 ? 'estrella' : 'estrellas'}`,
  meetTitle: '¡Conoce a tu amigo!',
  pickKind: '¿Tu amigo es chico o chica?',
  boy: 'Chico',
  girl: 'Chica',
  nameAsk: (k) => (k === 'girl' ? '¿Cómo se va a llamar tu amiga?' : '¿Cómo se va a llamar tu amigo?'),
  namePlaceholder: 'Escribe un nombre',
  start: '¡Vamos!',
  treasuresTitle: 'Tesoros',
  unlock: 'Desbloquear',
  place: 'Poner',
  inRoom: 'En tu cuarto',
  locked: 'Bloqueado',
  newTag: 'Nuevo',
  rareTag: 'Raro',
  needMore: (n) => `Faltan ${n}`,
  unlocked: '¡Desbloqueado!',
  placeHint: 'Toca el piso para ponerlo',
  noRoom: 'No cabe ahí',
  turn: 'Girar',
  color: 'Color',
  move: 'Mover',
  putAway: 'Guardar',
  done: 'Listo',
  cancel: 'Cancelar',
  items: {
    rug: 'Alfombra',
    plant: 'Planta',
    beanbag: 'Puf',
    lamp: 'Lámpara',
    table: 'Mesa',
    shelf: 'Librero',
    fishbowl: 'Pecera',
    bed: 'Cama',
    kitty: 'Gatito',
  },
  practiceTitle: 'Practicar',
  play: 'Jugar',
  soon: 'Pronto',
  modules: { borrow: 'Prestando', times: 'Tablas', arrays: 'Arreglos', division: 'Repartir', words: 'Cuentos' },
  borrowSteps: ['Bloques', 'Fichas', 'Lápiz'],
  moduleSteps: { borrow: ['Bloques', 'Fichas', 'Lápiz'], arrays: ['Construir', 'Decenas', 'Cajas'], division: ['Platos', 'Filas', 'Memoria'], words: ['Elegir', 'Armar', 'Dos pasos'] },
};

export const STRINGS: Record<Lang, Strings> = { en, es };
export type { Strings };
