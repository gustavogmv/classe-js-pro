require("process")

console.log("Node.js version:", process.version)
//
// const futureValue = (value, time) => new Promise((resolve) => setTimeout(() => resolve(value), time))
//
// futureValue(1, 1000).then(() => futureValue(15, 500)).then(value => console.log("value:", value))
// futureValue(1, 1000).then(value => console.log("Value ", value))
//
// const p = new Promise((resolve, reject) => {
//     throw new Error('Errorrrrrrrrrrrrrrrrrr!')
// })
//
// p.then(() => console.log("...1"))
//     .then(() => console.log("...2"))
//     .then(() => console.log("...3"))
//     .catch(() => console.log("Something bad happened!!!"))
//     .then(() => console.log("Alll under control"))

function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                if (userId % 2) {
                    resolve({
                            id: userId,
                            user: "Pepe"
                        }
                    )
                } else {
                    reject(userId + "Not Found!!!")
                }
            }
            , 1000)
    })
}

function getUsers(userIds) {
    return new Promise((resolve) => {
        const promises = userIds.map(id => fetchUser(id))
        Promise.allSettled(promises).then(users => resolve(users))
    })
}

getUsers([1, 2, 3]).then(console.log)