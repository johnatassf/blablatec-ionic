import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarcaronasPage } from './listarcaronas.page';

const routes: Routes = [
  {
    path: '',
    component: ListarcaronasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarcaronasPageRoutingModule {}
