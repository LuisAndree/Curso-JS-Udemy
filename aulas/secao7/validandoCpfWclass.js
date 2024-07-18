class ValidaCpf {
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            get: function () {
                return cpfEnviado.replace(/\D+/g, '')
            }
        })
    }
    valida = function () {
        if (typeof this.cpfLimpo === 'undefined') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false;
    
        const cpfParcial = this.cpfLimpo.slice(0, -2)
        const digito1 = ValidaCpf.criaDigito(cpfParcial);
        const digito2 = ValidaCpf.criaDigito(cpfParcial + digito1);
    
        const novoCpf = cpfParcial + digito1 + digito2;
        return novoCpf === this.cpfLimpo;
    }

    static criaDigito = function (cpfParcial) {
        const cpfArray = Array.from(cpfParcial)
    
        let regressivo = cpfArray.length + 1;
        const total = cpfArray.reduce((ac, val) => {
            ac += (regressivo * Number(val));
            regressivo--;
            return ac;
        }, 0);
    
        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }

    isSequencia = function() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
      };
}

const cpf1 = new ValidaCpf('611.490.743-45')

if(cpf1.valida()) {
    console.log('Cpf válido');
  } else {
    console.log('Cpf inválido');
  }