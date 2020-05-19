import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { CadastrarPageModule } from '../cadastrar/cadastrar.module';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  ngOnInit() {}

  constructor(public navCtrl: NavController, private cadastrarModule: CadastrarPageModule) {}

  //necessários os parametros para o FireBase
  finalizarCadastro(): void {
    this.cadastrarModule.cadastrarUsuario();
  }
}
