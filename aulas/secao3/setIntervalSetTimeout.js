mostraHora = () => {
    let data = new Date
    return data.toLocaleTimeString()
}

function funcaoDoInterval() {
    console.log(mostraHora())
}
// setInterval vai executar uma funcao por um intervalo de tempo
//setInterval(funcaoDoInterval, 1000) // argumentos(funçao a ser executada sem (), intervalo em ms)

const timer = setInterval(function () {
    console.log(mostraHora())
}, 1000)

setTimeout(function(){
    clearInterval(timer)
}, 10000)

setTimeout(function() {
    console.log('Tempo esgotado')
}, 30000)