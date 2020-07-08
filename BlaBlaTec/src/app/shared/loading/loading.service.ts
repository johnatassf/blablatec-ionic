import { Injectable, EventEmitter } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    loading: HTMLIonLoadingElement;

    constructor(
        private loadingCtrl: LoadingController,
    ) { }


    async showLoading(mensagem = 'Carregando...', showIcon = true) {
        if (!this.loading)
            await this.createLoading(mensagem, showIcon);

        this.loading.present();
    }

    hideLoading() {
        if (this.loading) {
            setTimeout(() => {
                this.loading.dismiss();
                this.loading = null;
            }, 1500);
        }
    }

    private async createLoading(mensagem: string, showIcon = true) {
        let template = '';
        if (showIcon) {
            template = `  <div class="custom-spinner-container" style="background: white!important">
            <a>
            <img src="../assets/gif/animat-road-trip-color.gif" /></a>
                                   <div class="texto" >${mensagem}</div>
                                </div>`;
        }
        else {
            template = mensagem;
        }

        this.loading = await this.loadingCtrl.create({
            spinner: showIcon ? null : 'circular',
            message: template,
            translucent: true,
            cssClass: ['--background:white']
        });

    }
}
