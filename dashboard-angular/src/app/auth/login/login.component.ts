import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/shared/models/login.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('formLogin') formLogin! : NgForm;
  login: Login = new Login();
  loading: boolean = false;
  message: string;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (this.loginService.currentUser) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.message = params['error'];
      });
  }

  handleLogin(): void {
    this.loading = true;
    if (this.formLogin.form.valid) {
      this.loginService.login(this.login).subscribe((user) => {
        if (user != null) {
          this.loginService.currentUser = user;
          this.loading = false;
          this.router.navigate(["/home"]);
        }
        else {
          this.loading = false;
          this.message = "Usuário/Senha inválidos.";
        }
      })
    }
    this.loading = false;
  }
}
