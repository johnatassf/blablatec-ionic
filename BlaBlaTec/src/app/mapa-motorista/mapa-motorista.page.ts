import { Component, OnInit } from '@angular/core';
import { interval, timer, Subscription } from 'rxjs';
import { map, tap, retryWhen, delayWhen } from 'rxjs/operators';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { MapaMotoristaService } from './mapa-motorista.service';
import { RotaAtiva } from './rota-ativa-model';
declare var google;

@Component({
  selector: 'app-mapa-motorista',
  templateUrl: './mapa-motorista.page.html',
  styleUrls: ['./mapa-motorista.page.scss'],
})
export class MapaMotoristaPage implements OnInit {

  public timer: Subscription = new Subscription();
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  map: any;
  posicaoAtual: any;
  originPosition: string;
  destinationPosition: string;
  rotasCadastradas;
  obterRotas: { latitude: string, longitude: string }[] = []; 
  marcador: any;
  startPosition: any;
  latitudeAtual: string;
  longitudeAtual: string;
  idViagem: any;
  RotaAtiva: any;


  constructor(
    private geolocation: Geolocation,
    private service: MapaMotoristaService) {
    // this.atualizarPosicaoAtual();

  }

  atualizarPosicaoAtual() {

    this.timer = timer(0, 10 * 1000).subscribe(n => {
      console.log('TESTES');
    });



  }

  ngOnInit() {
    // Pegar posicao Atual
    this.posicaoAtual = new google.maps.LatLng(-21.763409, -43.349034);

    this.geolocation.getCurrentPosition()
      .then((result) => {
        const position = new google.maps.LatLng(result.coords.latitude, result.coords.longitude);

        this.latitudeAtual = result.coords.latitude.toString();
        this.longitudeAtual = result.coords.toString();

        const mapOptions = {
          zoom: 13,
          center: position,
          mapTypeControl: false,
          mapTypeIs: google.maps.MapTypeId.ROADMAP,
          streetViewControl: false,
          fullscreenControl: false,
        };

        this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        const marker = new google.maps.Marker({
          position: position,
          map: this.map
        });


      }).catch((error) => {
        console.log('Erro ao recuperar sua posição', error);
      });
  }



  // Criar rota ativa na api
  criarRotaAtiva() {
    this.service.postRotaAtiva(new RotaAtiva(this.latitudeAtual, this.longitudeAtual), this.idViagem)
      .subscribe(result => {
        this.RotaAtiva = result;
      }, erro =>{
        console.log('Erro ao criar rota ativa');
      });
  }

  // Traçar rota atual para o ponto de origem
  // Verificar se a rota atual mudou
  // se sim atualizar rota no banco
  // se não continuar verificando





  initializeMap() {
    this.startPosition = new google.maps.LatLng(-21.763409, -43.349034);

    const mapOptions = {
      zoom: 18,
      center: this.startPosition,
      disableDefaultUI: true
    };

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    this.directionsDisplay.setMap(this.map);

    const marker = new google.maps.Marker({
      position: this.startPosition,
      map: this.map,
    });
  }

  calculateRoute() {
    if (this.destinationPosition && this.originPosition) {
      const request = {
        // Pode ser uma coordenada (LatLng), uma string ou um lugar
        origin: this.originPosition,
        destination: this.destinationPosition,
        travelMode: 'DRIVING'
      };

      this.traceRoute(this.directionsService, this.directionsDisplay, request);
    }
  }

  traceRoute(service: any, display: any, request: any) {
    service.route(request, function (result, status) {
      if (status === 'OK') {
        display.setDirections(result);
      }
    });
  }
}





