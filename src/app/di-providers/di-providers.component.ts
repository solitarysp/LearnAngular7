import {Component, InjectionToken, OnInit, Self, SkipSelf} from '@angular/core';
import {Logger} from './clazz/logger';
import {BetterLogger} from './clazz/better-logger';
import {OldLogger} from './clazz/old-logger';
import {StudentService} from './service/student-service';
import {FactoryProviders} from './clazz/factory-providers';
import {ConfigServiceInitService} from './service/config-service-init.service';
import {BROWSER_STORAGE, BrowserStorageServiceService} from './browser-storage-service.service';

export const TITLE = new InjectionToken<string>('title');

@Component({
  selector: 'app-di-providers',
  templateUrl: './di-providers.component.html',
  styleUrls: ['./di-providers.component.scss'],
  providers: [BrowserStorageServiceService,
    {provide: BROWSER_STORAGE, useFactory: () => sessionStorage},
    {provide: TITLE, useValue: 'Hero of the Month'}
    ]
})
export class DiProvidersComponent implements OnInit {

  constructor(private  logger: Logger,
              private  betterLogger: BetterLogger,
              private  oldLogger: OldLogger,
              private  studentService: StudentService,
              private  factoryProviders: FactoryProviders,
              private  configServiceInitService: ConfigServiceInitService,
              @SkipSelf() private  browserStorageServiceService: BrowserStorageServiceService,
              @Self() private  sessionStorageService: BrowserStorageServiceService,
  ) {
  }

  ngOnInit() {
    this.logger.logError();
    this.betterLogger.log();
    this.oldLogger.logError();
    console.log(this.studentService.name);
    //
    console.log('localStorage');
    this.browserStorageServiceService.set('testlocalStorage', 'testlocalStorage');
    console.log(this.browserStorageServiceService.get('testlocalStorage'));
    console.log('sessionStorage');
    this.sessionStorageService.set('testsessionStorage', 'testsessionStorage');
    console.log(this.sessionStorageService.get('testsessionStorage'));

  }

}
