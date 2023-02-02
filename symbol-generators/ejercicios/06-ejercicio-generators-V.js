/**
 * Crea una función recursiva que recorra el generador hasta que haya terminado.
 * - Deberiamos recibir 5 logs por consola diciendo "Continuo iterando..."
 * - Cuando termine, debemos recibir un mensaje por consola "Paro de iterar"
 */

function* generator(limit) {
    for (let index = 0; index < limit; index++) {
        yield index;
    }
}

function recursiveIteration(gen) {
    const val = gen.next()
    if (!val.done) {
        console.log("Continuo iterando...")
        recursiveIteration(gen)
    } else {
        console.log("Paro de iterar")
    }
}

function recursiveIteration2(gen) {
    function loop(yielded) {
        if (yielded.done) {
            console.log("Paro de iterar")
            return
        }
        console.log("Continuo iterando...")
        loop(gen.next())
    }

    loop(gen.next())
}

recursiveIteration2(generator(5));
//recursiveIteration(generator(5));
