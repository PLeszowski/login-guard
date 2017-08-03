import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  template: `
    <p>Login</p>
    <input type="text" [(ngModel)]="name">
    <button type="button" (click)="login()">Login</button>
  `
})
export class LoginComponent {
  name: string = "";

  constructor(private loginService: LoginService, private router: Router) {

  }

  login() {
    this.loginService.login(this.name);
    this.router.navigate(['/show']);
  }
}
