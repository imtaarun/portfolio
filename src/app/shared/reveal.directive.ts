import { Directive, ElementRef, afterNextRender, inject, input } from '@angular/core';

/**
 * Fades and lifts an element in once, when it scrolls into view.
 * The look of the animation lives in styles.css (.reveal / .is-visible).
 *
 *   <div appReveal>…</div>
 *   <li appReveal [revealDelay]="i * 80">…</li>       (milliseconds)
 *   <span appReveal revealMargin="0px 0px -30% 0px">  (wait until higher up the screen)
 */
@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
    '[style.--reveal-delay.ms]': 'revealDelay()',
  },
})
export class RevealDirective {
  readonly revealDelay = input(0);
  readonly revealMargin = input('0px 0px -12% 0px');

  constructor() {
    const el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

    afterNextRender(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            observer.disconnect();
          }
        },
        { rootMargin: this.revealMargin() },
      );
      observer.observe(el);
    });
  }
}
