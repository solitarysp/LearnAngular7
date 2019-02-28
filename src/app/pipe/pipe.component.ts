import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  birthday = new Date();
  formatBirthday;
  listNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() {
  }

  ngOnInit() {
  }

  addNumber() {
    this.listNumber.push(new Date().getMilliseconds());
  }

  addNumberNewArray() {
    this.listNumber = this.listNumber.concat(new Date().getMilliseconds());
  }
}
