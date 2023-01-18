/**
 * Implementa una función repeat que reciba una función y
 * un número N y llame a la función N veces.
 */

function repeat(callback, times) {
    Array(times).fill(callback).forEach(_ => _())
}

repeat(() => console.log("SPAM!"), 3); // SPAM! SPAM! SPAM!
