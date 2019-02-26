import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StructuralDirectivesRoutingModule} from './structural-directives-routing.module';
import {StructuralDirectivesComponent} from './structural-directives.component';
import {ShareModule} from '../share/share.module';

@NgModule({
  declarations: [StructuralDirectivesComponent],
  imports: [
    CommonModule,
    ShareModule,
    StructuralDirectivesRoutingModule
  ]
})
export class StructuralDirectivesModule {
}
