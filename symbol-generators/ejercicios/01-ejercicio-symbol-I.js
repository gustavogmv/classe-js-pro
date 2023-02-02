/**
 * Implementa una clase con dos propiedades que usen simbolos.
 * - La primera propiedad, debe almacenar el nombre del usuario.
 * - La segunda propiedad, debe almacenar el apellido.
 * - Debe poder almacenarse datos en estas propiedades a traves de setters ("name" y "lastname")
 * - El getter "fullname" debe devolver concatenado el nombre completo (nombre + apellido)
 * - El nombre y el apellido nunca seran accesibles de manera independiente (no hacen falta getters para los mismos.)
 */

const NAME_PROP = Symbol("Name");
const LASTNAME_PROP = Symbol("Last Name");

class User {
    // ? Propiedad privada name
    [NAME_PROP] = null;
    // ? Propiedad privada lastname
    [LASTNAME_PROP] = null;

    set name(value) {
        this[NAME_PROP] = value
    }

    set lastname(value) {
        this[LASTNAME_PROP] = value
    }

    get fullname() {
        return this[NAME_PROP] + " " + this[LASTNAME_PROP]
    }
}

const user = new User();

user.name = "John";
user.lastname = "Doe";

console.log(user.name); // undefined
console.log(user.lastname); // undefined
console.log(user.fullname); // "John Doe"
