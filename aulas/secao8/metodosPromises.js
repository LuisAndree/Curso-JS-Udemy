function aleatorio(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAiPromise(mensagem, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof (mensagem) !== 'string') {
            reject(new TypeError('O VALOR NAO É UMA STRING'))
            return;
        }
        setTimeout(() => {
            resolve(mensagem.toLowerCase() + ' Passei na promise')
        }, tempo)
    })
}

const promises = [
    esperaAiPromise('AOBA, BAO??? 1', aleatorio(1, 3)),
    esperaAiPromise('AOBA, BAO??? 2', aleatorio(1, 3)),
    esperaAiPromise('AOBA, BAO??? 3', aleatorio(1, 3)),
    esperaAiPromise('AOBA, BAO??? 4', aleatorio(1, 3)),
    esperaAiPromise('AOBA, BAO??? 5', aleatorio(1, 3)),
    esperaAiPromise('AOBA, BAO??? 6', aleatorio(1, 3)),
    esperaAiPromise('AOBA, BAO??? 7', aleatorio(1, 3))
]

// Promise.all()
// Promise.all(promises)
//     .then(valor => console.log(valor))
//     .catch(error => console.log(error))

// // Promise.race()
// Promise.race(promises)
//     .then(valor => console.log(valor))
//     .catch(error => console.log(error))

// Promise.resolve() / Promise.reject()

function baixaPagina() {
    const emCache = true

    if (emCache) {
        return Promise.resolve('Promise resolvida') // so troca ai por reject
    } else {
        return esperaAiPromise('AAAAA', 1000)
    }

}

baixaPagina()
    .then(valor => console.log(valor))
    .catch(error => console.log(error))