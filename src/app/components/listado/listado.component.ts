import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  datosJSON: any = [{//Arreglo con los datos del listado (10 ejemplos)
    "nombre": "Hans Hoogenveen",
    "puesto": "Presidente Independiente del Consejo",
    "inicio": "17 de Junio de 2021",
    "antecedente": "Antes de eso, ocupó varios cargos en los Ministerios de LNV y EZK, incluido el de Director General Agro y Nature.",
    "profesion": "Desconocida"
  }, {
    "nombre": "Yael Rubinsten",
    "puesto": "Presidenta del comité del programa(FOA)",
    "inicio": "Febrero del 2017",
    "antecedente": "In 2005–2009, Rubinstein served as Ambassador of Israel to Thailand and Cambodia. In 2008, Rubinstein organized the first performance in Thailand of Zubin Mehta and the Israel Philharmonic Orchestra.",
    "profesion": "Diplomata"
  }, {
    "nombre": "QU Dongyu",
    "puesto": "Director general(FOA)",
    "inicio": "1o de Agosto de 2019",
    "antecedente": "Qu se desempeñó como Viceministro de Agricultura y Asuntos Rurales de China, donde uno de sus logros fue promover el desarrollo inclusivo e innovador y asegurarse de que las tecnologías de la información y la comunicación (TIC) estuvieran disponibles en las áreas rurales para que más de 400 millones de agricultores pudieran usar sus teléfonos inteligentes. como una nueva herramienta agrícola.",
    "profesion": "Biologo"
  }, {
    "nombre": "Donata Mary Rugarabamu",
    "puesto": "Asesora Jurídica de la Oficina Jurídica(LEG)",
    "inicio": "01 Abril 2021",
    "antecedente": "Administración de juramentos, trabajo de inmigración, actividades de sucesiones, actividades de instrumentos reservados",
    "profesion": "Desconocida"
  }, {
    "nombre": "Stefanos Fotiou",
    "puesto": "Director de la oficina para los objetivos de Desarrollo Sostenible",
    "inicio": "Junio 2020",
    "antecedente": "Stefanos es responsable de la planificación y ejecución del trabajo de la CESPAP de la ONU sobre gestión de recursos naturales, cambio climático, desarrollo urbano sostenible y economía verde. Los aspectos más destacados de su trabajo en su puesto actual incluyen liderar con éxito negociaciones intergubernamentales que resultaron en resultados normativos específicos, establecer nuevas iniciativas sobre cooperación técnica y desarrollo de capacidades, así como idear y dirigir el trabajo analítico en las áreas sustantivas de su responsabilidad.",
    "profesion": "Doctorado en Economía de los Recursos Naturales"
  }, {
    "nombre": "Mario Lubetkin",
    "puesto": "Subdirector General",
    "inicio": "Febrero de 2014",
    "antecedente": "Comenzó su carrera profesional en 1979 en la agencia de noticias Inter Press Service (IPS), en la que ocupó diferentes puestos con crecientes responsabilidades administrativas. Fue Director General de esta agencia entre 2002 y 2014.",
    "profesion": "Periodista"
  }, {
    "nombre": "René Castro Salazar",
    "puesto": "Subdirector General",
    "inicio": "Febrero del 2016",
    "antecedente": "El Sr. Castro Salazar ha ocupado puestos de categoría ministerial en Costa Rica, donde fue Ministro de Recursos Naturales, Ministro de Relaciones Exteriores y Ministro de Medio Ambiente, Energía y Telecomunicaciones entre 1994 y 2014. En febrero de 2016, el Sr. Castro Salazar fue nombrado Subdirector General responsable del Departamento Forestal (FO).",
    "profesion": "Posee un doctorado en diseño con especialización en recursos naturales, políticas y economía del medio ambiente, así como un máster en Administración Pública"
  }, {
    "nombre": "Khalid  Bomba",
    "puesto": "Oficial Jefe de Innovación",
    "inicio": "2018",
    "antecedente": "Director ejecutivo, Agencia de Transformación Agrícola, Etiopía",
    "profesion": "Tiene una licenciatura de Swarthmore College, Estados Unidos, y una maestría en ciencias de la London School of Economics, Reino Unido."
  }, {
    "nombre": "Hak-Fan Lau",
    "puesto": "Director de la oficina de Comunicación",
    "inicio": "15 de enero del 2007",
    "antecedente": "El Sr. Lau ha trabajado para el Departamento de Información Pública de la Sede de la ONU durante más de siete años.  Actualmente es Jefe de la Unidad de Idioma Chino de la Radio de la ONU.  En este puesto, también es el editor del Centro de Noticias de la ONU -un servicio de noticias por Internet- en chino.  El Sr. Lau se incorporó a la Radio de la ONU en 1999 como Jefe en funciones de la Unidad de Asia, supervisando la producción de programas semanales para la región en bangla, chino, inglés, hindi, indonesio y urdu.",
    "profesion": " Jefe de la Unidad de Idioma Chino de la Radio de la ONU."
  }, {
    "nombre": "Maximo Torero Cullen",
    "puesto": "División de Alimentación y Nutrición",
    "inicio": "Enero del 2019",
    "antecedente": "El Sr. Máximo Torero Cullen es el Economista Jefe de la Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). Su trabajo de investigación se centra principalmente en el análisis de la pobreza y la desigualdad, la importancia de la geografía y los activos (privados o públicos) para explicar la pobreza y las políticas orientadas a la mitigación de la pobreza basadas en la función de la infraestructura, las instituciones y la manera en que los avances (o desajustes) tecnológicos pueden ayudar a mejorar el bienestar de los hogares y los pequeños agricultores. Su experiencia abarca América Latina, el África subsahariana y Asia.",
    "profesion": "Economista"
  }]


  constructor() { }

  ngOnInit(): void {
  }

}
