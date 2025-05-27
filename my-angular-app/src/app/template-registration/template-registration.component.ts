import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-template-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-registration.component.html',
  styleUrls: ['./template-registration.component.css']
})
export class TemplateRegistrationComponent {
  username = '';
  password = '';
  errorMessage = '';
  successMessage = '';

  @Output() registerSuccess = new EventEmitter<void>();

  constructor(private apiService: ApiService, private router: Router) {}

  register(form: NgForm) {
    if (form.valid) {
      this.apiService.registerUser({ username: this.username, password: this.password })
        .subscribe({
          next: () => {
            this.successMessage = 'Реєстрація пройшла успішно!';
            this.errorMessage = '';
            this.registerSuccess.emit();
            form.reset();
            // Можна, наприклад, перейти на іншу сторінку
            // this.router.navigate(['/login']);
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
