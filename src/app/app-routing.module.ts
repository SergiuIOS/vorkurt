import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {AuthGuardGuard} from "./shared/utils/services";
import {routerArray} from "./config/global/config-router";
import {PageNotFoundComponent} from "../@core/core/page-not-found/page-not-found.component";

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
  {path: '', redirectTo: 'auth/test', pathMatch: 'full'},
  {path: '**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
