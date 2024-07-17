function Produto(nome, preco) {
    this.nome = nome,
    this.preco = preco
}

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

function Camisa(nome, preco, cor) {
    Produto.call(this, nome, preco) // call pode pega esses argumentos na funcao Produto
    this.cor = cor 
}

Camisa.prototype = Object.create(Produto.prototype) // criamos um objeto vazio com o prototype de Produto e atribuimos o prototype desse objeto ao prototype de Camisa
Camisa.prototype.constructor = Camisa               // Camisa herda o constructor de Produto, por isso temos que mudar o contructor de Camisa para Camisa 

const c1 = new Camisa('camisa', 100, 'preta')
console.log(c1)
c1.aumento(10)
console.log(c1)

function Farda(nome, preco, cor, instituicao) {
    Camisa.call(this, nome, preco, cor)
    Object.defineProperty(this, 'intituicao', {
        enumerable:true,
        configurable: true,
        get: function() {
            return instituicao
        },
        set: function(nomeInstituicao) {
            instituicao = nomeInstituicao
        }
    })
}

Farda.prototype = Object.create(Camisa.prototype)
Farda.prototype.constructor = Farda

const f1 = new Farda('camisa', 100, 'preta', 'bope')
console.log(f1)
f1.aumento(50)
f1.instituicao = 'PM'
console.log(f1.instituicao)

