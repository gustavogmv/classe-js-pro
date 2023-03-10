/**
 * Crea una función startGame que devuelva los resultados de las tiradas de 3 jugadores
 * No utilices bucles.
 * Utiliza la función getPlayerScore del ejercicio anterior para calcular los valores de las tiradas.
 * Devuelve el resultado utilizando un callback.
 */

const getPlayerScore = require("./04-ejercicio-asincronia-II");

function startGame(callback) {
  getPlayerScore((p1)=>{
    getPlayerScore((p2)=>{
      getPlayerScore((p3)=>{
        callback([p1,p2,p3])
      })
    })
  })
}

startGame((game) => {
  console.log(game); // Ejemplo: [[2, 2], [4, 6], [5, 1]]
});
