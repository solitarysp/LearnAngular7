import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMultilBootstrappingComponent } from './test-multil-bootstrapping.component';

describe('TestMultilBootstrappingComponent', () => {
  let component: TestMultilBootstrappingComponent;
  let fixture: ComponentFixture<TestMultilBootstrappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMultilBootstrappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMultilBootstrappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
