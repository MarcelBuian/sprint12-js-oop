// Crearea unui obiect fara clasa:
const myCar0 = {
    name: "BMW",
    year: 2008,
    // contextul this nu functioneaza in functii de tip arrow:
    // setNameAndYear: (newName, newYear) => {
    //     name = newName;
    //     year = newYear;
    // },
    setNameAndYear: function (newName, newYear) {
        this.name = newName;
        this.year = newYear;
    }
}

console.log("myCar0 details: ", myCar0);
console.log("myCar0 se modifica cu numele Tesla si anul 2020");
myCar0.setNameAndYear("Tesla", 2020);
console.log("myCar0 details: ", myCar0);


console.log('car hasOwnProperty name?', myCar0.hasOwnProperty('name'));
console.log('car hasOwnProperty year?', myCar0.hasOwnProperty('year'));
console.log('car hasOwnProperty color?', myCar0.hasOwnProperty('color'));
console.log('car hasOwnProperty setNameAndYear?', myCar0.hasOwnProperty('setNameAndYear'));