import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvaliacaoCaronasPage } from './avaliacao-caronas.page';

const routes: Routes = [
  {
    path: '',
    component: AvaliacaoCaronasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvaliacaoCaronasPageRoutingModule {}
