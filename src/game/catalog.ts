// src/game/catalog.ts
// Everything that can be unlocked in Treasures. Shared by the 3D room and the Treasures sheet.
// Colors come from the design system palette.

export type ItemType =
  | 'rug'
  | 'plant'
  | 'beanbag'
  | 'lamp'
  | 'table'
  | 'shelf'
  | 'fishbowl'
  | 'bed'
  | 'kitty';

export interface CatalogItem {
  type: ItemType;
  /** Stars needed to unlock */
  stars: number;
  /** Footprint in floor tiles (before turning) */
  w: number;
  d: number;
  /** Lies flat on the floor; other things can stand on it */
  floor?: boolean;
  /** Color options, first is the default */
  colors: string[];
  rare?: boolean;
}

export const P = {
  sun: '#FBC426',
  sunDeep: '#D99A0F',
  tomato: '#F64034',
  tomatoDeep: '#C42A22',
  teal: '#169996',
  tealDeep: '#0B7A77',
  cobalt: '#2760BF',
  cobaltDeep: '#1C4790',
  grape: '#6B4BC4',
  caramel: '#DA8A47',
  caramelDeep: '#B96C33',
  cream: '#F0BE82',
  snoutNose: '#B97C52',
  paw: '#7A4220',
  pupil: '#3A2210',
  ink: '#26304A',
  white: '#FFFFFF',
  eyeWhite: '#FBFBF8',
  paper: '#FFF6EA',
  grass: '#5DBB46',
  grassDeep: '#3F9A35',
  sky: '#70BCD6',
  wood: '#C98B55',
  woodDeep: '#9E6436',
  sunSoft: '#FFE6A8',
  tealSoft: '#CDEFEC',
  cobaltSoft: '#C9D8F4',
} as const;

const BRIGHTS = [P.tomato, P.teal, P.sun, P.cobalt, P.grape];

export const CATALOG: CatalogItem[] = [
  { type: 'rug', stars: 3, w: 2, d: 2, floor: true, colors: [P.teal, P.tomato, P.sun, P.cobalt, P.grape] },
  { type: 'plant', stars: 3, w: 1, d: 1, colors: [P.tomato, P.cobalt, P.sun, P.teal, P.white] },
  { type: 'beanbag', stars: 4, w: 1, d: 1, colors: [P.sun, ...BRIGHTS.filter((c) => c !== P.sun)] },
  { type: 'lamp', stars: 5, w: 1, d: 1, colors: [P.cobalt, P.sun, P.tomato, P.teal, P.white] },
  { type: 'table', stars: 6, w: 1, d: 1, colors: [P.white, P.teal, P.tomato, P.sun, P.cobalt] },
  { type: 'shelf', stars: 8, w: 1, d: 1, colors: [P.white, P.sun, P.teal, P.tomato, P.cobalt] },
  { type: 'fishbowl', stars: 10, w: 1, d: 1, colors: [P.teal, P.tomato, P.sun, P.white, P.grape] },
  { type: 'bed', stars: 12, w: 1, d: 2, colors: [P.cobalt, P.teal, P.tomato, P.sun, P.grape] },
  { type: 'kitty', stars: 20, w: 1, d: 1, colors: ['#E58C3A', '#5B4A73', P.white, '#9E9E9E', '#E9C8A0'], rare: true },
];

export const itemDef = (type: ItemType): CatalogItem => CATALOG.find((c) => c.type === type)!;
