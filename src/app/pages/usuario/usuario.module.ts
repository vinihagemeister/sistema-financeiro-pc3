import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { Pagina1Component } from './pagina1/pagina1.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { DialogInserirTransacaoComponent } from 'src/app/components/dialog-inserir-transacao/dialog-inserir-transacao.component';
import { DialogConfirmacaoExclusao } from 'src/app/components/dialog-confirmacao-exclusao/dialog-confirmacao-exclusao.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MaterialExampleModule } from 'src/material.module';


@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    Pagina1Component,
    DialogInserirTransacaoComponent,
    DialogConfirmacaoExclusao,
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,

    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,

    HttpClientModule,


    MaterialExampleModule,
  ]
})
export class UsuarioModule { }
