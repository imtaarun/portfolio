import { Component } from '@angular/core';
import { skills } from '../../data/highlights';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionComponent } from '../../shared/section.component';

@Component({
  selector: 'app-skills',
  imports: [SectionComponent, RevealDirective],
  template: `
    <app-section
      sectionId="skills"
      eyebrow="What I work with"
      heading="Skills"
      extraClass="bg-card"
    >
      <div class="divide-y divide-line border-y border-line">
        @for (g of skills; track g.name) {
          <div
            appReveal
            [revealDelay]="$index * 40"
            class="grid gap-3 py-5 md:grid-cols-[12rem_1fr] md:gap-8"
          >
            <h3 class="font-medium text-ink">{{ g.name }}</h3>
            <ul class="flex flex-wrap gap-2">
              @for (s of g.items; track s) {
                <li class="rounded-full border border-line bg-page px-3 py-1 text-sm text-ink/85">
                  {{ s }}
                </li>
              }
            </ul>
          </div>
        }
      </div>
    </app-section>
  `,
})
export class SkillsComponent {
  protected readonly skills = skills;
}
