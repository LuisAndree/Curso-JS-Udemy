function pegaDadosFormulario() {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')
    const pessoas = []  

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome-pessoa')
        const sobrenome = form.querySelector('.sobrenome-pessoa')
        const idade = form.querySelector('.idade-pessoa')
        const peso = form.querySelector('.peso-pessoa')
        const altura = form.querySelector('.altura-pessoa')

        console.log(nome.value, sobrenome.value, idade.value, peso.value, altura.value)

        pessoas.push( {
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas)

        resultado.innerHTML += `<p>${nome.value} <br> ${sobrenome.value} <br> ${idade.value} <br> ${peso.value} <br> ${altura.value}</p>`

    }

    form.addEventListener('submit', recebeEventoForm)
}

pegaDadosFormulario()