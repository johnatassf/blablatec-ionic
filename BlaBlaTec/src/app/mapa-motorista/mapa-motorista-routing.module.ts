import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaMotoristaPage } from './mapa-motorista.page';

const routes: Routes = [
  {
    path: '',
    component: MapaMotoristaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaMotoristaPageRoutingModule {}
