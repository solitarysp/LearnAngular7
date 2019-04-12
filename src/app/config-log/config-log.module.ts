import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigLogRoutingModule } from './config-log-routing.module';
import { ConfigLogComponent } from './config-log.component';

@NgModule({
  declarations: [ConfigLogComponent],
  imports: [
    CommonModule,
    ConfigLogRoutingModule
  ]
})
export class ConfigLogModule { }
