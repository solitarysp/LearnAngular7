import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingNavigationRoutingModule } from './routing-navigation-routing.module';
import { RoutingNavigationComponent } from './routing-navigation.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [RoutingNavigationComponent, StudentComponent],
  imports: [
    CommonModule,
    RoutingNavigationRoutingModule
  ]
})
export class RoutingNavigationModule { }
