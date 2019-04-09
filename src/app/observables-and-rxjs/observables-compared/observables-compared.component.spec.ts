import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesComparedComponent } from './observables-compared.component';

describe('ObservablesComparedComponent', () => {
  let component: ObservablesComparedComponent;
  let fixture: ComponentFixture<ObservablesComparedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablesComparedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablesComparedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
