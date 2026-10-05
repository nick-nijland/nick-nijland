export interface Category {
  name: string; // i18n key
  skills: string[];
}

export const categories: Category[] = [
  { name: 'stack.frontend',  skills: ['TypeScript', 'JavaScript', 'Angular', 'React', 'Vue.js', 'StencilJS', 'RxJS', 'NgRx', 'Signals', 'Angular Material', 'OpenLayers', 'Custom Web Components', 'jQuery', 'HTML5', 'CSS', 'SCSS', 'LESS'] },
  { name: 'stack.backend',   skills: ['Java', 'Kotlin', 'Node.js', 'Spring Boot', 'PHP', 'Twig', 'Keycloak'] },
  { name: 'stack.testing',   skills: ['Jest', 'Cypress', 'Playwright', 'Spectator', 'Robot Framework', 'ng-Apimock'] },
  { name: 'stack.design',    skills: ['Sketch', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'WordPress'] },
  { name: 'stack.tooling',   skills: ['Docker', 'Jenkins', 'GitHub', 'GitLab', 'Claude Code'] },
];
