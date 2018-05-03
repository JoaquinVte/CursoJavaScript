/**
 * Esta interfaz tiene un método que recibe una cadena y un número y no devuelve nada
 */
export interface IPerson {
    changeAgeName(name: string, age: number): void;
}