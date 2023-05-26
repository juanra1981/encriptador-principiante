function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let munheco = document.getElementById("munheco");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

 if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    munheco.src = "./imagenes/encriptado.jpg";
 } else {
    munheco.src = "./imagenes/munheco.png";
    tituloMensaje.getContext = "Ningun mensaje encontrado";
    parrafo.getContext = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
 }                     
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let munheco = document.getElementById("munheco");

    let textoCifrado = texto
     .replace(/enter/gi, "e")
     .replace(/imes/gi, "i")
     .replace(/ai/gi, "a")
     .replace(/ober/gi, "o")
     .replace(/ufat/gi, "u");

     if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        munheco.src = "./imagenes/desencriptado.jpg";
     } else{
        munheco.src = "./imagenes/munheco.png";
        tituloMensaje.getContext = "Ningun mensaje encontrado";
        parrafo.getContext = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
     } 
}
