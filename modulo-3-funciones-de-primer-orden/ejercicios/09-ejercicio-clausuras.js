/**
 * Crea una función que reciba un número y devuelva una función
 * que sume ese número a un nuevo número que la función devuelta recibe por parámetro.
 */

const makeSum = (n) => (num) => num + n


const sum = makeSum(3);

console.log(sum(2)); // 4
console.log(sum(8)); // 10
