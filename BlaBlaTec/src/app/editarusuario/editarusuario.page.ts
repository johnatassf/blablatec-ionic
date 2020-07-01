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
      Ra: '',
      NumeroTelefone: '',
    }

    usuarioAtualizado = {
      Id: '',
      Email: '',
      Name: '',
      LastName: '',
      Ra: '',
      NumeroTelefone: '',
      Encerrado: false,
    }

  ngOnInit() {
    this.userService.buscarInformacoesUsuario().subscribe((data: any) => {
      console.log(data);
      this.usuario.Id = data[0].id;
      this.usuario.Email = data[0].email;
      this.usuario.Ra = data[0].ra;
      this.usuario.Nome = data[0].nome;
      this.usuario.Sobrenome = data[0].sobrenome;
      this.usuario.NumeroTelefone = data[0].numeroTelefone;
  });
  }

  atualizarInformacoes(){
    this.usuarioAtualizado.Id = this.usuario.Id;
    this.usuarioAtualizado.Email = this.usuario.Email;
    this.usuarioAtualizado.Ra = this.usuario.Ra;
    this.usuarioAtualizado.Name = this.usuario.Nome;
    this.usuarioAtualizado.LastName = this.usuario.Sobrenome;
    this.usuarioAtualizado.NumeroTelefone = this.usuario.NumeroTelefone;

    this.userService.AtualizarUsuario(this.usuarioAtualizado).subscribe((data: any) => {
      this.exibirMensagemAtualziacaoRealizada();
  });
  }

  encerrarConta(){
    this.usuarioAtualizado.Id = this.usuario.Id;
    this.usuarioAtualizado.Email = this.usuario.Email;
    this.usuarioAtualizado.Ra = this.usuario.Ra;
    this.usuarioAtualizado.Name = this.usuario.Nome;
    this.usuarioAtualizado.LastName = this.usuario.Sobrenome;
    this.usuarioAtualizado.NumeroTelefone = this.usuario.NumeroTelefone;
    this.usuarioAtualizado.Encerrado = true;

    this.userService.AtualizarUsuario(this.usuarioAtualizado).subscribe((data: any) => {
      this.exibirMensagemContaEncerrada();
  });
  }

  mapas(): void {
    this.navCtrl.navigateRoot('mapas');
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

  async exibirMensagemContaEncerrada() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Conta encerrada',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.navCtrl.navigateRoot('home');
        }
      }]
    });

    await alert.present();
  }
}
