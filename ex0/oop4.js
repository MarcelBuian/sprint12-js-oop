// Declararea clasei (crearea tipului de clasa)
class Car {
    #name;
    #year;

    constructor(par1, par2) {
        this.#name = par1;
        this.#year = par2;
    }

    getName() {
        return this.#name;
    }

    damiAnul = () => this.#year;

    setName(newName) {
        this.#name = newName;
    }

    getFullDetails() {
        // return "This is a car with name " + this.#name + " from year " + this.#year;
        return `This is a car with name ${this.#name} from year ${this.#year}`;
    }
}

// Crearea unui obiect cu clasa, de tip Car
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

console.log("myCar1: " + myCar1.getFullDetails());
console.log("myCar2: " + myCar2.getFullDetails());
// console.log(myCar1.getName());
// console.log(myCar1.damiAnul());

console.log("Changing name of myCar1 to Opel");
myCar1.setName("Opel");

console.log("myCar1: " + myCar1.getFullDetails());
console.log("myCar2: " + myCar2.getFullDetails());