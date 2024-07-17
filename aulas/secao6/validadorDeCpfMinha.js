let cpf = '611.490.743-45'
let cpfLimpo = cpf.replace(/\D+/g, '')
let cont1 = 10
let cont2 = 11
let acumulador1 = []
let acumulador2 = []
cpfArray = Array.from(cpfLimpo)

cpfArray.forEach(function (valor, indice, array) {
    if (cont1 >= 2) {
        acumulador1[indice] = valor * cont1
        cont1--
    }
})

let verificaPrimeiroDigito = (11 - (acumulador1.reduce((acumulador, valor) => acumulador + Number(valor), 0) % 11))
if (verificaPrimeiroDigito > 9) {
    verificaPrimeiroDigito = 0
} 

cpfArray.forEach(function (valor, indice, array) {
    if (cont2 >= 2) {
        acumulador2[indice] = valor * cont2
        cont2--
    }
})

let verificaSegundoDigito = (11 - (acumulador2.reduce((acumulador, valor) => acumulador + Number(valor), 0) % 11))
if (verificaSegundoDigito > 9) {
    verificaSegundoDigito = 0
}


if (verificaPrimeiroDigito === Number(cpfArray[9])) {  
    if (verificaSegundoDigito === Number(cpfArray[10])) {
        console.log('CPF valido')
    } else {
        console.log('CPF invalido')
    }
} else {
    console.log('CPF invalido')
}