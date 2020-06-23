import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitacoesService {
  httpOptions = {

    headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage["ContentLocaly"]
    })};

  constructor(public http: HttpClient) { }

  buscarSolicitacaoViagem(){
    return this.http.get(environment.apiUrl + 'solicitacaoViagem/', this.httpOptions);
  }

  AtualizarUsuario(usuario){
    return this.http.put(environment.apiUrl + 'solicitacaoViagem/' + usuario.Id + '/profile', usuario, this.httpOptions);
  }
}
