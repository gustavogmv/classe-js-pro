/**
 * Crea un generador que genere numeros impares.
 * IMPORTANTE: Debe terminar antes de llegar a 50.
 */

function* generator() {
    let odd = 1
    while (odd < 50) {
        yield odd
        odd += 2
    }
}

const gen = generator();

for (const number of gen) {
    console.log(number); // 1, 3, 5, 7, 9, ... etc
}
