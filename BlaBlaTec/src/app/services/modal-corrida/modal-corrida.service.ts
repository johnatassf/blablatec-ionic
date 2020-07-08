import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RotaAtiva, RotaAtivaUpdate } from 'src/app/mapa-motorista/rota-ativa-model';
import { BaseResult } from 'src/app/shared/base-result/base-result';

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
    return this.http.get<BaseResult<RotaAtiva>>(environment.apiUrl + 'rotas/ativa');
  }

  criarRotaEmAndamento(idViagem: number) {
    return this.http.post(`${environment.apiUrl}rotas/ativa/${idViagem}`, {});
  }
  atualizarRotaEmAndamento(idViagem: number, rotaAtiva: RotaAtivaUpdate) {
    return this.http.put(`${environment.apiUrl}rotas/ativa/${idViagem}`, rotaAtiva);
  }

  finalizarViagemEmAndamento(idViagem: number, rotaAtiva: RotaAtivaUpdate) {
    return this.http.post(`${environment.apiUrl}rotas/ativa/${idViagem}/finalizar`, rotaAtiva );
  }

}
