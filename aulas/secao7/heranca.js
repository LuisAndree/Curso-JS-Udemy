class DispositivoEletronico {
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + 'ja ta ligado')
        }
        return this.ligado = true
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + 'ja ta desligado')
        }
        return this.ligado = false
    }

}

const d1 = new DispositivoEletronico('lampada')
d1.ligar()
console.log(d1)

class Smartphone extends DispositivoEletronico {
    
    constructor(nome, marca){
        super(nome);
        this.marca = marca
    }
}
const d2 = new Smartphone('c12', 'samsung')
console.log(d2)
