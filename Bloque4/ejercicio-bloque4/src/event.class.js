"use strict";

import { SERVER } from './constants.js';
import { IMG } from './constants.js';
import { Http } from './http.class.js';
import  EventTemplate from '../templates/event.handlebars'; 

export class EventItem {
    constructor(evento) {
        this.id = evento.id;
        this.name = evento.name;
        this.date = new Date(evento.date);
        this.description = evento.description;
        this.image = IMG + '/' + evento.image;
        this.price = new Number(evento.price);
    }
    static getEvents() {
        return Http.ajax('GET', `${SERVER}/events`).then(data => {
            let respuestaEventos = [];
            if (data.ok) {
                data.events.forEach(e => {
                    respuestaEventos.push(new EventItem(e));
                });
            }
            return (respuestaEventos);
        }).catch(error => console.error(error));
    }
    post() {
        return Http.ajax('POST', `${SERVER}/events`, this).then((response) => {
            if (response.ok) {
                return (new EventItem(response.event));
            } else {
                throw response.error;
            }
        });
    }

    delete() {
        return Http.ajax('DELETE', `${SERVER}/events/${this.id}`).then((response) => {
            if (response.ok) {
                return true;
            } else {
                return response.error;
            }
        });
    }

    toHTML() {

        let card = document.createElement("div");
        card.classList.add("card");

        let evento_HTML = EventTemplate({
            "id": this.id,
            "name": this.name,
            "date": this.date.toLocaleDateString(),
            "description": this.description,
            "image": this.image,
            "price": this.price
        });

        card.innerHTML = evento_HTML;

        // let cardImgTopElement = document.createElement("img");
        // cardImgTopElement.classList.add("card-img-top");
        // cardImgTopElement.setAttribute("src", this.image);
        // card.appendChild(cardImgTopElement);

        // let cardBodyElement = document.createElement("div");
        // cardBodyElement.classList.add("card-body");
        // let cardBodyHElement = document.createElement("h4");
        // cardBodyHElement.classList.add("card-title");
        // cardBodyHElement.textContent = this.name;
        // let cardBodyButtonElement = document.createElement("button");
        // cardBodyButtonElement.classList.add("btn");
        // cardBodyButtonElement.classList.add("btn-danger");
        // cardBodyButtonElement.classList.add("float-right");
        // cardBodyButtonElement.textContent = "Delete";

        // // cardBodyButtonElement.addEventListener('click', event => {
        // //     var r = confirm("Seguro que quiere eliminar el evento " + this.name + "?.");
        // //     if (r == true) {
        // //         this.delete().then(response => {
        // //             eventosGlobal.splice(eventosGlobal.findIndex(e => e.id==this.id),1);
        // //             showEvents(eventosGlobal);
        // //             alert(response);
        // //         });
        // //     }
        // // });

        // let cardBodyPElement = document.createElement("p");
        // cardBodyPElement.classList.add("card-text");
        // cardBodyPElement.textContent = this.description;

        // cardBodyHElement.appendChild(cardBodyButtonElement);
        // cardBodyElement.appendChild(cardBodyHElement);
        // cardBodyElement.appendChild(cardBodyPElement);
        // card.appendChild(cardBodyElement);

        // let cardFooterElement = document.createElement("div");
        // cardFooterElement.classList.add("card-footer");

        // let cardFooterSmall = document.createElement("small");
        // cardFooterSmall.classList.add("text-muted");
        // cardFooterSmall.textContent = this.date.toLocaleDateString();

        // let cardFooterSmallSpan = document.createElement("span");
        // cardFooterSmallSpan.classList.add("float-right");
        // cardFooterSmallSpan.textContent = this.price + " €";

        // cardFooterSmall.appendChild(cardFooterSmallSpan);
        // cardFooterElement.appendChild(cardFooterSmall);
        // card.appendChild(cardFooterElement);

        return card;
    }

    toString() {
        return this.name +
            this.date +
            this.description +
            this.price;
    }
}