export class ValidaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            get: function () {
                return cpfEnviado.replace(/\D+/g, '')
            }
        })
    }
    valida = function () {
        if (typeof this.cpfLimpo === 'undefined') return false
        if (this.cpfLimpo.length !== 11) return false
        if (this.isSequencia()) return false

        const cpfParcial = this.cpfLimpo.slice(0, -2)
        const digito1 = ValidaCpf.criaDigito(cpfParcial)
        const digito2 = ValidaCpf.criaDigito(cpfParcial + digito1)

        const novoCpf = cpfParcial + digito1 + digito2
        return novoCpf === this.cpfLimpo
    }

    static criaDigito = function (cpfParcial) {
        const cpfArray = Array.from(cpfParcial)

        let regressivo = cpfArray.length + 1
        const total = cpfArray.reduce((ac, val) => {
            ac += (regressivo * Number(val))
            regressivo--
            return ac
        }, 0)

        const digito = 11 - (total % 11)
        return digito > 9 ? '0' : String(digito)
    }

    isSequencia = function () {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
        return sequencia === this.cpfLimpo
    }
}


function mostraValidacao() {
    const form = document.querySelector('.form')
    function recebeEventoForm(evento) {
        evento.preventDefault();

        const cpf = form.querySelector('.cpf')
        const cpfCheck = new ValidaCpf(cpf.value)

        const resultado = document.querySelector('.cpfStatus')
        if (cpfCheck.valida()) {
            resultado.innerHTML = 'Cpf válido'
        } else {
            resultado.innerHTML = 'Cpf inválido'
        }
    }

    form.addEventListener('submit', recebeEventoForm)
}
mostraValidacao()
