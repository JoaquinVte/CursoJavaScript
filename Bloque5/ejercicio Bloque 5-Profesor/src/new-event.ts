'use strict';
import { EventItem } from './event.class';
import { Http } from './http.class';

declare function require(module: string): any; // Ahora podemos usar require
let styles = require('../exercise5.css');

let newEventForm = null;

function testInputExpr(input, expr) {
    input.classList.remove("is-valid", "is-invalid");
    if (expr.test(input.value)) {
        input.classList.add("is-valid");
        return true;
    } else {
        input.classList.add("is-invalid");
        return false;
    }
}

function validatePrice() {
    return testInputExpr(document.getElementById("price"),
        /[0-9]+(\.[0-9]{1,2})?/);
}

function validateName() {
    return testInputExpr(document.getElementById("name"),
        /[a-z][a-z ]*/);
}

function validateDescription() {
    return testInputExpr(document.getElementById("description"),
        /.*\S.*/);
}

function validateDate() {
    return testInputExpr(document.getElementById("date"),
        /\d{4}-\d{2}-\d{2}/);
}

function validateImage() {
    let imgInput = <HTMLInputElement>document.getElementById("image");

    imgInput.classList.remove("is-valid", "is-invalid");
    if (imgInput.files.length > 0) {
        imgInput.classList.add("is-valid");
        return true;
    } else {
        imgInput.classList.add("is-invalid");
        return false;
    }
}

function validateForm(event) {
    event.preventDefault();
    let name: string = newEventForm.name.value;
    let image: string = (<HTMLImageElement>document.getElementById("imgPreview")).src;
    let date: Date = newEventForm.date.value;
    let description: string = newEventForm.description.value;
    let price: number = newEventForm.price.value;
    let lat: number;
    navigator.geolocation.getCurrentPosition(function (pos) {
        lat = pos.coords.latitude;
    }, function (error) {
        return 0
    });
    let lng: number
    navigator.geolocation.getCurrentPosition(function (pos) {
        lng = pos.coords.longitude;
    }, function (error) {
        return 0
    });

    let ok = validateName();
    ok = validateDate() && ok;
    ok = validateDescription() && ok;
    ok = validatePrice() && ok;
    ok = validateImage() && ok;





    if (ok) {
        let newEvent = new EventItem({ name, date, description, image, price: price, lat: lat, lng: lng });
        newEvent.post().then((event => {
            location.assign("index.html");
        })).catch(error => {
            alert(error);
        });
    }
}

function loadImage(event) {
    let file = event.target.files[0];
    let reader = new FileReader();

    if (file) reader.readAsDataURL(file);

    reader.addEventListener('load', e => {
        (<HTMLImageElement>document.getElementById("imgPreview")).src = reader.result;
    });
}

window.addEventListener("load", e => {
    newEventForm = document.getElementById("newEvent");

    newEventForm.image.addEventListener('change', loadImage);

    newEventForm.addEventListener('submit', validateForm);
});