import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-alterar-infocar',
  templateUrl: './alterar-infocar.page.html',
  styleUrls: ['./alterar-infocar.page.scss'],
})
export class AlterarInfocarPage implements OnInit {
usuario={
  Modelo: '',
  Placa: '',
  Corcarro: ''
}

  modelo = new FormControl('', [Validators.required]);
  placa = new FormControl('', [Validators.required]);
  corcarro = new FormControl('', [Validators.required]);

  form: FormGroup;

  constructor(public formBuilder: FormBuilder,public navCtrl: NavController) { }

  ngOnInit() {

    this.form = this.formBuilder.group({

      modelo: this.modelo,
      placa: this.placa,
      corcarro: this.corcarro,

    });
  }

  home(): void {
    this.navCtrl.navigateRoot('home');
  };

  atualizarInformacoes(): void{

  };

}
