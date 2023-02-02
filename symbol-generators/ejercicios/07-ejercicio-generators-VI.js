/**
 * Esta implementación contiene un par de bugs.
 * - No esta respetando el tiempo que tarda futureValue en devolver algo.
 * - Cada console.log deberia mostrar el numero que representa el orden de la variable, pero no lo está haciendo.
 */

const futureValue = (value) => new Promise((resolve) => setTimeout(() => resolve(value || "missing value"), 1000));

async function* generator() {
    let val = Promise.resolve(0)
    while (true) {
        const valor = await val.then(v => v).catch(console.log)
        val = yield valor
    }
}

function main() {
    const gen = generator();

    gen.next();

    const first = gen.next(futureValue(1)).value;
    console.log(first); // 1

    const second = gen.next(futureValue(2)).value;
    console.log(second); // 2

    const third = gen.next(futureValue(3)).value;
    console.log(third); // 3

    const fourth = gen.next(futureValue(4)).value;
    console.log(fourth); // 4
}

main();
