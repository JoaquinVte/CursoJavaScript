"use strict";

// Variable global que almacena los eventos en un vector.
var eventosGlobal = [];
var eventosGlobalAuxiliar;

EventItem.getEvents().then(events => {
    eventosGlobal = events;
    eventosGlobalAuxiliar=eventosGlobal;
    console.log("Hola");
    showEvents(eventosGlobal);
    //console.log(eventosGlobal);
});

// Funcion que muestra los eventos de un array pasados por parametro
function showEvents(eventos) {
    let container = document.getElementById("eventsContainer");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    eventos.forEach(e => {
        if (document.querySelectorAll(".card-deck:last-of-type").length == 0) {
            container.appendChild(document.createElement("div"));
            let nodoCardDeck = container.children[0];
            nodoCardDeck.setAttribute("class", "card-deck");
            nodoCardDeck.appendChild(e.toHTML());
        } else {
            if (document.querySelectorAll(".card-deck:last-of-type")[0].childNodes.length == 1) {
                let nodoCardDeck = document.querySelectorAll(".card-deck:last-of-type")[0];
                nodoCardDeck.appendChild(e.toHTML());
            } else {
                let nodoCardDeck = document.createElement("div");
                nodoCardDeck.setAttribute("class", "card-deck");
                container.appendChild(nodoCardDeck);
                nodoCardDeck.appendChild(e.toHTML());
            }
        }
    });
}

// Ordenar por Precio
let orderByPrice = document.getElementById("orderPrice");
orderByPrice.addEventListener("click", e => {
    eventosGlobalAuxiliar.sort((e1, e2) => e1.price - e2.price);
    showEvents(eventosGlobalAuxiliar);
});

// Ordenar por Fecha
let orderByDate = document.getElementById("orderDate");
orderByDate.addEventListener("click", e => {
    eventosGlobalAuxiliar.sort((e1, e2) => e1.date - e2.date);
    showEvents(eventosGlobalAuxiliar);
});

// Busqueda en el array coincidencias en el nombre,descripcion,fecha o precio
let search = document.getElementById("searchEvent");
search.addEventListener("keyup", e => {
    let reg = new RegExp(document.getElementById("searchEvent").value, "i");
    eventosGlobalAuxiliar = eventosGlobal;
    eventosGlobalAuxiliar=eventosGlobalAuxiliar.filter(ev => reg.test(ev.toString()));
    showEvents(eventosGlobalAuxiliar);
})
