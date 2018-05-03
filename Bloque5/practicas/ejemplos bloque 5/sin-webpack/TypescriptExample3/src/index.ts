interface ICar {
    model: string;
    price: number;
    year?: number; // Opcional
}
interface IPerson {
    name: string;
    age: number;
}

interface IAppData {
    people: IPerson[]; // Array de objetos con las propiedades de IPerson
    cars: ICar[]; // Array de objetos con las propiedades de ICar
}

interface IData {
    getData(): Object[];
}

class CarDataBase implements IData {
    constructor(private data: IAppData) {}

    getData(): ICar[] { // Recibe un objeto IAppData y devuelve un array de objetos ICar
        return data.cars;
    }
}

// Se puede probar a poner propiedades no existentes en las interfaces u omitir alguna obligatoria
// para ver como se queja el compilador.
let data:IAppData = {
    people: [{name: "Peter", age: 12}, {name:"Mary",age:34}],
    cars: [
        {model: "Ford", price: 20000, year: 2013},
        {model: "Dacia", price: 9000}
    ]
};

let carDb = new CarDataBase(data);
let cars = carDb.getData();
cars.forEach(c => {
    console.log(`${c.model} -> ${c.price}`);
});