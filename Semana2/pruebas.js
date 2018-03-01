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
console.log(persona.trabajos[1].descripción); 