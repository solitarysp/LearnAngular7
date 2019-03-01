import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsExampleRoutingModule} from './forms-example-routing.module';
import {FormsExampleComponent} from './forms-example.component';
import {SetupInReactiveFormsComponent} from './setup-in-reactive-forms/setup-in-reactive-forms.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SetupInTemplateDrivenFormsComponent} from './setup-in-template-driven-forms/setup-in-template-driven-forms.component';
import {ReactiveComponent} from './reactive/reactive.component';

@NgModule({
  declarations: [FormsExampleComponent, SetupInReactiveFormsComponent, SetupInTemplateDrivenFormsComponent, ReactiveComponent,],
  imports: [
    CommonModule,
    FormsExampleRoutingModule,
    // sử dụng khi dùng reactive
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FormsExampleModule {
}
