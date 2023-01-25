/**
 * Crea una función throwDice que devuelva el resultado de tirar un dado de 6 caras al cabo de 1000ms.
 * La función devuelve el resultado a través de un callback.
 */

function throwDice(callback) {
  setTimeout(() => callback(Math.floor(Math.random()*6)),1000)
}

throwDice((number) => {
  console.log(number); // Ejemplo: 1
});

module.exports = throwDice;
