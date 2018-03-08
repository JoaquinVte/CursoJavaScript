"use strict";

// WRITE ONLY HERE

let comprobarCampos = function(event){
    let reg = /\w/
    // if (reg.test(document.getElementById("nombre").textContent)) {
    //     console.log("texto");
    // }
    let nombre = document.getElementById("name").textContent;
    if ( nombre.length == 0 || reg.test(nombre)) {
        console.log("Valor no valido");
    } else {
        console.log(nombre);
    }
    console.log("boton presionado");
}

let button_primary = document.getElementsByTagName("button")[0];
button_primary.addEventListener('click',comprobarCampos);




