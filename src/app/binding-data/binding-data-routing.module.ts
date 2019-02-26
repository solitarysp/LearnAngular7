import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BindingDataComponent} from './binding-data.component';

const routes: Routes = [{path: '', component: BindingDataComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BindingDataRoutingModule {
}
