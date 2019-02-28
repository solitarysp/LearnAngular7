import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'directive', loadChildren: './directive/highlight/highlight.module#HighlightModule'},
  {path: 'binding-data', loadChildren: './binding-data/binding-data.module#BindingDataModule'},
  {path: 'structural-directives', loadChildren: './structural-directives/structural-directives.module#StructuralDirectivesModule'},
  {path: 'pipe', loadChildren: './pipe/pipe.module#PipeModule'},
  {path: 'teamplate-syntax', loadChildren: './teamplate-syntax/teamplate-syntax.module#TeamplateSyntaxModule'}
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
