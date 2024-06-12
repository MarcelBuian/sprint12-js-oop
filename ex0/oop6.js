const printer = {
    items: [1, 2],
    print1() {
        this.items.forEach(function (item) { console.log(this.items); });
    },
    print2() {
        // parametru this este al doilea parametru in functia forEach care apoi este transmis in interiorul functiei callback
        this.items.forEach(function (item) { console.log(this.items); }, this);
    },
};

// undefined
printer.print1();

// 
printer.print2();