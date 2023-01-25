/**
 * Crea una función getPlayerScore que devuelva el resultado de tirar dos datos
 * Utiliza la función throwDice del ejercicio anterior para calcular los valores de las tiradas.
 * Devuelve el resultado utilizando un callback.
 */

const throwDice = require("./03-ejercicio-asincronia-I");

const updateDice = (dice) => (n) => {
    dice.dice = n
    console.log("Update:", n)
}

function getPlayerScoreMolon(callback) {
    throwDice((num1) => {
        throwDice((num2) => {
            callback([num1, num2])
        })
    })
}

function getPlayerScore(callback) {
    let dice1 = {dice:0}
    let dice2 = {dice:0}
    throwDice(updateDice(dice1))
    throwDice(updateDice(dice2))
    callback([dice1.dice, dice2.dice])
    setTimeout(() => {console.log("D1:",dice1," D2: ",dice2)},1100)
}

getPlayerScore((numbers) => {
    console.log(numbers); // Ejemplo: [3, 5]
});

module.exports = getPlayerScoreMolon;
