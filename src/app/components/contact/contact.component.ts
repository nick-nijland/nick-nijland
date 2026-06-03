import { ChangeDetectorRef, Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslatePipe, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  links = [
    { label: 'email',    href: 'mailto:hello@nicknijland.dev' },
    { label: 'linkedin', href: 'https://www.linkedin.com/in/nick-nijland-a5665a62/' },
  ];

  submitted = false;
  loading = false;
  error = false;
  form: ReturnType<FormBuilder['group']>;

  constructor(private fb: FormBuilder, private contactService: ContactService, private cdr: ChangeDetectorRef) {
    this.form = fb.group({
      name:    ['', Validators.required],
      phone:   ['', Validators.required],
      email:   ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.error = false;

    this.contactService.send(this.form.value as any).subscribe({
      next: () => {
        this.submitted = true;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.error = true;
        this.loading = false;
        this.cdr.detectChanges();
      },
    });
  }
}
