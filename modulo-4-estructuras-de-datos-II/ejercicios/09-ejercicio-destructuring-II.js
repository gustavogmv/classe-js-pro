/**
 * Desestructura el siguiente objeto en las variables uno, dos, tres, cuatro y cinco.
 */

const obj = {uno: 1, lista: [2, 3], cuatro: 4, x: {cinco: 5}};

const {uno, lista: [dos, tres], cuatro, x: {cinco}} = obj
const {x: {cinco: otrocinco}} = obj

console.log(uno); // 1
console.log(dos); // 2
console.log(tres); // 3
console.log(cuatro); // 4
console.log(cinco); // 5
console.log(otrocinco); // 5
