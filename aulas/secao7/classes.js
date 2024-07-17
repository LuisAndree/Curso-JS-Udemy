class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(`${this.nome} Falando eguagem`)
    }
    beber() {
        console.log(`${this.nome} Bebendo eguagem`)
    }
    comer() {
        console.log(`${this.nome} Comendo eguagem`)
    }
}

p1 = new Pessoa('Luis', 'Andre')
console.log(p1)
p1.falar()
