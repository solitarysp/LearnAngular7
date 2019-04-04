import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJSLibraryComponent } from './rx-jslibrary.component';

describe('RxJSLibraryComponent', () => {
  let component: RxJSLibraryComponent;
  let fixture: ComponentFixture<RxJSLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxJSLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxJSLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
