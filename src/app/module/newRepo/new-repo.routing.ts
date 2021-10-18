import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewRepoComponent} from "./new-repo.component";


const routes: Routes = [
  {
    path: '',
    component: NewRepoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewRepoRouting {
}
