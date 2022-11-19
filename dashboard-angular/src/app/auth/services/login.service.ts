import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Login } from 'src/app/shared/models/login.model';
import { User } from 'src/app/shared/models/user.model';

const LS_KEY = 'current-user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public get currentUser(): User {
    let user = localStorage.getItem(LS_KEY);
    return (user ? JSON.parse(user) : null);
  }

  public set currentUser(user: User) {
    localStorage.setItem(LS_KEY, JSON.stringify(user));
  }

  login(login: Login): Observable<User | null> {
    let user = new User(1, 'User-Func', login.login, login.password,
    'FUNC')

    return of(user);
  }

  logout() {
    localStorage.removeItem(LS_KEY);
  }
}
