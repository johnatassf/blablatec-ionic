import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from '@ionic/angular';

import { UserService } from '../services/user/user.service';
import { finalize } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';
import { TokenAutentication } from '../model/TokenAutentication';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario = {
    Ra: '',
    Password: '',
  };

  constructor(
    public navCtrl: NavController,
    private userService: UserService,
    private authService: AuthService,
    private alertController: AlertController,
    private loadingCtrl: LoadingController
  ) { }

  acessarCadastrar(): void {
    this.navCtrl.navigateRoot('cadastrar');
  }

  async realizarLogin() {
    // this.navCtrl.navigateRoot('mapas');

    let carregando = await this.loadingCtrl.create({
      message: 'Carregando...',
    });

    carregando.present();

    this.userService
      .autenticarUsuario(this.usuario)
      .pipe(
        finalize(() => {
          carregando.dismiss();
        })
      )
      .subscribe(
        (data: any) => {

          const token = new TokenAutentication();
          token.accessToken = data?.accessToken;
          token.authenticated = data?.authenticated;
          token.created = data?.created;
          token.expiration = data?.expiration;

          window.localStorage.setItem('ContentLocaly', JSON.stringify(token));
          this.navCtrl.navigateRoot('mapas');
        },
        (error: any) => {
          console.log(error);
          this.exibirMensagemErroLogin();
        }
      );
  }
  async exibirMensagemErroLogin() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Usuario ou senha incorreto.',
      buttons: ['OK'],
    });
    await alert.present();
  }
  alterarSenha(): void {
    this.navCtrl.navigateRoot('alterar-senha');
  }
}
