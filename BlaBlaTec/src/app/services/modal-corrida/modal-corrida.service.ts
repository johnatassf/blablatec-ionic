import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModalCorridaService {

  public mostrarCorridaAtiva = new EventEmitter<boolean>(false);

  constructor(
    private http: HttpClient
  ) {
    this.mostrarCorridaAtiva.emit(true);
  }


  buscarRotasEmAdamentoUsuario() {
    return this.http.get(environment.apiUrl + 'rotas/ativa');
  }

  criarRotaEmAndamento(id: number) {
    let params = new HttpParams();
    params = params.set('id', id.toString());

    return this.http.post(environment.apiUrl + 'rotas/ativa', {});
  }

  removerAndamento(id: number) {
    let params = new HttpParams();
    params = params.set('id', id.toString());

    return this.http.delete(environment.apiUrl + 'rotas/ativa');
  }

}
