// ----- Creo la variable miHeader y pegamos el código del HMTL -----
let miHeader = `
<nav class="header">
            <a href="./index.html">Noticias</a>
            <a href="./quiénes somos.html">Quiénes somos</a>
            <a href="./deportes.html">Deportes</a>
            <a href="./formulario.html" target="_blank" class="btn-inscripcion" id="logo"><span id="texto_btn_inscripcion">Inscribite </span>&#9997;</a>
</nav>
`

//  Selecciono la etiqueta header y con el innerHTML agrego lo definido en la variable miHeader
document.querySelector("header").innerHTML = miHeader