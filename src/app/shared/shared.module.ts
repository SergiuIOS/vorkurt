import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ElixDragDirective} from './utils/directive/elix-drag.directive';
import {SpinnerComponent} from "./spinner/spinner.component";

@NgModule({
  declarations: [SpinnerComponent, ElixDragDirective],
  imports: [
    CommonModule,
  ],
  exports: [SpinnerComponent, ElixDragDirective]
})
export class SharedModule {
}
