import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { interval, timer, Subscription, Observable } from 'rxjs';
import { map, tap, retryWhen, delayWhen, filter } from 'rxjs/operators';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NavController, Platform, ModalController } from '@ionic/angular';
import { ModalCorridaService } from '../services/modal-corrida/modal-corrida.service';
import { MapaMotoristaPage } from './mapa-motorista.page';
import { RotaAtiva } from './rota-ativa-model';
declare var google;

@Component({
    selector: 'app-mapa-motorista',
    templateUrl: './mapa-motorista.page.html',
    styleUrls: ['./mapa-motorista.page.scss'],
})
export class ModalMapaCorridaComponent {
    rotaAtiva: RotaAtiva;

    constructor(
        public modalController: ModalController,
        private modalCorridaService: ModalCorridaService
    ) {

    }

    ngOnInit(): void {

        this.modalCorridaService.mostrarCorridaAtiva.subscribe(async result => {
            console.log('Ativou modal')
            if (result) {
                this.buscarRotaAtivaUsuario();
            } else {
                this.dismiss();
            }
        });
    }

    // Verificar se existe rota ativa para este usuario
    buscarRotaAtivaUsuario() {
        this.modalCorridaService.buscarRotasEmAdamentoUsuario().subscribe(async (result: RotaAtiva) => {
            this.rotaAtiva = result;
            if (this.rotaAtiva.isMotorista) {
                await this.presentModal();
            }
        }, error => {
            console.log('Erro ao buscar rota ativa');
        });
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: MapaMotoristaPage,
            cssClass: 'my-custom-class',
            componentProps: {
                rotaAtiva: this.rotaAtiva,
            }
        });
        return await modal.present();
    }



    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    }



}



