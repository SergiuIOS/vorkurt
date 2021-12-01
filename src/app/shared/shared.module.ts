import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import {
  BtnPrimaryDirective,
  ElixDragDirective,
  InputPrimaryDirective,
  TooltipDirectiveDirective,
}                                 from './utils/services';
import { ElixSpinnerComponent }   from './component/spinner/elix-spinner.component';
import { ElixJumbotronComponent } from './component/jumbotron/elix-jumbotron.component';

@NgModule( {
  declarations: [
    ElixSpinnerComponent,
    ElixDragDirective,
    ElixJumbotronComponent,
    BtnPrimaryDirective,
    InputPrimaryDirective,
    TooltipDirectiveDirective,
  ],
  imports: [ CommonModule ],
  exports: [
    ElixSpinnerComponent,
    ElixDragDirective,
    ElixJumbotronComponent,
    BtnPrimaryDirective,
    InputPrimaryDirective,
    TooltipDirectiveDirective,
  ],
} )
export class SharedModule {
}
