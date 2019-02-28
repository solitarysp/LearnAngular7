import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupInTemplateDrivenFormsComponent } from './setup-in-template-driven-forms.component';

describe('SetupInTemplateDrivenFormsComponent', () => {
  let component: SetupInTemplateDrivenFormsComponent;
  let fixture: ComponentFixture<SetupInTemplateDrivenFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupInTemplateDrivenFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupInTemplateDrivenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
