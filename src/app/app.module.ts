import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {TestMultilBootstrappingComponent} from './test-multil-bootstrapping/test-multil-bootstrapping.component';
import {ForRootModuleModule} from './forRootModule/for-root-module.module';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';

@NgModule({
  declarations: [
    AppComponent,
    TestMultilBootstrappingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR}),

    AppRoutingModule,
    // config name root
    ForRootModuleModule.forRoot({userName: 'thanh'})
  ],
  providers: [],
  bootstrap: [TestMultilBootstrappingComponent, AppComponent],
})
export class AppModule {
}
