import {SERVER, IMG_URL} from './constants';
import {Http} from './http.class';

// import eventTemplate from '../templates/event.handlebars';
declare function require(module: string): any; // Ahora podemos usar require
let template = require('../templates/event.handlebars');

export interface IEvent {
    id?: number, // Opcional, hasta que no se inserta, no existe
    name: string,
    date: Date, // Si se prefere, se puede usar Date en lugar de string
    description: string,
    image: string,
    price: number,
    lat: number,
    lng: number,
    distance?: number // Opcional, distancia del evento a tu posición
   }

export class  IResponse { // El servidor siempre responde con ok y opcionalmente otra propiedad
    ok: boolean;
    error?: string;
    event?: IEvent;
    events?: IEvent[];
   }

export class EventItem implements IEvent{
    id?: number; // Opcional, hasta que no se inserta, no existe
    name: string;
    date: Date; // Si se prefere, se puede usar Date en lugar de string
    description: string;
    image: string;
    price: number;
    lat: number;
    lng: number;
    distance?: number;

    constructor(eventJSON:IEvent) {
        this.id          = eventJSON.id;
        this.name        = eventJSON.name;
        this.date        = new Date(eventJSON.date);
        this.description = eventJSON.description;
        this.image       = `${IMG_URL}/${eventJSON.image}`;
        this.price       = +eventJSON.price;
        this.lat         = eventJSON.lat;
        this.lng         = eventJSON.lng;
        this.distance    = eventJSON.distance;
    }

    static getEvents():Promise<EventItem[]> { // Returns Promise<Array<EventItem>> with the array of EventItems
        return Http.ajax('GET', `${SERVER}/events`)
            .then((response:IResponse) => response.events.map(e => new EventItem(e)));
    }


    post():Promise<boolean> { // Returns Promise<true> or Promise<EventItem> 
        return Http.ajax('POST', `${SERVER}/events`, this)
            .then((response:IResponse) => {
                if(response.ok) {
                    this.id = response.event.id;
                    this.image = `${IMG_URL}/${this.image}`;
                    return true;
                } else
                    throw response.error;  
            });
    }

    delete():Promise<boolean> { // Returns Promise<true>
        return Http.ajax('DELETE', `${SERVER}/events/${this.id}`, this)
        .then((response:IResponse) => {
            if(response.ok)
                return true;
            else
                throw response.error;  
        });
    }

    toHTML():HTMLDivElement {
        
        let card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = template({
            name: this.name,
            date: `${this.date.getDate()}/${this.date.getMonth()}/${this.date.getFullYear()}`,
            price: this.price.toFixed(2),
            description: this.description,
            image: this.image
        });
        return card;
    }
        
}
