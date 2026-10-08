import { DOCUMENT } from '@angular/common';
import { DestroyRef, Injectable, inject, signal } from '@angular/core';

/**
 * One place for everything scroll-related:
 * - `y` and `progress` signals that components read (navbar bar, back-to-top),
 * - smooth scrolling that respects "reduce motion",
 * - opening a job in the "Experience in detail" section from the timeline.
 */
@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly doc = inject(DOCUMENT);
  private readonly win = this.doc.defaultView!;

  /** Current window.scrollY. */
  readonly y = signal(0);
  /** 0 at the top of the page, 1 at the bottom. */
  readonly progress = signal(0);
  /** Viewport height, updated on resize. */
  readonly viewportHeight = signal(this.win.innerHeight);
  /** Id of the job the timeline asked to open. ExperienceDetail listens to this. */
  readonly detailRequest = signal<{ id: string } | null>(null);

  constructor() {
    const update = () => {
      const max = this.doc.documentElement.scrollHeight - this.win.innerHeight;
      this.y.set(this.win.scrollY);
      this.progress.set(max > 0 ? Math.min(1, this.win.scrollY / max) : 0);
      this.viewportHeight.set(this.win.innerHeight);
    };
    update();
    this.win.addEventListener('scroll', update, { passive: true });
    this.win.addEventListener('resize', update, { passive: true });
    inject(DestroyRef).onDestroy(() => {
      this.win.removeEventListener('scroll', update);
      this.win.removeEventListener('resize', update);
    });
  }

  get prefersReducedMotion(): boolean {
    return this.win.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  scrollTo(id: string): void {
    const el = this.doc.getElementById(id);
    el?.scrollIntoView({ behavior: this.prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
  }

  /** Expand an entry in the detail section, then scroll to it once it has opened. */
  openDetail(id: string): void {
    this.detailRequest.set({ id });
    this.win.setTimeout(() => this.scrollTo(id), 60);
  }
}
