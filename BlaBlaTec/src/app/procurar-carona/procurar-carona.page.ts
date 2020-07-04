import { Component, OnInit } from '@angular/core';
import { ViagemService } from '../services/viagem/viagem.service'
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../shared/loading/loading.service';
import { NotificationService } from '../shared/notification/notification.service';
import * as moment from 'moment';

@Component({
  selector: 'app-procurar-carona',
  templateUrl: './procurar-carona.page.html',
  styleUrls: ['./procurar-carona.page.scss'],
})
export class ProcurarCaronaPage implements OnInit {

  viagens;

  constructor(
    private viagemService: ViagemService,
    private alertController: AlertController,
    public loadingService: LoadingService,
    public notificationService: NotificationService
  ) {
    this.viagens = [];
  }

  ngOnInit() {
    this.buscarViagens();

  }



  async solicitarCarona(viagem: any) {

    await this.loadingService.showLoading();

    this.viagemService.solicitarCarona(viagem.id)
      .pipe(
        finalize(() => {
          this.loadingService.hideLoading();
        })).subscribe(() => {
          this.buscarViagens();
        });
  }

  async removerSolicitacaoCarona(viagem: any) {

   await this.loadingService.showLoading();

    this.viagemService.removerSolicitacaoCarona(viagem.id)
      .pipe(
        finalize(() => {
          this.loadingService.hideLoading();
        })).subscribe(() => {
          this.buscarViagens();
          this.notificationService.notificarSucesso('');
        });
  }


  async buscarViagens() {
    await this.viagemService.buscarViagens().subscribe(
      data => {
        console.log(data);
        this.viagens = data;
        console.log(this.viagens);
      },
      (error) => {
        console.log(error);
      }
    );
  }


  doRefresh(event) {
    console.log('Begin async operation');
    this.viagemService.buscarViagens()
      .pipe(finalize(() => { event.target.complete(); }))
      .subscribe(
        data => {
          console.log(data);
          this.viagens = data;
          console.log(this.viagens);
        },
        (error) => {
          console.log(error);
        }
      );

  }

  formatarData(data) {
    return moment(data, 'YYYY-MM-DD[T]HH:mm:ss').format('DD-MM-YYYY HH:mm:ss')
  }
}
