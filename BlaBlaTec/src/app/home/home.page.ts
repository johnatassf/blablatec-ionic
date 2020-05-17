import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  acessarCadastrar(): void {
    this.navCtrl.navigateRoot('cadastrar');
  }

  /*    // Chamar Página do login  (acesso ao banco)
//TAMBÉM NA ALTERAR HOME.PAGE.HTML  para <ion-button expand="block"(click)='acessarCadastrar()'>Acessar</ion-button>
  acessarLogin(): void{
    this.navCtrl.navigateRoot('');
  } */
}
