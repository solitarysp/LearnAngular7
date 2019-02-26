import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HighlightRoutingModule} from './highlight-routing.module';
import {HighlightComponent} from './highlight.component';
import {ShareModule} from '../../share/share.module';

@NgModule({
  declarations: [HighlightComponent],
  imports: [
    ShareModule,
    CommonModule,
    HighlightRoutingModule
  ]
})
export class HighlightModule {
}
