import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { jobs, Job } from '../../data/experience.data';
import { formatMonthYear } from '../../data/format-date';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  private translate = inject(TranslateService);

  jobs: Job[] = jobs;

  formatDate(value: string): string {
    const locale = this.translate.currentLang === 'nl' ? 'nl' : 'en';
    return formatMonthYear(value, locale);
  }
}
