import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, AlertController } from '@ionic/angular';
import { SolicitacoesService } from '../services/solicitacoes/solicitacoes.service';
import { ViagemService } from '../services/viagem/viagem.service';
import { LoadingService } from '../shared/loading/loading.service';
import { NotificationService } from '../shared/notification/notification.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})


export class ModalComponent {
  public listaEndereco: {};
  idViagem;

  constructor(
    private modalCtrl: ModalController,
    private solicitacoesService: SolicitacoesService,
    public navParams: NavParams,
    public loadingService: LoadingService,
    public notificationService: NotificationService) {
    this.idViagem = this.navParams.get('idViagem');
    console.log(this.idViagem);
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  ionViewDidEnter() {
    this.buscandoSolicitacoes();
  }

  aceitarSolicitacao(solicitacao) {
    this.loadingService.showLoading('Aceitando solicitação');
    solicitacao.recusada = false;
    this.solicitacoesService.AtualizarSolicitacaoViagem(solicitacao)
      .pipe(
        finalize(() => {
          this.loadingService.hideLoading();
        })).subscribe(() => {
          this.notificationService.notificarSucesso('Solicitação aceita com sucesso');
        });
  }

  recusarSolicitacao(solicitacao) {
    this.loadingService.showLoading('Recusando solicitação');
    solicitacao.recusada = true;
    this.solicitacoesService.AtualizarSolicitacaoViagem(solicitacao)
      .pipe(
        finalize(() => {
          this.loadingService.hideLoading();
        })).subscribe(() => {
          this.notificationService.notificarSucesso('Solicitação recusada com sucesso');
        });
  }

  buscandoSolicitacoes() {
    this.loadingService.showLoading('Atualizando solicitações');
    this.solicitacoesService.buscarSolicitacaoViagem(this.idViagem)
      .pipe(
        finalize(() => {
          this.loadingService.hideLoading();
        }))
      .subscribe((data: any) => {
        this.listaEndereco = data;
      });
  }

}
