import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SolicitacoesService } from '../services/solicitacoes/solicitacoes.service'
import { ViagemService } from '../services/viagem/viagem.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})


export class ModalComponent implements OnInit {
  public listaEndereco: {};

  constructor(private modalCtrl: ModalController,
    private solicitacoesService: SolicitacoesService,
    private serviceViagem: ViagemService) { }
  dismissModal() {
    this.modalCtrl.dismiss();
  }
  ngOnInit() {
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    this.solicitacoesService.buscarSolicitacaoViagem().subscribe((data: any) => {
      this.listaEndereco = data;
      console.log(this.listaEndereco);
    });
  }

}
