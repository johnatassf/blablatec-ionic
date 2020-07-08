import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  cadastrarUsuario(usuario) {
    return this.http.post<any>(environment.apiUrl + 'user/signup', usuario);
  }

  redefinerSenha(senhas: any){
    return this.http.post<any>(environment.apiUrl + 'user/refinirser', usuario);
  }
  autenticarUsuario(usuario) {
    return this.http.post(environment.apiUrl + 'user/login', usuario);
  }

  buscarInformacoesUsuario(){
    const httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage["ContentLocaly"]
      })
    };
    console.log(httpOptions);
    return this.http.get(environment.apiUrl + 'user/getByRa', httpOptions);
  }

  AtualizarUsuario(usuario){
    const httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage["ContentLocaly"]
      })
    };
    return this.http.put(environment.apiUrl + 'user/' + usuario.Id + '/profile', usuario, httpOptions);
  }
}
