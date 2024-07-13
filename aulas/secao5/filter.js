// retorne um array com os numeros maiores q 10
const nums = [1, 2, 3, 4, 5, 6, 34, 56, 45, 62, 35234, 456, 678, 8645, 3242]

// array.filter((valor, indice, array))
// O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
function callbackFunction(elemento, indice, array) {
    if (elemento > 10) {
        return true
    } else {
        return false
    }
}
const numerosFiltrados = nums.filter(callbackFunction)
console.log(numerosFiltrados)

console.log('########################################')
//forma curta usando arrow function () =>
console.log(nums.filter(elemento => elemento > 10))

console.log('########################################')

const pessoas = [ 
{nome: 'Luis', idade: 26},
{nome: 'Andre', idade: 27},
{nome: 'Leticia', idade: 20},
{nome: 'Cely', idade: 21},
{nome: 'Maria', idade: 2},
{nome: 'Marta', idade: 3},
{nome: 'Claudio', idade: 51},
{nome: 'Iracely', idade: 50},
{nome: 'Tavares', idade: 25},
{nome: 'Silva', idade: 23}
]

function callbackFunction(obj, indice, array) {
    if (obj.idade < 18) {
        return true
    } else {
        return false
    }
}

const pessoasMenorDeIdade = pessoas.filter(callbackFunction) 
console.log(pessoasMenorDeIdade)

console.log('########################################')

const nomeTerminaEmA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
console.log(nomeTerminaEmA)