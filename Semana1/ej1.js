'use strict';

/**
 * Apartado 1
 * Crea una función que reciba 2 cadenas por parámetro. Dicha función imprimirá por consola qué cadena
 * tiene mayor longitud. Si el tipo de algún parámetro no es string (typeof param !== "string"),
 * debes imprimir un error.
 * Llama a la función 3 veces con diferentes parámetros. En una de esas llamadas pásale por parámetro un valor que no sea string.
 */

console.log('--------------- APARTADO 1 -----------------');

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

/**
 * Apartado 2
 * Crea un array con diferentes tipos de valores (números, strings, booleanos). A partir de dicho array,
 * recórrelo y genera otro array con dichos valores convertidos todos a número. Los que no hayan podido
 * ser convertidos (NaN) no deberían estar en el array final. Imprime dicho array resultante por consola.
 */

console.log('--------------- APARTADO 2 -----------------');

var vector = new Array(1,2,3,"Cuatro",true,6,7,false,"nueve");
var vectorNumeros = new Array();

for (var idx in vector){
	if (!isNaN(Number(vector[idx]))){
		vectorNumeros.push(Number(vector[idx]));
	}
}

console.log(vectorNumeros);

/**
 * Apartado 3
 * Haz lo mismo que en el apartado anterior pero usando los métodos nuevos de EcmaScript 5 (map, filter, ...)
 * Pista: Deberías primero generar un array con todos los valores convertidos a número (map), y a partir de
 * este generar otro array filtrando los que no son NaN (filter). Con el array resultante, utiliza el método
 * reduce para sumarlos.
 */

console.log('--------------- APARTADO 3 -----------------');

console.log(vector.map(function(elemento){
	return Number(elemento);
}).filter(function(elemento){
	return !isNaN(elemento);
}));

/**
 * Apartado 4
 * Crea una función que reciba 3 parámetros (nombre de producto, precio e impuesto en porcentaje sobre 100).
 * Dicha función hará lo siguiente:
 * - Los parámetros deberán tener un valor por defecto por si no los recibe que deben ser: "Producto genérico", 100 y 21.
 * - Convierte el nombre de producto a string (por si acaso) y los otros 2 a número. Si el precio o el impuesto no son
 *   numéros válidos muestra un error. Si son válidos, muestra por consola el nombre del producto y el precio final contando impuestos.
 * - Llama a la función varias veces, omitiendo parámetros, con todos ellos, y pasándo algún valor no númerico en el precio o impuesto.
 */

console.log('--------------- APARTADO 4 -----------------');

function  precioTotal (nombre, precio, impuesto){
	var name = nombre || "Producto genérico";
	var cost = precio || 100;
	var tax = impuesto || 21;

	if (isNaN(cost) || isNaN(tax)){
		return "Error. El precio o impuesto no es un valor numerico.";
	} else {
		return "El coste de " + name + ", es de: " + (cost+(cost*tax/100)) +"€";
	}Commits
}

console.log(precioTotal());
console.log(precioTotal("Coche",15000,7));
console.log(precioTotal("Coche","dosmil",));

/**
 * Apartado 5
 * Realiza los siguientes pasos (muestra por
'use strict';var persona = {    nombre: "Peter",    edad: 41,    trabajos: [ // trabajos es un array de objetos JSON        {            descripción: "Payaso triste",            duración: "2003-2005"        },        {            descripción: "Sexador de pollos",            duración: "2005-2015"
￼
PROBLEMAS
3
SALIDA
CONSOLA DE DEPURACIÓN
TERMINAL
￼
git rev-parse --symbolic-full-name --abbrev-ref master@{u}git rev-list --left-right master...origin/mastergit for-each-ref --format %(refname) %(objectname) --sort -committerdategit remote --verbosegit status -z -ugit symbolic-ref --short HEADgit rev-parse mastergit rev-parse --symbolic-full-name --abbrev-ref master@{u}git rev-list --left-right master...origin/mastergit for-each-ref --format %(refname) %(objectname) --sort -committerdategit remote --verbosegit show :Semana2/pruebas.jsgit checkout -q -- /home/joaalsai/CursoJavaScript/Semana2/pruebas.jsgit status -z -ugit symbolic-ref --short HEADgit rev-parse mastergit rev-parse --symbolic-full-name --abbrev-ref master@{u}git rev-list --left-right master...origin/mastergit for-each-ref --format %(refname) %(objectname) --sort -committerdategit remote --verbosegit status -z -ugit symbolic-ref --short HEADgit rev-parse mastergit rev-parse --symbolic-full-name --abbrev-ref master@{u}git rev-list --left-right master...origin/mastergit for-each-ref --format %(refname) %(objectname) --sort -committerdategit remote --verbosegit show :Semana2/pruebas.jsgit status -z -ugit symbolic-ref --short HEADgit rev-parse mastergit rev-parse --symbolic-full-name --abbrev-ref master@{u}git rev-list --left-right master...origin/mastergit for-each-ref --format %(refname) %(objectname) --sort -committerdategit remote --verbose ￼
Lín. 19, Col. 46Espacios: 4UTF-8LFJavaScript master30
Descargar ahoraMás tardeNotas de la versión
Información consola el resultado después de aplicar cada uno):
 * - Crea un array con 4 elementos
 * - Concatena 2 elementos más al final y 2 al principio
 * - Elimina las posiciones de la 3 a la 5 (incluida)
 * - Inserta 2 elementos más entre el penúltimo y el último
 * - Muestra el array del paso anterior, pero con los elementos separados por "==>"
 */

console.log('--------------- APARTADO 5 -----------------');

vector = new Array(1,2,3,4);
console.log(vector);

vector.push(5,6);
vector.unshift(-1,0);
console.log(vector);

vector.splice(3,3);
console.log(vector);

vector.splice(vector.length-1,0,"antepenúltimo","penúltimo");
console.log(vector.join("==>"));

/**
 * Apartado 6
 * Crea una función que reciba 2 parámetros. El primero será el nombre de una persona,
 * y el segundo serán los trabajos que ha realizado esa persona (usa spread para agruparlos en un array).
 * Posible llamada -> printTrabajos("Pepe", "Albañil", "Programador", "Buscador de tesoros")
 * La función simplemente mostrará por consola el nombre y los trabajos recorriéndolos con un for..of
 */

console.log('--------------- APARTADO 6 -----------------');

function printTrabajos(nombre, ...oficios){
	let trabajos="";
	for(let oficio of oficios){
		trabajos=trabajos+oficio+" ";
	}
	return "Los trabajos que ha realizado " + nombre + " son: " + trabajos;
}

console.log(printTrabajos("Pepe", "Albañil", "Programador", "Buscador de tesoros"));

/**
 * Apartado 7
 * A partir del siguiente array que contiene productos con mensajes sobre los mismos,
 * filtra los mensajes que empiecen por ERROR (usa el método startsWith).
 * Después recórrelos y mételos en un objeto Map cuya clave sea el nombre del producto
 * y cuyo valor sea un array con los mensajes de error asociados al producto.
 * Recorre el objeto Map mostrando, para cada producto, que errores tiene asociados.
 */

console.log('--------------- APARTADO 7 -----------------');

let mensajes = [
    ['Silla', 'ERROR: Stock no coincide'],
    ['Mesa', 'Pedido de 2 unidades'],
    ['Silla', 'ERROR: El precio no puede ser menor a 1'],
    ['Mesa', 'ERROR: No se pueden enviar 0 unidades'],
    ['Cama', 'ERROR: El fabricante no tiene ese modelo'],
    ['Silla', 'Se ha borrado el producto de la base de datos']
];

/**
 * Genero un vector con los mensajes de error
 */

var mensajesError=mensajes.filter(function(elemento){
	if (elemento[1].startsWith("ERROR")) {
		return elemento;
	}
});

/**
 * Genero un Map con los distintos mensajes para cada key, siendo la key el 
 * nombre del producto y su valor un vector con los distintos mensajes de error
 */

var erroresMap = new Map();
for(let error of mensajesError){
	if(!erroresMap.has(error[0])){
		erroresMap.set(error[0],new Array());
	}
	erroresMap.get(error[0]).push(error[1])'use strict';var persona = {    nombre: "Peter",    edad: 41,    trabajos: [ // trabajos es un array de objetos JSON        {            descripción: "Payaso triste",            duración: "2003-2005"        },        {            descripción: "Sexador de pollos",            duración: "2005-2015"
	￼
	PROBLEMAS
	3
	SALIDA
	CONSOLA DE DEPURACIÓN
	TERMINAL
	￼
	git rev-parse --symbolic-full-name --abbrev-ref master@{u}git rev-list --left-right master...origin/mastergit for-each-ref --format %(refname) %(objectname) --sort -committerdategit remote --verbosegit status -z -ugit symbolic-ref --short HEADgit rev-parse mastergit rev-parse --symbolic-full-name --abbrev-ref master@{u}git rev-list --left-right master...origin/mastergit for-each-ref --format %(refname) %(objectname) --sort -committerdategit remote --verbosegit show :Semana2/pruebas.jsgit checkout -q -- /home/joaalsai/CursoJavaScript/Semana2/pruebas.jsgit status -z -ugit symbolic-ref --short HEADgit rev-parse mastergit rev-parse --symbolic-full-name --abbrev-ref master@{u}git rev-list --left-right master...origin/mastergit for-each-ref --format %(refname) %(objectname) --sort -committerdategit remote --verbosegit status -z -ugit symbolic-ref --short HEADgit rev-parse mastergit rev-parse --symbolic-full-name --abbrev-ref master@{u}git rev-list --left-right master...origin/mastergit for-each-ref --format %(refname) %(objectname) --sort -committerdategit remote --verbosegit show :Semana2/pruebas.jsgit status -z -ugit symbolic-ref --short HEADgit rev-parse mastergit rev-parse --symbolic-full-name --abbrev-ref master@{u}git rev-list --left-right master...origin/mastergit for-each-ref --format %(refname) %(objectname) --sort -committerdategit remote --verbose ￼
	Lín. 19, Col. 46Espacios: 4UTF-8LFJavaScript master30
	Descargar ahoraMás tardeNotas de la versión
	Información;	
}

/**master
 * Recorremos el Map para visualizar su contenido
 */

for(let error of erroresMap) {
 console.log("Errores de " + error[0] + ": " + error[1].join(", "));
}
master