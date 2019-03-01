import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveValidateComponent } from './reactive-validate.component';

describe('ReactiveValidateComponent', () => {
  let component: ReactiveValidateComponent;
  let fixture: ComponentFixture<ReactiveValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
