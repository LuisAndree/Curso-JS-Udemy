const produto = { nome: 'Produto', preco: 1.8 };
const caneca = { ...produto, material: 'porcelana' } // Ao usar o spread ... criamos uma copia da const produto,  
                                                     // o valor nao foi passado por referencia. Inclusive podemos
                                                     // criar outras chaves para produto como no exemplo foi criada a chave material.
console.log(produto)
caneca.nome = 'caneca'
console.log(caneca)
console.log(produto)

const camisa = Object.assign( {}, produto, { material: 'algodão'}) // outra maneira de copiar um objeto para outro, podemos passar + de 1 objeto
camisa.nome = 'camisa'
console.log(camisa)
console.log(produto)

console.log(Object.keys(produto))  // mostra as chaves do objeto
console.log(Object.keys(camisa))

console.log(Object.values(produto)) // mostra os valores das chaves do objeto

Object.freeze(produto)  // não deixa o objeto ser alterado
produto.nome = 'calça'
console.log(produto)

console.log(Object.getOwnPropertyDescriptor(produto, 'nome')) // mostra as propriedades da chave passada do objeto

console.log(Object.entries(produto)) // mostra as chaves e os valores em um array para cada chave/valor, podemos interar sobre eles e fazer ate destructure

for (let entry of Object.entries(produto)) { 
    console.log(entry)
}

for (let [chave, valor] of Object.entries(produto)) { // mechemos com as chave e seus valores do objeto produto e desestruturamos o array que ia ser retornado
    console.log(chave, valor)
}

