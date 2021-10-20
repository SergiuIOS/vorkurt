import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TemplateRepositoryService {

  private _templateData: Subject<string> = new Subject<string>()

  constructor() { }

  templateData$ = this._templateData.asObservable()

  sendDataOnObservable(data: string){
    this._templateData.next(data)
  }
}
