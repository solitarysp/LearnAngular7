import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup-in-template-driven-forms',
  templateUrl: './setup-in-template-driven-forms.component.html',
  styleUrls: ['./setup-in-template-driven-forms.component.scss']
})
export class SetupInTemplateDrivenFormsComponent implements OnInit {
  favoriteColor = '';
  constructor() { }

  ngOnInit() {
  }

}
