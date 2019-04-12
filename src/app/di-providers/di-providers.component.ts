import {Component, Inject, InjectionToken, OnInit} from '@angular/core';
import {Logger} from './clazz/logger';
import {BetterLogger} from './clazz/better-logger';
import {OldLogger} from './clazz/old-logger';
import {StudentService} from './service/student-service';

@Component({
  selector: 'app-di-providers',
  templateUrl: './di-providers.component.html',
  styleUrls: ['./di-providers.component.scss']
})
export class DiProvidersComponent implements OnInit {
  APP_CONFIG = new InjectionToken<any>('HERO_DI_CONFIG');

  constructor(private  logger: Logger,
              private  betterLogger: BetterLogger,
              private  oldLogger: OldLogger,
              private  studentService: StudentService,
  ) {
  }

  ngOnInit() {
    this.logger.logError();
    this.betterLogger.log();
    this.oldLogger.logError();
    console.log(this.studentService.name);


  }

}
