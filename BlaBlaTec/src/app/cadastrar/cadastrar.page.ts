import { Component, OnInit, SystemJsNgModuleLoaderConfig } from '@angular/core';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { UserService } from '../services/user/user.service';
import { cordovaPropertySet } from '@ionic-native/core';
import { finalize } from 'rxjs/operators';

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
    Celular: '',
    Modelo: '',
    Placa: '',
    Corcarro: '',
    Sobrenome: '',
    motorista: false,

    ConcordaComTermos: false,
  };

  nome = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.email]);
  senha = new FormControl('', [Validators.required]);
  confirmacaoSenha = new FormControl('', [Validators.required]);
  ra = new FormControl('', [Validators.required]);
  celular = new FormControl('', [Validators.required]);
  modelo = new FormControl('', []);
  placa = new FormControl('', []);
  corcarro = new FormControl('', []);
  sobrenome = new FormControl('', [Validators.required]);
  motorista = new FormControl(false, []);
  cordaComTermos = new FormControl(false, [Validators.required]);
  grupo = new FormControl('', [Validators.required]);

  form: FormGroup;




  constructor(
    private userService: UserService,
    private alertController: AlertController,
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
  ) { }
  ngOnInit() {

    this.form = this.formBuilder.group({
      nome: this.nome,
      email: this.email,
      senha: this.senha,
      confirmacaoSenha: this.confirmacaoSenha,
      ra: this.ra,
      celular: this.celular,
      modelo: this.modelo,
      placa: this.placa,
      corcarro: this.corcarro,
      sobrenome: this.sobrenome,
      motorista: this.motorista,
      cordaComTermos: this.cordaComTermos,
      grupo: this.grupo,
    });
  }

  async finalizarCadastro() {
    const carregando = await this.loadingCtrl.create({
      message: 'Carregando...',
    });


    if (!this.verificarSenha()) {
      this.exibirMensagemConformacaoSenha();
      return;
    } else {
      carregando.present();
      if (this.form.controls.cordaComTermos.value) {
        this.form.controls.motorista.patchValue('perfilMotorista' ? true : false);
        this.userService.cadastrarUsuario(this.form.value)
          .pipe(finalize(() => this.loadingCtrl.dismiss()))
          .subscribe(
            (data) => {
              this.exibirMensagem(data.message);
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

  async exibirMensagem(mensagem: string) {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: mensagem,
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
