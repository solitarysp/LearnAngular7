import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss'],
})
export class StructuralDirectivesComponent implements OnInit {
  bienIf = true;

  forList = [1, 2, 3, 4];

  switchValue = 1;

  constructor() {
  }

  ngOnInit() {
  }

  trackById(item, object) {
    return item;
  }

}
