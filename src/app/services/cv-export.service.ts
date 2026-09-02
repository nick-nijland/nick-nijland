import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { buildCvDocument } from '../data/cv-document';

@Injectable({ providedIn: 'root' })
export class CvExportService {
  private translate = inject(TranslateService);

  async export(): Promise<void> {
    // Lazy-loaded so jsPDF stays out of the main bundle and the SSR path.
    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });

    const lang = this.translate.currentLang || this.translate.getFallbackLang() || 'nl';
    const t = (key: string): string => String(this.translate.instant(key));

    buildCvDocument(doc, t, lang);

    doc.save(`Nick-Nijland-CV-${lang.toUpperCase()}.pdf`);
  }
}
