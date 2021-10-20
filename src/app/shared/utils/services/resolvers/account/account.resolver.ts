import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {ConnectionService} from "../../firebase/connection.service";
import {AccountService} from "../../account/account.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AccountResolver implements Resolve<boolean> {

  constructor(private _firebase : ConnectionService, private _accountService: AccountService) {
    this._firebase.setUrl('/repository')
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    this._firebase.setUrl('/repository')

    this._firebase.data.snapshotChanges()
      .pipe(map(changeData => changeData
        .map(c => {
          let a = c.payload.doc.data();
          return {
            owner: a.owner,
            repo:
              a.repo,
            link: a.link,
            id: c.payload.doc.id
          }
        }))).subscribe(data => this._accountService.repoData(data))
  }
}
