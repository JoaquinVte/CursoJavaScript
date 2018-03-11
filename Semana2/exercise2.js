"use strict";

// WRITE ONLY HERE
let valido;

let comprobarNombre = function (event) {
    let nombre;
    nombre = document.getElementById("name");
    if (nombre.value.length == 0 || !/([a-z]|[A-Z])(\w+)?/.test(nombre.value)) {
        nombre.className = "form-control is-invalid";
        valido = false;
    } else {
        nombre.className = "form-control is-valid";
    }
}
let comprobarFecha = function (event) {
    let fecha = document.getElementById("date");
    if (fecha.value.length == 0 || !/^(\d{2}|\d{4})\/\d{2}\/\d{2}$/.test(fecha.value)) {
        fecha.className = fecha.getAttribute("class") + " is-invalid";
        valido = false;
    } else {
        fecha.className = "form-control is-valid";
    }
}
let comprobarDescripcion = function (event) {
    let descripcion = document.getElementById("description");
    if (descripcion.value.length == 0 || !/([a-z]|[A-Z])(\w+)?/.test(descripcion.value)) {
        descripcion.className = "form-control is-invalid";
        valido = false;
    } else {
        descripcion.className = "form-control is-valid";
    }
}
let comprobarPrecio = function (event) {
    let precio = document.getElementById("price");
    if (precio.value.length == 0 || !/10000(.[0]{1,2})|[0-9]{4}(.[0-9]{1,2})?/.test(precio.value)) {
        precio.className = "form-control is-invalid";
        valido = false;
    } else {
        precio.className = "form-control is-valid";
    }
}
let comprobarImagen = function (event) {
    let imagen = document.getElementById("image");
    let imagenPreview = document.getElementById("imgPreview");
    if (imagenPreview.getAttribute("src") == "") {
        imagen.className = "form-control is-invalid";
    } else {
        imagen.className = "form-control is-valid";
    }
}

let comprobarCampos = function (event) {
    valido = true;
    let contenedor = document.getElementById("eventsContainer");

    comprobarNombre(this);
    comprobarFecha(this);
    comprobarDescripcion(this);
    comprobarPrecio(this);
    comprobarImagen(this);

    if (valido) {
        console.log(document.querySelectorAll(".card-deck:last-of-type").length);
        console.log(document.querySelectorAll(".card-deck:last-of-type").children);
        console.log("-------------------------");
        if (document.querySelectorAll(".card-deck:last-of-type").length == 0) {
            contenedor.appendChild(document.createElement("div"));
            let nodoCardDeck = contenedor.children[0]
            nodoCardDeck.setAttribute("class", "card-deck");
            nodoCardDeck.appendChild(document.createElement("div"));
            crearCard(nodoCardDeck.children[0]);
        } else {
            if (document.querySelectorAll(".card-deck:last-of-type")[0].childNodes.length == 1) {
                let nodoCardDeck = document.querySelectorAll(".card-deck:last-of-type")[0];
                nodoCardDeck.appendChild(document.createElement("div"));
                crearCard(nodoCardDeck.children[1]);
            } else {
                let nodoCardDeck = document.createElement("div")
                nodoCardDeck.setAttribute("class", "card-deck");
                contenedor.appendChild(nodoCardDeck);
                nodoCardDeck.appendChild(document.createElement("div"));
                crearCard(nodoCardDeck.children[0]);
            }

        }
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

let inputImagen = document.getElementById("image");
inputPrecio.addEventListener('change', comprobarImagen);

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

let crearCard = function (card) {
    card.setAttribute("class", "card");

    card.appendChild(document.createElement("img"));
    card.children[0].setAttribute("class", "card-img-top");
    // card.children[0].setAttribute("src", document.getElementById("imgPreview").src);

    card.appendChild(document.createElement("div"));
    let cardBody = card.children[1]
    cardBody.setAttribute("class", "card-body");
    cardBody.appendChild(document.createElement("h4"));
    cardBody.children[0].setAttribute("class", "card-title");
    cardBody.children[0].textContent = document.getElementById("name").value;
    cardBody.appendChild(document.createElement("p"));
    cardBody.children[1].setAttribute("class", "card-text");
    // cardBody.children[1].textContent = document.getElementById("description").value;

    card.appendChild(document.createElement("div"));
    let cardFooter = card.children[2]
    cardFooter.setAttribute("class", "card-footer");
    cardFooter.appendChild(document.createElement("small"));
    cardFooter.children[0].setAttribute("class", "text-muted");
    // cardFooter.children[0].value = document.getElementById("date").value;
    cardFooter.children[0].appendChild(document.createElement("span"));
    cardFooter.children[0].children[0].setAttribute("class", "float-right");
    // cardFooter.children[0].children[0].value = document.getElementById("price").value;
}

