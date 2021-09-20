import {Injectable} from '@angular/core';
import {User} from "../../interfaces/user/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  setUserLoggedIn(user: User | any) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  getUserLoggedIn() {
    if (localStorage.getItem('user')) {
      return JSON.parse(<string>localStorage.getItem('user'))
    } else {
      console.log('local storage is empty')
      return null
    }
  }

  clearLocalStorage() {
    localStorage.clear()
  }
}
