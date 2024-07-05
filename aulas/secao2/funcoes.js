// fução sem parametro e sem retorno
function saudacao() {
    console.log('Bom Dia!!!')
}

saudacao()

// fução com parametro sem retorno
function saudacao(nome) {   // o parametro nome recebera um argumento passado pela funcao 
    console.log(`Bom Dia!!! ${nome}`)
}

saudacao('luis') // 'luis' é o argumento q sera passado para o parametro

// fução com parametro e com retorno
function saudacao(nome) {
    return (`Bom Dia!!! ${nome}`)
  
}

const jaSaudou = saudacao('luis') 
console.log(jaSaudou)

function soma(x, y) {           
    const resultado = x + y;        // essa const resultado esta em escopo da função
    return resultado;
}

const resultado = soma(3, 5)       // essa esta fora, não são a mesma variavel 
console.log(resultado) 

function raiz(x) {
    return x ** 0.5
}

console.log(raiz(4))
console.log(raiz(16))
console.log(raiz(25))

const rais = n => n ** 0.5; // arrow function
console.log(rais(16))