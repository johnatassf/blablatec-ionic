import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth/auth.service';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']

})


export class AppComponent {

  isMotorista = true;

  listaMenu: { rota: string, varificarMotorista: boolean, mostrarMenu: boolean, nomeIcon: string, slot: string, titulo: string }[] = [
    { rota: 'caronas', varificarMotorista: true, mostrarMenu: true, nomeIcon: 'thumbs-up', slot: 'start', titulo: 'Minhas Caronas', },
    { rota: 'oferecer-carona', varificarMotorista: true, mostrarMenu: true, nomeIcon: 'chatbubble', slot: 'start', titulo: 'Oferecer carona' },
    { rota: 'procurar-carona', varificarMotorista: false, mostrarMenu: true, nomeIcon: 'search', slot: 'start', titulo: 'Procurar Carona' },
    { rota: 'perfil', varificarMotorista: false, mostrarMenu: true, nomeIcon: 'person', slot: 'start', titulo: 'Meu Perfil' },
    { rota: 'listar-caronas', varificarMotorista: false, mostrarMenu: true, nomeIcon: 'list', slot: 'start', titulo: 'Listar' },
  ];

  usuarioLogado: boolean = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService
  ) {
    this.initializeApp();
    this.varificarMenu();
    
    this.authService.usuarioLogado.subscribe((result: any) => {
     console.log(result);
      this.usuarioLogado = result;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });


  }


  logOut() {
    this.authService.logOut();
  }

  varificarMenu() {
    this.listaMenu.forEach(result => {
      if (result.varificarMotorista) {
        result.mostrarMenu = this.isMotorista;
      }
    });
  }
}
