"use strict";

/**
 * Ejemplo de concatenar promesas. El método halfCheck obtiene el número
 * multiplicado por 10 (llamada a checkNumber) en una promesa. Cuando lo 
 * recibe, lo divide entre 2 y lo devuelve (el ńumero no puede ser mayor que 100).
 * El número no puede ser negativo, ni superar 100 cuando se multiplica por 10. En
 * caso de error, irá directamente al método catch.
 */

function checkNumber(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(num < 0)
                reject(`${num} can't be negative!!`);
            else
                resolve(num * 10);
        }, 3000);
    });
}

function halfCheck(num) {
    return checkNumber(num).then(n => {
        if(n > 100)
            throw n + " is greater than 100!";
        return n / 2;
    });
}

halfCheck(5).then(num => console.log(num));
halfCheck(-45)
    .then(num => console.log(num))
    .catch(error => console.error(error));

halfCheck(77)
    .then(num => console.log(num))
    .catch(error => console.error(error));
