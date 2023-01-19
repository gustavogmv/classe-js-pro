/**
 * Implementa la función memoize para funciones de cualquier número de parámetros.
 * La función debe transformar a mayusculas el string proporcionado.
 * Si estamos memoizando el paramtro, se debe emitir un log con el texto "memoizing".
 * Si estamos devolviendo el valor memoizado, se debe emitir un log con el texto "memoized".
 */

function memoize(fn) {
    const cache = {};
    return (...string) => {
        const upperCase = []
        for (elem of string) {
            const isCached = cache[elem] !== undefined
            if (!isCached) {
                console.log("memoizing...");
                cache[elem] = fn(elem)
            } else {
                console.log("memoized...");
            }
            upperCase.push(cache[elem])
        }
        return upperCase
    }
}

function toUppercase(string) {
    return string.toUpperCase();
}

const toUppercaseMemoized = memoize(toUppercase);

console.log(toUppercaseMemoized("Hello", "World")); // ["HELLO", "WORLD"] (Debe verse en consola el log: "memoizing")
console.log(toUppercaseMemoized("Hello", "Jhon")); // ["HELLO", "JHON"] (Debe verse en consola el log: "memoizing")
console.log(toUppercaseMemoized("Hello", "World")); // ["HELLO", "WORLD"] (Debe verse en consola el log: "memoized")
