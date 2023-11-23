import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBookingDetailsComponent } from './all-booking-details.component';

describe('AllBookingDetailsComponent', () => {
  let component: AllBookingDetailsComponent;
  let fixture: ComponentFixture<AllBookingDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllBookingDetailsComponent]
    });
    fixture = TestBed.createComponent(AllBookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
