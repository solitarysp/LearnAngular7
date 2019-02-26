import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HighlightDirective} from './highlight.directive';
import {StructuralDirectivesDirective} from './structural-directives.directive';
import { Pipex2Pipe } from './pipex2.pipe';

const declarations = [HighlightDirective, StructuralDirectivesDirective];

@NgModule({
  declarations: [declarations, Pipex2Pipe],
  imports: [
    CommonModule
  ], exports: [declarations]
})
export class ShareModule {
}
