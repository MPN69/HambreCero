import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  datosJSON: any=[{
    "titulo":"821 millones",
    "contenido":"El número de personas con desnutrición alcanzó los 821 millones en 2017.",
    "autor":"Programa de Las Naciones Unidas para el Desarrollo ",
    "referencia":"-© 2021   Programa de las Naciones Unidas para el Desarrollo",
    "imagen":"../assets/Hambre1.jpg"},
    {
      "titulo":"63%",
      "contenido":"En 2017, Asia representó el 63% de las personas que padecen hambre, casi dos tercios del total.",
      "autor":"Programa de Las Naciones Unidas para el Desarrollo ",
      "referencia":"-© 2021   Programa de las Naciones Unidas para el Desarrollo",
      "imagen":"../assets/H0-10.jpeg"
    },
    {
      "titulo":"22%",
      "contenido":"Cerca de 151 millones de niños menores de cinco años, el 22%, todavía estaban mal desarrollados en 2017.",
      "autor":"Programa de Las Naciones Unidas para el Desarrollo ",
      "referencia":"-© 2021   Programa de las Naciones Unidas para el Desarrollo",
      "imagen":"../assets/Hambre4.jpg"
    },
  ]

  datosJSON2: any=[{
    "titulo":"1 de cada 8",
    "contenido":"Más de 1 de cada 8 adultos es obeso.",
    "autor":"Programa de Las Naciones Unidas para el Desarrollo ",
    "referencia":"-© 2021   Programa de las Naciones Unidas para el Desarrollo",
    "imagen":"../assets/Hambre3.jpg"},
    {
      "titulo":"1 de cada 3",
      "contenido":"1 de cada 3 mujeres en edad reproductiva padece anemia.",
      "autor":"Programa de Las Naciones Unidas para el Desarrollo ",
      "referencia":"-© 2021   Programa de las Naciones Unidas para el Desarrollo",
      "imagen":"../assets/Hambre2.jpg"
    },
    {
      "titulo":"26%",
      "contenido":"El 26% de los trabajadores están empleados en agricultura.",
      "autor":"Programa de Las Naciones Unidas para el Desarrollo ",
      "referencia":"-© 2021   Programa de las Naciones Unidas para el Desarrollo",
      "imagen":"../assets/H0-4.jpg"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
