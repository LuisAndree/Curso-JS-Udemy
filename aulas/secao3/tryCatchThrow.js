// serve para tratamento de erros, funciona similar ao if else 

try {
    console.log(naoExisto)
} catch (error) {
    console.log('Deu erro, a variavel nao existe')
    //console.log(error) // nao é aconselhavel deixar para o usuario final -> apenas para desenvolvimento
}

soma = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceErrorError('Todos os numeros precisam ser tipo number') // sem o new ReferenceError/Error ia mandar so a string
    }
    return x + y

}

try {
    console.log(soma(1, 2))
    console.log(soma('1', 2))
} catch(error) {
    console.log(error) // nao recomendado passar para o usuario final
    console.log('Alguma coisa mais amigavel para o usuario')
}
