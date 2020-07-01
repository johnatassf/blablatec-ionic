import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { interval, timer, Subscription, Observable } from 'rxjs';
import { map, tap, retryWhen, delayWhen, filter } from 'rxjs/operators';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NavController, Platform, ModalController } from '@ionic/angular';
import { ModalCorridaService } from '../services/modal-corrida/modal-corrida.service';
import { RotaAtiva } from './rota-ativa-model';
declare var google;

@Component({
  templateUrl: './mapa-motorista.page.html',
  styleUrls: ['./mapa-motorista.page.scss'],
})
export class MapaMotoristaPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  public timer: Subscription = new Subscription();
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  currentPosition: any;
  originPosition: string;
  destinationPosition = 'FATEC - Praça 19 de Janeiro - Boqueirão, Praia Grande - SP, Brasil';

  @Input() rotaAtiva: RotaAtiva;

  rotasCadastradas;
  latitudeAtual: string;
  longitudeAtual: string;
  positionSubscription: Subscription;
  motoristaMarcador: any;


  showModalObservable: Observable<boolean>;

  constructor(
    private geolocation: Geolocation,
    public navCtrl: NavController,
    public modalController: ModalController,
    private modalService: ModalCorridaService,
  ) { }
  //  To do:
  // Toda vez q a posição atual atualizar setar no banco: metodo Set Map
  // Criar método para finalizar corrida


  ionViewDidEnter() {
    this.setMap();
  }

  setMap() {
    const mapOptions = {
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.directionsDisplay.setMap(this.map);

    this.geolocation.getCurrentPosition().then(pos => {
      const latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
      this.map.setCenter(latLng);
      this.map.setZoom(16);

      // Toda vez q a posição atual atualizar setar no banco: metodo Set Map

      // this.motoristaMarcador = new google.maps.Marker({
      //   position: latLng,
      //   map: this.map,
      // });

      this.currentPosition = latLng;
      this.destinationPosition = this.rotaAtiva.pontoFinal;

      this.calculateRoute();

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  calculateRoute() {
    if (this.destinationPosition && this.currentPosition) {
      const request = {
        // Pode ser uma coordenada (LatLng), uma string ou um lugar
        origin: this.currentPosition,
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

  stopTracking() {
    this.positionSubscription.unsubscribe();
  }

  dismiss() {
    this.modalService.mostrarCorridaAtiva.emit(false);
    this.stopTracking();
  }

}



