import { Component, computed, inject } from '@angular/core';
import { ArrowUp, LucideAngularModule } from 'lucide-angular';
import { ScrollService } from '../../core/scroll.service';

/** Round button that appears after scrolling past the first screen. */
@Component({
  selector: 'app-back-to-top',
  imports: [LucideAngularModule],
  template: `
    @if (show()) {
      <button
        type="button"
        (click)="scroll.scrollTo('top')"
        aria-label="Back to top"
        animate.enter="pop-enter"
        animate.leave="pop-leave"
        class="press fixed right-5 z-40 inline-flex h-11 w-11 origin-bottom items-center justify-center rounded-full border border-line bg-card text-ink shadow-sm transition-colors hover:border-ink sm:right-8"
        style="bottom: calc(1.25rem + env(safe-area-inset-bottom, 0px))"
      >
        <lucide-icon [img]="ArrowUp" [size]="17" aria-hidden="true" />
      </button>
    }
  `,
})
export class BackToTopComponent {
  protected readonly scroll = inject(ScrollService);
  protected readonly ArrowUp = ArrowUp;
  protected readonly show = computed(() => this.scroll.y() > this.scroll.viewportHeight() * 1.2);
}
