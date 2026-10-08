import { Component, effect, inject, signal } from '@angular/core';
import { Award, ChevronDown, GraduationCap, LucideAngularModule } from 'lucide-angular';
import { ScrollService } from '../../core/scroll.service';
import { certifications, education, jobs } from '../../data/journey';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionComponent } from '../../shared/section.component';

/** Full details for every role, degree and certification. Job cards start collapsed. */
@Component({
  selector: 'app-experience-detail',
  imports: [LucideAngularModule, SectionComponent, RevealDirective],
  templateUrl: './experience-detail.component.html',
})
export class ExperienceDetailComponent {
  protected readonly jobs = jobs;
  protected readonly education = education;
  protected readonly certifications = certifications;
  protected readonly icons = { Award, ChevronDown, GraduationCap };

  /** Ids of the job cards that are currently open. */
  protected readonly openIds = signal<ReadonlySet<string>>(new Set());

  constructor() {
    // "View details" on the timeline asks the scroll service to open a card.
    const scroll = inject(ScrollService);
    effect(() => {
      const request = scroll.detailRequest();
      if (request) this.openIds.update((ids) => new Set(ids).add(request.id));
    });
  }

  protected toggle(id: string): void {
    this.openIds.update((ids) => {
      const next = new Set(ids);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }
}
