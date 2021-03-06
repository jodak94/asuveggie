import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../inicio/inicio.module').then(m => m.InicioPageModule)
          }
        ]
      },
      {
        path: 'publicaciones',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../publicaciones/publicaciones.module').then(m => m.PublicacionesPageModule)
          }
        ]
      },
      {
        path: 'contacto',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../contacto/contacto.module').then(m => m.ContactoPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
