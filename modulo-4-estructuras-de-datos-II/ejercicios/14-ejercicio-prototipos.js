/**
 * Crea un objeto A cuyo prototipo sea B cuyo prototipo sea C utilizando Object.create(...)
 * Como en el ejemplo que acabamos de ver
 */

const c = {c:"c"}
const b = Object.create(c, {b: {value: 'b', enumerable:true}})
const a = Object.create(b, {a: {value: 'a', enumerable:true}})


console.log("C==>" ,c)
console.log("B==>" ,b)
console.log("A==>" ,a)
console.log("ProtoA: ",a.__proto__)
console.log("ProtoB: ",b.__proto__)