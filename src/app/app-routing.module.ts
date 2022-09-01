import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: PaginaPrincipalComponent
  },
  {
    path: 'pagina1',
    component: Pagina1Component
  },
  {
    path: 'pagina2',
    component: Pagina2Component
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
