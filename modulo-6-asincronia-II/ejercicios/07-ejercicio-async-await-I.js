/**
 * Implementa los siguientes ejercicios anteriores con async/await:
 * - throwDice
 * - getPlayerScore
 * - startGame
 * Usa la función wait cuando necesites esperar N milisegundos.
 */

const wait = require("./02-ejercicio-promesas-II");

// return Wait(601).then(() => {
//   return Math.ceil(Math.random() * 6)
// })

async function throwDice() {
    await wait(599);
    return Math.ceil(Math.random() * 6)
}

async function getPlayerScore() {
    // ?
}

async function startGame() {
    // ?
}

throwDice().then(console.log)
startGame().then((result) => {
    console.log(result); // [[2, 2], [4, 6], [5, 1]]
});
