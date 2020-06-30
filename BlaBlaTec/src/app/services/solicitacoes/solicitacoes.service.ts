import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitacoesService {

  constructor(public http: HttpClient) { }

  buscarSolicitacaoViagem(){
    return this.http.get(environment.apiUrl + 'solicitacao-viagem/');
  }

  AtualizarSolicitacaoViagem(solicitacao){
    return this.http.put(environment.apiUrl + 'solicitacao-viagem/' + solicitacao.Id + '/profile', solicitacao);
  }

  
}
