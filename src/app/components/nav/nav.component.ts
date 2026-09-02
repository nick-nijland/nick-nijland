import { Component, signal, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { CvExportService } from '../../services/cv-export.service';

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
  exporting = signal(false);

  private translate = inject(TranslateService);
  private cvExport = inject(CvExportService);

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

  async exportPdf() {
    if (this.exporting()) return;
    this.exporting.set(true);
    this.close();
    try {
      await this.cvExport.export();
    } finally {
      this.exporting.set(false);
    }
  }

  toggle() {
    this.menuOpen.update(v => !v);
  }

  close() {
    this.menuOpen.set(false);
  }
}
