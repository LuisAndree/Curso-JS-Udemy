// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

const tresHoras = 60 * 60 * 1000 * 3 // para corrigir o fuso horario
const umaHora = 60 * 60 * 1000 
const umDia = 24 * 60 * 60 * 1000 
// const data = new Date(0 + tresHoras + umDia) //retorna a data e hora em milesegundos, quando passamos 0 retornara o marco 0 unix q é 01/01/1970 as 00:00 so q com 3 hrs a menos por causa do fuso horario
const data = new Date(2024, 4, 23, 23, 59, 59, 999) // ano, mes-1(pq o array de meses janeiro é 0), dia, horas, minutos, segundos, milesimos. aaaa, mm, dd, 23, 59, 59, 999.
// const data = new Date('2024-04-23 21:25:59')
console.log('Dia', data.getDate())
console.log('Mes', data.getMonth() + 1) // 0 é janeiro ... 11 dezembro
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('Ms', data.getMilliseconds())
console.log('Dia semana', data.getDay()) // 0-domingo ... 6-sabado
console.log(Date.now()) // retorna a data em milisegundos desde o marco 0
console.log(new Date(1716510872503)) // a mesma data que foi pegada em cima em milesegundos
console.log(data.toString())

// formatando uma data

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth() + 1)
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())
    const seg = zeroAEsquerda(data.getSeconds())
    return  `${dia}/${mes}/${ano} - ${hora}:${min}:${seg}`
}

const data2 = new Date() 
const dataBrasil = formataData(data2)
console.log(dataBrasil)

function diasRestantesNoAno() {
    const hoje = new Date(); // Data atual
    const anoAtual = hoje.getFullYear(); // Ano atual
    const ultimaDataAno = new Date(anoAtual, 11, 31); // 31 de dezembro do ano atual

    // Calcula a diferença em milissegundos entre a última data do ano e a data atual
    const diferencaMilissegundos = ultimaDataAno - hoje;

    // Converte a diferença de milissegundos para dias
    const umDiaEmMilissegundos = 1000 * 60 * 60 * 24;
    const diasRestantes = Math.ceil(diferencaMilissegundos / umDiaEmMilissegundos);

    return diasRestantes;
}

// Exemplo de uso
console.log(`Faltam ${diasRestantesNoAno()} dias para o final do ano.`);

function diasNoAnoAtual() {
    const anoAtual = new Date().getFullYear();
    
    // Verifica se o ano é bissexto
    const eBissexto = (ano) => {
        if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
            return true;
        }
        return false;
    };

    // Retorna 366 dias se o ano for bissexto, caso contrário 365 dias
    return eBissexto(anoAtual) ? 366 : 365;
}

// Exemplo de uso
console.log(`O ano atual tem ${diasNoAnoAtual()} dias.`);

