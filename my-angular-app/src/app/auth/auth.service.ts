import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { of, Observable } from 'rxjs';

interface User {
  username: string;
  password: string;
  role: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private _isLoggedIn = signal<boolean>(this.hasToken());
  isLoggedIn = this._isLoggedIn.asReadonly();

  private redirectUrl: string | null = null;

  constructor(private router: Router) {
    this.initializeAdminUser();
  }

  private initializeAdminUser(): void {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    const adminExists = users.some(u => u.username === 'admin');

    if (!adminExists) {
      users.push({
        username: 'admin',
        password: 'admin123', // змінити пароль за потребою
        role: 'admin'
      });
      localStorage.setItem('users', JSON.stringify(users));
      console.log('Admin user created automatically');
    }
  }

  login(username: string, password: string): Observable<boolean> {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

    const found = users.find(
      u => u.username.trim() === username.trim() && u.password.trim() === password.trim()
    );

    console.log('Login attempt:', { username, password });
    console.log('User found:', found);

    if (found) {
      localStorage.setItem(this.TOKEN_KEY, 'FAKE_TOKEN');
      localStorage.setItem('username', found.username);
      localStorage.setItem('role', found.role);
      this._isLoggedIn.set(true);
      return of(true);
    } else {
      return of(false);
    }
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    this._isLoggedIn.set(false);
    this.router.navigate(['/login']);
  }

  isLogged(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }

  private hasToken(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
}
