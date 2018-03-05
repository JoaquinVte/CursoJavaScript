'use strict';
var persona = {
    nombre: "Peter",
    edad: 41,
    trabajos: [ // trabajos es un array de objetos JSON
        {
            descripción: "Payaso triste",
            duración: "2003-2005"
        },
        {
            descripción: "Sexador de pollos",
            duración: "2005-2015"
        }
    ]
}
<<<<<<< HEAD
console.log(persona); 
=======
console.log(persona.trabajos[1].descripción);

var now = new Date();

console.log(now);
now.setHours(now.getHours() + 2);
console.log(now);

var str = "I am amazed in America";
var reg = /am/gi;
console.log(reg.exec(str)); // Imprime ["am", index: 2, input: "I am amazed in America"]
console.log(reg.exec(str)); // Imprime ["am", index: 5, input: "I am amazed in America"]
console.log(reg.exec(str)); // Imprime ["Am", index: 15, input: "I am amaz
>>>>>>> ad20b22d8621ccd0f6c13be0dfce2ffc44d369d3
