import catalogo from "./peliculas_series.js";

const contenedor = document.getElementById("main")

let htmlARender = ``;

catalogo.peliculas_series.forEach((ps) => {
    htmlARender += `<div class="seccion">
    <img class = "seccion__imagen" src=${ps.img} width="210" height="300">
    <ul class="seccion__ul">
        <li>Pelicula: ${ps.titulo}</li>
        <li>Estrellas: ${ps.estrellas}</li>
        <li>Director: ${ps.director}</li>
        <li>Publico: ${ps.publico}</li>
        <li>Trama: ${ps.trama}</li>
    </ul>
</div>`
})

contenedor.innerHTML = htmlARender