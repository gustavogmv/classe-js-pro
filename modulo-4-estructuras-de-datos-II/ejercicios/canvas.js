const obj = {
    _historic: [],
    set value(value) {
        this._historic.push(value)
    },
    get value() {
        return this._historic[this._historic.length - 1]
    },
    undo() {
        this._historic = this._historic.slice(0, this._historic.length -1)
    },
}

obj.value = 1
console.log(obj.value)

obj.value = 2
console.log(obj.value)

obj.value = 3
console.log(obj.value)

obj.undo()
console.log(obj.value)