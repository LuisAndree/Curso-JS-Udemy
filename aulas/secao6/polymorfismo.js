function Conta(agencia, conta, saldo) {
    this.agencia = agencia,
    this.conta = conta,
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        return `Saldo Insuficiente: ${this.saldo}`;
    }
    this.verSaldo();
    return this.saldo -= valor
}

Conta.prototype.depositar = function(valor) {
    this.verSaldo();
    return this.saldo += valor
}

Conta.prototype.verSaldo = function() {
    console.log(this.saldo)
}
const conta1 = new Conta('BB', '12345-X', 1000)
console.log(conta1.sacar(500))
console.log(conta1.depositar(400))

function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

CC.prototype = Object.create(Conta.prototype)
CC.prototype.constructor = CC

CC.prototype.sacar = function(valor) {
    if(valor > this.saldo + this.limite) {
        console.log('Atingiu o Limite de transferencia')
        return `Seu saldo é: ${this.saldo} e seu limite é ${this.limite}`
    } 
    this.verSaldo();
    return this.saldo -= valor
}

const cc1 = new CC('Itau', '54321-x', 10000, 50000)
console.log(cc1.sacar(1000))

function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}

CP.prototype = Object.create(Conta.prototype)
CP.prototype.constructor = CP

const cp1 = new CP('Itau', '54321-x', 10000)
console.log(cp1.sacar(11000))