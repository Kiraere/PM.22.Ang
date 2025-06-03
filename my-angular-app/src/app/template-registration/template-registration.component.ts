import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-registration',
  standalone: true,
  imports: [FormsModule,
    CommonModule],
  templateUrl: './template-registration.component.html',
  styleUrls: ['./template-registration.component.css']
})
export class TemplateRegistrationComponent {
  phone: string = '';
  address = '';
  email = '';
  errorMessage = '';
  successMessage = '';


  @Output() registerSuccess = new EventEmitter<void>();

  constructor(private apiService: ApiService, private router: Router) {}

  register(form: NgForm) {
    if (form.valid) {
      const registrationData = {
        phone: this.phone,
        email: this.email,
        address: this.address
      };

      this.apiService.registerUser({ phone: this.phone, email: this.email , address: this.address})
        .subscribe({
          next: () => {
            this.successMessage = 'Реєстрація пройшла успішно!';
            this.errorMessage = '';
            this.registerSuccess.emit();
            form.reset();
            // this.router.navigate(['/login']); // Якщо потрібно переходити
          },
          error: (err) => {
            this.errorMessage = 'Помилка реєстрації: ' + (err.error?.message || 'Спробуйте пізніше');
            this.successMessage = '';
          }
        });
    } else {
      this.errorMessage = 'Будь ласка, заповніть всі поля правильно';
      this.successMessage = '';
    }
  }
}
