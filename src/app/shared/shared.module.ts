import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from "../spinner/spinner.component";
import { ElixDragDirective } from './utils/directive/elix-drag.directive';

@NgModule({
  declarations: [SpinnerComponent, ElixDragDirective],
  imports: [
    CommonModule
  ],
    exports: [SpinnerComponent, ElixDragDirective]
})
export class SharedModule {
}
