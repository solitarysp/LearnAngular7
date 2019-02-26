import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.scss']
})
export class TwoWayComponent implements OnInit {
  @Input() size;
  @Output() sizeChange: EventEmitter = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  changeSize() {
    const datanew = new Date().getMilliseconds();
    this.sizeChange.emit(datanew);
  }
}
