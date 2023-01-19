/**
 * Implementa la función memoize para funciones de cualquier número de parámetros.
 * La función debe transformar a mayusculas el string proporcionado.
 * Si estamos memoizando el paramtro, se debe emitir un log con el texto "memoizing".
 * Si estamos devolviendo el valor memoizado, se debe emitir un log con el texto "memoized".
 */

function memoize(fn) {
    const cache = {};
    return (...string) => {
        const key = string.join()
        const isCached = cache[key] !== undefined
        if (!isCached) {
            console.log("memoizing...");
            cache[key] = fn(...string)
        } else {
            console.log("memoized...");
        }
        return cache[key]
    }
}

function toUppercase(...string) {
    return string.map(str => str.toUpperCase());
}

const toUppercaseMemoized = memoize(toUppercase);

console.log("To Upper Case: %s",toUppercase("Hello", "World"))
console.log(toUppercaseMemoized("Hello", "World")); // ["HELLO", "WORLD"] (Debe verse en consola el log: "memoizing")
console.log(toUppercaseMemoized("Hello", "Jhon")); // ["HELLO", "JHON"] (Debe verse en consola el log: "memoizing")
console.log(toUppercaseMemoized("Hello", "World")); // ["HELLO", "WORLD"] (Debe verse en consola el log: "memoized")
