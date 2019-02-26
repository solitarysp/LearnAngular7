import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StructuralDirectivesRoutingModule } from './structural-directives-routing.module';
import { StructuralDirectivesComponent } from './structural-directives.component';

@NgModule({
  declarations: [StructuralDirectivesComponent],
  imports: [
    CommonModule,
    StructuralDirectivesRoutingModule
  ]
})
export class StructuralDirectivesModule { }
