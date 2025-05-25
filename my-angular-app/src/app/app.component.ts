import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LeftComponent} from './left/left.component';
import {RightComponent} from './right/right.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [LeftComponent, RightComponent],
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
