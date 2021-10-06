import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {PopUpStateService} from "./pop-up-state.service";
import {AuthService} from "../../../shared/utils/services";
import {UserService} from "../../../shared/utils/services/user/user-service";
import {SpinnerStateService} from "../../../shared/spinner/spinner-state.service";

@Component({
  selector: 'elix-pop-up-login',
  templateUrl: './pop-up-login.component.html',
  styleUrls: ['./pop-up-login.component.scss']
})
export class PopUpLoginComponent implements OnInit {
  @ViewChild('popUp') popUp: ElementRef<HTMLElement>
  dataUser: any
  timerId: number
  start: number = 5000
  remaning :number = 5000

  constructor(private _popState: PopUpStateService,
              private _render: Renderer2,
              private _authService: AuthService,
              private _userService: UserService,
              private _spinnerService: SpinnerStateService,
  ) {
  }
  ngOnInit(): void {
    this.dataUser = this._userService.getUserLoggedIn()
  }

  signOut() {
    this._popState.statePopLogin(false)
    this._spinnerService.setStateBehaviorSpinner(true)
    this._authService.logout()
    this._spinnerService.setStateBehaviorSpinner(false)
    return 1
  }

  pauseTimeout(){
    clearTimeout(this.timerId)
    this.remaning -= Date.now() - this.start
    console.log(this.timerId)
  }

  resumeTimeOut(){
    this.start = Date.now()
    clearTimeout(this.timerId)
    setTimeout(() => console.log('resume'), 3000)
    console.log(this.start)
  }

}
