/** Resuelve los ejercicios anteriores, creando versiones modificadas de
 * getPlayerScore y startGame que usen Promise.all
 */

const throwDice = require("./03-ejercicio-promesas-III");

function getPlayerScore() {
    return Promise.all([
        throwDice(),
        throwDice()]).then(scores => scores)
}

function startGame() {
    return Promise.all([
        getPlayerScore(),
        getPlayerScore(),
        getPlayerScore()]).then(values => values)
}

startGame().then((result) => {
    console.log(result); // [[2, 2], [4, 6], [5, 1]]
});
