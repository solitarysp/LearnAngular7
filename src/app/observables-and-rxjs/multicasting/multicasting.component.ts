import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-multicasting',
  templateUrl: './multicasting.component.html',
  styleUrls: ['./multicasting.component.scss']
})
export class MulticastingComponent implements OnInit {
  multicastSequence: Observable<any>;
  observers = [];

  constructor() {
  }

  ngOnInit() {
    this.multicastSequence = new Observable((observer) => {
      this.observers.push(observer);
    });

    this.multicastSequence.subscribe({
      next(num) {
        console.log('1nd subscribe: ' + num);
      },
      complete() {
        console.log('1nd sequence finished.');
      }
    });

    this.multicastSequence.subscribe({
      next(num) {
        console.log('2nd subscribe: ' + num);
      },
      complete() {
        console.log('2nd sequence finished.');
      }
    });
    this.multicastSequence.subscribe({
      next(num) {
        console.log('3nd subscribe: ' + num);
      },
      complete() {
        console.log('3nd sequence finished.');
      }
    });
    this.multicastSequence.subscribe({
      next(num) {
        console.log('4nd subscribe: ' + num);
      },
      complete() {
        console.log('4nd sequence finished.');
      }
    });

    this.multicastSequence.subscribe({
      next(num) {
        console.log('5nd subscribe: ' + num);
      },
      complete() {
        console.log('5nd sequence finished.');
      }
    });
    this.next('data1');

  }

  next(data) {
    this.observers.forEach(obs => obs.next(data));

    this.observers.forEach(obs => obs.complete(data));

  }

  connect() {
    return (observer) => {
      this.observers.push(observer);
    };
  }
}
