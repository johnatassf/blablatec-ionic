import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-oferecer-carona',
  templateUrl: './oferecer-carona.page.html',
  styleUrls: ['./oferecer-carona.page.scss'],
})
export class OferecerCaronaPage implements OnInit {
  
  private form: FormGroup;

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'origem': ['', Validators.compose([
        Validators.required        
      ])],
      'destino': ['', Validators.compose([
        Validators.required        
      ])],
      'data': ['', Validators.compose([
        Validators.required,        
      ])],
      'qtdLugares': ['', Validators.compose([
        Validators.required,
        Validators.pattern(/[0-9]/),
        Validators.maxLength(3)     
      ])],
    });
  }

  mapas(): void {
    this.navCtrl.navigateRoot('mapas');
  }

  oferecerCarona(){

  }
}
