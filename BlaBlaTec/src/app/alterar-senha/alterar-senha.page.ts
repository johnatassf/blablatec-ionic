import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';


import { UserService } from '../services/user/user.service';


@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.page.html',
  styleUrls: ['./alterar-senha.page.scss'],
})
export class AlterarSenhaPage implements OnInit {
  usuario = {
    Ra:  '',
    email: ''
  };

  constructor(public navCtrl: NavController, private userService: UserService, private alertController: AlertController) {}

  ngOnInit() {
  }
  enviarSenha(): void {
    this.userService.autenticarUsuario(this.usuario).subscribe((data: Response) => {
      this.navCtrl.navigateRoot('mapas');
    },
    (error: any) => {
      console.log(error);
      this.exibirMensagemEnvioSenha();
    });
}
  home(): void {
      this.navCtrl.navigateRoot('home');
  };
  async exibirMensagemEnvioSenha() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Sua senha será encaminhada no e-mail cadastrado.',
      buttons: ['OK']
    });
    await alert.present();
  }

}
