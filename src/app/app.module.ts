import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import {TestMultilBootstrappingComponent} from './test-multil-bootstrapping/test-multil-bootstrapping.component';
import {ForRootModuleModule} from './forRootModule/for-root-module.module';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';
import {RequestInterceptorService} from './share/Interceptor/request-interceptor.service';
import {ResponseInterceptorService} from './share/Interceptor/response-interceptor.service';
import {ErrorInterceptorService} from './share/Interceptor/error-interceptor.service';
import {Request2InterceptorService} from './share/Interceptor/request2-interceptor.service';
import {CachingService} from './share/Interceptor/caching.service';

export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: Request2InterceptorService, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptorService, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: CachingService, multi: true},
]; 

@NgModule({
  declarations: [
    AppComponent,
    TestMultilBootstrappingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR}),
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
    AppRoutingModule,
    // config name root
    ForRootModuleModule.forRoot({userName: 'thanh'})
  ],
  providers: [
    httpInterceptorProviders,
  ],
  bootstrap: [TestMultilBootstrappingComponent, AppComponent],
})
export class AppModule {
}

