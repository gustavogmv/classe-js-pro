/**
 * Añade el patron iterador al prototipo Number, para poder iterar luego el mismo numero de veces
 * que el valor de un numero que generemos.
 */

function* generator() {
    let numIterations = 0
    while (numIterations < this.valueOf()) yield numIterations++
}

Number.prototype[Symbol.iterator] = generator;

const number = 10;

// Deberian hacerse 10 iteraciones
for (const iteration of number) {
    console.log(iteration);
}
