import { UsuarioLayoutComponent } from './layout/usuario-layout/usuario-layout.component';
import { PublicoComponent } from './layout/publico/publico.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { Pagina1Component } from './pages/usuario/pagina1/pagina1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'usuario',
    pathMatch: 'full'
  },
  {
    path: 'usuario',
    component: UsuarioLayoutComponent,
    data: { title: 'Transações'},
    loadChildren: () => import('./pages/usuario/usuario.module').then(m => m.UsuarioModule)
  },

  {
    path: 'publico',
    component: PublicoComponent,
    loadChildren: () => import('./components/pagina2/pagina2.module').then(m => m.Pagina2Module)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
