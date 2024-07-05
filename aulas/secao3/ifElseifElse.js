// if pode ser usado sozinho
// sempre q usar um else, preciso de um if antes
// posso ter varios else if na checagem
// so pode ter um else e deve ser a ultima condicao
// pode ter condicoes sem else if, apenas com if e else

const hora = 10
if (hora >=0 && hora < 12) {
    return console.log('bom dia')
} else if (hora >= 12 && hora < 18) {
    return console.log('boa tarde')
} else if (hora >= 18 && hora < 24) {
    return console.log('boa noite')
} else {
    return console.log('Erro')
}
