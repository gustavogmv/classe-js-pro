/**
 * Implementa la función negate, que recibe una función que devuelve true/false e invierte su comportamiento.
 */
/**
 *
 * @param callback
 */
function negate(callback) {
    return (number) => !callback(number)
}

/**
 *
 * @param {Number} number
 * @returns {boolean}
 */
function isEven(number) {
    return number % 2 === 0;
}

const isOdd = negate(isEven);

console.log([1, 2, 3, 4].filter(isOdd)); // [1, 3]
console.log([1, 2, 3, 4].filter(isEven)); // [2,4]
