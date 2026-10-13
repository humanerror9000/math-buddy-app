// src/practice/shareArraysI18n.ts
// Words for the Arrays and Sharing modules in English and Spanish.

import type { Lang } from '../game/state';
import type { Kind, Module, Msg } from './shareArraysEngine';
import type { Who } from './i18n';

const b = (x: number | string): string => `<b>${x}</b>`;

export interface SAStrings {
  back: string; next: string; again: string; room: string; turn: string; fix: string; yes: string; no: string; peek: string;
  deal: string; left: string; del: string; check: string;
  roundTitle: string;
  roundStars: (n: number) => string;
  stepUnlocked: (m: Module, step: number) => string;
  allDone: (m: Module) => string;
  keepGoing: (need: number) => string;
  module: (m: Module) => string;
  tag: (k: Kind, w: Who) => string;
  steps: (m: Module) => [string, string, string];
  because: (k: number, q: number, n: number) => string;
  buddyAnswer: (w: Who) => string;
  msg: (m: Msg, w: Who) => string;
}

function make(lang: Lang): SAStrings {
  const en = lang === 'en';
  const steps = (m: Module): [string, string, string] => m === 'arrays'
    ? (en ? ['Build', 'Tens', 'Boxes'] : ['Construir', 'Decenas', 'Cajas'])
    : (en ? ['Plates', 'Rows', 'Memory'] : ['Platos', 'Filas', 'Memoria']);
  const module = (m: Module): string => (m === 'arrays' ? (en ? 'Arrays' : 'Arreglos') : (en ? 'Sharing' : 'Repartir'));
  return {
    back: en ? 'My room' : 'Mi cuarto',
    next: en ? 'Next' : 'Siguiente',
    again: en ? 'Play again' : 'Otra vez',
    room: en ? 'My room' : 'Mi cuarto',
    turn: en ? 'Turn it' : 'Girar',
    fix: en ? 'Fix it' : 'Corregir',
    yes: en ? 'Right' : 'Sí',
    no: en ? 'Not right' : 'No',
    peek: en ? 'Show me' : 'Muéstrame',
    deal: en ? 'Deal' : 'Repartir',
    left: en ? 'left over' : 'sobran',
    del: en ? 'Delete' : 'Borrar',
    check: en ? 'Check' : 'Revisar',
    roundTitle: en ? 'Round complete!' : '¡Ronda completa!',
    roundStars: (n) => (en ? `You earned ${n} ${n === 1 ? 'star' : 'stars'}` : `Ganaste ${n} ${n === 1 ? 'estrella' : 'estrellas'}`),
    stepUnlocked: (m, step) => (en ? `${module(m)}: ${steps(m)[step]} unlocked!` : `${module(m)}: ¡${steps(m)[step]} desbloqueado!`),
    allDone: (m) => (en ? `You finished every ${module(m)} step!` : `¡Terminaste todos los pasos de ${module(m)}!`),
    keepGoing: (need) => (en ? `Get ${need} right on the first try to unlock the next step.` : `Acierta ${need} a la primera para abrir el siguiente paso.`),
    module,
    steps,
    tag: (k, w) => {
      if (k === 'abuddy' || k === 'sbuddy') return en ? `${w.name}'s turn` : `Turno de ${w.name}`;
      const i = { build: 0, tens: 1, boxes: 2, plates: 0, rows: 1, memory: 2 }[k];
      return steps(k === 'build' || k === 'tens' || k === 'boxes' ? 'arrays' : 'sharing')[i];
    },
    because: (k, q, n) => (en ? `because ${k} × ${q} = ${n}` : `porque ${k} × ${q} = ${n}`),
    buddyAnswer: (w) => (en ? `${w.name}'s answer` : `Respuesta de ${w.name}`),
    msg: (m, w) => {
      const she = w.kind === 'girl' ? 'she' : 'he';
      switch (m.k) {
        case 'buildAsk': return en ? `Make ${b(m.r)} rows of ${b(m.c)}. Tap or drag on the dots.` : `Haz ${b(m.r)} filas de ${b(m.c)}. Toca o arrastra sobre los puntos.`;
        case 'buildSwapped': return en ? `That's ${b(m.c)} rows of ${b(m.r)}. We need ${b(m.r)} rows.` : `Eso son ${b(m.c)} filas de ${b(m.r)}. Necesitamos ${b(m.r)} filas.`;
        case 'buildWrong': return en ? `That's ${b(m.rr)} rows of ${b(m.cc)}. Make ${b(m.r)} rows of ${b(m.c)}.` : `Eso son ${b(m.rr)} filas de ${b(m.cc)}. Haz ${b(m.r)} filas de ${b(m.c)}.`;
        case 'buildOk': return en ? `${b(m.r)} rows of ${b(m.c)}! How many dots?` : `¡${b(m.r)} filas de ${b(m.c)}! ¿Cuántos puntos hay?`;
        case 'turned': return en ? `Turned: ${b(m.c)} rows of ${b(m.r)}. Still ${b(m.n)} dots!` : `Girado: ${b(m.c)} filas de ${b(m.r)}. ¡Siguen siendo ${b(m.n)} puntos!`;
        case 'tensAsk': return en ? 'Split off the ten! First the blue part.' : '¡Separa la decena! Primero la parte azul.';
        case 'tensB': return en ? 'Now the green part.' : 'Ahora la parte verde.';
        case 'sum': return en ? 'Put them together.' : 'Júntalos.';
        case 'boxesAsk': return en ? `Split ${b(m.a)} into tens and ones. First the blue box.` : `Parte ${b(m.a)} en decenas y unidades. Primero la caja azul.`;
        case 'boxesB': return en ? 'Now the green box.' : 'Ahora la caja verde.';
        case 'abuddyAsk': return en ? `${w.name} tried this one. ${b(`Tap the box ${she} got wrong.`)}` : `${w.name} hizo esta. ${b('Toca la caja que tiene mal.')}`;
        case 'abuddyNope': return en ? 'That box is right. Look at the blue one.' : 'Esa caja está bien. Mira la azul.';
        case 'abuddyFound': return en
          ? `Yes! ${she === 'she' ? 'She' : 'He'} did ${b(`${m.t / 10} × ${m.b}`)} but it's ${b(`${m.t} × ${m.b}`)}. Help ${w.name} fix it.`
          : `¡Sí! Hizo ${b(`${m.t / 10} × ${m.b}`)} pero es ${b(`${m.t} × ${m.b}`)}. Ayuda a ${w.name} a corregirlo.`;
        case 'platesAsk': return en ? `Share ${b(m.n)} cookies on ${b(m.k2)} plates. Tap the jar to deal.` : `Reparte ${b(m.n)} galletas en ${b(m.k2)} platos. Toca el frasco para repartir.`;
        case 'dealing': return en ? `Keep dealing… ${b(m.left)} left.` : `Sigue repartiendo… quedan ${b(m.left)}.`;
        case 'dealtEven': return en ? 'All shared! How many on each plate?' : '¡Todo repartido! ¿Cuántas hay en cada plato?';
        case 'dealtLeft': return en ? `Only ${b(m.left)} left, not enough for everyone! How many on each plate?` : `Solo quedan ${b(m.left)}, ¡no alcanza para todos! ¿Cuántas hay en cada plato?`;
        case 'leftAsk': return en ? 'And how many are left over?' : '¿Y cuántas sobran?';
        case 'rowsAsk': return en ? `${b(m.n)} dots in rows of ${b(m.k2)}. Tap to add rows. How many rows?` : `${b(m.n)} puntos en filas de ${b(m.k2)}. Toca para añadir filas. ¿Cuántas filas?`;
        case 'rowsCount': return en ? `Keep going… ${b(m.n)}` : `Sigue… ${b(m.n)}`;
        case 'rowsDone': return en ? `${b(m.n)}! Now count the rows.` : `¡${b(m.n)}! Ahora cuenta las filas.`;
        case 'rowsOver': return en ? `That's more than ${b(m.n)}. Tap the last row to take it away.` : `Eso es más de ${b(m.n)}. Toca la última fila para quitarla.`;
        case 'countRows': return en ? `Add rows until you reach ${b(m.n)}, then count them.` : `Añade filas hasta llegar a ${b(m.n)} y luego cuéntalas.`;
        case 'memAsk': return en ? 'Do you remember?' : '¿Te acuerdas?';
        case 'sbuddyAsk': return en ? `${w.name} says ${b(`${m.n} ÷ ${m.k2} = ${m.w}`)}. Is ${she} right?` : `${w.name} dice ${b(`${m.n} ÷ ${m.k2} = ${m.w}`)}. ¿Tiene razón?`;
        case 'sbuddyNo': return en ? `Good catch! So what is ${b(`${m.n} ÷ ${m.k2}`)}?` : `¡Bien visto! Entonces, ¿cuánto es ${b(`${m.n} ÷ ${m.k2}`)}?`;
        case 'lookAgain': return en ? 'Look again.' : 'Mira otra vez.';
        case 'tryAgain': return en ? 'Almost! Try again.' : '¡Casi! Intenta otra vez.';
        case 'thanks': return en ? `${w.name} says thanks!` : `¡${w.name} te da las gracias!`;
        case 'done': return en ? 'You did it!' : '¡Lo lograste!';
      }
    },
  };
}

export const SA_STRINGS: Record<Lang, SAStrings> = { en: make('en'), es: make('es') };
