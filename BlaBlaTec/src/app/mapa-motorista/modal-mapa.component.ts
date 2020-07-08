import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { interval, timer, Subscription, Observable } from 'rxjs';
import { map, tap, retryWhen, delayWhen, filter } from 'rxjs/operators';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NavController, Platform, ModalController } from '@ionic/angular';
import { ModalCorridaService } from '../services/modal-corrida/modal-corrida.service';
import { MapaMotoristaPageComponent } from './mapa-motorista.page';
import { RotaAtiva } from './rota-ativa-model';
import { BaseResult } from '../shared/base-result/base-result';
declare var google;

@Component({
    selector: 'app-mapa-motorista',
    templateUrl: './mapa-motorista.page.html',
    styleUrls: ['./mapa-motorista.page.scss'],
})
export class ModalMapaCorridaComponent {
    rotaAtiva: RotaAtiva;
    mostrarCorridaMotoristaObservable: Subscription;
    mostrarCorridaMenuObservable: Subscription;

    constructor(
        public modalController: ModalController,
        private modalCorridaService: ModalCorridaService
    ) {

    }

    ngOnInit(): void {

        this.mostrarCorridaMotoristaObservable = this.modalCorridaService.mostrarCorridaAtivaMotorista
            .subscribe(async result => {
                result ? this.buscarRotaAtivaUsuario(false) : this.dismiss();
            });
        this.mostrarCorridaMenuObservable = this.modalCorridaService.mostrarCorridaAtivaMenu
            .subscribe(async result => {
                result ? this.buscarRotaAtivaUsuario(true) : this.dismiss();
            });
    }

    // Verificar se existe rota atmiva para este usuario
    buscarRotaAtivaUsuario(mostrarCorridaClickMeu: boolean) {
        this.modalCorridaService.buscarRotasEmAdamentoUsuario()
            .subscribe(async (result) => {
                this.rotaAtiva = result.data;

                if (this.rotaAtiva?.isMotorista || mostrarCorridaClickMeu)
                    await this.presentModal();
            });
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: MapaMotoristaPageComponent,
            cssClass: 'my-custom-class',
            componentProps: {
                rotaAtiva: this.rotaAtiva,
            }
        });
        return await modal.present();
    }



    dismiss() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }

    ngOnDestroy(): void {
        this.mostrarCorridaMotoristaObservable.unsubscribe();
        this.mostrarCorridaMenuObservable.unsubscribe();

    }



}



