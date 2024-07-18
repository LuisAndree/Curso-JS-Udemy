// maneira antiga usando callbacks
function aleatorio(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(mensagem, tempo, cb) {
    setTimeout(() => {
        console.log(mensagem)
        if (cb) cb()
    }, tempo)
}

// esperaAi('AOBA, BAO??? 1', aleatorio(1, 3), function () {
//     esperaAi('AOBA, BAO??? 2', aleatorio(1, 3), function () {
//         esperaAi('AOBA, BAO??? 3', aleatorio(1, 3))
//     })
// })

function esperaAiPromise(mensagem, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof (mensagem) !== 'string') reject(new TypeError('O VALOR NAO É UMA STRING'))
        setTimeout(() => {
            resolve(mensagem)
        }, tempo)
    })
}

esperaAiPromise('AOBA, BAO??? 1', aleatorio(1, 3))
    .then(
        resposta => {
            console.log(resposta)
            return esperaAiPromise('AOBA, BAO??? 2', aleatorio(1, 3))
        })
    .then(
        resposta => {
            console.log(resposta)
            return esperaAiPromise('AOBA, BAO??? 3', aleatorio(1, 3))
        })
    .then(
        resposta => {
            console.log(resposta)
            return esperaAiPromise(12312312, aleatorio(1, 3))
        })
    .catch(
        err => {
            console.log('ERRO: ', err)
        })
