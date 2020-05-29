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

    usuarioAtualizado = {
      Id: '',
      Email: '',
      Name: '',
      LastName: '',
      Ra: ''
    }

  ngOnInit() {
    this.userService.buscarInformacoesUsuario().subscribe((data: any) => {
      console.log(data);
      this.usuario.Id = data[0].id;
      this.usuario.Email = data[0].email;
      this.usuario.Ra = data[0].ra;
      this.usuario.Nome = data[0].nome;
      this.usuario.Sobrenome = data[0].sobrenome;
  });
  }

  atualizarInformacoes(){
    this.usuarioAtualizado.Id = this.usuario.Id;
    this.usuarioAtualizado.Email = this.usuario.Email;
    this.usuarioAtualizado.Ra = this.usuario.Ra;
    this.usuarioAtualizado.Name = this.usuario.Nome;
    this.usuarioAtualizado.LastName = this.usuario.Sobrenome;

    this.userService.AtualizarUsuario(this.usuarioAtualizado).subscribe((data: any) => {
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
