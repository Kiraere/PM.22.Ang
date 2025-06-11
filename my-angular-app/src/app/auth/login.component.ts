import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  template: `
    <div class="custom-wall">
      <h2 class="custom-title"> Log in</h2>

      <form (ngSubmit)="onSubmit()">
        <label>Name:</label>
        <input type="text" [(ngModel)]="username" name="username" required>
        <label>Password:</label>
        <input type="password" [(ngModel)]="password" name="password" required>
        <button type="submit" class="custom-btn">Okey123</button>
      </form>

<!--      <label>Name:</label>-->
<!--      <input [(ngModel)]="username" placeholder="Name">-->
<!--      <label>Password:</label>-->
<!--      <input [(ngModel)]="password" placeholder="Password" type="password">-->
<!--      <button (click)="onSubmit()" class="custom-btn">Okey</button>-->
    </div>
  `,
  styleUrls: ['./log-reg.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';

  @Output() loginSuccess = new EventEmitter<void>();
  @Output() switchToRegister = new EventEmitter<void>();

  constructor(private router: Router, private authService: AuthService) {}

  // login() {
  //   const users = JSON.parse(localStorage.getItem('users') || '[]');
  //   const found = users.find((u: any) =>
  //     u.username === this.username && u.password === this.password
  //   );
  //
  //   if (found) {
  //     localStorage.setItem('auth', 'true');
  //     localStorage.setItem('username', found.username);
  //     localStorage.setItem('role', found.role);
  //     this.loginSuccess.emit();
  //     this.router.navigate(['/admin']);
  //
  //     if (found.role === 'admin') {
  //       this.router.navigate(['/admin']);
  //     } else {
  //       this.router.navigate(['/dashboard']); // 🔧 має існувати в маршрутах
  //     }
  //   }
  // }
  onSubmit(): void {
    console.log(this.username);
    console.log(this.password);
    this.authService.login(this.username, this.password).subscribe(success => {
      if (success) {
        this.loginSuccess.emit();
        const role = localStorage.getItem('role');
        if (role === 'admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/dashboard']);
        }
      } else {
        alert('Invalid login or password');
      }
    });
  }
}
