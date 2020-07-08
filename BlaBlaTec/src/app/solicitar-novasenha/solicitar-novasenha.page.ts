import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-solicitar-novasenha',
  templateUrl: './solicitar-novasenha.page.html',
  styleUrls: ['./solicitar-novasenha.page.scss'],
})
export class SolicitarNovasenhaPage implements OnInit {
  [x: string]: any;

  usuario = {

    Senha: '',
    ConfirmacaoSenha: '',
  };
  usuarioAtualizado = {
    Senha: '',
    ConfirmacaoSenha: '',
  };

  senha = new FormControl('', [Validators.required]);
  confirmacaoSenha = new FormControl('', [Validators.required]);

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    public navCtrl: NavController, 
    private alertController: AlertController,
    private userService: UserService,
) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      senha: this.senha,
      confirmacaoSenha: this.confirmacaoSenha,
    });

  }
  mapas(): void {
    this.navCtrl.navigateRoot('mapas');
  }

  home(): void {
    this.navCtrl.navigateRoot('home');
  };

  atualizarSenha(): void {
    this.usuarioAtualizado.Senha = this.usuario.Senha;
    this.usuarioAtualizado.ConfirmacaoSenha = this.usuario.ConfirmacaoSenha;


  };
  async exibirMensagemAtualziacaoRealizada() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Perfil atualizado com sucesso',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.navCtrl.navigateRoot('notificacoes');
        }
      }]
    });

    await alert.present();
  }
}
