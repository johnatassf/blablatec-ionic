import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { TokenAutentication } from '../../model/TokenAutentication';
import { ToastController, LoadingController } from '@ionic/angular';
import { debounce, debounceTime } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    loading: HTMLIonLoadingElement;


    constructor(
        private loadingCtrl: LoadingController,
    ) {
        this.createLoading();
    }

    showLoading() {
        if (this.loading)
            this.loading.present();
    }

    hideLoading() {
        if (this.loading) {
            setTimeout(() => { this.loading.dismiss(); }, 1500);
        }
    }

    private async createLoading() {
        this.loading = await this.loadingCtrl.create({
            spinner: null,
            message: `  <div class="custom-spinner-container" style="background: white!important">
           <a href="https://www.imagensanimadas.com/cat-fuscas-700.htm">
            <img src="https://www.imagensanimadas.com/data/media/700/fusca-imagem-animada-0005.gif" border="0" alt="fusca-imagem-animada-0005" /></a>
            <div class="texto" >Carregando...<div>
         </div>`,
            translucent: true,
            cssClass: ['--background:white']
        });

    }
}
