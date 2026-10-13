// src/practice/i18n.ts
// Words for the borrowing practice in English and Spanish.
// Place names in Spanish (unidades, decenas, centenas) are all feminine, so "quedan" and "una" fit every place.

import type { BuddyKind, Lang } from '../game/state';
import type { Mode, Msg } from './borrowEngine';

const PLACES: Record<Lang, [string, string][]> = {
  en: [['one', 'ones'], ['ten', 'tens'], ['hundred', 'hundreds']],
  es: [['unidad', 'unidades'], ['decena', 'decenas'], ['centena', 'centenas']],
};
const cap = (s: string): string => s[0].toUpperCase() + s.slice(1);
const b = (x: number | string): string => `<b>${x}</b>`;

/** Buddy's chosen name and kind, for the lines about Buddy */
export interface Who { name: string; kind: BuddyKind }

export interface PracticeStrings {
  back: string;
  next: string;
  again: string;
  room: string;
  fix: string;
  buddyAnswer: (w: Who) => string;
  roundTitle: string;
  roundStars: (n: number) => string;
  unlockedStep: (m: Mode) => string;
  tag: (m: Mode, w: Who) => string;
  place: (p: number) => string;
  /** Task bar text. Numbers come back wrapped in <b> for highlighting. */
  msg: (m: Msg, w: Who) => string;
}

function make(lang: Lang): PracticeStrings {
  const PL = (p: number): string => PLACES[lang][p][1];
  const PS = (p: number): string => PLACES[lang][p][0];
  const en = lang === 'en';
  return {
    back: en ? 'My room' : 'Mi cuarto',
    next: en ? 'Next' : 'Siguiente',
    again: en ? 'Play again' : 'Otra vez',
    room: en ? 'My room' : 'Mi cuarto',
    fix: en ? 'Fix it' : 'Corregir',
    buddyAnswer: (w) => (en ? `${w.name}'s answer` : `Respuesta de ${w.name}`),
    roundTitle: en ? 'Round complete!' : '¡Ronda completa!',
    roundStars: (n) => (en ? `You earned ${n} ${n === 1 ? 'star' : 'stars'}` : `Ganaste ${n} ${n === 1 ? 'estrella' : 'estrellas'}`),
    unlockedStep: (m) => (en ? `New next time: ${make(lang).tag(m, { name: '', kind: 'boy' })}!` : `¡Nuevo la próxima vez: ${make(lang).tag(m, { name: '', kind: 'boy' })}!`),
    tag: (m, w) => ({
      blocks: en ? 'Blocks' : 'Bloques',
      discs: en ? 'Discs' : 'Fichas',
      pencil: en ? 'Pencil' : 'Lápiz',
      buddy: en ? `${w.name}'s turn` : `Turno de ${w.name}`,
    })[m],
    place: (p) => cap(PL(p)),
    msg: (m, w) => {
      const he = w.kind === 'girl' ? 'she' : 'he';
      switch (m.k) {
        case 'startTake': return en ? `Start with the ${PL(m.p)}. Take away ${b(m.n)}.` : `Empieza por las ${PL(m.p)}. Quita ${b(m.n)}.`;
        case 'taking': return en ? `Take away ${PL(m.p)}: ${b(m.done)} of ${b(m.n)}` : `Quita ${PL(m.p)}: ${b(m.done)} de ${b(m.n)}`;
        case 'notEnough': return en
          ? `Only ${b(m.have)} ${m.have === 1 ? PS(m.p) : PL(m.p)}. Not enough to take away ${b(m.need)}! Tap a ${PS(m.p + 1)} to break it.`
          : `Solo hay ${b(m.have)} ${m.have === 1 ? PS(m.p) : PL(m.p)}. ¡No alcanza para quitar ${b(m.need)}! Toca una ${PS(m.p + 1)} para romperla.`;
        case 'breakFurther': return en ? `No ${PL(m.p)} to break! Tap a ${PS(m.from)} first.` : `¡No hay ${PL(m.p)} para romper! Toca primero una ${PS(m.from)}.`;
        case 'brokeAgain': return en ? `Now tap a ${PS(m.p)} to break it.` : `Ahora toca una ${PS(m.p)} para romperla.`;
        case 'broke': return en
          ? `10 more ${PL(m.p)}! Now there are ${b(m.have)}. Take away ${b(m.need)}.`
          : `¡10 ${PL(m.p)} más! Ahora hay ${b(m.have)}. Quita ${b(m.need)}.`;
        case 'left': return en ? `How many ${PL(m.p)} are left?` : `¿Cuántas ${PL(m.p)} quedan?`;
        case 'countLeft': return en ? `Count the ${PL(m.p)} that are left.` : `Cuenta las ${PL(m.p)} que quedan.`;
        case 'nextCol': return en ? `Now the ${PL(m.p)}. Take away ${b(m.n)}.` : `Ahora las ${PL(m.p)}. Quita ${b(m.n)}.`;
        case 'wCol': return `${cap(PL(m.p))}: ${b(`${m.a} − ${m.b}`)}`;
        case 'wLess': return en
          ? `${b(m.a)} is less than ${b(m.b)}. Tap the ${PL(m.from)} to borrow.`
          : `${b(m.a)} es menor que ${b(m.b)}. Toca las ${PL(m.from)} para pedir prestado.`;
        case 'wBorrowMore': return en ? `Now borrow from the ${PL(m.p)}.` : `Ahora pide prestado a las ${PL(m.p)}.`;
        case 'wAfter': return en ? `Now it's ${b(`${m.a} − ${m.b}`)}.` : `Ahora es ${b(`${m.a} − ${m.b}`)}.`;
        case 'tryAgain': return en ? `Almost! Try ${b(`${m.a} − ${m.b}`)} again.` : `¡Casi! Intenta ${b(`${m.a} − ${m.b}`)} otra vez.`;
        case 'done': return en ? 'You did it!' : '¡Lo lograste!';
        case 'buddyAsk': return en ? `${w.name} tried this one. <b>Tap the number ${he} got wrong.</b>` : `${w.name} hizo esta. <b>Toca el número que tiene mal.</b>`;
        case 'buddyTens': return en ? 'That one is wrong too, but start with the ones.' : 'Ese también está mal, pero empieza por las unidades.';
        case 'buddyNope': return en ? 'That part is right. Look at the ones.' : 'Esa parte está bien. Mira las unidades.';
        case 'buddyFound': return en
          ? `Yes! ${cap(he)} did ${b(`${m.b} − ${m.a}`)} because it was easier. Help ${w.name} borrow.`
          : `¡Sí! Hizo ${b(`${m.b} − ${m.a}`)} porque era más fácil. Ayuda a ${w.name} a pedir prestado.`;
        case 'buddyThanks': return en ? `${w.name} says thanks!` : `¡${w.name} te da las gracias!`;
      }
    },
  };
}

export const PRACTICE_STRINGS: Record<Lang, PracticeStrings> = { en: make('en'), es: make('es') };
