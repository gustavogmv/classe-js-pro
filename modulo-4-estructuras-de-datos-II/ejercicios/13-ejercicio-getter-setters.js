/**
 * Añade una propiedad average a un array que devuelva la media de los valores del array.
 */

const array = [1, 2, 3];

Object.defineProperty(array, 'average', {
    get: () => {
        return array.reduce((acc, e) => acc + e / array.length, 0)
    }
})

console.log(array.average); // Deberiamos obtener 2
array.push(4, 5)
console.log(array.average); // Deberiamos obtener 3
