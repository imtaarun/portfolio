import { Component, signal } from '@angular/core';
import { Check, Copy, Download, LucideAngularModule, Mail } from 'lucide-angular';
import { profile, resume } from '../../data/profile';
import { BrandIconComponent } from '../../shared/brand-icons.component';
import { ButtonComponent } from '../../shared/button.component';
import { RevealDirective } from '../../shared/reveal.directive';

/** True when a link is set and isn't still a "[ADD …]" placeholder. */
const isLiveLink = (value: string | undefined) => !!value && !value.trim().startsWith('[ADD');

/** Closing section: email, profiles and the resume. */
@Component({
  selector: 'app-contact',
  imports: [LucideAngularModule, BrandIconComponent, ButtonComponent, RevealDirective],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  protected readonly profile = profile;
  protected readonly resume = resume;
  protected readonly icons = { Check, Copy, Download, Mail };
  protected readonly showGithub = isLiveLink(profile.links.github);
  protected readonly copied = signal(false);

  protected async copyEmail(emailEl: HTMLElement): Promise<void> {
    try {
      await navigator.clipboard.writeText(profile.email);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 1800);
    } catch {
      // Clipboard blocked: select the address so the visitor can copy it themselves.
      const range = document.createRange();
      range.selectNodeContents(emailEl);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  }
}
