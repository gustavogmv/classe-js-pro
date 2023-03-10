// Crea una función startGame que devuelva los resultados de las tiradas de 3 jugadores (eg: [[2,2],[4,6],[5,1]])
// Utiliza la función getPlayerScore del ejercicio anterior para calcular los valores de las tiradas.
// Devuelve el resultado utilizando una promesa.

const getPlayerScore = require("./04-ejercicio-promesas-IV");

function startGame() {
    return new Promise((resolve, _) => {
        getPlayerScore()
            .then(p1 => getPlayerScore()
                .then(p2 => getPlayerScore()
                    .then(p3 => resolve([p1, p2, p3]))))
    })
}

// startGame().then((result) => {
//     console.log(result); // [[2, 2], [4, 6], [5, 1]]
// });
