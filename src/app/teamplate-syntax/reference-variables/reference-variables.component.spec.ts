import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceVariablesComponent } from './reference-variables.component';

describe('ReferenceVariablesComponent', () => {
  let component: ReferenceVariablesComponent;
  let fixture: ComponentFixture<ReferenceVariablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenceVariablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
