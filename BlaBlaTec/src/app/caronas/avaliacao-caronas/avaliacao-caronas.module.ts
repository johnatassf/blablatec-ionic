import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvaliacaoCaronasPageRoutingModule } from './avaliacao-caronas-routing.module';

import { AvaliacaoCaronasPage } from './avaliacao-caronas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvaliacaoCaronasPageRoutingModule
  ],
  declarations: [AvaliacaoCaronasPage]
})
export class AvaliacaoCaronasPageModule {}
