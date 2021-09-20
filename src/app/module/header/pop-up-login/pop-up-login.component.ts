import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {PopUpStateService} from "./pop-up-state.service";
import {AuthService} from "../../../shared/utils/services";
import {IAuthInfoResponse} from "../../../shared/utils/interfaces/auth/auth-info-user.types";
import {UserService} from "../../../shared/utils/services/user/user-service";
import {SpinnerStateService} from "../../../spinner/spinner-state.service";

@Component({
  selector: 'elix-pop-up-login',
  templateUrl: './pop-up-login.component.html',
  styleUrls: ['./pop-up-login.component.scss']
})
export class PopUpLoginComponent implements OnInit {
  @ViewChild('popUp') popUp: ElementRef<HTMLElement>
  popUpSettings: boolean = false
  dataUser: any

  constructor(private _popState: PopUpStateService,
              private _render: Renderer2,
              private _authService: AuthService,
              private _userService: UserService,
              private _spinnerService: SpinnerStateService
  ) {
  }

  ngOnInit(): void {
    this._popState.coordinates$
      .subscribe(resp => {
        if (JSON.stringify(resp) !== '{}') {
          let a = this.popUp?.nativeElement.style
          a ? a.left = `${resp.offsetX - this.popUp.nativeElement.offsetWidth / 2 - 70}px` : null
          this._popState.statePopUp$.subscribe(resps => this.popUpSettings = resps)
          this.dataUser = this._userService.getUserLoggedIn()
        }
      })
  }

  signOut() {
    this._popState.statePopLogin(false)
    this._spinnerService.setStateBehaviorSpinner(true)
    this._authService.logout()
  }
}
