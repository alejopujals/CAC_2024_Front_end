// ----- Creo la variable miHeader y pegamos el código del HMTL -----
let miHeader = `
<nav class="">
            <a href="./index.html">Noticias</a>
            <a href="./quiénes somos.html" target="_blank">Quiénes somos</a>
            <a href="./deportes.html" target="_blank">Deportes</a>
            <a href="./biblioteca.html" target="_blank">Biblioteca Pública</a>
            <a href="./formulario.html" target="_blank" class="btn-inscripcion" id="logo">Inscribite &#9997;</a>
</nav>
`

//  Selecciono la etiqueta header y con el innerHTML agrego lo definido en la variable miHeader
document.querySelector("header").innerHTML = miHeader