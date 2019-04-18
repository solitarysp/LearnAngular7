import {Component, OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-angular-animations',
  templateUrl: './angular-animations.component.html',
  styleUrls: ['./angular-animations.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('closed => open, open => closed', [
        animate('1s 0.2s ease-in')
      ]),
    ]),
    trigger('openCloseVip', [
      transition(':enter', [
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow'
        }),
        animate('1s 0.2s ease-in')
      ]),
      transition(':leave', [
        style({
          height: '100px',
          opacity: 0.5,
          backgroundColor: 'green'
        }),
        animate('1s 0.2s ease-in')
      ]),
    ]),
  ]
})
export class AngularAnimationsComponent implements OnInit {
  isOpen = true;

  constructor() {
  }

  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
