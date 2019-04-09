import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-observables-in-angular',
  templateUrl: './observables-in-angular.component.html',
  styleUrls: ['./observables-in-angular.component.scss']
})
export class ObservablesInAngularComponent implements OnInit {
  time = new Observable(observer => {
      setInterval(() => observer.next(new Date().toString()), 1000);
    }
  );
  visible = true;
  @Output() close = new EventEmitter<any>();
  navStart: Observable<NavigationStart>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.navStart = router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>;
  }

  ngOnInit() {
    this.close.emit(true);
    this.navStart.subscribe(evt => console.log('Navigation Started!'));
    this.activatedRoute.url
      .subscribe(url => console.log('The URL changed to: ' + url));
  }

}
