import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ElixDragDirective} from './utils/directive/elix-drag.directive';
import {ElixSpinnerComponent} from "./spinner/elix-spinner.component";
import {ElixJumbotronComponent} from './component/jumbotron/elix-jumbotron.component';

@NgModule({
  declarations: [ElixSpinnerComponent, ElixDragDirective, ElixJumbotronComponent],
  imports: [
    CommonModule,
  ],
  exports: [ElixSpinnerComponent, ElixDragDirective, ElixJumbotronComponent]
})
export class SharedModule {
}
