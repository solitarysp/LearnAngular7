import {Component, OnInit} from '@angular/core';
import {fromEvent} from 'rxjs/internal/observable/fromEvent';
import {debounceTime, filter, map, retryWhen} from 'rxjs/operators';
import {distinctUntilChanged} from 'rxjs/internal/operators/distinctUntilChanged';
import {switchMap} from 'rxjs/internal/operators/switchMap';
import {ajax} from 'rxjs/ajax';
import {pipe} from 'rxjs/internal/util/pipe';
import {zip} from 'rxjs/internal/observable/zip';
import {mergeMap} from 'rxjs/internal/operators/mergeMap';
import {range, timer} from 'rxjs';

@Component({
  selector: 'app-practical-observable-usage',
  templateUrl: './practical-observable-usage.component.html',
  styleUrls: ['./practical-observable-usage.component.scss']
})
export class PracticalObservableUsageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.typeAheadSuggestions();
    this.exponentialBackoff();
  }

  typeAheadSuggestions() {
    const searchBox = document.getElementById('search-box');
    const typeahead = fromEvent(searchBox, 'input').pipe(
      map((e: KeyboardEvent) => {
        return e.target.value;
      }),
      filter(text => text.length > 2),
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((text) => {
          console.log('data input', text);
          return ajax('/assets/jsonFake/fakeValidateEmail.json');

        }
      )
    );
    typeahead.subscribe(value => {
      console.log(value);
    });
  }

  exponentialBackoff() {
    ajax('/api/endpoint')
      .pipe(this.backoff(3, 2500))
      .subscribe(data => {
        console.log('error');
      });
  }

  backoff(maxTries, ms) {
    return pipe(
      retryWhen(attempts => zip(range(1, maxTries), attempts)
        .pipe(
          map(([i]) => i * i),
          mergeMap(i => timer(i * ms))
        )
      )
    );
  }
}
