import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BindingDataRoutingModule} from './binding-data-routing.module';
import {BindingDataComponent} from './binding-data.component';
import {Biding1WayComponent} from './biding1-way/biding1-way.component';
import {BidingViewToDataComponent} from './biding-view-to-data/biding-view-to-data.component';
import {TwoWayComponent} from './two-way/two-way.component';
import {ForRootModuleModule} from '../forRootModule/for-root-module.module';

@NgModule({
  declarations: [BindingDataComponent, Biding1WayComponent, BidingViewToDataComponent, TwoWayComponent],
  imports: [
    CommonModule,
    BindingDataRoutingModule,
    ForRootModuleModule,

  ]
})
export class BindingDataModule {
}
