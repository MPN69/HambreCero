// $(document).ready(function(){
//     //post
//     if(window.location.href.indexOf("index")>-1){
//       var posts=[
//         {
//           title:"Chichen-Itza",
//           date: "Publicado el dia "+ moment().format("DD")+ " de "+ moment().format("MMMM")+ " del "+moment().format("YYYY"),
//           content:"La legendaria ciudad maya de Chichén Itzá, Patrimonio de la Humanidad declarada por la UNESCO desde 1988 y Maravilla del Mundo desde 2007, sobresalió como centro cultural y político de la vieja civilización maya y fue uno de los asentamientos más extensos del centro-norte de la península de Yucatán. En su época de mayor esplendor, fue la ciudad más poderosa de la península de Yucatán. Los Itzáes se establecieron en Chichén Itzá en el siglo IX d.C. Se cree que eran mayas putunes o chontales. Forjaron un amplio dominio con una cultura unificada cuyo centro era Chichén ltzá. Hacia fines del siglo X, la ciudad fue invadida por una tribu predominantemente guerrera: los toltecas. Esta última invasión trajo consigo una nueva serie de elementos culturales, sobresaliendo la representación del dios-serpiente Kukulkán. Hacia 1250 d.C., la ciudad fue abandonada por razones no del todo determinadas. Tan grande fue el poderío de esta ciudad que siglos después de su decadencia aún era sitio de peregrinación y adoración, e incluso hacia el año 1540 d.C. Francisco de Montejo, fundador de Mérida, pensó levantar la capital allí."
//         }         
//       ];
//       console.log(posts);
//       //recorrer el JSON para enviar al index
//       posts.forEach((item)=>{
//         var post = ` <article class="post">
//         <h2>${item.title}</h2>
//         <span class="date">${item.date}</span>
//         <p>
//         ${item.content}
//         </p>
//         <a href="https://www.yucatan.gob.mx/?p=chichen_itza" class="button-more">Articulo Completo</a>
//     </article>`;

//     $("#posts").append(post);

//       });
//     };
    
//     if(window.location.href.indexOf("index")>-1){
//       var postes=[
//         {
//           title:"Cancún",
//           date: "Publicado el dia "+ moment().format("DD")+ " de "+ moment().format("MMMM")+ " del "+moment().format("YYYY"),
//           content:"The tourist destination that everyone talks about. Its beautiful scenery framed by white sand beaches and turquoise sea; its extension and biodiversity in its reefs, lagoons, cenotes and forest; its ancestral Mayan culture wealth; its great air and ground transportation connectivity and; its highest level hotel infrastructure have positioned Cancún, Quintana Roo, as the most awarded Mexican tourist destination in the world and as a leader city in Latin America. Cancún was the first tourist development of the Fondo Nacional de Turismo (FONATUR in its Spanish acronym). After its opening in the early seventies, travelers from all latitudes immediately arrived to explore its 23 kilometer coastline and to enjoy the quality of its hotels (35 thousand rooms) that still set the highest hospitality standards for the rest of the world."
//         }         
//       ];
//       console.log(postes);
//       //recorrer el JSON para enviar al index
//       postes.forEach((item)=>{
//         var post = ` <article class="post">
//         <h2>${item.title}</h2>
//         <span class="date">${item.date}</span>
//         <p>
//         ${item.content}
//         </p>
//         <a href="https://www.visitmexico.com/en/quintana-roo/cancun" class="button-more">Articulo Completo</a>
//     </article>`;

//     $("#postes").append(post);

//       });
//     };
//   });