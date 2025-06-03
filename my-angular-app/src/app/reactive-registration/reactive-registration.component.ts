// // reactive-registration.component.ts
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
// import { ApiService } from '../api.service';
// import { CommonModule } from '@angular/common';
//
// @Component({
//   selector: 'app-reactive-registration',
//   standalone: true,
//   imports: [ReactiveFormsModule, CommonModule],
//   templateUrl: './reactive-registration.component.html',
//   styleUrls: ['./reactive-registration.component.css']
// })
// export class ReactiveRegistrationComponent {
//   form: FormGroup;
//   successMessage = '';
//   errorMessage = '';
//
//   constructor(private fb: FormBuilder, private api: ApiService) {
//     this.form = this.fb.group({
//       username: ['', [Validators.required, Validators.minLength(3)]],
//       password: ['', [Validators.required, Validators.minLength(6)]]
//     });
//   }
//
//   register() {
//     if (this.form.valid) {
//       this.api.registerUser(this.form.value).subscribe({
//         next: () => {
//           this.successMessage = 'Успішна реєстрація!';
//           this.errorMessage = '';
//           this.form.reset();
//         },
//         error: () => {
//           this.errorMessage = 'Сталася помилка при реєстрації';
//           this.successMessage = '';
//         }
//       });
//     } else {
//       this.errorMessage = 'Форма недійсна!';
//       this.successMessage = '';
//     }
//   }
// }
