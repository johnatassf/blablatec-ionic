import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { SolicitacoesService } from '../services/solicitacoes/solicitacoes.service'
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
    public navParams: NavParams) {
    this.idViagem = this.navParams.get('idViagem');
    console.log(this.idViagem);
  }
  dismissModal() {
    this.modalCtrl.dismiss();
  }
  ngOnInit() {
    this.solicitacoesService.buscarSolicitacaoViagem(this.idViagem).subscribe((data: any) => {
      this.listaEndereco = data;
      console.log(this.listaEndereco);
    });
  }

  aceitarSolicitacao(solicitacao) {
    solicitacao.Recusada = false;
    console.log(solicitacao);
    this.solicitacoesService.AtualizarSolicitacaoViagem(solicitacao).subscribe((data: any) => {
      console.log("foi");
    });
  }

  recusarSolicitacao(solicitacao) {
    this.solicitacoesService.AtualizarSolicitacaoViagem(solicitacao).subscribe((data: any) => {
      console.log("foi");
    });
  }

}
