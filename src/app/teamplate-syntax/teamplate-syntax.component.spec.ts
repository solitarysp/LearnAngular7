import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamplateSyntaxComponent } from './teamplate-syntax.component';

describe('TeamplateSyntaxComponent', () => {
  let component: TeamplateSyntaxComponent;
  let fixture: ComponentFixture<TeamplateSyntaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamplateSyntaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamplateSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
