import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'app-show',
  template: `
    <p>Show</p>
    <p>{{name}}</p>
    <button type="button" (click)="logout()">Logout</button>
  `
})
export class ShowComponent implements OnInit{
  name = "";

  constructor(private loginService: LoginService, private router: Router) {

  }

  ngOnInit() {
    this.name = this.loginService.getName();
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
