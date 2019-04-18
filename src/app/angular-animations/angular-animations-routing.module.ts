import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AngularAnimationsComponent} from './angular-animations.component';

const routes: Routes = [
  {
    path: '',
    component: AngularAnimationsComponent,
    children: [
      {path: 'introduction', loadChildren: './introduction/introduction.module#IntroductionModule'},
      {
        path: 'animations-transitions-and-triggers',
        loadChildren: './animations-transitions-and-triggers/animations-transitions-and-triggers.module#AnimationsTransitionsAndTriggersModule'
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularAnimationsRoutingModule {
}
