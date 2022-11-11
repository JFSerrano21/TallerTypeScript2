import { Serie } from './serie.js';

import { series } from './dataSeries.js';
const peliculasTbody: HTMLElement = document.getElementById('peliculas')!; 

function hacerTablePeliculas(series: Serie[]): void {
    series.forEach(s => {
    let trElement = document.createElement("tr");
    trElement.setAttribute("id","columnasTabla")
    trElement.innerHTML = `<td">${s.id}</td>
                           <td id=${s.id} style="color: #2f3cec">${s.titulo}</td>
                           <td>${s.canal}</td>
                           <td>${s.temporadas}</td>`;
                                       
    peliculasTbody.appendChild(trElement);
    // Le metemos los action listeners al la serie completa en el html para cargar su informacion
    const seriehtml: HTMLElement = document.getElementById(`${s.id}`)!;
    seriehtml.addEventListener("click", function(){ informacionSerie(s);});
  });
}


function promedioTemporadaSeries(series: Serie[]): void {
    var total: number = 0;
    const parrafo: HTMLElement = document.getElementById('col1')!;

    series.forEach(s => {
        total = total + s.temporadas
    })

    var promedio:number = total/series.length;
    let pElement= document.createElement("p")
    pElement.innerHTML =`Cantidad de temporadas promedio: ${promedio}`;

    parrafo.appendChild(pElement);
}
 

function informacionSerie(serie: Serie): void {
    const titulo: HTMLElement = document.getElementById('tituloSerie')!; 
    const descripcion: HTMLElement = document.getElementById('descripcionSerie')!; 
    const link: HTMLElement = document.getElementById('linkSerie')!; 
    const info: HTMLElement = document.getElementById('informacion')!;
    const imagen: HTMLElement = document.getElementById('imagen')!; 

    imagen.setAttribute("src",serie.media);
    titulo.innerHTML=serie.titulo;
    descripcion.innerHTML = serie.resumen;
    link.innerText=serie.link;
    link.setAttribute("href",serie.link);
    info.style.visibility= "visible"; 
}

// lo que se corre siempre
hacerTablePeliculas(series);
promedioTemporadaSeries(series);

