import { Component, ElementRef, computed, inject, signal, viewChild } from '@angular/core';
import { Download, LucideAngularModule, Menu, X } from 'lucide-angular';
import { injectActiveSection } from '../../core/active-section';
import { ScrollService } from '../../core/scroll.service';
import { navItems } from '../../data/navigation';
import { profile, resume } from '../../data/profile';

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule],
  templateUrl: './navbar.component.html',
  host: { '(document:keydown.escape)': 'closeMenu(true)' },
})
export class NavbarComponent {
  protected readonly scroll = inject(ScrollService);
  protected readonly profile = profile;
  protected readonly resume = resume;
  protected readonly navItems = navItems;
  protected readonly icons = { Download, Menu, X };

  protected readonly active = injectActiveSection(navItems.map((n) => n.id));
  protected readonly open = signal(false);
  protected readonly scrolled = computed(() => this.scroll.y() > 8);

  private readonly menuButton = viewChild.required<ElementRef<HTMLButtonElement>>('menuButton');

  protected go(event: Event, id: string): void {
    event.preventDefault();
    this.open.set(false);
    this.scroll.scrollTo(id);
  }

  protected closeMenu(returnFocus: boolean): void {
    if (!this.open()) return;
    this.open.set(false);
    if (returnFocus) this.menuButton().nativeElement.focus();
  }
}
