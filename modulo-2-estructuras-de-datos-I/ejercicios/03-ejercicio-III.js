/**
 * Implementa una función flatten que reciba una lista de listas de strings y
 * devuelva una única lista con todos los valores.
 */

function flatten(matrix) {
    //return matrix.flat()
    const res = []
    for (let arr of matrix) {
        for (let item of arr) {
            res.push(item)
        }
    }
    return res
}

console.log(
    flatten([
        ["A1", "A2", "A3"],
        ["B1", "B2", "B3"],
        ["C1", "C2", "C3"],
    ])
); // ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]
