import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ObservablesAndRxjsComponent} from './observables-and-rxjs.component';

const routes: Routes = [
  {
    path: '',
    component: ObservablesAndRxjsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservablesAndRxjsRoutingModule {
}
