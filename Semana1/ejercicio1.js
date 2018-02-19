//  Ejercicio 1
// Crea una función que reciba 2 cadenas por parámetro. Dicha función imprimirá por consola qué cadena tiene mayor longitud. 
// Si el tipo de algún parámetro no es string (typeof param !== "string"), debes imprimir un error.

// Llama a la función 3 veces con diferentes parámetros. En una de esas llamadas pásale por parámetro un valor que no sea string.
'use strict';

function cadenaMayor(cadena1,cadena2){
	if (typeof cadena1 !== "string" || typeof cadena2 !== "string") {
		return "Error!, alguna cadena no es un string";
	} else {
		if (cadena1.length > cadena2.length){
			return "La cadena 1: \"" + cadena1 +"\", es la mas larga.";
		} else if (cadena1.length < cadena2.length){
			return "La cadena 2: \"" + cadena2 +"\", es la mas larga.";
		} else {
			return "Las dos cadenas tienen la misma logitud."
		}
	}
}

var cadena1;
var cadena2;

console.log(cadenaMayor("Hola","Adios"));
console.log(cadenaMayor("En un lugar de la...","... Mancha"));
console.log(cadenaMayor("Hola",3));


// Ejercicio 2
// Crea un array con diferentes tipos de valores (números, strings, booleanos). 
// A partir de dicho array recórrelo y genera otro array con dichos valores convertidos todos a número. 
// Los que no hayan podido ser convertidos (NaN) no deberían estar en el array final. Imprime dicho array resultante por consola.

var vector = new Array(1,2,3,"Cuatro","true",6,7,"false","nueve");
var vectorNumeros = new Array();
var indice=0;
for (var idx in vector){
	if (!isNaN(Number(vector[idx]))){
		vectorNumeros[indice]=Number(vector[idx]);
		indice++;
	}
}

console.log(vectorNumeros);


// Ejercicio 3
// Haz lo mismo que en el apartado anterior pero usando los métodos nuevos de EcmaScript 5 (map, filter, ...)

// Pista: Deberías primero generar un array con todos los valores convertidos a número (map), 
// y a partir de este generar otro array filtrando los que no son NaN (filter).

var vectorMap = new Array();
var vectorFilter = new Array();

vectorMap = vector.map(function(elemento){
	return Number(elemento);
});

vectorFilter=vectorMap.filter(function(elemento){
	if (!isNaN(elemento)){
		return Number(elemento);
	}
});

console.log(vectorFilter);

// Ejercicio 4
// Crea una función que reciba 3 parámetros (nombre de producto, precio e impuesto en porcentaje sobre 100). 

// Dicha función hará lo siguiente:

// Los parámetros deberán tener un valor por defecto por si no los recibe que deben ser: "Producto genérico", 100 y 21.

// Convierte el nombre de producto a string (por si acaso) y los otros 2 a número. Si el precio o el impuesto no son numéros válidos muestra un error. 
// Si son válidos, muestra por consola el nombre del producto y el precio final contando impuestos.

// Llama a la función varias veces, omitiendo parámetros, con todos ellos, y pasándo algún valor no númerico en el precio o impuesto.

function  precioTotal (nombre, precio, impuesto){
	var name = nombre || "Producto genérico";
	var cost = precio || 100;
	var tax = impuesto || 21;

	if (isNaN(cost) || isNaN(tax)){
		return "Error. El precio o impuesto no es un valor numerico.";
	} else {
		return "El coste de " + name + ", es de: " + (cost+(cost*tax/100)) +"€";
	}

}

console.log(precioTotal("coche",15000,21));
console.log(precioTotal(null,15000,21));
console.log(precioTotal("coche",15000,"casa"));
console.log(precioTotal());

