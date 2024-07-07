const pessoa1 = ['Luis', 'andre', '26']

for (chave in pessoa1) {
    console.log(chave, pessoa1[chave])
}

const pessoa2 = ['Luis', 'andre', '26']

for (valor of pessoa2) {
    console.log(valor)
}

// mesma coisa q o for in porem retorna os valores e nao os indices
// nao funciona para objetos pq nao sao interaveis, nao possuem indices

// for classico - geralmente interaveis (array ou strings)
// for in - retorna o indice ou chave (array, string ou objetos)
// for of - retorna o valor em si (interaveis, array e strings)

//bonus forEach()

pessoa2.forEach((valor, indice, array) =>
    console.log(valor, indice, array)) 