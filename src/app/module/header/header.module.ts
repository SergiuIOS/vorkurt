import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppHeaderRouting} from "./header.routing";
import {HeaderComponent} from "./header.component";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import { PopUpLoginComponent } from './pop-up-login/pop-up-login.component';
import {OverlayModule} from "@angular/cdk/overlay";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    HeaderComponent,
    PopUpLoginComponent
  ],
  imports: [
    OverlayModule,
    MatIconModule,
    FormsModule,
    CommonModule,
    AppHeaderRouting,
    DragDropModule,
    SharedModule
  ]
})
export class HeaderModule {
}
