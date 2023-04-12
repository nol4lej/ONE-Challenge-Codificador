let text_to = document.getElementById("text_to");
let encrypt_button = document.getElementById("encrypt");
let decrypt_button = document.getElementById("decrypt");
let textencrypt = document.getElementById("textencrypt");
let textdecrypt = document.getElementById("textdecrypt");

function encrypt(){
    let array_text;
    let contenido = text_to.value;
    contenido = contenido.toLowerCase();

    // Reemplazar letras con acentos y caracteres especiales
    // La expresión regular /[áàäâ]/g reemplaza todas las instancias de las letras "á", "à", "ä" y "â".
    // La "g" al final de la expresión regular significa que se buscarán todas las coincidencias y se reemplazarán todas ellas.
    contenido = contenido.replace(/[áàäâ]/g, "a");
    contenido = contenido.replace(/[éèëê]/g, "e");
    contenido = contenido.replace(/[íìïî]/g, "i");
    contenido = contenido.replace(/[óòöô]/g, "o");
    contenido = contenido.replace(/[úùüû]/g, "u");

    contenido = contenido.replace(/[^\w\s]/gi, ''); // reemplaza caracteres especiales con un espacio vacío
    // "^" representa todos los caracteres que no son \w\s
    // (\w representa letras y números y \s representa espacios en blanco)
    // la opción g hace que la búsqueda sea global para reemplazar todas las instancias en la cadena, mientras que la opción i hace que la búsqueda sea insensible a mayúsculas y minúsculas.

    // El resultado se asigna de vuelta a la propiedad value del textarea para actualizar su contenido.
    // Actualizar el valor del textarea
    text_to.value = contenido;

    //split() convierte la cadena de texto en un array.
    array_text = text_to.value.split("");

    for(let i = 0; i < array_text.length; i++){
        switch(array_text[i]){
            case "a":
                array_text[i] = "ai"
                break;
            case "e":
                array_text[i] = "enter"
                break;
            case "i":
                array_text[i] = "imes"
                break;
            case "o":
                array_text[i] = "ober"
                break;
            case "u":
                array_text[i] = "ufat"
                break;
            default:
                continue;
        }
    }
    // join() convierte el array en una cadena de texto. Las comillas van vacías para que la cadena de texto sea tal cual el array. 
    let cadena = array_text.join("");
    textencrypt.innerHTML = cadena;
    console.log(cadena)

}

function decrypt(){
    let contenido_decrypt = text_to.value;
    let array_decrypt = contenido_decrypt.split(" ");

    for(let j = 0; j < array_decrypt.length; j++){
        array_decrypt[j] = array_decrypt[j].replace(/ai/g, "a")
        array_decrypt[j] = array_decrypt[j].replace(/enter/g, "e")
        array_decrypt[j] = array_decrypt[j].replace(/imes/g, "i")
        array_decrypt[j] = array_decrypt[j].replace(/ober/g, "o")
        array_decrypt[j] = array_decrypt[j].replace(/ufat/g, "u")
    }

    let cadena_decrypt = array_decrypt.join(" ");
    textdecrypt.innerHTML = cadena_decrypt;
    console.log(cadena_decrypt)
}


encrypt_button.onclick = encrypt;
decrypt_button.onclick = decrypt;

// fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!