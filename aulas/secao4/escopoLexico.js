const nome = 'luis'

function falaNome() {
    const nome = 'Tavares' // caso nao existice essa const, o valor retornado seria 'luis' da const de escopo global
    return console.log(nome) // vai sempre buscar o valor nome mais proximo, de dentro pra fora, da função mais proxima q o contem ate acessar o valor de escopo global
}

function ChamaFalaNome() {
    const nome = 'Andre' // esta const nao esta sendo usada pq esta funcao tem o msm escopo que falaNome, logo essa const esta inacecivel a falaNome. 
    falaNome()
}

ChamaFalaNome()