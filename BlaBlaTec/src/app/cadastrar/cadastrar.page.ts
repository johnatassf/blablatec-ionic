import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  usuario = {
    Nome: '',
    Email:  '',
    Senha: '',
    ConfirmacaoSenha: ''
  };

  constructor(private userService: UserService) {}
  ngOnInit() { 

   }

  finalizarCadastro(){
    this.userService.cadastrarUsuario(this.usuario).subscribe(data =>{
      console.log(data);
    });
  }
}
