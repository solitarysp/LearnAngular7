import {Component, OnInit} from '@angular/core';
import {from, Observable} from 'rxjs';
import {concat} from 'rxjs/internal/observable/concat';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-observables-compared',
  templateUrl: './observables-compared.component.html',
  styleUrls: ['./observables-compared.component.scss']
})
export class ObservablesComparedComponent implements OnInit {
  obs: Observable<any>;
  obsB: Observable<any>;
  arr = [];
  arrB = [];

  constructor() {
  }

  ngOnInit() {
    this.create();
    this.concat();
    this.filter();
    this.filterAndFilter();
  }

  create() {
    console.log('create Observable');
    this.obs = from([1, 2, 3, 4, 5, 7]);
    this.obsB = from(['a', 'b', 'c']);
    this.obs.subscribe(value => {
      console.log(value);
    });
  }

  concat() {
    console.log('concat Observable');
    let obs: Observable<any>;
    obs = concat(this.obs, this.obsB);
    obs.subscribe(value => {
      console.log(value);
    });
  }

  filter() {
    console.log('filter Observable > 3');
    let obs: Observable<any>;
    obs = this.obs.pipe(
      filter(
        value => {
          console.log('filter sô ', value);
          return value > 3;
        })
    );
    obs.subscribe(value => {
      console.log('value ', value, 'lớn hơn 3');
    });
  }

  filterAndFilter() {
    console.log('filter Observable > 3');
    let obs: Observable<any>;
    obs = this.obs.pipe(
      filter(
        value => {
          console.log('filter sô ', value, 'xem có lớn hơn 3 hay không');
          return value > 3;
        }),
      filter(value => {
        console.log('check  sô ', value, 'xem có chia hết cho 2 hay không');
        return value % 2 === 0;
      }),
    );
    obs.subscribe(value => {
      console.log('value ', value, 'lớn hơn 3 và chia hết cho 2');
    });
  }
}
