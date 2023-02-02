/**
 * Añade el patron iterador al prototipo String, para poder iterar luego sobre
 * los caracteres de esa cadena de texto.
 */

function* generator() {
    let charIndex = 0
    while(charIndex < this.valueOf().length) yield this.charAt(charIndex++)
}

String.prototype[Symbol.iterator] = generator;

const string = "CLASSE";

// Deberian hacerse 6 iteraciones, cada una proporciona una letra
for (const char of string) {
    console.log(char);
}
