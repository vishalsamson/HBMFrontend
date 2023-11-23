import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRoomDetailsComponent } from './all-room-details.component';

describe('AllRoomDetailsComponent', () => {
  let component: AllRoomDetailsComponent;
  let fixture: ComponentFixture<AllRoomDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllRoomDetailsComponent]
    });
    fixture = TestBed.createComponent(AllRoomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
