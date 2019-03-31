import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservablesAndRxjsRoutingModule } from './observables-and-rxjs-routing.module';
import { ObservablesAndRxjsComponent } from './observables-and-rxjs.component';
import { MulticastingComponent } from './multicasting/multicasting.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';

@NgModule({
  declarations: [ObservablesAndRxjsComponent, MulticastingComponent, ErrorHandlingComponent],
  imports: [
    CommonModule,
    ObservablesAndRxjsRoutingModule
  ]
})
export class ObservablesAndRxjsModule { }
