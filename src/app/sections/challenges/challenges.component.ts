import { Component } from '@angular/core';
import { CircleCheck, LucideAngularModule } from 'lucide-angular';
import { challenges } from '../../data/highlights';
import { RevealDirective } from '../../shared/reveal.directive';
import { SectionComponent } from '../../shared/section.component';

/** Two hard problems and how I solved them. */
@Component({
  selector: 'app-challenges',
  imports: [LucideAngularModule, SectionComponent, RevealDirective],
  templateUrl: './challenges.component.html',
})
export class ChallengesComponent {
  protected readonly challenges = challenges;
  protected readonly CircleCheck = CircleCheck;
}
