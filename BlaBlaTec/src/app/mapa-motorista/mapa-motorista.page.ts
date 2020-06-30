import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { interval, timer, Subscription, Observable } from 'rxjs';
import { map, tap, retryWhen, delayWhen, filter } from 'rxjs/operators';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NavController, Platform, ModalController } from '@ionic/angular';
declare var google;

@Component({
  selector: 'app-mapa-motorista',
  templateUrl: './mapa-motorista.page.html',
  styleUrls: ['./mapa-motorista.page.scss'],
})
export class MapaMotoristaPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  public timer: Subscription = new Subscription();
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  posicaoAtual: any;
  originPosition: string;
  destinationPosition = 'FATEC - Praça 19 de Janeiro - Boqueirão, Praia Grande - SP, Brasil';


  rotasCadastradas;
  obterRotas: { latitude: string, longitude: string }[] = [];
  marcador: any;
  startPosition: any;
  latitudeAtual: string;
  longitudeAtual: string;
  idViagem: any;
  RotaAtiva: any;

  currentMapTrack = null;
  isTracking = false;
  trackedRoute = [];
  previousTracks = [];
  positionSubscription: Subscription;
  motoristaMarcador: any;


  showModalObservable: Observable<boolean>;





constructor(
  private geolocation: Geolocation,
  public navCtrl: NavController,
  private plt: Platform, //???
  public modalController: ModalController
) {
  // this.atualizarPosicaoAtual();

}
ngOnInit(): void {
  // Criar Rota ativa 

  this.showModalObservable.subscribe
}



async presentModal() {
  const modal = await this.modalController.create({
    component: MapaMotoristaPage,
    cssClass: 'my-custom-class'
  });

  return await modal.present();
}

ionViewDidEnter() {
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

    this.motoristaMarcador = new google.maps.Marker({
      position: latLng,
      map: this.map,
    });

  }).catch((error) => {
    console.log('Error getting location', error);
  });
}




startTracking() {
  this.isTracking = true;
  this.trackedRoute = [];

  this.positionSubscription = this.geolocation.watchPosition()
    .pipe(
      filter((p) => p.coords !== undefined) //Filter Out Errors
    )
    .subscribe(data => {
      setTimeout(() => {
        this.trackedRoute.push({ lat: data.coords.latitude, lng: data.coords.longitude });
        // this.redrawPath(this.trackedRoute);
        const latLng = this.posicaoAtual = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);

        this.motoristaMarcador.setMap(null);
        this.motoristaMarcador = new google.maps.Marker({
          position: latLng,
          map: this.map,
          title: 'Hello World!'
        });

        console.log('Traking route' + this.trackedRoute);
        // this.calculateRoute();

      }, 0);
    });

}


calculateRoute() {
  if (this.destinationPosition && this.posicaoAtual) {
    const request = {
      // Pode ser uma coordenada (LatLng), uma string ou um lugar
      origin: this.posicaoAtual,
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
  const newRoute = { finished: new Date().getTime(), path: this.trackedRoute };
  this.previousTracks.push(newRoute);
  localStorage.setItem('routes', this.previousTracks.toString());

  this.isTracking = false;
  this.positionSubscription.unsubscribe();
}

}



