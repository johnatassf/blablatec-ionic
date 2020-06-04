import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./cadastrar/cadastrar.module').then((m) => m.CadastrarPageModule),
  },

  {
    path: 'mapas',
    loadChildren: () => import('./mapas/mapas.module').then((m) => m.MapasPageModule),
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'perfil',
    loadChildren: () => import('./editarusuario/editarusuario.module').then( m => m.EditarusuarioPageModule)
  },
  {   
    path: 'alterar-senha',
    loadChildren: () => import('./alterar-senha/alterar-senha.module').then( m => m.AlterarSenhaPageModule)
  },
  {
    path: 'oferecer-carona',
    loadChildren: () => import('./oferecer-carona/oferecer-carona.module').then( m => m.OferecerCaronaPageModule)
  },
  {
    path: 'mapa-motorista',
    loadChildren: () => import('./mapa-motorista/mapa-motorista.module').then( m => m.MapaMotoristaPageModule)
  },
  {
    path: 'listarcaronas',
    loadChildren: () => import('./caronas/listarcaronas/listarcaronas.module').then( m => m.ListarcaronasPageModule)
  },
 
];  

 
];  

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
