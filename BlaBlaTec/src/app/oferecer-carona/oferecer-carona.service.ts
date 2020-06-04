import { Injectable } from '@angular/core';
import { OferecerCaronaModel } from 'src/app/oferecer-carona/oferecer-carona.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OferecerCaronaService {

  constructor(private http: HttpClient) { }

  criarViagem(viagem : OferecerCaronaModel){
    const httpOptions = {
      headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage["ContentLocaly"]
      })
    };
    return this.http.post(environment.apiUrl + 'viagens', viagem, httpOptions);
  }
}
