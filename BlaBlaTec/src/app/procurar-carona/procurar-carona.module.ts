import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcurarCaronaPageRoutingModule } from './procurar-carona-routing.module';

import { ProcurarCaronaPage } from './procurar-carona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcurarCaronaPageRoutingModule
  ],
  declarations: [ProcurarCaronaPage]
})
export class ProcurarCaronaPageModule {}
