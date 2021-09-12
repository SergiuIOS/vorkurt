import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from "./header.component";
import {routerArray} from "../../config/global/config-router";


const routes: Routes = [
  {
    path: '', component: HeaderComponent,
    children: [
      {
        path: ":id",
        data: {data: routerArray},
        loadChildren: () => import('../repository-container/repository-container.module').then(m => m.RepositoryContainerModule),

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppHeaderRouting {
}
