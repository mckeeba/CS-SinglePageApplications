import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormItComponent } from './form-it.component';

describe('FormItComponent', () => {
  let component: FormItComponent;
  let fixture: ComponentFixture<FormItComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormItComponent]
    });
    fixture = TestBed.createComponent(FormItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
