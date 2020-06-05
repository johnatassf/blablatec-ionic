import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViagemService {
  //apiUrl = 'https://blablatec.azurewebsites.net';
  apiUrl = 'https://localhost:44334';
  httpOptions = {
    headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage["ContentLocaly"]
    })};

  constructor(public http: HttpClient) { }

  buscarViagens(){
    return this.http.get(this.apiUrl + '/viagem/', this.httpOptions);
  }

  AtualizarUsuario(usuario){
    return this.http.put(this.apiUrl + '/viagem/' + usuario.Id + '/profile', usuario, this.httpOptions);
  }
}
