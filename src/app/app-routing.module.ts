import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from "./module/header/header.component";

const routes: Routes = [
  {
    path: '', component: HeaderComponent,
    children: [
      {
        path: ":id",
        loadChildren: () => import('./module/repository-container/repository-container.module').then(m => m.RepositoryContainerModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
