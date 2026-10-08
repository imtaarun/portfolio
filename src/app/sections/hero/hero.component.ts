import { Component, inject } from '@angular/core';
import { ArrowDown, Download, LucideAngularModule, Mail, MapPin } from 'lucide-angular';
import { ScrollService } from '../../core/scroll.service';
import { profile, resume } from '../../data/profile';
import { BrandIconComponent } from '../../shared/brand-icons.component';
import { ButtonComponent } from '../../shared/button.component';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-hero',
  imports: [LucideAngularModule, BrandIconComponent, ButtonComponent, RevealDirective],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  protected readonly scroll = inject(ScrollService);
  protected readonly profile = profile;
  protected readonly resume = resume;
  protected readonly icons = { ArrowDown, Download, Mail, MapPin };

  protected goTo(event: Event, id: string): void {
    event.preventDefault();
    this.scroll.scrollTo(id);
  }
}
