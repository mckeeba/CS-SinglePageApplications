import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTimeComponent } from './table-time.component';

describe('TableTimeComponent', () => {
  let component: TableTimeComponent;
  let fixture: ComponentFixture<TableTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableTimeComponent]
    });
    fixture = TestBed.createComponent(TableTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
