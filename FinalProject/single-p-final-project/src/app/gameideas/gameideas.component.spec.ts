import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameideasComponent } from './gameideas.component';

describe('GameideasComponent', () => {
  let component: GameideasComponent;
  let fixture: ComponentFixture<GameideasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameideasComponent]
    });
    fixture = TestBed.createComponent(GameideasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
