import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicControlsUsingFormArraysComponent } from './dynamic-controls-using-form-arrays.component';

describe('DynamicControlsUsingFormArraysComponent', () => {
  let component: DynamicControlsUsingFormArraysComponent;
  let fixture: ComponentFixture<DynamicControlsUsingFormArraysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicControlsUsingFormArraysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicControlsUsingFormArraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
