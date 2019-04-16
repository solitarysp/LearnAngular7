import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'directive', loadChildren: './directive/highlight/highlight.module#HighlightModule'},
  {path: 'binding-data', loadChildren: './binding-data/binding-data.module#BindingDataModule'},
  {path: 'structural-directives', loadChildren: './structural-directives/structural-directives.module#StructuralDirectivesModule'},
  {path: 'pipe', loadChildren: './pipe/pipe.module#PipeModule'},
  {path: 'teamplate-syntax', loadChildren: './teamplate-syntax/teamplate-syntax.module#TeamplateSyntaxModule'},
  {path: 'forms', loadChildren: './forms-example/forms-example.module#FormsExampleModule'},
  {path: 'observables-and-rxjs', loadChildren: './observables-and-rxjs/observables-and-rxjs.module#ObservablesAndRxjsModule'},
  {path: 'customers', loadChildren: './customers/customers.module#CustomersModule'},
  {path: 'config-log', loadChildren: './config-log/config-log.module#ConfigLogModule'},
  {path: 'di-providers', loadChildren: './di-providers/di-providers.module#DiProvidersModule'},
  {path: 'http-client', loadChildren: './http-client/http-client.module#HttpClientModule'},

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
