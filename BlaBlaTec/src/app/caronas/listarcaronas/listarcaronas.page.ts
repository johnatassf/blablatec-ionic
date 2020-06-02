import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listarcaronas',
  templateUrl: './listarcaronas.page.html',
  styleUrls: ['./listarcaronas.page.scss'],
})
export class ListarcaronasPage implements OnInit {

  public show_agendadas: boolean = false;
  public show_oferecidas: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }
// criar lista de caronas


}
