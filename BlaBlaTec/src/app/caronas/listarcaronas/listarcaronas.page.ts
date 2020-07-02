import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/modal/modal.component';
import { ViagemService } from '../../services/viagem/viagem.service';

@Component({
  selector: 'app-listarcaronas',
  templateUrl: './listarcaronas.page.html',
  styleUrls: ['./listarcaronas.page.scss'],
})
export class ListarcaronasPage implements OnInit {

 lista =[];

  constructor(private modalController: ModalController,
    private serviceViagem: ViagemService) { }
  async openModal(idViagem){
    console.log("listarcaronas " + idViagem);
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        idViagem: idViagem,
      }
    }); 
    await modal.present();
  }

  ngOnInit(){
    this.serviceViagem.buscarMinhasViagens().subscribe((data: any) => {
      console.log(data);
      this.lista = data;
  });
  }


}
