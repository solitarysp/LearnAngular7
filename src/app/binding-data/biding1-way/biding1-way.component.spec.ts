import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Biding1WayComponent } from './biding1-way.component';

describe('Biding1WayComponent', () => {
  let component: Biding1WayComponent;
  let fixture: ComponentFixture<Biding1WayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Biding1WayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Biding1WayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
