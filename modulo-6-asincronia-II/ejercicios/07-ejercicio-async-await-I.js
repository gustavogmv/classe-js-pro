/**
 * Implementa los siguientes ejercicios anteriores con async/await:
 * - throwDice
 * - getPlayerScore
 * - startGame
 * Usa la función wait cuando necesites esperar N milisegundos.
 */

const wait = require("./02-ejercicio-promesas-II");


async function throwDice() {
    await wait(599);
    return Math.ceil(Math.random() * 6)
}

async function getPlayerScore() {
    const r1 = await throwDice();
    const r2 = await throwDice();
    return [r1, r2]
}


console.time("Start.Game....")
async function startGame() {
    const player =  [await getPlayerScore(), await getPlayerScore(), await getPlayerScore()]
    console.timeEnd("Start.Game....")
    return player
}

startGame().then((result) => {
    console.log(result); // [[2, 2], [4, 6], [5, 1]]
});
