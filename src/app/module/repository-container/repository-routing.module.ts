import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RepositoryContainerComponent} from "./repository-container-component.component";
import {TableRepositoryComponent} from "./table-repository/table-repository.component";
import {TableDataResolver} from "../../shared/utils/services/resolvers/table/table-data.resolver";

const routes: Routes = [
  {
    path: '',
    component: RepositoryContainerComponent,
    children: [{
      path: '',
      component: TableRepositoryComponent,
      resolve: {table: TableDataResolver}
    }]
  },
  // {
  //   path: '**',
  //   redirectTo: '',
  //   component: RepositoryContainerComponent
  // }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoryRoutingModule {
}
