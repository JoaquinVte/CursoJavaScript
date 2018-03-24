"use strict";

class EventItem {
    constructor(evento) {
        this.id = evento.id;
        this.name = evento.name;
        this.date = new Date(evento.date);
        this.description = evento.description;
        this.image = evento.image;
        this.price = new Number(evento.price);
    }
    static getEvents() {
        return Http.ajax('GET', `${SERVER}/exercise3/events`).then(data => {
            if (data.ok) {
                data.events.forEach(e => {
                    eventos.push(new EventItem(e));
                });
            }
        }).catch(error => console.error(error));
    }
    post() {
        return Http.ajax('POST', `${SERVER}/exercise3/events`, this).then((response) => {
            if (reponse.ok) {
                eventos.push(new EventItem(response.event));
            } else {
                console.log(response.error);
            }
        });
    }

    delete() {
        return Http.ajax('DELETE', `${SERVER}/exercise3/events/${this.id}`).then((response) => {
            if (response.ok) {
                console.log("Elemento eliminado");
            } else {
                console.log(response.error);
            }
        });
    }

    toHTML() {
        let card = document.createElement("div");
        card.classList.add("card");
        // Añadir el resto de la estructura
        //     <!-- <div class="card-deck mb-4">
        //     <div class="card">
        //       <img class="card-img-top" src="image_base64">
        //       <div class="card-body">
        //         <h4 class="card-title">Event’s name
        //           <button class="btn btn-danger float-right">Delete</button>
        //         </h4>
        //         <p class="card-text">This is the description.</p>
        //       </div>
        //       <div class="card-footer">
        //         <small class="text-muted">
        // 		        dd/mm/yyyy
        // 		        <span class="float-right">Price€</span>
        //           </small>
        //       </div>
        //     </div>
        //   </div> -->
        let cardImgTopElement = document.createElement("img");
        cardImgTopElement.classList.add("card-img-top");
        cardImgTopElement.setAttribute("src", this.image);
        card.appendChild(cardImgTopElement);

        let cardBodyElement = document.createElement("div");
        cardBodyElement.classList.add("card-body");
        let cardBodyHElement = document.createElement("h4");
        cardBodyHElement.classList.add("card-title");
        cardBodyHElement.textContent = this.name;
        let cardBodyButtonElement = document.createElement("button");
        cardBodyButtonElement.classList.add("btn");
        cardBodyButtonElement.classList.add("btn-danger");
        cardBodyButtonElement.classList.add("float-right");
        cardBodyButtonElement.textContent = "Delete";

        let cardBodyPElement = document.createElement("p");
        cardBodyPElement.classList.add("card-text");
        cardBodyPElement.textContent = this.description;

        cardBodyHElement.appendChild(cardBodyButtonElement);
        cardBodyElement.appendChild(cardBodyHElement);
        cardBodyElement.appendChild(cardBodyPElement);
        card.appendChild(cardBodyElement);

        let cardFooterElement = document.createElement("div");
        cardFooterElement.classList.add("card-footer");

        let cardFooterSmall = document.createElement("small");
        cardFooterSmall.classList.add(text - muted);
        cardFooterSmall.textContent = this.date.toLocaleDateString();

        let cardFooterSmallSpan = document.createElement("span");
        cardFooterSmallSpan.classList.add("float-right");
        cardFooterSmallSpan.textContent = this.price + " €";

        cardFooterSmall.appendChild(cardFooterSmallSpan);
        cardFooterElement.appendChild(cardFooterSmall);
        card.appendChild(cardFooterElement);

        return card;
    }
}