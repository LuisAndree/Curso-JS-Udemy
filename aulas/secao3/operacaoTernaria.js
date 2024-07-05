// (condicao) ? 'valor para true' : 'valor para false'

const pontuacaoUsuario = 500
const usuarioEVip = pontuacaoUsuario >= 1000 ? 'Usuario Vip' : 'Ususario Normal'

const corUsuario = null
const corPadrao = corUsuario || 'Cor Preta' 

console.log(usuarioEVip, corPadrao)

