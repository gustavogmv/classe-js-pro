/**
 * Implementa una función retry idéntica a repeat, pero que sólo repita en caso de
 * producirse un error al llamar a la función.
 */

function retry(callback, times) {
    try {
        if (times > 0) {
            callback()
            retry(callback, times - 1)
        }
    } catch (error) {
        console.log("Error in execution %d.", times)
        console.log("Reason: ", error.toString())
        retry(callback, times)
    }
}

function maybeFailingLogger() {
    const willFail = Math.random() > 0.5;

    if (willFail) throw new Error("Failed: " + willFail);

    console.log("SPAM!");
}

retry(maybeFailingLogger, 3); // SPAM! SPAM! SPAM!
