// toString() example:


function Company(name, year = "unknown") {
    this.name = name;
    this.year = year;
};

Company.prototype.toString = function toString() {
    let text = this.name;

    if (this.year !== 'unknown') {
        text += ` founded in ${this.year}`;
    }

    return text;
}

const company = new Company('SkillBrain', 2021);

// "I love SkillBrain, founded in 2021!"
console.log(`I love ${company}!`);

// Un alt exemplu
const date1 = new Date();
console.log(`Date1 este ${date1}`);

