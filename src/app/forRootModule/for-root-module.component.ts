import {Component, OnInit} from '@angular/core';
import {ForRootService} from './for-root.service';

@Component({
  selector: 'app-for-root-module',
  templateUrl: './for-root-module.component.html',
  styleUrls: ['./for-root-module.component.scss']
})
export class ForRootModuleComponent implements OnInit {

  constructor(private forRootService: ForRootService) {
  }

  ngOnInit() {
    console.log(this.forRootService.getName());
  }

}
