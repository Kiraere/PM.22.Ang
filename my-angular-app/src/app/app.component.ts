import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LeftComponent} from './left/left.component';
import {RightComponent} from './right/right.component';
import {TemplateRegistrationComponent} from './template-registration/template-registration.component';
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [LeftComponent, RightComponent, TemplateRegistrationComponent,
    LoginComponent,
    RegisterComponent,
    RouterLink, RouterOutlet, CommonModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  isAuthenticated = false;
  username = '';
  role = '';
  showLogin = false;
  showRegister = false;
  authState = false;

  constructor(private router: Router) {}



  logout() {
    this.isAuthenticated = false;
    this.username = '';
    this.role = '';
    localStorage.removeItem('auth');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    this.router.navigate(['/']);
  }


  onLoginSuccess() {
    this.isAuthenticated = true;
    this.role = localStorage.getItem('role') || '';
    this.username = localStorage.getItem('username') || '';
    this.closeModals();

    if (this.role === 'admin') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/dashboard']); // цей маршрут має існувати
    }
  }
  openLogin()
  {
    this.showLogin = true;
    this.showRegister = false;
  }

  openRegister()
  {
    this.showRegister = true;
    this.showLogin = false;
  }

  closeModals() {
    this.showLogin = false;
    this.showRegister = false;
  }

  switchToLogin()
  {
    this.showRegister = false;
    this.showLogin = true;
  }

  switchToRegister()
  {
    this.showLogin = false;
    this.showRegister = true;
  }
  title = 'my-angular-app';
  references = [
    {
      "name":"reference1",
      "title":"Reference1 title",
      "phone":"+380961236343",
    }
    ];


}
