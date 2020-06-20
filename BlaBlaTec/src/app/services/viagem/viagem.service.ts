import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViagemService {
  httpOptions = {

    headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage["ContentLocaly"]
    })};

  constructor(public http: HttpClient) { }

  buscarViagens(){
    return this.http.get(environment.apiUrl + 'viagens/viagens-abertas', this.httpOptions);
  }

  atualizarUsuario(usuario){
    return this.http.put(environment.apiUrl + 'viagens/' + usuario.Id + '/profile', usuario, this.httpOptions);
  }

  solicitarCarona(idViagem: number){
    return this.http.post(environment.apiUrl + 'solicitacao-viagem/viagem/' + idViagem, this.httpOptions);
  }
}
