class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(delimiter = ' ') {
        return this.firstName + delimiter + this.lastName;
    }

    get name() {
        return this.getFullName();
    }

    static get numarDeParametri() {
        return 2;
    }
}

const student1 = new Student("Ion", "Creanga");
const student2 = new Student("Mihai", "Eminescu");

console.log(student1.getFullName());
console.log(student2.name);

console.log(Student.numarDeParametri);
console.log(Student.numarDeParametri);