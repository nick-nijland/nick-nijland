import { Component, signal, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  menuOpen = signal(false);
  currentLang = signal('nl');

  private translate = inject(TranslateService);

  links = [
    { label: 'nav.experience', href: '#experience' },
    { label: 'nav.stack',      href: '#stack' },
    { label: 'nav.contact',    href: '#contact' },
  ];

  toggleLang() {
    const next = this.currentLang() === 'en' ? 'nl' : 'en';
    this.translate.use(next);
    this.currentLang.set(next);
  }

  toggle() {
    this.menuOpen.update(v => !v);
  }

  close() {
    this.menuOpen.set(false);
  }
}
