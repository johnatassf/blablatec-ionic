import { Injectable } from '@angular/core';
import { EventEmitter } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModalCorridaService {

  mostrarCorridaAtiva: EventEmitter;
  
  constructor(
    private http: HttpClient
  ) { }


  buscarRotasEmAdamento(){
    return this.http.get(environment.apiUrl + 'rotas-rotas/andamento');
  }

}
