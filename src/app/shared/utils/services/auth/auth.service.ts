import {Injectable, NgZone} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {UserService} from "../user/user-service";
import {Router} from "@angular/router";
import {User} from "../../interfaces/user/user";
import {IAuthInfoUser} from "../../interfaces/auth/auth-info-user.types";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User | any

  constructor(private ngZone: NgZone,
              public afAuth: AngularFireAuth,
              private _router: Router,
              private _userService: UserService
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
        console.log('Not authenticated')
      }
    })
  }

  signInWithEmail(infoUser: IAuthInfoUser) {
    return this.afAuth.signInWithEmailAndPassword(infoUser.email, infoUser.password)
      .then((result) => {
        this.ngZone.run(() => {
          this._router.navigate(['/table'])
        })
      }).catch(err => {
        console.log(err)
      })
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
