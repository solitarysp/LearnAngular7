import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-animations-transitions-and-triggers',
  templateUrl: './animations-transitions-and-triggers.component.html',
  styleUrls: ['./animations-transitions-and-triggers.component.scss'],
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
      transition('open => *', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
      transition('* => *', [
        animate('1s')
      ]),
    ]), trigger('voidandasterisk', [
      // ...
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate('1s')
      ]),
      transition('* => void', [
        animate('0.5s', style({transform: 'translateX(-100%)'}))
      ]),
    ]),

  ]
})
export class AnimationsTransitionsAndTriggersComponent implements OnInit {

  isOpen = true;

  constructor() {
  }

  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
