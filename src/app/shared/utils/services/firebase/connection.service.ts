import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {INewRepository} from "../../interfaces";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private _data: string
  private _dbPath = '/repository'
  repositoryRef: AngularFirestoreCollection<any>

  constructor(private db: AngularFirestore) {
    this.repositoryRef = db.collection(this._dbPath)
  }

  get data() {
    return this.repositoryRef
  }

  setUrl(url: string) {
    this.repositoryRef = this.db.collection(url)
    this._dbPath = url
  }

  updateData(data: INewRepository){
    this._dbPath = '/templateff'

    return this.db.collection(this._dbPath).add(data).then(resp => resp)
  }
}
