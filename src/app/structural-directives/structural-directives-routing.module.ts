import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StructuralDirectivesComponent} from './structural-directives.component';

const routes: Routes = [{path: '', component: StructuralDirectivesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructuralDirectivesRoutingModule {
}
