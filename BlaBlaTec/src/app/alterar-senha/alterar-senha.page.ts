import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';


import { UserService } from '../services/user/user.service';
import { AlterarSenhaService } from './alterar-senha.service';


@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.page.html',
  styleUrls: ['./alterar-senha.page.scss'],
})
export class AlterarSenhaPage implements OnInit {
  usuario = {
    Ra: '',
    email: ''
  };

  constructor(public navCtrl: NavController, private userService: AlterarSenhaService, private alertController: AlertController) { }

  ngOnInit() {
  }
  enviarSenha(): void {
    this.userService.resetarSenha(this.usuario.Ra, this.usuario.email)
      .subscribe((data: Response) => {
        const mensagem = 'Encaminhamos um e-mail para você, por favor verifique a caiza de span e lixeira';
        this.exibirMensagemEnvioSenha(mensagem);
      },
        (error: any) => {
          console.log(error);
          const mensagem = 'Erro ao atualizar senha, por favor tente novamente mais tarde';
          this.exibirMensagemEnvioSenha(mensagem);
        });
  }
  home(): void {
    this.navCtrl.navigateRoot('home');
  };
  async exibirMensagemEnvioSenha(mensagem: string) {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: mensagem,
      buttons: [{

        text: 'Ok',
        role: 'ok',
        handler: () => {
          this.navCtrl.navigateRoot('home');
        }
      }]
    });
    await alert.present();
  }

}
