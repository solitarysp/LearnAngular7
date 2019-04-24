import {Component, OnInit} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

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
    trigger('Keyframes', [
      // ...
      transition('void => *', [
        style({
          height: '300px',
          opacity: 0.5,
          backgroundColor: 'green'
        }),
        animate('1s', keyframes([
          style({backgroundColor: 'blue'}),
          style({backgroundColor: 'red'}),
          style({backgroundColor: 'orange'})
        ]))
      ]),
      transition('* => void', [
        style({
          height: '100',
          opacity: 0.5,
          backgroundColor: 'green'
        }),

        animate('1s')
      ]),
    ]),

  ]
})
export class AnimationsTransitionsAndTriggersComponent implements OnInit {
  isDisabled = false;
  isOpen = true;

  constructor() {
  }

  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  callBackStart(event: AnimationEvent) {
    console.log(event);
  }

  callBackdone(event: AnimationEvent) {
    console.log(event);

  }

}
