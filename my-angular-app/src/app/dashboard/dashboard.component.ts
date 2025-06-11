import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Welcome to Dashboard</h2>
    <p>You are logged in as a regular user.</p>
    <button (click)="logout()" class="logout-btn">Log out</button>
  `,
})
export class DashboardComponent {
  constructor(private router: Router) {}
  logout() {
    localStorage.removeItem('auth');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }
}
