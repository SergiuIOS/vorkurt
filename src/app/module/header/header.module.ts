import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppHeaderRouting} from "./header.routing";
import {HeaderComponent} from "./header.component";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    MatIconModule,
    FormsModule,
    CommonModule,
    AppHeaderRouting
  ]
})
export class HeaderModule {
}
