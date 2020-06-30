import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlterarInfocarPage } from './alterar-infocar.page';

const routes: Routes = [
  {
    path: '',
    component: AlterarInfocarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlterarInfocarPageRoutingModule {}
