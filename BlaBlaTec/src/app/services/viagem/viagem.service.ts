import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViagemService {
 

  constructor(public http: HttpClient) { }

  buscarViagens(){
    return this.http.get(environment.apiUrl + 'viagens/viagens-abertas');
  }

  atualizarUsuario(usuario){
    return this.http.put(environment.apiUrl + 'viagens/' + usuario.Id + '/profile', usuario);
  }

  solicitarCarona(idViagem: number){
    return this.http.post(environment.apiUrl + 'solicitacao-viagem/viagem/' + idViagem, {});
  }

  removerSolicitacaoCarona(idViagem: number){
    return this.http.delete(environment.apiUrl + 'solicitacao-viagem/viagem/' + idViagem, {});
  }

  buscarMinhasViagensOferecidas(){
    return this.http.get(environment.apiUrl + 'viagens/minhas-viagens-oferecidas', {});
  }
}
