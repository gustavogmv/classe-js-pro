/**
 * Crea una variable contador que empiece valiendo 0.
 * Incrementa el contador cada segundo e imprímelo.
 */

let contador = 0
let counter2 = 0
const incAndLog = (maxCount) => setTimeout(() => {
    console.log(++contador)
    if (maxCount > 1 && contador < maxCount) {
        incAndLog(maxCount)
    }
}, 1000)
incAndLog(60)
const counter2Interval = setInterval(() => {
    console.log("Counter2: ", ++counter2)
    if (counter2 > 60) {
        clearInterval(counter2Interval)
    }
}, 999)
