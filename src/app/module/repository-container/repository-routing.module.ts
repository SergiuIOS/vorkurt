import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RepositoryContainerComponent} from "./repository-container-component.component";

const routes: Routes=[
  {
    path:'',
    component: RepositoryContainerComponent
  }
]

@NgModule({
 imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoryRoutingModule { }
