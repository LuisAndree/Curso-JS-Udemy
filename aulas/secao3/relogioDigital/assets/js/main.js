/* 1° forma de resolver ultilizando switch case
    function MontaRelogioDigital() {

    const resultado = document.querySelector('.resultado')

    const data = new Date()

    function getDiaDaSemana(data) {
        switch (data.getDay()) {
            case 0:
                diaSemanaTexto = 'domingo'
                return diaSemanaTexto
            case 1:
                diaSemanaTexto = 'segunda-feira'
                return diaSemanaTexto
            case 2:
                diaSemanaTexto = 'terça-feira'
                return diaSemanaTexto
            case 3:
                diaSemanaTexto = 'quarta-feira'
                return diaSemanaTexto
            case 4:
                diaSemanaTexto = 'quinta-feira'
                return diaSemanaTexto
            case 5:
                diaSemanaTexto = 'sexta-feira'
                return diaSemanaTexto
            case 6:
                diaSemanaTexto = 'sabado'
                return diaSemanaTexto
            default:
                diaSemanaTexto = 'Erro'
                return diaSemanaTexto
        }
    }

    function getMes(data) {
        switch (data.getMonth()) {
            case 0:
                return 'janeiro'
            case 1:
                NomeMes = 'fevereiro'
                return NomeMes
            case 2:
                NomeMes = 'março'
                return NomeMes
            case 3:
                NomeMes = 'abril'
                return NomeMes
            case 4:
                NomeMes = 'maio'
                return NomeMes
            case 5:
                NomeMes = 'junho'
                return NomeMes
            case 6:
                NomeMes = 'julho'
                return NomeMes
            case 7:
                NomeMes = 'agosto'
                return NomeMes
            case 8:
                NomeMes = 'setembro'
                return NomeMes
            case 9:
                NomeMes = 'outubro'
                return NomeMes
            case 10:
                NomeMes = 'novembro'
                return NomeMes
            case 11:
                NomeMes = 'dezembro'
                return NomeMes
            default:
                NomeMes = 'Erro'
                return NomeMes
        }
    }

    function zeroAEsquerda(num) {
        if (num < 10) {
            return '0' + num
        } else {
            return num
        }
    }

    resultado.innerHTML = `<p><strong>${getDiaDaSemana(data)}, ${data.getDate()} de ${getMes(data)} de ${data.getFullYear()} <br>
    ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}<strong></p>`
}

MontaRelogioDigital() */

// 2° usando arrays
function MontaRelogioDigital() {

    const resultado = document.querySelector('.resultado')

    const data = new Date()

    function getDiaDaSemana(data) {
        const diaSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sabado']
        return diaSemana[data]
    }

    function getMes(data) {
        const nomeMes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
        return nomeMes[data]

    }

    function zeroAEsquerda(num) {
        return num > 10 ? num : '0' + num
    }

    resultado.innerHTML = `<p><strong>${getDiaDaSemana(data.getDay())}, ${data.getDate()} de ${getMes(data.getMonth())} de ${data.getFullYear()} <br>
    ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}<strong></p>`

}
MontaRelogioDigital()

/* 3° maneira de resolver, ultilizando os recursos da linguagem vistos na documentação // a preferencia é usar os recursos nativos da linguagem
const resultado = document.querySelector('.resultado')
const data = new Date()
resultado.innerHTML = data.toLocaleString('pt-BR' ,{ dateStyle: 'full', timeStyle: 'short' })
*/