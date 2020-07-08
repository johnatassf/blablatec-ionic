import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, MenuController } from '@ionic/angular';

import { UserService } from '../services/user/user.service';
import { finalize } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';
import { TokenAutentication } from '../model/TokenAutentication';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ModalCorridaService } from '../services/modal-corrida/modal-corrida.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LoadingService } from '../shared/loading/loading.service';

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
    private formBuilder: FormBuilder,
    private modalService: ModalCorridaService,
    public loadingService: LoadingService,
    public menu: MenuController
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      ra: this.ra,
      password: this.password
    });
  }

  ionViewDidEnter() {
    this.menu.enable(false, 'first');
  }
  acessarCadastrar(): void {
    this.navCtrl.navigateRoot('cadastrar');
  }

  async realizarLogin() {
    if (this.form.invalid)
      return;

    await this.loadingService.showLoading();

    this.userService
      .autenticarUsuario(this.form.value)
      .pipe(
        finalize(() => {
          this.loadingService.hideLoading();
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
          this.modalService.mostrarCorridaAtivaMotorista.emit(true);
          this.menu.enable(true, 'first');
          this.navCtrl.navigateRoot('notificacoes');
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
