// src/room/models.ts
// Stand-in 3D models built from simple shapes, in the design system's smooth soft-toy style.
// They get replaced one by one with Rick's Blender models (.glb) later; the rest of the app
// only calls buildItem() and buildBuddy(), so swapping them in touches this file only.

import * as THREE from 'three';
import type { ItemType } from '../game/catalog';
import { P, itemDef } from '../game/catalog';
import type { BuddyKind } from '../game/state';

// Three-step toon shading: soft bands instead of realistic gradients.
let gradient: THREE.DataTexture | null = null;
function toonGradient(): THREE.DataTexture {
  if (!gradient) {
    gradient = new THREE.DataTexture(new Uint8Array([110, 190, 255]), 3, 1, THREE.RedFormat);
    gradient.minFilter = THREE.NearestFilter;
    gradient.magFilter = THREE.NearestFilter;
    gradient.generateMipmaps = false;
    gradient.needsUpdate = true;
  }
  return gradient;
}

const matCache = new Map<string, THREE.MeshToonMaterial>();
export function mat(color: string): THREE.MeshToonMaterial {
  let m = matCache.get(color);
  if (!m) {
    m = new THREE.MeshToonMaterial({ color, gradientMap: toonGradient() });
    matCache.set(color, m);
  }
  return m;
}

function mesh(geo: THREE.BufferGeometry, material: THREE.Material, x = 0, y = 0, z = 0): THREE.Mesh {
  const m = new THREE.Mesh(geo, material);
  m.position.set(x, y, z);
  return m;
}

/** A box with rounded edges, so furniture looks soft rather than sharp. */
function softBox(w: number, h: number, d: number, r: number): THREE.BufferGeometry {
  const shape = new THREE.Shape();
  const x = -w / 2 + r, y = -h / 2 + r, ww = w - 2 * r, hh = h - 2 * r;
  shape.moveTo(x, y - r);
  shape.lineTo(x + ww, y - r);
  shape.quadraticCurveTo(x + ww + r, y - r, x + ww + r, y);
  shape.lineTo(x + ww + r, y + hh);
  shape.quadraticCurveTo(x + ww + r, y + hh + r, x + ww, y + hh + r);
  shape.lineTo(x, y + hh + r);
  shape.quadraticCurveTo(x - r, y + hh + r, x - r, y + hh);
  shape.lineTo(x - r, y);
  shape.quadraticCurveTo(x - r, y - r, x, y - r);
  const geo = new THREE.ExtrudeGeometry(shape, { depth: d - 2 * r, bevelEnabled: true, bevelSize: r, bevelThickness: r, bevelSegments: 3, curveSegments: 4 });
  geo.translate(0, 0, -(d - 2 * r) / 2);
  return geo;
}

export interface BuiltItem {
  group: THREE.Group;
  /** Materials that follow the item's chosen color */
  tinted: THREE.Mesh[];
  /** Per-frame animation (fish swimming, kitty's tail) */
  animate?: (t: number) => void;
}

export function buildItem(type: ItemType, colorIndex: number): BuiltItem {
  const def = itemDef(type);
  const c = def.colors[colorIndex % def.colors.length];
  const g = new THREE.Group();
  const tinted: THREE.Mesh[] = [];
  const add = (m: THREE.Mesh, tint = false) => { g.add(m); if (tint) tinted.push(m); return m; };
  let animate: BuiltItem['animate'];

  switch (type) {
    case 'rug': {
      const r1 = add(mesh(new THREE.CylinderGeometry(0.95, 0.95, 0.03, 40), mat(c), 0, 0.016, 0), true);
      r1.receiveShadow = true;
      add(mesh(new THREE.CylinderGeometry(0.66, 0.66, 0.034, 40), mat(P.paper), 0, 0.018, 0)).receiveShadow = true;
      add(mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.038, 32), mat(c), 0, 0.02, 0), true).receiveShadow = true;
      break;
    }
    case 'plant': {
      add(mesh(new THREE.CylinderGeometry(0.24, 0.18, 0.38, 20), mat(c), 0, 0.19, 0), true);
      add(mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.03, 20), mat(P.paw), 0, 0.38, 0));
      const leaf = mat(P.grass), leaf2 = mat(P.grassDeep);
      ([[0, 0.66, 0, 0.24, leaf], [0.15, 0.53, 0.08, 0.17, leaf2], [-0.14, 0.55, -0.06, 0.18, leaf], [0.04, 0.86, -0.04, 0.15, leaf2]] as const)
        .forEach(([x, y, z, r, m]) => add(mesh(new THREE.SphereGeometry(r, 16, 12), m, x, y, z)));
      break;
    }
    case 'beanbag': {
      const b = add(mesh(new THREE.SphereGeometry(0.44, 28, 20), mat(c), 0, 0.25, 0), true);
      b.scale.set(1, 0.58, 1);
      const top = add(mesh(new THREE.SphereGeometry(0.3, 24, 16), mat(c), -0.03, 0.43, -0.12), true);
      top.scale.set(1, 0.55, 0.85);
      break;
    }
    case 'lamp': {
      const metal = mat(P.ink);
      add(mesh(new THREE.CylinderGeometry(0.18, 0.22, 0.06, 20), metal, 0, 0.03, 0));
      add(mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.25, 10), metal, 0, 0.66, 0));
      add(mesh(new THREE.SphereGeometry(0.1, 12, 10), new THREE.MeshBasicMaterial({ color: '#FFF4C2' }), 0, 1.28, 0));
      const shade = new THREE.MeshToonMaterial({ color: c, gradientMap: toonGradient(), side: THREE.DoubleSide });
      add(mesh(new THREE.CylinderGeometry(0.15, 0.32, 0.38, 24, 1, true), shade, 0, 1.38, 0), true);
      break;
    }
    case 'table': {
      add(mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.08, 28), mat(c), 0, 0.56, 0), true);
      add(mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.52, 12), mat(P.wood), 0, 0.27, 0));
      add(mesh(new THREE.CylinderGeometry(0.22, 0.26, 0.04, 20), mat(P.wood), 0, 0.02, 0));
      add(mesh(new THREE.CylinderGeometry(0.08, 0.07, 0.15, 16), mat(P.tomato), 0.13, 0.67, 0.05));
      add(mesh(softBox(0.26, 0.05, 0.19, 0.02), mat(P.sun), -0.12, 0.625, -0.06));
      break;
    }
    case 'shelf': {
      add(mesh(softBox(0.86, 1.55, 0.42, 0.05), mat(c), 0, 0.775, -0.24), true);
      const inner = mat('#F1E4D2');
      [0.35, 0.85, 1.32].forEach((y) => add(mesh(new THREE.BoxGeometry(0.72, 0.36, 0.06), inner, 0, y, -0.02)));
      const books = [P.tomato, P.cobalt, P.sun, P.teal, P.grape];
      [0.35, 0.85, 1.32].forEach((y, row) => {
        let x = -0.3;
        for (let k = 0; k < 5; k++) {
          const w = 0.07 + ((k + row) % 3) * 0.025, h = 0.22 + ((k * 7 + row) % 3) * 0.04;
          if (x + w > 0.32) break;
          add(mesh(softBox(w, h, 0.22, 0.01), mat(books[(k + row * 2) % books.length]), x + w / 2, y - 0.17 + h / 2, -0.12));
          x += w + 0.02;
        }
      });
      break;
    }
    case 'fishbowl': {
      add(mesh(new THREE.CylinderGeometry(0.2, 0.26, 0.55, 20), mat(c), 0, 0.275, 0), true);
      add(mesh(new THREE.SphereGeometry(0.3, 28, 20), new THREE.MeshToonMaterial({ color: '#BDEBFF', transparent: true, opacity: 0.45, depthWrite: false, gradientMap: toonGradient() }), 0, 0.84, 0));
      const fish = new THREE.Group();
      fish.position.y = 0.82;
      const body = mesh(new THREE.SphereGeometry(0.07, 14, 10), mat('#FF9F45'), 0.13, 0, 0);
      body.scale.set(1.5, 1, 0.7);
      const tail = mesh(new THREE.ConeGeometry(0.05, 0.08, 8), mat('#FF9F45'), 0.03, 0, 0);
      tail.rotation.z = Math.PI / 2;
      fish.add(body, tail);
      g.add(fish);
      animate = (t) => { fish.rotation.y = t * 1.2; fish.position.y = 0.82 + Math.sin(t * 2) * 0.03; };
      break;
    }
    case 'bed': {
      add(mesh(softBox(0.92, 0.28, 1.9, 0.06), mat(P.wood), 0, 0.16, 0));
      add(mesh(softBox(0.92, 0.85, 0.12, 0.05), mat(c), 0, 0.45, -0.92), true);
      add(mesh(softBox(0.86, 0.14, 1.8, 0.05), mat(P.white), 0, 0.37, 0));
      add(mesh(softBox(0.6, 0.13, 0.32, 0.06), mat(P.paper), 0, 0.5, -0.66));
      add(mesh(softBox(0.9, 0.09, 1.15, 0.04), mat(c), 0, 0.47, 0.3), true);
      break;
    }
    case 'kitty': {
      const fur = mat(c), dark = mat(P.ink), pink = mat('#FF8FAB');
      const body = add(mesh(new THREE.SphereGeometry(0.26, 24, 18), fur, 0, 0.24, -0.04), true);
      body.scale.set(0.9, 1, 1.15);
      add(mesh(new THREE.SphereGeometry(0.2, 24, 18), fur, 0, 0.56, 0.08), true);
      [-1, 1].forEach((s) => {
        const e = add(mesh(new THREE.ConeGeometry(0.07, 0.14, 12), fur, s * 0.11, 0.74, 0.08), true);
        e.rotation.z = -s * 0.25;
        add(mesh(new THREE.SphereGeometry(0.03, 10, 8), dark, s * 0.075, 0.59, 0.26));
      });
      add(mesh(new THREE.SphereGeometry(0.022, 10, 8), pink, 0, 0.53, 0.28));
      const tailG = new THREE.Group();
      tailG.position.set(0, 0.14, -0.3);
      const tl = mesh(new THREE.CapsuleGeometry(0.035, 0.36, 4, 8), fur, 0, 0.2, 0);
      tailG.add(tl);
      tailG.rotation.x = -0.4;
      tinted.push(tl);
      g.add(tailG);
      animate = (t) => { tailG.rotation.z = Math.sin(t * 2.4) * 0.45; };
      break;
    }
  }
  g.traverse((o) => {
    if ((o as THREE.Mesh).isMesh) {
      o.castShadow = !def.floor;
      o.receiveShadow = true;
    }
  });
  return { group: g, tinted, animate };
}

export function recolor(built: BuiltItem, type: ItemType, colorIndex: number): void {
  const def = itemDef(type);
  const c = def.colors[colorIndex % def.colors.length];
  for (const m of built.tinted) {
    const old = m.material as THREE.MeshToonMaterial;
    m.material = old.side === THREE.DoubleSide
      ? new THREE.MeshToonMaterial({ color: c, gradientMap: toonGradient(), side: THREE.DoubleSide })
      : mat(c);
  }
}

// ---------------- Buddy ----------------

export interface BuiltBuddy {
  root: THREE.Group;
  /** The part that bounces and squashes */
  body: THREE.Group;
  eyes: THREE.Object3D[];
  /** Boy/girl details, toggled by setKind */
  boyDetail: THREE.Object3D;
  girlDetail: THREE.Object3D;
}

/**
 * Stand-in Buddy matching the logo and the 3D turnaround: pear-shaped head that flows into
 * a round body, big warm snout with a soft nose patch, small round ears, big eyes.
 */
export function buildBuddy(kind: BuddyKind): BuiltBuddy {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const fur = mat(P.caramel), furDeep = mat(P.caramelDeep), cream = mat(P.cream), nose = mat(P.snoutNose),
    paw = mat(P.paw), pupil = mat(P.pupil), white = mat(P.eyeWhite);

  // body and belly
  const torso = mesh(new THREE.SphereGeometry(0.34, 32, 24), fur, 0, 0.36, 0);
  torso.scale.set(1, 1.05, 0.9);
  body.add(torso);
  const belly = mesh(new THREE.SphereGeometry(0.24, 32, 24), cream, 0, 0.34, 0.2);
  belly.scale.set(1, 1.15, 0.5);
  body.add(belly);
  // feet and arms
  [-1, 1].forEach((s) => {
    const foot = mesh(new THREE.SphereGeometry(0.11, 18, 12), paw, s * 0.15, 0.05, 0.06);
    foot.scale.set(1, 0.55, 1.3);
    body.add(foot);
    const arm = mesh(new THREE.CapsuleGeometry(0.07, 0.16, 6, 12), fur, s * 0.34, 0.38, 0.03);
    arm.rotation.z = s * 0.35;
    body.add(arm);
    body.add(mesh(new THREE.SphereGeometry(0.075, 14, 10), paw, s * 0.38, 0.27, 0.05));
  });

  // head: pear shape (narrower dome on top of full cheeks)
  const head = new THREE.Group();
  head.position.set(0, 0.78, 0.02);
  body.add(head);
  const cheeks = mesh(new THREE.SphereGeometry(0.3, 32, 24), fur, 0, 0, 0);
  cheeks.scale.set(1.14, 0.86, 0.95);
  head.add(cheeks);
  const dome = mesh(new THREE.SphereGeometry(0.24, 32, 24), fur, 0, 0.12, -0.02);
  dome.scale.set(1, 1, 0.95);
  head.add(dome);
  [-1, 1].forEach((s) => {
    const ear = mesh(new THREE.SphereGeometry(0.075, 16, 12), furDeep, s * 0.17, 0.32, -0.04);
    ear.scale.set(1, 1, 0.6);
    head.add(ear);
    const inner = mesh(new THREE.SphereGeometry(0.042, 12, 10), paw, s * 0.17, 0.32, 0.0);
    inner.scale.set(1, 1, 0.4);
    head.add(inner);
  });
  // snout
  const snout = mesh(new THREE.SphereGeometry(0.23, 32, 24), cream, 0, -0.07, 0.19);
  snout.scale.set(1.18, 0.95, 0.88);
  head.add(snout);
  const nosePatch = mesh(new THREE.SphereGeometry(0.11, 24, 16), nose, 0, 0.02, 0.35);
  nosePatch.scale.set(1.3, 0.72, 0.5);
  head.add(nosePatch);
  [-1, 1].forEach((s) => {
    const n = mesh(new THREE.SphereGeometry(0.026, 10, 8), pupil, s * 0.075, 0.045, 0.39);
    n.scale.set(1.2, 0.9, 0.6);
    head.add(n);
  });
  const smile = mesh(new THREE.TorusGeometry(0.07, 0.013, 8, 20, Math.PI), paw, 0, -0.13, 0.39);
  smile.rotation.z = Math.PI;
  head.add(smile);
  // eyes
  const eyes: THREE.Object3D[] = [];
  [-1, 1].forEach((s) => {
    const eg = new THREE.Group();
    eg.position.set(s * 0.17, 0.13, 0.2);
    const w = mesh(new THREE.SphereGeometry(0.075, 18, 14), white);
    w.scale.set(0.95, 1.05, 0.6);
    eg.add(w);
    eg.add(mesh(new THREE.SphereGeometry(0.052, 16, 12), pupil, -s * 0.012, -0.005, 0.03));
    eg.add(mesh(new THREE.SphereGeometry(0.016, 8, 6), white, -s * 0.0, 0.02, 0.07));
    head.add(eg);
    eyes.push(eg);
    const brow = mesh(new THREE.CapsuleGeometry(0.015, 0.07, 4, 8), paw, s * 0.17, 0.24, 0.2);
    brow.rotation.z = Math.PI / 2 + s * 0.2;
    head.add(brow);
  });

  // boy: small hair tuft. girl: lashes.
  const boyDetail = new THREE.Group();
  [-0.035, 0, 0.035].forEach((x, i) => {
    const t = mesh(new THREE.ConeGeometry(0.03, 0.09 + (i === 1 ? 0.03 : 0), 10), furDeep, x, 0.37, 0.0);
    t.rotation.z = -x * 6;
    boyDetail.add(t);
  });
  head.add(boyDetail);
  const girlDetail = new THREE.Group();
  [-1, 1].forEach((s) => {
    [0, 1, 2].forEach((k) => {
      const l = mesh(new THREE.CapsuleGeometry(0.008, 0.035, 3, 6), pupil, s * (0.225 + k * 0.012), 0.185 - k * 0.025, 0.215);
      l.rotation.z = s * (0.9 + k * 0.35);
      girlDetail.add(l);
    });
  });
  head.add(girlDetail);
  boyDetail.visible = kind === 'boy';
  girlDetail.visible = kind === 'girl';

  root.traverse((o) => { if ((o as THREE.Mesh).isMesh) { o.castShadow = true; o.receiveShadow = false; } });
  root.scale.setScalar(1.3);
  root.userData.buddy = true;
  return { root, body, eyes, boyDetail, girlDetail };
}
