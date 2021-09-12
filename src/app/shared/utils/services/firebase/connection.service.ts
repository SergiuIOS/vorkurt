import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";

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
    this._dbPath = url
  }

}
