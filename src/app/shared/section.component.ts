import { Component, input } from '@angular/core';
import { RevealDirective } from './reveal.directive';

/**
 * Standard page section: anchor id, small label, heading and intro.
 * Whatever you put between <app-section> tags is rendered below the heading.
 */
@Component({
  selector: 'app-section',
  imports: [RevealDirective],
  host: { class: 'contents' },
  template: `
    <section
      [id]="sectionId()"
      [attr.aria-labelledby]="heading() ? sectionId() + '-heading' : null"
      [class]="'relative scroll-mt-20 px-5 py-20 sm:px-8 md:py-28 ' + extraClass()"
    >
      <div class="mx-auto max-w-5xl">
        @if (eyebrow() || heading()) {
          <header class="mb-10 max-w-2xl md:mb-14">
            @if (eyebrow()) {
              <p appReveal style="--reveal-y: 12px" class="eyebrow mb-3 text-accent">
                {{ eyebrow() }}
              </p>
            }
            @if (heading()) {
              <h2
                appReveal
                [revealDelay]="50"
                style="--reveal-y: 12px"
                [id]="sectionId() + '-heading'"
                class="text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
              >
                {{ heading() }}
              </h2>
            }
            @if (intro()) {
              <p
                appReveal
                [revealDelay]="100"
                style="--reveal-y: 12px"
                class="mt-4 text-base leading-relaxed text-muted sm:text-lg"
              >
                {{ intro() }}
              </p>
            }
          </header>
        }
        <ng-content />
      </div>
    </section>
  `,
})
export class SectionComponent {
  readonly sectionId = input.required<string>();
  readonly eyebrow = input('');
  readonly heading = input('');
  readonly intro = input('');
  /** Extra classes for the <section>, e.g. a background colour. */
  readonly extraClass = input('');
}
