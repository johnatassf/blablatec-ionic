import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaMotoristaPageRoutingModule } from './mapa-motorista-routing.module';

import { MapaMotoristaPageComponent } from './mapa-motorista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaMotoristaPageRoutingModule
  ],
  declarations: [MapaMotoristaPageComponent],
})
export class MapaMotoristaPageModule { }
