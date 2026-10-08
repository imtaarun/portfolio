import { Component } from '@angular/core';
import { profile } from '../../data/profile';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="border-t border-line px-5 py-8 sm:px-8">
      <div
        class="mx-auto flex max-w-5xl flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between"
      >
        <p>© {{ profile.copyrightYear }} {{ profile.fullName }}</p>
        <p class="text-faint">{{ profile.footerTagline }}</p>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  protected readonly profile = profile;
}
