const objetoLiteral = {
    chave: 'valor',
    chave2: 'valor2'
}

console.log(objetoLiteral.chave)
console.log(objetoLiteral['chave']) // dessa forma é boa para acessar valores dinamicos e expreçoes

const pessoa = new Object()
pessoa.nome = 'Luis'
pessoa.sobrenome = 'Andre'
pessoa.idade = 26
console.log(pessoa)
delete pessoa.sobrenome
console.log(pessoa)

// Metodos sao funcoes dentro do objeto 

pessoa.falaNome = function () {
    console.log(`${this.nome} esta executando um metodo de falar oi`)
}
pessoa.falaNome()

pessoa.getDataNascimento = function () {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - pessoa.idade
}

console.log(pessoa.getDataNascimento())

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`)
}

// moldes de objetos -> fatory functions // constructor functions // Classes

// factory

function fabricaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {  // sem o get tbm funciona mas nao acessamos usando pessoa1.nomeCompleto, precisa dos () -> pessoa1.nomeCompleto() 
            return `${this.nome} ${this.sobrenome}`
        }
    }
}
const pessoa1 = fabricaPessoa('Andre', 'Silva')
console.log(pessoa1.nomeCompleto)

// constructor

function CriaPessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    // Object.freeze(this) usado para travar o objeto, nenhum valor por referencia podera ser motificado 
}

const pessoa2 = new CriaPessoa('Luis', 'Tavares')
console.log(pessoa2)



