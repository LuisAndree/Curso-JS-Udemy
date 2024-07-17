class DispositivoEletronico {
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }

    // metodo de instancia
    // Chamados em instâncias de uma classe.
    // Podem acessar e modificar os atributos da instância.
    // Utilizam o this para referenciar a instância atual.
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

    // metodo estatico
    // Chamados diretamente na classe.
    // Não podem acessar atributos de instância diretamente (pois não são chamados em uma instância).
    // Úteis para utilitários ou funções que não dependem do estado da instância.
    static somar(x, y) {
        return x + y
    }

}

const d1 = new DispositivoEletronico('lampada')
d1.ligar()

console.log(d1)
console.log(DispositivoEletronico.somar(2, 8))


