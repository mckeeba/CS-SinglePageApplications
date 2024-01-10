import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSuccessDialogComponent } from './character-success-dialog.component';

describe('CharacterSuccessDialogComponent', () => {
  let component: CharacterSuccessDialogComponent;
  let fixture: ComponentFixture<CharacterSuccessDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterSuccessDialogComponent]
    });
    fixture = TestBed.createComponent(CharacterSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
