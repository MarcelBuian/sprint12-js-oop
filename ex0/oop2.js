const date1 = new Date();
for (let i = 0; i < 1_000_000; i++) {
    new Date();
}
const date2 = new Date();
const date1b = date1;

console.log('date1.getHours ' + date1.getHours());
console.log('date2.getHours ' + date2.getHours());
console.log('date1b.getHours ' + date1b.getHours());

console.log('date1.getMilliseconds ' + date1.getMilliseconds());
console.log('date2.getMilliseconds ' + date2.getMilliseconds());
console.log('date1b.getMilliseconds ' + date1b.getMilliseconds());

console.log("Modificam Hours la date1b cu 15...");
date1b.setHours(15);

console.log('date1.getHours ' + date1.getHours());
console.log('date2.getHours ' + date2.getHours());
console.log('date1b.getHours ' + date1b.getHours());

console.log(date1.toISOString());
