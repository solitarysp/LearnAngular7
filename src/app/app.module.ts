import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {TestMultilBootstrappingComponent} from './test-multil-bootstrapping/test-multil-bootstrapping.component';
import {ForRootModuleModule} from './forRootModule/for-root-module.module';

@NgModule({
  declarations: [
    AppComponent,
    TestMultilBootstrappingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule,
    // config name root
    ForRootModuleModule.forRoot({userName: 'thanh'})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
