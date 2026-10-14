// src/practice/storyBank.ts
// Story templates for Story math. Each template makes a fresh story with new numbers every time.
// Numbers in the text are wrapped as chips with N(); the screen turns them into tappable chips.
// Stories use things from her world: cookies, the fishbowl, books, stickers, oranges.

import type { BuddyKind } from '../game/state';

export type Op = '+' | '−' | '×' | '÷';
export type Item = 'cookie' | 'orange' | 'book' | 'sticker' | 'fish';
/** One step. 'prev' means "the answer from step one goes here". */
export interface Part { op: Op; a: number | 'prev'; b: number | 'prev' }
export interface Story {
  id: string;
  item: Item;
  parts: Part[];
  text: { en: string; es: string };
  unit: { en: string; es: string };
  why: { en: string; es: string };
}
export interface Who { name: string; kind: BuddyKind }

/** Marks a number in the story text as a chip */
export const N = (v: number): string => `@${v}@`;

const rnd = (lo: number, hi: number): number => lo + Math.floor(Math.random() * (hi - lo + 1));
const pick = <T,>(a: T[]): T => a[Math.floor(Math.random() * a.length)];

// ---- number makers (answers stay friendly: no negative results, sums never grow a digit) ----
/** a − b, usually needing a borrow */
function subNums(big = Math.random() < 0.25): [number, number] {
  for (;;) {
    const a = big ? rnd(120, 499) : rnd(31, 98);
    const b = big ? rnd(25, a - 20) : rnd(12, a - 5);
    const borrow = a % 10 < b % 10;
    if (b >= a || b < 10) continue;
    if (!borrow && Math.random() < 0.7) continue; // mostly borrowing
    return [a, b];
  }
}
/** a + b, often with a carry, never adding a digit */
function addNums(big = Math.random() < 0.25): [number, number] {
  for (;;) {
    const a = big ? rnd(110, 480) : rnd(14, 68);
    const b = big ? rnd(30, 400) : rnd(12, 30);
    if (String(a + b).length > String(Math.max(a, b)).length) continue;
    const carry = (a % 10) + (b % 10) >= 10;
    if (!carry && Math.random() < 0.6) continue;
    return [a, b];
  }
}
const fact = (): [number, number] => [rnd(2, 9), rnd(2, 9)];
/** groups × a two-digit size, for the Boxes */
function bigMul(): [number, number] { let s = rnd(12, 49); while (s % 10 === 0) s = rnd(12, 49); return [rnd(2, 6), s]; }
function divNums(): [number, number] { const k = rnd(2, 9), q = rnd(2, 9); return [k * q, k]; }

type Maker = (w: Who) => Story;
const she = (w: Who) => (w.kind === 'girl' ? 'she' : 'he');
const She = (w: Who) => (w.kind === 'girl' ? 'She' : 'He');
const her = (w: Who) => (w.kind === 'girl' ? 'her' : 'him');
const herP = (w: Who) => (w.kind === 'girl' ? 'her' : 'his');

const UNIT = {
  cookie: { en: 'cookies', es: 'galletas' }, orange: { en: 'oranges', es: 'naranjas' }, book: { en: 'books', es: 'libros' },
  sticker: { en: 'stickers', es: 'stickers' }, fish: { en: 'fish', es: 'peces' },
};

// ---------------- one-step stories ----------------
const ONE: Record<Op, Maker[]> = {
  '−': [
    (w) => { const [a, b] = subNums(); return { id: 's-cookies', item: 'cookie', parts: [{ op: '−', a, b }], unit: UNIT.cookie,
      text: { en: `There were ${N(a)} cookies in the jar. ${w.name} ate ${N(b)} of them. Oops! <span class="q">How many cookies are left?</span>`,
              es: `Había ${N(a)} galletas en el frasco. ${w.name} se comió ${N(b)}. ¡Ups! <span class="q">¿Cuántas galletas quedan?</span>` },
      why: { en: 'Ate some → fewer → take away', es: 'Se comió algunas → menos → quitar' } }; },
    (w) => { const [a, b] = subNums(); return { id: 's-fish', item: 'fish', parts: [{ op: '−', a, b }], unit: UNIT.fish,
      text: { en: `The big fishbowl had ${N(a)} fish. ${w.name} moved ${N(b)} of them to the small bowl. <span class="q">How many fish are left in the big bowl?</span>`,
              es: `La pecera grande tenía ${N(a)} peces. ${w.name} pasó ${N(b)} a la pecera pequeña. <span class="q">¿Cuántos peces quedan en la grande?</span>` },
      why: { en: 'Moved some out → fewer → take away', es: 'Sacó algunos → menos → quitar' } }; },
    (w) => { const [a, b] = subNums(); return { id: 's-books-more', item: 'book', parts: [{ op: '−', a, b }], unit: UNIT.book,
      text: { en: `Your bookshelf has ${N(a)} books. ${w.name}'s has ${N(b)}. <span class="q">How many more books do you have?</span>`,
              es: `Tu librero tiene ${N(a)} libros. El de ${w.name} tiene ${N(b)}. <span class="q">¿Cuántos libros más tienes tú?</span>` },
      why: { en: '"How many more" → the difference → take away', es: '"Cuántos más" → la diferencia → quitar' } }; },
    (w) => { const [a, b] = subNums(); return { id: 's-stickers-gift', item: 'sticker', parts: [{ op: '−', a, b }], unit: UNIT.sticker,
      text: { en: `You had ${N(a)} stickers. You gave ${N(b)} to ${w.name}. <span class="q">How many stickers do you have now?</span>`,
              es: `Tenías ${N(a)} stickers. Le diste ${N(b)} a ${w.name}. <span class="q">¿Cuántos stickers tienes ahora?</span>` },
      why: { en: 'Gave some away → fewer → take away', es: 'Regalaste algunos → menos → quitar' } }; },
    (w) => { const [a, b] = subNums(); return { id: 's-oranges-sold', item: 'orange', parts: [{ op: '−', a, b }], unit: UNIT.orange,
      text: { en: `${w.name} picked ${N(a)} oranges. ${She(w)} sold ${N(b)} at the market. <span class="q">How many oranges does ${she(w)} have left?</span>`,
              es: `${w.name} recogió ${N(a)} naranjas. Vendió ${N(b)} en el mercado. <span class="q">¿Cuántas naranjas le quedan?</span>` },
      why: { en: 'Sold some → fewer → take away', es: 'Vendió algunas → menos → quitar' } }; },
    (w) => { const [a, b] = subNums(); return { id: 's-read', item: 'book', parts: [{ op: '−', a, b }], unit: { en: 'pages', es: 'páginas' },
      text: { en: `${w.name}'s book has ${N(a)} pages. ${She(w)} has read ${N(b)}. <span class="q">How many pages are left to read?</span>`,
              es: `El libro de ${w.name} tiene ${N(a)} páginas. Ya leyó ${N(b)}. <span class="q">¿Cuántas páginas le faltan?</span>` },
      why: { en: 'Pages already read come off → take away', es: 'Las páginas leídas se quitan → quitar' } }; },
  ],
  '+': [
    (w) => { const [a, b] = addNums(); return { id: 'a-stickers', item: 'sticker', parts: [{ op: '+', a, b }], unit: UNIT.sticker,
      text: { en: `${w.name} has ${N(a)} stickers. You give ${her(w)} ${N(b)} more. <span class="q">How many stickers does ${she(w)} have now?</span>`,
              es: `${w.name} tiene ${N(a)} stickers. Tú le das ${N(b)} más. <span class="q">¿Cuántos stickers tiene ahora?</span>` },
      why: { en: 'Gets more → join', es: 'Recibe más → juntar' } }; },
    (_w) => { const [a, b] = addNums(); return { id: 'a-books', item: 'book', parts: [{ op: '+', a, b }], unit: UNIT.book,
      text: { en: `Your bookshelf has ${N(a)} books. For your birthday you get ${N(b)} more. <span class="q">How many books do you have now?</span>`,
              es: `Tu librero tiene ${N(a)} libros. En tu cumpleaños te regalan ${N(b)} más. <span class="q">¿Cuántos libros tienes ahora?</span>` },
      why: { en: 'Get more → join', es: 'Recibes más → juntar' } }; },
    (w) => { const [a, b] = addNums(); return { id: 'a-fish', item: 'fish', parts: [{ op: '+', a, b }], unit: UNIT.fish,
      text: { en: `The fishbowl has ${N(a)} fish. ${w.name} adds ${N(b)} new fish. <span class="q">How many fish are in the bowl now?</span>`,
              es: `La pecera tiene ${N(a)} peces. ${w.name} pone ${N(b)} peces nuevos. <span class="q">¿Cuántos peces hay ahora?</span>` },
      why: { en: 'Adds more → join', es: 'Pone más → juntar' } }; },
    (w) => { const [a, b] = addNums(); return { id: 'a-cookies-baked', item: 'cookie', parts: [{ op: '+', a, b }], unit: UNIT.cookie,
      text: { en: `${w.name} baked ${N(a)} cookies in the morning and ${N(b)} in the afternoon. <span class="q">How many cookies did ${she(w)} bake in all?</span>`,
              es: `${w.name} horneó ${N(a)} galletas en la mañana y ${N(b)} en la tarde. <span class="q">¿Cuántas galletas horneó en total?</span>` },
      why: { en: '"In all" → put them together → join', es: '"En total" → juntarlas → juntar' } }; },
    (_w) => { const [a, b] = addNums(); return { id: 'a-oranges', item: 'orange', parts: [{ op: '+', a, b }], unit: UNIT.orange,
      text: { en: `One tree gave ${N(a)} oranges and another gave ${N(b)}. <span class="q">How many oranges are there altogether?</span>`,
              es: `Un árbol dio ${N(a)} naranjas y otro dio ${N(b)}. <span class="q">¿Cuántas naranjas hay en total?</span>` },
      why: { en: '"Altogether" → join', es: '"En total" → juntar' } }; },
    (w) => { const [a, b] = addNums(); return { id: 'a-pages', item: 'book', parts: [{ op: '+', a, b }], unit: { en: 'pages', es: 'páginas' },
      text: { en: `${w.name} read ${N(a)} pages on Saturday and ${N(b)} on Sunday. <span class="q">How many pages did ${she(w)} read over the weekend?</span>`,
              es: `${w.name} leyó ${N(a)} páginas el sábado y ${N(b)} el domingo. <span class="q">¿Cuántas páginas leyó el fin de semana?</span>` },
      why: { en: 'Both days together → join', es: 'Los dos días juntos → juntar' } }; },
  ],
  '×': [
    (w) => { const [g, s] = Math.random() < 0.5 ? fact() : bigMul(); return { id: 'm-oranges', item: 'orange', parts: [{ op: '×', a: g, b: s }], unit: UNIT.orange,
      text: { en: `${w.name} fills ${N(g)} bags with ${N(s)} oranges in each bag. <span class="q">How many oranges are there in all?</span>`,
              es: `${w.name} llena ${N(g)} bolsas con ${N(s)} naranjas cada una. <span class="q">¿Cuántas naranjas hay en total?</span>` },
      why: { en: 'Equal bags → groups → times', es: 'Bolsas iguales → grupos → por' } }; },
    (_w) => { const [g, s] = Math.random() < 0.5 ? fact() : bigMul(); return { id: 'm-stickers', item: 'sticker', parts: [{ op: '×', a: g, b: s }], unit: UNIT.sticker,
      text: { en: `You buy ${N(g)} packs of stickers. Each pack has ${N(s)} stickers. <span class="q">How many stickers do you get?</span>`,
              es: `Compras ${N(g)} paquetes de stickers. Cada paquete trae ${N(s)}. <span class="q">¿Cuántos stickers tienes?</span>` },
      why: { en: 'Packs of the same size → groups → times', es: 'Paquetes iguales → grupos → por' } }; },
    (w) => { const [g, s] = fact(); return { id: 'm-cookies', item: 'cookie', parts: [{ op: '×', a: g, b: s }], unit: UNIT.cookie,
      text: { en: `${w.name} puts ${N(s)} cookies on each of ${N(g)} plates. <span class="q">How many cookies is that?</span>`,
              es: `${w.name} pone ${N(s)} galletas en cada uno de ${N(g)} platos. <span class="q">¿Cuántas galletas son?</span>` },
      why: { en: 'Same on each plate → groups → times', es: 'Lo mismo en cada plato → grupos → por' } }; },
    (_w) => { const [g, s] = Math.random() < 0.5 ? fact() : bigMul(); return { id: 'm-shelves', item: 'book', parts: [{ op: '×', a: g, b: s }], unit: UNIT.book,
      text: { en: `The bookshelf has ${N(g)} shelves with ${N(s)} books on each shelf. <span class="q">How many books are there?</span>`,
              es: `El librero tiene ${N(g)} repisas con ${N(s)} libros en cada una. <span class="q">¿Cuántos libros hay?</span>` },
      why: { en: 'Equal shelves → groups → times', es: 'Repisas iguales → grupos → por' } }; },
    (w) => { const [g, s] = fact(); return { id: 'm-bowls', item: 'fish', parts: [{ op: '×', a: g, b: s }], unit: UNIT.fish,
      text: { en: `${w.name} has ${N(g)} fishbowls with ${N(s)} fish in each one. <span class="q">How many fish does ${she(w)} have?</span>`,
              es: `${w.name} tiene ${N(g)} peceras con ${N(s)} peces en cada una. <span class="q">¿Cuántos peces tiene?</span>` },
      why: { en: 'Equal bowls → groups → times', es: 'Peceras iguales → grupos → por' } }; },
  ],
  '÷': [
    (_w) => { const [n, k] = divNums(); return { id: 'd-plates', item: 'cookie', parts: [{ op: '÷', a: n, b: k }], unit: UNIT.cookie,
      text: { en: `You share ${N(n)} cookies equally on ${N(k)} plates. <span class="q">How many cookies go on each plate?</span>`,
              es: `Repartes ${N(n)} galletas en partes iguales en ${N(k)} platos. <span class="q">¿Cuántas galletas van en cada plato?</span>` },
      why: { en: 'Equally on plates → share', es: 'En partes iguales → repartir' } }; },
    (w) => { const [n, k] = divNums(); return { id: 'd-friends', item: 'sticker', parts: [{ op: '÷', a: n, b: k }], unit: UNIT.sticker,
      text: { en: `${w.name} shares ${N(n)} stickers equally with ${N(k)} friends. <span class="q">How many stickers does each friend get?</span>`,
              es: `${w.name} reparte ${N(n)} stickers en partes iguales entre ${N(k)} amigos. <span class="q">¿Cuántos stickers recibe cada amigo?</span>` },
      why: { en: 'Each friend gets the same → share', es: 'Cada amigo recibe lo mismo → repartir' } }; },
    (w) => { const [n, k] = divNums(); return { id: 'd-bags', item: 'orange', parts: [{ op: '÷', a: n, b: k }], unit: UNIT.orange,
      text: { en: `${w.name} puts ${N(n)} oranges into ${N(k)} bags with the same number in each. <span class="q">How many oranges go in each bag?</span>`,
              es: `${w.name} pone ${N(n)} naranjas en ${N(k)} bolsas con la misma cantidad. <span class="q">¿Cuántas naranjas van en cada bolsa?</span>` },
      why: { en: 'Same number in each bag → share', es: 'La misma cantidad en cada bolsa → repartir' } }; },
    (_w) => { const [n, k] = divNums(); return { id: 'd-bowls', item: 'fish', parts: [{ op: '÷', a: n, b: k }], unit: UNIT.fish,
      text: { en: `There are ${N(n)} fish to share equally among ${N(k)} fishbowls. <span class="q">How many fish go in each bowl?</span>`,
              es: `Hay ${N(n)} peces para repartir en partes iguales en ${N(k)} peceras. <span class="q">¿Cuántos peces van en cada pecera?</span>` },
      why: { en: 'Equally among bowls → share', es: 'En partes iguales → repartir' } }; },
    (w) => { const [n, k] = divNums(); return { id: 'd-shelves', item: 'book', parts: [{ op: '÷', a: n, b: k }], unit: UNIT.book,
      text: { en: `${w.name} puts ${N(n)} books on ${N(k)} shelves, the same on each shelf. <span class="q">How many books go on each shelf?</span>`,
              es: `${w.name} pone ${N(n)} libros en ${N(k)} repisas, la misma cantidad en cada una. <span class="q">¿Cuántos libros van en cada repisa?</span>` },
      why: { en: 'The same on each shelf → share', es: 'Lo mismo en cada repisa → repartir' } }; },
  ],
};

// ---------------- two-step stories ----------------
const TWO: Maker[] = [
  (w) => { const [g, s] = fact(); const give = rnd(2, Math.min(9, g * s - 2)); return { id: 't-buy-give', item: 'sticker',
    parts: [{ op: '×', a: g, b: s }, { op: '−', a: 'prev', b: give }], unit: UNIT.sticker,
    text: { en: `You buy ${N(g)} packs of ${N(s)} stickers. Then you give ${N(give)} to ${w.name}. <span class="q">How many stickers do you have left?</span>`,
            es: `Compras ${N(g)} paquetes de ${N(s)} stickers. Luego le das ${N(give)} a ${w.name}. <span class="q">¿Cuántos stickers te quedan?</span>` },
    why: { en: 'First the packs, then give some away', es: 'Primero los paquetes, luego regala algunos' } }; },
  (w) => { const [g, s] = fact(); const had = rnd(Math.max(g * s + 10, 60), 99); return { id: 't-had-gave', item: 'sticker',
    parts: [{ op: '×', a: g, b: s }, { op: '−', a: had, b: 'prev' }], unit: UNIT.sticker,
    text: { en: `${w.name} had ${N(had)} stickers. ${She(w)} gave away ${N(g)} packs with ${N(s)} stickers in each pack. <span class="q">How many stickers does ${she(w)} have left?</span>`,
            es: `${w.name} tenía ${N(had)} stickers. Regaló ${N(g)} paquetes con ${N(s)} stickers cada uno. <span class="q">¿Cuántos stickers le quedan?</span>` },
    why: { en: `First how many ${she(w)} gave away, then take them away`, es: 'Primero cuántos regaló, luego quítalos' } }; },
  (w) => { let k = 2, q = 2; while (k * q < 24) { k = rnd(2, 6); q = rnd(4, 9); } const total = k * q, a = rnd(10, total - 10), b = total - a; return { id: 't-pick-share', item: 'orange',
    parts: [{ op: '+', a, b }, { op: '÷', a: 'prev', b: k }], unit: UNIT.orange,
    text: { en: `${w.name} has ${N(a)} oranges and picks ${N(b)} more. ${She(w)} puts them in ${N(k)} bags with the same number in each. <span class="q">How many oranges go in each bag?</span>`,
            es: `${w.name} tiene ${N(a)} naranjas y recoge ${N(b)} más. Las pone en ${N(k)} bolsas con la misma cantidad. <span class="q">¿Cuántas naranjas van en cada bolsa?</span>` },
    why: { en: 'First join them all, then share into bags', es: 'Primero júntalas todas, luego repártelas' } }; },
  (w) => { const [g, s] = fact(); const more = rnd(11, 39); return { id: 't-plates-more', item: 'cookie',
    parts: [{ op: '×', a: g, b: s }, { op: '+', a: 'prev', b: more }], unit: UNIT.cookie,
    text: { en: `${w.name} baked ${N(g)} trays with ${N(s)} cookies on each tray. Then you baked ${N(more)} more. <span class="q">How many cookies are there now?</span>`,
            es: `${w.name} horneó ${N(g)} bandejas con ${N(s)} galletas cada una. Luego tú horneaste ${N(more)} más. <span class="q">¿Cuántas galletas hay ahora?</span>` },
    why: { en: 'First the trays, then join the extra ones', es: 'Primero las bandejas, luego junta las demás' } }; },
  (w) => { const k = rnd(2, 6), q = rnd(3, 9), left = k * q, ate = rnd(11, 29), total = left + ate; return { id: 't-eat-share', item: 'cookie',
    parts: [{ op: '−', a: total, b: ate }, { op: '÷', a: 'prev', b: k }], unit: UNIT.cookie,
    text: { en: `There were ${N(total)} cookies. ${w.name} ate ${N(ate)}. You share the rest equally on ${N(k)} plates. <span class="q">How many cookies go on each plate?</span>`,
            es: `Había ${N(total)} galletas. ${w.name} se comió ${N(ate)}. Repartes el resto en partes iguales en ${N(k)} platos. <span class="q">¿Cuántas galletas van en cada plato?</span>` },
    why: { en: 'First take away what was eaten, then share', es: 'Primero quita las que se comió, luego reparte' } }; },
  (w) => { const [a, b] = addNums(false); const gone = rnd(5, Math.min(25, a + b - 5)); return { id: 't-fish-move', item: 'fish',
    parts: [{ op: '+', a, b }, { op: '−', a: 'prev', b: gone }], unit: UNIT.fish,
    text: { en: `One bowl has ${N(a)} fish and another has ${N(b)}. ${w.name} gives ${N(gone)} fish to a friend. <span class="q">How many fish are left?</span>`,
            es: `Una pecera tiene ${N(a)} peces y otra tiene ${N(b)}. ${w.name} le regala ${N(gone)} peces a un amigo. <span class="q">¿Cuántos peces quedan?</span>` },
    why: { en: 'First join the bowls, then take some away', es: 'Primero junta las peceras, luego quita algunos' } }; },
];

// ---------------- rounds ----------------

export const ROUND_SIZE = 5;
export type Mode = 'choose' | 'build' | 'two' | 'buddy';

export interface RoundItem { mode: Mode; story: Story; claimOp?: Op }

/** Five stories for a step (0 Choose, 1 Build, 2 Two steps). Build and Two-step rounds include one of Buddy's mistakes. */
export function makeRound(step: number, w: Who): RoundItem[] {
  const out: RoundItem[] = [];
  const ops: Op[] = ['−', '+', '×', '÷'];
  const usedIds = new Set<string>();
  // an operation mix that always includes all four in one-step rounds
  const opOrder = [...ops, pick(ops)].sort(() => Math.random() - 0.5);
  for (let i = 0; out.length < ROUND_SIZE && i < 50; i++) {
    const slot = out.length;
    let item: RoundItem;
    if (step >= 1 && slot === 2) {
      // Buddy's mistake: a take-away story solved by joining, or the other way round
      const op: Op = Math.random() < 0.6 ? '−' : '+';
      const story = pick(ONE[op])(w);
      item = { mode: 'buddy', story, claimOp: op === '−' ? '+' : '−' };
    } else if (step >= 2) {
      item = { mode: 'two', story: pick(TWO)(w) };
    } else {
      item = { mode: step === 1 ? 'build' : 'choose', story: pick(ONE[opOrder[slot % opOrder.length]])(w) };
    }
    if (usedIds.has(item.story.id)) continue;
    usedIds.add(item.story.id);
    out.push(item);
  }
  return out;
}

export const _test = { ONE, TWO, subNums, addNums, bigMul, divNums, herP };
