import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { TokenAutentication } from '../../model/TokenAutentication';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    isAdm = false;
    public credenciaisInvalidasEvent = new EventEmitter<boolean>(false);

    constructor(private http: HttpClient, private router: Router) { }


    autenticarUsuario(usuario) {
        return this.http.post(environment.apiUrl + 'user/login', usuario);
    }

    login(usuario: any) {
        return this.http.post(environment.apiUrl + 'user/login', usuario);
    }



    logOut() {
        localStorage.removeItem('ContentLocaly');
        this.router.navigate(['']);
    }

    getTokenAutetication(): TokenAutentication {
        const tokenSession = localStorage.getItem('ContentLocaly');

        if (!tokenSession)
            return null;

        const token: TokenAutentication = JSON.parse(tokenSession);
        return token;
    }

    isUserLoggedIn() {
        const tokenSession = localStorage.getItem('ContentLocaly');

        if (!tokenSession)
            return null;

        const token: TokenAutentication = JSON.parse(localStorage.getItem('ContentLocaly'));
        const tokenIsExp = new Date(token.expiration).valueOf() < new Date().valueOf();

        if (!(token || token.authenticated)) {
            return false;
        } else if (tokenIsExp) {
            return false;
        }

        return true;
    }


}
