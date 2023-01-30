/**
 * Escribe una función throwOneCoin que devuelva una promesa que represente el lanzamiento de una moneda.
 * La moneda tarda 2 segundos en caer.
 * - 50% de las veces, la promesa se resuelve y devuelve “cruz!”.
 * - 50% de las veces, la promesa se rechaza y devuelve “cara…”.
 */

const throwOneCoin = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) resolve("cruz")
            else reject("cara")
        }, 2000)
    })
};

throwOneCoin().then(console.log); // "cruz!" o "cara..."
