import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ViagemService } from '../services/viagem/viagem.service';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../shared/loading/loading.service';

@Component({
  selector: 'app-caronas-agendadas',
  templateUrl: './caronas-agendadas.page.html',
  styleUrls: ['./caronas-agendadas.page.scss'],
})
export class CaronasAgendadasPage implements OnInit {

  constructor(private viagemService: ViagemService,
    public loadingService: LoadingService) { }

  caronasAgendadas = [];

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.viagemService.buscarViagensAgendadas().pipe(
      finalize(() => {
        this.loadingService.hideLoading();
      }))
    .subscribe((data: any) => {
      this.caronasAgendadas = data;
      console.log(data);
    });
  }

  doRefresh(event: any) {
    event.target.complete();
  }
  formatarData(data) {
    return moment(data, 'YYYY-MM-DD[T]HH:mm:ss').format('DD-MM-YYYY HH:mm:ss')
  }
}
