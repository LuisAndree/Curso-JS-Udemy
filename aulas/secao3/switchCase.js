const data = new Date()
const diaSemana = (data.getDay())
let diaSemanaTexto

console.log(diaSemana)

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo'
        break;                      // no 1º break do case que for true o codigo para
    case 1:
        diaSemanaTexto = 'Segunda'
        break;
    case 2:
        diaSemanaTexto = 'Terça'
        break;
    case 3:
        diaSemanaTexto = 'Quarta'
        break;
    case 4:
        diaSemanaTexto = 'Quinta'
        break;
    case 5:
        diaSemanaTexto = 'Sexta'
        break;
    case 6:
        diaSemanaTexto = 'Sabado'
        break;
    default:
        diaSemanaTexto = 'Erro'
        break;
}

console.log(diaSemanaTexto)

function getDiaDaSemana(diaSemana) {  // a função faz o codigo ser mais reutilizavel // importante lembrar q diaSemana é o parametro da função e nao é o mesmo q declarado fora da função
    let diaSemanaTexto // essa variavel esta no escopo da função por isso nao entrou na variavel de mesmo nome q esta em escopo global

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo'
            return diaSemanaTexto
        case 1:
            diaSemanaTexto = 'Segunda'
            return diaSemanaTexto
        case 2:
            diaSemanaTexto = 'Terça'
            return diaSemanaTexto
        case 3:
            diaSemanaTexto = 'Quarta'
            return diaSemanaTexto
        case 4:
            diaSemanaTexto = 'Quinta'
            return diaSemanaTexto
        case 5:
            diaSemanaTexto = 'Sexta'
            return diaSemanaTexto
        case 6:
            diaSemanaTexto = 'Sabado'
            return diaSemanaTexto
        default:
            diaSemanaTexto = 'Erro'
            return diaSemanaTexto
    }

}
console.log(getDiaDaSemana(diaSemana)) // diaSemana q é a variavel de escopo global esta sendo passada como argumento

