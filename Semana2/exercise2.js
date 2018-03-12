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
    if (fecha.value.length == 0 || !/^(\d{2}|\d{4})-\d{2}-\d{2}$/.test(fecha.value)) {
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
        valido = false;
    } else {
        imagen.className = "form-control is-valid";
    }
}
let comprobarCampos = function (event) {

    event.preventDefault();

    // La variable valido indica si todos los campos son correctos. Esta variable puede ser modificada por las
    // funciones de validacion de cada campo
    valido = true;

    // La variable contenedor almacena el nodo donde estaran todos los eventos generados
    let contenedor = document.getElementById("eventsContainer");

    // Validamos los diferentes campos. Al finalizar la variable valido indicara si todos los campos son correctos.
    comprobarNombre(this);
    comprobarFecha(this);
    comprobarDescripcion(this);
    comprobarPrecio(this);
    comprobarImagen(this);


    if (valido) {
        // Compruebo si existe algun <div class="card-deck"> en la estructura
        if (document.querySelectorAll(".card-deck:last-of-type").length == 0) {
            // Creamos el primer card-deck y su hijo card. Este ultimo es enviado a la funcion completarCard para
            // ser rellenado con los campos del formulario
            contenedor.appendChild(document.createElement("div"));
            let nodoCardDeck = contenedor.children[0]
            nodoCardDeck.setAttribute("class", "card-deck");
            nodoCardDeck.appendChild(document.createElement("div"));
            completarCard(nodoCardDeck.children[0]);
        } else {
            // Compruebo si el ultimo card-deck contiene un hijo card, en caso afirmativo creo el 2º hijo y se envia
            // a la funcion completarCard para ser rellenado con los campos del formulario
            if (document.querySelectorAll(".card-deck:last-of-type")[0].childNodes.length == 1) {
                let nodoCardDeck = document.querySelectorAll(".card-deck:last-of-type")[0];
                nodoCardDeck.appendChild(document.createElement("div"));
                completarCard(nodoCardDeck.children[1]);
            } else {
                // El ultimo card-deck esta completo y creamos uno nuevo, junto con su hijo card. Este ultimo es enviado 
                // a la funcion completarCard para ser rellenado con los campos del formulario
                let nodoCardDeck = document.createElement("div")
                nodoCardDeck.setAttribute("class", "card-deck");
                contenedor.appendChild(nodoCardDeck);
                nodoCardDeck.appendChild(document.createElement("div"));
                completarCard(nodoCardDeck.children[0]);
            }
        }
    }
}

// Añadimos lo manejadores de eventos
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

let formulario = document.getElementById("newEvent");
formulario.addEventListener('submit', comprobarCampos);

newEvent.image.addEventListener('change', event => {
    let file = event.target.files[0];
    let reader = new FileReader();
    if (file) reader.readAsDataURL(file);
    reader.addEventListener('load', e => {
        document.getElementById("imgPreview").src = reader.result;
        comprobarImagen(event);
    });
});

// Esta funcion recibe un <div> y lo transforma en un <div class="card"> con su estructura segun se 
// pide en el ejercicio.
let completarCard = function (card) {
    card.setAttribute("class", "card");

    card.appendChild(document.createElement("img"));
    card.children[0].setAttribute("class", "card-img-top");
    card.children[0].setAttribute("src", document.getElementById("imgPreview").getAttribute("src"));

    card.appendChild(document.createElement("div"));
    let cardBody = card.children[1]
    cardBody.setAttribute("class", "card-body");
    cardBody.appendChild(document.createElement("h4"));
    cardBody.children[0].setAttribute("class", "card-title");
    cardBody.children[0].textContent = document.getElementById("name").value;
    cardBody.appendChild(document.createElement("p"));
    cardBody.children[1].setAttribute("class", "card-text");
    cardBody.children[1].textContent = document.getElementById("description").value;

    card.appendChild(document.createElement("div"));
    let cardFooter = card.children[2]
    cardFooter.setAttribute("class", "card-footer");
    cardFooter.appendChild(document.createElement("small"));
    cardFooter.children[0].setAttribute("class", "text-muted");
    cardFooter.children[0].textContent = document.getElementById("date").value;
    cardFooter.children[0].appendChild(document.createElement("span"));
    cardFooter.children[0].children[0].setAttribute("class", "float-right");
    cardFooter.children[0].children[0].value = document.getElementById("price").value;

    borrarCampos()
}

// Esta funcion borra los campos del formulario y resetea los atributos class modificados
function borrarCampos() {

    document.getElementById("name").className = "form-control";
    document.getElementById("name").value = "";

    document.getElementById("date").className = "form-control";
    document.getElementById("date").value = "";

    document.getElementById("description").className = "form-control";
    document.getElementById("description").value = "";

    document.getElementById("price").className = "form-control";
    document.getElementById("price").value = "";

    document.getElementById("image").className = "form-control";
    document.getElementById("imgPreview").setAttribute("src", "");
    document.getElementById("image").type = '';
    document.getElementById("image").type = 'file';
}

