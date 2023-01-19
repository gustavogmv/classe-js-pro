function createSalutation() {
    const name = "Homer"
    const date = Date.now()

    return function salute(){
        console.log("Hello %s@%s",name,date)
    }
}

const s1 = createSalutation()

const s2 = createSalutation()
s1()
s2()