import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarPageRoutingModule } from './cadastrar-routing.module';

import { CadastrarPage } from './cadastrar.page';

import { UserService } from '../services/user/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarPageRoutingModule, 
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [CadastrarPage],
  providers: [FormBuilder],
})
export class CadastrarPageModule {
  constructor(private userService: UserService) { }
}
