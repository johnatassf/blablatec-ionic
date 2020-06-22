import { Component, OnInit } from '@angular/core';
import { ViagemService } from '../services/viagem/viagem.service'
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-procurar-carona',
  templateUrl: './procurar-carona.page.html',
  styleUrls: ['./procurar-carona.page.scss'],
})
export class ProcurarCaronaPage implements OnInit {

  viagens;

  constructor(private viagemService: ViagemService,
    private alertController: AlertController,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController) {
    this.viagens = [];
  }

  ngOnInit() {
    this.buscarViagens();

  }

  async exibirMensagemCadastroRealizado() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Cadastro realizado com sucesso',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.navigateRoot('home');
          },
        },
      ],
    });

    await alert.present();
  }


  async solicitarCarona(viagem: any) {

    let carregando = await this.loadingCtrl.create({
      message: 'Solicitando carona...',
    });
    carregando.present();

    this.viagemService.solicitarCarona(viagem.id)
      .pipe(
        finalize(() => {
          carregando.dismiss();
        })).subscribe(() => {
          this.buscarViagens();
        }, async (error: Error) => {
          const alert = await this.alertController.create({
            header: 'Aviso',
            message: 'Um erro ocorreu ao efetuar a ação, tente novamente mais tarde',
            buttons: [
              {
                text: 'OK'
              },
            ],
          });
        });
  }

  async removerSolicitacaoCarona(viagem: any) {

    let carregando = await this.loadingCtrl.create({
      message: 'Removendo solicitação carona...',
    });
    carregando.present();

    this.viagemService.removerSolicitacaoCarona(viagem.id)
      .pipe(
        finalize(() => {
          carregando.dismiss();
        })).subscribe(() => {
          this.buscarViagens();
        }, async (error: Error) => {
          const alert = await this.alertController.create({
            header: 'Aviso',
            message: 'Um erro ocorreu ao efetuar a ação, tente novamente mais tarde',
            buttons: [
              {
                text: 'OK'
              },
            ],
          });
        });
  }


  async buscarViagens() {
    await this.viagemService.buscarViagens().subscribe(
      data => {
        console.log(data);
        this.viagens = data;
        console.log(this.viagens);
      },
      (error) => {
        console.log(error);
      }
    );
  }


  doRefresh(event) {
    console.log('Begin async operation');
    this.viagemService.buscarViagens()
      .pipe(finalize(() => { event.target.complete(); }))
      .subscribe(
        data => {
          console.log(data);
          this.viagens = data;
          console.log(this.viagens);
        },
        (error) => {
          console.log(error);
        }
      );

  }
}
