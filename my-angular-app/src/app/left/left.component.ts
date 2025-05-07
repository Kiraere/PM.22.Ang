// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-left',
//   imports: [],
//   standalone: true,
//
//   templateUrl: './left.component.html',
//   styleUrl: './left.component.scss'
// })
// export class LeftComponent {
//
// }

import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-left',
  standalone: true,
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss'], // виправлено styleUrl -> styleUrls
})
export class LeftComponent {
  @Input() references: { name: string; title: string; phone: string }[] = [];

  @Output() referenceClicked = new EventEmitter<string>();

  onReferenceClick(phone: string) {
    this.referenceClicked.emit(phone);
  }
}
