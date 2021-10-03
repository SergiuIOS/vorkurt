import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from "./header.component";
import {AuthGuardGuard} from "../../shared/utils/services";
import {routerArray} from "../../config/global/config-router";


const routes: Routes = [
  {
    path: '', component: HeaderComponent,
    children: [
      {
        path: "repo",
        canActivate: [AuthGuardGuard],
        loadChildren: () => import('../repository/repository.module').then(m => m.RepositoryModule),
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
