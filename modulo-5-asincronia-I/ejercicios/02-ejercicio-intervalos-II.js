/**
 * Imprime ‘ping’ cada 500ms de forma infinita.
 * No utilices setInterval
 */

const ping = (maxCount, period, count=0) => setTimeout(() => {
    console.log(Date.now(),"ping [",count,"]")
    if (maxCount > 1 && count < maxCount) {
        ping(maxCount, period, ++count)
    }
}, 500)
ping(60, 500)
