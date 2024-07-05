const alunos = ['luis', 'andre', 'maria', 1, true, null] // aceita qualquer tipod e valor porem nao é uma boa pratica
console.log(alunos)
const alunos2 = ['luis', 'andre', 'maria']
console.log(alunos2)
console.log(alunos2[0]) // pega o elemento espeifico
alunos2[0] = 'ticia' // edita o elemento
console.log(alunos2)
alunos2[3] = 'luis' // cria um elemento se nao existir elemento nesse indice
console.log(alunos2)
alunos2[alunos2.length] = 'joao' // adiciona um elemento ao final do array
console.log(alunos2)
alunos2.push('catarina')  // adiciona um elemento ao final do array // melhor forma
console.log(alunos2)
alunos2.unshift('felipe')  // adiciona um elemento no começo do array, no indice 0 // melhor forma
console.log(alunos2)
const removido = alunos2.pop()  // remove o ultimo elemento do array // retorna o elemento removido tbm
console.log(alunos2)
console.log(removido)
const removido2 = alunos2.shift()  // remove o peimeiro elemento do array // retorna o elemento removido tbm
console.log(alunos2)
console.log(removido2)
delete alunos2[1] // deleta o elemento do indice especificado
console.log(alunos2)
console.log(alunos2[1]) // o valor fica undefined
console.log(alunos2[399]) // tbm é undefined se acessar um indice q nao existe porem nao retorna erro
alunos2.push('fernanda')
alunos2.push('emersom')
console.log(alunos2)
console.log(alunos2.slice(0, -2)) // fatia o array, o -2 significa q vai retornar todos os elementos menos os 2 ultimos
console.log(typeof(alunos2)) // os arrays sao tipo objeto
console.log(alunos2 instanceof Array) // assim da pra saber se é um array msm
console.log(alunos.join(' ')) // serve para separar os valores do array e concatenalos em uma string