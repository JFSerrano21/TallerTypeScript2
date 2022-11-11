import { series } from './dataSeries.js';
var peliculasTbody = document.getElementById('peliculas');
function hacerTablePeliculas(series) {
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.setAttribute("id", "columnasTabla");
        trElement.innerHTML = "<td\">".concat(s.id, "</td>\n                           <td id=").concat(s.id, " style=\"color: #2f3cec\">").concat(s.titulo, "</td>\n                           <td>").concat(s.canal, "</td>\n                           <td>").concat(s.temporadas, "</td>");
        peliculasTbody.appendChild(trElement);
        // Le metemos los action listeners al la serie completa en el html para cargar su informacion
        var seriehtml = document.getElementById("".concat(s.id));
        seriehtml.addEventListener("click", function () { informacionSerie(s); });
    });
}
function promedioTemporadaSeries(series) {
    var total = 0;
    var parrafo = document.getElementById('col1');
    series.forEach(function (s) {
        total = total + s.temporadas;
    });
    var promedio = total / series.length;
    var pElement = document.createElement("p");
    pElement.innerHTML = "Cantidad de temporadas promedio: ".concat(promedio);
    parrafo.appendChild(pElement);
}
function informacionSerie(serie) {
    var titulo = document.getElementById('tituloSerie');
    var descripcion = document.getElementById('descripcionSerie');
    var link = document.getElementById('linkSerie');
    var info = document.getElementById('informacion');
    var imagen = document.getElementById('imagen');
    imagen.setAttribute("src", serie.media);
    titulo.innerHTML = serie.titulo;
    descripcion.innerHTML = serie.resumen;
    link.innerText = serie.link;
    link.setAttribute("href", serie.link);
    info.style.visibility = "visible";
}
// lo que se corre siempre
hacerTablePeliculas(series);
promedioTemporadaSeries(series);
