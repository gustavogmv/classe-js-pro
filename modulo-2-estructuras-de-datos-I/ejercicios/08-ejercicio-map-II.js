/**
 * Realiza las siguientes transformaciones.
 */

function getAcronyms(list) {
    return list.map(str => str.split(" ").map(s=>s.charAt(0)).join(""))
}

console.log(getAcronyms(["lorem ipsum dolor", "hello world"])); // ["lid", "hw"]

function getNames(list) {
    return list.map(name => name.name)
}

console.log(getNames([{name: "Alberto"}, {name: "Fran"}])); // ["Alberto", "Fran"]
