import {Component, OnInit} from '@angular/core';
import {Student} from '../../share/model/student';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {
  student: Student = new Student();

  constructor() {
  }

  ngOnInit() {
  }

  getDataCu() {
    console.log(this.student);
  }
}
