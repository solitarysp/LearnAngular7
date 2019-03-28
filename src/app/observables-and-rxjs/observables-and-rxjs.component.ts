import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {timeInterval} from 'rxjs/operators';

@Component({
  selector: 'app-observables-and-rxjs',
  templateUrl: './observables-and-rxjs.component.html',
  styleUrls: ['./observables-and-rxjs.component.scss']
})
export class ObservablesAndRxjsComponent implements OnInit {
  msgs: Array<string> = new Array<string>();
  msgsObservable: Observable<any>;
  a = 0;

  constructor() {
    this.msgsObservable = new Observable(subscriber => {
      this.msgs.push('bắt đầu chạy Observable msg');
      const timeInter = setInterval(() => {
        subscriber.next('msg ' + ++this.a);
      }, 1000);
      setTimeout(() => {
        subscriber.complete();
      }, 10000);

    });
  }

  ngOnInit() {

  }

  regMsg() {
    this.msgsObservable.subscribe(value => {
      this.msgs.push(value);
    }, error1 => {
      console.log(error1);
    }, () => {
      console.log('done');
    });
  }

  getLocations() {
    let locations: Observable<any>;

    locations = new Observable((observer) => {
      if (window.navigator.geolocation) {
        window.navigator.geolocation.watchPosition(position => {
          observer.next(position);
        });
      }
    });
    const locationsSubscription = locations.subscribe({
      next(position) {
        console.log('Current Position: ', position);
      },
      error(msg) {
        console.log('Error Getting Location: ', msg);
      },
    });
    //  locationsSubscription.unsubscribe();

  }

}
