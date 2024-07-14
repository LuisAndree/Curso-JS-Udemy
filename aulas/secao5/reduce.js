// sintax -> array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial])
// O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 345, 5453, 123, 431, 43124, 667, 342,]

const total = a1.reduce(function (acumulador, valor, indice, array) {
    acumulador += valor
    console.log(acumulador, valor)
    return acumulador
}, 0) // esse 0 é um valor inicial para o acumulador

console.log(total)

// retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luis', idade: 26 },
    { nome: 'Andre', idade: 27 },
    { nome: 'Leticia', idade: 20 },
    { nome: 'Cely', idade: 21 },
    { nome: 'Maria', idade: 2 },
    { nome: 'Marta', idade: 3 },
    { nome: 'Claudio', idade: 51 },
    { nome: 'Iracely', idade: 50 },
    { nome: 'Tavares', idade: 25 },
    { nome: 'Silva', idade: 23 }
]

const pessoaMaisVelha = pessoas.reduce(function (acumulador, obj) {
    if (acumulador.idade > obj.idade) return acumulador
    return obj
})
console.log(pessoaMaisVelha)

var valorInicial = 0;
var soma = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(
    (acumulador, valorAtual) => acumulador + valorAtual.x,
    valorInicial,
);

console.log(soma); // retorna 6
