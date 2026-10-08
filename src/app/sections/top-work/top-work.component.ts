import { Component } from '@angular/core';
import { Check, LucideAngularModule } from 'lucide-angular';
import { topWork } from '../../data/highlights';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionComponent } from '../../shared/section.component';

/** The three pieces of work I'm proudest of. */
@Component({
  selector: 'app-top-work',
  imports: [LucideAngularModule, SectionComponent, RevealDirective],
  template: `
    <app-section
      sectionId="work"
      eyebrow="Top work"
      heading="Three projects I'm proudest of."
      intro="One from each company, and what changed because of it."
    >
      <ol class="grid gap-5 lg:grid-cols-3">
        @for (w of topWork; track w.id; let i = $index) {
          <li appReveal [revealDelay]="i * 80" class="min-w-0">
            <article class="card card-hover flex h-full flex-col p-6 sm:p-7">
              <p class="flex items-center justify-between text-sm">
                <span class="font-medium text-accent">{{ w.org }}</span>
                <span class="font-mono text-faint">0{{ i + 1 }}</span>
              </p>
              <h3 class="mt-2 text-xl font-semibold leading-snug tracking-tight text-ink">
                {{ w.title }}
              </h3>
              <p class="mt-3 leading-relaxed text-muted">{{ w.summary }}</p>
              <ul class="mt-5 flex flex-col gap-2 text-sm text-ink/85">
                @for (p of w.points; track p) {
                  <li class="flex gap-2.5">
                    <lucide-icon
                      [img]="Check"
                      [size]="16"
                      class="mt-0.5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    {{ p }}
                  </li>
                }
              </ul>
              <div class="mt-auto pt-6">
                <p class="flex flex-wrap items-baseline gap-x-2 gap-y-1 border-t border-line pt-5">
                  @if (w.result.value) {
                    <span class="text-3xl font-semibold tracking-tight text-ink">{{
                      w.result.value
                    }}</span>
                  }
                  <span
                    [class]="
                      w.result.value ? 'text-sm text-muted' : 'font-medium leading-snug text-ink'
                    "
                    >{{ w.result.label }}</span
                  >
                </p>
                <ul class="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
                  @for (s of w.stack; track s) {
                    <li class="rounded-md bg-page px-2 py-0.5 text-xs text-muted ring-1 ring-line">
                      {{ s }}
                    </li>
                  }
                </ul>
              </div>
            </article>
          </li>
        }
      </ol>
    </app-section>
  `,
})
export class TopWorkComponent {
  protected readonly topWork = topWork;
  protected readonly Check = Check;
}
