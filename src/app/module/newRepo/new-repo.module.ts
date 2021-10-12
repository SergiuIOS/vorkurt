import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewRepoComponent} from "./new-repo.component";
import {NewRepoRouting} from "./new-repo.routing";
import { HeaderNewRepoComponent } from './header-new-repo/header-new-repo.component';


@NgModule({
  declarations: [
    NewRepoComponent,
    HeaderNewRepoComponent
  ],
  imports: [
    CommonModule,
    NewRepoRouting
  ]
})
export class NewRepoModule {
}
