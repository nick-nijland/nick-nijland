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
    { name: 'stack.languages', skills: ['TypeScript', 'JavaScript', 'Java', 'Kotlin', 'PHP'] },
    { name: 'stack.frontend',  skills: ['Angular', 'React', 'Vue.js', 'StencilJS', 'RxJS', 'NgRx', 'OpenLayers', 'HTML5', 'SCSS / LESS'] },
    { name: 'stack.backend',   skills: ['Node.js', 'Spring', 'PHP'] },
    { name: 'stack.testing',   skills: ['Jest', 'Cypress', 'Spectator', 'Robot Framework'] },
    { name: 'stack.design',    skills: ['Adobe CC', 'Sketch', 'WordPress'] },
    { name: 'stack.tooling',   skills: ['Jenkins', 'Git', 'Custom Web Components'] },
  ];
}
