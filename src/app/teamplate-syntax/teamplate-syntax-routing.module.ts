import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeamplateSyntaxComponent} from './teamplate-syntax.component';

const routes: Routes = [{path: '', component: TeamplateSyntaxComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamplateSyntaxRoutingModule {
}
