import {Component, OnInit} from '@angular/core';
import {from, fromEvent, interval} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {of} from 'rxjs/internal/observable/of';
import {catchError, filter, flatMap, map} from 'rxjs/operators';
import {concat} from 'rxjs/internal/observable/concat';
import {pipe} from 'rxjs/internal/util/pipe';

@Component({
  selector: 'app-rxjs-library',
  templateUrl: './rx-jslibrary.component.html',
  styleUrls: ['./rx-jslibrary.component.scss']
})
export class RxJSLibraryComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.createAnObservableFromAnEvent();
  }

  createAnObservableFromAPromise() {
    const data = from(fetch('/assets/jsonFake/fakeValidateEmail.json'));
// Subscribe to begin listening for async result
    data.subscribe({
      next(response) {
        console.log(response);
      },
      error(err) {
        console.error('Error: ' + err);
      },
      complete() {
        console.log('Completed');
      }
    });
  }

  createAnObservableFromACounter() {
    // Create an Observable that will publish a value on an interval
    const secondsCounter = interval(1000);
// Subscribe to begin publishing values
    secondsCounter.subscribe(n =>
      console.log(`It's been ${n} seconds since subscribing!`));
  }

  createAnObservableFromAnEvent() {
    const el = document.getElementById('createAnObservableFromAnEvent');

// Create an Observable that will publish mouse movements
    const mouseMoves = fromEvent(el, 'mousemove');

// Subscribe to start listening for mouse-move events
    const subscription = mouseMoves.subscribe((evt: MouseEvent) => {
      // Log coords of mouse movements
      console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);

      // When the mouse is over the upper-left of the screen,
      // unsubscribe to stop listening for mouse movements
      if (evt.clientX < 40 && evt.clientY < 40) {
        subscription.unsubscribe();
      }
    });
  }

  createAnObservableThatCreatesAnAJAXRequest() {

// Create an Observable that will create an AJAX request
    const apiData = ajax('/assets/jsonFake/fakeValidateEmail.json');
// Subscribe to create the request
    apiData.subscribe(res => console.log(res.status, res.response));
  }

//////////////////////////////// Operators //////////////////////////////////////
  createAOperatorMap() {
// return về một observable
    const nums = of(1, 2, 3);
// map return về một observable
    const squareValues = map((val: number) => val);
    // đầu vào của map là một observable
    const squaredNums = squareValues(nums);
    console.log('createAOperatorMap');

    squaredNums.subscribe(x => console.log(x));
  }

  createAOperatorFilter() {
// return về một observable
    const nums = of(1, 2, 3);
// map return về một observable
    const squareValues = filter((val: number) => val > 1);
    // đầu vào của map là một observable
    const squaredNums = squareValues(nums);
    console.log('createAOperatorFilter');
    squaredNums.subscribe(x => console.log(x));
  }

  createAOperatorConcat() {
// return về một observable
    const nums = of(1, 2, 3);
    const sourceTwo = of(4, 5, 6);

// map return về một observable
    const squareValues = concat(nums, sourceTwo);
    // đầu vào của map là một observable
    console.log('createAOperatorConcat');
    squareValues.subscribe(x => console.log(x));
  }

  // flatMapp chính là alias  của mergeMap
  createAOperatorFlatMap() {
// return về một observable
    const nums = of('a ', 'b ', 'c ');
    const sourceTwo = of(4, 5, 6);

// map return về một observable
    const squareValues = nums.pipe(flatMap((value) => {
      return interval(1000).pipe(map(i => value + i));
    }));
    // đầu vào của map là một observable
    console.log('createAOperatorFlatMap');
    squareValues.subscribe(x => console.log(x));
  }

  createPipe() {
// return về một observable
    const nums = of(1, 2, 3, 4);

    const squareOddVals = pipe(
      filter((n: number) => n % 2 !== 0),
      map(n => n * n)
    );
    /*   // hoặc sử dụng ngắn gọn
       nums.pipe(
         filter((n: number) => n % 2 !== 0),
         map(n => n * n)
       );
   */
// Create an Observable that will run the filter and map functions
    const squareOdd = squareOddVals(nums);
    // đầu vào của map là một observable
    console.log('createPipe');
    squareOdd.subscribe(x => console.log(x));
  }

  createCatchErrorHanding() {
    const apiData = ajax('/assets/jsonFake/fakeValidateEmail.json1').pipe(
      map(res => {
        console.log(res.response.data);
        if (!res.response.data) {
          throw new Error('Value expected!');
        }
        console.log('return');
        return res.response;
      }),
    );
    apiData.subscribe(value => {
        console.log('thành công');
      },
      error1 => console.log('error catch at khi subscribe'));
  }
}
