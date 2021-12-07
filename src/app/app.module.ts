import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from './app.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ListadoComponent } from './components/listado/listado.component';
import { A1Component } from './components/a1/a1.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { A2Component } from './components/a2/a2.component';
import { A3Component } from './components/a3/a3.component';
import { A4Component } from './components/a4/a4.component';
import { A5Component } from './components/a5/a5.component';
import { A6Component } from './components/a6/a6.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    AyudaComponent,
    GaleriaComponent,
    ListadoComponent,
    A1Component,
    NavbarComponent,
    A2Component,
    A3Component,
    A4Component,
    A5Component,//Se declaran los componentes
    A6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
