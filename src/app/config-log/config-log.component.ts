import {Component, OnInit} from '@angular/core';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'app-config-log',
  templateUrl: './config-log.component.html',
  styleUrls: ['./config-log.component.scss']
})
export class ConfigLogComponent implements OnInit {

  constructor(private log: NGXLogger) {
  }

  ngOnInit() {
    this.log.error('lỗi nặng');
    this.log.debug('debug');
    console.log('s')
  }

}
