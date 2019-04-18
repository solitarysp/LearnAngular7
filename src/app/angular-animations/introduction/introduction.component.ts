import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
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
        style({transform: 'translateX(-100%)'}),
        animate('1s 0.2s ease-in')
      ]),
      transition(':leave', [
        animate('1s 0.2s ease-in', style({transform: 'translateX(-100%)'}))
      ]),
    ]),
  ]

})
export class IntroductionComponent implements OnInit {
  isOpen = true;

  constructor() {
  }

  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
