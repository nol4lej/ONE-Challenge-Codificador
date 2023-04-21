let text_input = document.getElementById("input");
let btn_encrypt = document.getElementById("btn_encrypt");
let btn_decrypt = document.getElementById("btn_decrypt");
let worked_text = document.getElementById("worked_text");
let disappear_container = document.getElementById("disappear_container")
let encrypt_container = document.getElementById("encrypt_container");
let aside_container = document.getElementById("aside_container");
let copy_container = document.getElementById("copy_container")
let btn_copy = document.getElementById("btn_copy");

const vocals = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
}

text_input.addEventListener("input", function() {
    // Esta expresión regular eliminará todos los caracteres que no sean letras minúsculas, la letra "ñ", espacios y tabulaciones.
    this.value = this.value.replace(/[^a-zñ\s]/g, '');
    if(this.value === ""){
        worked_text.innerText = "";
        disappear_container.style.display = "flex";
        encrypt_container.style.display = "none"
        copy_container.style.display = "none"
    }
});

function Encrypt(){
    let text_value = text_input.value;
    let text_array = text_value.split("");
    text_array.forEach((element, index) => {
        if(vocals[element]){
            text_array[index] = vocals[element];
        }
    });
    // join() convierte el array en una cadena de texto. Las comillas van vacías para que la cadena de texto sea tal cual el array.
    let encrypt_string = text_array.join("");
    console.log(encrypt_string)
    worked_text.innerText = encrypt_string;
    if(encrypt_string){
        toComplete();
    }
    // toComplete();
}

function Decrypt(){
    let content_value = text_input.value;
    // el espacio entre las comillas del split es fundamental para almacenar individualmente cada palabra en el array, para posteriormente recorrer cada palabra.
    let content_array = content_value.split(" ");

    for(let j = 0; j < content_array.length; j++){
        content_array[j] = content_array[j].replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u")
    }
    content_string = content_array.join(" ")
    worked_text.innerText = content_string;
    if(content_string){
        toComplete()
    }
}

function toComplete(){
    disappear_container.style.display = "none"
    encrypt_container.style.display = "block"
    aside_container.style.justifyContent = "space-evenly"
    copy_container.style.display = "flex"
}

function copyText(){
    let copytext = worked_text.textContent;
    navigator.clipboard.writeText(copytext);
}

btn_encrypt.onclick = Encrypt;
btn_decrypt.onclick = Decrypt;
btn_copy.onclick = copyText;