import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RotaAtiva } from './rota-ativa-model';

@Injectable({
  providedIn: 'root'
})
export class MapaMotoristaService {

  constructor(private http: HttpClient) { }

  postRotaAtiva(rotaAtiva: RotaAtiva, idViagem: number) {
    let params = new HttpParams();
    params = params.set('id', idViagem.toString());

    return this.http.post('localhost:44334' + 'rotas/viagem/', rotaAtiva);
  }
}
