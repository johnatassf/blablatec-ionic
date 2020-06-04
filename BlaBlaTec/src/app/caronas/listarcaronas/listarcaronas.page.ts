import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listarcaronas',
  templateUrl: './listarcaronas.page.html',
  styleUrls: ['./listarcaronas.page.scss'],
})
export class ListarcaronasPage implements OnInit {
  
  public lista: {endereco: string, nome: string, horario: string}[] = [
    {
      endereco: 'Rua',
      nome: 'eu',
      horario: '19:00'
    },
    {
      endereco: 'Rua',
      nome: 'eu',
      horario: '19:00'
    }, 
    {
      endereco: 'Rua',
      nome: 'eu',
      horario: '19:00'
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }
// criar lista de caronas


}
