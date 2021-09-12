import {Component} from '@angular/core';
import {SpinnerStateService} from "./spinner/spinner-state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vorkurt';
  stateSpiner: boolean= false

  constructor(private _stateSpiner: SpinnerStateService) {

    this._stateSpiner.getState$.subscribe(resp => this.stateSpiner = resp)

  }


}
