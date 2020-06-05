import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.page.html',
  styleUrls: ['./mapas.page.scss'],
})
export class MapasPage implements OnInit {
  constructor(public navCtrl: NavController, public actionSheetController: ActionSheetController) {}

  ngOnInit() {}


  async openActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Menu',
      cssClass: 'my-custom-class',
      buttons: [
        
        {
          text: 'Oferecer Carona',
          icon: 'thumbs-up',
          handler: () => {
            this.navCtrl.navigateRoot('oferecer-carona');
          },
        },
        {
          text: 'Procurar',
          icon: 'search',
          handler: () => {
            console.log('Play clicked');
          },
        },
        {
          text: 'Meu Perfil',
          icon: 'happy-outline',
          handler: () => {
            this.navCtrl.navigateRoot('perfil');
          },
        },
        {
          text: 'Corridas',
          icon: 'list-outline',
          handler: () => {
            this.navCtrl.navigateRoot('listarcaronas');
          },
        },
        {
          text: 'Voltar',
          icon: 'arrow-back-circle',
          role: 'cancel',
          handler: () => {
            console.log('Voltar clicked');
          },
        },
      ],
    });
    await actionSheet.present();
  }
  procurarCaronas(){
    this.navCtrl.navigateRoot('listarCaronas');
  }
}
