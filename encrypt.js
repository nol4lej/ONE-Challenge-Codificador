let text_to = document.getElementById("text_to")
let encrypt_button = document.getElementById("encrypt")

function encrypt(){
    let contenido = text_to.value;
    contenido = contenido.toLowerCase();

    // Reemplazar letras con acentos y caracteres especiales
    // La expresión regular /[áàäâ]/g reemplaza todas las instancias de las letras "á", "à", "ä" y "â".
    // La "g" al final de la expresión regular significa que se buscarán todas las coincidencias y se reemplazarán todas ellas.
    contenido = contenido.replace(/[áàäâ]/g, "");
    contenido = contenido.replace(/[éèëê]/g, "");
    contenido = contenido.replace(/[íìïî]/g, "");
    contenido = contenido.replace(/[óòöô]/g, "");
    contenido = contenido.replace(/[úùüû]/g, "");
    // La expresión regular /[^a-z0-9\n]/g reemplaza cualquier carácter que no sea una letra minúscula, un número o un salto de línea por una cadena vacía. El "^" dentro de los corchetes significa "no", por lo que la expresión regular buscará cualquier carácter que no sea una letra minúscula, un número o un salto de línea.
    contenido = contenido.replace(/[^a-z0-9\n]/g, "");

    // Actualizar el valor del textarea
    text_to.value = contenido;
    console.log(text_to.value)

}