import { Injectable } from '@angular/core';
import {ConnectionService} from "../firebase/connection.service";
import {BehaviorSubject} from "rxjs";
import {IAccount} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private _repoData : BehaviorSubject<IAccount[]> = new BehaviorSubject<IAccount[]>([])

  constructor(private _firebase: ConnectionService) {
  }

  dataRepo$ = this._repoData.asObservable()

  repoData(data: IAccount[]){
    this._repoData.next(data)
  }
}
