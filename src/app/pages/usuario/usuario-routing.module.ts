import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { Pagina1Component } from './pagina1/pagina1.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'transacoes',
    pathMatch: 'full'
  },
  {
    path: 'transacoes',
    component: PaginaPrincipalComponent,
    data: { title: 'Transações'},
  },
  {
    path: 'pagina1',
    redirectTo: 'produtos',
    pathMatch: 'full'
  },
  {
    path: 'produtos',
    component: Pagina1Component,
    data: { title: 'Produtos'},
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
