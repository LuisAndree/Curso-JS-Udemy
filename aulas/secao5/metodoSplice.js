//              -8       -7        -6        -5       -4       -3        -2       -1     indices podem ser negativos, significam (quantidade de elementos - indice) do array q no fim da o msm dos indices positivos 
//               0        1         2         3        4        5         6        7
const nomes = ['luis', 'andre', 'tavares', 'silva', 'maria', 'marta', 'leticia', 'cely']

// nomes.splice(indice_manipular, qnt_element_delete, elemento1, elemento2, elemento3...)
//pop
let nomeTirado = nomes.splice(-1, 1) // vai tirar o elemento do ultimo indice q é 7(8-1) do array e retorna um array com esse elemento simula o pop
console.log('simula o pop()', nomeTirado)
console.log(nomes)

nomeTirado = nomes.splice(0, 1) // simula o shift() tira o 1º elemento do array
console.log('simula o shift()', nomeTirado)
console.log(nomes)

nomeTirado = nomes.splice(0, 0, 'yara', 'gustavo') // simula o unshift() adiciona elementos no começo do array
console.log('simula o unshift()', nomeTirado)
console.log(nomes)

nomeTirado = nomes.splice(nomes.length, 0, 'miu') // simula o push() adiciona um elemento no final do array
console.log('simula o push()', nomeTirado)
console.log(nomes)

nomeTirado = nomes.splice(4, 3) // vai tirar os elementos a partir do indice 4, serao 3 elementos tirados, e retorna um array com esses elementos
console.log(nomeTirado)
console.log(nomes)
