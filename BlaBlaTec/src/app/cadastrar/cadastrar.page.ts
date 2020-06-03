import { Component, OnInit, SystemJsNgModuleLoaderConfig } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from '../services/user/user.service';
import { cordovaPropertySet } from '@ionic-native/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  usuario = {
    Nome: '',
    Email: '',
    Senha: '',
    ConfirmacaoSenha: '',
    Ra: '',
    Sobrenome: '',
    ConcordaComTermos: false,
  };

<<<<<<< HEAD
  private form: FormGroup;
=======
  grupo;
>>>>>>> d75e66d20e5fe8187a09d50d482d1b17527fddc6

  constructor(
    private userService: UserService,
    private alertController: AlertController,
    private navCtrl: NavController,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit() {}

  finalizarCadastro() {
    if (!this.verificarSenha()) {
      this.exibirMensagemConformacaoSenha();
      return;
    } else {
      if (this.usuario.ConcordaComTermos) {
        this.userService.cadastrarUsuario(this.usuario).subscribe(
          (data) => {
            this.exibirMensagemCadastroRealizado();
          },
          (error) => {
            this.exibirMensagemCadastroComErro();
          }
        );
      } else {
        this.exibirMensagemConcordaComTermos();
        return;
      }
    }
  }

  teste(evento: any) {
    console.log(evento);
  }

  async exibirMensagemCadastroRealizado() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Cadastro realizado com sucesso',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.navigateRoot('home');
          },
        },
      ],
    });

    await alert.present();
  }

  async exibirMensagemCadastroComErro() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Houve um problema ao realizar o cadastro. Tente novamente mais tarde.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async exibirMensagemConformacaoSenha() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'A confirmação de senha está diferente da senha digitada.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async exibirMensagemConcordaComTermos() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Para realizar o cadastro, você deve concordar com nossos termos de uso.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  verificarSenha() {
    if (this.usuario.Senha != this.usuario.ConfirmacaoSenha) {
      return false;
    } else {
      return true;
    }
  }

  home(): void {
    this.navCtrl.navigateRoot('home');
  }

  async exibirMensagemErroLogin() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Usuario ou senha incorreto.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  public escolha: string;
}
