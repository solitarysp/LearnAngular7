import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidingViewToDataComponent } from './biding-view-to-data.component';

describe('BidingViewToDataComponent', () => {
  let component: BidingViewToDataComponent;
  let fixture: ComponentFixture<BidingViewToDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidingViewToDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidingViewToDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
