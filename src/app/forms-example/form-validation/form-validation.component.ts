import {Component, OnInit} from '@angular/core';
import {Student} from '../../share/model/student';
import {AbstractControl, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {
  student: Student = new Student();

  constructor() {
  }

  ngOnInit() {
  }

}
