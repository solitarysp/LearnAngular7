import {Component, OnInit} from '@angular/core';
import {interval, Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  birthday = new Date();
  formatBirthday;
  listNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  message$: Observable<string>;
  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];

  constructor() {
  }

  ngOnInit() {
    this.resend();
  }

  addNumber() {
    this.listNumber.push(new Date().getMilliseconds());
  }

  addNumberNewArray() {
    this.listNumber = this.listNumber.concat(new Date().getMilliseconds());
  }

  resend() {
    this.message$ = interval(500).pipe(
      map(i => this.messages[i]),
      take(this.messages.length)
    );
  }
}
