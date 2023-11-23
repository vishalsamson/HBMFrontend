import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormaluserSidebarComponent } from './normaluser-sidebar.component';

describe('NormaluserSidebarComponent', () => {
  let component: NormaluserSidebarComponent;
  let fixture: ComponentFixture<NormaluserSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormaluserSidebarComponent]
    });
    fixture = TestBed.createComponent(NormaluserSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
