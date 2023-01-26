/**
 * No deberíamos poder detonar una bomba más de una vez.
 * Añade un método once al eventManager que suscriba un
 * callback que se ejecutará sólo la primera vez que se
 * emita ese evento.
 */

const EventManager = require("./09-ejercicio-observable-I");

class EventManagerOnce extends EventManager {
    constructor() {
        super();
    }

    once(topic, onceCallback) {
        const l = () => {
            onceCallback()
            this.off(topic, l)
        }
        super.on(topic, l)
    }
}

const eventManagerOnce = new EventManagerOnce();

const callback = () => {
    console.log("explosion");
    console.log("smoke");
};

eventManagerOnce.once("detonate", callback);
eventManagerOnce.emit("detonate");
// Logs recibidos:
// - smoke
// - explosion

eventManagerOnce.emit("detonate");
// Sin logs
