import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  ngOnInit() {}

  constructor(public navCtrl: NavController) {}

  //necessários os parametros para o FireBase
  finalizarCadastro(): void {
    this.navCtrl.navigateRoot('home');
  }
}
