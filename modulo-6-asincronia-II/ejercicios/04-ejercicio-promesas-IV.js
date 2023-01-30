/**
 * Crea una función getPlayerScore que devuelva el resultado de tirar dos dados
 * Utiliza la función throwDice del ejercicio anterior para calcular los valores de las tiradas.
 * Devuelve el resultado a través de una promesa.
 */

const throwDice = require("./03-ejercicio-promesas-III");

function getPlayerScore() {
    return new Promise((resolve, _) => {
        //resolve([throwDice(), throwDice()])
        throwDice().then((val) => throwDice().then((val2) => resolve([val, val2])))
    })
}

//getPlayerScore().then((result) => console.log(result)); // Ejemplo: [3, 5]

module.exports = getPlayerScore;
