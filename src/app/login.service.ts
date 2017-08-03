import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    login(name: string) {
        localStorage.setItem("name", name);
    }

    isLogged() {
        return localStorage.getItem("name") != undefined;
    }

    logout() {
        localStorage.removeItem("name");
    }

    getName() {
        if(localStorage.getItem("name") != undefined) {
            return localStorage.getItem("name");
        } else {
            return "";
        }
    }
}