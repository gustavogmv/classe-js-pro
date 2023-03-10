/**
 * Implementa una función difference que reciba dos listas y
 * devuelva una nueva lista con los elementos de la primera que no tienen en común.
 */

function difference(listA, listB) {
    return [...listA, ...listB].filter(elem => !listA.includes(elem) || !listB.includes(elem))
}

console.log(difference([1, 2, 3], [3, 4, 5])); // [1, 2, 4, 5]
