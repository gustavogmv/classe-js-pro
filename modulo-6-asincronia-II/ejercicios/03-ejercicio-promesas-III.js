/**
 * Crea una función throwDice que devuelva el resultado de tirar un dado
 * de 6 caras al cabo de 1000ms a través de una promesa.
 */

const Wait = require("./02-ejercicio-promesas-II")

function throwDice() {
    return Wait(1000).then(() => {
        return Math.ceil(Math.random() * 6)
    })
}

throwDice().then((result) => console.log(result)); // 2

module.exports = throwDice;
