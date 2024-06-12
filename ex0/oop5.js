const printer = {
    name: 'SkillBrain',
    print(greeting = 'hello') {
        console.log(`${greeting}, ${this.name}`);
    }
};

// Apelarea directă
printer.print("Hi");

// Dorim să apelăm metoda print peste 1s = 1000ms
// Obligatoriu rulați codul pe calculatorul dvs.
// pentru a întelege cum lucrează setTimeout
setTimeout(printer.print, 1000);

// Impachetam functia intr-o alta functie, ca sa avem acces la "this"
setTimeout(() => printer.print(), 1000);

// Rezultatul execuției bind()va fi o nouă funcție care funcționează ca funcția originală, dar cu un context atașat acesteia.
setTimeout(printer.print.bind(printer), 1000);
// daca vrem sa transmitem un parametru al functiei "print" atunci il transmitem ca si al doilea parametru dupa functia "bind"
setTimeout(printer.print.bind(printer, 'hi'), 1000);

// folosind functia apply:
printer.print.apply(printer, ['[apply] salut']);
printer.print.call(printer, '[call] salut');