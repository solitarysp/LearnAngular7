import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'directive', loadChildren: './directive/highlight/highlight.module#HighlightModule'},
  {path: 'binding-data', loadChildren: './binding-data/binding-data.module#BindingDataModule'}
];
const config: ExtraOptions = {
  useHash: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
