const objA = {
    chaveA: 'A'
}

const objB = {
    chaveB: 'B'
}

Object.setPrototypeOf(objB, objA)

console.log(objB.chaveA)

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumeto = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('guitarra', 3000)
p1.desconto(100)
console.log(p1)

//Literal
const p2 = {
    nome: 'baixo',
    preco: 5000
}

Object.setPrototypeOf(p2, Produto.prototype) // p1
p2.aumeto(10)
console.log(p2)

const p3 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'bateria'
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 10000
    },
    marca: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Pearl'
    }
})

p3.desconto(50)
console.log(p3)