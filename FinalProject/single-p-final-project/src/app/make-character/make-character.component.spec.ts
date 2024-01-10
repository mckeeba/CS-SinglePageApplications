import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeCharacterComponent } from './make-character.component';

describe('MakeCharacterComponent', () => {
  let component: MakeCharacterComponent;
  let fixture: ComponentFixture<MakeCharacterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakeCharacterComponent]
    });
    fixture = TestBed.createComponent(MakeCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
