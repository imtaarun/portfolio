import { Component, ElementRef, computed, inject, viewChild } from '@angular/core';
import { ArrowDown, Briefcase, GraduationCap, LucideAngularModule } from 'lucide-angular';
import { ScrollService } from '../../core/scroll.service';
import { milestones } from '../../data/journey';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionComponent } from '../../shared/section.component';

/** Scroll-driven timeline of all experience and education, newest first. */
@Component({
  selector: 'app-journey',
  imports: [LucideAngularModule, SectionComponent, RevealDirective],
  templateUrl: './journey.component.html',
})
export class JourneyComponent {
  protected readonly scroll = inject(ScrollService);
  protected readonly milestones = milestones;
  protected readonly icons = { ArrowDown, Briefcase, GraduationCap };

  private readonly list = viewChild<ElementRef<HTMLOListElement>>('list');

  /**
   * How much of the blue line is filled (0 to 1). It starts when the top of the
   * list reaches 70% down the screen and is full when its bottom reaches 55%.
   * Re-computed whenever the scroll position changes.
   */
  protected readonly fill = computed(() => {
    this.scroll.y();
    const vh = this.scroll.viewportHeight();
    const list = this.list();
    if (!list) return 0;
    const rect = list.nativeElement.getBoundingClientRect();
    const start = vh * 0.7 - rect.top;
    const total = rect.height + vh * 0.15;
    return Math.max(0, Math.min(1, start / total));
  });

  protected openDetail(event: Event, id: string): void {
    event.preventDefault();
    this.scroll.openDetail(id);
  }
}
