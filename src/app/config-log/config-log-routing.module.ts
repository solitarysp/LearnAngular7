import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ConfigLogComponent} from './config-log.component';

const routes: Routes = [{path: '', component: ConfigLogComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigLogRoutingModule {
}
