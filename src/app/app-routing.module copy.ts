import { NgModule } from "@angular/core";
import{RouterModule, Routes}from'@angular/router'
import { A1Component } from "./components/a1/a1.component";
import { ArticulosComponent } from "./components/articulos/articulos.component";
import { AyudaComponent } from "./components/ayuda/ayuda.component";
import { GaleriaComponent } from "./components/galeria/galeria.component";
import { ListadoComponent } from "./components/listado/listado.component";

const routes: Routes=[
    {path:'',redirectTo:'galeria',pathMatch:'full'},

    {path:'articulos',component:ArticulosComponent},
    {path:'articulo1',component:A1Component},
    {path:'ayuda',component:AyudaComponent},
    {path:'galeria',component:GaleriaComponent},
    {path:'listado',component:ListadoComponent},

    {path:'**',redirectTo:'galeria'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}