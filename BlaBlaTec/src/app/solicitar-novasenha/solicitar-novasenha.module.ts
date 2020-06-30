import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitarNovasenhaPageRoutingModule } from './solicitar-novasenha-routing.module';

import { SolicitarNovasenhaPage } from './solicitar-novasenha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SolicitarNovasenhaPageRoutingModule
  ],
  declarations: [SolicitarNovasenhaPage],
  providers: [FormBuilder],
})
export class SolicitarNovasenhaPageModule {}
