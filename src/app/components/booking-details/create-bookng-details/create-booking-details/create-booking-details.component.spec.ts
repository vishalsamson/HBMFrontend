import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookingDetailsComponent } from './create-booking-details.component';

describe('CreateBookingDetailsComponent', () => {
  let component: CreateBookingDetailsComponent;
  let fixture: ComponentFixture<CreateBookingDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBookingDetailsComponent]
    });
    fixture = TestBed.createComponent(CreateBookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
