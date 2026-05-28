import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

interface Job {
  from: string; // 'YYYY-MM'
  to: string;   // 'YYYY-MM' or 'present'
  role: string;
  company: string;
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
      from: '2025-01',
      to: 'present',
      role: 'Full Stack Developer (via Ilionx)',
      company: 'Ministerie van Binnenlandse Zaken',
      bullets: [],
      tags: ['Angular', 'RxJS', 'Java', 'Spring'],
    },
    {
      from: '2025-02',
      to: 'present',
      role: 'Front-end Developer (via Ilionx)',
      company: 'Ctgb',
      bullets: [],
      tags: [],
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
      to: '2025-01',
      role: 'Front-end Developer (via Ilionx)',
      company: 'Kadaster',
      bullets: [
        'Built and maintained Angular applications with interactive map features using OpenLayers',
        'Wrote unit tests with Spectator and end-to-end automation with Robot Framework',
        'Worked across the stack with Kotlin/Java Spring APIs alongside the front-end',
      ],
      tags: ['Angular', 'OpenLayers', 'RxJS', 'NgRx', 'TypeScript', 'Spectator', 'Robot Framework', 'Node.js', 'Kotlin', 'Java', 'Spring', 'SCSS'],
    },
    {
      from: '2017-01',
      to: '2021-12',
      role: 'Front-end Developer',
      company: 'ConnectingTheDots',
      bullets: [
        'Developed reusable custom Web Components with StencilJS used across multiple projects',
        'Built Vue.js applications and PHP back-ends in a full-stack capacity',
        'Covered quality with unit tests (Jest), E2E tests (Cypress), and mock APIs (ng-Apimock)',
        'Managed builds and deployments through Jenkins CI pipelines',
      ],
      tags: ['Vue.js', 'StencilJS', 'TypeScript', 'JavaScript', 'PHP', 'Jest', 'Cypress', 'Jenkins', 'HTML5', 'SCSS'],
    },
    {
      from: '2014-01',
      to: '2017-01',
      role: 'Creative Designer',
      company: 'Wehkamp',
      bullets: [
        'Designed and built landing pages and campaign layouts for one of the Netherlands\' largest e-commerce platforms',
        'Ran A/B tests to optimise conversion across the site',
        'Produced HTML5 online display campaigns and offline marketing assets',
      ],
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
      from: '2012-01',
      to: '2014-01',
      role: 'Web Designer',
      company: 'Qreativ BV',
      bullets: [
        'Designed and built websites for clients using print, web, and front-end tooling',
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'],
    },
  ];
}
