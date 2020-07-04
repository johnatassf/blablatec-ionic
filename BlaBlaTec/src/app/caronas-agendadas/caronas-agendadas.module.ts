import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaronasAgendadasPageRoutingModule } from './caronas-agendadas-routing.module';

import { CaronasAgendadasPage } from './caronas-agendadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaronasAgendadasPageRoutingModule
  ],
  declarations: [CaronasAgendadasPage]
})
export class CaronasAgendadasPageModule {}
