// ----- Creo la variable miFooter y pegamos el código del HMTL -----
let miFooter = `
<nav>
        <a href="">Preguntas frecuentes <i class="fa-solid fa-question"></i></a>
        <a href="mailto:someone@example.com"">Escribinos <i class="fa-regular fa-envelope"></i></a>
        <a href="">Llamanos <i class="fa-solid fa-phone"></i></a>
        <a href="https://www.facebook.com/AmigosDeVillaLuro/?locale=es_LA" target="_blank"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://www.instagram.com/asocamigosdevillaluro/?hl=es" target="_blank"><i class="fa-brands fa-instagram"></i></a>
</nav>
`

//  Selecciono la etiqueta footer y con el innerHTML agrego lo definido en la variable miFooter
document.querySelector("footer").innerHTML = miFooter
