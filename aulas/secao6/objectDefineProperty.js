//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable: true,  // mostra a chave
        value: estoque,       // o valor
        writable: true,    // se pode alterar
        configurable: true // configuravel 
    })

    Object.defineProperties(this, { // mesmo de antes so q podem ser mas properties
        nome: {
            enumerable: true,  
            value: nome,       
            writable: true,    
            configurable: true  
        },
        preco: {
            enumerable: true,  
            value: preco,       
            writable: true,    
            configurable: true 
        }
    })
}

// configurable
// true se e somente se o tipo deste descritor de propriedade pode ser alterado e se a propriedade pode ser deletada do objeto correspondente. Valor padrão é false.

// enumerable
// true se e somente se esta propriedade aparece durante enumeração das propriedades no objeto correspondente. Valor padrão é false.

// value
// O valor associado com a propriedade. Pode ser qualquer valor válido em Javascript (número, objeto, função, etc). Valor padrão é undefined.

// writable
// true se e somente se o valor associado com a propriedade pode ser modificada com um operador de atribuição. Valor padrão é false.

// faça testes
const p1 = new Produto('pc', 2000, 10)
console.log(p1.nome)
console.log(p1.preco)
console.log(p1.estoque)
console.log(p1)


