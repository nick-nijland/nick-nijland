import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

interface Job {
  from: string; // 'YYYY-MM'
  to: string;   // 'YYYY-MM' or 'present'
  role: string;
  company: string;
  description?: string;
  bullets: string[];
  tags: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  private translate = inject(TranslateService);

  formatDate(value: string): string {
    const [year, month] = value.split('-').map(Number);
    const date = new Date(year, month - 1, 1);
    const locale = this.translate.currentLang === 'nl' ? 'nl-NL' : 'en-US';
    return new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric' }).format(date);
  }

  jobs: Job[] = [
    {
      from: '2026-03',
      to: 'present',
      role: 'Front-end Developer (via Ilionx)',
      company: 'Lifelines',
      description: 'experience.jobs.lifelines.description',
      bullets: [],
      tags: ['Angular', 'TypeScript', 'RxJS', 'Signals', 'Angular Material', 'Claude Code'],
    },
    {
      from: '2025-07',
      to: 'present',
      role: 'Full Stack Developer (via Ilionx)',
      company: 'Ministerie van Binnenlandse Zaken',
      description: 'experience.jobs.bzk.description',
      bullets: [],
      tags: ['Angular', 'TypeScript', 'RxJS', 'Java', 'Spring Boot', 'Keycloak', 'Docker', 'Github', 'Claude Code'],
    },
    {
      from: '2025-02',
      to: 'present',
      role: 'Front-end Developer (via Ilionx)',
      company: 'College voor de toelating van gewasbeschermingsmiddelen en biociden',
      description: 'experience.jobs.ctgb.description',
      bullets: [],
      tags: ['Angular', 'TypeScript', 'RxJS', 'Java', 'Spring Boot', 'Playwright', 'Docker', 'Gitlab', 'Claude Code'],
    },
    {
      from: '2026-01',
      to: '2026-03',
      role: 'Front-end Developer (via Ilionx)',
      company: 'De Nederlandsche Bank',
      bullets: [
        'Upgraded a production React application to the latest version',
      ],
      tags: ['React'],
    },
    {
      from: '2022-01',
      to: '2025-06',
      role: 'Full Stack Developer (via Ilionx)',
      company: 'Kadaster',
      description: 'experience.jobs.kadaster.description',
      bullets: [],
      tags: ['Angular', 'OpenLayers', 'RxJS', 'NgRx', 'TypeScript', 'Spectator', 'Robot Framework', 'Node.js', 'Kotlin', 'Java', 'Spring', 'SCSS'],
    },
    {
      from: '2021-02',
      to: '2022-03',
      role: 'Front-end Developer (via Ilionx)',
      company: 'KPN',
      description: 'experience.jobs.kpn.description',
      bullets: [],
      tags: ['StencilJS', 'TypeScript', 'Jest', 'Cypress', 'Jenkins', 'ng-Apimock', 'Custom Web Components', 'HTML5', 'SCSS'],
    },
    {
      from: '2017-01',
      to: '2021-01',
      role: 'Front-end Developer',
      company: 'ConnectingTheDots',
      description: 'experience.jobs.ctd.description',
      bullets: [],
      tags: ['Vue.js', 'JavaScript', 'PHP', 'Twig', 'HTML5', 'SCSS', 'LESS'],
    },
    {
      from: '2014-12',
      to: '2017-01',
      role: 'Creative Designer',
      company: 'Wehkamp',
      description: 'experience.jobs.wehkamp.description',
      bullets: [],
      tags: ['HTML5', 'CSS', 'LESS', 'JavaScript', 'Sketch', 'Adobe CC'],
    },
    {
      from: '2013-01',
      to: '2016-12',
      role: 'Web & Graphic Designer',
      company: 'Oogappels',
      bullets: [
        'Ran own design studio delivering WordPress websites and graphic/interface design for clients',
      ],
      tags: ['WordPress', 'Web Design', 'Graphic Design', 'Interface Design'],
    },
    {
      from: '2012-02',
      to: '2014-12',
      role: 'Web Designer',
      company: 'Qreativ BV',
      description: 'experience.jobs.qreativ.description',
      bullets: [],
      tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'],
    },
  ];
}
