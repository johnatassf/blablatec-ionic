import { threadId } from 'worker_threads';

export class RotaAtiva {

    id: number;
    latLng: string;
    pontoFinal: string;
    idMotorista: number;
    idUsuarioLogado: number;
    isMotorista: boolean;
    idViagem: number;

}


export class RotaAtivaUpdate {
    constructor(id: number, latLng: string) {
        this.id = id;
        this.latLng = latLng;
    }

    id: number;
    latLng: string;
}

