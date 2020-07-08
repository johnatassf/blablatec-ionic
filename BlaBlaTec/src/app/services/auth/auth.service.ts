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
    public usuarioLogado = new EventEmitter<boolean>(true);
    public credenciaisInvalidasEvent = new EventEmitter<boolean>(false);
    isMotoristaEvent = new EventEmitter<boolean>(false);

    constructor(private http: HttpClient, private router: Router) { }


    autenticarUsuario(usuario) {
        return this.http.post(environment.apiUrl + 'user/login', usuario);
    }

    login(usuario: any) {
        return this.http.post(environment.apiUrl + 'user/login', usuario);
    }



    logOut() {
        localStorage.removeItem('ContentLocaly');
        this.usuarioLogado.emit(false);
        this.router.navigate(['/home']);
    }

    isMotorista(): boolean {
        const tokenSession = localStorage.getItem('ContentLocaly');

        if (!tokenSession)
            return false;

        const token: TokenAutentication = JSON.parse(tokenSession);
        var codToken = jwt_decode(token.accessToken);
        console.log(token.accessToken);
        console.log(codToken);
        console.log('TOkeeeeeeeeeeeeeen');
        if (codToken.role === 'Motorista')
            return true;

        return false;
    }
    getTokenAutetication(): TokenAutentication {

        const token: TokenAutentication = JSON.parse(localStorage.getItem('ContentLocaly'));
        const tokenIsExp = new Date(token.expiration).valueOf() < new Date().valueOf();

        if (!(token || token.authenticated)) {
            return null;
        } else if (tokenIsExp) {
            return null;
        }

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
        this.usuarioLogado.next(true);
        return true;
    }


}
