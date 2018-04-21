"use strict";

import { EventItem } from './event.class.js';
import { Http } from './http.class.js';
import styles from '../exercise3.css';

// Variable global que almacena los eventos en un vector.
var eventosGlobal = [];
var eventosGlobalAuxiliar;

EventItem.getEvents().then(events => {
    eventosGlobal = events;
    eventosGlobalAuxiliar = eventosGlobal;
    showEvents(eventosGlobal);
    //console.log(eventosGlobal);
});

// Funcion que muestra los eventos de un array pasados por parametro
function showEvents(eventos) {
    let container = document.getElementById("eventsContainer");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    // Modificado el codigo respecto del codigo del ejercicio 3 debido a problemas con 
    // con el vector global. Este debe ser utilizado solo en el fichero index.js para evitar
    // importaciones cruzadas
    
    let deck;
    eventos.forEach((event, i) => {
        if(i % 2 === 0) {
            deck = document.createElement("div");
            deck.classList.add("card-deck");
            deck.classList.add("mb-4");
            document.getElementById("eventsContainer").appendChild(deck);
        }
        
        let eventCard = event.toHTML();
        eventCard.querySelector('.card-title .btn').addEventListener("click", e => {
            let del = confirm("Are you sure you want delete this event?");
            if(del) {
                event.delete().then(() => {
                    eventosGlobal.splice(eventosGlobal.indexOf(event), 1);
                    showEvents(eventosGlobal);
                });
            }  
        });
        deck.appendChild(eventCard);
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
    eventosGlobalAuxiliar = eventosGlobalAuxiliar.filter(ev => reg.test(ev.toString()));
    showEvents(eventosGlobalAuxiliar);
})
