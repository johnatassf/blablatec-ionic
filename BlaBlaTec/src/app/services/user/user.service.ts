import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://localhost:44334';
  constructor(private http: HttpClient) { }

  cadastrarUsuario(usuario) {
    return this.http.post(this.apiUrl + '/user/signup', usuario);
  }

  autenticarUsuario(usuario) {
    return this.http.post(this.apiUrl + '/user/login', usuario);
  }
}
