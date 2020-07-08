import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/modal/modal.component';
import { ViagemService } from '../../services/viagem/viagem.service';
import * as moment from 'moment';
import { ModalCorridaService } from 'src/app/services/modal-corrida/modal-corrida.service';
import { finalize } from 'rxjs/operators';
import { NotificationService } from 'src/app/shared/notification/notification.service';
import { LoadingService } from 'src/app/shared/loading/loading.service';

@Component({
  selector: 'app-listarcaronas',
  templateUrl: './listarcaronas.page.html',
  styleUrls: ['./listarcaronas.page.scss'],
})
export class ListarcaronasPage {

  lista = [];

  constructor(
    private modalController: ModalController,
    private serviceViagem: ViagemService,
    private modalCorridaService: ModalCorridaService,
    private noticationService: NotificationService,
    private loadingService: LoadingService,
  ) { }
  async openModal(idViagem) {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        idViagem,
      }
    });
    await modal.present();
  }

  ionViewDidEnter() {
    this.buscarCaronasOferecidas();
  }

  formatarData(data) {
    return moment(data, 'YYYY-MM-DD[T]HH:mm:ss').format('DD-MM-YYYY HH:mm:ss')
  }

  iniciarCorrida(idViagem: number) {
    this.loadingService.showLoading('Iniciando Corrida...');

    this.modalCorridaService.criarRotaEmAndamento(idViagem)
      .pipe(finalize(() => { this.loadingService.hideLoading(); }))
      .subscribe(() => {
        this.noticationService.notificarSucesso('Corrida iniciada com sucesso');
        this.modalCorridaService.mostrarCorridaAtivaMotorista.emit(true);
      });
  }


  buscarCaronasOferecidas() {
    this.loadingService.showLoading('Buscando caronas oferecidas...');
    this.serviceViagem.buscarMinhasViagensOferecidas()
      .pipe(finalize(() => { this.loadingService.hideLoading(); }))
      .subscribe((data: any) => {
        console.log(data);
        this.lista = data;
      });
  }

  doRefresh(event) {
    this.serviceViagem.buscarMinhasViagensOferecidas()
      .pipe(finalize(() => { event.target.complete(); }))
      .subscribe((data: any) => {
        console.log(data);
        this.lista = data;
      });
  }

}
