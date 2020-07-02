import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, AlertController } from '@ionic/angular';
import {SolicitacoesService} from '../services/solicitacoes/solicitacoes.service'
import { ViagemService } from '../services/viagem/viagem.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})


export class ModalComponent implements OnInit {
  public listaEndereco: {};
  idViagem;

  constructor(private modalCtrl: ModalController,
    private solicitacoesService: SolicitacoesService,
    private serviceViagem: ViagemService,
    public navParams: NavParams,
    private alertController: AlertController) { 
      this.idViagem = this.navParams.get('idViagem');
      console.log(this.idViagem);
    }
  dismissModal(){
      this.modalCtrl.dismiss();
  }
  ngOnInit() {
    this.solicitacoesService.buscarSolicitacaoViagem(this.idViagem).subscribe((data: any) => {
      this.listaEndereco = data;
      console.log(this.listaEndereco);
  });
  }

  aceitarSolicitacao(solicitacao){
    solicitacao.Recusada = false;
    console.log(solicitacao);
    this.solicitacoesService.AtualizarSolicitacaoViagem(solicitacao).subscribe((data: any) => {
      this.exibirSolicitacaoAceita();
  });
  }

  recusarSolicitacao(solicitacao){
    this.solicitacoesService.AtualizarSolicitacaoViagem(solicitacao).subscribe((data: any) => {
      this.exibirSolicitacaoRecusada();
  });
  }

  async exibirSolicitacaoAceita() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Solicitação aceita',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async exibirSolicitacaoRecusada() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Solicitação recusada',
      buttons: ['OK'],
    });
    await alert.present();
  }

}
