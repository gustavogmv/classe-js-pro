/**
 * Crea una función sumObject que reciba un objeto como este y sume todos los números.
 * El resultado debería ser 23.
 */

const obj = {a: 1, b: {c: 2, d: 5, e: {f: 9, g: 6}}};

function sumObject(obj) {
    // return Object.keys(obj).reduce((acc, key) => {
    //     if (typeof obj[key] !== "object") {
    //         return acc + obj[key]
    //     } else return acc + sumObject(obj[key])
    // }, 0)
    return Object.values(obj).reduce(
        (acc, value) => (acc += typeof value === "object" ? sumObject(value) : value), 0
    )
}

console.log(sumObject({a: 1, b: {c: 2, d: 5, e: {f: 9, g: 6}}})); // 23
console.log(sumObject(obj)); // 23
