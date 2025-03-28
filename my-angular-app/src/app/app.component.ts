import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LeftComponent} from './left/left.component';
import {RightComponent} from './right/right.component';

@Component({
  selector: 'app-root',
  imports: [LeftComponent, RightComponent, RouterOutlet],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-app';
}
