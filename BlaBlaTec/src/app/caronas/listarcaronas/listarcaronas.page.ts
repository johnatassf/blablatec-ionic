import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/modal/modal.component';
import { ViagemService } from '../../services/viagem/viagem.service';
import * as moment from 'moment';

@Component({
  selector: 'app-listarcaronas',
  templateUrl: './listarcaronas.page.html',
  styleUrls: ['./listarcaronas.page.scss'],
})
export class ListarcaronasPage implements OnInit {

  lista = [];

  constructor(
    private modalController: ModalController,
    private serviceViagem: ViagemService
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

  ngOnInit() {
    this.serviceViagem.buscarMinhasViagens().subscribe((data: any) => {
      console.log(data);
      this.lista = data;
    });
  }

  formatarData(data) {
    return moment(data, 'YYYY-MM-DD[T]HH:mm:ss').format('DD-MM-YYYY HH:mm:ss')
  }


}
