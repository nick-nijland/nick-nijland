import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  links = [
    { label: 'email',    href: 'mailto:hello@nicknijland.dev' },
    { label: 'github',   href: 'https://github.com' },
    { label: 'linkedin', href: 'https://linkedin.com' },
  ];
}
