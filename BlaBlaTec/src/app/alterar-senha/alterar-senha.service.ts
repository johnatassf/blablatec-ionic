import { Injectable } from '@angular/core';
import {  HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlterarSenhaService {

  constructor(private http: HttpClient) { }

  resetarSenha(ra: string, email: string){
    let params = new HttpParams();
    params = params.set('Ra', ra);
    params = params.set('Email', email);

    return this.http.get(environment.apiUrl + 'user/reset-password', {params: params});
  }
}
