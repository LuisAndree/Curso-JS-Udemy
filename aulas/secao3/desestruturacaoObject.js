const pessoa = {
    nome: 'Luis',
    sobrenome: 'Andre',
    idade: 26,
    endereco: {
        rua: '6',
        numero: '20'
    }
}

console.log(pessoa.nome)

// atribuição via desestruturação
//const { nome } = pessoa  // exrtrai do objeto pessoa o atributo nome e ja cria uma variavel de msm nome
//console.log(nome)

//const { nome = 'valor padrao', sobrenome, idade } = pessoa // ao passar um valor padrao, se o campo nao existir no objeto ele atribui esse valor padrao// tbm funciona no array
//console.log(nome, sobrenome, idade)

const { nome: novoNome = 'valor padrao', sobrenome, idade } = pessoa // podemos tbm recriar o nome da nova variavel assim, passa a chave: novoNomeVariavel 
console.log(novoNome, sobrenome, idade)

//const { endereco: {rua, numero}, endereco} = pessoa // endereco: {rua, numero} pega os campos especificos de endereco // endereco pega o objeto completo
//console.log(rua, numero, endereco)

const { endereco: { rua: r = 12345, numero: n = 54321}, endereco} = pessoa 
console.log(r, n, endereco)

const {nome, ...resto} = pessoa 
console.log(resto)