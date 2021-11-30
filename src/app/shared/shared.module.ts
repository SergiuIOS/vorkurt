import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElixDragDirective } from './utils/directive/elix-drag.directive';
import { ElixSpinnerComponent } from './spinner/elix-spinner.component';
import { ElixJumbotronComponent } from './component/jumbotron/elix-jumbotron.component';
import { BtnPrimaryDirective } from './directives/btn-primary.directive';
import { InputPrimaryDirective } from './directives/input-primary.directive';
import { TooltipDirectiveDirective } from './directives/tooltip/tooltip-directive.directive';

@NgModule({
  declarations: [
    ElixSpinnerComponent,
    ElixDragDirective,
    ElixJumbotronComponent,
    BtnPrimaryDirective,
    InputPrimaryDirective,
    TooltipDirectiveDirective,
  ],
  imports: [CommonModule],
  exports: [
    ElixSpinnerComponent,
    ElixDragDirective,
    ElixJumbotronComponent,
    BtnPrimaryDirective,
    InputPrimaryDirective,
    TooltipDirectiveDirective,
  ],
})
export class SharedModule {}
