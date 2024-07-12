function funcao() { // () temos os parametros // se mandar argumentos e nao tiver parametros, nao da erro, o JS cria uma variavel arguments e guarda esses argumentos
    console.log(arguments) // em JS a variavel arguments contem todos os valores passado como argumentos na chamada da funcao // so serve para funcoes iniciadas com function 
    let soma = 0
    for (let argumento of arguments) {
        soma += argumento
    }
    console.log(soma)
}
funcao(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10) // entre () passamos os argumentos para serem captados pelos parametros da nossa funcao

function funcao2({ nome, sobrenome, idade }) { // recebendo variaveis de objeto e fazendo a desestruturação 
    console.log(nome, sobrenome, idade)
}
let obj = { nome: 'luis', sobrenome: 'andre', idade: 26 }
funcao2(obj)

function funcao3([nome, sobrenome, idade]) { // com arrays
    console.log(nome, sobrenome, idade)
}
let pessoa = ['luis', 'andre', 26]
funcao3(pessoa)

function conta(operador, acumulador, ...numeros) { // usando ...spread, vc pode pegar todos os argumentos q sobram e colocalos em um parametro em formato de array, tem q ser sempre no ultimo parametro 
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero
        if (operador === '/') acumulador /= numero
        if (operador === '*') acumulador *= numero

    }
    console.log(acumulador)
}

conta('+', 0, 20, 30, 40, 50)

const conta2 = function(operador, acumulador, ...numeros){
    for (let numero of numeros) {
    if (operador === '+') acumulador += numero
    if (operador === '-') acumulador -= numero
    if (operador === '/') acumulador /= numero
    if (operador === '*') acumulador *= numero

}
console.log(acumulador)
}; // use ; para esse tipo de funcao 
conta2('+', 0, 20, 30, 40, 50)

const conta3 = (...args) => { // forma de pegar os arguments com arrow function
    console.log(args)
}
conta3('+', 0, 20, 30, 40, 50)