import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private loginService: LoginService, private router: Router) {

    }

    canActivate(): boolean {
        if(!this.loginService.isLogged()) {
            this.router.navigate(['/login']);
        }

        return this.loginService.isLogged();
    }
}