import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario = {
    Ra:  '',
    Password: ''
  };
  constructor(public navCtrl: NavController, private userService: UserService) {}

  acessarCadastrar(): void {
    this.navCtrl.navigateRoot('cadastrar');
  }

  realizarLogin(): void {
    this.userService.autenticarUsuario(this.usuario).subscribe((data: Response) => {
      this.navCtrl.navigateRoot('mapas');
  },
  (error: any) => {
      console.log(error);
  });
  }
}
