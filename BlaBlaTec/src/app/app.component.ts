import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth/auth.service';
import { EventEmitter } from 'protractor';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']

})


export class AppComponent {

  isMotorista = false;

  listaMenu: {
    rota: string, verificarMotorista: boolean, mostrarMenu: boolean,
    nomeIcon: string, slot: string, titulo: string
  }[] = [
      {
        rota: 'notificacoes',
        verificarMotorista: false,
        mostrarMenu: true,
        nomeIcon: 'home',
        slot: 'start',
        titulo: 'Notificações',
      },
      {
        rota: 'caronas',
        verificarMotorista: true,
        mostrarMenu: true,
        nomeIcon: 'thumbs-up',
        slot: 'start',
        titulo: 'Caronas Oferecidas',
      },
      {
        rota: 'caronas-agendadas',
        verificarMotorista: false,
        mostrarMenu: true,
        nomeIcon: 'thumbs-up',
        slot: 'start',
        titulo: 'Caronas Agendadas',
      },
      {
        rota: 'oferecer-carona',
        verificarMotorista: true,
        mostrarMenu: true,
        nomeIcon: 'chatbubble',
        slot: 'start',
        titulo: 'Oferecer Carona'
      },
      {
        rota: 'procurar-carona',
        verificarMotorista: false,
        mostrarMenu: true,
        nomeIcon: 'search',
        slot: 'start',
        titulo: 'Procurar Carona'
      },
      {
        rota: 'perfil',
        verificarMotorista: false,
        mostrarMenu: true,
        nomeIcon: 'person',
        slot: 'start',
        titulo: 'Meu Perfil'
      },
    ];

  usuarioLogado = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    public router: Router
  ) {
    this.initializeApp();
    this.varificarMenu();
    this.authService.usuarioLogado.subscribe((result: any) => {
      this.usuarioLogado = result;
    });
    this.authService.isMotoristaEvent.subscribe((result: any) => {
      this.isMotorista = result;
      this.varificarMenu();
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
    this.usuarioLogado = false;
  }

  varificarMenu() {
    this.listaMenu.forEach(result => {
      if (result.verificarMotorista) {
        result.mostrarMenu = this.isMotorista;
      }
    });
  }
}
