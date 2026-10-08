import { Component } from '@angular/core';
import { profile } from '../../data/profile';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionComponent } from '../../shared/section.component';

@Component({
  selector: 'app-about',
  imports: [SectionComponent, RevealDirective],
  template: `
    <app-section
      sectionId="about"
      eyebrow="About"
      heading="Full-stack engineer who likes the hard middle of a system."
    >
      <div class="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-14">
        <div class="flex flex-col gap-4 text-lg leading-relaxed text-muted">
          @for (p of about.paragraphs; track $index) {
            <p appReveal [revealDelay]="$index * 100" style="--reveal-y: 12px">{{ p }}</p>
          }
        </div>
        <dl class="grid grid-cols-2 self-start border-t border-line">
          @for (s of about.stats; track s.label) {
            <div
              appReveal
              [revealDelay]="$index * 60"
              style="--reveal-y: 12px"
              class="flex flex-col-reverse gap-1 border-b border-line py-5 pr-4 [&:nth-child(odd)]:border-r [&:nth-child(even)]:pl-5"
            >
              <dt class="text-sm text-muted">{{ s.label }}</dt>
              <dd class="text-3xl font-semibold tracking-tight text-ink tabular-nums">
                {{ s.value }}
              </dd>
            </div>
          }
        </dl>
      </div>
    </app-section>
  `,
})
export class AboutComponent {
  protected readonly about = profile.about;
}
