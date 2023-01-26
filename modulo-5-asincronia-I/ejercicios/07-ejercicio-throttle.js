/**
 * Implementa la función throttle.
 */

function throttle(func, milliseconds) {
    let timer = null
    return (...args) => {
        if (timer === null) {
            func(...args)
            timer = setTimeout(() => timer = null, milliseconds)
        }
    }
}

const spam = (msg) => console.log("SPAM!", msg);

const throttledSpam = throttle(spam, 500);

throttledSpam("haha"); // SPAM!
throttledSpam(); // (Sin log)
throttledSpam(); // (Sin log)
throttledSpam(); // (Sin log)

setTimeout(throttledSpam, 600); // SPAM!
