import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RoutingNavigationComponent} from './routing-navigation.component';
import {StudentComponent} from './student/student.component';

const routes: Routes = [
  {
    path: '', component: RoutingNavigationComponent,
    data: {title: 'routing-navigation'},
    children: [
      {path: 'student/:id/test', component: StudentComponent, pathMatch: 'prefix'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingNavigationRoutingModule {
}
