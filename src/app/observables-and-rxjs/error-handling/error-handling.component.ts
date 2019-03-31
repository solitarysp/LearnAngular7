import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.scss']
})
export class ErrorHandlingComponent implements OnInit {
  isError: boolean;
  msgsObservable: Observable<any>;

  constructor() {
    this.msgsObservable = new Observable(subscriber => {
      setTimeout(() => {
        subscriber.error('lỗi');
        console.log('Sau khi call error');
      }, 1000);

    });
  }

  ngOnInit() {
    this.msgsObservable.subscribe(value => {
      this.isError = false;
    }, error1 => {
      this.isError = true;
      console.log(error1);
    });
  }

}
