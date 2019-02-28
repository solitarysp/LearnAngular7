import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-expression-operators',
  templateUrl: './expression-operators.component.html',
  styleUrls: ['./expression-operators.component.scss']
})
export class ExpressionOperatorsComponent implements OnInit {

  // ===
  showPipe = false;
  operatorHoiCham = false;
  employeeNotInit: Employee;
  employee: Employee;

  constructor() {
  }

  ngOnInit() {
    this.employee = new Employee();
    this.employee.id = 1;
  }

}

class Employee {
  id;
  name;
  classz: Classz;
}

class Classz {
  id;
}
