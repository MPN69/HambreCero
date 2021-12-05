import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ListadoComponent } from './components/listado/listado.component';
import { A1Component } from './components/a1/a1.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    AyudaComponent,
    GaleriaComponent,
    ListadoComponent,
    A1Component,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
