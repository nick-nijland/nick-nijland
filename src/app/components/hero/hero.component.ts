import { Component, OnDestroy, signal, afterNextRender, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnDestroy {
  displayedRole = signal('');

  private translate = inject(TranslateService);
  private roles: string[] = [];
  private roleIndex = 0;
  private timeouts: ReturnType<typeof setTimeout>[] = [];
  private langSub: Subscription;

  constructor() {
    this.loadRoles();
    afterNextRender(() => this.typeRole());
    this.langSub = this.translate.onLangChange.subscribe(() => {
      this.loadRoles();
      this.resetTypewriter();
    });
  }

  ngOnDestroy() {
    this.timeouts.forEach(t => clearTimeout(t));
    this.langSub.unsubscribe();
  }

  private loadRoles() {
    const r = this.translate.instant('hero.roles');
    this.roles = Array.isArray(r) ? r : ['Front-end Developer'];
  }

  private resetTypewriter() {
    this.timeouts.forEach(t => clearTimeout(t));
    this.timeouts = [];
    this.roleIndex = 0;
    this.displayedRole.set('');
    this.typeRole();
  }

  private later(fn: () => void, ms: number) {
    this.timeouts.push(setTimeout(fn, ms));
  }

  private typeRole(i = 0) {
    const role = this.roles[this.roleIndex];
    if (!role) return;
    if (i < role.length) {
      this.displayedRole.set(role.slice(0, i + 1));
      this.later(() => this.typeRole(i + 1), 85);
    } else {
      this.later(() => this.eraseRole(role.length), 2500);
    }
  }

  private eraseRole(i: number) {
    const role = this.roles[this.roleIndex];
    if (i > 0) {
      this.displayedRole.set(role.slice(0, i - 1));
      this.later(() => this.eraseRole(i - 1), 45);
    } else {
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      this.later(() => this.typeRole(), 500);
    }
  }
}
