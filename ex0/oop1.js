let v1 = "Javascript";
let v2 = v1;

v2 = "HTML";

console.log(v1, v2);



// Tipurile de date in care valorile nu se copiaza cu un simplu = (ci doar se creeaza un nou pointer catre ele)
// 1. liste
// 2. obiecte

let l1 = [1, 2, 3]
let l2 = l1;
l1.push(4);
console.log(l1, l2);


// let o1 = { "a": 1, "b": 2 };
// let o2 = o1;
// delete o1.a;
// console.log(o1, o2);

