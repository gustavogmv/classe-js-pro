/**
 * Crea una función cloneDeep:
 * - Versión recursiva de clone
 * - Ningún subobjeto mantiene la referencia anterior
 */

const obj = {a: 1, b: {c: 2, d: 5, e: {f: 9, g: 6}}};

function cloneDeep2(obj) {
    // no aconsejado...
    return JSON.parse(JSON.stringify(obj))
}

function cloneDeep(obj) {
    const cloned = Object.assign({}, obj)
    Object.keys(cloned).forEach(key => {
        if (typeof cloned[key] === "object") cloned[key] = cloneDeep(cloned[key])
    })
    return cloned
}

function cloneDeep1(obj) {
    const cloned = {}
    for (const [key, value] of Object.entries(obj)) {
        cloned[key] = typeof value === "object" ? cloneDeep(value) : value
    }
    return cloned
}

console.log(cloneDeep(obj) !== obj); // true
console.log(cloneDeep(obj).b !== obj.b); // true
const cloned = cloneDeep(obj)
console.log(cloned !== obj); // true
console.log(cloned.b !== obj.b); // true
console.log("   obj: ", obj)
console.log("Cloned: ", cloned)
