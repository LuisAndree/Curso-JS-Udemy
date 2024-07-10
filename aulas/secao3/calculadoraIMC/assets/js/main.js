function pegaDadosFormulario() {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')


    function recebeEventoForm(evento) {
        evento.preventDefault();

        const peso = form.querySelector('.peso-pessoa')
        const altura = form.querySelector('.altura-pessoa')

        console.log(peso.value, altura.value)

        function calculaImc(peso, altura) {
            const resultado = peso / (altura ** 2)
            return resultado
        }

        function checaStatusImc(status) {
            if (status < 18.5) {
                return 'Abaixo do peso'
            } else if (status >= 18.5 && status < 25) {
                return 'Peso normal'
            } else if (status >= 25 && status < 30) {
                return 'Sobrepeso'
            } else if (status >= 30 && status < 35) {
                return 'Obesidade grau 1'
            } else if (status >= 35 && status < 40) {
                return 'Obesidade grau 1'
            } else if (status >= 40) {
                return 'Obesidade grau 3'
            } else {
                return 'Error'
            }
        }

        const calculo = calculaImc(peso.value, altura.value)
        const statusImc = checaStatusImc(calculo)

        resultado.innerHTML += `<p>${calculo.toFixed(2)} ${statusImc}</p>`

    }

    form.addEventListener('submit', recebeEventoForm)
}

pegaDadosFormulario()

