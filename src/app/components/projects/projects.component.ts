import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface Project {
  name: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'devlog-app',
      description:
        'Developer-focused blogging platform with syntax highlighting, dark mode, and Markdown support. Built for speed with SSR and static generation.',
      tags: ['TypeScript', 'Angular', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      name: 'cli-toolkit',
      description:
        'A collection of productivity CLI tools for developers. Automates repetitive workflows and integrates with Git, Docker, and CI pipelines.',
      tags: ['Go', 'Bash', 'Docker'],
      github: 'https://github.com',
    },
    {
      name: 'realtime-board',
      description:
        'Collaborative whiteboard with real-time sync via WebSockets. Supports drawing, sticky notes, and PDF export. Handles 100+ concurrent users.',
      tags: ['TypeScript', 'React', 'Socket.io', 'Redis'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      name: 'data-pipeline',
      description:
        'ETL pipeline for processing and transforming large datasets. Handles 10M+ records per hour with built-in error recovery and alerting.',
      tags: ['Python', 'PostgreSQL', 'Docker', 'AWS'],
      github: 'https://github.com',
    },
  ];
}
