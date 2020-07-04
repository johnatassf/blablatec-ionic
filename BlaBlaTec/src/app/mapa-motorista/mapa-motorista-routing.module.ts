import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaMotoristaPageComponent } from './mapa-motorista.page';

const routes: Routes = [
  {
    path: '',
    component: MapaMotoristaPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaMotoristaPageRoutingModule {}
