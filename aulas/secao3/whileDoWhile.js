function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

const min = 1
const max = 50
let rand = random(min, max)

while (rand !== 10) {
    rand = random(min, max)
    console.log(rand)
}

console.log('#######')

do {                            // do while vai sempre executar 1 vez e parar quando a condição for verdadeira
    rand = random(min, max)
    console.log(rand)
} while (rand !== 10);