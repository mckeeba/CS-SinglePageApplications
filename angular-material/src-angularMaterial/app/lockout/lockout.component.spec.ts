import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockoutComponent } from './lockout.component';

describe('LockoutComponent', () => {
  let component: LockoutComponent;
  let fixture: ComponentFixture<LockoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LockoutComponent]
    });
    fixture = TestBed.createComponent(LockoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
