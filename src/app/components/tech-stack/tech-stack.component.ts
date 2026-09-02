import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { categories, Category } from '../../data/tech-stack.data';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss',
})
export class TechStackComponent {
  categories: Category[] = categories;
}
