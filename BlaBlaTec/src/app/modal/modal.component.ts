import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})


export class ModalComponent implements OnInit {
  public listaEndereco: {endereco: string, nome: string, horario: string} [] = [
    {
        endereco: 'Endereço: Praça 21 de Janeiro',
        nome: 'Passageiro: Joaquim Aroldo',
        horario: 'Horário: 18:30 hs'
    }
  ]
  public items: {texto: string, status: string} [] = [
    {
      texto: 'Destino: Fatec Praia Grande ',
      status: 'Status: Pendente'
    }
  ]

  constructor(private modalCtrl: ModalController) { }
  dismissModal(){
      this.modalCtrl.dismiss();
  }
  ngOnInit() {}

}
