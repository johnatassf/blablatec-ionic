import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { TokenAutentication } from '../../model/TokenAutentication';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {


    constructor(
        public toastController: ToastController
    ) { }



    async notificarErro(mensagem: string) {
        await this.presentToast(mensagem, 'danger', 'Erro');
    }
    async notificarSucesso(mensagem: string) {
        await this.presentToast(mensagem, 'success', 'Sucesso');
    }
    async notificarInfo(mensagem: string) {
        await this.presentToast(mensagem, 'secondary', 'Info');
    }

    async presentToast(message: string, color = 'success', header = '', duration = 5000) {
        const toast = await this.toastController.create({
            message,
            duration,
            position: 'bottom',
            color,
            cssClass: ['--end'],
            header

        });
        toast.present();
    }

}
