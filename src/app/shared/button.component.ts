import { Component, computed, input } from '@angular/core';

type Variant = 'primary' | 'secondary' | 'inverse' | 'outline-inverse';

const styles: Record<Variant, string> = {
  primary: 'bg-ink text-white hover:bg-accent',
  secondary: 'border border-line-strong bg-card text-ink hover:border-ink',
  /* for dark backgrounds */
  inverse: 'bg-white text-ink hover:bg-accent-soft',
  'outline-inverse': 'border border-white/25 text-white hover:bg-white/10',
};

/**
 * A link styled as a button. It's an attribute component, so you keep a real <a>:
 *
 *   <a appButton href="resume.pdf" download>Download resume <lucide-icon … /></a>
 *
 * Put an icon inside with the `btn-icon` class to get the small hover nudge.
 */
@Component({
  selector: 'a[appButton]',
  host: { '[class]': 'classes()' },
  template: `<ng-content />`,
})
export class ButtonComponent {
  readonly variant = input<Variant>('primary');

  protected readonly classes = computed(
    () =>
      'group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium ' +
      'transition-[background-color,border-color,color,transform] duration-150 ease-out active:scale-[0.97] ' +
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ' +
      styles[this.variant()],
  );
}
