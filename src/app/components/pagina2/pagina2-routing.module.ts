import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pagina2Component } from './pagina2.component';


export const routesPagina2: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'pagina2',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: Pagina2Component,
    data: { title: 'Pagina 2'},
  },
  {
    path: 'teste',
    component: Pagina2Component,
    data: { title: 'Pagina 2'},
  },
  {
    path: 'teste1',
    component: Pagina2Component,
    data: { title: 'Pagina 2'},
  }


];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class Pagina2RoutingModule { }
