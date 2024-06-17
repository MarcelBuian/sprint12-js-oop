const obj = {
    log: ['a', 'b', 'c'],
    latest() {
        return this.log[this.log.length - 1];
    },
};

console.log(obj.latest());