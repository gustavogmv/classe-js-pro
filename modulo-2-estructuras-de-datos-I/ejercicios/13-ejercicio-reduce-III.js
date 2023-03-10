/**
 * Realiza la siguiente transformación utilizando reduce
 */

function sumMatrix(matrix) {
    return matrix.map(row => row.reduce((acc, n) => acc + n, 0))
}

console.log(sumMatrix([[1, 2], [34, 20, 5], [11], [2, 4]])); // [3, 59, 11, 6]
