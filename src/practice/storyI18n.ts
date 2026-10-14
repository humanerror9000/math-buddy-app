// src/practice/storyI18n.ts
// Words for Story math in English and Spanish (the story texts themselves live in storyBank.ts).

import type { Lang } from '../game/state';
import type { Mode, Op, Who } from './storyBank';
import type { Msg } from './storyEngine';

const b = (x: number | string): string => `<b>${x}</b>`;

const PLACES: Record<Lang, string[]> = { en: ['ones', 'tens', 'hundreds'], es: ['unidades', 'decenas', 'centenas'] };

/** What the task bar needs to know besides the message */
export interface MsgCtx { mode: Mode; part: number; prev: number | undefined; unit: string; claim: Op | null }

export interface StoryStrings {
  back: string; next: string; again: string; room: string; peek: string; skip: string; del: string; check: string;
  yes: string; no: string;
  module: string;
  steps: [string, string, string];
  tag: (m: Mode, w: Who) => string;
  opName: (op: Op) => string;
  intro: (m: Mode, w: Who) => string;
  part2: (r: number) => string;
  actOp: string; actBuildNums: string; actFindOther: string; actBuildOp: string; actSolve: string; actJudge: string;
  step: (i: number) => string;
  roundTitle: string;
  roundStars: (n: number) => string;
  stepUnlocked: (step: number) => string;
  allDone: string;
  keepGoing: (need: number) => string;
  msg: (m: Msg, w: Who, c: MsgCtx) => string;
}

function make(lang: Lang): StoryStrings {
  const en = lang === 'en';
  const steps: [string, string, string] = en ? ['Choose', 'Build', 'Two steps'] : ['Elegir', 'Armar', 'Dos pasos'];
  const module = en ? 'Story math' : 'Cuentos';
  const pl = (p: number): string => PLACES[lang][p] ?? PLACES[lang][2];
  const cap = (x: string): string => x[0].toUpperCase() + x.slice(1);
  const intro = (m: Mode, w: Who): string => {
    const her = w.kind === 'girl' ? 'her' : 'his';
    switch (m) {
      case 'choose': return en ? 'Read the story. Then choose what to do.' : 'Lee el cuento. Luego elige qué hacer.';
      case 'build': return en ? 'Read the story. Build the problem with its numbers.' : 'Lee el cuento. Arma el problema con sus números.';
      case 'two': return en ? 'This story has two steps. Read it carefully.' : 'Este cuento tiene dos pasos. Léelo con cuidado.';
      case 'buddy': return en ? `${w.name} solved this story. Check ${her} answer!` : `${w.name} resolvió este cuento. ¡Revisa su respuesta!`;
    }
  };
  const part2 = (r: number): string => (en ? `Step two! Use your ${r} from step one.` : `¡Paso dos! Usa tu ${r} del paso uno.`);
  return {
    back: en ? 'My room' : 'Mi cuarto',
    next: en ? 'Next' : 'Siguiente',
    again: en ? 'Play again' : 'Otra vez',
    room: en ? 'My room' : 'Mi cuarto',
    peek: en ? 'Show me' : 'Muéstrame',
    skip: en ? 'Tap to skip' : 'Toca para saltar',
    del: en ? 'Delete' : 'Borrar',
    check: en ? 'Check' : 'Revisar',
    yes: en ? 'Makes sense' : 'Tiene sentido',
    no: en ? "Doesn't make sense" : 'No tiene sentido',
    module,
    steps,
    tag: (m, w) => (m === 'buddy' ? (en ? `${w.name}'s turn` : `Turno de ${w.name}`) : steps[{ choose: 0, build: 1, two: 2 }[m]]),
    opName: (op) => (en ? { '+': 'Join', '−': 'Take away', '×': 'Groups', '÷': 'Share' } : { '+': 'Juntar', '−': 'Quitar', '×': 'Grupos', '÷': 'Repartir' })[op],
    intro,
    part2,
    actOp: en ? 'What do we do?' : '¿Qué hacemos?',
    actBuildNums: en ? 'Tap the numbers in the story' : 'Toca los números del cuento',
    actFindOther: en ? 'Find the other number in the story' : 'Encuentra el otro número en el cuento',
    actBuildOp: en ? 'Now choose what to do' : 'Ahora elige qué hacer',
    actSolve: en ? 'Solve it!' : '¡Resuélvelo!',
    actJudge: en ? 'Does it make sense?' : '¿Tiene sentido?',
    step: (i) => (en ? `Step ${i}` : `Paso ${i}`),
    roundTitle: en ? 'Round complete!' : '¡Ronda completa!',
    roundStars: (n) => (en ? `You earned ${n} ${n === 1 ? 'star' : 'stars'}` : `Ganaste ${n} ${n === 1 ? 'estrella' : 'estrellas'}`),
    stepUnlocked: (step) => (en ? `${module}: ${steps[step]} unlocked!` : `${module}: ¡${steps[step]} desbloqueado!`),
    allDone: en ? `You finished every ${module} step!` : `¡Terminaste todos los pasos de ${module}!`,
    keepGoing: (need) => (en ? `Get ${need} right on the first try to unlock the next step.` : `Acierta ${need} a la primera para abrir el siguiente paso.`),
    msg: (m, w, c) => {
      const she = w.kind === 'girl' ? 'she' : 'he';
      switch (m.k) {
        case 'intro': return c.part > 0 && c.prev !== undefined ? part2(c.prev) : intro(c.mode, w);
        case 'opWrong': return ({
          '+': en ? 'Joining makes more. Read the question again.' : 'Juntar da más. Lee la pregunta otra vez.',
          '−': en ? 'Taking away makes fewer. Read the question again.' : 'Quitar da menos. Lee la pregunta otra vez.',
          '×': en ? 'Are there equal groups? Read again.' : '¿Hay grupos iguales? Lee otra vez.',
          '÷': en ? 'Is something shared equally? Read again.' : '¿Se reparte algo en partes iguales? Lee otra vez.',
        } as Record<Op, string>)[m.op];
        case 'tryAgain': return en ? 'Almost! Try again.' : '¡Casi! Intenta otra vez.';
        case 'buildOrder': return en ? `Can you take ${b(m.b)} away from ${b(m.a)}? Put the bigger number first.` : `¿Puedes quitarle ${b(m.b)} a ${b(m.a)}? Pon primero el número más grande.`;
        case 'buildOrderDiv': return en ? `We share ${b(m.a)} into ${b(m.b)} equal groups. Put ${b(m.a)} first.` : `Repartimos ${b(m.a)} en ${b(m.b)} grupos iguales. Pon primero el ${b(m.a)}.`;
        case 'col': return `${cap(pl(m.p))}: ${b(`${m.a} ${m.op} ${m.b}`)}`;
        case 'less': return en ? `${b(m.a)} is less than ${b(m.b)}. Tap the ${pl(m.from)} to borrow.` : `${b(m.a)} es menor que ${b(m.b)}. Toca las ${pl(m.from)} para pedir prestado.`;
        case 'after': return en ? `Now it's ${b(`${m.a} − ${m.b}`)}.` : `Ahora es ${b(`${m.a} − ${m.b}`)}.`;
        case 'carryWrite': return en ? `${b(m.s)} is more than 9! Write the ${b(m.s % 10)}, and carry the ${b(1)}.` : `¡${b(m.s)} es más que 9! Escribe el ${b(m.s % 10)} y lleva ${b(1)}.`;
        case 'carryTap': return en ? `Carry the 1! Tap the ${pl(m.p)}.` : `¡Lleva 1! Toca las ${pl(m.p)}.`;
        case 'mentalAsk': return en ? 'Do you remember?' : '¿Te acuerdas?';
        case 'boxA': return en ? 'First the blue box.' : 'Primero la caja azul.';
        case 'boxB': return en ? 'Now the green box.' : 'Ahora la caja verde.';
        case 'boxSum': return en ? 'Put them together.' : 'Júntalos.';
        case 'buddyYes': return c.claim === '−'
          ? (en ? `Read again. Would there really be fewer ${c.unit}?` : `Lee otra vez. ¿De verdad habría menos ${c.unit}?`)
          : (en ? `Read again. Would there really be more ${c.unit}?` : `Lee otra vez. ¿De verdad habría más ${c.unit}?`);
        case 'buddyNo': return en ? `Good catch! What should ${she} do?` : '¡Bien visto! ¿Qué debería hacer?';
        case 'thanks': return en ? `${w.name} says thanks!` : `¡${w.name} te da las gracias!`;
        case 'done': return en ? 'You did it!' : '¡Lo lograste!';
      }
    },
  };
}

export const STORY_STRINGS: Record<Lang, StoryStrings> = { en: make('en'), es: make('es') };
