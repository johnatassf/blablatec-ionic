import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { HomeGuard } from './guarD/home.guard';

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
    canActivate: [HomeGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./editarusuario/editarusuario.module').then(m => m.EditarusuarioPageModule),
    canActivate: [HomeGuard]
  },
  {
    path: 'alterar-senha',
    loadChildren: () => import('./alterar-senha/alterar-senha.module').then(m => m.AlterarSenhaPageModule),
    canActivate: [HomeGuard]
  },
  {
    path: 'listar-caronas',
    loadChildren: () => import('./caronas/listarcaronas/listarcaronas.module').then(m => m.ListarcaronasPageModule),
    canActivate: [HomeGuard]
  },
  {
    path: 'oferecer-carona',
    loadChildren: () => import('./oferecer-carona/oferecer-carona.module').then(m => m.OferecerCaronaPageModule),
    canActivate: [HomeGuard]
  },
  {
    path: 'mapa-motorista',
    loadChildren: () => import('./mapa-motorista/mapa-motorista.module').then(m => m.MapaMotoristaPageModule),
    canActivate: [HomeGuard]
  },
  {
    path: 'procurar-carona',
    loadChildren: () => import('./procurar-carona/procurar-carona.module').then(m => m.ProcurarCaronaPageModule),
    canActivate: [HomeGuard]
  },
  {
    path: 'caronas',
    loadChildren: () => import('./caronas/listarcaronas/listarcaronas.module').then(m => m.ListarcaronasPageModule)
  },  {
    path: 'alterar-infocar',
    loadChildren: () => import('./alterar-infocar/alterar-infocar.module').then( m => m.AlterarInfocarPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
