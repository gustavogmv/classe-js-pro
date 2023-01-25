const fs = require("fs")
const path = require("path")


function calculateDirSize(dir, callback) {
    let dirSize = 0
    fs.readdir(dir, (error, result) => {
        if(error) throw error
        const files = result.map((file) => path.resolve(dir, file))
        fs.stat(files[0], (error, result) => {
            dirSize += result.size
            fs.stat(files[1], (error, result) => {
                dirSize += result.size
                callback(dirSize)
            })
        })
    })
}

calculateDirSize("../../ejercicio-final", (size) => console.log(size))