import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from "./header.component";
import {AuthGuardGuard} from "../../shared/utils/services";


const routes: Routes = [
  {path: '', redirectTo: 'account', pathMatch: 'full'},

  {
    path: '', component: HeaderComponent,
    children: [
      {
        path: 'account',
        loadChildren: () => import('./../account/account.module').then(m => m.AccountModule)
      },
      {
        path: 'new',
        loadChildren: () => import('./../newRepo/new-repo.module').then(m => m.NewRepoModule)
      }
      , {
        path: ":id",
        canActivate: [AuthGuardGuard],
        loadChildren: () => import('../repository/repository.module').then(m => m.RepositoryModule),
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppHeaderRouting {
}
