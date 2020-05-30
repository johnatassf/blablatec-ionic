import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://blablatec.azurewebsites.net';
  //apiUrl = 'https://localhost:44334';
  constructor(public http: HttpClient) { }

  cadastrarUsuario(usuario) {
    return this.http.post(this.apiUrl + '/user/signup', usuario);
  }

  autenticarUsuario(usuario) {
    return this.http.post(this.apiUrl + '/user/login', usuario);
  }

  buscarInformacoesUsuario(){
    const httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage["ContentLocaly"]
      })
    };
    console.log(httpOptions);
    return this.http.get(this.apiUrl + '/user/getByRa', httpOptions);
  }

  AtualizarUsuario(usuario){
    const httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage["ContentLocaly"]
      })
    };
    return this.http.put(this.apiUrl + '/user/' + usuario.Id + '/profile', usuario, httpOptions);
  }
}
