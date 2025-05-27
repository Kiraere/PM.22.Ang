import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveRegistrationComponent } from './reactive-registration.component';

describe('ReactiveRegistrationComponent', () => {
  let component: ReactiveRegistrationComponent;
  let fixture: ComponentFixture<ReactiveRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
