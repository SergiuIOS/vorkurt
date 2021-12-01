import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../shared/utils/services";
import {Router}              from "@angular/router";
import {SpinnerStateService} from "../shared/component/spinner/spinner-state.service";
import {throwError}          from "rxjs";

@Component({
  selector: 'elix-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isSignedIn = false
  logedIn = true
  feedback = {password: false, email: false}
  private _regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private _authService: AuthService,
              private router: Router,
              private _sppinerService: SpinnerStateService) {
  }

  ngOnInit(): void {
    this._sppinerService.setStateBehaviorSpinner(false)

    if (localStorage.getItem('user') !== null) {
      this.isSignedIn = true
    } else {
      this.isSignedIn = false
    }
  }

  onSubmit(form: NgForm) {
    this.feedback.password = false
    this.feedback.email = false
    try {


      if (this._regexEmail.test(String(
        form.value.email).toLowerCase()) && String(form.value.password).length >= 6) {
        this._sppinerService.setStateBehaviorSpinner(true)
        if (this.logedIn) {
          this._authService.signInWithEmail(form.value).then((resp: any) => {
          })
        } else {
          this._authService.signUp(form.value).catch(e => {
            console.log(e)
            return e
          })
        }
        form.reset()
      } else {
        this.feedback.email = true
        this.feedback.password = true
      }
    } catch (e) {
      console.log(e)
    }
  }

  changeSignIn() {
    this.logedIn = !this.logedIn
  }

}
