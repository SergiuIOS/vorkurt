import {Component, OnInit} from '@angular/core';
import {SpinnerStateService} from "./spinner-state.service";

@Component({
  selector: 'elix-spinner',
  template: '<div *ngIf="showSppiner" class="lds-hourglass flex justify-center items-center"></div>',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  constructor(private _spinnerStateService: SpinnerStateService) {
  }

  private _showSppiner: boolean

  get showSppiner(): boolean {
    return this._showSppiner
  }

  ngOnInit(): void {
    this._spinnerStateService.getState$
      .subscribe(resp => this._showSppiner = resp)
  }

}
