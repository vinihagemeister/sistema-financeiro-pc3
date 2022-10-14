import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routesPagina2 } from './pagina2-routing.module';
import { Pagina2Component } from './pagina2.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MaterialExampleModule } from 'src/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    Pagina2Component,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routesPagina2),


    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,

    HttpClientModule,


    MaterialExampleModule,
  ],
  providers: [],
  bootstrap: [Pagina2Component]
})
export class Pagina2Module { }
