import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlterarInfocarPageRoutingModule } from './alterar-infocar-routing.module';

import { AlterarInfocarPage } from './alterar-infocar.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AlterarInfocarPageRoutingModule, ReactiveFormsModule],
  declarations: [AlterarInfocarPage],
  providers: [FormBuilder],
})
export class AlterarInfocarPageModule {}
