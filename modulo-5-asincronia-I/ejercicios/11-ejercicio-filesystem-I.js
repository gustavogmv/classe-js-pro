const fs = require("fs")
const path = require("path")


function calculateDirSize(dir, callback) {
    let dirSize = 0
    let filesCount = 0
    let filesReaded = 0
    fs.readdir(dir, (error, fileList) => {
        if (error) throw error
        const files = fileList.map((file) => path.resolve(dir, file))
        console.log(files)

        filesCount = files.length

        files.forEach((file, index) => {
            console.log("Empezamos operacion asincrona", file, index)

            fs.stat(file, (error, fstats) => {
                if (error) throw error

                filesReaded++
                dirSize += fstats.size

                if(filesReaded === filesCount){
                    callback(dirSize)
                }

                console.log(fstats.size)
            })
        })
    })
}

calculateDirSize("../../ejercicio-final", (size) => console.log("TOTAL SIZE: ", size))