/*
Primitivos (imutaveis) - string, number, boolean, undefined, null, (bigint, symbol) - valores copiados 
*/

let a = 'a'
let b = a // faz uma copia do valor da variavel a para b
console.log(a, b)

a = 'outra coisa' // quando o valor de a é alterado, o de b não é 
console.log(a, b)

/*
Referência (mutável) - array, object, function - valores passados por referencia
*/

let c = [1, 2, 3]
let d = c         // d recebe oq tem na memoria de c, d referencia c
console.log(c, d)

c.pop();           // quando alterarmos o valor de c, o valor de d tbm sera alterado
console.log(c, d)

let e = [...c] // forma de copiar um valor q é passado por referencia 
c.pop()
console.log(c, e)

const pessoa = {
    nome: 'Andre',
    sobrenome: 'Silva'
}

const pessoa2 = pessoa // valor passado por referencia
console.log(pessoa2)
pessoa.nome = 'Luis' 
console.log(pessoa2) 
const pessoa3 = {...pessoa} // valor copiado
console.log(pessoa3)
pessoa.nome = 'Joao'
console.log(pessoa, pessoa3)

