// src/room/RoomScene.ts
// The 3D room: floor, walls, furniture, and Buddy wandering around.
// Plain three.js, no React. The React screen (RoomHome) owns the game state and tells the scene
// what to show; the scene reports taps back through callbacks.

import * as THREE from 'three';
import type { ItemType } from '../game/catalog';
import { P, itemDef } from '../game/catalog';
import type { BuddyKind, PlacedItem } from '../game/state';
import { GRID, cellsOf, footprint } from '../game/state';
import type { BuiltBuddy, BuiltItem } from './models';
import { buildBuddy, buildItem, mat, recolor } from './models';

const HALF = GRID / 2;

export interface RoomCallbacks {
  onSelectItem: (id: number | null) => void;
  onBuddyTap: () => void;
  /** While placing: the floor was tapped (or hovered with a mouse); x/z is where the item's corner would go */
  onFloorTap: (x: number, z: number) => void;
}

interface Ghost {
  type: ItemType;
  rot: number;
  group: THREE.Group;
  cell: { x: number; z: number } | null;
}

function canvasTexture(w: number, h: number, draw: (g: CanvasRenderingContext2D) => void): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  draw(c.getContext('2d')!);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

function placeGroup(g: THREE.Object3D, type: ItemType, x: number, z: number, rot: number): void {
  const [w, d] = footprint(type, rot);
  g.position.set(x + w / 2 - HALF, 0, z + d / 2 - HALF);
  g.rotation.y = -rot * Math.PI / 2;
}

export class RoomScene {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100);
  private floor!: THREE.Mesh;
  private itemRoot = new THREE.Group();
  private live = new Map<number, { item: PlacedItem; built: BuiltItem }>();
  private buddy: BuiltBuddy;
  private buddyCell = { x: 4, z: 5 };
  private path: { x: number; z: number }[] = [];
  private nextWander = 0;
  private hopStart = -1;
  private blinkAt = 0;
  private highlight: THREE.Mesh;
  private ghost: Ghost | null = null;
  private selectedId: number | null = null;
  private frame = 0;
  private running = true;
  private resizeObs: ResizeObserver;
  private downAt: { x: number; y: number } | null = null;
  private ray = new THREE.Raycaster();
  private ndc = new THREE.Vector2();
  private reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

  constructor(private canvas: HTMLCanvasElement, private cb: RoomCallbacks, kind: BuddyKind) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.camera.position.set(12, 11, 12);
    this.camera.lookAt(0, 0.6, 0);

    this.scene.add(new THREE.HemisphereLight(0xffffff, 0xf3d9b8, 1.6));
    const sun = new THREE.DirectionalLight(0xfff1dc, 1.9);
    sun.position.set(6, 10, 7);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    Object.assign(sun.shadow.camera, { left: -7, right: 7, top: 7, bottom: -7, near: 1, far: 30 });
    sun.shadow.bias = -0.002;
    sun.shadow.radius = 4;
    this.scene.add(sun);

    this.buildRoom();
    this.scene.add(this.itemRoot);

    this.buddy = buildBuddy(kind);
    this.scene.add(this.buddy.root);
    this.placeBuddyAt(this.buddyCell);
    this.buddy.root.rotation.y = Math.PI / 4;

    this.highlight = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({ color: P.teal, transparent: true, opacity: 0.45, depthWrite: false }),
    );
    this.highlight.rotation.x = -Math.PI / 2;
    this.highlight.position.y = 0.05;
    this.highlight.visible = false;
    this.scene.add(this.highlight);

    canvas.addEventListener('pointerdown', this.onDown);
    canvas.addEventListener('pointerup', this.onUp);
    canvas.addEventListener('pointermove', this.onMove);
    this.resizeObs = new ResizeObserver(() => this.resize());
    this.resizeObs.observe(canvas.parentElement ?? canvas);
    document.addEventListener('visibilitychange', this.onVisibility);
    this.resize();
    this.frame = requestAnimationFrame(this.loop);
  }

  // ---------- room shell ----------

  private buildRoom(): void {
    const floorTex = canvasTexture(512, 512, (g) => {
      for (let i = 0; i < 8; i++) {
        g.fillStyle = i % 2 ? '#D9A06A' : '#E2AD78';
        g.fillRect(0, i * 64, 512, 64);
        g.fillStyle = 'rgba(122,66,32,0.22)';
        g.fillRect(0, i * 64, 512, 3);
        const off = (i * 192) % 512;
        g.fillRect(off, i * 64, 3, 64);
        g.fillRect((off + 256) % 512, i * 64, 3, 64);
      }
    });
    this.floor = new THREE.Mesh(new THREE.PlaneGeometry(GRID, GRID), new THREE.MeshToonMaterial({ map: floorTex }));
    this.floor.rotation.x = -Math.PI / 2;
    this.floor.receiveShadow = true;
    this.scene.add(this.floor);
    const slab = new THREE.Mesh(new THREE.BoxGeometry(GRID + 0.5, 0.45, GRID + 0.5), mat(P.woodDeep));
    slab.position.y = -0.226;
    this.scene.add(slab);

    const wallpaper = (base: string, dot: string) => {
      const t = canvasTexture(256, 256, (g) => {
        g.fillStyle = base;
        g.fillRect(0, 0, 256, 256);
        g.fillStyle = dot;
        for (let y = 0; y < 8; y++)
          for (let x = 0; x < 8; x++) {
            g.beginPath();
            g.arc(x * 32 + (y % 2 ? 16 : 0) + 8, y * 32 + 16, 4.5, 0, 7);
            g.fill();
          }
      });
      t.wrapS = t.wrapT = THREE.RepeatWrapping;
      t.repeat.set(3, 1.3);
      return new THREE.MeshToonMaterial({ map: t });
    };
    const back = new THREE.Mesh(new THREE.BoxGeometry(GRID + 0.5, 3.4, 0.25), wallpaper(P.cobaltSoft, '#DCE6F8'));
    back.position.set(0, 1.7, -HALF - 0.125);
    const left = new THREE.Mesh(new THREE.BoxGeometry(0.25, 3.4, GRID + 0.25), wallpaper(P.sunSoft, '#FFF0C8'));
    left.position.set(-HALF - 0.125, 1.7, 0.125);
    back.receiveShadow = left.receiveShadow = true;
    this.scene.add(back, left);

    const trim = mat(P.white);
    const add = (geo: THREE.BufferGeometry, m: THREE.Material, x: number, y: number, z: number) => {
      const o = new THREE.Mesh(geo, m);
      o.position.set(x, y, z);
      this.scene.add(o);
      return o;
    };
    add(new THREE.BoxGeometry(GRID + 0.25, 0.18, 0.08), trim, 0.125, 0.09, -HALF + 0.04);
    add(new THREE.BoxGeometry(0.08, 0.18, GRID), trim, -HALF + 0.04, 0.09, 0.125);
    // window with sky
    add(new THREE.BoxGeometry(2.1, 1.5, 0.06), trim, 1.2, 1.95, -HALF + 0.02);
    add(new THREE.BoxGeometry(1.85, 1.25, 0.07), new THREE.MeshBasicMaterial({ color: '#BFE6F5' }), 1.2, 1.95, -HALF + 0.03);
    add(new THREE.BoxGeometry(0.08, 1.25, 0.09), trim, 1.2, 1.95, -HALF + 0.05);
    add(new THREE.BoxGeometry(1.85, 0.08, 0.09), trim, 1.2, 1.95, -HALF + 0.05);
    const cloud = new THREE.MeshBasicMaterial({ color: '#FFFFFF' });
    ([[0.62, 2.25, 0.16], [0.82, 2.3, 0.2], [1.02, 2.24, 0.14], [1.6, 1.66, 0.12], [1.78, 1.7, 0.16]] as const).forEach(([x, y, r]) => {
      const c = add(new THREE.SphereGeometry(r, 12, 10), cloud, x, y, -HALF + 0.07);
      c.scale.z = 0.3;
    });
    // a framed star on the left wall
    add(new THREE.BoxGeometry(0.06, 1.0, 1.0), mat(P.sun), -HALF + 0.02, 1.95, -1.3);
    add(new THREE.BoxGeometry(0.07, 0.8, 0.8), mat(P.white), -HALF + 0.03, 1.95, -1.3);
    const star = new THREE.Shape();
    for (let i = 0; i < 10; i++) {
      const a = -Math.PI / 2 + (i * Math.PI) / 5, r = i % 2 ? 0.13 : 0.3;
      if (i === 0) star.moveTo(Math.cos(a) * r, -Math.sin(a) * r);
      else star.lineTo(Math.cos(a) * r, -Math.sin(a) * r);
    }
    const starMesh = add(new THREE.ShapeGeometry(star), new THREE.MeshBasicMaterial({ color: P.sun }), -HALF + 0.075, 1.95, -1.3);
    starMesh.rotation.y = Math.PI / 2;
  }

  // ---------- items ----------

  setRoom(room: PlacedItem[]): void {
    const keep = new Set(room.map((r) => r.id));
    for (const [id, entry] of this.live) {
      if (!keep.has(id)) {
        this.itemRoot.remove(entry.built.group);
        this.live.delete(id);
      }
    }
    for (const it of room) {
      const cur = this.live.get(it.id);
      if (!cur) {
        const built = buildItem(it.type, it.color);
        built.group.userData.itemId = it.id;
        placeGroup(built.group, it.type, it.x, it.z, it.rot);
        this.itemRoot.add(built.group);
        this.live.set(it.id, { item: { ...it }, built });
      } else {
        if (cur.item.color !== it.color) recolor(cur.built, it.type, it.color);
        placeGroup(cur.built.group, it.type, it.x, it.z, it.rot);
        cur.item = { ...it };
      }
    }
    this.ensureBuddyFree();
    this.setSelected(this.selectedId);
  }

  setSelected(id: number | null): void {
    this.selectedId = id;
    const e = id != null ? this.live.get(id) : undefined;
    if (!e) {
      this.highlight.visible = !!this.ghost && this.highlight.visible;
      if (!this.ghost) this.highlight.visible = false;
      return;
    }
    this.showHighlight(e.item.type, e.item.x, e.item.z, e.item.rot, true);
  }

  private showHighlight(type: ItemType, x: number, z: number, rot: number, ok: boolean): void {
    const [w, d] = footprint(type, rot);
    this.highlight.scale.set(w, d, 1);
    this.highlight.position.x = x + w / 2 - HALF;
    this.highlight.position.z = z + d / 2 - HALF;
    (this.highlight.material as THREE.MeshBasicMaterial).color.set(ok ? P.teal : P.sun);
    this.highlight.visible = true;
  }

  setBuddyKind(kind: BuddyKind): void {
    this.buddy.boyDetail.visible = kind === 'boy';
    this.buddy.girlDetail.visible = kind === 'girl';
  }

  // ---------- placing ----------

  /** Show a see-through copy of an item that follows the finger until it is placed. */
  startGhost(type: ItemType, rot: number, color: number, hideId?: number): void {
    this.stopGhost();
    const built = buildItem(type, color);
    built.group.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.isMesh) {
        m.material = (m.material as THREE.Material).clone();
        (m.material as THREE.Material).transparent = true;
        (m.material as THREE.Material).opacity = 0.6;
        m.castShadow = false;
      }
    });
    built.group.visible = false;
    this.scene.add(built.group);
    this.ghost = { type, rot, group: built.group, cell: null };
    if (hideId != null) {
      const e = this.live.get(hideId);
      if (e) e.built.group.visible = false;
    }
  }

  updateGhost(x: number, z: number, rot: number, ok: boolean): void {
    if (!this.ghost) return;
    this.ghost.rot = rot;
    this.ghost.cell = { x, z };
    placeGroup(this.ghost.group, this.ghost.type, x, z, rot);
    this.ghost.group.visible = true;
    this.showHighlight(this.ghost.type, x, z, rot, ok);
  }

  stopGhost(): void {
    if (this.ghost) {
      this.scene.remove(this.ghost.group);
      this.ghost = null;
    }
    for (const e of this.live.values()) e.built.group.visible = true;
    this.highlight.visible = false;
    if (this.selectedId != null) this.setSelected(this.selectedId);
  }

  /** The tile an item's corner would land on for a point on the floor. */
  private cellFor(p: THREE.Vector3, type: ItemType, rot: number) {
    const [w, d] = footprint(type, rot);
    const x = Math.max(0, Math.min(GRID - w, Math.round(p.x + HALF - w / 2)));
    const z = Math.max(0, Math.min(GRID - d, Math.round(p.z + HALF - d / 2)));
    return { x, z };
  }

  // ---------- Buddy ----------

  hop(): void {
    this.hopStart = performance.now();
  }

  /** Buddy's head position in canvas pixels, for placing the speech bubble. */
  buddyScreenPos(): { x: number; y: number } {
    const v = this.buddy.root.position.clone();
    v.y += 1.75;
    v.project(this.camera);
    const r = this.canvas.getBoundingClientRect();
    return { x: ((v.x + 1) / 2) * r.width, y: ((1 - v.y) / 2) * r.height };
  }

  private occupied(): Set<string> {
    const s = new Set<string>();
    for (const { item } of this.live.values())
      if (!itemDef(item.type).floor) cellsOf(item.type, item.x, item.z, item.rot).forEach((c) => s.add(c));
    return s;
  }

  private placeBuddyAt(c: { x: number; z: number }) {
    this.buddy.root.position.set(c.x - HALF + 0.5, 0, c.z - HALF + 0.5);
  }

  private ensureBuddyFree(): void {
    const occ = this.occupied();
    if (!occ.has(`${this.buddyCell.x},${this.buddyCell.z}`)) return;
    let best: { x: number; z: number } | null = null, bestD = Infinity;
    for (let x = 0; x < GRID; x++)
      for (let z = 0; z < GRID; z++) {
        if (occ.has(`${x},${z}`)) continue;
        const d = Math.hypot(x - this.buddyCell.x, z - this.buddyCell.z);
        if (d < bestD) { bestD = d; best = { x, z }; }
      }
    if (best) {
      this.buddyCell = best;
      this.path = [];
      this.placeBuddyAt(best);
    }
  }

  private findPath(to: { x: number; z: number }): { x: number; z: number }[] {
    const occ = this.occupied();
    const key = (c: { x: number; z: number }) => `${c.x},${c.z}`;
    const prev = new Map<string, string | null>([[key(this.buddyCell), null]]);
    const q = [this.buddyCell];
    while (q.length) {
      const c = q.shift()!;
      if (c.x === to.x && c.z === to.z) {
        const out: { x: number; z: number }[] = [];
        let k: string | null = key(c);
        while (k) {
          const [x, z] = k.split(',').map(Number);
          out.unshift({ x, z });
          k = prev.get(k) ?? null;
        }
        return out.slice(1);
      }
      for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const n = { x: c.x + dx, z: c.z + dz };
        if (n.x < 0 || n.z < 0 || n.x >= GRID || n.z >= GRID) continue;
        const k = key(n);
        if (prev.has(k) || occ.has(k)) continue;
        prev.set(k, key(c));
        q.push(n);
      }
    }
    return [];
  }

  // ---------- input ----------

  private setRay(e: PointerEvent): void {
    const r = this.canvas.getBoundingClientRect();
    this.ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    this.ray.setFromCamera(this.ndc, this.camera);
  }

  private onDown = (e: PointerEvent) => {
    this.downAt = { x: e.clientX, y: e.clientY };
  };

  private onMove = (e: PointerEvent) => {
    if (!this.ghost || e.pointerType === 'touch') return;
    this.setRay(e);
    const hit = this.ray.intersectObject(this.floor)[0];
    if (!hit) return;
    const c = this.cellFor(hit.point, this.ghost.type, this.ghost.rot);
    if (!this.ghost.cell || c.x !== this.ghost.cell.x || c.z !== this.ghost.cell.z) this.cb.onFloorTap(c.x, c.z);
  };

  private onUp = (e: PointerEvent) => {
    if (!this.downAt) return;
    const moved = Math.hypot(e.clientX - this.downAt.x, e.clientY - this.downAt.y);
    this.downAt = null;
    if (moved > 12) return;
    this.setRay(e);
    if (this.ghost) {
      const hit = this.ray.intersectObject(this.floor)[0];
      if (hit) {
        const c = this.cellFor(hit.point, this.ghost.type, this.ghost.rot);
        this.cb.onFloorTap(c.x, c.z);
      }
      return;
    }
    if (this.ray.intersectObject(this.buddy.root, true).length) {
      this.cb.onBuddyTap();
      return;
    }
    const hits = this.ray.intersectObjects(this.itemRoot.children, true);
    for (const h of hits) {
      let o: THREE.Object3D | null = h.object;
      while (o && o.userData.itemId === undefined) o = o.parent;
      if (o) {
        this.cb.onSelectItem(o.userData.itemId as number);
        return;
      }
    }
    this.cb.onSelectItem(null);
  };

  private onVisibility = () => {
    if (document.visibilityState === 'visible' && this.running) {
      cancelAnimationFrame(this.frame);
      this.frame = requestAnimationFrame(this.loop);
    }
  };

  private resize(): void {
    const el = this.canvas.parentElement ?? this.canvas;
    const w = el.clientWidth || 1, h = el.clientHeight || 1, aspect = w / h;
    this.renderer.setSize(w, h, false);
    // fit the whole room: wider screens show it bigger, tall screens zoom out
    const half = Math.max(5.6, 6.2 / aspect);
    Object.assign(this.camera, { left: -half * aspect, right: half * aspect, top: half, bottom: -half });
    this.camera.updateProjectionMatrix();
  }

  // ---------- animation ----------

  private turnTo(a: number): void {
    let d = a - this.buddy.root.rotation.y;
    d = Math.atan2(Math.sin(d), Math.cos(d));
    this.buddy.root.rotation.y += d * 0.15;
  }

  private loop = (now: number) => {
    if (!this.running) return;
    if (document.visibilityState === 'hidden') return; // resumes on visibilitychange
    const t = now / 1000;
    const b = this.buddy.body, root = this.buddy.root;

    if (this.path.length) {
      const c = this.path[0];
      const tx = c.x - HALF + 0.5, tz = c.z - HALF + 0.5;
      const dx = tx - root.position.x, dz = tz - root.position.z, dist = Math.hypot(dx, dz), sp = 0.032;
      if (dist < sp) {
        root.position.set(tx, 0, tz);
        this.buddyCell = this.path.shift()!;
      } else {
        root.position.x += (dx / dist) * sp;
        root.position.z += (dz / dist) * sp;
        this.turnTo(Math.atan2(dx, dz));
      }
      b.position.y = Math.abs(Math.sin(t * 10)) * 0.05;
      b.rotation.z = Math.sin(t * 10) * 0.05;
    } else {
      this.turnTo(Math.PI / 4);
      b.rotation.z *= 0.85;
      b.position.y = Math.sin(t * 2.2) * 0.02;
      if (now > this.nextWander && !this.ghost && this.hopStart < 0) {
        const occ = this.occupied();
        const free: { x: number; z: number }[] = [];
        for (let x = 0; x < GRID; x++) for (let z = 0; z < GRID; z++) if (!occ.has(`${x},${z}`)) free.push({ x, z });
        if (free.length) this.path = this.findPath(free[Math.floor(Math.random() * free.length)]).slice(0, 5);
        this.nextWander = now + 4000 + Math.random() * 5000;
      }
    }
    if (this.hopStart >= 0) {
      const k = (now - this.hopStart) / 650;
      if (k >= 1) {
        this.hopStart = -1;
        b.rotation.y = 0;
        b.scale.set(1, 1, 1);
      } else {
        b.position.y = Math.sin(k * Math.PI) * 0.5;
        b.scale.set(1 + Math.sin(k * Math.PI * 2) * 0.06, 1 - Math.sin(k * Math.PI * 2) * 0.06, 1);
        if (!this.reduceMotion) b.rotation.y = k * Math.PI * 2;
      }
    } else {
      b.scale.set(1, 1 + Math.sin(t * 2.2) * 0.012, 1);
    }
    // blink
    const since = now - this.blinkAt;
    const s = since > 0 && since < 140 ? 0.1 : 1;
    this.buddy.eyes.forEach((e) => (e.scale.y = s));
    if (since > 140) this.blinkAt = now + 2200 + Math.random() * 2600;

    for (const { built } of this.live.values()) built.animate?.(t);
    if (this.ghost?.group.visible) this.ghost.group.position.y = 0.06 + Math.sin(t * 5) * 0.03;

    this.renderer.render(this.scene, this.camera);
    this.frame = requestAnimationFrame(this.loop);
  };

  dispose(): void {
    this.running = false;
    cancelAnimationFrame(this.frame);
    this.resizeObs.disconnect();
    document.removeEventListener('visibilitychange', this.onVisibility);
    this.canvas.removeEventListener('pointerdown', this.onDown);
    this.canvas.removeEventListener('pointerup', this.onUp);
    this.canvas.removeEventListener('pointermove', this.onMove);
    this.renderer.dispose();
  }
}

// ---------- thumbnails for Treasures cards ----------

const thumbCache = new Map<string, string>();
let thumbRenderer: THREE.WebGLRenderer | null = null;

/** A transparent PNG of an item, rendered once and cached. */
export function itemThumbnail(type: ItemType, color = 0): string {
  const key = `${type}:${color}`;
  const hit = thumbCache.get(key);
  if (hit) return hit;
  try {
    if (!thumbRenderer) {
      thumbRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
      thumbRenderer.setSize(256, 256, false);
    }
    const sc = new THREE.Scene();
    sc.add(new THREE.HemisphereLight(0xffffff, 0xf3d9b8, 1.8));
    const dl = new THREE.DirectionalLight(0xfff1dc, 1.8);
    dl.position.set(3, 5, 4);
    sc.add(dl);
    const built = buildItem(type, color);
    sc.add(built.group);
    const box = new THREE.Box3().setFromObject(built.group);
    const size = box.getSize(new THREE.Vector3()), ctr = box.getCenter(new THREE.Vector3());
    const cam = new THREE.PerspectiveCamera(28, 1, 0.1, 50);
    const dist = Math.max(size.x, size.y, size.z) * 2.6 + 0.3;
    cam.position.set(ctr.x + dist * 0.62, ctr.y + dist * 0.45, ctr.z + dist * 0.62);
    cam.lookAt(ctr);
    thumbRenderer.render(sc, cam);
    const url = thumbRenderer.domElement.toDataURL('image/png');
    thumbCache.set(key, url);
    return url;
  } catch {
    return '';
  }
}
