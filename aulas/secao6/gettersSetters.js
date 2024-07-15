//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true,  
        configurable: true,
        get: () => {
            return estoque;
        },
        set: (valor) => {
            console.log(valor)
        }
    })
    
}

const p1 = new Produto('camisa', 30, 7);
p1.estoque = 'SETTOU'
console.log(p1.estoque)