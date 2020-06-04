import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OferecerCaronaPageRoutingModule } from './oferecer-carona-routing.module';

import { OferecerCaronaPage } from './oferecer-carona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OferecerCaronaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [OferecerCaronaPage], 
  providers: [FormBuilder]
})
export class OferecerCaronaPageModule {}
