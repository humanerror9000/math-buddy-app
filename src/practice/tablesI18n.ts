// src/practice/tablesI18n.ts
// Words for the times-tables practice in English and Spanish.

import type { Lang } from '../game/state';
import type { TMode, TMsg } from './tablesEngine';
import type { Who } from './i18n';

const b = (x: number | string): string => `<b>${x}</b>`;

export interface TablesStrings {
  back: string;
  next: string;
  again: string;
  room: string;
  pickTable: string;
  pickTitle: string;
  pickSub: string;
  mix: string;
  mixLocked: string;
  peek: string;
  yes: string;
  no: string;
  del: string;
  check: string;
  roundTitle: string;
  roundStars: (n: number) => string;
  stepUnlocked: (t: number, step: number) => string;
  learned: (t: number) => string;
  keepGoing: (need: number) => string;
  tag: (m: TMode, w: Who) => string;
  tableTag: (t: number | 'mix') => string;
  msg: (m: TMsg, w: Who) => string;
}

function make(lang: Lang): TablesStrings {
  const en = lang === 'en';
  const steps = en ? ['Dots', 'Split', 'Memory'] : ['Puntos', 'Partir', 'Memoria'];
  return {
    back: en ? 'My room' : 'Mi cuarto',
    next: en ? 'Next' : 'Siguiente',
    again: en ? 'Play again' : 'Otra vez',
    room: en ? 'My room' : 'Mi cuarto',
    pickTable: en ? 'Pick a table' : 'Elegir tabla',
    pickTitle: en ? 'Pick a table' : 'Elige una tabla',
    pickSub: en ? 'Each table has three steps: Dots, Split, Memory.' : 'Cada tabla tiene tres pasos: Puntos, Partir, Memoria.',
    mix: en ? 'Mix' : 'Mezcla',
    mixLocked: en ? 'Learn a table to unlock Mix' : 'Aprende una tabla para abrir la Mezcla',
    peek: en ? 'Show me' : 'Muéstrame',
    yes: en ? 'Right' : 'Sí',
    no: en ? 'Not right' : 'No',
    del: en ? 'Delete' : 'Borrar',
    check: en ? 'Check' : 'Revisar',
    roundTitle: en ? 'Round complete!' : '¡Ronda completa!',
    roundStars: (n) => (en ? `You earned ${n} ${n === 1 ? 'star' : 'stars'}` : `Ganaste ${n} ${n === 1 ? 'estrella' : 'estrellas'}`),
    stepUnlocked: (t, step) => (en ? `Table of ${t}: ${steps[step]} unlocked!` : `Tabla del ${t}: ¡${steps[step]} desbloqueado!`),
    learned: (t) => (en ? `You learned the ${t}s!` : `¡Aprendiste la tabla del ${t}!`),
    keepGoing: (need) => (en ? `Get ${need} right on the first try to unlock the next step.` : `Acierta ${need} a la primera para abrir el siguiente paso.`),
    tag: (m, w) => (m === 'buddy' ? (en ? `${w.name}'s turn` : `Turno de ${w.name}`) : steps[['array', 'split', 'recall'].indexOf(m)]),
    tableTag: (t) => (t === 'mix' ? (en ? 'Mix' : 'Mezcla') : `× ${t}`),
    msg: (m, w) => {
      const she = w.kind === 'girl' ? 'she' : 'he';
      switch (m.k) {
        case 'arrayAsk': return en
          ? `${b(m.m)} rows of ${b(m.t)}. Tap the dots to count by ${m.t}s, or type the answer.`
          : `${b(m.m)} filas de ${b(m.t)}. Toca los puntos para contar de ${m.t} en ${m.t}, o escribe la respuesta.`;
        case 'counting': return en ? `Keep going… ${b(m.n)}` : `Sigue… ${b(m.n)}`;
        case 'counted': return en ? `So ${b(`${m.t} × ${m.m}`)} is…` : `Entonces ${b(`${m.t} × ${m.m}`)} es…`;
        case 'splitAsk': return en ? `Split it! First the top ${b(m.a)} rows.` : `¡Pártelo! Primero las ${b(m.a)} filas de arriba.`;
        case 'splitNine': return en ? 'Ten rows is easy. Then take one row away.' : 'Diez filas es fácil. Luego quita una fila.';
        case 'splitB': return en ? `Now the other ${b(m.b)} ${m.b === 1 ? 'row' : 'rows'}.` : (m.b === 1 ? 'Ahora la otra fila.' : `Ahora las otras ${b(m.b)} filas.`);
        case 'splitSum': return en ? 'Put them together.' : 'Júntalos.';
        case 'splitMinus': return en ? `Take away the crossed-out row of ${b(m.t)}.` : `Quita la fila tachada de ${b(m.t)}.`;
        case 'recallAsk': return en ? 'Do you remember?' : '¿Te acuerdas?';
        case 'tryAgain': return en ? 'Almost! Try again.' : '¡Casi! Intenta otra vez.';
        case 'countRows': return en ? 'Count the dots row by row.' : 'Cuenta los puntos fila por fila.';
        case 'buddyAsk': return en
          ? `${w.name} says ${b(`${m.t} × ${m.m} = ${m.w}`)}. Is ${she} right?`
          : `${w.name} dice ${b(`${m.t} × ${m.m} = ${m.w}`)}. ¿Tiene razón?`;
        case 'buddyNo': return en ? `Good catch! So what is ${b(`${m.t} × ${m.m}`)}?` : `¡Bien visto! Entonces, ¿cuánto es ${b(`${m.t} × ${m.m}`)}?`;
        case 'buddyYesWrong': return en ? 'Look again at the dots.' : 'Mira otra vez los puntos.';
        case 'buddyThanks': return en ? `${w.name} says thanks!` : `¡${w.name} te da las gracias!`;
        case 'done': return en ? 'You did it!' : '¡Lo lograste!';
      }
    },
  };
}

export const TABLES_STRINGS: Record<Lang, TablesStrings> = { en: make('en'), es: make('es') };
