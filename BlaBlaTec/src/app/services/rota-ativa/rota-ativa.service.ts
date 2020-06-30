import { Injectable } from '@angular/core';
import { EventEmitter } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RotaAtivaService {

    mostrarCorridaAtiva: EventEmitter;

    constructor(private http: HttpClient) { }

    obterCorridasAbertas() {

    }
}
