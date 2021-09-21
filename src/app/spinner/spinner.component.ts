import {Component, OnInit} from '@angular/core';
import {SpinnerStateService} from "./spinner-state.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'elix-spinner',
  template: '<div *ngIf="showSppiner" class="lds-hourglass flex justify-center items-center"></div>',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  private _showSppiner: boolean

  constructor(private _spinnerStateService: SpinnerStateService) {
  }

  private _showSppiner: boolean

  get showSppiner(): boolean {
    return this._showSppiner
  }

  ngOnInit(): void {
    this._spinnerStateService.getState$
      .pipe(tap((res) => console.log(res)))
      .subscribe(resp => this._showSppiner = resp)
  }

}
