import {Component} from '@angular/core';
import {SpinnerStateService} from "./shared/spinner/spinner-state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vorkurt';
  stateSpiner: boolean = false

  constructor(private _spinerService: SpinnerStateService) {
    this._spinerService.getState$.subscribe(resp => this.stateSpiner = resp)
  }
}
