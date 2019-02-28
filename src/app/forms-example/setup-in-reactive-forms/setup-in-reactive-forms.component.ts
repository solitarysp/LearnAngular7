import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-setup-in-reactive-forms',
  templateUrl: './setup-in-reactive-forms.component.html',
  styleUrls: ['./setup-in-reactive-forms.component.scss']
})
export class SetupInReactiveFormsComponent implements OnInit {
  favoriteColorControl = new FormControl('');
  constructor() { }

  ngOnInit() {
  }

}
