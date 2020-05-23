import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-editarusuario',
  templateUrl: './editarusuario.page.html',
  styleUrls: ['./editarusuario.page.scss'],
})
export class EditarusuarioPage implements OnInit {

  constructor(private userService: UserService,
    private alertController: AlertController,
    private navCtrl: NavController) { }

    usuario = {
      Id: '',
      Email: '',
      Nome: '',
      Sobrenome: '',
      Ra: ''
    }

  ngOnInit() {
    this.userService.buscarInformacoesUsuario().subscribe((data: any) => {
      console.log(data);
      this.usuario.Id = data.id;
      this.usuario.Email = data.email;
      this.usuario.Ra = data.ra;
      this.usuario.Nome = data.nome;
      this.usuario.Sobrenome = data.sobrenome;
  });
  }

  atualizarInformacoes(){
    this.userService.AtualizarUsuario(this.usuario).subscribe((data: any) => {
      this.exibirMensagemAtualziacaoRealizada();
  });
  }

  async exibirMensagemAtualziacaoRealizada() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Perfil atualizado com sucesso',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.navCtrl.navigateRoot('perfil');
        }
      }]
    });

    await alert.present();
  }
}
