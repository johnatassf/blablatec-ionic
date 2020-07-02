import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitarNovasenhaPage } from './solicitar-novasenha.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitarNovasenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitarNovasenhaPageRoutingModule {}
