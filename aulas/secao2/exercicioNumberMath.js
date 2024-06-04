const numero = Number(prompt('Digite um numero: '))
const numeroTitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')
const raizQuadrada = document.getElementById('raiz-quadrada')
const verificaInteiro = document.getElementById('verifica-inteiro')
const verificaNaN = document.getElementById('verifica-NaN')
const arredondaBaixo = document.getElementById('arredonda-baixo')
const arredondaCima = document.getElementById('arredonda-cima')
const duasCasasDecimais = document.getElementById('duas-casas-decimais')

numeroTitulo.innerHTML = numero
texto.innerHTML = `seu numero - 2 é ${numero - 2}`
raizQuadrada.innerHTML = `a raiz quadrada é ${numero ** 0.5}`
verificaInteiro.innerHTML = `${numero} é inteiro? ${Number.isInteger(numero)}`
verificaNaN.innerHTML = `${numero} é NaN? ${Number.isNaN(numero)}`
arredondaBaixo.innerHTML = `arredondado para baixo é ${Math.floor(numero)}`
arredondaCima.innerHTML = `arredondado para cima é ${Math.ceil(numero)}`
duasCasasDecimais.innerHTML = `com duas casas decimais é ${numero.toFixed(2)}`
