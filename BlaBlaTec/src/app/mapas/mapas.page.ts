import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, AlertController, ActionSheetController } from '@ionic/angular';
import { ModalCorridaService } from '../services/modal-corrida/modal-corrida.service';
import { RotaAtiva } from '../mapa-motorista/rota-ativa-model';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.page.html',
  styleUrls: ['./mapas.page.scss'],
})
export class MapasPage implements OnDestroy {
  showCorridaEmAndamento = false;
  constructor(
    public navCtrl: NavController,
    public actionSheetController: ActionSheetController,
    private modalCorridaService: ModalCorridaService
  ) { }

  ionViewDidEnter() {
    this.verificarCorridaAndamento();
  }


  procurarCaronas() {
    this.navCtrl.navigateRoot('listarCaronas');
  }

  verificarCorridaAndamento() {
    this.modalCorridaService.buscarRotasEmAdamentoUsuario().subscribe(async (result: any) => {
      result.success
        ? this.showCorridaEmAndamento = true
        : this.showCorridaEmAndamento = false;
    });
  }

  showModal() {
    this.modalCorridaService.mostrarCorridaAtivaMenu.emit(true);
  }

  ngOnDestroy(): void {
    this.showCorridaEmAndamento = false;
  }
}
