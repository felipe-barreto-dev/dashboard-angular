import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

const LS_KEY = 'current-user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    public login?: string,
    public password?: string
  ) { }

  public get currentUser(): User {
    let user = localStorage.getItem(LS_KEY);
    return (user ? JSON.parse(user) : null);
  }

  public set currentUser(user: User) {
    localStorage.setItem(LS_KEY, JSON.stringify(user));
  }

  logout() {

  }
}
