/**
 * Implementa tu propia función map.
 */

function map(callback, list) {
    let res = []
    for (let item of list) {
        res.push(callback(item))
    }
    return res
}

console.log(map((x) => x + 1, [1, 2, 3])); // [2, 3, 4]
