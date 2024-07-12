//FACTORY FUNCTION
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        //setter  setters nao precisam retornar nenhum valor
        set nomeCompleto(valor) {
            const nomeCompleto = valor.split(' ')
            const nome = nomeCompleto.shift()
            const sobrenome = nomeCompleto.join(' ')
            this.nome = nome
            this.sobrenome = sobrenome
        },
        fala(assunto) {                             // funcao dentro de um objeto é metodo, uma ação executada pelo objeto
            return `${this.nome} ${this.sobrenome} está ${assunto}`   // this aqui serve para especificar que queremos o nome e sobrenome que esta nesse objeto 
        },                                          // Quando uma função é chamada como um método de um objeto, seu this toma o valor do objeto pertencente ao método chamado.
        altura,
        peso,
        // getter, é um metodo que serve apenas para retornar um valor 
        get imc() {
            return `Seu IMC é: ${(this.peso / (this.altura ** 2)).toFixed(2)}`  
        }
    }
}

const p1 = criaPessoa('Andre', 'Silva', 1.66, 67)
const p2 = criaPessoa('Maria', 'Marta', 0.50, 15)
console.log(p1.fala('falando sobre JS'))
console.log( p1.imc) // nao precisamos mais dos () para executar esse metodo pois é um getter

p2.nomeCompleto = 'Leticia Cely Tavares'
console.log(p2.fala('falando eguagem'))



