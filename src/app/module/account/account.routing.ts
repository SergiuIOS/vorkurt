import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountComponent} from "./account.component";
import {AccountResolver} from "../../shared/utils/services/resolvers/account/account.resolver";

const routes: Routes = [
  {
    path: '', component: AccountComponent,
    resolve: {account: AccountResolver}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRouting {
}
