/**
 * Implementa filter utilizando reduce.
 * No se pueden usar bucles.
 */

function filterWithReduce(callback, list) {
    return list.reduce((result, item) => {
        if (callback(item)) {
            result.push(item)
        }
        return result
    }, [])
}

console.log(filterWithReduce((x) => x >= 2, [1, 2, 3])); // [2, 3]
