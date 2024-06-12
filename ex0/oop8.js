
// Alt exemplu cu prototip

function Company(name) {
    this.name = name;
}
Company.prototype.getName = function getName() {
    // this depide de contextul in care este apelat
    return this.name;
}

const company = new Company('Hexlet');
// Proprietate accesibila!
// => Hexlet
console.log(company.getName());

const company1 = new Company('SkillBrain');
const company2 = new Company('Google');
company2.getName = function getName() {
    return this.name + ' devine Alphabet';
}

// Apelând metoda obținem valoarea din obiect
console.log(company2.getName()); // Alphabet
// Apelul primeste valoarea din prototip
console.log(company1.getName()); // SkillBrain