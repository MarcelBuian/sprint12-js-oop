// Prototipuri

const date = new Date();
const proto1 = Object.getPrototypeOf(date);
console.log('proto1', proto1);

const numbers = [1, 2, 3];
const proto2 = Object.getPrototypeOf(numbers);
console.log('proto2', proto2);

function Company(name) {
    this.name = name;
}
const company = new Company();
const proto3 = Object.getPrototypeOf(company);
console.log('proto3', proto3);

console.log('company has constructor?', company.hasOwnProperty('constructor'));