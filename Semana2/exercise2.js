"use strict";

// WRITE ONLY HERE

let comprobarNombre = function (event) {
    let nombre = document.getElementById("name");
    console.log(nombre.value);
    if (nombre.value.length == 0 || !/([a-z]|[A-Z])(\w+)?/.test(nombre.value)) {
        nombre.className = nombre.getAttribute("class") + " is-invalid";
        valido = false;
    } else {
        nombre.className = nombre.getAttribute("class") + " is-valid";
    }
}

let comprobarFecha = function (event) {
    let fecha = document.getElementById("date");
    if (fecha.value.length == 0 || !/^(\d{2}|\d{4})\/\d{2}\/\d{2}$/.test(fecha.value)) {
        fecha.className = fecha.getAttribute("class") + " is-invalid";
        valido = false;
    } else {
        fecha.className = fecha.getAttribute("class") + " is-valid";
    }
}

let comprobarDescripcion = function (event) {
    let descripcion = document.getElementById("description");
    if (descripcion.value.length == 0 || !/([a-z]|[A-Z])(\w+)?/.test(descripcion.value)) {
        descripcion.className = descripcion.getAttribute("class") + " is-invalid";
        valido = false;
    } else {
        descripcion.className = descripcion.getAttribute("class") + " is-valid";
    }
}

let comprobarPrecio = function (event) {
    let precio = document.getElementById("price");
    if (precio.value.length == 0 || !/10000(.[0]{1,2})|[0-9]{4}(.[0-9]{1,2})?/.test(precio.value)) {
        precio.className = precio.getAttribute("class") + " is-invalid";
        valido = false;
    } else {
        precio.className = precio.getAttribute("class") + " is-valid";
    }
}
let comprobarCampos = function (event) {


    // <!-- <div class="card-deck mb-2">
    //     <div class="card">
    //       <img class="card-img-top" src="image_base64">
    //       <div class="card-body">
    //         <h4 class="card-title">Nombre del evento</h4>
    //         <p class="card-text">Descripción.</p>
    //       </div>
    //       <div class="card-footer">
    //         <small class="text-muted">
    // 		        dd/mm/yyyy
    // 		        <span class="float-right">Precio €</span>
    //           </small>
    //       </div>
    //     </div>
    //   </div> -->
    if (valido) {
        let newCard = document.createElement("div").setAttribute("class", "card");
        newCard.appendChild(document.createElement("img").setAttribute("class", "card-img-top").setAttribute("src", "image_base64"));
        newCard.appendChild(document.createElement("div").setAttribute("class", "card-body"));
        newCard.appendChild(document.createElement("div").setAttribute("class", "card-footer"));
        let elemento = newCard.childNodes[1];
        elemento.appendChild(document.createElement("h4").setAttribute("class", "card-title"));
        elemento.childNodes[0].innerText = nombre.value;
        elemento.appendChild(document.createElement("p").setAttribute("class", "card-text"));
        elemento.childNodes[1].innerText = descripcion.value;
        elemento = newCard.nextSibling;

    }

}

let inputName = document.getElementById("name");
inputName.addEventListener('change', comprobarNombre);

let inputFecha = document.getElementById("date");
inputFecha.addEventListener('change', comprobarFecha);

let inputDescripcion = document.getElementById("description");
inputDescripcion.addEventListener('change', comprobarDescripcion);

let inputPrecio = document.getElementById("price");
inputPrecio.addEventListener('change', comprobarPrecio);

let button_primary = document.getElementsByTagName("button")[0];
button_primary.addEventListener('click', comprobarCampos);

newEvent.image.addEventListener('change', event => {
    let file = event.target.files[0];
    let reader = new FileReader();
    if (file) reader.readAsDataURL(file);
    reader.addEventListener('load', e => {
        document.getElementById("imgPreview").src = reader.result;
    });
});


