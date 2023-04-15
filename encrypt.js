let text_to = document.getElementById("text_to");
let encrypt_button = document.getElementById("encrypt");
let decrypt_button = document.getElementById("decrypt");
let quitar_contenido = document.getElementById("no_content");
let textencrypt = document.getElementById("textencrypt");
let copybutton = document.getElementById("copybutton");
let vector3 = document.getElementById("vector3");
let text1 = document.getElementById("text1")
let text2 = document.getElementById("text2")


function encrypt(){
    textencrypt.innerHTML = ""
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

    contenido = contenido.replace(/[^\w\s]/gi, ''); // reemplaza caract eres especiales con un espacio vacío
    // "^" representa todos los caracteres que no son \w\s
    // (\w representa letras y números y \s representa espacios en blanco)
    // la opción g hace que la búsqueda sea global para reemplazar todas las instancias en la cadena, mientras que la opción i hace que la búsqueda sea insensible a mayúsculas y minúsculas.

    // El resultado se asigna de vuelta a la propiedad value del textarea para actualizar su contenido.
    // Actualizar el valor del textarea
    text_to.value = contenido;

    //split() convierte la cadena de texto en un array.
    let array_text = text_to.value.split("");

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
    // textencrypt.textContent = cadena
    textencrypt.innerText = cadena
    // textencrypt.innerHTML = cadena;
    comprobar(cadena)
}

function decrypt(){
    textencrypt.innerHTML = ""
    let contenido_decrypt = text_to.value;
    let array_decrypt = contenido_decrypt.split(" ");

    // En vez de for, tambien se pude recorrer el array con la funcion map() y el método forEach():
    // CON MAP: array_decrypt = array_decrypt.map(str => str.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u"));
    // CON FOREACH: array_decrypt.forEach(function(element, index, arr) {arr[index] = element.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");});
    for(let j = 0; j < array_decrypt.length; j++){
        array_decrypt[j] = array_decrypt[j].replace(/ai/g, "a")
        array_decrypt[j] = array_decrypt[j].replace(/enter/g, "e")
        array_decrypt[j] = array_decrypt[j].replace(/imes/g, "i")
        array_decrypt[j] = array_decrypt[j].replace(/ober/g, "o")
        array_decrypt[j] = array_decrypt[j].replace(/ufat/g, "u")
    }

    let cadena_decrypt = array_decrypt.join(" ");
    textencrypt.innerHTML = cadena_decrypt;
    comprobar(cadena_decrypt)
}

function comprobar(cadena){
    if(cadena){
        text1.innerHTML = ""
        text2.innerHTML = ""
        vector3.remove()
        copybutton.style.visibility = "visible";
    }
}

function copiarText(){
    let texto = textencrypt.textContent
    navigator.clipboard.writeText(texto)
}

// Agrega un event listener al objeto window para detectar el cambio de tamaño de la pantalla
window.addEventListener("resize", function() {
    // Si el ancho de la pantalla es menor o igual a 768px, elimina el contenedor
    if (window.innerWidth <= 768) {
      vector3.remove();
    } else {
      // Si el ancho de la pantalla es mayor a 768px y el contenedor no existe en el DOM, agrégalo de nuevo
      if (!document.contains(vector3)) {
        no_content.appendChild(vector3);
      }
    }
});

// Agregar evento input al textarea
text_to.addEventListener('input', () => {
    // Verificar si el valor del textarea está vacío
    if (text_to.value === '') {
      // Si el valor está vacío, limpiar el valor del campo de texto
      textencrypt.innerHTML = '';
      text1.innerHTML = "Ningún mensaje fue encontrado"
      text2.innerHTML = "Ingresa el texto que deseas encriptar o desencriptar."
      quitar_contenido.append(vector3, text1, text2)
      copybutton.style.visibility = "hidden";
    }
  });


encrypt_button.onclick = encrypt;
decrypt_button.onclick = decrypt;
copybutton.onclick = copiarText;

// fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!