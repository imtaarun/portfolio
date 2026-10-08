import { DOCUMENT } from '@angular/common';
import { DestroyRef, afterNextRender, inject, signal } from '@angular/core';

/**
 * Returns a signal with the id of the section in the middle of the viewport.
 * Call it from a component's constructor (it needs an injection context).
 */
export function injectActiveSection(ids: readonly string[]) {
  const doc = inject(DOCUMENT);
  const destroyRef = inject(DestroyRef);
  const active = signal('');

  afterNextRender(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) active.set(visible[0].target.id);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ids.forEach((id) => {
      const el = doc.getElementById(id);
      if (el) observer.observe(el);
    });
    destroyRef.onDestroy(() => observer.disconnect());
  });

  return active.asReadonly();
}
