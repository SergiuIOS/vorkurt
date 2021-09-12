import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AgGridModule} from "ag-grid-angular";
import {AuthComponent} from "./auth/auth.component";

const routes: Routes = [
  {path: '', redirectTo:'/table', pathMatch:'full'},
  {
    path: '',
    loadChildren: () => import('./module/header/header.module').then(m => m.HeaderModule),
  },
  {
    path: 'test/auth',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AgGridModule.withComponents([])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
