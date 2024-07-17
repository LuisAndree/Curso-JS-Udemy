const _velocidade = Symbol()
class Carro {
    constructor(nome) {
        this.nome = nome
        this[_velocidade] = 0
    }

    get velocidade() {
        return this[_velocidade]
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return
        if(valor >= 100 || valor <= 0) return
        this[_velocidade] = valor 
    }
    
    acelerar() {
        if(this[_velocidade] >= 100) return
        this[_velocidade]++
    }
}

c1 = new Carro('skyline r34')

c1.velocidade = 99
console.log(c1.velocidade)
