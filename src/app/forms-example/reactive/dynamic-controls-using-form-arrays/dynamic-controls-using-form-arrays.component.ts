import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-dynamic-controls-using-form-arrays',
  templateUrl: './dynamic-controls-using-form-arrays.component.html',
  styleUrls: ['./dynamic-controls-using-form-arrays.component.scss']
})
export class DynamicControlsUsingFormArraysComponent implements OnInit {
  user = this.fb.group({
    aliases: this.fb.array([this.fb.control(1), this.fb.control(2), this.fb.control(3)])
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  addArray(value) {
    this.aliases.push(this.fb.control(value));
  }

  get aliases() {
    return this.user.get('aliases') as FormArray;
  }

}
