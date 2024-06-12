// Alt exemplu de prototip util:

const numbers1 = [1, 3];

console.log(numbers1.join(','));


// Implicit un array nu are functia last. Insa noi o putem crea
Array.prototype.last = function last() {
    return this[this.length - 1];
}

console.log(numbers1.last());


