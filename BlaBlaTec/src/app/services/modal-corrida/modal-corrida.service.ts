import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RotaAtiva, RotaAtivaUpdate } from 'src/app/mapa-motorista/rota-ativa-model';

@Injectable({
  providedIn: 'root'
})
export class ModalCorridaService {

  public mostrarCorridaAtivaMotorista = new EventEmitter<boolean>(false);
  public mostrarCorridaAtivaMenu = new EventEmitter<boolean>(false);

  constructor(
    private http: HttpClient
  ) {
    this.mostrarCorridaAtivaMotorista.emit(true);
  }


  buscarRotasEmAdamentoUsuario() {
    return this.http.get<RotaAtiva>(environment.apiUrl + 'rotas/ativa');
  }

  criarRotaEmAndamento(id: number) {
    let params = new HttpParams();
    params = params.set('id', id.toString());

    return this.http.post(environment.apiUrl + 'rotas/ativa', {});
  }
  atualizarRotaEmAndamento(id: number, rotaAtiva: RotaAtivaUpdate) {

return this.http.put(`${environment.apiUrl}rotas/ativa/${id}` , rotaAtiva);
  }

  removerAndamento(id: number) {
    let params = new HttpParams();
    params = params.set('id', id.toString());

    return this.http.delete(environment.apiUrl + 'rotas/ativa');
  }

}
