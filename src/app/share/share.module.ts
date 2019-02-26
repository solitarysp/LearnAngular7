import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HighlightDirective} from './highlight.directive';
import {StructuralDirectivesDirective} from './structural-directives.directive';

const declarations = [HighlightDirective, StructuralDirectivesDirective];

@NgModule({
  declarations: [declarations],
  imports: [
    CommonModule
  ], exports: [declarations]
})
export class ShareModule {
}
