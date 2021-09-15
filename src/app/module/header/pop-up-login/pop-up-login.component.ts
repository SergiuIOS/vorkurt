import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {PopUpStateService} from "./pop-up-state.service";

@Component({
  selector: 'elix-pop-up-login',
  templateUrl: './pop-up-login.component.html',
  styleUrls: ['./pop-up-login.component.scss']
})
export class PopUpLoginComponent implements OnInit {
  @ViewChild('popUp') popUp: ElementRef<HTMLElement>
  popUpSettings: boolean = false

  constructor(private _popState: PopUpStateService, private _render: Renderer2) {
  }

  ngOnInit(): void {
    this._popState.coordinates$
      .subscribe(resp => {
        if (JSON.stringify(resp) !== '{}') {
          let a = this.popUp?.nativeElement.style
          a ? a.left = `${resp.offsetX- this.popUp.nativeElement.offsetWidth/2 -70}px` : null
          this._popState.statePopUp$.subscribe(resps => this.popUpSettings = resps)
          console.log(this.popUpSettings)
        }
      })
  }

}
