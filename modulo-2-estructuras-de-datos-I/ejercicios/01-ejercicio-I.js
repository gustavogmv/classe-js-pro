/**
 * Implementa una función que reciba un array e imprima el primer y último elemento.
 * - En caso de tener un solo elemento, imprime este una vez
 * - En caso de no tener elementos, no imprimas nada.
 */

function printFirstAndLast(list) {
    if (!list.length) {
        return
    }
    let res = String(list[0])
    if (list.length > 1) {
        res = res + " and " + String(list[list.length - 1])
    }
    return res
}

console.log(printFirstAndLast([1, 2, 3, 4, 5, 6])); // 1 and 6
console.log(printFirstAndLast([1])); // 1
console.log(printFirstAndLast([])); // undefined
