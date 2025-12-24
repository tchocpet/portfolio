import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MATERIAL_IMPORTS } from '../../shared/material';
import { TranslationService } from '../../services/translation.service';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule, HttpClientModule, TranslatePipe, ...MATERIAL_IMPORTS],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  sending = false;
  serverMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private translationService: TranslationService) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      privacy: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    if (!this.contactForm.valid) return;
    this.sending = true;
    this.serverMessage = '';

    const payload = this.contactForm.value;

    this.http.post('/api/contact', payload).subscribe({
      next: () => {
        this.sending = false;
        this.serverMessage = this.translationService.getTranslation('contact.success');
        this.contactForm.reset({ privacy: false });
        // mark pristine
        this.contactForm.markAsPristine();
        this.contactForm.markAsUntouched();
      },
      error: (err) => {
        this.sending = false;
        this.serverMessage = err?.error?.error || this.translationService.getTranslation('contact.failure');
        console.error('Contact submit error', err);
      },
    });
  }
}
