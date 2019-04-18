import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationsTransitionsAndTriggersRoutingModule } from './animations-transitions-and-triggers-routing.module';
import { AnimationsTransitionsAndTriggersComponent } from './animations-transitions-and-triggers.component';

@NgModule({
  declarations: [AnimationsTransitionsAndTriggersComponent],
  imports: [
    CommonModule,
    AnimationsTransitionsAndTriggersRoutingModule
  ]
})
export class AnimationsTransitionsAndTriggersModule { }
