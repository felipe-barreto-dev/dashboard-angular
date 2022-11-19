import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './auth/services/login.service';
import { User } from './shared/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public router: Router,
    public loginService: LoginService
  ) {}

  public get currentUser(): User | null {
    return this.loginService.currentUser;
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
