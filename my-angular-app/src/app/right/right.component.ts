import { Component, OnInit, inject, signal } from '@angular/core';
import { ApiService } from '../api.service';
import { TemplateRegistrationComponent } from '../template-registration/template-registration.component';
import { ReactiveRegistrationComponent } from '../reactive-registration/reactive-registration.component';

@Component({
  selector: 'app-right',
  imports: [TemplateRegistrationComponent, ReactiveRegistrationComponent],
  standalone: true,

  templateUrl: './right.component.html',
  styleUrl: './right.component.scss'
})
export class RightComponent implements OnInit {
  private api = inject(ApiService);
  aboutMe = signal<string>('Loading...');

  ngOnInit(): void {
    this.api.getAboutMe().subscribe((res) => {
      this.aboutMe.set(res.text);
    });
  }

  makePostReq(){
    this.api.createPost(generateMockObject()).subscribe((data) => {console.log(data)});
  }
}

function generateMockObject() {
  const titles = ["Hello World", "Test Post", "Mock Title", "Random Thoughts", "Daily Update"];
  const bodies = [
    "This is a sample body text.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Generated content for testing purposes.",
    "Here is some mock body text for you.",
    "This is another example of a mock post body."
  ];

  const title = titles[Math.floor(Math.random() * titles.length)];
  const body = bodies[Math.floor(Math.random() * bodies.length)];
  const userId = Math.ceil(Math.random() * 10); // userId between 1 and 10

  return { title, body, userId };
}

