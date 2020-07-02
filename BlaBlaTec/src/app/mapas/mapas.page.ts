import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, ActionSheetController } from '@ionic/angular';
import { ModalCorridaService } from '../services/modal-corrida/modal-corrida.service';
import { RotaAtiva } from '../mapa-motorista/rota-ativa-model';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.page.html',
  styleUrls: ['./mapas.page.scss'],
})
export class MapasPage implements OnInit {
  showCorridaEmAndamento: boolean;
  constructor(
    public navCtrl: NavController,
    public actionSheetController: ActionSheetController,
    private modalCorridaService: ModalCorridaService
  ) { }

  ngOnInit() {
    this.verificarCorridaAndamento();
  }


  procurarCaronas() {
    this.navCtrl.navigateRoot('listarCaronas');
  }

  verificarCorridaAndamento() {
    this.modalCorridaService.buscarRotasEmAdamentoUsuario().subscribe(async (result: RotaAtiva) => {
      this.showCorridaEmAndamento = true;
    }, error => {
      this.showCorridaEmAndamento = false;
    });
  }

  showModal(){
    this.modalCorridaService.mostrarCorridaAtiva.emit(true);
  }
}
