import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RepositoryTopOneComponent} from './repository-top-one/repository-top-one.component';
import {RepositoryTabProjectComponent} from './repository-tab-project/repository-tab-project.component';
import {RepositoryContainerComponent} from "./repository-container-component.component";
import {RepositoryRoutingModule} from "./repository-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from '@angular/material/tabs';
import {TableRepositoryComponent} from './table-repository/table-repository.component';
import 'ag-grid-enterprise'
import {AgGridModule} from "ag-grid-angular";
import {AppModule} from "../../app.module";

@NgModule({
  declarations: [
    RepositoryTopOneComponent,
    RepositoryTabProjectComponent,
    RepositoryContainerComponent,
    TableRepositoryComponent
  ],
    imports: [
        MatTabsModule,
        CommonModule,
        RepositoryRoutingModule,
        MatIconModule,
        AgGridModule.withComponents([])
    ]
})
export class RepositoryContainerModule {
}
