import {NgModule, Optional} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ObservablesAndRxjsRoutingModule} from './observables-and-rxjs-routing.module';
import {ObservablesAndRxjsComponent} from './observables-and-rxjs.component';
import {MulticastingComponent} from './multicasting/multicasting.component';
import {ErrorHandlingComponent} from './error-handling/error-handling.component';
import {RxJSLibraryComponent} from './rx-jslibrary/rx-jslibrary.component';
import {ObservablesInAngularComponent} from './observables-in-angular/observables-in-angular.component';
import {PracticalObservableUsageComponent} from './practical-observable-usage/practical-observable-usage.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ObservablesAndRxjsComponent, MulticastingComponent, ErrorHandlingComponent, RxJSLibraryComponent,
    ObservablesInAngularComponent, PracticalObservableUsageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ObservablesAndRxjsRoutingModule
  ]
})
export class ObservablesAndRxjsModule {
}
