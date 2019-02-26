import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PipeRoutingModule} from './pipe-routing.module';
import {PipeComponent} from './pipe.component';
import {ShareModule} from '../share/share.module';

@NgModule({
  declarations: [PipeComponent],
  imports: [
    CommonModule,
    ShareModule,
    PipeRoutingModule
  ]
})
export class PipeModule {
}
