import {Component, OnInit} from '@angular/core';
import {Student} from '../../share/model/student';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {forbiddenNameValidator, identityRevealedValidator} from '../../share/forbidden-validator.directive';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {
  student: Student = new Student();

  /*  studentReactive = this.fb.group({
      firstName: ['', [
        Validators.required,
        Validators.minLength(10),
        forbiddenNameValidator(/bob/i)
      ]]
    }, { validators: identityRevealedValidator });
    */
  studentReactive = new FormGroup({
    'firstName': new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      forbiddenNameValidator(/bob/i)
    ])
  }, {validators: identityRevealedValidator});


  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  get getFbFirstName() {
    return this.studentReactive.get('firstName');
  }

  get getStudentReactive() {
    return this.studentReactive;
  }
}
