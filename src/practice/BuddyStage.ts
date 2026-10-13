// src/practice/BuddyStage.ts
// Buddy on his own small canvas, standing beside the practice card. He never speaks:
// he reacts with poses (hop, think, curious lean, oops shrug) and the page shows emote bubbles.

import * as THREE from 'three';
import { buildBuddy, type BuiltBuddy } from '../room/models';
import type { BuddyKind } from '../game/state';

export type BuddyMood = 'idle' | 'think' | 'curious' | 'happy' | 'oops' | 'thanks';

export class BuddyStage {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(24, 1, 0.1, 50);
  private buddy: BuiltBuddy;
  private head: THREE.Object3D | null;
  private mood: BuddyMood = 'idle';
  private moodAt = 0;
  private blinkAt = 0;
  private frame = 0;
  private resizeObs: ResizeObserver;
  private reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  /** Where Buddy looks: -1 = at the child, 1 = at the work card */
  private look = 1;

  constructor(private canvas: HTMLCanvasElement, kind: BuddyKind, private facing = 1) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.scene.add(new THREE.HemisphereLight(0xffffff, 0xf3d9b8, 1.6));
    const sun = new THREE.DirectionalLight(0xfff1dc, 1.9);
    sun.position.set(2, 6, 4);
    sun.castShadow = true;
    sun.shadow.mapSize.set(512, 512);
    Object.assign(sun.shadow.camera, { left: -2, right: 2, top: 2, bottom: -2, near: 0.5, far: 15 });
    sun.shadow.radius = 6;
    this.scene.add(sun);

    const ground = new THREE.Mesh(new THREE.CircleGeometry(1.2, 40), new THREE.ShadowMaterial({ opacity: 0.18 }));
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.scene.add(ground);

    this.buddy = buildBuddy(kind);
    this.scene.add(this.buddy.root);
    this.head = this.buddy.body.children.find((c) => c.type === 'Group' && c.position.y > 0.7) ?? null;

    this.camera.position.set(0, 1.35, 6.2);
    this.camera.lookAt(0, 0.82, 0);

    this.resizeObs = new ResizeObserver(() => this.resize());
    this.resizeObs.observe(canvas.parentElement ?? canvas);
    this.resize();
    this.frame = requestAnimationFrame(this.loop);
  }

  setKind(kind: BuddyKind): void {
    this.buddy.boyDetail.visible = kind === 'boy';
    this.buddy.girlDetail.visible = kind === 'girl';
  }

  /** Play a reaction. Short ones fall back to idle by themselves. */
  react(mood: BuddyMood): void {
    this.mood = mood;
    this.moodAt = performance.now();
  }

  /** -1 looks toward the child, 1 toward the work */
  lookAt(dir: number): void {
    this.look = dir;
  }

  /** Top of Buddy's head in canvas pixels, for placing emote bubbles */
  headPos(): { x: number; y: number } {
    const v = new THREE.Vector3(0, 1.32, 0).applyMatrix4(this.buddy.root.matrixWorld).project(this.camera);
    const r = this.canvas.getBoundingClientRect();
    return { x: ((v.x + 1) / 2) * r.width, y: ((1 - v.y) / 2) * r.height };
  }

  dispose(): void {
    cancelAnimationFrame(this.frame);
    this.resizeObs.disconnect();
    this.renderer.dispose();
  }

  private resize(): void {
    const el = this.canvas.parentElement ?? this.canvas;
    const w = Math.max(1, el.clientWidth), h = Math.max(1, el.clientHeight);
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    // Fit Buddy's width (he turns, so allow about 1 unit each side), never zooming in past 24°.
    // Then aim the camera so his feet sit about three quarters of the way down the box.
    const dist = 6.2, halfW = 0.78, aspect = w / h;
    const fitV = 2 * Math.atan(Math.tan(Math.atan(halfW / dist)) / aspect) * (180 / Math.PI);
    this.camera.fov = aspect > 1.1 ? 17 : Math.max(24, fitV); // short, wide boxes (portrait layout) get a closer view
    const halfH = dist * Math.tan((this.camera.fov * Math.PI) / 360);
    this.camera.position.set(0, 1.35, dist);
    this.camera.lookAt(0, Math.max(0.82, halfH * 0.5), 0);
    this.camera.updateProjectionMatrix();
  }

  private loop = (now: number): void => {
    const t = now / 1000;
    const b = this.buddy.body;
    const root = this.buddy.root;
    const k = (now - this.moodAt) / 1000;
    const calm = this.reduceMotion ? 0.3 : 1;

    // base turn: three-quarter view toward the work, or toward the child
    const baseYaw = this.facing * (this.look > 0 ? 0.55 : 0.12);
    let yaw = baseYaw, lean = 0, tilt = 0, y = Math.sin(t * 2.2) * 0.015, sx = 1, sy = 1 + Math.sin(t * 2.2) * 0.012, spin = 0;
    let headTilt = Math.sin(t * 0.9) * 0.03, headNod = 0;

    switch (this.mood) {
      case 'happy':
      case 'thanks': {
        const d = this.mood === 'thanks' ? 0.9 : 0.7;
        const q = Math.min(1, k / d);
        y = Math.sin(q * Math.PI) * 0.45;
        sx = 1 + Math.sin(q * Math.PI * 2) * 0.07;
        sy = 1 - Math.sin(q * Math.PI * 2) * 0.07;
        spin = this.reduceMotion ? 0 : q * Math.PI * 2;
        yaw = this.facing * 0.12;
        if (k > d + 0.4) this.mood = 'idle';
        break;
      }
      case 'curious': {
        const q = Math.min(1, k / 0.35);
        lean = 0.16 * q;
        headTilt = 0.22 * q + Math.sin(t * 3) * 0.02;
        if (k > 2.6) this.mood = 'idle';
        break;
      }
      case 'think': {
        headTilt = -0.16 + Math.sin(t * 1.4) * 0.05;
        headNod = 0.08;
        yaw = baseYaw * 0.8;
        if (k > 2.2) this.mood = 'idle';
        break;
      }
      case 'oops': {
        // little shrug and head shake
        const q = Math.min(1, k / 1.1);
        sy = 1 - Math.sin(Math.min(1, k / 0.25) * Math.PI) * 0.06;
        headTilt = Math.sin(q * Math.PI * 4) * 0.18 * (1 - q) * calm;
        headNod = 0.12;
        yaw = this.facing * 0.12;
        if (k > 1.8) this.mood = 'idle';
        break;
      }
    }

    root.rotation.y += ((yaw + spin) - root.rotation.y) * (spin ? 1 : 0.12);
    if (!spin && Math.abs(root.rotation.y) > Math.PI) root.rotation.y = yaw;
    b.position.y = y * calm;
    b.rotation.x += (lean - b.rotation.x) * 0.15;
    b.rotation.z += (tilt - b.rotation.z) * 0.15;
    b.scale.set(sx, sy, 1);
    if (this.head) {
      this.head.rotation.z += (headTilt - this.head.rotation.z) * 0.2;
      this.head.rotation.x += (headNod - this.head.rotation.x) * 0.2;
    }

    const since = now - this.blinkAt;
    const s = since > 0 && since < 140 ? 0.1 : 1;
    this.buddy.eyes.forEach((e) => (e.scale.y = s));
    if (since > 140) this.blinkAt = now + 2200 + Math.random() * 2600;

    this.renderer.render(this.scene, this.camera);
    this.frame = requestAnimationFrame(this.loop);
  };
}
