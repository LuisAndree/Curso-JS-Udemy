function aleatorio(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAiPromise(mensagem, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof (mensagem) !== 'string') reject(new TypeError('O VALOR NAO É UMA STRING'))
        setTimeout(() => {
            resolve(mensagem)
        }, tempo)
    })
}

const e1 = esperaAiPromise('Logica', aleatorio(1, 3))

async function executa() {
    try {
        const fase1 = await esperaAiPromise('AOBA, BAO??? 1', aleatorio(1, 3))
        console.log(fase1)
        const fase2 = await esperaAiPromise('AOBA, BAO??? 2', aleatorio(1, 3))
        console.log(fase2)
        const fase3 = await esperaAiPromise(123123, aleatorio(1, 3))
        console.log(fase3)
    } catch (err) {
        console.error(err)
    }

}

executa()

// Estados das promises 
// pending -> promise foi mandanda para o servidor e ainda nao foi resolvida
// fullfilled -> promise resolvida
// reject -> promise rejeitada

