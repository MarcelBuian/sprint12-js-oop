class Name {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return this.firstName + '_' + this.lastName;
    }
}

class Company {

    employees = [];

    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name.getFullName();
    }

    addEmployee(name) {
        this.employees.push(name);
    }

    getEmployees() {
        return this.employees;
    }

    getEmployeesAsString() {
        if (this.employees.length === 0) {
            return 'no employees';
        }

        return this.employees.length + ' employees: ' + this.employees.join(', ');
    }

    toString() {
        return `Company ${this.getName()} has ${this.getEmployeesAsString()}`;
    }
}

const company1 = new Company(new Name('Zomby', 'Company'));
console.log('' + company1);


const company2 = new Company(new Name('Skill', 'Brain'));
company2.addEmployee('Alex');
company2.addEmployee('Marcel');
company2.addEmployee('Andrada');
console.log(company2.toString());