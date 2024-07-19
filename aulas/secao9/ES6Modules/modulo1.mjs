export const nome = 'Luis'
export const sobrenome = 'Andre'

function nomeCompleto(nome, sobrenome) {
    return nome + ' ' + sobrenome
}

export class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome,
        this.sobrenome = sobrenome
    }
}

export default nomeCompleto 