// ----- Creo la variable miHeader y pegamos el código del HMTL -----
let miHeader = `
<nav class="">
            <a href="./index.html">Noticias</a>
            <a href="./quiénes somos.html">Quiénes somos</a>
            <a href="./deportes.html">Deportes</a>
            <a href="./biblioteca.html">Biblioteca Pública</a>
            <a href="./formulario.html" target="_blank" class="btn-inscripcion" id="logo">Inscribite &#9997;</a>
</nav>
`

//  Selecciono la etiqueta header y con el innerHTML agrego lo definido en la variable miHeader
document.querySelector("header").innerHTML = miHeader