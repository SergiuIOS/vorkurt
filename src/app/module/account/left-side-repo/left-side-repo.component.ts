import {Component, OnDestroy, OnInit} from '@angular/core';
import {AccountService} from "../../../shared/utils/services/account/account.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {IAccount} from "../../../shared/utils/interfaces";

@Component({
  selector: 'elix-left-side-repo',
  templateUrl: './left-side-repo.component.html',
  styleUrls: ['./left-side-repo.component.scss']
})
export class LeftSideRepoComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject()
  repo: IAccount[]
  dataFilter: string
  constructor(private _accountService: AccountService) {

  }

  ngOnInit(): void {
    this._accountService.dataRepo$.pipe(takeUntil(this.unsubscribe$))
      .subscribe(resp => {
        console.log(resp)
        this.repo = resp
      })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }

  ate(event: string) {
    this._accountService.filterDataFromQuery(event.toUpperCase())
  }


}
