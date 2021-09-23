import {Injectable, NgZone} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {UserService} from "../user/user-service";
import {Router} from "@angular/router";
import {User} from "../../interfaces/user/user";
import {IAuthInfoUser} from "../../interfaces/auth/auth-info-user.types";
import {throwError} from "rxjs";
import {SpinnerStateService} from "../../../spinner/spinner-state.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User | any

  constructor(private ngZone: NgZone,
              public afAuth: AngularFireAuth,
              private _router: Router,
              private _userService: UserService,
              private _sppinerService: SpinnerStateService
  ) {
    this.checkLocalStorage()
  }

  getDataFromFirebase() {
    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.user = auth;
        console.log('Authenticated');
        this._userService.setUserLoggedIn(auth)
      } else {
        this._sppinerService.setStateBehaviorSpinner(false)
        console.log('Not authenticated')
      }
    })

  }

  signInWithEmail(infoUser: IAuthInfoUser) {
    return this.afAuth.signInWithEmailAndPassword(infoUser.email, infoUser.password)
      .then((result) => {
        this._userService.setUserLoggedIn(result)
        this.ngZone.run(() => {
          this._router.navigate(['/table'])
          this._sppinerService.setStateBehaviorSpinner(true)
        })
      }).catch(err => {
        this._router.navigate(['/auth/test'])
        this._sppinerService.setStateBehaviorSpinner(false)
        return err
      })
  }

  signUp(infoUser: IAuthInfoUser) {
    return this.afAuth.createUserWithEmailAndPassword(infoUser.email, infoUser.password).then(() => {
      this._sppinerService.setStateBehaviorSpinner(false)

    })
      .catch(err => throwError(err))
  }

  logout() {
    this._userService.clearLocalStorage()
    this.afAuth.signOut().then(() => {
      this._router.navigate(['/'])
    })
  }

  private checkLocalStorage() {
    if (!localStorage.getItem('user')) {
      this.getDataFromFirebase()
    } else {
      console.log('localStorage ready')
    }
  }
}
