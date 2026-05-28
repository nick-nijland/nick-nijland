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
      description: 'Lifelines is een biobank in Noord-Nederland die data en biologisch materiaal verzamelt van 167.000 deelnemers om wetenschappelijk onderzoek naar gezond ouder worden mogelijk te maken. Wij ontwikkelden een applicatie waarmee artsen patiëntgegevens zoals spirometrie- en ECG-uitslagen kunnen beoordelen en op basis daarvan een advies kunnen uitbrengen aan de huisarts of het ziekenhuis.',
      bullets: [],
      tags: ['Angular', 'TypeScript', 'RxJS', 'Signals', 'Angular Material', 'Claude Code'],
    },
    {
      from: '2025-07',
      to: 'present',
      role: 'Full Stack Developer (via Ilionx)',
      company: 'Ministerie van Binnenlandse Zaken',
      description: 'Voor de Wet Normering Topinkomens (WNT) hebben wij een applicatie ontwikkeld waarin instellingen jaarlijks hun verantwoording kunnen afleggen. Organisaties die onder de WNT vallen zijn verplicht de beloningen van hun topfunctionarissen openbaar te maken in hun jaarverslag. Via de applicatie kunnen zij gevoelige informatie afschermen door data in een PDF weg te lakken. Toezichthouders kunnen vervolgens deze verantwoordingen controleren en eventueel afkeuren.',
      bullets: [],
      tags: ['Angular', 'TypeScript', 'RxJS', 'Java', 'Spring Boot', 'Keycloak', 'Docker', 'Github', 'Claude Code'],
    },
    {
      from: '2025-02',
      to: 'present',
      role: 'Front-end Developer (via Ilionx)',
      company: 'College voor de toelating van gewasbeschermingsmiddelen en biociden',
      description: 'Gewasbeschermingsmiddelen en biociden mogen in Nederland alleen worden verkocht en gebruikt als ze door het Ctgb of een andere Europese toelatingsautoriteit zijn toegelaten. Ik draag bij aan bestaande applicaties, waaronder de toelatingen databank en een applicatie om nieuwe aanvragen in te dienen.',
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
      description: 'Als full stack ontwikkelaar was ik vanaf het begin betrokken bij een applicatie waarmee gebruikers ruimtelijke regels en beleid per locatie kunnen raadplegen, inclusief documenten van overheden zoals omgevingsvisies en omgevingsplannen.',
      bullets: [],
      tags: ['Angular', 'OpenLayers', 'RxJS', 'NgRx', 'TypeScript', 'Spectator', 'Robot Framework', 'Node.js', 'Kotlin', 'Java', 'Spring', 'SCSS'],
    },
    {
      from: '2021-02',
      to: '2022-03',
      role: 'Front-end Developer (via Ilionx)',
      company: 'KPN',
      description: 'Binnen het Servicetools team werkte ik aan applicaties die support afdelingen ondersteunen, zoals een tool om WiFi te verbeteren en een tool om de orderstatus in te zien. Hiervoor maakten we gebruik van StencilJS, een compiler voor het bouwen van herbruikbare custom web components.',
      bullets: [],
      tags: ['StencilJS', 'TypeScript', 'Jest', 'Cypress', 'Jenkins', 'ng-Apimock', 'Custom Web Components', 'HTML5', 'SCSS'],
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
