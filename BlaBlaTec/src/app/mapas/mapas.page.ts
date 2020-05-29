import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.page.html',
  styleUrls: ['./mapas.page.scss'],
})
export class MapasPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  irParaMeuPerfil(){
    this.navCtrl.navigateRoot('perfil');
  }
}
