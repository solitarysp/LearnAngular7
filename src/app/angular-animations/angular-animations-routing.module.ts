import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AngularAnimationsComponent} from './angular-animations.component';

const routes: Routes = [
  {
    path: '',
    component: AngularAnimationsComponent,
    children: [
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularAnimationsRoutingModule {
}
