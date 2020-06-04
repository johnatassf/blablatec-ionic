import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';


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
  constructor(public navCtrl: NavController, private userService: UserService, private alertController: AlertController) {}

  acessarCadastrar(): void {
    this.navCtrl.navigateRoot('cadastrar');
  }

  realizarLogin(): void {
    this.navCtrl.navigateRoot('mapas');
  //   this.userService.autenticarUsuario(this.usuario).subscribe((data: any) => {
  //     window.localStorage.setItem("ContentLocaly", data.accessToken);
  //     this.navCtrl.navigateRoot('mapas');
  // },
  // (error: any) => {
  //   console.log(error);
  //   this.exibirMensagemErroLogin();
  // });
  }
  async exibirMensagemErroLogin() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Usuario ou senha incorreto.',
      buttons: ['OK']
    });
    await alert.present();
  }
  alterarSenha(): void {
    this.navCtrl.navigateRoot('alterar-senha');
  }
}
