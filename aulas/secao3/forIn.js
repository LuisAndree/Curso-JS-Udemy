const frutas = ['pera', 'uva', 'maçã']

for (i in frutas) {
    console.log(frutas[i])
}

const pessoa = {
    nome: 'Luis',
    sobrenome: 'andre', 
    idade: 26
}

for (chave in pessoa) {
    console.log(chave, pessoa[chave])
}