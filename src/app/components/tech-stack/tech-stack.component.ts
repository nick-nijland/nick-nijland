import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface Category {
  name: string;
  skills: string[];
}

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss',
})
export class TechStackComponent {
  categories: Category[] = [
    { name: 'stack.languages', skills: ['TypeScript', 'JavaScript', 'Java', 'Kotlin'] },
    { name: 'stack.frontend',  skills: ['Angular', 'React', 'Vue.js', 'StencilJS', 'RxJS', 'NgRx', 'Signals', 'Angular Material', 'OpenLayers', 'Custom Web Components', 'jQuery', 'HTML5', 'CSS', 'SCSS', 'LESS'] },
    { name: 'stack.backend',   skills: ['Node.js', 'Spring Boot', 'PHP', 'Twig', 'Keycloak'] },
    { name: 'stack.testing',   skills: ['Jest', 'Cypress', 'Playwright', 'Spectator', 'Robot Framework', 'ng-Apimock'] },
    { name: 'stack.design',    skills: ['Sketch', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'WordPress'] },
    { name: 'stack.tooling',   skills: ['Docker', 'Jenkins', 'GitHub', 'GitLab', 'Claude Code'] },
  ];
}
