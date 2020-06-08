import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarcaronasPageRoutingModule } from './listarcaronas-routing.module';

import { ListarcaronasPage } from './listarcaronas.page';
import { ModalComponent } from 'src/app/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarcaronasPageRoutingModule
  ],
  declarations: [ListarcaronasPage, ModalComponent],
  entryComponents:[ModalComponent]
})
export class ListarcaronasPageModule {}
