// objeto literal
const pessoa = {
    nome: 'luis',
    sobrenome: 'Silva', 
    idade: 26
}

console.log(pessoa.nome)
console.log(pessoa.sobrenome)
console.log(pessoa.idade)

//funçao factory - cria objetos
/*
function criaPessoas(nome, sobrenome, idade) {
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}
*/
function criaPessoas(nome, sobrenome, idade) { // é a mesma coisa da funcao acima
    return{
        nome,
        sobrenome,
        idade
    }
}

const outraPessoa = criaPessoas('Andre', 'Tavares', 27)
console.log(outraPessoa)

const pessoa1 = {
    nome: 'luis',
    sobrenome: 'Silva', 
    idade: 26,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} esta falando oi!!`) // o this significa que estamos pegando o valores da pessoa um, nesse contexto
    },

    maiorIdade() {
        console.log(this.idade >= 18)
    }
}

pessoa1.fala()
pessoa1.maiorIdade()