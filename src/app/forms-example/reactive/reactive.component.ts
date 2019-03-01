import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Student} from '../../share/model/student';
import {Address} from '../../share/model/address';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
  name = new FormControl('test');
  user = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  usernestedForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    })
  });

  usernestedFormFormBuilder = this.fb.group({
    firstName: [''],
    lastName: [''],
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
    // set default value
    this.user.setValue({firstName: '2323', lastName: '123423'});
    // set default value

    const student: Student = new Student();
    student.lastName = 'thanh';

    const address: Address = new Address();
    address.city = 'hanoi';
    address.state = 'state';


    student.address = address;
    this.usernestedForm.patchValue(student);
  }

  submitUser() {
    console.log(this.user.value);
    console.log(this.user.valid);
  }

  submitNestedForm() {
    this.usernestedForm.setValue(this.usernestedForm.value);
    console.log(this.usernestedForm.value);

  }

  submitNestedFormFormBuilder() {
    this.usernestedForm.setValue(this.usernestedFormFormBuilder.value);
    console.log(this.usernestedFormFormBuilder.value);

  }
}
