import {Component, NgModule} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LeftComponent} from './left/left.component';
import {RightComponent} from './right/right.component';
import {TemplateRegistrationComponent} from './template-registration/template-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveRegistrationComponent } from './reactive-registration/reactive-registration.component';

@Component({
  selector: 'app-root',
  imports: [LeftComponent, RightComponent, TemplateRegistrationComponent, ReactiveRegistrationComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-app';
  references = [
    {
      "name":"reference1",
      "title":"Reference1 title",
      "phone":"+380961236343",
    }
    ];


}
