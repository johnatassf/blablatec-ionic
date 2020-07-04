import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaronasAgendadasPage } from './caronas-agendadas.page';

const routes: Routes = [
  {
    path: '',
    component: CaronasAgendadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaronasAgendadasPageRoutingModule {}
