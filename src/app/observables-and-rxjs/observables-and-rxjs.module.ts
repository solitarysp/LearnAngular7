import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservablesAndRxjsRoutingModule } from './observables-and-rxjs-routing.module';
import { ObservablesAndRxjsComponent } from './observables-and-rxjs.component';
import { MulticastingComponent } from './multicasting/multicasting.component';

@NgModule({
  declarations: [ObservablesAndRxjsComponent, MulticastingComponent],
  imports: [
    CommonModule,
    ObservablesAndRxjsRoutingModule
  ]
})
export class ObservablesAndRxjsModule { }
