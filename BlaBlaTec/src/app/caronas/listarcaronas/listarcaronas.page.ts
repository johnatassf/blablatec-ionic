import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/modal/modal.component';

@Component({
  selector: 'app-listarcaronas',
  templateUrl: './listarcaronas.page.html',
  styleUrls: ['./listarcaronas.page.scss'],
})
export class ListarcaronasPage implements OnInit {

 lista =[
   {
     name: 'Oferecidas'
   },
   {
     name: 'Agendadas'
   }
 ];

  constructor(private modalController: ModalController) { }
  async openModal(){
    const modal = await this.modalController.create({
      component: ModalComponent
    }); 
    await modal.present();
  }

  ngOnInit(){
  }
// criar lista de caronas


}
