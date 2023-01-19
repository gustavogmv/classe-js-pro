/**
 * Implementa la función partial para un sólo parámetro.
 */

function makeReducer(callback, list) {
    return (initial) => list.reduce(callback, initial)
}

const makeReducer2 = (callback, list) => (initial) => list.reduce(callback, initial)

let reducer = makeReducer((acc, x) => acc + x, [1, 2, 3]);

console.log(reducer(0)); // 6

reducer = makeReducer2((acc, x) => acc + x, [1, 2, 3]);

console.log(reducer(10)); // 16
