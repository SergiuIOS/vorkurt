import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {AuthGuardGuard} from "./shared/utils/services";
import {routerArray} from "./config/global/config-router";

const routes: Routes = [
  {
    path: '',
    data: {data: routerArray.pageHeader},
    canActivate: [AuthGuardGuard],
    loadChildren: () => import('./module/header/header.module').then(m => m.HeaderModule),
  },
  {
    path: 'auth/test',
    component: AuthComponent
  },
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],






  exports: [RouterModule]
})
export class AppRoutingModule {
}
