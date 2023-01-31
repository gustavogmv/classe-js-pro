const fs = require("fs")
const path = require("path")
const asyncMap = require("./12-ejercicio-asyncmap-I")


function calculateDirSize(dir, callback) {

    fs.readdir(dir, (error, fileList) => {
        if (error) throw error
        const files = fileList.map((file) => path.resolve(dir, file))

        function mapFileToSize(file, done) {
            fs.stat(file, (error, stats) => {
                if (error) throw error
                done(stats.size)
            })
        }

        function onListMapped(list) {
            console.log("Array Mapped==> ", list)
            const sum = list.reduce((total, n) => total + n, 0);
            callback(sum);
        }

        asyncMap(files, mapFileToSize, onListMapped)
    })
}

function calculateDirSizeAsync(dir, callback) {

    fs.readdir(dir, (error, fileList) => {
        if (error) throw error
        const files = fileList.map((file) => path.resolve(dir, file))

        async function mapFileToSize(file) {
            const stats = await fs.promises.stat(file)
            return stats.size
        }

        function onListMapped(list) {
            console.log("Array Mapped==-=> ", list)
            const sum = list.reduce((total, n) => total + n, 0);
            callback(sum);
        }

        asyncMap(files, mapFileToSize, onListMapped)
    })
}

calculateDirSize("../../ejercicio-final", (size) => console.log("TOTAL SIZE: ", size))
calculateDirSizeAsync("../../ejercicio-final", (size) => console.log("TOTAL SIZE ASYNC: ", size))