/**
 * Implementa los siguientes ejercicios anteriores con async/await:
 * - throwDice
 * - getPlayerScore
 * - startGame
 * Usa la función wait cuando necesites esperar N milisegundos.
 */

const wait = require("./02-ejercicio-promesas-II");


async function throwDice() {
    await wait(1000);
    return Math.ceil(Math.random() * 6)
}

async function getPlayerScore() {
    // const r1 = await throwDice();
    // const r2 = await throwDice();
    // return [r1, r2]
    await Promise.all([throwDice(), throwDice()])
}


async function startGame() {
    // const player = [await getPlayerScore(), await getPlayerScore(), await getPlayerScore()]
    await Promise.all([getPlayerScore(), getPlayerScore(), getPlayerScore()])
}

console.time("Start.Game....")
startGame().then((result) => {
    console.log(result); // [[2, 2], [4, 6], [5, 1]]
    console.timeEnd("Start.Game....")
});
