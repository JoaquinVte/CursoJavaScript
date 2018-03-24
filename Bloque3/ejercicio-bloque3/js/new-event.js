'use strict';

let valido;

//Nombre → Requerido (sólo puede contener letras y espacios y empezar por letra)
let comprobarNombre = function (event) {
    let nombre;
    nombre = document.getElementById("name");
    if (nombre.value.length == 0 || /^[^a-z]|[^a-z\s]/i.test(nombre.value)) {
        nombre.classList.remove("is-valid");
        nombre.classList.add("is-invalid");
        valido = false;
    } else {
        nombre.classList.remove("is-invalid");
        nombre.classList.add("is-valid");
    }
}
// Fecha → Requerida (formato: YYYY-mm-dd)
let comprobarFecha = function (event) {
    let fecha = document.getElementById("date");
    if (fecha.value.length == 0 || !/^\d{4}-\d{2}-\d{2}$/.test(fecha.value)) {
        fecha.classList.remove("is-valid");
        fecha.classList.add("is-invalid");
        valido = false;
    } else {
        fecha.classList.remove("is-invalid");
        fecha.classList.add("is-valid");
    }
}
// Descripción → Requerida (contener al menos un carácter que no sea espacio)
let comprobarDescripcion = function (event) {
    let descripcion = document.getElementById("description");
    if (descripcion.value.length == 0 || !/^[^\s]/.test(descripcion.value)) {
        descripcion.classList.remove("is-valid");
        descripcion.classList.add("is-invalid");
        valido = false;
    } else {
        descripcion.classList.remove("is-invalid");
        descripcion.classList.add("is-valid");
    }
}
// Precio → Requerido (Número entero o con 2 decimales)
let comprobarPrecio = function (event) {
    let precio = document.getElementById("price");
    if (precio.value.length == 0 || !/^\d+(,[0-9]{1,2})?$/.test(precio.value)) {
        precio.classList.remove("is-valid");
        precio.classList.add("is-invalid");
        valido = false;
    } else {
        precio.classList.remove("is-invalid");
        precio.classList.add("is-valid");
    }
}
let comprobarImagen = function (event) {
    let imagen = document.getElementById("image");
    let imagenPreview = document.getElementById("imgPreview");
    if (imagenPreview.getAttribute("src") == "") {
        imagen.classList.remove("is-valid");
        imagen.classList.add("is-invalid");
        valido = false;
    } else {
        imagen.classList.remove("is-invalid");
        imagen.classList.add("is-valid");
    }
}

// Funcion encargada de añadir un nuevo evento si corresponde
let añadirEvento = function (event) {

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
        // Si el formulario es valido se crea un nuevo EventItem
        var nuevoEvento = new EventItem({
            name: document.getElementById("name").value,
            date: document.getElementById("date").value,
            description: document.getElementById("description").value,
            image: document.getElementById("imgPreview").src,
            price: document.getElementById("price").value,
        });

        // Se envia dicho evento al servidor
        nuevoEvento.post().then(evento => {
            borrarCampos();
            eventosGlobal.push(evento);
        });
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
inputPrecio.addEventListener('blur', comprobarImagen);

let formulario = document.getElementById("newEvent");
formulario.addEventListener('submit', añadirEvento);

newEvent.image.addEventListener('change', event => {
    let file = event.target.files[0];
    let reader = new FileReader();
    if (file) reader.readAsDataURL(file);
    reader.addEventListener('load', e => {
        document.getElementById("imgPreview").src = reader.result;
        comprobarImagen(event);
    });
});


// Esta funcion borra los campos del formulario y resetea los atributos class modificados
function borrarCampos() {

    let inputsElements = document.querySelectorAll(".form-control");
    inputsElements.forEach(function (elemento) {
        elemento.classList.remove("is-valid");
        elemento.value = "";
    });
    document.querySelectorAll(".img-thumbnail")[0].setAttribute("src", "");
    document.querySelectorAll("#image")[0].type = '';
    document.querySelectorAll("#image")[0].type = 'file';
}