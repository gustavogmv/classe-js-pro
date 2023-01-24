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
const arr2 = [1,2,3]
arr2.average = array.average
console.log(arr2, arr2.average);

array.push(4, 5)
arr2.push(4, 5)
console.log(array.average); // Deberiamos obtener 3
console.log(arr2.average);
