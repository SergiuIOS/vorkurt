import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {AuthGuardGuard} from "./shared/utils/services";

const routes: Routes = [
  {path: '**', redirectTo: '/account'},
  {path: '', redirectTo: '/auth/test', pathMatch: 'full'},
  {
    path: '',
    canActivate: [AuthGuardGuard],
    loadChildren: () => import('./module/header/header.module').then(m => m.HeaderModule),
  },
  {
    path: 'auth/test',
    component: AuthComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
