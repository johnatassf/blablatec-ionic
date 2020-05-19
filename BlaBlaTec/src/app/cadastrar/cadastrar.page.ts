import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  constructor(private userService: UserService) {}
  ngOnInit() { }

  finalizarCadastro(){
    console.log("Chegou no page");
    this.userService.cadastrarUsuario().subscribe(data =>{
      console.log(data);
    });
  }
}
