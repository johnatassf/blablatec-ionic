import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from '@ionic/angular';

import { UserService } from '../services/user/user.service';
import { finalize } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';
import { TokenAutentication } from '../model/TokenAutentication';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

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

  ra = new FormControl('', Validators.compose([Validators.required]));
  password = new FormControl('', Validators.compose([Validators.required]));
  form: FormGroup;

  constructor(
    public navCtrl: NavController,
    private userService: UserService,
    private authService: AuthService,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      ra: this.ra,
      password: this.password
    });
  }
  acessarCadastrar(): void {
    this.navCtrl.navigateRoot('cadastrar');
  }

  async realizarLogin() {
    if (this.form.invalid)
      return;

    const carregando = await this.loadingCtrl.create({
      message: 'Carregando...',
    });

    carregando.present();

    this.userService
      .autenticarUsuario(this.form.value)
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
          this.authService.isMotoristaEvent.emit(this.authService.isMotorista());
          this.navCtrl.navigateRoot('mapas');
        },
        (error: HttpErrorResponse) => {
          if (error.status === 400) {
            this.exibirMensagemErroLogin('ERRO: ' + error.error.message);
          } else {
            this.exibirMensagemErroLogin('Um erro ocorreu tente novamente mais tarde');
          }
        }
      );
  }
  async exibirMensagemErroLogin(msg: string) {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: msg,
      buttons: ['OK'],
    });
    await alert.present();
  }
  alterarSenha(): void {
    this.navCtrl.navigateRoot('alterar-senha');
  }
}
