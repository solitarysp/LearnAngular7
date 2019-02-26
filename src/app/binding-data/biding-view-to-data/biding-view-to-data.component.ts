import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-biding-view-to-data',
  templateUrl: './biding-view-to-data.component.html',
  styleUrls: ['./biding-view-to-data.component.scss']
})
export class BidingViewToDataComponent implements OnInit {

  @Output() bidingViewToData: EventEmitter = new EventEmitter();
  dataView;

  constructor() {
  }

  ngOnInit() {
  }

  clickBidingData() {
    this.dataView = new Date().getMilliseconds();
    this.bidingViewToData.emit(this.dataView);
  }
}
