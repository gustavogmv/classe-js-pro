/**
 * Implementa una función cut que reciba una lista, y dos índices.
 * La función debe devolver una nueva lista con los valores comprendidos entre los dos índices.
 * Incluye los extremos.
 * - Si la función no recibe un segundo índice, incluye el resto de valores.
 * - No utilices la función nativa slice.
 */

function cut(list, start, end) {
    let stIndex = start >= 0 ? start : 0
    let endIndex = end === undefined ? list.length - 1 : end
    let res = []
    for (let i = stIndex; i <= endIndex; i++) {
        res.push(list[i])
    }
    console.log(res)
    return res
}

cut(["a", "b", "c", "d"], 1, 2); // ["b", "c"]
cut(["a", "b", "c", "d"], 1); // ["b", "c", "d"]
cut(["a", "b", "c", "d"], -1, 1); // ["a", "b"]
