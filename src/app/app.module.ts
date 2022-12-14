import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MaterialExampleModule } from 'src/material.module';
import { HttpClientModule } from '@angular/common/http';
import { PublicoComponent } from './layout/publico/publico.component';
import { UsuarioLayoutComponent } from './layout/usuario-layout/usuario-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    // Pagina1Component,
    // Pagina2Component,
    // PaginaPrincipalComponent,
    // DialogInserirTransacaoComponent,
    // DialogConfirmacaoExclusao,
    PublicoComponent,
    UsuarioLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,

    HttpClientModule,


    MaterialExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
