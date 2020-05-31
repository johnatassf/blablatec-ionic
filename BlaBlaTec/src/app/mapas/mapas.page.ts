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

  irParaMeuPerfil() {
    this.navCtrl.navigateRoot('perfil');
  }

  async openActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Menu',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Minhas Caronas',
          icon: 'thumbs-up',
          handler: () => {
            console.log('Delete clicked');
          },
        },
        {
          text: 'Meu Histórico',
          icon: 'reader',
          handler: () => {
            console.log('Share clicked');
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
            console.log('Favorite clicked');
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
}
