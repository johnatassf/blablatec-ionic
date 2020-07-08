import { Component, OnInit, NgZone, ɵConsole, ChangeDetectorRef, OnChanges } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as moment from 'moment';
import { OferecerCaronaService } from 'src/app/oferecer-carona/oferecer-carona.service';
import { OferecerCaronaModel } from './oferecer-carona.model';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../shared/loading/loading.service';
import { NotificationService } from '../shared/notification/notification.service';
declare var google: any;

@Component({
  selector: 'app-oferecer-carona',
  templateUrl: './oferecer-carona.page.html',
  styleUrls: ['./oferecer-carona.page.scss'],
})
export class OferecerCaronaPage implements OnInit {

  public form: FormGroup;
  private autoCompleteService = new google.maps.places.AutocompleteService();
  public resultasBuscaEndereco = new Array<any>();
  public origens = new Array<any>();
  destinos = [];
  showListOrigin = false;
  showLisDesti = false;
  clickList: boolean;

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
  dateString: string;

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private ngZone: NgZone,
    private cd: ChangeDetectorRef,
    private service: OferecerCaronaService,
    public loadingService: LoadingService,
    public notificartionService: NotificationService,


  ) { }

  origem = new FormControl('', Validators.compose([Validators.required]));
  destino = new FormControl('', Validators.compose([Validators.required]));
  data = new FormControl('', Validators.compose([Validators.required]));
  qtdLugares = new FormControl('', Validators.compose([
    Validators.required,
    Validators.pattern(/[0-9]/),
    Validators.maxLength(3)]));

  ngOnInit() {
    this.form = this.formBuilder.group({
      origem: this.origem,
      destino: this.destino,
      data: this.data,
      qtdLugares: this.qtdLugares
    });

    this.initializeMap();

  }

  ionViewWillEnter() {
    const datenow = new Date();
    this.dateString = `${datenow.getFullYear().toString()}-${datenow.getMonth().toString()}`
  }
  notificacoes(): void {
    this.navCtrl.navigateRoot('notificacoes');
  }

  ionClear() {
    this.showListOrigin = false;
    this.showLisDesti = false;
    this.origens = [];
    this.destinos = [];
  }

  setOrigem(event: any) {
    console.log(event);
    this.origens = [];
    this.destinos = [];
    this.showListOrigin = false;
    this.clickList = true;
    this.form.controls.origem.patchValue(event.description);
    this.destinationPosition = event.description;
    this.calculateRoute();
  }

  setDestino(event: any) {
    this.origens = [];
    this.destinos = [];
    this.showLisDesti = false;
    this.clickList = true;
    this.form.controls.destino.patchValue(event.description);
    this.originPosition = event.description;
    this.calculateRoute();
  }

  searchOrigem(input: any, tela: boolean) {
    this.cd.detectChanges();
    if ((input.detail.value == null || input.detail.value === undefined) || this.clickList) {
      this.showListOrigin = false;
      this.clickList = false;
      return;
    }
    this.ngZone.run(() => {
      new google.maps.places.AutocompleteService().getPlacePredictions({ input: input.detail.value }, prediction => {
        this.origens = prediction;
        this.showListOrigin = true;
        this.showLisDesti = false;
      });
    });
  }

  searchDestino(input: any, tela: boolean) {
    if ((input.detail.value == null || input.detail.value === undefined) || this.clickList) {
      this.showLisDesti = false;
      this.clickList = false;
      return;
    }
    this.ngZone.run(() => {
      this.autoCompleteService.getPlacePredictions({ input: input.detail.value }, prediction => {
        console.log('request origem');
        this.destinos = prediction;
        this.showLisDesti = true;
        this.showListOrigin = false;
      });
    });

  }

  oferecerCarona() {
    this.criarRota();
  }

  async criarRota() {
    const oferecerCarona = new OferecerCaronaModel();
    oferecerCarona.valor = 0;
    oferecerCarona.viagem = this.form.controls.data.value;
    oferecerCarona.pontoInicial = this.form.controls.origem.value;
    oferecerCarona.pontoFinal = this.form.controls.destino.value;
    oferecerCarona.qtdLugares = this.form.controls.qtdLugares.value;

    if (oferecerCarona.qtdLugares > 30) {
      this.notificartionService.notificarInfo('O número de lugares disponíveis não pode ser maior que 30');
      return;
    }
    this.loadingService.showLoading('Criando carona...', true);

    this.service.criarViagem(oferecerCarona)
      .pipe(
        finalize(() => {
          this.loadingService.hideLoading();
        })
      )
      .subscribe(() => {
        this.notificartionService.notificarSucesso('Carona criada com sucesso');
        this.navCtrl.back();
      });
  }


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
