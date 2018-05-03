import { Person } from './person.class';

let ar: string[];
ar = ["hola", "hello"];
ar.push("bye");

let p: Person = new Person("Peter", 28);
let name: string = p.getName();
console.log(p.toString());

p.changeAgeName("John", 31);
console.log(p.toString());

/**
 * Función lambda que recibe un objeto con 2 números (n1 y n2) y devuelve un número (la suma)
 */
let sum = (nums: { n1: number, n2: number }): number => {
    return nums.n1 + nums.n2;
}

console.log(sum({ n1: 23, n2: 14 })); // 37

/**
 * Función que recibe un objeto (rect) con una propiedad a (number) y otra opcional b (number)
 */
function areaRect(rect: { a: number, b?: number }): number {
    return  !rect.b ? rect.a * rect.a : rect.a * rect.b;
}

let a: number = 15;
console.log(`Area: ${areaRect({a: a})}`);

