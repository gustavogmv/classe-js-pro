/**
 * Implementa la función debounce
 */

function debounce(func, milliseconds) {
    let timer = null
    let callNum = 0
    return (...args) => {
        console.log(Date.now(), " debounce...", ++callNum)
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => func(...args), milliseconds)
    }
}

const spam = () => console.log(Date.now(), "SPAM!");

const debouncedSpam = debounce(spam, 500);

debouncedSpam(); // (Sin log)
debouncedSpam(); // (Sin log)
debouncedSpam(); // (Sin log)
debouncedSpam(); // (Sin log)
debouncedSpam(); // A los 500ms: SPAM!
