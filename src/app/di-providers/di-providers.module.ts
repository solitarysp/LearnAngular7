import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DiProvidersRoutingModule} from './di-providers-routing.module';
import {DiProvidersComponent} from './di-providers.component';
import {Logger} from './clazz/logger';
import {BetterLogger} from './clazz/better-logger';
import {OldLogger} from './clazz/old-logger';
import {StudentService} from './service/student-service';
import {FactoryProviders} from './clazz/factory-providers';

@NgModule({
  declarations: [DiProvidersComponent],
  imports: [
    CommonModule,
    DiProvidersRoutingModule
  ],
  providers: [{provide: Logger, useClass: Logger},
    {provide: BetterLogger, useClass: BetterLogger},
    {provide: OldLogger, useExisting: Logger},
    {provide: StudentService, useValue: {name: 'thành'}},
    {
      provide: FactoryProviders,
      useFactory: (logger: Logger) => {
        console.log('factory ', logger.logError());
        return new FactoryProviders();
      },
      deps: [Logger]
    }
  ]
})

export class DiProvidersModule {

}

