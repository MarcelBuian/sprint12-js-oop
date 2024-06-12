function Company1(name, email) {
    this.employees = [];
    this.name = name;
    this.email = email;
};

Company1.prototype.getName = function getName() {
    return this.name;
}

Company1.prototype.getEmail = function getEmail() {
    return this.email;
}

Company1.prototype.setEmail = function setEmail(email) {
    this.email = email;
}

const company1 = new Company1('SkillBrain');
console.log(company1.getName());


class Company2 { // numele clasei - e denumirea funcției constructor
    // metodata cu numele constructor corespunde funcției-constructor
    // se apelează atunci când creăm new Company(name, email)

    constructor(name, email) {
        this.employees = [];
        this.name = name;
        this.email = email;
    }

    // Această proprietate getName are în interior o funcție obișnuită
    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }
}

const company2 = new Company2('SkillBrain');
console.log(company2.getName());