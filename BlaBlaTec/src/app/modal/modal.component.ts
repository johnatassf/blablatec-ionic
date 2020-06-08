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
        endereco: 'Rua',
        nome: 'BlaBlaTec',
        horario: '18:30 hs'
    }
  ]

  constructor(private modalCtrl: ModalController) { }
  dismissModal(){
      this.modalCtrl.dismiss();
  }
  ngOnInit() {}

}
