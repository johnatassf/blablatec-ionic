import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AuthInterceptor } from './http-intercetor/http-intercetor';
import { AuthService } from './services/auth/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { ModalCorridaService } from './services/modal-corrida/modal-corrida.service';
import { ModalMapaCorridaComponent } from './mapa-motorista/modal-mapa.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalMapaCorridaComponent],
  entryComponents: [],

  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    ModalCorridaService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Geolocation,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    Storage
  ],
  bootstrap: [AppComponent],

})
export class AppModule { } 
