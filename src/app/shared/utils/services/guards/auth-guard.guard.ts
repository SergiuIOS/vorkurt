import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {UserService} from "../user/user-service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private _firebaseAuth: AngularFireAuth, private _userService: UserService) {
  }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    const user = await this._firebaseAuth.currentUser
    let isAuthenticated = user ? true : false
    const dataFromLocalStorage = this._userService.getUserLoggedIn()

    if (dataFromLocalStorage)
      isAuthenticated = true

    if (!isAuthenticated)
      alert('You must be authenticated in order to access this page.')
    return isAuthenticated
  }

}
