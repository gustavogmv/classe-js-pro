function asyncMap(list, transformer, callback) {
    const result = []
    list.forEach((element, index) => {
        transformer(element, (value) => {
            result[index] = value
            if (list.length === result.length) {
                callback(result)
            }

            console.log(JSON.stringify(result, null, 2))
        })
    })
}

module.exports = asyncMap