import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AngularAnimationsRoutingModule} from './angular-animations-routing.module';
import {AngularAnimationsComponent} from './angular-animations.component';

@NgModule({
  declarations: [AngularAnimationsComponent],
  imports: [
    CommonModule,
    AngularAnimationsRoutingModule,
  ]
})
export class AngularAnimationsModule {
}
