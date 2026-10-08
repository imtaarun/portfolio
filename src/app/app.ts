import { Component } from '@angular/core';
import { AboutComponent } from './sections/about/about.component';
import { BackToTopComponent } from './sections/back-to-top/back-to-top.component';
import { ChallengesComponent } from './sections/challenges/challenges.component';
import { ContactComponent } from './sections/contact/contact.component';
import { ExperienceDetailComponent } from './sections/experience-detail/experience-detail.component';
import { FooterComponent } from './sections/footer/footer.component';
import { HeroComponent } from './sections/hero/hero.component';
import { JourneyComponent } from './sections/journey/journey.component';
import { NavbarComponent } from './sections/navbar/navbar.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { TopWorkComponent } from './sections/top-work/top-work.component';

/** The whole site is one page; each section is its own component under sections/. */
@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    JourneyComponent,
    TopWorkComponent,
    ChallengesComponent,
    ExperienceDetailComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
    BackToTopComponent,
  ],
  templateUrl: './app.html',
})
export class App {}
