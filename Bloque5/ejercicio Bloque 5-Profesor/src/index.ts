import {EventItem} from './event.class';

let eventList : EventItem[];

window.addEventListener("load", e => {
    EventItem.getEvents().then(events => {
        eventList = events;
        showEvents(eventList);
    });

    document.getElementById("orderDate").addEventListener('click', e => {
        eventList.sort((e1, e2) => e1.date.getTime() - e2.date.getTime() );
        document.getElementById("orderPrice").classList.remove("active");        
        (<HTMLElement>e.target).classList.add("active");
        showEvents(eventList);
    });

    document.getElementById("orderPrice").addEventListener('click', e => {
        eventList.sort((e1, e2) => e1.price - e2.price );
        document.getElementById("orderDate").classList.remove("active");
        (<HTMLElement>e.target).classList.add("active");
        showEvents(eventList);
    });

    document.getElementById("searchEvent").addEventListener('keyup', e => {
        let events = eventList.filter(ev => ev.name.toLocaleLowerCase().includes((<HTMLInputElement>e.target).value.toLocaleLowerCase()));
        showEvents(eventList);
    });
});

function showEvents(events) {
    let container = document.getElementById("eventsContainer");
    while (container.firstChild) { // Delete all children
        container.removeChild(container.firstChild);
    }

    let deck;
    events.forEach((event, i) => {
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
                    if(events !== eventList) events.splice(events.indexOf(event), 1);
                    eventList.splice(eventList.indexOf(event), 1);
                    showEvents(events);
                });
            }  
        });
        deck.appendChild(eventCard);
    });
}