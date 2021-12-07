import { NgModule } from "@angular/core";//Aqui declaramos la conexion entre componentes
import{RouterModule, Routes}from'@angular/router'
//Articulos
import { A1Component } from "./app/components/a1/a1.component";
import { A2Component } from "./app/components/a2/a2.component";
import { A3Component } from "./app/components/a3/a3.component";
import { A4Component } from "./app/components/a4/a4.component";
import { A5Component } from "./app/components/a5/a5.component";
import { A6Component } from "./app/components/a6/a6.component";
//Fin articulos
//Componentes del nav
import { ArticulosComponent } from "./app/components/articulos/articulos.component";
import { AyudaComponent } from "./app/components/ayuda/ayuda.component";
import { GaleriaComponent } from "./app/components/galeria/galeria.component";
import { ListadoComponent } from "./app/components/listado/listado.component";
//Fin componentes del nav

const routes: Routes=[
    {path:'',redirectTo:'galeria',pathMatch:'full'},//Path de inicio

    //Componentes y paths del navbar
    {path:'articulos',component:ArticulosComponent},
    {path:'articulo1',component:A1Component},
    {path:'ayuda',component:AyudaComponent},
    {path:'galeria',component:GaleriaComponent},
    {path:'listado',component:ListadoComponent},
    //Cierre paths navbar

    //Componentes de articulo
    {path:'articulo2',component:A2Component},
    {path:'articulo3',component:A3Component},
    {path:'articulo4',component:A4Component},
    {path:'articulo5',component:A5Component},
    {path:'articulo6',component:A6Component},
    //Fin componentes de articulo

    {path:'**',redirectTo:'articulos'},//Path de default por si un componente falla
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}