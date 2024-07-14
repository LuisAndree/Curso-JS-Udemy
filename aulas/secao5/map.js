// O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
// array.map(callback[, thisArg])
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

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

const nomes = pessoas.map(obj => obj.nome)
console.log(nomes)

const idades = pessoas.map(obj => ({ idade: obj.idade })) // remove a chave nome e retorna um objeto apenas com a chave idade
console.log(idades)

const addIds = pessoas.map(function (obj, indice) { // adiciona a chave id e um id correspendente ao indice a cada objeto 
    const newObj = { ...obj }                       // importante lembrar que estamos trabalhando com objetos reais que tem velores modificados por referencia 
    newObj.id = indice                              // para nao alterarmos nosso objeto criamos um novo obj e executamos spread nele com os valores do objeto original 
    return newObj                                   // assim podemos adicionar coisas novas no objeto clone sem alterar o original
})                                                 
console.log(addIds)

