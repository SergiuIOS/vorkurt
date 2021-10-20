import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewRepoComponent} from "./new-repo.component";
import {NewRepoRouting} from "./new-repo.routing";
import {HeaderNewRepoComponent} from './header-new-repo/header-new-repo.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MiddleComponent} from "./middle/middle.component";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {BottomComponent} from './bottom/bottom.component';
import {SharedModule} from "../../shared/shared.module";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {TemplateRepositoryComponent} from './tooltip/template-repository/template-repository.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatMenuModule} from "@angular/material/menu";


@NgModule({
  declarations: [
    NewRepoComponent,
    HeaderNewRepoComponent,
    MiddleComponent,
    BottomComponent,
    TemplateRepositoryComponent,
  ],
  imports: [
    CommonModule,
    NewRepoRouting,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    SharedModule,
    DragDropModule,
    MatButtonToggleModule,
    MatMenuModule
  ]
})
export class NewRepoModule {
}
