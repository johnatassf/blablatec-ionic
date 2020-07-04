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


    async showLoading() {
        if (!this.loading)
            await this.createLoading();

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

    private async createLoading() {
        this.loading = await this.loadingCtrl.create({
            spinner: null,
            message: `  <div class="custom-spinner-container" style="background: white!important">
           <a>
            <img src="../assets/gif/animat-road-trip-color.gif" /></a>
            <div class="texto" >Carregando...<div>
         </div>`,
            translucent: true,
            cssClass: ['--background:white']
        });

    }
}
