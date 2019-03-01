import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-validate',
  templateUrl: './reactive-validate.component.html',
  styleUrls: ['./reactive-validate.component.scss']
})
export class ReactiveValidateComponent implements OnInit {

  usernestedFormFormBuilder = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', [Validators.required, Validators.minLength(5)]],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    })
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

  }


  submitNestedFormFormBuilder() {
    console.log(this.usernestedFormFormBuilder.controls.lastName.errors);

  }

  get f() {
    return this.usernestedFormFormBuilder.controls;
  }
}
