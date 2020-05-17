import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'pesquisar',
        loadChildren: () => import('../mapas/mapas.module').then((m) => m.MapasPageModule),
      },
      {
        path: 'perfil',
        loadChildren: () => import('../mapas/mapas.module').then((m) => m.MapasPageModule),
      },
      {
        path: 'faq',
        loadChildren: () => import('../mapas/mapas.module').then((m) => m.MapasPageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/pesquisar',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/pesquisar',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
