import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AnimationsTransitionsAndTriggersComponent} from './animations-transitions-and-triggers.component';

const routes: Routes = [{path: '', component: AnimationsTransitionsAndTriggersComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationsTransitionsAndTriggersRoutingModule {
}
