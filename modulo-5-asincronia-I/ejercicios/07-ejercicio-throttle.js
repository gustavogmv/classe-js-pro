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

const spam = (msg) => console.log(Date.now(), "SPAM!", msg);

const throttledSpam = throttle(spam, 500);

throttledSpam("haha"); // SPAM!
throttledSpam("hoho"); // (Sin log)
throttledSpam("hehe"); // (Sin log)
throttledSpam("hihi"); // (Sin log)

setTimeout(() => {throttledSpam("llll")}, 600); // SPAM!
