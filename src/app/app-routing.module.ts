import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
  {
    path: 'pagina2',
    component: Pagina2Component,
    data: { title: 'Página 2'},
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
