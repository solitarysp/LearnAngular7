import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupInReactiveFormsComponent } from './setup-in-reactive-forms.component';

describe('SetupInReactiveFormsComponent', () => {
  let component: SetupInReactiveFormsComponent;
  let fixture: ComponentFixture<SetupInReactiveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupInReactiveFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupInReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
