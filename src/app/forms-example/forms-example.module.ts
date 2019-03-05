import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsExampleRoutingModule} from './forms-example-routing.module';
import {FormsExampleComponent} from './forms-example.component';
import {SetupInReactiveFormsComponent} from './setup-in-reactive-forms/setup-in-reactive-forms.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SetupInTemplateDrivenFormsComponent} from './setup-in-template-driven-forms/setup-in-template-driven-forms.component';
import {ReactiveComponent} from './reactive/reactive.component';
import {ReactiveValidateComponent} from './reactive/reactive-validate/reactive-validate.component';
import {DynamicControlsUsingFormArraysComponent} from './reactive/dynamic-controls-using-form-arrays/dynamic-controls-using-form-arrays.component';
import {TemplateDrivenComponent} from './template-driven/template-driven.component';
import {FormValidationComponent} from './form-validation/form-validation.component';
import {ShareModule} from '../share/share.module';

@NgModule({
  declarations: [FormsExampleComponent, SetupInReactiveFormsComponent, SetupInTemplateDrivenFormsComponent, ReactiveComponent,
    ReactiveValidateComponent, DynamicControlsUsingFormArraysComponent, TemplateDrivenComponent, FormValidationComponent],
  imports: [
    CommonModule,
    FormsExampleRoutingModule,
    // sử dụng khi dùng reactive
    ShareModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FormsExampleModule {
}
