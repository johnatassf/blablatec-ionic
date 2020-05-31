import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarcaronasPageRoutingModule } from './listarcaronas-routing.module';

import { ListarcaronasPage } from './listarcaronas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarcaronasPageRoutingModule
  ],
  declarations: [ListarcaronasPage]
})
export class ListarcaronasPageModule {}
