/**
 * Crea un generator que pare su iteración si desde fuera le decimos que hemos terminado.
 * - Por cada iteración, se logara un mensaje diciendo "Sigo ejecutandome...".
 * - Si le hemos dicho desde fuera que pare, recibiremos un mensaje en consola "Voy a parar."
 * - Aunque volvamos a llamar a next(), no deberiamos recibir ningun mensaje por consola.
 */

function* generator() {
    let stop = false
    while (!stop) {
        console.log("Sigo eje")
        const iterate = yield
        if (iterate !== undefined) {
            stop = iterate.stop
        }
    }
    console.log("Voy a parar")
    return undefined
}

const gen = generator(1000);

gen.next(); // "Sigo ejecutandome..."
gen.next(); // "Sigo ejecutandome..."
gen.next(); // "Sigo ejecutandome..."
gen.next(); // "Sigo ejecutandome..."
gen.next(); // "Sigo ejecutandome..."
gen.next({stop: true}); // "Voy a parar."
gen.next(); // (No recibimos nada en consola.)
gen.next(); // (No recibimos nada en consola.)
