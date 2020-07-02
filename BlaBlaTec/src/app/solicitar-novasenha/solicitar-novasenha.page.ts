import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-solicitar-novasenha',
  templateUrl: './solicitar-novasenha.page.html',
  styleUrls: ['./solicitar-novasenha.page.scss'],
})
export class SolicitarNovasenhaPage implements OnInit {

  usuario = {

    Senha: '',
    ConfirmacaoSenha: '',
  };

  senha = new FormControl('', [Validators.required]);
  confirmacaoSenha = new FormControl('', [Validators.required]);

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, public navCtrl: NavController) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      senha: this.senha,
      confirmacaoSenha: this.confirmacaoSenha,
    });

  }

  home(): void {
    this.navCtrl.navigateRoot('home');
  };

  atualizarSenha(): void {

  };

}
